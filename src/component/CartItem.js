import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../reduxCreate/action';
function CartItem(props) {
    const { product, index } = props;
    function handleClick(product, index, changeValue) {
        props.handleDecrease(product, index, changeValue);
    }
    function handleClose() {
        props.handleClose(index);
    }

    return (
        <tr>
            <th scope="row">
                <img src={product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.name}</strong>
                </h5>
            </td>
            <td>{product.cost}$</td>
            <td className="center-on-small-only">
                <span className="qty">{product.quatity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light">
                        <a onClick={() => handleClick(product, index, - 1)} >—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light">
                        <a onClick={() => handleClick(product, index, 1)}>+</a>
                    </label>
                </div>
            </td>
            <td>{product.cost * product.quatity}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick={handleClose} >
                    X
        </button>
            </td>
        </tr>

    );
}

const mapStateToProps = (state) => {
    return { add: state.addToCart };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDecrease: (product, index, changeValue) => {
            dispatch(actions.decreaseCart(product, index, changeValue));
        },
        handleClose: (index) => {
            dispatch(actions.closeForm(index));
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
