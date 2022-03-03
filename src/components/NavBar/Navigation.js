import {NavLink} from 'react-router-dom';


const items=[
  {name:"Home", to:"/", exact:"true"},
  {name:"contact list", to:"/contactlist" },
 
  

]
const Navigation = () => {

    return (
    
    <nav>
        <ul>
            {items.map((item)=>{
              return(
                <li key={item.to}>
                  <NavLink
                  to={item.to}
                  activeClassName="activelink"
                  exact={item.exact||false}
                  >
                    {item.name}
                  </NavLink>
            
                </li>
              )
            })}
          
          
            
        </ul>
    </nav>
    
 
    );
}
 
export default Navigation;