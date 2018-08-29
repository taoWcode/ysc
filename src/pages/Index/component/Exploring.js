import React from 'react';
import { Link } from 'react-router-dom'; 
import Cm from "../../../layouts/Cm";

const Exploring = (props) => (
    <Cm ch_title="探索艺术世界" en_title="EXLORING ART" tar="/">
        <div className="m-exploring-section">
            <Link  to="/" className="exploring-item">
                <div className="content">
                    <b>油画</b>
                    <i></i>
                    <span>PAINTING</span>
                </div>
                <div className="bg">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E7%BB%84%20120.png"/>
                </div>
            </Link> 
            <Link  to="/" className="exploring-item">
                <div className="content">
                    <b>油画</b>
                    <i></i>
                    <span>PAINTING</span>
                </div>
                <div className="bg">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E7%BB%84%20120.png"/>
                </div>
            </Link> 
            <Link  to="/" className="exploring-item">
                <div className="content">
                    <b>油画</b>
                    <i></i>
                    <span>PAINTING</span>
                </div>
                <div className="bg">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E7%BB%84%20120.png"/>
                </div>
            </Link> 
            <Link  to="/" className="exploring-item">
                <div className="content">
                    <b>油画</b>
                    <i></i>
                    <span>PAINTING</span>
                </div>
                <div className="bg">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E7%BB%84%20120.png"/>
                </div>
            </Link> 
        </div>

    </Cm>
);

export default Exploring;