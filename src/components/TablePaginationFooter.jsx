import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function TablePaginationFooter({
    total = 0,
    perPage = 13,
    pageCount = 1,
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    const from = total === 0 ? 0 : (currentPage - 1) * perPage + 1;
    const to = Math.min(currentPage * perPage, total);

    function incrementCurrentPage() {
        setCurrentPage(previous => previous + 1);
    }

    function decrementCurrentPage() {
        setCurrentPage(previous => previous - 1);
    }

    return (
        <div className="flex items-center justify-between py-4 text-sm text-gray-600">
            <div className="cursor-pointer flex items-center gap-2 bg-white py-1.5 px-5 rounded-full">
                <span>{perPage} Results per page </span>
                <ChevronDown size={18} />
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={decrementCurrentPage}
                    className="cursor-pointer rounded-md p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={currentPage === 1}
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft size={18} />
                </button>
                {pages.map((page) => (
                    <button
                        onClick={() => setCurrentPage(page)}
                        key={page}
                        className={`cursor-pointer min-w-9 h-9 rounded-full px-5 text-sm transition-colors ${page === currentPage
                                ? "bg-purple-400 text-white font-medium"
                                : "hover:bg-gray-100 border"
                            }`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={incrementCurrentPage}
                    className="cursor-pointer rounded-md p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={currentPage === pageCount}
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
