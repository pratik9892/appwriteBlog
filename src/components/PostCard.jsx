import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage,content}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-200 rounded-xl p-4 hover:-translate-y-2 transition-all hover:shadow-lg min-h-[300px] ">
            <div className="w-full justify-center mb-4 overflow-hidden">
                <img
                    className='h-[200px] w-full object-cover hover:scale-110 transition-all'
                    src={service.getFilePreview(featuredImage)} alt={title} 
                />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard