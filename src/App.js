import React, {Component} from 'react';
import './App.css';

const PayrollContext = React.createContext();

class Provider extends Component {

  state = {
    chiefExecutive: 'Charlie Waite',
  };

  render() {
    console.log('Rendering Provider');
    return (
      <div>

        <div>
          <input type="text"
                 value={this.state.chiefExecutive}
                 onChange={e => this.setState({chiefExecutive: e.target.value})}/>
        </div>

        <PayrollContext.Provider value={this.state}>
          {this.props.children}
        </PayrollContext.Provider>
      </div>
    );
  }
}

class App extends Component {
  render() {
    console.log('-Rendering App');
    return (
      <Provider>
        <Company/> .
      </Provider>
    );
  }
}

const Company = (props) => {
  console.log('--Rendering Company');
  return (
    <Department/>
  );
};

const Department = (props) => {
  console.log('---Rendering Department');
  return (
    <Team/>
  );
};

const Team = (props) => {
  console.log('----Rendering Team');
  return (
    <div>
      <p>I'm on the team component</p>

      <PayrollContext.Consumer>
        {context => <p>Our CEO is {context.chiefExecutive} </p>}
      </PayrollContext.Consumer>
    </div>
  );
};

export default App;
