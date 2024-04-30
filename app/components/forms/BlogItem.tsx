import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: any }) => {
    return (
        <div className="bg-gray-900 p-4 border-2 border-green-200 mx-2 my-2 rounded-lg shadow-dm">
            <Link href={`/blog/${blog.id}`}>
                {blog.imageUrl ? <Image src={blog.imageUrl} quality={100} loading="lazy" width={400} height={600} className="w-full h-[200px] lg:h-[250px] object-cover mb-4 rounded-md" alt={"blog image"} /> : null}
            </Link>
            <Link href={`/blog/${blog.id}`}>
                <h2 className="text-xl text-white font-semibold mb-2">{blog.title}</h2>
            </Link>
            <p className="mb-2 max-w-md text-green-500 inline-block border-2 p-2 border-green-300 rounded-full">{blog.category}</p>
            <p className="text-gray-300 text-justify">{blog.description.substring(0,200)}...</p>
        </div>
    )
}

export default BlogItem;