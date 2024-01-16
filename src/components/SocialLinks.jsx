import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [{
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href : "https://www.linkedin.com",
        style: 'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href : "https://www.github.com/deepanshumishraa",
        
    },
    {
        id:3,
        child:(
            <>
            Twitter <FaTwitter size={30}/>
            </>
        ),
        href : "www.twitter.com/deepanshudipxsy",
       
    },
    {
        id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href : "googledriv.com",
        style: 'rounded-br-md',
        download:true
    },
]
  return (

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,link,download})=>(
            <li key={id}className={'flex justfiy-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'+ " " + style}><a href={href} className='flex justify-between items-center w-full text-white ' download={download} target="_blank">
                {child}
                </a></li>
    
        ))}





              </ul>
    </div>
  )
}

export default SocialLinks