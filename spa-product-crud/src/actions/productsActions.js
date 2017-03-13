import Constants from "../refrence/Constants";
import axios from "axios";

export function fetchProductsList(url) {
    return {
        type: Constants.FETCH_PRODUCTS_LIST,
        payload: axios(url)
    }
}

export function fetchProductDetails(url) {
    return {
        type: Constants.FETCH_PRODUCT_DETAILS,
        payload: axios(url)
    }
}