import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function TablePaginationFooter({
    total = 0,
    current = 1,
    perPage = 13,
    pageCount = 1,
}) {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    const from = total === 0 ? 0 : (current - 1) * perPage + 1;
    const to = Math.min(current * perPage, total);

    return (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
            <div className="flex items-center gap-2">
                <span>Show {perPage} rows</span>
                <ChevronDown size={18} />
            </div>

            <div className="flex items-center gap-1">
                <button
                    className="cursor-pointer rounded-md p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={current === 1}
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft size={18} />
                </button>
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`cursor-pointer min-w-9 h-9 rounded-md px-3 text-sm transition-colors ${
                            page === current
                                ? "bg-purple-300 text-zinc-800 font-medium"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="cursor-pointer rounded-md p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={current === pageCount}
                >
                    <span className="sr-only">Next</span>
                    <ChevronRight size={18} />
                </button>
            </div>

            <div>
                Showing {from} to {to} of {total} rows
            </div>
        </div>
    );
}
