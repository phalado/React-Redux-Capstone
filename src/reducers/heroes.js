const heroReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HERO':
      return ([...state,
        {
          id: action.id,
          name: action.name,
          identity: action.identity,
          image: action.image,
          chart: action.chart,
          filiation: action.filiation,
          alignment: action.alignment,
        }]);
    default:
      return state;
  }
};

export default heroReducer;
