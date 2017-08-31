//action-creator
export const increment = () => {
  return { type: 'INC' };
};

export const decrement = () => {
  return { type: 'DEC' };
};

export const reset = () => {
  return { type: 'RESET' };
};

export const removeDuplicates = () => {
  return { type: 'REMOVE_DUPLICATES' }
};
