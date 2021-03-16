import React from 'react';

class CartItem extends React.Component{
   
    increaseQuantity=()=>{
        //this.state.qty++;
       // console.log('this.state', this.state);
       //set state form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });
      

        //set state form 2 -> if previous state required
        
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        },()=>{
            console.log(this.state);
        })
       
    }
    decreaseQuantity=()=>{
        var qty=this.state.qty;
        if(qty===0){
            return;
        }

        this.setState((prevState)=>{
            return {
                    qty:prevState.qty-1
                
                
            }
        })
    }
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
                        onClick={this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                        onClick={this.decreaseQuantity}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106795.svg"
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