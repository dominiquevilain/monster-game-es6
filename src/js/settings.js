export const HEALTH_MAX_VALUE = 100
export const MAX_HEAL_ACTION = 20
export const DEFAULT_GAME_STATUS = 'not-playing'
export const IN_GAME_STATUS = 'playing'
export const START_NEW_GAME_BUTTON_ID = 'start-new-game'
export const GIVE_UP_BUTTON_ID = 'give-up'
export const ATTACK = {
  type: 'attack',
  'max-impact': -7,
  'button-id': 'attack',
  message (opponent, damage) {
    return `${opponent.name} a subi une attaque simple de ${Math.abs(damage)}. Il en est à ${opponent.healthValue}`
  }
}
export const SPECIAL_ATTACK = {
  type: 'special-attack',
  'max-impact': -14,
  'button-id': 'special-attack',
  message (opponent, damage) {
    return `${opponent.name} a subi une attaque spéciale de ${Math.abs(damage)}. Il en est à ${opponent.healthValue}`
  }
}
export const HEAL = {
  type: 'heal',
  'max-impact': 7,
  'button-id': 'heal',
  message (opponent, damage) {
    return `${opponent.name} a été soigné de de ${Math.abs(damage)}. Il en est à ${opponent.healthValue}`
  }
}
