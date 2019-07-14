import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as utils from '../../common/utils'
import MonsterTile from '../components/monster-tile'
import SortableList from '../components/sortable-list-view'
import * as El from './monster.styles'

class MonsterView extends React.Component {
  render () {
    let { store, match } = this.props
    let { monster } = match.params
    let stats = store.stats[monster]
    let skills = store.skills[monster]
    //let resistances = this.props.resistances[monster]
    let bredWith = _.filter(store.breeding, {'result': monster})
    let breedsInto = _(store.breeding)
      .filter((pair, i) => pair.base.includes(monster) || pair.mate.includes(monster) || pair.base.includes(store.families.indexOf(stats.family)) || pair.mate.includes(store.families.indexOf(stats.family)))
      .map((combo) => combo.result)
      .uniq()
      .value()

    return (
      <El.MonsterWrapper>
        <El.Header>
          <El.Family data-label={stats.family} to={`/families/${stats.family}`}>
            <img src={utils.nameToImagePath('icon-'+stats.family)} alt={`${stats.family} family`}/>
          </El.Family>
          <El.Name>{monster}</El.Name>
        </El.Header>

        <El.Content>
          <El.Image>
            <img src={utils.nameToImagePath(monster)} alt={`${monster} pixel art`} />
          </El.Image>
          <El.Stats>
            <El.Endurance>
              <El.Stat data-label="hp">{stats.hp}</El.Stat>
              <El.Stat data-label="mp">{stats.mp}</El.Stat>
            </El.Endurance>
            <El.Core>
              <El.Stat data-label="atk">{stats.at}</El.Stat>
              <El.Stat data-label="def">{stats.df}</El.Stat>
              <El.Stat data-label="agi">{stats.ag}</El.Stat>
              <El.Stat data-label="int">{stats.it}</El.Stat>
            </El.Core>
            <El.Leveling className="monster__leveling">
              <El.Stat data-label="lvl">{stats.ml}</El.Stat>
              <El.Stat data-label="xp">{stats.ep}</El.Stat>
            </El.Leveling>
          </El.Stats>

          <El.Skills>
            {skills.map((s, i) => <El.Skill key={i} to={`/skills/${s}`} className="monster__skill">{s}</El.Skill>)}
          </El.Skills>

          <h3>Bred With</h3>
          <El.BredWith>
            {bredWith.map((pair, i) => {
              return (
                <El.BreedingPair key={i}>
                  <El.PairBase>
                    {pair.base.map((monster, i) => <MonsterTile key={i} monster={monster} families={store.families} />)}
                  </El.PairBase>
                  <El.PairMates>
                    {pair.mate.map((monster, i) => <MonsterTile key={i} monster={monster} families={store.families} />)}
                  </El.PairMates>
                </El.BreedingPair>
              )
            })}
          </El.BredWith>
          <h3>Breeds Into</h3>
          <SortableList monsters={breedsInto} stats={store.stats} growth={store.growth} />
        </El.Content>
      </El.MonsterWrapper>
    )
  }
}

export default connect((state) => ({ store: state.monsters }))(MonsterView)