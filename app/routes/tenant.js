import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tenant');
  },

  actions: {
    save3(params) {
      var newTenant = this.store.createRecord('tenant', params);
      newTenant.save();
      this.transitionTo('tenant');
    },
    destroyTenant(tenant) {
      tenant.destroyRecord();
      this.transitionTo('tenant');
    }
  }
});
