/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';
import axios from 'axios';

import {HashRouter, Route, Link} from 'react-router-dom';
import Home from './components/home/HomeContainer';
import Movie from './components/movie/MovieContainer';
import About from './components/about/AboutContainer';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);

  }
  location() {
    axios.get('https://restapi.amap.com/v3/ip', {
      params: {
        key: '08ea533957fe97ecf47de7f8f05ebc9d'
      }
    })
    .then( response => {
        window.localStorage.city =  response.data.province;
    })
    .catch( error => {
        console.log(error);
    });
  }

  render() { 
    return ( 
      <HashRouter>
      <div className="App">
        <Layout className="layout" style={{ backgroundColor: '#fff', height: '100%' }}>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
              <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
              <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
              <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ flex: 1, backgroundColor: '#fff' }}>
            <div style={{ backgroundColor: '#fff', height: '100%' }}>
              <Route path="/home" component={Home}/>
              <Route path="/movie" component={Movie}/>
              <Route path="/about" component={About}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Movie ©2020 Created by Zhang Xiaowen</Footer>
        </Layout>
      </div>
      </HashRouter> );
  }
}
 
export default App;
