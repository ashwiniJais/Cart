import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products:[
               {
                price:1999,
                title:'Mobile Phone',
                qty:1,
                img:'',
                id:1
               },
               {
                price:999,
                title:'smart Watch',
                qty:8,
                img:'',
                id:2
               },
               {
                price:499,
                title:'Stylus',
                qty:5,
                img:'',
                id:3
               }
           ]
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    render(){
        const { products }=this.state;
        return(
            
           <div className="cart">
               {products.map((product)=>{
                   return <CartItem product={product} key={product.id}/>
               })}
           </div>
        )
    }
}



export default Cart;