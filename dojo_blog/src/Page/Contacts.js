import './contact.css'
import NaveBare from '../naveBare/naveBare'
import Footer from '../contenair/Footer'
import ContactFile from '../Component/ContactFile'

const Contactes = () => {
  return (
    <div>
        <NaveBare/>
        <div className='file'>
        <ContactFile/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contactes