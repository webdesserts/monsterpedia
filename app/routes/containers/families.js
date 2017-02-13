import React, { PropTypes, Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import SortableList from '../components/sortable-list-view'
import * as utils from '../../common/utils'


class Families extends Component {
  static propTypes = {
    store: PropTypes.shape({
      names: PropTypes.arrayOf(PropTypes.string).isRequired,
      families: PropTypes.arrayOf(PropTypes.string).isRequired,
      stats: PropTypes.object.isRequired
    })
  }

  filterByFamily(names, stats, family) {
    if (!family) return names
    return _.filter(names, (name) => family === stats[name].family)
  }

  activeLink (family) {
    return `family__link${this.props.params.family === family ? ' family__link--active' : ''}`
  }

  render () {
    let { store, params } = this.props
    let monsters = this.filterByFamily(store.names, store.stats, params.family)

    return (
      <div className="family">
        <nav className="family__nav">
          <IndexLink className='family__link' activeClassName='family__link--active' to={`/families`}>
            <img src={`/assets/img/icon-all.png`} />
          </IndexLink>
          {store.families.map((family, i) => (
            <Link key={i} className='family__link' activeClassName='family__link--active' to={`/families/${family}`}>
              <img src={`/assets/img/icon-${family}.png`} />
            </Link>
          ))}
        </nav>

        <SortableList monsters={monsters} stats={store.stats} growth={store.growth} />
      </div>
    )
  }
}

function connector (state) {
  return { store: state.monsters }
}

export default connect(connector)(Families)
