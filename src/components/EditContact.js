import { useEffect, useState } from "react";
import { GetOneContact } from "../Services/GetOneContact";

const EditContact = ({editContact, history,match}) => {
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
            editContact(input,match.params.id);
            setInput({name:"",email:""})
            //push to home page
            history.push("/");
        }

        useEffect(()=>{
            const localFetch = async()=>{
                try {
                   const {data}= await GetOneContact(match.params.id);
                   setInput({name:data.name, email:data.email})
                } catch (error) {
                    
                }
            };
            localFetch();
        },[])
   
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
           <button type="submit">Edit Contact</button>
           </form>
        );
   }
    
   export default EditContact;