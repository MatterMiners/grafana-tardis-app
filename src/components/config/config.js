import configTemplate from "./config.html!text";

class TardisConfigCtrl {
  constructor($scope, $injector, $q) {
    this.$q = $q;
    this.enabled = false;
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  postUpdate() {
    if (!this.appModel.enabled) {
      return this.$q.resolve();
    }
    return this.appEditCtrl.importDashboards().then(() => {
      this.enabled = true;
      return {
        url: "dashboards/tardis-home",
        message: "TARDIS Monitoring App enabled!"
      };
    });
  }
}

TardisConfigCtrl.template = configTemplate;

export {
  TardisConfigCtrl as ConfigCtrl
};
