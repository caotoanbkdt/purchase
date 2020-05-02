import React from 'react';
import { connect } from 'react-redux';
function CartResult(props) {

    function sumDeposit() {
        return (
            {
                deposit: props.cart.reduce((sum = 0, item) => sum + item.quatity * item.cost, 0),
                quatity: props.cart.reduce((sum = 0, item) => sum + item.quatity, 0)
            }

        );


    }
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>{sumDeposit().quatity}</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{sumDeposit().deposit}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
}
const mapStateToProps = (state) => {
    return { cart: state.addToCart };
}

export default connect(mapStateToProps, null)(CartResult);

