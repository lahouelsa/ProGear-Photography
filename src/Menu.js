import React,{useState} from "react"; 
import {Link } from "react-router-dom"
import {auth} from "./fireConfig"; 
import { onAuthStateChanged} from "firebase/auth"; 
function Menu() { 
 const [isLoggedIn, setIsLoggedIn] = useState(false); 
 onAuthStateChanged(auth, (user) => { 
 return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
 }); 
 const logOut=()=>{ 
 auth.signOut().then(() => { 
 console.log('singOut'); 
 }).catch((error) => { 
 console.log(error); 
 }); 
 
 } 
    return (  
        <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle
navigation">
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<Link className="nav-link active" aria-current="page" to="/Acceuil">Admin</Link>
 </li>
<li className="nav-item">
<Link className="nav-link" to="/articles">Client</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/addArticle">Add Client</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="./clientSide/ListCards">Card Lis</Link>
</li>

</ul>
{!isLoggedIn 
 ? ( 
 <Link className="btn btn-outline-primary" to="/loginclient">Log 
In</Link>
 ):( 
 <button className="btn btn-outline-primary"
onClick={()=>logOut()}>Log Out</button>
 ) 
 }

<form className="d-flex" role="search">
<input className="form-control me-2" type="search"
placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success"
type="submit">Search</button>
</form>
</div>
</div>
</nav>
        
    );
}

export default Menu;