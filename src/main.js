import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessPawn, faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChessKing, faChessQueen, faChessRook, faChessBishop, faChessPawn, faChessKnight)

console.log(library)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')