import React from 'react'
import {connect} from 'react-redux'
import {getFish} from '../actions'
import Fish from './Fish'
import Search from './Search'

class FishList extends React.Component {
  componentDidMount () {
    this.props.getFish()
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }
    const fishes = this.props.fish.filter(fish => fish.name.toLowerCase().includes(this.props.search.toLowerCase()))

    return (
      <React.Fragment>
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <Search />
        <ul>
          {this.props.fish && fishes.map(fish =>
            <Fish key={fish.id} fishData={fish} />)}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fish: state.fish,
    search: state.search,
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
