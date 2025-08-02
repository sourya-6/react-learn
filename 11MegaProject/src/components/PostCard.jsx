import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    const [imageurl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            const response = await appwriteService.getFilePreview(featuredImage);
            console.log(response)
            if (response ) {
                
                setImageUrl(response);
            }
        };
        fetchImage();
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {/* Use the resolved imageurl */}
                    {imageurl? (<img src={imageurl} alt={title} className='rounded-xl' />):null}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
