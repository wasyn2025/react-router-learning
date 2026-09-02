import { Plus } from "lucide-react";

export default function DashboardHomePage() {
    return (
        <>
            {/* dashboard page title */}
            <div className="mb-6 text-white flex items-center justify-between" >
                <h1 className="font-medium text-4xl">Dashboard</h1>
                <button className="cursor-pointer rounded-full flex items-center gap-2 p-3 text-zinc-800 bg-purple-300">
                    <Plus size={18} />
                    <span className="text-sm font-medium">Add Job</span>
                </button>
            </div >
        </>
    );
}