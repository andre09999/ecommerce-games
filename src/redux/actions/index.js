export const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

export const decre = (decrement = 1)   => ({
  type: 'DECREMENT_COUNTER',
  payload: decrement
})
  
export const limparClearn = (a) => ({
  type: 'clean1',
  payload: a
})
  export const game = (a) => ({ 
    type: a.id,
    payload: a,
  });

  export const decrementGame = (a) => ({
    type: a.id+1 ,
    payload: a,
  })

  export const limpar = (a) => ({
    type: 'clean',
    payload: a
  })