import React from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      number: 1,
    }
    // this.number = 1;
  }


  log(num) {
    console.log('Hey from component');
    // in order for this to trigger a re-render we need to call a method passed down from React.Component
    // this makes a re-render is triggered
    this.setState({ number: num + 1 });
  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {/* Here is a header */}
        {/* in order for `this` to refer properly to a react component*/}
          {/* <button onClick={() => this.log(this.state.number)}>Log Something {this.state.number}</button> */}
        </div>
        <Form />
        {/* <article></article> */}
        <Footer />
      </div>
    )
  }
}

export default App;