import _ from 'lodash'

export const STATS_LONG = ['hp', 'mp', 'atk', 'def', 'agi', 'int']
export const STATS = ['hp', 'mp', 'at', 'df', 'ag', 'it']

export function nameToImagePath (name) {
  var file = name.replace(/\s\((\d)\)/, "$1").toLowerCase()
  return `/assets/img/${file}.png`
}

export function powerLevel (stats, include) {
  let included_stats = 0;
  let result = _.reduce(STATS, (level, stat) => {
    if (include[stat]) {
      included_stats++;
      return level + stats[stat]
    } else {
      return level
    }
  }, 0)
  return result / included_stats
}


