import {Link} from "react-router-dom";

export default function Button({type = "button", to = "", disabled = false, className = "", onClick, children,}) {
    if (to) return ( <Link to={to} className={`rounded-md sm:py-[10px] sm:px-[16px] ${className}`}>{children}</Link> );


    return (
        <button
            type={type}
            disabled={disabled}
            className={`rounded-md sm:py-[12px] sm:px-[18px]
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
