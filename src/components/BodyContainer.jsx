export default function BodyContainer({ children, extraClass = "", overwrite = false }) {
    let className = "p-6 min-h-dvh";

    if (overwrite === true) {
        className = extraClass;
    } else {
        className = "p-6 min-h-dvh " + extraClass
    }

    return (
        <div className={className}>{children}</div>
    )
}