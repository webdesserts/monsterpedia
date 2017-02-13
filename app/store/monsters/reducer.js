import names from './names'
import stats from './stats'
import resistances from './resistances'
import skills from './skills'
import families from './families'
import growth from './stat-growth'
import breeding from './breeding'

let initial = {
  names, stats, skills, resistances, families, growth, breeding
}

export default function (state = initial, action) {
  return state
}
