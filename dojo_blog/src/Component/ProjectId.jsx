import { useParams } from 'react-router-dom'
import './contact.css'
import { data } from './Data'


const ProjectId = () => {

const {id} =  useParams()
const projectid = data[id]



  return (
    <div className="contact">
      
      <div className='data'>
        <img src={projectid.image} alt="img" className='image' />
        <span className='name'>{projectid.techno}</span>
     </div>
     
    </div>
  )
}

export default ProjectId