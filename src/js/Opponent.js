import { HEALTH_MAX_VALUE } from './settings'

export default class Opponent {
  constructor (status, name) {
    this.node = null
    this.status = status
    this.name = name
    this._healthValue = HEALTH_MAX_VALUE
  }

  get healthValue () {
    return this._healthValue
  }

  set healthValue (value) {
    this._healthValue = value
  }
}
