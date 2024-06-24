import Layout from "../Layout";
import us from '../../images/IMG-20240514-WA0008 - Copy (2).jpg'
import se from '../../images/se1.jpg'

export default function About(){
    return(
        
        <Layout children={<Page />} />
    )
}
function Page(){
    return(
        <div>
            <First />
            <Second />
        </div>
    )
}
function First(){
    return(
        <div className="w-full lg:h-[90vh] bg-orange-300 sm:h-20">
            <img className="w-full lg:h-[90vh]" src={se} alt="" />
        </div>
    )
}
function Second(){
    return(
        <>
        <div className="grid lg:md:grid-cols-2 sm:grid-cols-1 gap-4 lg:md:w-full lg:md:h-[70vh]">
            <div className="w-full lg:h-[70vh] sm:h-10 bg-orange-300">
                <div>
                    <img className="w-full lg:h-[70vh] sm:h-10" src={us} alt=""/>
                </div>
            </div>
            <div className="w-full lg:h-[70vh] sm:h-[30]">
                <div>
                    <h1 className="text-2xl underline underline-offset-2">
                        About our Foundation
                    </h1>
                    <p>
                        We are a non-profit organisation that was founded in 2016.We are dedicated to helping unprevileged
                        children and Women in Uganda.Most of the children we are giving a helping hand are from broken homes
                        as a result of gender-based violence and being supported by their mothers,single handedly who even are not financially upright.
                        Some come from from homes that are poverty stricken in a sense that they can hardly afford a good meal a day.
                        Others are a product of teen motherhood,death of thier fathers who are believed to have been the Sole 
                        providers of their homes more so, in polygamous marriage.We sponsor both boys and girls of a school going age
                    </p>
                        <h1 className=" text-2xl underline underline-offset-2">
                            Our Mission And Objectives
                        </h1>
                        <p>
                            To achieve Transformation through self help initiative,relief,giving all necessary 
                            assistant to orphans and needy children and windows, single mothers and teen mothers
                            (Orphanages and foster homes).
                        </p>
                        <h1 className="text-2xl underline underline-offset-2">Objectives</h1>
                        <ol>
                            <li>To establish and facilitate educational support to the needy children.</li>
                            <li>To empower the needy members of the Community to participate in income generating activities for 
                                -economic transformation of their homesteads.
                            </li>
                            <li>To Mobilise and disburse fund and other resources for the promotion of the organisation.</li>
                        </ol>
                </div>
            </div>
        </div>
        </>
    )
}