const requestReducer = (state, action) => ({
  ...state,
  isLoading: true
})

const successReducer = (state, action) => ({
  ...state,
  data: action.payload,
  isSuccess: true,
})

const errorReducer = (state, action) => ({
  ...state,
  error: action.payload
})

const fulfillReducer = (state, action) => ({
  ...state,
  isLoading: false
})

function createRoutineHandlers(routine, initialState) {
  return ({
    [routine.REQUEST]: requestReducer,
    [routine.SUCCESS]: successReducer,
    [routine.FAILURE]: errorReducer,
    [routine.FULFILL]: fulfillReducer,
  });
}

export default createRoutineHandlers;
