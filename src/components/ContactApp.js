import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
    const [contacts, setContacts]=useState([]);
    console.log(contacts);
    
    const addContact=(formValue)=>{
      
        setContacts([...contacts,{...formValue,id:Math.floor(Math.random()*1000)}])

    } 
    const deleteContact=(id)=>{
        const delContact = contacts.filter((c)=>c.id !== id);
        setContacts(delContact);
    }

    useEffect(()=>{
       const storage = JSON.parse(localStorage.getItem(contacts));
       if (storage) setContacts(storage);
    },[]);
    //CMD when mountig when updating
    useEffect(()=>{
        localStorage.setItem('contacts',JSON.stringify(contacts));
    },[contacts]);
 
    return ( 
        <main className="mainapp">
            
            <ContactForm addContact={addContact}/>
            <ContactList contacts={contacts} onDelete={deleteContact}/>
            
        </main>
     );
}
 
export default ContactApp;