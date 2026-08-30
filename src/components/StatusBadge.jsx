export default function StatusBadge({ status }) {
    let className = "inline-block rounded-full px-5 py-2 text-sm font-medium";

    if (status === "Active") {
        className += " bg-emerald-100 text-emerald-800";
    } else if (status === "Inactive") {
        className += " bg-purple-50 text-purple-800/80";
    }

    return <span className={className}>{status}</span>;
}
