import React from 'react';
import Product from './Product';
import dataList from '../data/datalist';

function Products() {
    const { phone } = dataList;
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {phone.map((product, index) =>
                    <Product key={product.id} product={product} index={index} />
                )}

            </div>
        </section>

    );
}

export default Products;
