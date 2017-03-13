import React, {Component} from "react";
import {connect} from 'react-redux'
import {fetchProductDetails} from "../../actions/productsActions";

function mapStateToProps(state) {
    return {
        productDetailsState: state.productDetailsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

class ProductDetail extends Component {

    componentWillMount() {
        let productUrl=this.props.product;
        this.props.dispatch(fetchProductDetails(productUrl));
    }

    render() {
        let productState = this.props.productDetailsState;

        if (productState.fulfilled) {
            let product = productState.product;
            let colorBoxStyle = {
                width: '30px',
                height: '30px',
                background: product.color
            };
            return <div className="row">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={product.imageUrl} className="img-responsive"/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>
                                        {product.vendor} {product.model}
                                        <span className="small"> {product.price}$</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-info">
                                    Memory:
                                </div>
                                <div className="col-sm-6 text-muted">
                                    {product.memory} GB
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-info">
                                    Weight:
                                </div>
                                <div className="col-sm-6 text-muted">
                                    {product.weight} kgs
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-info">
                                    Color:
                                </div>
                                <div className="col-sm-6">
                                    <div style={colorBoxStyle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (productState.pending) {
            return <div>
                Loading...
            </div>
        }

        return <div>Error</div>
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ProductDetail);