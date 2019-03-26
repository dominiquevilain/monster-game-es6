import { DEFAULT_GAME_STATUS, HEALTH_MAX_VALUE } from './settings'

import Opponent from './Opponent'

const state = {
  opponents: [
    new Opponent('Player', 'Dominique 🐒'),
    new Opponent('Monster', 'Chewbacca 🦁')
  ],
  messages: [],
  status: DEFAULT_GAME_STATUS,
  reset () {
    this.status = DEFAULT_GAME_STATUS
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
