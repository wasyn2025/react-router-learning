import { NavLink } from "react-router-dom";
import BodyContainer from "../components/BodyContainer";

export default function Home() {
    return (
        <BodyContainer extraClass="bg-[var(--bg)] text-[var(--text)] flex flex-col">
            <div className="flex items-center justify-between w-4/5 mx-auto pb-5 border-b border-[var(--border)]">
                <h1 className="font-bold text-2xl tracking-tight">
                    <span className="text-[var(--green)]">⚡</span> React Router
                </h1>

                <nav>
                    <NavLink to='/login' className='cursor-pointer font-medium rounded-md px-3 py-1.5 bg-[var(--bg-elevated)] text-[var(--text)] hover:bg-[var(--green-dark)] transition-colors'>Login</NavLink>
                </nav>
            </div>

            <main className="flex flex-col items-center pt-45 flex-1 gap-4 w-4/5 mx-auto text-center">
                <h2 className="text-4xl font-bold max-w-xl">Learn routing the simple way</h2>
                <p className="text-(--primary) max-w-md">
                    This is a minimal demo page built with React Router. Click the Login button to navigate to the next route.
                </p>
                <NavLink to='/login' className='mt-2 cursor-pointer font-medium rounded-md px-5 py-2.5 bg-(--green) text-(--bg) hover:bg-(--green-strong) transition-colors'>
                    Get Started
                </NavLink>
            </main>
        </BodyContainer>
    );
}