import React from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import { connect } from 'react-redux';

function Cart(props) {
    const { addProduct } = props;
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {addProduct.length > 0 && addProduct.map(product => <CartItem key={product.id} product={product} />)}
                        <CartResult />
                    </tbody>
                </table>
            </div>
        </section>

    );
}
const mapStateToProps = (state) => {
    return { addProduct: state.addToCart };
}
export default connect(mapStateToProps, null)(Cart);
