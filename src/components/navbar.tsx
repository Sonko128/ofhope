import { Link } from "react-router-dom";
import log from '../images/logo.jpeg'

function NavBar(){
    let links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT US",link:"/about"},
        {name:"PHOTOS",link:"/photos"   },
        //{name:"VIDEOS",link:"/videos"},
        //{name:"DONATE",link:"/Donate"}
    ]
    return(
        <div className="md:flex shadow-md w-full top-0 left-0 bg-purple-400 text-yellow-400">
            <div className="md:flex items-center justify-between w-full py-4 md:px-10 px-7 text-yellow-300">
            <div className="flex flex-col" >
        <span className="mx-auto">
        <img className="mx-auto h-20 w-auto rounded-full item-center" src={log} alt="" />
        </span>
        <span className="mx-auto">
        Seedlings Of Hope Foundation
        </span>
      </div>
                <ul className="md:lg:flex lg:md:items-center">
                    {
                        links.map((link)=>(
                           <li key={link.name} className="md:ml-8 text-xl">
                                <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</Link>
                           </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default NavBar;