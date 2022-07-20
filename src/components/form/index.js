import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      methods: [],
    }
  }

  addUrlWithImplicitBinding = () => {
    this.setState({
      urls: [...this.state.urls, this.state.input],
      methods: [...this.state.methods, this.state.method],
    });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleMethodChange = (e) => {
    this.setState({ method: e.target.value })
  }

  render() {
    return (
      <section className="App-form">
        <form>
          <label>URL:</label>
          <input onChange={this.handleChange} type='text' value={this.state.input} />
          <button type="button" onClick={this.addUrlWithImplicitBinding}>GO!</button>
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>
        <article>
          <ul className="selected-methods">
            {this.state.methods.map((method) => <li>{method}</li>)}
          </ul>
          <ul className="selected-urls">
            {this.state.urls.map((url) => <li>{url}</li>)}
          </ul>
        </article>
      </section>
    )
  }
}

export default Form;