const initialState = {
  modal: false,
  username: null,
  password: null
};

const login = ((state, action) => {
  if(action.type === 'LOGIN::TOGGLE_MODAL') {
    return Object.assign({}, state, {
      modal: state.modal ? false : true
    });
  }
  if(action.type === 'LOGIN::UPDATE_USERNAME') {
    return Object.assign({}, state, {
      username: action.username
    });
  }
  if(action.type === 'LOGIN::UPDATE_PASSWORD') {
    return Object.assign({}, state, {
      password: action.password
    });
  }
  return state || initialState;
});

export default {
  login
}
