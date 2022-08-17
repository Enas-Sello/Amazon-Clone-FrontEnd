import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import ProductsItem from '../Components/Products/ProductsItem';

const Favourite = () => {
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.loggedInUser);
  const fav = useSelector((state) => state.favourite.favouriteItems);
  console.log(fav);
  useEffect(() => {
    if (!userinfo) {
      navigate('/login');
    }
  }, [userinfo, navigate]);

  return (
    <Container>
      <Helmet>
        <title>favourite</title>
      </Helmet>

      <Row>
        {fav.length === 0 ? (
          <Col>
            <h1>
             no favourite <MdOutlineRemoveShoppingCart />
            </h1>
            <Button className="py-2 px-4 mt-4" variant="warning">
              <Link
                style={{
                  fontSize: '1.5rem',
                  fontweight: '500',
                }}
                to="/"
              >
                add some products
              </Link>
            </Button>
          </Col>
        ) : (
          <>
            {' '}
            {fav.map((product) => {
              return <ProductsItem product={product} />;
            })}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Favourite;
