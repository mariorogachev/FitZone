import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your e-mail!")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="App">
            <h1>Forgot Password</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" placeholder="E-mail" /><br/><br/>
                <button>Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;