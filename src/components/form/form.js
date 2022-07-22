import React from 'react';
import './form.scss';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: '',
      methods: '',
    }
  }
  handleSubmit = async (e) => {

    e.preventDefault();

    await this.setState({
      urls: e.target.url.value,
      methods: e.target.method.value
    });

    this.props.updateResults({ ...this.state });
  }

  render() {
    return (
      <section className="App-form">
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input id="input-text" name="url" type='text' />
          <button type="submit">GO!</button>
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form;