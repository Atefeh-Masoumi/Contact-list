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
         if(!input){
             alert("insert Contact");
             return
         }
         addContact(input);
        // setInput('');
     }

    return ( 
        <form onSubmit={submitHandler}>
        
            <input type="text" name="name" onChange={changeHandler} value={input.name}/>
            <input type="email" name="email" onChange={changeHandler} value={input.email}/>
        <button type="submit">Add</button>
        </form>
     );
}
 
export default ContactForm;