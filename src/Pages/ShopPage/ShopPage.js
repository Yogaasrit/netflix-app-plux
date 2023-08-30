import React from 'react';
import { Helmet } from 'react-helmet';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Apple-iPhone-13-pro-smartphone',
      description:
        '15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel.\n      Cinematic mode adds shallow depth....',
      price: 84900,
      quantity: 30
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21 FE 5G',
      description:
        'Samsung Galaxy S21 5G supports frequency bands GSM, LTE , 5G. Official\n   announcement date is January 14 2021.',
      price: 54600,
      quantity: 20
    }
  ];
  return (
    <div>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <h1 style={{ color: '#748720' }}>🎉🎉Welcome to ShopPage!🎉🎉</h1>
      <h4>Shop with Us...!</h4>
      <div className="row">
        {products?.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    // onClick = {handleAddToCart(product.name)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;