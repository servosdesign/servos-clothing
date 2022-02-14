import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header-component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
 useEffect(() => {
  checkUserSession()
 }, [checkUserSession]);
  
  return (
    <div>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage/>} />
          <Route exact path="/signin" element={
            currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
          }/>
        </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToPros = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToPros)(App);
