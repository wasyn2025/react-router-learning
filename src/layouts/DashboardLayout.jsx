import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { Router, StretchHorizontal, LayoutDashboard, Users, Building, GraduationCap, Shredder, UserMinus, Search, Bell, Plus, ChevronDown, Logs } from "lucide-react";
import BodyContainer from "../components/BodyContainer";
import StatusBadge from "../components/StatusBadge";
import MoreButton from "../components/MoreButton";
import TablePaginationFooter from "../components/TablePaginationFooter";

export default function DashboardLayout() {
    const navigation = useNavigate();
    const tableData = [
        { id: 1, name: "Alicia Bennett", designation: "Frontend Developer", status: "Active", email: "alicia.bennett@example.com", phone: "+1 555 0101", department: "Engineering", join: "2023-03-14" },
        { id: 2, name: "Marcus Chen", designation: "Backend Developer", status: "Active", email: "marcus.chen@example.com", phone: "+1 555 0102", department: "Engineering", join: "2022-07-01" },
        { id: 3, name: "Sofia Ramirez", designation: "UI/UX Designer", status: "Inactive", email: "sofia.ramirez@example.com", phone: "+1 555 0103", department: "Design", join: "2024-01-22" },
        { id: 4, name: "James Okafor", designation: "Product Manager", status: "Active", email: "james.okafor@example.com", phone: "+1 555 0104", department: "Product", join: "2021-11-09" },
        { id: 5, name: "Priya Sharma", designation: "Data Analyst", status: "Inactive", email: "priya.sharma@example.com", phone: "+1 555 0105", department: "Analytics", join: "2023-06-19" },
        { id: 6, name: "Liam Carter", designation: "DevOps Engineer", status: "Active", email: "liam.carter@example.com", phone: "+1 555 0106", department: "Infrastructure", join: "2022-02-28" },
        { id: 7, name: "Emma Novak", designation: "HR Specialist", status: "Active", email: "emma.novak@example.com", phone: "+1 555 0107", department: "Human Resources", join: "2020-08-15" },
        { id: 8, name: "Noah Patel", designation: "QA Engineer", status: "Inactive", email: "noah.patel@example.com", phone: "+1 555 0108", department: "Quality Assurance", join: "2024-04-03" },
        { id: 9, name: "Olivia Wong", designation: "Marketing Lead", status: "Active", email: "olivia.wong@example.com", phone: "+1 555 0109", department: "Marketing", join: "2021-05-30" },
        { id: 10, name: "Ethan Brooks", designation: "Mobile Developer", status: "Inactive", email: "ethan.brooks@example.com", phone: "+1 555 0110", department: "Engineering", join: "2023-09-12" },
        { id: 11, name: "Ava Thompson", designation: "Content Strategist", status: "Active", email: "ava.thompson@example.com", phone: "+1 555 0111", department: "Marketing", join: "2022-12-05" },
        { id: 12, name: "Lucas Moreau", designation: "Full Stack Developer", status: "Active", email: "lucas.moreau@example.com", phone: "+1 555 0112", department: "Engineering", join: "2024-06-17" },
        { id: 13, name: "Mia Johnson", designation: "Finance Analyst", status: "Inactive", email: "mia.johnson@example.com", phone: "+1 555 0113", department: "Finance", join: "2025-02-10" },
    ];

    return (
        <BodyContainer overwrite={true} extraClass="min-h-dvh relative bg-gray-100">
            <div className="absolute bg-zinc-900 top-0 right-0 left-0 h-87.5"></div>
            <div className="py-6 px-8 relative z-1">
                {/* dashboard navigation */}
                <header className="mb-10 flex items-center justify-between w-full pb-3 border-b border-gray-800">
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
                <div className="mb-7 flex items-center justify-between text-white">
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
                <div className="rounded-2xl overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-sm font-medium text-left">
                                <th className="py-5 px-5 w-12 text-center">
                                    <input type="checkbox" className="rounded cursor-pointer size-4" />
                                </th>
                                <th>Candidate name</th>
                                <th>Designation</th>
                                <th className="w-30">Status</th>
                                <th>Email</th>
                                <th>Mobile number</th>
                                <th>Department</th>
                                <th>Date of joining</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((emp) => (
                                <tr key={emp.id} className="border-b text-gray-700 border-gray-200 bg-white">
                                    <td className="py-5 px-5 text-center">
                                        <input type="checkbox" className="rounded cursor-pointer size-4" />
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="object-cover rounded-full size-8.75"
                                                src={`https://i.pravatar.cc/100?img=${emp.id}`}
                                                alt="user data profile"
                                            />
                                            <span>{emp.name}</span>
                                        </div>
                                    </td>
                                    <td>{emp.designation}</td>
                                    <td><StatusBadge status={emp.status} /></td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp.join}</td>
                                    <td><MoreButton text="More" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <TablePaginationFooter total={13} perPage={13} pageCount={6} />
            </div>
        </BodyContainer>
    );
}