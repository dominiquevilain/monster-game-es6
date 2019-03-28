import { HEALTH_MAX_VALUE } from './settings'

export default class Opponent {
  constructor (status, name) {
    this.node = null
    this._status = status
    this.name = name
    this._healthValue = HEALTH_MAX_VALUE
  }

  get healthValue () {
    return this._healthValue
  }

  set healthValue (value) {
    this._healthValue = value
  }

  get status () {
    return this._status
  }

  set status (status) {
    this._status = status
  }
}
