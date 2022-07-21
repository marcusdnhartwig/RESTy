//import './results.scss'
// import JSONPretty from 'react-json-pretty';


const Results = (props) => {

  return (
    <section>
        <h3>Header</h3>
        <h3>Results</h3>
      <pre data-testid="results">
        {props.data ?
          JSON.stringify(props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}

export default Results;