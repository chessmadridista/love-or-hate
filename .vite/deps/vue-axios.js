import "./chunk-PZ5AY32C.js";

// node_modules/vue-axios/dist/vue-axios.esm.min.js
function _typeof(e) {
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, _typeof(e);
}
function plugin(e, n) {
  if (!e.vueAxiosInstalled) {
    var o = isAxiosLike(n) ? migrateToMultipleInstances(n) : n;
    if (isValidConfig(o)) {
      var t = getVueVersion(e);
      if (t) {
        var i = t < 3 ? registerOnVue2 : registerOnVue3;
        Object.keys(o).forEach(function(n2) {
          i(e, n2, o[n2]);
        }), e.vueAxiosInstalled = true;
      } else console.error("[vue-axios] unknown Vue version");
    } else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }");
  }
}
function registerOnVue2(e, n, o) {
  Object.defineProperty(e.prototype, n, { get: function() {
    return o;
  } }), e[n] = o;
}
function registerOnVue3(e, n, o) {
  e.config.globalProperties[n] = o, e[n] = o;
}
function isAxiosLike(e) {
  return e && "function" == typeof e.get && "function" == typeof e.post;
}
function migrateToMultipleInstances(e) {
  return { axios: e, $http: e };
}
function isValidConfig(e) {
  return "object" === _typeof(e) && Object.keys(e).every(function(n) {
    return isAxiosLike(e[n]);
  });
}
function getVueVersion(e) {
  return e && e.version && Number(e.version.split(".")[0]);
}
"object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = plugin : "function" == typeof define && define.amd ? define([], function() {
  return plugin;
}) : window.Vue && window.axios && window.Vue.use && Vue.use(plugin, window.axios);
export {
  plugin as default
};
//# sourceMappingURL=vue-axios.js.map
