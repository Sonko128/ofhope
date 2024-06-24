import { useState } from "react"
import Slider from "../../Slider"
import { slidesData } from "../../slidesData"
import Layout from "../Layout"
import img1 from '../../images/se1.jpg'
import img13 from '../../images/img3.jpg'
import hlp from '../../images/hlp.jpg'
import edt from '../../images/edit.jpg'



interface ChildSupport{
    image:string,
    htitle:string,
    hpragraph:string,
    targetmoney:string,
    raisedmoney:string,
}
interface Measurements{
    pmeasure:string,
    hmeasure:string
}

const initialMeasurement:Measurements[]=[
    {
        pmeasure:'35+',
        hmeasure:'Active Cases'
    },
    {
        pmeasure:'3500m',
        hmeasure:'People Joined'
    },
    {
        pmeasure:'2000m',
        hmeasure:'Cases every Year'
    },
]

const initialSupport:ChildSupport[]=[
    {
        image:img1,
        htitle:'Sponsor Children',
        hpragraph:'We give help to children in need',
        targetmoney:'10,780,000(ugshg)',
        raisedmoney:'9,061,757(ugshg)'
    },
    {
        image:img13,
        htitle:'Old Peaple',
        hpragraph:'We give help to all people in village',
        targetmoney:'3780000ugshg',
        raisedmoney:'36757ugshg'
    },
    {
        image:edt,
        htitle:'Windowers',
        hpragraph:'We give help to all people in village',
        targetmoney:'9780000ugshg',
        raisedmoney:'36757ugshg'
    }
]
export default function Home(){
    return(
        <Layout children={<Page />} />
    )
}
function Page(){
    return(
        <div className="bg-blue-100">
            <First />
            <Causes />
            <AfterCard />
            <Measure />
            <SavePeople />
            <AfterCardAll />
        </div>
    )
}
function First(){
    return(
        <div>
            <div className="w-full md:lg:h-[90vh] bg-orange-300 sm:h-10">
                <div className="w-full lg:h-[90vh]">
                <Slider slides={slidesData}/>
                </div>
            </div>
        </div>
        
    )
}
function Causes(){
    return(
        <div className="lg:md:mt-20 sm:mt-4">
            <h2 className="md:lg:text-5xl sm:text-4xl font-bold text-center md:lg:mb-6 underline underline-offset-1 ">Causes we are serving</h2>
            <div>
                <Card />
            </div>
        </div>
    )
}
function Card(){
    const[ghelp, setGhelp]=useState(initialSupport)
    return(
          <article className="grid lg:md:grid-cols-3 sm-grid-cols-1 gap-4 lg:md:h-90 sm:h-20 mx-2">
            {
                ghelp.map(help=>{
                    return(
                        <div className="block rounded-md rounded-md bg-emerald-300">
                            <div className="universal-bg w-full h-80 rounded-t-md">
                                <img className="rounded-md h-80 w-full" src={help.image} alt="" />
                            </div>
                            <div className="p-3">
                                <p className="text-xl font-bold">{help.htitle}</p>
                                <p>{help.hpragraph}</p>
                                <div className="justify-between">
                                    <p className="text-1xl font-bold">Target <span>{help.targetmoney}</span></p>
                                    <p className="text-1xl font-bold">Raised <span>{help.raisedmoney}</span></p>
                                    <button className="p-2 rounded-md bg-blue-400 text-white">
                                        Donate now
                                    </button>
                                </div>
                            </div>
                     </div>
                    );
                })
            }
           
        </article> 
    )
}
function AfterCard(){
    return(
        <div className="md:lg:mt-96">
            <div className="grid lg:md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
                <After />
                <After1 />
            </div>
        </div>
    )
}
function After(){
    return(
        <div className="universal-bg w-full lg:md:h-96 sm:h-40 rounded-t-md">
            <img className="h-full w-full" src={hlp} alt="" />
        </div>
    )
}
function After1(){
    return(
        <div className="w-full lg:md:96 sm:h-90 sm:justify-items-stretch rounded-t-md">
            <h1 className="md:lg:text-5xl sm:text-2xl font-bold text-center lg:md:mb-6 underline underline-offset-1">Who we are?</h1>
            <p className="sm:justify-items-stretch">We are a non-profit organisation that was founded in 2016.We are dedicated to helping unprevileged
                children and Women in Uganda.Most of the children we are giving a helping hand are from broken homes
                as a result of gender based violence and being supported by their mothers,single handedly who even are not financially upright.
                some come from from homes that are poverty stricken in a sense that they can hardly afford a good meal a day.
                Others are a product of teen motherhood,death of thier fathers who are believed to have been the Sole providers
                of the homes more so in polygamous marriage.This we ensure that such children who are not preivileged financially 
                due to financial constraint from their home,are given an opportunity to start and stay in school.
                Sponsoring a child with Seedlings of Hope Foundation is seen as an investment in this child's future.We view educating this child future.
                we view educating this child as a tool to fight the cycle of poverty as the child is nurtured,equiped and empowered to become a responsible
                person in future
            </p>
        </div>
    )
}
function Measure(){
    return (
        <div className="lg:md:mt-10">
        <div className="grid lg:md:grid-cols-4 sm:grid-cols-1 lg:md:gap-4 lg:md:p-4 bg-red-400">
            <ForMweasure />
        </div>
    </div>
    )
}
function ForMweasure(){
    const[fweasure,setFweasure]=useState(initialMeasurement)
    return(
                <>
                    {
                        fweasure.map(measure=>{
                            return(
                                <div className="w-full h-44 rounded-t-md">
                                    <p className="text-xl font-bold text-center lg:md:mb-6 text-white">{measure.pmeasure}</p>
                                    <h1 className="text-xl font-bold text-center lg:md:mb-6 text-white">{measure.hmeasure}</h1>
                                </div>
                            )
                        })  
                    }
                </>
            )
}
function SavePeople(){
    return(
        <div className="lg:md:mt-10">
            <p className="lg:md:text-5xl font-bold text-center lg:md:mb-6">We serve  people</p>
            <div className="grid lg:md:grid-cols-3 sm:grid-cols-1 gap-4 p-4 ">
                <Save />
                <Save1 />
                <Save2 />
            </div>
        </div>
    )
}
function Save(){
    return(
        <article className="rounded-md bg-slate-200">
            <div className="universal-bg w-full h-52 rounded-t-md">
                <img className="w-full h-full" src="https://www.worldbank.org/content/dam/photos/780x439/2023/aug/afe-water-1.jpg" alt="" />
            </div>
             <div className="p-3">
                <p className="text-xl font-bold">Pure food and Water</p>
            </div>
        </article>
    )
}
function Save1(){
    return(
        <article className="rounded-md bg-slate-200">
        <div className="universal-bg w-full h-52 rounded-t-md">
            <img className="w-full h-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1mRtyEVuVej2t4Fj151VdzS9m7pvMXQIVw&usqp=CAU" alt="" />
        </div>
         <div className="p-3">
            <p className="text-xl font-bold">Health and Medicine</p>
        </div>
    </article>
    )
}
function Save2(){
    return(
        <article className="rounded-md bg-slate-200">
        <div className="universal-bg w-full h-52 rounded-t-md">
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWIvQql6y5iTTVBG_aTQrK03Ubc3L8Lnw5Q&usqp=CAU" alt="" />
        </div>
         <div className="p-3">
            <p className="text-xl font-bold">Education</p>
        </div>
    </article>
    )
}
function AfterCardAll(){
    return(
        <div className="lg:md:mt-10">
            <div className="grid lg:md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
                <AfterCard2 />
                <AfterAll />
            </div>
        </div>
    )
}
function AfterCard2(){
    return(
        <div className="universal-bg w-full h-96  rounded-t-md">
            <img className="h-full w-full" src="https://t4.ftcdn.net/jpg/06/63/76/09/360_F_663760963_jwqc4T3tkoOs7mHRuB2vmnAIEOeldlbC.webp" alt="" />
        </div>
    )
}
function AfterAll(){
    return(
        <div className="w-full lg:md:96 sm:h-90 rounded-t-md">
            <h1 className="md:lg:text-2xl font-bold lg:md:mb-6 sm:mb-2">Join Hands with Us To Serve The Future Generation</h1>
            <p>
                You may decide to donate clothes,shoes and other scholastic materials that can be equally distributed in the community
            </p>
            <h1 className="md:lg:text-2xl font-bold">Stretching Our Hands to helping mothers</h1>
            <p>We realised that much as the children need support,their mothers need it to.We therefore embarked on
                a journey to support these women.(single mothers, teen mothers,widowed) to break the poverty cycle in thier homes and thus
                become financially empowered and self-reliant.
            </p>
            <p>We equip them with skills,help them create businesses that can enable the generate incomes,with a saving culture tahe can enable them
               improve on the standards of living.like making local snacks,weaving,jewerly making.
            </p>
            <p>We have other different projects we started on to uplift their lives including soap making but unfortunately we lack financial support.It's on this ground that we do seek
                for your financial support to enable us fulfil our goals of uplifting their lives.
            </p>
        </div>
    )
}