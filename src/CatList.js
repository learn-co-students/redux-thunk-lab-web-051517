import React, { Component } from 'react';
import { connect } from 'react-redux'

class CatList extends Component {

  render() {
    return (
      <div>
        {this.props.cats.map( cat => {
          return <img src={cat.url}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cats: state.cats }
}

export default connect(mapStateToProps)(CatList)
