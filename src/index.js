import easyCircularProgress2 from "./index.vue";

const EasyCircularProgress2 = {
  install ( Vue ) {
    Vue.component( easyCircularProgress2.name, easyCircularProgress2 );
  },
}

export default EasyCircularProgress2

if ( typeof window !== 'undefined' && window.Vue ) {
  window.Vue.use( EasyCircularProgress2 );
}
