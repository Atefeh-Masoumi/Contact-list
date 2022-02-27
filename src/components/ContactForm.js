import { useState } from "react";

const ContactForm = ({addContact}) => {
 const [input, setInput]= useState({
     name:"", email:""});

     const changeHandler=(e)=>{
         setInput({...input,[e.target.name]:e.target.value})
         console.log(e.target.value);
     }

     const submitHandler=(e)=>{
         e.preventDefault();
         if(!input.name|| !input.email){
             alert("insert Contact, All feilds are mandatory");
             return
         }
         addContact(input);
         setInput({name:"",email:""})
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