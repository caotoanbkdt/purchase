import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../reduxCreate/action';

function Product(props) {
    const { product } = props;
    function handleClick() {
        props.addToCart(product);
    }
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image}
                        className="img-fluid" alt="" />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.des}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.cost}$</span>
                        <span className="right" onClick={handleClick}>
                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => {
            dispatch(actions.addToCart(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
