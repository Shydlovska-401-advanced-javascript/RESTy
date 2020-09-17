import React from 'react';
import  './Form.scss'
import md5 from 'md5';


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
//    componentDidUpdate(props) {

//     // we're doing something tricky in this component
//     // where state is tied to props at particular times
//     // i.e. at first render and when user clicks on call in history
//     // so we need this business to determine if anything has really changed
//     // otherwise we go into react render spiral

//     const nextHash = md5(JSON.stringify(props.request));
//     const stateHash = md5(JSON.stringify(this.state.request));

//     console.log('props.request', props.request);
//     console.log('state.request', this.state.request);

//     if (nextHash === stateHash) return;

//     // update state based on props if we've been cleared above
//     const request = { ...props.request };

//     console.log('componentDidUpdate', request);
//     // this.setState({ request });
// }

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
            <input data-testid="input"
            type="text"
            name="url"
            defaultValue={this.state.request.url}
            placeholder="http://api.url.here"
            onChange={this.handleUrl}/>
             <button data-testid="button">GO!</button>
            </form>
             <div className="methods">
             <button id='get' onClick={() => this.handleMethod('get')}>GET</button>
             <button id='post' onClick={() => this.handleMethod('post')}>POST</button>
             <button id='put' onClick={() => this.handleMethod('put')}>PUT</button>
             <button id='delete' onClick={() => this.handleMethod('delete')}>DELETE</button>
             <textarea name="data" onChange={this.changeBody} defaultValue={this.state.request.data} />
             </div>
             </div>

            )
        }
}
