import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div className="lg:md:mt-10">
            <div className="grid lg:md:grid-cols-4 sm:grid-cols-2 gap-4 p-4 bg-black text-white">
                <InFooter />
                <InFooter1 />
                <InFooter2 />
                <InFooter3 />
            </div>
        <div className="w-full h-14 bg-gray-400 text-white text-end">
            <p className="text-center">Copyright@2024 All rights reserved</p>
        </div>
    </div>
    );
}

function InFooter(){
    return(
        <div className="w-full lg:md:h-64 rounded-t-md">
            <h1 className="text-xl">Seedlings Of Hope Foundation</h1>
            <h1>Motto:<span className="ml-3">Keeping Faith Alive</span></h1>
            <h1>Email:seedlingsofhopefoundation16@gmail.com</h1>
            <h1>Phone Number:+256788773402</h1>
            <h1>regestered NGO with a reg.no INDP122111916NB</h1>
        </div>
    )
}
function InFooter1(){
    return(
        <div className="w-full lg:md:h-64 rounded-t-md lg:md:p-4 sm:p-1">
            <h1 className="lg:md:ml-8 lg:md:text-xl lg:md:mb-3 sm:text-xm">Navigation</h1>
          <Lnk />
        </div>
    )
}
function InFooter2(){
    return(
        <div className="w-full lg:md:h-64 rounded-t-md">
            <h1 className="text-xl">Services</h1>
            <div>
                <ol>
                    <li>Educational Support</li>
                    <li>Facilitate Disabled children</li>
                    <li>Supporting Single Mothers</li>
                    <li></li>
                </ol>
            </div>

           
        </div>
    )
}
function InFooter3(){
    return(
        <div className="w-full lg:md:h-64 rounded-t-md">
            <h1 className="text-xl">Subscribe newsletter</h1>
            <p>Subscribe our newsletter to get updates about our services and offers.</p>
            <form action="">
                <h1 className="text-xl">Email:<span className="ml-3 rounded-md"><input type="text" /></span></h1>
                <button className="p-1 rounded-md bg-blue-400 text-white mt-5">
                       Submit now
                    </button>
            </form>
           
    </div>
    )
}
function Lnk(){
    let links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT US",link:"/about"},
        {name:"PHOTOS",link:"/photos"   },
        {name:"VIDEOS",link:"/videos"},
        {name:"DONATE",link:"/Donate"}
    ]
    return(
        <div className="shadow-md w-full">
            <div className="md:flex w-full">
                <ul className=" text-white">
                    {
                        links.map((link)=>(
                           <li key={link.name} className="md:ml-8 text-xl">
                                <Link to={link.link} className="text-white hover:text-gray-400 duration-500">{link.name}</Link>
                           </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}