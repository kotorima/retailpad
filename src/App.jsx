import React from 'react';
import {SnackbarProvider} from 'notistack';
import Header from './components/Header/Header';
import CityList from './components/CityList/CityList';
import Navigation from "./routing/Navigation";
import Layout from "./routing/Layout";
import './App.scss';

function App() {
  return (
    <SnackbarProvider maxSnack={10}>
      <div className='App'>
        <Header />
        <CityList />
        <Layout>
          <Navigation />
        </Layout>
      </div>
    </SnackbarProvider>
  );
}

export default  App;
