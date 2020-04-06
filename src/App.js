import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Assets
import logo from './logo.png';

//Components
import TrackInfo from './components/TrackInfo';
import SelectBar from './components/SelectBar';

//Redux
import { connect } from 'react-redux';
import { getToken } from '../src/actions/authActions'

class App extends Component{

  componentDidMount() {
    this.props.getToken();
  };

  render() {
    return (
          <div className="container">
              {this.props.token ? 
                <Router>
                  <Route exact path="/" render={() => <SelectBar />} />
                  <Route exact path="/track/:id/" render={() => <TrackInfo />} />
                </Router>
                  :
                  <div>
                    <img src={logo} alt="Spotify" style={{ width: 300, display: 'block', margin:'auto' }}></img>
                    <button onClick={() => window.location='http://localhost:5000/login'} style={{ display: 'block', margin:'auto' }}>
                      Get Spotify Token
                    </button>
                  </div>}
          </div>
    );
  };
}

const mapStateToProps = state => ({
    token: state.auth.token
});

export default connect(mapStateToProps, { getToken })(App);
