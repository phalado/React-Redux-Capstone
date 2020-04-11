const render = (state = 'init', action) => {
  switch (action.type) {
    case 'CHANGE_RENDER':
      return action.render;
    default:
      return state;
  }
};

export default render;
