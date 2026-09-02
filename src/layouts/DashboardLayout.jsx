import { useNavigate, NavLink, Outlet, useParams } from "react-router-dom";
import { Router, StretchHorizontal, LayoutDashboard, Users, Building, GraduationCap, Shredder, UserMinus, Search, Bell, Plus, ChevronDown, Logs, Underline } from "lucide-react";
import BodyContainer from "../components/BodyContainer";
import TablePaginationFooter from "../components/TablePaginationFooter";

export default function DashboardLayout() {
    const navigation = useNavigate();
    const { username } = useParams();

    return (
        <BodyContainer overwrite={true} extraClass="min-h-dvh relative bg-gray-100">
            <div className="absolute bg-zinc-900 top-0 right-0 left-0 h-87.5"></div>
            <div className="py-6 px-8 relative z-1 max-w-[1560px] mx-auto">
                <header className="mb-10 flex items-center justify-between w-full pb-3 border-b border-gray-800">
                    <div className="flex items-center text-white gap-10">
                        <div className="flex items-center gap-3">
                            <StretchHorizontal size={24} />
                            <h1 className="font-medium">Router</h1>
                        </div>

                        {/* list menu page */}
                        <nav className="flex items-center gap-2">
                            <NavLink
                                to={'/dashboard' + (username !== undefined ? `/${username}` : '')}
                                end
                                className={({ isActive }) => {
                                    return `${isActive ? 'bg-white/20 opacity-100' : ''} cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3`;
                                }}
                            >
                                <LayoutDashboard size={18} />
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink
                                to={'/dashboard/employee' + (username !== undefined ? `/${username}` : '')}
                                end={true}
                                className={(isActive) => {
                                    return `${isActive.isActive ? 'cursor-pointer bg-white/20 opacity-100' : ''} duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3`;
                                }}
                            >
                                <Users size={18} />
                                <span>Employee</span>
                            </NavLink>
                            <button className="cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3">
                                <Building size={18} />
                                <span>Jobs</span>
                            </button>
                            <button className="cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3">
                                <GraduationCap size={18} />
                                <span>Candidates</span>
                            </button>
                            <button className="cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3">
                                <UserMinus size={18} />
                                <span>Leaves</span>
                            </button>
                        </nav>
                    </div>

                    {/* addition menu */}
                    <div className="flex items-center text-white gap-3">
                        <button className="cursor-pointer p-4 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center justify-center">
                            <Search size={20} />
                        </button>
                        <button className="cursor-pointer p-4 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center justify-center">
                            <Bell size={20} />
                        </button>
                        <button className="cursor-pointer p-3 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center gap-3">
                            <img
                                className="object-cover rounded-full size-7.5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgW8lWPGmrtbj9RRBwYfpepZRX-SQHy6i09CZkhGUkVf7kS78ODXr-tY&s=10"
                                alt="[Put username from url paramter here] profile"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-sm">{username ?? 'Andrew Williams'}</span>
                                <ChevronDown size={20} />
                            </div>
                        </button>
                    </div>
                </header>

                <Outlet />
            </div>
        </BodyContainer>
    );
}