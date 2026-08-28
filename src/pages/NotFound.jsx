import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <div className="mt-30 mx-auto w-fit">
            <h1 className="text-center font-bold text-2xl mb-5">This page shows only user enter not exists page.</h1>
            <button onClick={handleClick} className="cursor-pointer p-2 bg-blue-500 text-white rounded-md active:scale-[0.98]">Go back</button>
        </div>
    );
}