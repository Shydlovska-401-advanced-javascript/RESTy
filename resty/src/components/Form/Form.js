import React from 'react';
import  './Form.scss'


export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method: '',
            url: '',
            // shouldRender: false
        }

}

 handleSubmit = async event => {
        event.preventDefault();
    
        // fetch the data...
    //  https://swapi.dev/api/people/
        let response = await fetch(this.state.url);
        
    
        // fetch done
        let data = await response.json();
        
        let count = data.count;
        let results = data.results;
        let headers ={};
        response.headers.forEach((val, key) => headers[key] = val);

        this.props.handler(count, results, headers);
      };

    handleUrl = event =>{
        // let shouldRender = false;
        let url = event.target.value;
        this.setState({url})
    }


    handleClick = event => {
        event.preventDefault()
        let url = this.state.url;
        // let shouldRender = true;
        this.setState({url})
    }

    handleMethod = event => {
        event.preventDefault();
        // let shouldRender = false;
        let method = event.target.id;
        this.setState({method})
    }

    render(){
        // let id = this.state.method.length>0 && this.state.url.length > 0 && this.state.shouldRender ? "outputReady" : "outputNotReady";
        // console.log(id);
        return (
            <form className="formRender" onSubmit={this.handleSubmit}>
            <div className = 'Form'>
            <input onChange={this.handleUrl}/>
           
             <button className="goButton">{this.props.promt}</button>
             
             </div>
             <div>
            <button id='get' onClick={this.handleMethod}>GET</button>
            <button id='post' onClick={this.handleMethod}>POST</button>
            <button id='put' onClick={this.handleMethod}>PUT</button>
            <button id='delete' onClick={this.handleMethod}>DELETE</button>
            {/* <div id={id}>{this.state.method} {this.state.url}</div> */}

            </div>
            </form>
            )
        }
}