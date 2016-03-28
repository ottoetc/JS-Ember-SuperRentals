import Ember from 'ember';

export default Ember.Component.extend({
  addNewTenant: false,
  actions: {
    tenantFormShow() {
      this.set('addNewTenant', true);
    },

    save1() {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        bio: this.get('bio'),
      };
      this.set('addNewTenant', false);
      this.sendAction('save2', params);
    }
  }
});
