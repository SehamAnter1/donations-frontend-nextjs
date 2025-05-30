import Link from "next/link";

const Button = ({
    href,
    onClick,
    type,
    text,
    children,
    loading = false,
    disabled = false,
    icon_first,
    className,
    variant = "primary", // primary, outline, text, disabled, success
    stopPropagation,
}) => {
    const baseClass = `px-4 py-2 h-[48px] 2xl:h-[56px] rounded-[6px] flex items-center justify-center gap-[8px]  body__large transition-all transition-all text-center  ${className}`;
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hovered",
        outline: "border border-secondary  text-secondary hover:bg-secondary-hovered ",
        text: "text-secondary gap-s  !p-0 !h-auto ",
        transparent: "border-outline border-[1px] hover:bg-container-active-chips text-on-surface-secondary gap-s p-s ",
        disabled: " bg-disabled text-white  cursor-not-allowed",
        success: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    };
    const btnClass = `text-nowrap cursor-pointer ${baseClass} ${variants[variant]} ${
        disabled ? "!cursor-not-allowed" : ""
    }`;
    const buttonContent = (
        <>
            {/* {loading && <Btn_Spinner />} */}
            {icon_first ? (
                <>
                    {children}
                    {text}
                </>
            ) : (
                <>
                    {text}
                    {children}
                </>
            )}
        </>
    );
    if (href) {
        return (
            <Link href={href} className={btnClass}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={(e) => {
                if (stopPropagation) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                onClick?.(e);
            }}
            className={btnClass}
            disabled={disabled || loading}
        >
            {buttonContent}
        </button>
    );
};

export default Button;
