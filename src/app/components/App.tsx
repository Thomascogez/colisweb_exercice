import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'shards-react';
import "shards-ui/dist/css/shards.min.css";
import fetchLocation from '../api/fetchLocation';
import {AppContextProvider} from '../context/AppContext';
import { addItemToLocalStorage, getLocalStorageByKey, hasKey } from '../util/localStorageUtil';
import style from './App.module.css';
import NavBar from './layout/NavBar/';
import Map from './Map';
import SearchList from './SearchList';

const App = () => {
  
  return (
    <AppContextProvider>
      <NavBar />
      <Container fluid className={style.MainContainer}>
        <Row className={style.MainRow}>
          <Col sm="12" lg="8">
            <Map />
          </Col>
          <Col sm="12" lg="4">
            <SearchList />
          </Col>
        </Row>
      </Container>
    </AppContextProvider>
  );
}

export default App;
