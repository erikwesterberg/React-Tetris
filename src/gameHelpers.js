export const STAGE_WIDTH = 12;
export const STATE_HEIGHT = 20;

export const createStage = () => 
  Array.from(Array(STATE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )


