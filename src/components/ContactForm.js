import { useState } from "react";
import { AddOneContact } from "../Services/AddConntact";
const ContactForm = ({ history}) => {
 const [input, setInput]= useState({
     name:"", email:""});

     const changeHandler=(e)=>{
         setInput({...input,[e.target.name]:e.target.value})
         console.log(e.target.value);
     }

    
        

     const submitHandler=async (e)=>{
         e.preventDefault();
         if(!input.name|| !input.email){
             alert("insert Contact, All feilds are mandatory");
             return
         }
         try {
            const {data}= await AddOneContact(input);
            setInput({name:"",email:""})
            history.push("/");
            //push to home page
                   
         } catch (error) { }
       } 
     

    return ( 
        <form  onSubmit={submitHandler}>
            <div className="formcontrol">
            <label>name: </label>
            <input type="text" name="name" onChange={changeHandler} value={input.name}/>
            </div>
            <div className="formcontrol">
            <label>email: </label>
            <input type="email" name="email" onChange={changeHandler} value={input.email}/>
            </div>
        <button type="submit">Add</button>
        </form>
     );
}
 
export default ContactForm;