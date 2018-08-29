import React from 'react';
import { Link } from 'react-router-dom'; 
import Cm from "../../../layouts/Cm";

const Museum = ( props ) => (
    <Cm en_title="MUSEUM OF ART" ch_title="艺术馆" tar="/">
        <div className="m-museum-section">
            <ul className="museum-list">
                <li>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <div className="pic">
                            <img src="https://raw.githubusercontent.com/taoWcode/yscImg/master/index/%E8%89%BA%E6%9C%AF%E5%AE%B6_-1.png" alt=""/>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </Cm>
)

export default Museum;