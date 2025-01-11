import React from "react";
import { CardProps } from "../../interfaces";
import { type CardProps } from "../../interfaces"


const Card : React.FC<CardProps> = ({title, content})=>{
    return (
        <div className="card">
            <div className="flex flex-col w-[250px] border-white border-[1px] h-[100px] justify-center items-center">
                <h5 className="card-title text-2xl font-bold">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}
export default Card;