
import { useState } from "react"
import Formulario from "./Formulario"
import Alert from "./Alert"
import SocialButton from "./SocialButton"


const Registro = ({facebook,git,linke}) => {
    const [atento,setAtento] = useState({
            error: "",
            msg:"",
            color:"",
        
    })
  return (
    <>
    <h1>Crea una cuenta</h1>
    <SocialButton 
                FacebookIcon={facebook} 
                GithubIcon={git} 
                LinkedinIcon={linke} 
            />
    <h6>O usa tu email para registrarte</h6>
    <Formulario setAtento={setAtento} />
    {atento.msg && <Alert color={atento.color}>{atento.msg}</Alert>}
    
    </>
  )
}

export default Registro