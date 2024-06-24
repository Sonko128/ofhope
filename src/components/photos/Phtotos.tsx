import { useState } from "react";
import Layout from "../Layout";
import { TypeAnimation } from "react-type-animation";
import img1 from '../../images/12.jpg'
import img2 from '../../images/38.png'
import img3 from '../../images/20.jpg'

import img4 from '../../images/4.jpg'
//import img5 from '../../images/3.jpg'
import img6 from '../../images/4.jpg'
import img7 from '../../images/1.jpg'
import img8 from '../../images/6.jpg'
import img9 from '../../images/7.jpg'
import img10 from '../../images/8.jpg'
import img11 from '../../images/9.jpg'
//import img12 from '../../images/10.jpg'
//import img13 from '../../images/11.jpg'
import img14 from '../../images/12.jpg'
import img15 from '../../images/13.jpg'
import img16 from '../../images/14.jpg'
import img17 from '../../images/15.jpg'
import img18 from '../../images/16.jpg'
import img19 from '../../images/17.jpg'
import img20 from '../../images/18.jpg'
//import img21 from '../../images/19.jpg'
import img22 from '../../images/20.jpg'
import img23 from '../../images/21.jpg'
import img24 from '../../images/22.jpg'
import img25 from '../../images/23.jpg'
import img26 from '../../images/24.jpg'
import img27 from '../../images/25.jpg'
import img28 from '../../images/26.jpg'
import img29 from '../../images/30.jpg'
import img30 from '../../images/25.jpg'
import img31 from '../../images/26.jpg'
import img32 from '../../images/33.jpg'
import img33 from '../../images/32.png'
//import img34 from '../../images/32.jpg'
import img35 from '../../images/28.jpg'
//import img36 from '../../images/34.jpg'
//import img37 from '../../images/35.jpg'
import img38 from '../../images/5.jpg'
//import img39 from '../../images/37.jpg'


interface orphan{
    image:string
    name:string,
    age:string,
    date_of_birth:string,
}
const initialOrphan:orphan[]=[
    {
        image:img1,
        name:'Mpendo Jesses',
        age:'4 Years',
        date_of_birth:'May 2nd, 2019',
    },
    {
        image:img2,
        name:'Kanyike Elisha',
        age:'7 Years',
        date_of_birth:'2016',
    },
    {
        image:img3,
        name:'Mukisa Ophrah',
        age:'6 Years',
        date_of_birth:'August 18th, 2017',
    },
    {
        image:img4,
        name:'Lanyero Millian Treasure',
        age:'9 Years',
        date_of_birth:'December 18th, 2014',
    }
    ,
    {
        image:img7,
        name:'Nakubulwa Lydia',
        age:'4 Years',
        date_of_birth:'October 17th, 2019',
    }
    ,
    {
        image:img38,
        name:'Okendi  Jamali',
        age:'10 Years',
        date_of_birth:'January 12th, 2014',
    }
    ,
    {
        image:img33,
        name:'Esseg Edrine',
        age:'11 Years',
        date_of_birth:'August 10th, 2013',
    }
    ,
    {
        image:img32,
        name:'Segawa Enock',
        age:'11 Years',
        date_of_birth:'September 6th, 2013',
    }
    ,
    {
        image:img35,
        name:'Akankunda Daphine',
        age:'11 Years',
        date_of_birth:'August 1st, 2012',
    }
    ,
    {
        image:img31,
        name:'Maguya Ashir Ali',
        age:'3 Years',
        date_of_birth:'February 29th,2020',
    }
    ,
    {
        image:img30,
        name:'Kayondo Gift',
        age:'11 Years',
        date_of_birth:'May 5th, 2015',
    }
    ,
    {
        image:img29,
        name:'Namubiru Faith',
        age:'7 Years',
        date_of_birth:'May 5th, 2017',
    }
]
export default function Photos(){
    return(
        <Layout children={<Posted />} />
    )
}
function Posted(){
    return(
        <div>
        <WordType />
        <NowPosted />
        </div>
    )
}
function NowPosted(){
    const[child_orphan, setChild_orphan]=useState(initialOrphan);
    return(
        <article className="p-2 grid md:lg:grid-cols-4 gap-6">
            {
                child_orphan.map(orphan_child=>{
                    return(
                    <div className="p-1 bg-gradient-to-br from-green-400 to-blue-400 rounded-md ring-1 ring-green-300">
                        <div className="universal-bg w-full h-60  rounded-md">
                            <img className="w-full h-full rounded-md" src={orphan_child.image} alt="" />
                        </div>
                        <div className="p-3 mt-1 rounded-md bg-black/20 text-white ring-1 ring-slate-300">
                            <h1 className="text-xl font-bold">Name: <span>{orphan_child.name}</span></h1>
                            <h1 className="text-xl font-bold">DOB: <span>{orphan_child.date_of_birth}</span></h1>
                            <h1 className="text-xl font-bold">Age: <span>{orphan_child.age}</span></h1>
                        </div>
                    </div>
                    )
                })
            }
        </article>
    )
}
function WordType(){
    return (
        <div className="w-full lg:md:text-2xl md:lg:font-bold lg:md:m-4 rounded-lg h-[90vh] 
        bg-gradient-to-r from-green-400 text-white to-blue-400 inline-block size-6">
            <h1 className="text-xl">BENEFICIARY DETAILS</h1>
                <TypeAnimation
                    sequence={[
                        'Our Mission As Seedlings Of Hope Foundation',
                        2000,
                        'To achieve Transformation through self help initiative,relief,giving all necessary assistant to orphans and needy children and windows,single mothers and teen mothers (Orphanages and foster homes)',
                        2000,
                        'Objectives',
                        2000,
                        'We produce food for Chinchillas',
                        2000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
            />
            <p>For any child you may wish to sponsor, we avail you with the details.</p>
            <p>Many children are on the sponsorship list and eagerly a waiting for your support.the child you may
                decide to sponsor exclusively be under your care and you can have an opportunity to track thier education 
                progress which can be done through;
                <h1>1.Providing you termly report</h1>
                <h1>2.Images</h1>
                <h1>3.Arranged phone calls and</h1>
                <h1>4.Letters priodically</h1>
                <p>Alternatively you may decide to donate a certain amount such that NGO can use to cater fro education and needs of these children </p>
            </p>
        </div>
      );
}