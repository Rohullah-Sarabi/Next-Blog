"use client"
import { addBlog } from "@/action/action";
import Button from "@/app/ui/Button";
import { useTransition } from "react";

const AddBlogForm = () => {
    const [ispendding,startTransation] = useTransition()
    return (
        <form action={(formData)=>startTransation(()=>addBlog(formData))} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl text-green-500 font-semibold mb-6">Create a New Blog Post</h2>
            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter imageUrl"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter title"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-600">Description</label>
                <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter description"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter category"
                />
            </div>
            <Button lable={ispendding?"Submitting":"Add New Blog"} color={"green"} />
        </form>
    )
}

export default AddBlogForm;