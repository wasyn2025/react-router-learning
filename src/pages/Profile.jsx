export default function Profile() {
    return (
        <section className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
            <h2 className="font-semibold text-xl mb-2">Profile</h2>
            <p className="text-[var(--text-muted)]">This is the Profile child route, rendered inside the parent's Outlet.</p>
        </section>
    );
}
