import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import BlogPost from '../BlogPost/BlogPost';


class Home extends Component{
    render(){
        return(
            <div>
            {/* <p>Selamat datang</p> 
            <YouTubeComp time= "9.05"/>
            <YouTubeComp time= "8.05"/>
            <YouTubeComp time= "9.00"/>
            */}
            <p>Blog Post</p>
            <hr />
            <BlogPost />
            </div>
            
        )
    }
}
export default Home;



























