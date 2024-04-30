import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center ">
                        <Link href={"/blog"}>
                            <Image
                                alt="Logo"
                                height={50}
                                width={50}
                                quality={100}
                                className="w-8 h-8 mr-3 rounded-full"
                                src={"https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"}
                            />
                        </Link>
                        <span className="text-white text-2xl font-bold mx-auto">
                            Blog Website
                        </span>
                    </div>
                    <div className="flex items-center text-white">
                        <Link href={"/blog"} className="hover:text-gray-400 dark:hover:text-white px-3  py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href={"/blog/add-blog"}
                            className="hover:text-gray-400 dark:hover:text-white px-3  py-2 rounded-md text-sm font-medium"
                        >
                            Create Blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;