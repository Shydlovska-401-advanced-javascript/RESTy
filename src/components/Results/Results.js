import React from 'react';
import './Result.scss'
// import JSONPretty from 'react-json-pretty';

import ReactJson from 'react-json-view';

import loading from '../../images/loading.gif';

const Results = (props) => {

  return (
    <section className="results">

        {
            props.loading ? (
                <div className="loading">
                    <img src={loading} alt="Loading" />
                </div>
            ) : (
                <>
                <h2>Headers</h2>
                <ReactJson src={props.headers} />
                <h2>Results</h2>
                <ReactJson src={props.results} />
                </>
            )
        }
     </section>
  );

};
  export default Results;