
 import Link from "next/link";

const Footersection = () => {
    return (
        <div className="w-full bg-[#091e3e] py-10 mt-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-10 px-4 py-5">
                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-white">About Us</h4>
                    <ul className="text-white">
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                    </ul>
                </div>     

                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-white">Careers</h4>
                    <ul className="text-white">
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                        <li><Link href="/">Coming Soon</Link></li>
                    </ul>       
                </div>

                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-white">Contact Us</h4>
                </div>
            </div>
        </div>
    )
}

export default Footersection;
