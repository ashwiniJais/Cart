import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:1999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        //this.state.qty++;
       // console.log('this.state', this.state);
       //set state form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //set state form 2
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        })
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                 <div className="left-block">
                    <img style={styles.image} />
                 </div>

                 <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}> Rs {price}</div>
                    <div style={{color:'#888'}}>Qty : {qty}</div>
                 </div>

                 <div className="cart-item-actions">
                     {/*BUttons */}
                    <img 
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740600.svg"
                        onClick={this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106795.svg"
                    />
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