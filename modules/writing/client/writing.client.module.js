(function (app) {
  'use strict';

  app.registerModule('writing', ['core']);
  app.registerModule('writing.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
