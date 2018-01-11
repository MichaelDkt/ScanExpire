import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        input: '',
        productNok : '',
        productOk : '',
        currentDate : ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      const today = new Date();
      const returnToday = new Date().toString();
      const productDate = transformStringtoDate(this.state.value);
        if (productDate < today) {
         this.setState({
           productNok: 'Le produit est périmé',
           productOk: '',
           currentDate : 'Date du jour : ' + returnToday,
           input : 'Date saisie : ' + this.state.value
         });
      } else {
         this.setState({
           productOk: 'Le produit est encore bon',
           productNok: '',
           currentDate : 'Date du jour : ' + returnToday,
           input : 'Date saisie : ' + this.state.value
         });
      }
      console.log(today);
      console.log(this.state.value);
      event.preventDefault();

    }

    render() {
      return (
        <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1 >Saisir la date</h1>
            <input type="date" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div>
          <button type="submit" value="Compare" className="btn btn-success">Compare</button>
        </div>
        </form>
        <div className="text-danger"> <h1>{this.state.productNok}</h1> </div>
        <div className="text-success"> <h1>{this.state.productOk}</h1> </div>
        <div> {this.state.currentDate} </div>
        <div> {this.state.input} </div>
      </div>
      );
    }
  }

export default App;

function transformStringtoDate(input) {
  let mmddyyyy = input.split(/\//).reverse().join('/');
  let date = new Date(mmddyyyy);
  console.log(date);
  return (date);
}
