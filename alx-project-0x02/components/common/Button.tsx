import React from "react";
import { ButtonProps } from "@/interfaces";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({label, size="medium", shape="rounded-m", onClick, className=""})=>{
    const classesSize = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg"
    }
    return(
        <button className={`${classesSize[size]} ${shape} bg-green-500 hover:bg-green-600 text-white ${className}`} onClick={onClick}>
            {label}
        </button>
    )
}
export default Button;  