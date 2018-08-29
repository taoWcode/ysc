import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import './style.scss';

const BasicCarousel = (props)=>(

    
    <Carousel className = 'm-carousel-style'
    autoplay = { true }
    infinite
    dotStyle={dotStyle}
    dotActiveStyle={dotActiveStyle}
    >
       {props.swiper.map((item,idx)=>(

           <Link className = 'wrap-item' to={item.url} key={idx}>
               <img src={item.imgUrl} alt={props.alt || ""}/>
           </Link>


       ))}

    </Carousel>

);



const dotStyle = {
    width:'30px',
    height:'6px',
    
    borderRadius:'100px',
    backgoundColor:'#fff'
}
const dotActiveStyle = {
    width:'30px',
    height:'6px',
    
    borderRadius:'100px',
    backgoundColor:'#333'
}

export default BasicCarousel
