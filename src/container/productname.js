import React from 'react';
import { connect } from "react-redux";

class ProductNamesContainer extends React.Component {

    renderThePropsIReceived(){
        console.log("I have receiver the props from the store")
        console.log(this.props.myProducts)
        return this.props.myProducts.map((product)=>{
            return(
                <li key={product.id}>
                    {product.name}
                </li>
            )
        }

        )
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h4><p>Product Names</p></h4>
                {this.renderThePropsIReceived()}
            </div>

         );
    }
}

function convertStoreToPropsNow(appstore){
    console.log(appstore)
    return{
        myProducts: appstore.products
    }
}
 
export default connect(convertStoreToPropsNow)(ProductNamesContainer);