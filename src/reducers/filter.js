const filter = (state = 'Justice League', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        value: action.filter,
      };
    default:
      return state;
  }
};

export default filter;
