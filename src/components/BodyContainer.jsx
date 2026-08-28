export default function BodyContainer({ children, extraClass="" }) {
    const className = "p-4 min-h-dvh " + extraClass;

    return (
        <div className={className}>{children}</div>
    )
}