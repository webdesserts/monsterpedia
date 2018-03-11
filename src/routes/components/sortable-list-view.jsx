import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ListView from './list-view'
import * as utils from '../../common/utils'
import { SortableListWrapper, Stat, StatSorter, Field, Label } from './sortable-list-view.styles'

export default class SortableList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
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
    if (isInteger) value = parseInt(value, 10);
    return value
  }

  isInteger (string) {
    return /\d+/.test(string)
  }

  onStatMode = (option) => {
    this.setState({ stat_mode: option })
  }

  render () {
    let { monsters, stats, growth, className } = this.props
    let { goal_lvl, pluses, sorts } = this.state

    stats = this.getAccumulatedStats(monsters, stats, growth, goal_lvl, pluses)

    let sortedMonsters = this.sortByPower(monsters, stats, sorts)

    return (
      <SortableListWrapper className={className}>
        <StatSorter>
          <Field>
            level <input type="text" value={goal_lvl} onChange={this.onLevelChanged}/>
          </Field>

          <Field>
            + <input type="text" value={pluses} onChange={this.onPlusesChanged} />
          </Field>

          {utils.STATS.map((stat, i) => (
            <Stat key={i}>
              <Label>{utils.STATS_LONG[i]}</Label>
              <input type="checkbox" checked={sorts[stat]} onChange={this.toggleSort.bind(null, stat)} />
            </Stat>
          ))}
        </StatSorter>

        <ListView monsters={sortedMonsters} stats={stats} />
      </SortableListWrapper>
    )
  }
}
