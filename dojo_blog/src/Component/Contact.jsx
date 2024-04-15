import { useHistory } from 'react-router-dom'
import './contact.css'

const Contact = ({name,image, id}) => {

 const history = useHistory()


  return (
   
    
    <div className='contact'>
      <div className="data" onClick={()=> history.push("/projet/"+id)}>
        <img src={image}className="image"/>
       <span className="name">{name}</span>
      </div>
    </div>
  
    
  )
}

export default Contact