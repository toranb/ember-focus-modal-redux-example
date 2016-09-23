import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <input value={{value}} oninput={{action update value="target.value"}} />
  `,
  didUpdateAttrs(attrs) {
    this._super(...arguments);
    const prior = attrs.oldAttrs.modal;
    const current = attrs.newAttrs.modal;
    if (current && current.value === false && prior.value !== false) {
      this.$('input').focus();
    }
  }
});
