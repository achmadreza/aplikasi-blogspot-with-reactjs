import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component{
    state = {
        post: [],
        formBlogSpot: {
            id: 1,
            title:'',
            body:'',
            userId:1
        }
    }

    getPostAPI=()=>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result)=> {
            this.setState({
                post: result.data
            })
        })
    }

  postDataToAPI=() => {
      axios.post('http://localhost:3004/posts', this.state.formBlogSpot).then((res)=>{
          console.log(res);
      })
  }

    handleRemove=(data) =>{
       
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI()

        })
        
    }

    handleFormChange=(event)=>{
        
        let formBlogSpotNew= {...this.state.formBlogSpot}
        let timestamp= new Date().getTime();
        formBlogSpotNew['id']= timestamp;
        formBlogSpotNew[event.target.name]=event.target.value;
        this.setState({
            formBlogSpot: formBlogSpotNew
        })
    }
   
    handleSubmit=()=>{
        this.postDataToAPI()
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type ="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add body content" onChange={this.handleFormChange}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {this.state.post.map(post=>{
                    return<Post key={post.id} data={post} remove={this.handleRemove}/>
                })
                }
            
            
            </Fragment>
        )
    }
}
export default BlogPost;