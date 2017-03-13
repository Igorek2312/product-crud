import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProductsList} from "../actions/productsActions";
import ProductsListItem from "./ProductListItem";
import ApiEnpoints from "../refrence/ApiEnpoints";
import {browserHistory} from "react-router";


function mapStateToProps(state) {
    return {
        productsState: state.productListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {dispatch: dispatch};
}

function mapToProductListItem(product) {
    return <ProductsListItem key={product.id} product={product}/>
}

function mapToFourProductListItemsRow(items) {
    return <div key={items[0].key} className="row">
        <div className="col-sm-3">
            {items[0]}
        </div>
        <div className="col-sm-3">
            {items[1]}
        </div>
        <div className="col-sm-3">
            {items[2]}
        </div>
        <div className="col-sm-3">
            {items[3]}
        </div>
    </div>
}

class ProductsList extends Component {
    componentWillMount() {
        let productsParam = this.props.location.query.products;
        if (productsParam){
            this.props.dispatch(fetchProductsList(productsParam));
        }else {
            this.props.dispatch(fetchProductsList(ApiEnpoints.PRODUCTS));
        }
    }

    componentWillReceiveProps(props) {
        let productsState = props.productsState;
        if (productsState.fulfilled) {
            browserHistory.push(`/#/?products=${productsState.products._links.current.href}`);
        }
    }

    goPrevious(){
        let url = this.props.productsState.products._links.prev.href;
        this.props.dispatch(fetchProductsList(url));
    }

    goNext(){
        let url = this.props.productsState.products._links.next.href;
        this.props.dispatch(fetchProductsList(url));
    }

    render() {
        let productsState = this.props.productsState;
        if (productsState.fulfilled) {
            let productListItems = productsState.products._embedded.products
                .map(mapToProductListItem)
                .chunk(4)
                .map(mapToFourProductListItemsRow);

            let links = this.props.productsState.products._links;

            return <div>
                {productListItems}
                <div className="row">
                    <div>
                        <div className="col-sm-6 text-right">
                            <button disabled={!links.prev} onClick={this.goPrevious.bind(this)}  className="btn btn-primary">Previous</button>
                        </div>
                        <div className="col-sm-6 text-left">
                            <button disabled={!links.next} onClick={this.goNext.bind(this)} className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        else {
            return <div>Loading...</div>
        }

        return <div>Error</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)