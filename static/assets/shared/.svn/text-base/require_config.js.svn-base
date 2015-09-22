(function() {
  var _this = this;

  window.initRequire = requirejs.config({
    context: "app",
    paths: {
      jquery: '/assets/shared/backbone/jquery-require-bootstrap',
      form_helpers: '/assets/shared/lib/install_form_helpers',
      pro: '/assets/backbone/pro'
    },
    waitSeconds: 0,
    shim: {
      pro: {
        exports: 'Pro'
      }
    }
  });

  jQuery(document).ready(function() {
    return jQuery(document).trigger('requirejs-ready');
  });

}).call(this);
