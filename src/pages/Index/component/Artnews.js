import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import Cm from "../../../layouts/Cm";

const Artnews = (props) => (
    <Cm ch_title="艺术事儿" en_title="ART NEWS" tar="/">

        <NewsCarousel/>

    </Cm>
);

const NewsCarousel = (props) => (
    <Carousel className = 'm-carousel-style'
        autoplay = { true }
        infinite
        dotStyle={dotStyle}
        dotActiveStyle={dotActiveStyle}
    >
      

           <Link className = 'wrap-item wrap-item-news' to="/" key={1}>
               <div className="pic">
                   <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%96%B0%E9%97%BB_1.png" alt="/"/>
                </div>
                <div className="info">
                    <p className="title s_overflow2">艺术家们玩起流行元素来可谓信手拈来</p>
                    <b className="author s_overflow">作者昵称</b>
                    <p className="des s_overflow2">起蒙德里安你可能只是有所耳闻，但对于他爵士乐一般的几...</p>
                </div>
           </Link>
           <Link className = 'wrap-item wrap-item-news' to="/" key={2}>
               <div className="pic">
                   <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%96%B0%E9%97%BB_1.png" alt="/"/>
                </div>
                <div className="info">
                    <p className="title s_overflow2">艺术家们玩起流行元素来可谓信手拈来</p>
                    <b className="author s_overflow">作者昵称</b>
                    <p className="des s_overflow2">起蒙德里安你可能只是有所耳闻，但对于他爵士乐一般的几...</p>
                </div>
           </Link>


      

    </Carousel>
)

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

export default Artnews;