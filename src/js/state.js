import { DEFAULT_GAME_STATUS, HEALTH_MAX_VALUE } from './settings'

import Opponent from './Opponent'

const state = {
  healCount: 0,
  status: DEFAULT_GAME_STATUS,
  messages: [],
  opponents: [
    new Opponent('Player', 'Dominique 🐒'),
    new Opponent('Monster', 'Chewbacca 🦁')
  ],
  reset () {
    this.status = DEFAULT_GAME_STATUS
    this.healCount = 0
    this.messages = []
    this.opponents.forEach(opponent => {
      opponent.healthValue = HEALTH_MAX_VALUE
    })
  },
  addMessageToLog (message) {
    this.messages.push(message)
  },
  get losers () {
    return this.opponents.filter(opponent => opponent.healthValue <= 0)
  }
}

export default state
