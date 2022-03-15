import { useEffect, useState } from "react";
import { GetOneContact } from "../Services/GetOneContact";
import { PutOneContact } from "../Services/PutOneContact";
const EditContact = ({ history,match}) => {
    const [input, setInput]= useState({
        name:"", email:""});
   
        const changeHandler=(e)=>{
            setInput({...input,[e.target.name]:e.target.value})
            
        }
        
   
        const submitHandler= async(e)=>{
            e.preventDefault();
            if(!input.name|| !input.email){
                alert("insert Contact, All feilds are mandatory");
                return
            }

            try {
                await PutOneContact(match.params.id, input);
                // const {data} = await getCntc();
                
                // setInput({name:"",email:""})
                //push to home page
                history.push("/");
            } catch (error) {
                
            }
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