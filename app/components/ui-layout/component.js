import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    modal: state.login.modal,
    username: state.login.username,
    password: state.login.password
  };
};

var dispatchToActions = (dispatch) => {
  return {
    toggleModal: () => dispatch({type: 'LOGIN::TOGGLE_MODAL'}),
    updateUsername: (value) => dispatch({type: 'LOGIN::UPDATE_USERNAME', username: value}),
    updatePassword: (value) => dispatch({type: 'LOGIN::UPDATE_PASSWORD', password: value})
  };
};

const LayoutComponent = Ember.Component.extend({
  layout: hbs`
    {{yield username password modal (action "toggleModal") (action "updateUsername") (action "updatePassword")}}
  `
});

export default connect(stateToComputed, dispatchToActions)(LayoutComponent);
