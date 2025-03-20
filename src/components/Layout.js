'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { LogOut, Home, Users, Briefcase,Edit,View, } from 'lucide-react';

const Layout = ({ children }) => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/home'); 
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white w-64 p-5 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
                <h2 className="text-xl font-bold text-center mb-6">Admin Dashboard</h2>
                <nav className="space-y-4">
                    <Link href="/createjob" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded">
                        <Edit size={20} /> Create Job
                    </Link>

                    <Link href="/admincareerpage" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded">
                        <View size={20} /> View Created Job
                    </Link>
                    <Link href="/appliedjob" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded">
                        <Briefcase size={20} /> View Applied Jobs
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded">
                        <Users size={20} /> Users
                    </Link>
                </nav>
                <div className="mt-auto">
                    <button onClick={handleLogout} className="flex items-center gap-3 p-3 bg-red-600 hover:bg-red-700 rounded w-full">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-4 p-2 bg-gray-800 text-white rounded md:hidden">
                    ☰ Menu
                </button>
                {children}
            </div>
        </div>
    );
};

export default Layout;
