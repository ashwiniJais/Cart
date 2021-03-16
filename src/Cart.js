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
    handleIncreaseQuantity=(product)=>{
       // console.log("hey increase quantity of product", product);
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
          products:products  
        })
    };
    handleDecreaseQuantity=(product)=>{
       // console.log("decrease quantity of product=", product);
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty>0){
            products[index].qty-=1;
        }

        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;

        const items=products.filter((item)=>item.id!=id);
        //this will return me an array of items whose id!=id passed in the function

        this.setState({
            products:items
        })
    }

    render(){
        const { products }=this.state;
        return(
            
           <div className="cart">
               {products.map((product)=>{
                   return <CartItem 
                   product={product} 
                   key={product.id}
                   onIncreaseQuantity={this.handleIncreaseQuantity}
                   onDecreaseQuantity={this.handleDecreaseQuantity}
                   onDeleteProduct={this.handleDeleteProduct}
                   />
               })}
           </div>
        )
    }
}



export default Cart;