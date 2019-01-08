import React from 'react';
import ProductDetailContainer from '../container/productname'
import ProductNamesContainer from '../container/productdetail';

class HelloRedux extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div>I'm in react redux programming</div>
            <ProductDetailContainer></ProductDetailContainer>
            <hr></hr>
             <ProductNamesContainer></ProductNamesContainer>   
            </div>
            
         );
    }
}
 
export default HelloRedux;
