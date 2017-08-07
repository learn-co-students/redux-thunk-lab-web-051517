import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchCats from './actions/catActions'
import ConnectedCatList from './CatList'

class App extends Component {

  componentDidMount() {
    let cats = this.props.fetchCats()
    console.log(cats);
    // debugger
  }

  render() {
    // debugger
    return (
      <div>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CatBook</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>

        <div>
          <h1>Kitties!</h1>
          <ConnectedCatList />
        </div>

    </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger
  return { catPics: state.cats }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCats: fetchCats }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
