import { useEffect, useState } from "react";
import axios from 'axios';
import './app.scss';

import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Results from './components/results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [results, setResults] = useState()
  const [count, setCount] = useState();

  function callApi(requestParams){
    const data = {
      count,
      results,
    };
    setData(data);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => setResults(response.data.results))
  }, [])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(number => setCount(number.data.count) )
  }, [])

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>JSON Body: {requestParams.body}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>

  );
}

export default App;