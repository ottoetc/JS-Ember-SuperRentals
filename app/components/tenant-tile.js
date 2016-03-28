import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(tenant) {
      if (confirm('Are you sure you want to delete this tenant?')) {
        this.sendAction('destroyTenant', tenant);
      }
    }
  }
});
