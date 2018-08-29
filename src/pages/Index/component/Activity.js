
import React from 'react';
import { Link } from 'react-router-dom'; 
import Cm from "../../../layouts/Cm";

const Activity  = (props) => (

    <Cm  ch_title = "热门活动" en_title="HOT ACTIVITY" tar = "/">
       
        <div className="m-activity-list">
            <Link to="/" className="activity-item">
                <div className="left-side">
                    <b>拼团专区</b>
                    <i></i>
                    <span>TEAN</span>
                </div>
                <div className="right-img">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%B4%BB%E5%8A%A8-1.png"/>
                </div>
            </Link>
            <Link to="/" className="activity-item">
                <div className="left-side">
                    <b>拼团专区</b>
                    <i></i>
                    <span>TEAN</span>
                </div>
                <div className="right-img">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%B4%BB%E5%8A%A8-1.png"/>
                </div>
            </Link>
            <Link to="/" className="activity-item">
                <div className="left-side">
                    <b>拼团专区</b>
                    <i></i>
                    <span>TEAN</span>
                </div>
                <div className="right-img">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%B4%BB%E5%8A%A8-1.png"/>
                </div>
            </Link>
            <Link to="/" className="activity-item">
                <div className="left-side">
                    <b>拼团专区</b>
                    <i></i>
                    <span>TEAN</span>
                </div>
                <div className="right-img">
                    <img alt="" src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E6%B4%BB%E5%8A%A8-1.png"/>
                </div>
            </Link>
        </div>
       
    </Cm>

)

export default Activity;