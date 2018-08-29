
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Cm = (props) => (
    <div className="m-cm-section">
        <div className = 'cm-header'>
            <h5 className = 'title'>
                {props.ch_title}
                <small>{props.en_title}</small>
            </h5>
            <Link to={props.tar} className="btn-more">查看更多&nbsp;&gt;&gt;</Link>
        </div>
        <div className ='cm-body'>
            {props.children}
        </div>
    </div>
)

export default Cm;