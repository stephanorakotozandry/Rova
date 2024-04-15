import Contact from "./Contact"
import { data } from "./Data"

const ContactFile = () => {
  return (
    <div className="file">
        {
            data.map((index, val)=>{
                return <Contact  id={val} image={index.image} name ={index.name}/>
            })
        }
        
    </div>
  )
}

export default ContactFile