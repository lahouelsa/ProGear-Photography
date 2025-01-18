import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom';
const ElementsArticleCard= (props)=> {
const { cartCount,addItem } = useShoppingCart();
const addToCart = (product) => {
const target = {
id : product.id,
title : product.designation,
image : product.imageartpetitf,
price : product.prixVente,
 qtestock : product.qtestock,
quantity : 1
};
addItem(target);
console.log('Item added to cart:', target);
};
return (
<>
<AppBar position="static" color='default'>
<Toolbar>
<Button color="inherit"><Link
to="/cart">{cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
</Toolbar>
</AppBar>
<div className="row">
{props.articles && props.articles.map((product) => (
<article className="col-sm-4" key={product.id}> 
<div className="cardd">
<img src={"/"+product.imageartpetitf} className="img-fluid rounded-start" alt={product.designation} style={{ maxWidth: '400px', maxHeight: '350px' ,paddingTop:'40px' }}/>
</div>
<div className="textcenter">
<div>{product.designation.substr(0,20)} ... </div>
<div>Prix : {product.prixVente} TND </div>
</div>
<div className="textcenter">
<button
disabled={product.qtestock <= 1}
className="warning"
onClick={() => addToCart(product)}>
Add to Cart
</button>
</div>
</article>
))}
</div>
</>
);
}
export default ElementsArticleCard;