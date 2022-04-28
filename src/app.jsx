import React, { Component } from 'react';
// import Interface from './interface';

class App extends Component {
// initialize state
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      change: ''
    };

    // event binding for updating state values
    this.updateAmountDue = this.updateAmountDue.bind(this);
    this.updateAmountReceived = this.updateAmountReceived.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // update state values when input changes
  updateAmountDue(e) {
    this.setState({ amountDue: e.target.value });
  }

  updateAmountReceived(e) {
    this.setState({ amountReceived: e.target.value });
  }

  // click event handler
  handleClick() {;
    let amountDue = this.state.amountDue;
    let amountReceived = this.state.amountReceived;
    let calculateChange = (amountReceived - amountDue).toFixed(2);
    
    // update state values
    this.setState({
      change: calculateChange,

      twenties: Number.parseFloat(Math.floor(calculateChange / 20).toFixed(2)),
      tens: Number.parseFloat(Math.floor((calculateChange / 10) % 2).toFixed(2)),
      fives: Number.parseFloat(Math.floor((calculateChange / 5) % 2).toFixed(2)),
      ones: Number.parseFloat(Math.floor(calculateChange % 5).toFixed(2)),
      quarters: Number.parseFloat(Math.floor(((calculateChange * 100) % 100) / 25).toFixed(2)),
      dimes: Number.parseFloat(Math.floor((((calculateChange * 100) % 100) % 25) / 10).toFixed(2)),
      nickels: Number.parseFloat(Math.floor(((((calculateChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
      pennies: Number.parseFloat(Math.floor((calculateChange * 100) % 5 + 0.01).toFixed(2))
    });
  }

  render() {
    return (
    //   <Interface />
      <div className="container">
        <form className="form-horizontal">
            <div className="page-header"><h1 style={{ color: "white" }}>Change Calculator</h1></div>
            <div className="tagline"/>
              
            {/* panel */}
            <div className="row">
                <div className="col-sm-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Enter information</div>
                            <div className="panel-body">
                                <label htmlFor="amountDue">How much is due?</label>
                                <input type="number" name="amountDue" value={ this.state.amountDue } onChange={ this.updateAmountDue } placeholder="0" className="form-control" size="1"/> 
                                <label htmlFor="amountReceived">How much was received?</label>
                                <input type="number" name="amountReceived" value={ this.state.amountReceived } onChange={ this.updateAmountReceived } placeholder="0" className="form-control" size="1"/>
                            </div>
                        <div className="panel-footer">
                            <button type="button" name="submit" onClick={ this.handleClick } className="btn btn-primary btn-block">Calculate</button>
                        </div>
                    </div>
                </div>

                {/* outcome alerts */}
                <div className='col-sm-8'>
                    <div className='panel panel-default'>
                        <div className='panel-body'>
                            <div id="success-outcome" name="success-outcome" className="alert alert-success text-center" role="alert">
                                The total change due is ${ this.state.change }
                            </div>
                            {/* <div id="danger-outcome" name="danger-outcome" className="alert alert-danger text-center" role="alert">
                                Additional money owed
                            </div> */}

                            {/* denominations grid */}
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Twenties</h3>
                                        <p className="change">{ this.state.twenties }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Tens</h3>
                                        <p className="change">{ this.state.tens }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Fives</h3>
                                        <p className="change">{ this.state.fives }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Ones</h3>
                                        <p className="change">{ this.state.ones }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Quarters</h3>
                                        <p className="change">{ this.state.quarters }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Dimes</h3>
                                        <p className="change">{ this.state.dimes }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Nickels</h3>
                                        <p className="change">{ this.state.nickels }</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well well-sm text-center"><h3>Pennies</h3>
                                        <p className="change">{ this.state.pennies }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>
      </div>
    );
  }
}

export default App;