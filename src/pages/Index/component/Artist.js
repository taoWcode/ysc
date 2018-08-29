import React from 'react';
import { Link } from 'react-router-dom'; 
import Cm from "../../../layouts/Cm";

const Artist = (props) => (
    <Cm ch_title="我们的艺术家" en_title="OUR ARTIST" tar="/">
        <div className="m-artist-section">
            <Link className="first-item" to="/">
                <div className="pic">
                    <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                </div>
                <div className="info">
                    <em className="name">艺术家昵称</em>
                    <span className="cate">油画家</span>
                    <span className="from">来自&nbsp;中国</span>
                </div>
            </Link>

            <div className="artist-list">
                <Link className="item" to="/">
                    <div className="pic">
                        <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                    </div>
                    <div className="info">
                        <em className="name">艺术家昵称</em>
                    </div>
                </Link>
                <Link className="item" to="/">
                    <div className="pic">
                        <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                    </div>
                    <div className="info">
                        <em className="name">艺术家昵称</em>
                    </div>
                </Link>
                <Link className="item" to="/">
                    <div className="pic">
                        <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                    </div>
                    <div className="info">
                        <em className="name">艺术家昵称</em>
                    </div>
                </Link>
                <Link className="item" to="/">
                    <div className="pic">
                        <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                    </div>
                    <div className="info">
                        <em className="name">艺术家昵称</em>
                    </div>
                </Link>
            </div>
        </div>
    </Cm>
)


export default Artist;