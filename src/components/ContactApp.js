import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import NavBar from "./Navbar";

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
    return ( 
        <main>
            <NavBar/>
            <ContactForm addContact={addContact}/>
            <ContactList contacts={contacts} onDelete={deleteContact}/>
            
        </main>
     );
}
 
export default ContactApp;