import React, {Component} from "react";
import {Link} from "react-router";

class ProductListItem extends Component {
    render() {
        let product = this.props.product;
        return (
            <div className="thumbnail">
                <Link to={'products/?product=' + product._links.self.href}>
                    <img className="img-responsive" src={product.imageUrl + '?dummy=' + product.id}
                         alt="no image"/>
                </Link>
                <span className="text-primary">
                            {product.vendor} {product.model}
                </span>
                <span className="badge pull-right">
                            {product.price}$
                </span>
            </div>
        );
    }
}

export default ProductListItem;