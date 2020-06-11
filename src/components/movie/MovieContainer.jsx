import React from 'react';

import {Route, Link, Switch} from 'react-router-dom';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;


class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Layout style={{ backgroundColor: '#fff' }}>
                    <Sider width={ 180 } style={{ height: '100%', backgroundColor: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={ [window.location.hash.split('/')[2]] }
                            style={{ borderRight: 0 }} >
                            <Menu.Item key="in_theaters"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
                            <Menu.Item key="coming_soon"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
                            <Menu.Item key="top250"><Link to='/movie/top250/1'>Top250</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ paddingLeft: '1px' }}>
                        <Content
                            style={{
                                margin: 0,
                                minHeight: 240,
                                backgroundColor: '#fff'
                            }}>
                            <Switch>
                                <Route exact path="/movie/detail/:id" component={ MovieDetail }></Route>
                                <Route exact path="/movie/:type/:page" component={ MovieList } ></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>);
    }
}
 
export default MovieContainer;