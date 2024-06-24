import { ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./Footer";

export default function Layout({children}: {children: ReactNode}){
    return(
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}