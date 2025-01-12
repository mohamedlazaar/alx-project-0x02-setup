import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({name, email, address}) =>{
    return(
        <div className="bg-white p-5 rounded-[10px] shadow-lg mb-2 border-black border-[1px]">
            <h2 className="text-2xl text-black font-bold mb-2">{name}</h2>
            <p className="text-lg text-black">{email}</p>
            <ul className='flex flex-col items-center'>
                <li className='font-light text-center text-base italic text-slate-800'>{address.city}</li>
                <li className='font-light text-center text-base italic text-slate-800'>{address.street}</li>
                <li className='font-light text-center text-base italic text-slate-800'>{address.zipcode}</li>
            </ul>
        </div>
    )
}
export default UserCard;