import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
       products:[
           {
            price:1999,
            title:'Mobile Phone',
            qty:1,
            img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            id:1
           },
           {
            price:9999,
            title:'smart Watch',
            qty:8,
            img:'https://images.unsplash.com/photo-1598516802414-50a01bee818d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id:2
           },
           {
            price:49999,
            title:'Laptop',
            qty:1,
            img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
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

getCartCount=()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}

getCartTotal=()=>{
  const {products}=this.state;

  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price
  })
  return cartTotal;
}
  
  
  render(){
    const {products}=this.state;
      return (
        <div className="App">
          
          <h1>Cart</h1>
          <NavBar count={this.getCartCount()} />
          <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={{padding:10, fontSize:20 }}>TOTAL:{this.getCartTotal()}</div>
        </div>
      );
  }
}



export default App;
