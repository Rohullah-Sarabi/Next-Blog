import { fetchBlogs } from "@/action/action";
import BlogItem from "../components/forms/BlogItem";
import Search from "../components/Search";
import client from "../libs/prismadb";

interface Blog {
    id: string;
    title: string
    description: string
    imageUrl: string
    category: string
}

interface Params {
    searchParams: any
}

const Blog = async (searchParams: Params) => {
    const query = searchParams.searchParams.query

    // { where: { title: { contains: query } } }
    // single search
    // OR:[
    //    {title:{contains:query}}
    //    {category:{contains:query}}
    // .
    // .
    // ]
    const blogs = await client.blog.findMany({
        where: query ? {
            OR: [
                { title: { contains: query } },
                { category: { contains: query } }
            ]
        } : {}
    })
    return (
        <div>
            <Search />
            <h2 className="text-center mt-4 px-2 text-2xl py-2 font-bold">All Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-5 px-4 py-5">
                {
                    blogs?.length > 0 && (await fetchBlogs())?.map((blog) => {
                        return <BlogItem key={blog.id} blog={blog} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog;