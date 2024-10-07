
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  isEnablePrincipalView: 1,
  isEnableContentView: 0,
  increment() {
    this.count++
  },
  enablePrincipalView () {
    this.isEnablePrincipalView = 1
    this.disableContentView()
  },
  disblePrinciapalView () {
    this.isEnablePrincipalView = 0
  },
  enableContentView () {
    this.isEnableContentView = 1
    this.disblePrinciapalView()
  },
  disableContentView () {
    this.isEnableContentView = 0
  }
})