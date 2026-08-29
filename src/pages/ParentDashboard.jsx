import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function ParentDashboard() {
    const navigate = useNavigate();

    function handleLogout() {
        console.log('Session logout cleared!');
        navigate('/');
    }

    return (
        <div className="min-h-dvh bg-[var(--bg)] text-[var(--text)] flex flex-col">
            <header className="flex items-center justify-between w-4/5 mx-auto py-5 border-b border-[var(--border)]">
                <h1 className="font-bold text-2xl tracking-tight">Parent Dashboard</h1>

                <nav className="flex gap-3">
                    <NavLink to='profile' className='cursor-pointer font-medium rounded-md px-3 py-1.5 bg-[var(--bg-elevated)] hover:bg-[var(--green-dark)] transition-colors'>Profile</NavLink>
                    <NavLink to='settings' className='cursor-pointer font-medium rounded-md px-3 py-1.5 bg-[var(--bg-elevated)] hover:bg-[var(--green-dark)] transition-colors'>Settings</NavLink>
                    <button onClick={handleLogout} className='cursor-pointer font-medium rounded-md px-3 py-1.5 bg-[#3a2a2b] text-[#f0d0d0] hover:bg-[#4a3536] transition-colors'>Logout</button>
                </nav>
            </header>

            <main className="w-4/5 mx-auto py-10">
                <Outlet />
            </main>
        </div>
    );
}
