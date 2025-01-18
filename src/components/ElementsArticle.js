import {Link } from "react-router-dom"; 
function ElementsArticle(props) { 
    return ( 
   <div className="container">
    <div className="row">
   {
   props.articles.map(article =>{ 
   return( 
   <div key={article.id} className="col-sm-4">
   <div className="card" style={{"width": "15rem"}}>
    <img src={article.imageartpetitf} className="card-img-top"
   alt={article.designation}/>
    <div className="card-body">
    <h5 className="card-title">{article.designation}</h5>
    <p className="card-text">{article.marque}</p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{article.prixVente} £</li>
    </ul>
    <div className="card-body">
    <Link exact to={`/editArticle/${article.id}`} className="primary">Modifier</Link>
    <button onClick={()=>{props.deleteProd(article.id)}} className="danger">Supprimer</button>

    </div>
   </div>
    </div>
    ) 
    }) 
    }
   </div>
   </div>
    ); 
   } 
   export default ElementsArticle; 
   