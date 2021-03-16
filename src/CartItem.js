import React from 'react';

class CartItem extends React.Component{
   
    render(){
        console.log('this.props', this.props);
        const {price,title,qty}=this.props.product;
        return(
            <div className="cart-item">
                 <div className="left-block">
                    <img style={styles.image} />
                 </div>

                 <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}> Rs {price}</div>
                    <div style={{color:'#888'}}>Qty : {qty}</div>
                 

                 <div className="cart-item-actions">
                     {/*BUttons */}
                    <img 
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740600.svg"
                        onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                        onClick={this.decreaseQuantity}
                        onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106795.svg"
                        onClick={()=>this.props.onDeleteProduct(this.props.product.id)}
                    />
                 </div>
                 </div>

            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ddd'

    }
}

export default CartItem;