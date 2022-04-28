import React from 'react';

export class Interface extends React.Component {
    render() {
        return (
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

export default Interface;