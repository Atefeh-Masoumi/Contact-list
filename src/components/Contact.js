import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import userprofile from '../img/userprofile.png';
const Contact = ({contacts,onDelete}) => {

    const {name, email, id} = contacts
    return ( 
     <div>
         
         <div className="contact" key={id}>
            <img src={userprofile} alt="user"/>
        <Link to={{pathname:`user/${id}`, state:{contacts:contacts}}}>
        <div className="contactinfo">
            <p> name: {name}</p>    
            <p> email: {email}</p>
              
        </div>
        </Link>
            <button onClick={onDelete}><BsFillTrashFill style={{color:"red",cursor:"pointer",width:"1.5em",height:"1.5em"}}/> </button>
        </div>
     </div>
     );
}
 
export default Contact;