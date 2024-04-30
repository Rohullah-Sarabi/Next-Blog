import { fetchSingleBlog } from "@/action/action";
import Image from "next/image";
import Link from "next/link";

type ParamsType = {
    id: string;
}
export default async function BlogDetails({ params }: { params: ParamsType }) {
    const { id } = params
    const blogDetails = await fetchSingleBlog(id);
    return (
        <div>
            <div className="text-center bg-gray-800 rounded-md border-2 border-green-600 shadow-md px-4 py-2">
                {
                    blogDetails?.imageUrl ? <Image quality={100} src={blogDetails.imageUrl} alt={blogDetails?.title} loading="lazy" placeholder="blur" blurDataURL={blogDetails?.imageUrl} width={600} height={400} className="w-full h-[600px] mt-2 p-2 object-cover mb-2 rounded-sm shadow-sm" /> : null
                }
                <h2 className="text-center font-extrabold text-lg mx-2 my-2 text-green-500">
                    {blogDetails?.category}
                </h2>
                <h3 className="font-semibold text-center text-2xl text-gray-200 my-2 mx-2 px-2 py-2">
                    {blogDetails?.title}
                </h3>
                <p className="text-justify text-gray-300 my-2 mx-2 py-2">
                    {blogDetails?.description}
                </p>
                <Link href={`/blog/update-blog/${id}`} className="text-gray-700 bg-gray-200 border-2 py-2 rounded-lg shadow-sm mx-2 px-2">Update Blog</Link>
            </div>
        </div>
    )
}
