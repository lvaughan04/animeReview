<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

use Inertia\Inertia;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        // $post = Post::with('comments')->findOrFail($id);
        // return Inertia::render('Posts/Show', 
        //     ['post' => $post, 'comments' => $post->comments ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/Show');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $validatedData = $request->validate([
            'content' => 'required|max:255', //255 characters
            'postID' => 'required',
        ]);

        $newComment = new Comment;
        $newComment->content = $validatedData['content'];
        $newComment->post_id = $validatedData['postID'];
        $newComment->user_id = Auth::id();


        $newComment->save();

        session()->flash('message', 'Post successful');
        return redirect()->route('posts.show', $newComment->post_id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $comment = Comment::findOrFail($id);

        if(! Gate::allows('update', $comment)){
            return redirect()->route('posts.show', $comment->post)->with('failure', 'Not Authorized to Edit');
        }
        return Inertia::render('Comments/Edit', ['comment' => $comment]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
