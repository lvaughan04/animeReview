<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc')->paginate(24);
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:60',
            'content' => 'required| max:10000'
        ]);

        $newPost = new Post;
        $newPost->title = $validatedData['title'];
        $newPost->content = $validatedData['content'];
        $newPost->user_id = Auth::id();
        $newPost->save();

        session()->flash('message', 'Post successful');
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::with(['comments.user','user'])->findorFail($id);
        $user = Auth::user();
        
        return Inertia::render('Posts/Show', 
            ['post' => $post, 
            'comments'=>$post->comments, 
            'isAuthor' => $user ? $user->id === $post->user_id : false]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::findOrFail($id);

        if(! Gate::allows('update', $post)){
            return redirect()->route('posts.index', $post)->with('failure', 'Not Authorized to Edit');
        }
        return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = Post::findOrFail($id);

        // Authorization check
        if (Gate::denies('update', $post)) {
            return redirect()->route('posts.index')->with('failure', 'Not Authorized to Edit');
        };

        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();

        return redirect()->route('posts.show', $post)->with('success', 'Post updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
