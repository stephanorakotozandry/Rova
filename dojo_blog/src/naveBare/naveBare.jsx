
import { useHistory } from 'react-router-dom'
import'./naveBare.css'


const NaveBare = () => {



   const history = useHistory()

  return (

    <div className='navebare'>
      <div className="logo"><h2>St</h2></div>
      <div className="logo12"></div>
      <div className="logo22"></div>
      <div className="logo32"></div>
       <span onClick={()=>history.push("/")}>Accueil</span>
       <span  onClick={()=>history.push("/education")}>Education</span>
       <span  onClick={()=>history.push("/projet") }>Projet</span>
       <span  onClick={()=>history.push("/mail")}>CONTACT</span>  
    </div>
  )
}

export default NaveBare