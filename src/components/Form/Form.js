import React from 'react';
import  './Form.scss'


export default class Form extends React.Component{
    constructor(props){
        super(props);
        const method = props.request.method || 'get';
        const url = props.request.url || '';
        const data = props.request.data ? JSON.stringify(props.request.data) : '';
        this.state = {
            request:{
                method,
                url,
                data
            }
           
        }

}

    handleUrl = event =>{
        let url = event.target.value;
        const newrequest = { ...this.state.request, url };
        this.setState({request: newrequest})
    }

    handleMethod = (method) => {
        console.log(method, 'method')
        const newrequest = { ...this.state.request, method };
        console.log(newrequest, 'req')
        this.setState({request: newrequest})
    }

    changeBody = (event) =>{
        try{
            let data = JSON.parse(event.target.value);
            const newRequest = { ...this.state.request, data};
            this.setState({ request: newRequest})
        }catch (e) { }
    }

     handleSubmit = async event => {
        event.preventDefault();
        //  https://swapi.dev/api/people/
    
        this.props.handler(this.state.request);
    };
    
    render(){
        return (
            <div className = 'Form'>
            <form className="formRender" onSubmit={this.handleSubmit}>
            <input className='input' data-testid="input"
            type="text"
            name="url"
            defaultValue={this.state.request.url}
            placeholder="http://api.url.here"
            onChange={this.handleUrl}/>
            <div id="go">
             <button data-testid="button">GO!</button>
             </div>
            </form>
             <div id="buttons">
             <button className="methods" id='get' onClick={() => this.handleMethod('get')}>GET</button>
             <button className="methods" id='post' onClick={() => this.handleMethod('post')}>POST</button>
             <button className="methods" id='put' onClick={() => this.handleMethod('put')}>PUT</button>
             <button  className="methods"id='delete' onClick={() => this.handleMethod('delete')}>DELETE</button>
             </div>
             <div className='TextArea'>
             <textarea  name="data" onChange={this.changeBody} defaultValue={this.state.request.data} />
             </div>
             
             </div>

            )
        }
}
