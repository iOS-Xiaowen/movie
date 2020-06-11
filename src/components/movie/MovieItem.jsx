import React from 'react';

import { Rate } from 'antd';

import '../../css/movie.scss'

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() { 
        return ( 
            <div className='box' onClick={this.goDetail}>
                <img src={this.props.images.small.replace('img3', 'img1')} alt='' style={{ width: '150px', height: '170px', backgroundSize: 'cover', margin: '10px 0px' }}/>
                <p style={{ fontSize: '14px',  margin: '0 10px 5px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', 'WebkitBoxOrient': 'vertical', 'WebkitLineClamp': 2}} ><strong>电影名称:</strong>{this.props.title}</p>
                <p style={{ fontSize: '12px', margin: '5px 10px'}} ><strong>上映时间:</strong>{this.props.year}</p>
                <p style={{ fontSize: '12px',  margin: '5px 10px'}} ><strong>电影类型:</strong>{this.props.genres.join(" ")}</p>
                <div className='score'><Rate disabled allowHalf defaultValue={this.props.rating.average/2} style={{ fontSize: '11px'}}></Rate> {this.props.rating.average/2}分</div>
            </div> )
    }
    goDetail = () => {
        this.props.history.push('/movie/detail/'+this.props.id)
    }
}
 
export default MovieItem;