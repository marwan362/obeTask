const ActionTypes = {
  SET_CHARACTERS_STARTED: 'set_characters_started',
  SET_CHARACTERS_SUCCESS: 'set_characters_success',
  SET_CHARACTERS_FAILED: 'set_characters_failed',
  SET_CHARACTERS_DEFAULT: 'set_characters_default',
  SET_CHARACTERS_INITIAL_SUCCESS: 'set_characters_initial_success',
};

function setCharactersStarted() {
  return {
    type: ActionTypes.SET_CHARACTERS_STARTED,
  };
}

function setCharactersFailed(error) {
  return {
    type: ActionTypes.SET_CHARACTERS_FAILED,
    payload: error,
  };
}

function setCharactersInitialSuccess(data) {
  return {
    type: ActionTypes.SET_CHARACTERS_INITIAL_SUCCESS,
    payload: data,
  };
}

function setCharactersSuccess(data) {
  return {
    type: ActionTypes.SET_CHARACTERS_SUCCESS,
    payload: data,
  };
}

function resetDefaultCharacters() {
  return {
    type: ActionTypes.SET_CHARACTERS_DEFAULT,
  };
}

function getInitialCharacters() {
  return async dispatch => {
    dispatch(setCharactersStarted());
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=1`,
      );
      const data = await response.json();

      dispatch(setCharactersInitialSuccess(data));
    } catch (error) {
      dispatch(
        setCharactersFailed({
          message: 'Error',
        }),
      );
    }
  };
}

function getCharacters() {
  return async (dispatch, getState) => {
    const state = getState();
    if (state.Characters.currentPage <= state.Characters.data.info.pages) {
      dispatch(setCharactersStarted());

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${state.Characters.currentPage}`,
        );
        const data = await response.json();

        dispatch(setCharactersSuccess(data));
      } catch (error) {
        dispatch(
          setCharactersFailed({
            message: 'Error',
          }),
        );
      }
    }
  };
}

export {
  ActionTypes,
  getCharacters,
  resetDefaultCharacters,
  getInitialCharacters,
};
