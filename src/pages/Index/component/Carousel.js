import React from 'react';
import  BasicCarousel  from '../../../components/Carousel/index';
import {Link} from 'react-router-dom';
import {Icon} from 'antd-mobile';

const IndexCarousel = ( props ) => (
    <div className = 'm-index-carousel'>
        <BasicCarousel swiper = {props.swiper}/>
        <SearchBar/>
    </div>
)

const SearchBar = (props) =>(
    <div className = 'm-index-search'>
        <span className = 'left-word'>精选</span>
        <Link to="/" className="search-btn">
            <span><Icon type="search" size="md" color="#fff"/></span>
        </Link>
    </div>
)

export default IndexCarousel;  