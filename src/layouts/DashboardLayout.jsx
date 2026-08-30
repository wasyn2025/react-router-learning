import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { Router, StretchHorizontal, LayoutDashboard, Users, Building, GraduationCap, Shredder, UserMinus, Search, Bell, Plus, ChevronDown, Logs } from "lucide-react";
import BodyContainer from "../components/BodyContainer";

export default function DashboardLayout() {
    const navigation = useNavigate();

    return (
        <BodyContainer overwrite={true} extraClass="min-h-dvh relative">
            <div className="absolute bg-zinc-900 top-0 right-0 left-0 h-[350px] -z-1"></div>
            <div className="py-6 px-8">
                {/* dashboard navigation */}
                <header className="mb-10 flex items-center justify-between w-full border-b border-gray-800">
                    <div className="flex items-center text-white gap-10">
                        <div className="flex items-center gap-3">
                            <StretchHorizontal size={24} />
                            <h1 className="font-medium">Router</h1>
                        </div>
                        <nav className="flex items-center gap-2">
                            <button className="cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3">
                                <LayoutDashboard size={18} />
                                <span>Dashboard</span>
                            </button>
                            <button className="cursor-pointer duration-300 transition-[opacity,background-color] hover:opacity-100 hover:bg-white/20 opacity-80 flex items-center gap-2 text-sm rounded-full py-2 px-3">
                                <Users size={18} />
                                <span>Employee</span>
                            </button>
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
                    <div className="flex items-center text-white gap-3">
                        <button className="cursor-pointer p-4 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center justify-center">
                            <Search size={20} />
                        </button>
                        <button className="cursor-pointer p-4 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center justify-center">
                            <Bell size={20} />
                        </button>
                        <button className="cursor-pointer p-3 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center gap-3">
                            <img
                                className="object-cover rounded-full size-[30px]"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgW8lWPGmrtbj9RRBwYfpepZRX-SQHy6i09CZkhGUkVf7kS78ODXr-tY&s=10"
                                alt="[Put username from url paramter here] profile"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Andrew Niles</span>
                                <ChevronDown size={20} />
                            </div>
                        </button>
                    </div>
                </header>

                {/* dashboard page title */}
                <div className="mb-6 text-white flex items-center justify-between">
                    <h1 className="font-medium text-4xl">Employees</h1>
                    <button className="cursor-pointer rounded-full flex items-center gap-2 p-3 text-zinc-800 bg-purple-300">
                        <Plus size={18} />
                        <span className="text-sm font-medium">Add Employee</span>
                    </button>
                </div>

                {/* dashboard page filter and selection */}
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer py-2 px-3 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center gap-2">
                            <span className="text-sm">New</span>
                            <ChevronDown size={18} />
                        </button>
                        <button className="cursor-pointer py-2 px-3 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center gap-2">
                            <span className="text-sm">Active</span>
                            <ChevronDown size={18} />
                        </button>
                        <button className="cursor-pointer py-2 px-3 rounded-full bg-gray-800 hover:opacity-90 transition-opacity duration-300 opacity-70 flex items-center gap-2">
                            <span className="text-sm">Design</span>
                            <ChevronDown size={18} />
                        </button>
                    </div>
                    <div className="py-2 px-3 rounded-full bg-gray-800 flex items-center gap-2">
                        <button className="cursor-pointer opacity-70 rounded-full p-2 transition-[opacity,background-color,color] duration-300 text-white hover:bg-purple-200 hover:opacity-90 hover:text-zinc-800">
                            <LayoutDashboard size={20} />
                        </button>
                        <button className="cursor-pointer opacity-70 rounded-full p-2 transition-[opacity,background-color,color] duration-300 text-white hover:bg-purple-200 hover:opacity-90 hover:text-zinc-800">
                            <Logs size={20} />
                        </button>
                    </div>
                </div>

                {/* dashboard page table */}
                <div>

                </div>
            </div>
        </BodyContainer>
    );
}