import React from 'react';
import {  Spin, Button, Alert} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.match.params.id,
            info : {},
            isloading: true,
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData() {
        const url = `https://api.douban.com/v2/movie/subject/${this.state.id}`;
        axios({
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "mode": "cors"
            },
            dataType: 'jsonp',//这里修改成jsonp
        }).then(response => {
            this.setState({
                info: response.data,
                isloading: false
            });
        })
        .catch( error => {
            console.log(error);
            this.setState({
                isloading: false
            });
        });

    }
    render() { 
        return (
            <div>
                <Button type="primary" icon={<ArrowLeftOutlined />} onClick={this.goBack}> 返回 </Button>
                { this.renderInfo() }
            </div>
        )

    }
    renderInfo() {
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
                    <div style={{textAlign: 'center'}}>
                        <h1>{ this.state.info.title }</h1>
                        {/* <img src={ this.state.info.images.large || '' } alt="" /> */}
                    </div>
                    <div style={{ textIndent: '1.5em', lineHeight: '30px'}}>{ this.state.info.summary }</div>
                </div>
            );
        }
    }
    goBack = () => {
        this.props.history.goBack()
    }
}
 
export default MovieDetail;