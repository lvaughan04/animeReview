import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavBarLayout from '@/Layouts/NavBarLayout';

export default function Dashboard({ auth }) {
    return (
        <NavBarLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 text-gray-800">
                            <h2 className="font-semibold text-2xl text-gray-800 leading-tight mb-4">Dashboard</h2>
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </NavBarLayout>
    );
}
