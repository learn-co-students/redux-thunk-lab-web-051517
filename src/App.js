import React, { Component } from 'react';
import CatList from './CatList'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions'

export class App extends Component {

  componentDidMount() {
    this.props.actions.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { catPics: state.pictures }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
