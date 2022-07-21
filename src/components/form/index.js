import './form.scss';
import { useState } from "react";

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [body, setBody] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
      body,
    };
    props.handleApiCall(formData);
  }

  const handleMethod = (e) => {
    setMethod(e.target.id)
    setBody('')
  };

  const handleUrl = (e) => {
    setUrl(e.target.value)
  };

  const handleJson = (e) => {
    setBody(e.target.value)
  };

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="submit-form">
        <label >
          <span>URL: </span>
          <input onChange={handleUrl} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="GET" onClick={handleMethod}>GET</span>
          <span id="POST" onClick={handleMethod}>POST</span>
          <span id="PUT" onClick={handleMethod}>PUT</span>
          <span id="DELETE" onClick={handleMethod}>DELETE</span>
        </label>
          {method === "PUT" || method === "POST" 
            ?
            <>
            <h4> JSON Body</h4>
            <textarea type='text' onChange={handleJson}>{}</textarea> 
            </>
            : 
            null 
          }
      </form>
    </>
  );
}

export default Form;