"use client"

import { updateBlog } from "@/action/action"
import Button from "@/app/ui/Button"
import { useTransition } from "react"

const UpdateBlogForm = ({blog}:{blog:any})=> {
    const [ispendding,startTransition] = useTransition()
    const id:string = blog?.id

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => updateBlog({ formData, id }));
      };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl text-green-500 font-semibold mb-6">Update Blog</h2>

            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">Update Image Link</label>
                <input 
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    defaultValue={blog?.imageUrl}
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter imageUrl" 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={blog?.title}
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter title" 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    defaultValue={blog?.description}
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter Description" 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
                <input 
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={blog?.category}
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter Category" 
                />
            </div>
            <Button lable={ispendding?"updating":"update Blog"} color="green"/>
        </form>
    )
}

export default UpdateBlogForm;