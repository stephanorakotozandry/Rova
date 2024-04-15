import './accueil.css'
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import MailIcons from "@mui/icons-material/Mail"
import FacebookIcons from "@mui/icons-material/Facebook"
import Experiance from './Experiance'
import {motion} from "framer-motion"
import { Link } from 'react-scroll'
import './animation.scss'
import { useState } from 'react'


const Accueile = () => {

const[calsList,setClalist] = useState('animationText')
const Nom = ['Je',' ',"m '",'a','p','p','e','ll','e',' ','R','A','K','O','T','O','Z','A','N','D','R','Y']
const Prenom = ['R','o','v','a','n','i','a','i','n','a','  ','S','t','e','p','h','a','n','o']



  return (
    <>
    <div className='accueil'>
        <div className="titre">
           <div className="nom">           
             {
              Nom.map((char)=>(
                <span className={`${calsList} _14`}>{char}</span>
              ))
             }
             </div>
             <div className="nom">
             {
              Prenom.map((char)=>(
                <span className={`${calsList} _15`}>{char}</span>
              ))
             }
               </div>
             
            <div className="patien">
            <span >Développeur Javascript</span>
            </div>
             
            <div >
              <Link  to='experience' className="experience">Experience</Link>
            </div>
        </div>
        <div className="image">
          <motion.div
            initial={{rotate:100}}
            whileInView={{rotate : 0}}
            viewport={{margin: "-40px"}}
            transition={{duration: 3, type:"spring"}}
          className="imageBox">
            <div className="cercle1">
            <a href="https://github.com/stephanorakotozandry/StephanoPorfolio" target='_blank' rel='noopener noreferrer' style={{color:"white"}} > <GithubIcons className='git' style={{fontSize:"50px"}}/></a>
            </div>
            <div className="cercle2">
            <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/" target='_blank' rel='noopener noreferrer' style={{color:"white"}}  ><LinkedInIcons style={{fontSize:"50px"}}/></a>
            </div>
            <div className="cercle3">
              <img src="/image/rova.jpg" style={{width: "50px", height:"50px", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}/>
            </div>
            <div className="cercle4">
            <a href="https://mail.google.com/" target='_blank' rel='noopener noreferrer' style={{color:"white"}} ><MailIcons  style={{fontSize:"50px"}}/></a>
            </div>
            <div className="cercle5">
            <a href="https://www.facebook.com/Niaina_Stephano" target='_blank' rel='noopener noreferrer' style={{color:"white ",}}> <FacebookIcons  style={{fontSize:"50px"}}/></a>
            </div>
          </motion.div>
        </div>
    </div>
    <div className="exper" >
    <Experiance/>  
    </div>
    </>
  )
}

export default Accueile