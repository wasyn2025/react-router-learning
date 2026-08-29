import { NavLink } from "react-router-dom";
import BodyContainer from "../components/BodyContainer";

export default function Login() {
    return (
        <BodyContainer extraClass="bg-[var(--bg)] text-[var(--text)] flex items-center justify-center">
            <div className="w-full max-w-sm p-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
                <h1 className="font-bold text-2xl tracking-tight mb-1">Welcome back</h1>
                <p className="text-[var(--text-muted)] mb-6">Sign in to continue</p>

                <form className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1">
                        <span className="text-sm text-[var(--text-muted)]">Email</span>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="p-2.5 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--green)]"
                        />
                    </label>

                    <label className="flex flex-col gap-1">
                        <span className="text-sm text-[var(--text-muted)]">Password</span>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="p-2.5 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--green)]"
                        />
                    </label>

                    <button type="submit" className="mt-2 cursor-pointer font-medium rounded-md px-5 py-2.5 bg-[var(--green)] text-[var(--bg)] hover:bg-[var(--green-strong)] transition-colors">
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-[var(--text-muted)] mt-6">
                    Back to{" "}
                    <NavLink to='/' className="text-[var(--green)] hover:underline">Home</NavLink>
                </p>
            </div>
        </BodyContainer>
    );
}
