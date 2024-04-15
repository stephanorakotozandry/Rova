import Email from '../Component/Email'
import Footer from '../contenair/Footer'
import NaveBare from '../naveBare/naveBare'
import'./contact.css'

const EmailContact = () => {
  return (
    <div>
         <NaveBare/>
        <div className='file'>
        <Email/>
        </div>
        <Footer/>
    </div>
  )
}

export default EmailContact