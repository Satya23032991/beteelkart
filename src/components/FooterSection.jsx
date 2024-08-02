
 import Link from "next/link";

const Footersection = () => {
    return (
        <div className="w-full bg-[#e3ea88] py-10 mt-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-5 text-center gap-10 px-4 py-5">
                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-[#375736]">About Us</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/">Our Journey</Link></li>
                        <li><Link href="/">Our Vision</Link></li>
                        <li><Link href="/">Our Achievements</Link></li>
                        <li><Link href="/">Our Motivation</Link></li>
                        <li><Link href="/">Our Goal</Link></li>
                    </ul>
                </div>     

                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-[#375736]">Contact Us</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/">Our Branches</Link></li>
                        <li><Link href="/">Our Officials</Link></li>
                        <li><Link href="/">Our Telephone</Link></li>
                        <li><Link href="/">Our Email</Link></li>
                        <li><Link href="/">Our Head-Office</Link></li>
                    </ul>       
                </div>

                <div>
                    <h4 className="mt-20 md:mt-0 text-1xl md:text-1xl font-bold text-[#375736]">Careers</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/">Business</Link></li>
                        <li><Link href="/">Technical</Link></li>
                        <li><Link href="/">Marketing</Link></li>
                        <li><Link href="/">Supervisor</Link></li>
                        <li><Link href="/">Salesman</Link></li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Footersection;
