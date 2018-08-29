import React from 'react';
import { Link } from 'react-router-dom'; 
import Cm from "../../../layouts/Cm";


const Latest = (props) => (

    <Cm ch_title="最新精选" en_title="LATEST" tar="/">

        <div className = "m-latest-section">
            <ul className="f-latest-list">
                <li className="item" key={1}>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png" alt=""/>
                        </div>
                        <div className="info">
                            <span className="price">&yen;&nbsp;16,200</span>
                            <span className="title">会心集•白雪伴煎茶</span>
                        </div>
                    </Link>
                </li>
                <li className="item" key={2}>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png" alt=""/>
                        </div>
                        <div className="info">
                            <span className="price">&yen;&nbsp;16,200</span>
                            <span className="title">会心集•白雪伴煎茶</span>
                        </div>
                    </Link>
                </li>
                <li className="item" key={3}>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png" alt=""/>
                        </div>
                        <div className="info">
                            <span className="price">&yen;&nbsp;16,200</span>
                            <span className="title">会心集•白雪伴煎茶</span>
                        </div>
                    </Link>
                </li>
                <li className="item" key={4}>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png" alt=""/>
                        </div>
                        <div className="info">
                            <span className="price">&yen;&nbsp;16,200</span>
                            <span className="title">会心集•白雪伴煎茶</span>
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className="s-latest-list">
                <li className="item" key={1}>
                    <Link to="/">
                        <div className="pic">
                            <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png"/>
                        </div>
                        <div className="info">
                            <p className="price">&yen;&nbsp;16,200</p>
                            <p className="title s_overflow">会心集•白雪伴煎茶</p>
                        </div>
                    </Link>
                </li>
                <li className="item" key={2}>
                    <Link to="/">
                        <div className="pic">
                            <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png"/>
                        </div>
                        <div className="info">
                            <p className="price">&yen;&nbsp;16,200</p>
                            <p className="title s_overflow">会心集•白雪伴煎茶</p>
                        </div>
                    </Link>
                </li>
                <li className="item" key={3}>
                    <Link to="/">
                        <div className="pic">
                            <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png"/>
                        </div>
                        <div className="info">
                            <p className="price">&yen;&nbsp;16,200</p>
                            <p className="title s_overflow">会心集•白雪伴煎茶</p>
                        </div>
                    </Link>
                </li>
                <li className="item" key={4}>
                    <Link to="/">
                        <div className="pic">
                            <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E4%BD%9C%E5%93%81_-1.png"/>
                        </div>
                        <div className="info">
                            <p className="price s_overflow">&yen;&nbsp;16,200</p>
                            <p className="title s_overflow">会心集•白雪伴煎茶</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>

    </Cm>

);


export default Latest;