import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
//import Results from './components/results/results.js'
import Footer from './components/footer/footer.js';
import History from './components/history/history.js';

// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      urls: [],
      methods: [],
      body: [],
      headers: {},
      history: [],
      count: 0,
      isLoading: false,
      initialPage: true,
      isDataVisible: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isDataVisible: !this.state.isDataVisible });
  }

  updateResults = async (userInput) => {
    console.log('this is user input', userInput);
    this.setState({
      initialPage: false,
      isLoading: true,
      urls: [...this.state.urls, userInput.urls],
      methods: [this.state.methods, userInput.methods],
    })

    const request = await fetch(userInput.urls, { methods: userInput.methods });
    const data = await request.json();

    if (data) {
      this.toggleMenu();
    }
    let dataInstance = {
      url: userInput.urls,
      method: userInput.methods,
      body: data,
    }
    let updateHistory = [...this.state.history, dataInstance];
    localStorage.setItem('queryHistory', JSON.stringify(updateHistory));

    await this.setState({
      body: data,
      isLoading: false,
      history: updateHistory,
    })
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('queryHistory')) || [];
    this.setState({ history });
  }

  // runs constantly in react, to render things to the DOM.
  render() {
    return (
      <div className="App">
          <Header />
        <div>
        </div>
        <Form updateResults={this.updateResults} />
        <main>
          <History history={this.state.history} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;