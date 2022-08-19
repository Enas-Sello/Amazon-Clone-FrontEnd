import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useGetUserCartQuery } from '../../../Redux/Api';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const { data: cartData } = useGetUserCartQuery(loggedInUser?.token, {
    skip: loggedInUser ? false : true,
  });
 

  // console.log(cartData.products.length);
  return (
    <>
      <Link to="/CartPage" style={{ cursor: 'pointer' }}>
        <div className="cart">
          <span className="cart-count ms-sm-1 mt-1 me-3 font-monospace">
           {cartData?.products.length}
          </span>
          <RiShoppingCartLine className="fa-solid fs-3 me-4 text-white cart-img" />
        </div>
      </Link>
    </>
  );
}
