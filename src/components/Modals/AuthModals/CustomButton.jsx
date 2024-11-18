
const CustomButton = ({label, className, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center w-full bg-n-9 rounded-xl px-2 py-3 cursor-pointer hover:bg-n-11 ${className}`}
        >
            {label}
        </div>
    )
}

export default CustomButton;