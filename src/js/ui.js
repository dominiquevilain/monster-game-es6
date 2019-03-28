import {
  DEFAULT_GAME_STATUS,
  HEAL,
  IN_GAME_STATUS,
  MAX_HEAL_ACTION
} from './settings'
import state from './state'

const ui = {
  init () {
    this.gameDiv = document.querySelector('#game')
    this.controlsDiv = document.querySelector('#controls')
    this.logDiv = document.querySelector('#log')
    this.opponentTemplate = document.querySelector('template.opponent')
    this.notPlayingTemplate = document.querySelector(`template#${DEFAULT_GAME_STATUS}`)
    this.playingTemplate = document.querySelector(`template#${IN_GAME_STATUS}`)
    this.defeatModalTemplate = document.querySelector('template#defeat-modal')
    this.buildOpponentsNodes()
    this.buildControlsNodes()
  },
  buildOpponentsNodes () {
    state.opponents.forEach(opponent => {
      opponent.node = document.importNode(this.opponentTemplate.content, true)
      opponent.node.querySelector('div:first-child').id = opponent.status.toLowerCase()
      opponent.node.querySelector('.opponent__status').textContent = opponent.status
      opponent.node.querySelector('.opponent__name').textContent = opponent.name
      opponent.node.querySelector('.health__bar').classList.add(opponent.status.toLowerCase())
      opponent.node.querySelector('.health__value').textContent = opponent.healthValue
      this.gameDiv.appendChild(opponent.node)
    })
  },
  buildControlsNodes () {
    let controlsNode = null
    this.controlsDiv.innerHTML = ''
    switch (state.status) {
      case DEFAULT_GAME_STATUS:
        controlsNode = document.importNode(this.notPlayingTemplate.content, true)
        break
      case IN_GAME_STATUS:
        controlsNode = document.importNode(this.playingTemplate.content, true)
        this.healButton = controlsNode.querySelector(`#${HEAL['button-id']}`)
        this.healButtonText = this.healButton.textContent
        this.updateHealButton()
        break
      default:
        console.error(`${state.status} is not a valid case when chosing which controls to show`)
    }
    this.controlsDiv.appendChild(controlsNode)
  },
  buildDefeatModal () {
    let sentence = ``
    const losers = state.losers
    if (losers.length > 1) {
      sentence = `${losers[0].name} et ${losers[1].name} ont perdu tous les deux 🌪. Recommencer`
    } else {
      sentence = `${losers[0].name} a perdu 💣. Recommencer`
    }
    return window.confirm(sentence)
  },
  updateAfterAction () {
    this.updateLogDiv()
    this.updateHealthBarDiv()
    this.updateHealButton()
  },
  updateLogDiv () {
    if (state.messages.length) {
      this.logDiv.insertAdjacentHTML('afterbegin', `<p>${state.messages[state.messages.length - 2]}</p>`)
      this.logDiv.insertAdjacentHTML('afterbegin', `<p>${state.messages[state.messages.length - 1]}</p>`)
    } else {
      this.logDiv.innerHTML = ''
    }
  },
  updateHealthBarDiv () {
    state.opponents.forEach(opponent => {
      this.gameDiv.querySelector(`.${opponent.status.toLowerCase()}.health__bar`).style.width = `${opponent.healthValue}%`
      this.gameDiv.querySelector(`.${opponent.status.toLowerCase()}.health__bar`).style.backgroundColor = `hsl(${opponent.healthValue * 1.2},50%,50%`
      this.gameDiv.querySelector(`.${opponent.status.toLowerCase()}.health__bar .health__value`).textContent = opponent.healthValue
    })
  },
  updateHealButton () {
    this.healButton.textContent = `${this.healButtonText} ${state.healCount}/${MAX_HEAL_ACTION}`
  },
  reset () {
    this.buildControlsNodes()
    this.updateAfterAction()
    this.healButton.textContent = this.healButtonText
  }
}

export default ui
