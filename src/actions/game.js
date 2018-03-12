// src/actions/game.js
import { fillBoard } from '../lib/game'
import { CREATE_GAME, MOVE } from './types'

export const createGame = (rows = 6) => {
  const [board, locked] = fillBoard(rows)
  return {
    type: 'CREATE_GAME',
    payload: {
      board,
      locked
    }
  }
}

export const move = (row, col, value) => {
  // const [row, col] = [0, 1]
  // const action = move(row, col)

  return {
    type: 'MOVE',
    payload: {
      row,
      col
    }
  }
}
