import'./footer.css'
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import MailIcons from "@mui/icons-material/Mail"
import FacebookIcons from "@mui/icons-material/Facebook"
import PhoneIcons from "@mui/icons-material/Phone"

const Footer = () => {
  return (
    <div className='footer'>
         <div className="lien">
               <a href="https://github.com/stephanorakotozandry/StephanoPorfolio" target='_blank' rel='noopener noreferrer' style={{color:"white",cursor:"pointer"}}> <GithubIcons  style={{fontSize:"40px"}}/></a>
               <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/" target='_blank' rel='noopener noreferrer' style={{color:"white",cursor:"pointer"}}><LinkedInIcons style={{fontSize:"40px"}}/></a>
               <a href="https://mail.google.com/" target='_blank' rel='noopener noreferrer' style={{color:"white",cursor:"pointer"}}><MailIcons style={{fontSize:"40px"}}/></a>
               <a href="https://www.facebook.com/Niaina_Stephano" target='_blank' rel='noopener noreferrer' style={{color:"white",cursor:"pointer"}}> <FacebookIcons style={{fontSize:"40px"}}/></a>
            </div>
            <div className="mail">
                <div className="titre">
                  <h4>Mon Contact</h4>
                </div>
                <div className="infoline">
                  <span><a href="mailto:rovaniainarakotozandry@gmail.com" target='_blank' rel='noopener noreferrer'  style={{color:"white"}}>rovaniainarakotozandry2@gmail.com  </a></span>
                  <span style={{display:"flex", alignItems:"center"}}>
                    <PhoneIcons style={{fontSize:"16px"}}/>
                    +261 34 62 122 25
                  </span>
                  </div>
             </div>
    </div>
  )
}

export default Footer