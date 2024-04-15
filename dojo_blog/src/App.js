import {BrowserRouter, Route, Switch } from "react-router-dom"
import"./App.scss"
import Accueiles from "./Page/Accuiels"
import Contactes from "./Page/Contacts"
import Projets from "./Page/Projets"
import ProjetId from "./Page/ProjeteId"
import EmailContact from "./Page/EmailContact"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'




export default function App() {

  return(
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Switch>
         <Route path="/" exact component={()=><Accueiles/>}/>
         <Route path="/education" component={()=><Projets/>}/>
         <Route path="/projet/:id" component={()=><ProjetId/>}/>
         <Route path="/projet" component={()=><Contactes/>}/>
         <Route path="/mail" component={()=><EmailContact/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}