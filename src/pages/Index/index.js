
import React from 'react';
import './style.scss';
import api from '../../config/api';
import http from '../../utils/http';

import IndexCarousel from './component/Carousel';
import Activity from './component/Activity';
import Latest from './component/Latest';
import Exploring from './component/Exploring';
import Artist from './component/Artist';
import Museum from './component/Museum';
import Artnews from './component/Artnews';


class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            indexData:{}
        }
    }

    componentDidMount(){
     
        http.get(api.Index).then((res) => {
            this.setState({
                indexData:res.data
            })
        }).catch(err =>{
            console.log(err);
        });
     

    }

    render(){
        return (<div className = 'm-page g-index'>
           <div className = 'm-main'>
                { this.state.indexData.swiper ? 
                <IndexCarousel swiper = {this.state.indexData.swiper}/> : (<div className="tempDiv" style={{height:'8.75rem'}}></div>)
                }
                
                <Activity/>
                <Latest/>
                <Exploring/>
                <Artnews/>
                <Artist/>
                <Museum/>
               
           </div>
        </div>)
    }
}



export default Index;