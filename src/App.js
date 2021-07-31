import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Store from './pages/Context/context';
import { Template } from './components/MainComponents'
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Store>
          <Header />
          <Routes />
          <Footer />
        </Store>
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (State) => {
  return {
    user:State.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
