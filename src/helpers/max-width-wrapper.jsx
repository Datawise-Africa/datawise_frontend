import { cn } from "./cn";

export default function MaxWidthWrapper({ children, className}) {
    return (
        <div className={cn("max-w-7xl mx-auto w-full", className)}>
            {children}
        </div>
    )
}