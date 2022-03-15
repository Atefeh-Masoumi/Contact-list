
// import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { getCntc } from "../Services/GetService";

import EditContact from "./EditContact";
import { PutOneContact } from "../Services/PutOneContact";

const ContactApp = () => {
    // const [contacts, setContacts]=useState([]);
   
    
    // const addContact=async(formValue)=>{
    //   try {
    //      const {data}= await AddOneContact(formValue);
    //       setContacts([...contacts,{...formValue,data}]);        
    //   } catch (error) { }
    // } 
    // const deleteContact=async(id)=>{
    //     try {
            
    //         await deleteOneContact(id);
    //         const delContact = contacts.filter((c)=>c.id !== id);
    //         setContacts(delContact);
    //     } catch (error) {
            
    //     }
    // }

    // useEffect(()=>{
    // //    const savestorage = JSON.parse(localStorage.getItem(contacts));
    // //    if (savestorage) setContacts(savestorage);
    // const getContacts= async ()=>{
    //     const {data}= await getCntc();
    //     setContacts(data);
    // };
    // try {
        
    // getContacts();
        
    // } catch (error) {}  
    // },[]);
    //CMD when mountig when updating
    // useEffect(()=>{
    //     localStorage.setItem('contacts',JSON.stringify(contacts));
    // },[contacts]);
//  const editContact= async(contact, id)=>{
//      try {
//          await PutOneContact(id, contact);
//          const {data} = await getCntc();
//          setContacts(data);
//          console.log(data);
//      } catch (error) {
         
//      }

//  }
    return ( 
        <main className="mainapp">
            <Switch>

                {/*اینجا تو روت از کامپوننت استفاده نمیکینیم چون میاد از دوبار  دام جدید میسازه که این واسه پرفورمنس برنامه
                 
                خوب نیس برای همین از رندر استفاده میکنیم 
                اینجا رندر دیگه نمیاد المنت رو بسازه و میاد اپدیت میکنه  */}
            <Route path="/edit/:id" component={EditContact}/>
            <Route path="/user/:id" component={ContactDetail} />
            <Route path="/add" component={ContactForm }/>
            <Route path="/" exact component={ContactList} />
            {/* <Route path="/" render={(props)=><ContactList contacts={contacts} onDelete={deleteContact} {...props}/>}/> */}
            </Switch>
            {/* <ContactForm addContact={addContact}/>
            <ContactList contacts={contacts} onDelete={deleteContact}/> */}
            
        </main>
     );
}
 
export default ContactApp;