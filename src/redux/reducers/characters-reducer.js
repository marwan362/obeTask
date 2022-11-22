import {ActionTypes} from '../actions/characters-actions';

const initialState = {
  data: {
    info: {},
    results: [],
  },
  isLoading: false,
  error: null,
  currentPage: 1,
};

function getUniqueData(array) {
  return [...new Map(array.map(item => [item.id, item])).values()];
}

const Characters = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case ActionTypes.SET_CHARACTERS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case ActionTypes.SET_CHARACTERS_INITIAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        currentPage: 2,
      };

    case ActionTypes.SET_CHARACTERS_SUCCESS:
      return {
        ...state,
        data: {
          info: {...action.payload.info},
          results: getUniqueData([
            ...state.data.results,
            ...action.payload.results,
          ]),
        },
        isLoading: false,
        currentPage: state.currentPage + 1,
      };

    case ActionTypes.SET_CHARACTERS_DEFAULT:
      return {
        ...initialState,
        data: {
          info: {},
          results: [],
        },
      };

    default:
      return state;
  }
};

export default Characters;
