import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import * as utils from '../../common/utils'
import MonsterTile from '../components/monster-tile'
import SortableList from '../components/sortable-list-view'

class MonsterView extends Component {
  render () {
    let { store, params } = this.props
    let { monster } = params
    let stats = store.stats[monster]
    let skills = store.skills[monster]
    //let resistances = this.props.resistances[monster]
    let bredWith = _.where(store.breeding, {'result': monster})
    let breedsInto = _(store.breeding)
      .filter((pair, i) => pair.base.includes(monster) || pair.mate.includes(monster) || pair.base.includes(store.families.indexOf(stats.family)) || pair.mate.includes(store.families.indexOf(stats.family)))
      .map((combo) => combo.result)
      .uniq()
      .value()

    return (
      <div className="monster">
        <header className="monster__header">
          <Link className="monster__family" data-label={stats.family} to={`/families/${stats.family}`}>
            <img src={utils.nameToImagePath('icon-'+stats.family)}/>
          </Link>
          <h2 className="monster__name">{monster}</h2>
        </header>

        <article className="monster__content">
          <div className="monster__image">
            <img src={utils.nameToImagePath(monster)} />
          </div>
          <div className="monster__stats">
            <div className="monster__endurance">
              <div className="monster__stat monster__stat--verticle" data-label="hp">{stats.hp}</div>
              <div className="monster__stat monster__stat--verticle" data-label="mp">{stats.mp}</div>
            </div>
            <div className="monster__core">
              <div className="monster__stat" data-label="atk">{stats.at}</div>
              <div className="monster__stat" data-label="def">{stats.df}</div>
              <div className="monster__stat" data-label="agi">{stats.ag}</div>
              <div className="monster__stat" data-label="int">{stats.it}</div>
            </div>
            <div className="monster__leveling">
              <div className="monster__stat monster__stat--verticle" data-label="lvl">{stats.ml}</div>
              <div className="monster__stat monster__stat--verticle" data-label="xp">{stats.ep}</div>
            </div>
          </div>

          <div className="monster__skills">
            {skills.map((s, i) => <Link key={i} to={`/skills/${s}`} className="monster__skill">{s}</Link>)}
          </div>
          <h3>Bred With</h3>
          <div className="monster__bred-with">
            {bredWith.map((pair, i) => {
              return <div key={i} className="monster__breeding-pair">
                <div className="monster__pair-base">
                  {pair.base.map((monster, i) => <MonsterTile key={i} monster={monster} families={store.families} />)}
                </div>
                <div className="monster__pair-mates">
                  {pair.mate.map((monster, i) => <MonsterTile key={i} monster={monster} families={store.families} />)}
                </div>
              </div>
            })}
          </div>
          <h3>Breeds Into</h3>
          <SortableList monsters={breedsInto} stats={store.stats} growth={store.growth} />
        </article>
      </div>
    )
  }
}

export default connect((state) => ({ store: state.monsters }))(MonsterView)
