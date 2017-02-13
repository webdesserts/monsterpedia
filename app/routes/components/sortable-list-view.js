import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import ListView from './list-view.js'
import ButtonGroup from '../../common/components/button-group'
import * as utils from '../../common/utils'

export default class SortableList extends Component {
  static propTypes = {
    monsters: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.object.isRequired,
    growth: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

  state = {
    goal_lvl: 99,
    pluses: 0,
    sorts: {
      hp: true,
      mp: true,
      at: true,
      df: true,
      ag: true,
      it: true
    }
  }

  toggleSort = (stat) => {
    let state = { sorts: this.state.sorts }
    state.sorts[stat] = !this.state.sorts[stat]
    this.setState(state)
  }

  getMaxLvl(base_lvl, pluses, goal_lvl) {
    return Math.min(goal_lvl, base_lvl + (pluses * 2), 99)
  }

  getAccumulatedStats(monsters, stats, growth, goal_lvl, pluses) {
    let accumulated = {}
    let max_lvls = _.mapValues(stats, (stat, monster) => {
      return this.getMaxLvl(stat.ml, pluses, goal_lvl);
    })

    monsters.forEach((monster) => {
      accumulated[monster] = _.mapValues(stats[monster], (value, key) => {
        if (key === 'ep' || key === 'family') return value;
        if (key === 'ml') return max_lvls[monster];
        if (_.isNumber(value)) return growth[value][max_lvls[monster]-1];
      })
    })

    return accumulated
  }

  sortByPower (names, stats, sorts) {
    return _.sortBy(names, (name) => - utils.powerLevel(stats[name], sorts))
  }

  onLevelChanged = (event) => {
    let value = this.ensureInteger(event.target.value)
    if (value === null) return;
    this.setState({ goal_lvl: value })
  }

  onPlusesChanged = (event) => {
    let value = this.ensureInteger(event.target.value)
    if (value === null) return;
    this.setState({ pluses: value })
  }

  ensureInteger(value) {
    let isInteger = this.isInteger(value)
    if (!(value === '' || isInteger)) return null;
    if (isInteger) value = parseInt(value);
    return value
  }

  isInteger (string) {
    return /\d+/.test(string)
  }

  onStatMode = (option) => {
    this.setState({ stat_mode: option })
  }

  render () {
    let { monsters, stats, growth } = this.props
    let { stat_mode, goal_lvl, pluses, sorts } = this.state

    stats = this.getAccumulatedStats(monsters, stats, growth, goal_lvl, pluses)

    let sortedMonsters = this.sortByPower(monsters, stats, sorts)

    return (
      <div className='sortable-list'>
        <div className='sortable-list__stat-sorter'>
          <label className="sortable-list__field">
            level <input type="text" value={goal_lvl} onChange={this.onLevelChanged}/>
          </label>

          <label className="sortable-list__field">
            + <input type="text" value={pluses} onChange={this.onPlusesChanged} />
          </label>

          {utils.STATS.map((stat, i) => (
            <div key={i} className='sortable-list__stat'>
              <div className='sortable-list__label'>{utils.STATS_LONG[i]}</div>
              <input type="checkbox" checked={sorts[stat]} onChange={this.toggleSort.bind(null, stat)} />
            </div>
          ))}
        </div>

        <ListView monsters={sortedMonsters} stats={stats} />
      </div>
    )
  }
}
