import React,{useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/SideBar'

const SigninPage = () => {


  const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <div><h1 style={{"display":"flex" , "alignItems":"center","justifyContent":"center","position":"absolute","top":"45%","left":"40%"}}>Comming Soon 😋</h1></div></>
  )
}

export default SigninPage