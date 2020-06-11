import React from 'react';
import axios from 'axios';

import MovieItem from './MovieItem';
import { Pagination, Spin, Alert } from 'antd';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list : [],
            total: 0,
            isloading: true,
            type: props.match.params.type,
            page: props.match.params.page || 1,
            pageSize: 10,
            apikey: '0b2bdeda43b5688921839c8ecb20399b',
        }
    }
    
    componentDidMount() {
        this.loadData();
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            list : [],
            total: 0,
            isloading: true,
            type: nextProps.match.params.type,
            page: nextProps.match.params.page || 1,
        }, function() {
            this.loadData();
        });

    }
    loadData() {
        const url = `https://douban.uieee.com/v2/movie/${this.state.type}`;
        const start = parseInt(this.state.page - 1) * this.state.pageSize;

        axios.get(url, {
            params: {
                start: start,
                count: this.state.pageSize,
            }
        })
        .then( response => {
            this.setState({
                list: response.data.subjects,
                total: response.data.total,
                isloading: false
            });
        })
        .catch( error => {
            console.log(error);
        });
    }
    render() { 
        if (this.state.isloading) {
            return (<Spin tip="Loading...">
                <Alert
                message="正在加载中"
                description="精彩内容,马上呈现."
                type="info"
                />
            </Spin>)
        } else {
            return ( 
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%', marginTop: '5px', }}>
                        { 
                            this.state.list.map( (item, index) => {
                                return <MovieItem { ...item } key={ index } history={ this.props.history } ></MovieItem>
                            })
                        }
                    </div>
                    <Pagination showSizeChanger={false} defaultCurrent={ this.state.page } pageSize={ this.state.pageSize } total={ this.state.total } onChange={ this.onChange } style={{ padding: '10px 0' }}></Pagination>
                </div>
            );
        }

    }

    onChange = (page) => {
        this.setState({
            page: page
        });
        // 编程式导航
        this.props.history.push('/movie/'+this.state.type+'/'+page)
    }
}
 
export default MovieList;