import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({title, content, userId}) =>{
    return(
        <div className="bg-slate-400 p-5 rounded-[10px] shadow-lg mb-2 border-white border-[1px]">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg">{content}</p>
            <p className="text-sm text-gray-500">Posted by {userId}</p>
        </div>
    )
}
export default PostCard;