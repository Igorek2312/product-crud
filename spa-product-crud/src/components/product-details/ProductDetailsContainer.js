import React, {Component} from 'react'
import ProductDetails from './ProductDetails'
import NewCommentForm from './NewCommentForm'
import Comments from './Comments'


class ProductDetailsContainer extends Component {
    render() {
        let product = this.props.location.query.product;
        return <div>
            <ProductDetails product={product}/>
            <NewCommentForm product={product}/>
            <Comments/>
        </div>
    }
}

export default ProductDetailsContainer;