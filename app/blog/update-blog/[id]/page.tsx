import { fetchSingleBlog } from "@/action/action";
import UpdateBlogForm from "@/app/components/forms/updateBlogForm"

type ParamsType = {
    id: String
}

const UpdateBlog = async ({ params }: { params: ParamsType }) => {
    const id: any = params.id
    const blog = await fetchSingleBlog(id)
    return (
        <div>
            <h2 className="text-center mt-4 px-2 text-2xl py-2 font-bold">Update Blog Page</h2>


            <UpdateBlogForm blog={blog}/>

        </div>
    )
}

export default UpdateBlog;