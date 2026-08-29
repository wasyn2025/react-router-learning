import { useParams } from "react-router-dom";

export default function Profile() {
    const { firstName } = useParams();

    console.log(firstName);

    return (
        <section className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
            <h2 className="font-semibold text-xl mb-2">Profile {firstName !== undefined ? `Of ${firstName}` : ''}</h2>
            <p className="text-[var(--text-muted)]">This is the Profile child route, rendered inside the parent's Outlet.</p>
        </section>
    );
}
