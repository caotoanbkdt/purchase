import React from 'react';
import Product from './Product';

function Products() {
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                <Product />
                <Product />
                <Product />
            </div>
        </section>

    );
}

export default Products;
