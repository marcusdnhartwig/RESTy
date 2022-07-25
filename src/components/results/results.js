import React from 'react';
import './results.scss';
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/acai.css";


const Results = (props) => {
  const { data } = props;
  return (
    <section>
      <JSONPretty id="json-pretty" data={data}></JSONPretty>
    </section>
  )
}


export default Results;