"use server"

import client from "@/app/libs/prismadb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const addBlog = async (formData: FormData) => {
    const imageUrl: any = formData.get("imageUrl")
    const title: any = formData.get("title")
    const category: any = formData.get("category")
    const description: any = formData.get("comment")

    const new_blog = await client?.blog.create({
        data: {
            imageUrl: imageUrl ? imageUrl : null,
            title: title,
            category: category,
            description: description
        }
    })
    // revalidatePath("/blog")
    redirect("/blog")
}

export const fetchBlogs = async () => {
    const blogs = await client.blog.findMany({})
    return blogs;

}

export const fetchSingleBlog = async (id:string)=>{
    const blog = await client.blog.findFirst({where:{id:id}})
    return blog;
}

export const updateBlog = async ({formData,id}:{formData:FormData;id:string})=>{
    const imageUrl:any = formData.get("imageUrl")
    const title:any = formData.get("title")
    const description:any = formData.get("description")
    const category:any = formData.get("category")

    const update_blog = await client.blog.update({where:{id:id},data:{
        imageUrl:imageUrl?imageUrl:null,
        title,
        category,
        description
    }})
    revalidatePath(`/blog/update-blog/${id}`)
    redirect("/blog")
}