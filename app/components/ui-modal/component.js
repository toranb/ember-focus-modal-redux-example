import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <div class="modal x-modal" tabindex="-1" role="dialog" style="{{if visible '' 'display: none'}}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button onclick={{action clicked}} type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Abandon changes?</h4>
          </div>
          <div class="modal-body">
            <p>You have unsaved changes. Do you want to throw out your current changes?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onclick={{action clicked}}>Cancel</button>
            <button type="button" class="btn btn-primary" onclick={{action clicked}}>Hide</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop x-modal-backdrop" style="{{if visible '' 'display: none'}}"></div>
  `
});
