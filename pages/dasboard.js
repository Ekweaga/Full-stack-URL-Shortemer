import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import {useContext} from "react"
import { Auth } from './Context'
import {  signOut } from "firebase/auth";
import { doc,updateDoc,arrayUnion, onSnapshot } from "firebase/firestore"; 
import {getFirestore} from 'firebase/firestore'
import copy from 'copy-to-clipboard';
import {firebaseapp} from "../styles/Firebase/firebase"
import {auth} from "../styles/Firebase/firebase"
import {useRouter} from "next/router"
import axios from "axios"
import {AiOutlineLogout} from "react-icons/ai"
import Spinner from './Components/Spinner';

function Dasboard() {

    const [modal,setModal] = useState(false)
    const router = useRouter();
    const [name,setName] = useState('')
    const [link,setLink]= useState('')
    const [links,setLinks] = useState([])
    const [loading,setLoading]= useState(false)


    const projectfirestore = getFirestore(firebaseapp)
const logout = async ()=>{
    await signOut(auth)
    localStorage.clear();
    router.push("login")
}
const cuturl = async ()=>{
  setLoading(true)
  axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`).then((response)=>{
    console.log(response.data.result)
   updateDoc(doc(projectfirestore,"Links",`${user?.email}`),{
      saveShows:arrayUnion({
          link:response.data.result.short_link,
          name:name
      })
    })
    setLoading(false)
  })
  setLink('')
  setName('')
  setModal(!modal)
}

const copyText = (text)=>{
  copy(text)
  alert("Link copied!!")
}

    const {user} = useContext(Auth)
    useEffect(()=>{
   
   setLoading(true)
      onSnapshot(doc(projectfirestore, "Links", `${user?.email}`), (doc) => {
      
        setLoading(false)
        setLinks(doc.data()?.saveShows)
       
      
    });

   
    
    
    },[projectfirestore,user?.email])
    
    if(loading) <Spinner/>
  return (
    <>
    <div className="h-[100vh] py-4">
        <div className="flex justify-around items-center mt-[60px]">
            <div className="flex justify-around md:items-center gap-[30px] flex-col md:flex-row"> <h2 className="font-bold text-2xl">Links</h2>  <button className='text-white bg-[#2BD0D0] w-[150px] p-2 shadow' onClick={()=>setModal(!modal)} >Create Link</button></div>
           
            <div className="flex items-center justify-center">
            <span className="cursor-pointer" onClick={logout}>Logout </span>
            <AiOutlineLogout/>
            </div>
        </div>


      {links?.length === 0 ?<div className="flex flex-col items-center justify-center mt-[50px]"><Image src="/undraw_No_data_re_kwbl.png" width={400} height={300} alt="icon"/><span>No links created</span></div>: 
      (
        <div className="grid grid-cols-2 md:grid-cols-4  gap-[30px] md:ml-[100px] mt-[30px] ml-[20px]">
        {links?.map((link)=>{
          return (
           <> 
           <div className="flex-col flex w-[200px]"><h2 className="font-bold text-2xl">{link?.name ? link?.name : (<span>My website</span>)}</h2>
            <div className="flex  flex-col">
             <a href={`https://www.${link?.link}`} className="text-[#2BD0D0]">{link?.link}</a>
             <button className="border-2 border-[#2BD0D0] w-[100px]" onClick={()=>copyText(link?.link)}>Copy</button>
            </div>
            </div>
            </>
          )
        })}

      </div>
      )
      } 

      {modal ? (<div className="h-screen bg-black/70 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">

<div className="flex flex-col h-[300px] items-center justify-center w-[500px] bg-white gap-[30px] relative">
    <Image src="/icon-close.svg" width="20px" height="20px" className="absolute right-[20px] top-[20px]" alt="cion" onClick={()=>setModal(!modal)}></Image>
<input type="text" placeholder="Enter Url" className="border-2 w-[250px] p-2 border-[#2BD0D0]" value={link} onChange={(e)=>setLink(e.target.value)}/>
<input type="text" placeholder="Name of website" className="border-2 w-[250px] p-2 border-[#2BD0D0]" value={name} onChange={(e)=>setName(e.target.value)}/>
<div>
<button className='text-white bg-[#2BD0D0] w-[200px] p-2 shadow' onClick={cuturl} >Create Link</button>
</div>
</div>


</div>):null}  
   
    </div>
  
      
    </>
  )
}

export default Dasboard
