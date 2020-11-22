import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg" // 'mdi' || "mdiSvg" || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  lang: {
    locales: { es },
    current: "es"
  }
});
