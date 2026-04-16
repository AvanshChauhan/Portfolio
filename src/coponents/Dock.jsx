import React from 'react'
import '../dock.scss'

const Dock = ({ setWindowState }) => {
  return (
    <footer className='dock'>
        <div 
        onClick={()=>{
          setWindowState((state=>({...state,github:true})))
        }}
        className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
        <div 
        onClick={()=>{
          setWindowState((state=>({...state,note:true})))
        }}
        className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
        <div
        onClick={()=>{
          setWindowState((state=>({...state,cli:true})))
        }}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
        <div 
        onClick={() => {
          setWindowState((state) => ({ ...state, calender: true }))
        }}
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
        <div 
        onClick={()=>{
          setWindowState((state=>({...state,spotify:true})))
        }}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
        <div 
        onClick={()=>{
          setWindowState((state=>({...state,resume:true})))
        }}
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
        <div
        onClick={() => {
          setWindowState((state) => ({ ...state, mail: true }))
        }}
        className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
        <div  
        onClick={()=>{
          window.open("https://www.linkedin.com/in/avansh-singh-90053b24a/","_blank")
        }}
        className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>

    </footer>
  )
}

export default Dock
