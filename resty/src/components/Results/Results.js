import React from 'react';
import './Result.scss'
import JSONPretty from 'react-json-pretty';

const Results= (props) => {
    return (

      <div>
          <section data-testid="results" className="Content">
        <h3>Count: {props.count}</h3>
    <p>"Headers": {JSON.stringify(props.headers)}</p>

        <JSONPretty data={props.results}></JSONPretty>
        </section>
      </div>
    )
  
  }
  
  export default Results;