import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useSizePage () {
  
  const isMaxWindow = ref(0)
  const isMiniMenuTop = ref(0)

  const topMenuHeight = ref(0)
  const bodyMenuHeight = ref(0)
  const breadMenuHeight = ref(0)

  function updateSize (event) {
    const maxWidth = 620
    isMaxWindow.value = window.innerWidth > maxWidth ? 1 : 0
  
    updateHeigthContent()
    miniMenuTop()
  };

  function updateHeigthContent () {
    const percentTop = 0.20
    const percentBody = 0.70
    const percentBread = 0.05 
    topMenuHeight.value = percentTop * window.innerHeight
    bodyMenuHeight.value = percentBody * window.innerHeight
    breadMenuHeight.value = percentBread * window.innerHeight
  };

  function miniMenuTop () {
    const maxWidth = 700
    console.log(maxWidth)
    isMiniMenuTop.value = window.innerWidth > maxWidth ? 1 : 0
    //isMiniMenuTop.value = maxWidth > window.innerWidth ? 1 : 0
    //console.log(isMiniMenuTop.value)
  };

  onMounted(() => window.addEventListener('resize', updateSize))
  onUnmounted(() => window.removeEventListener('resize', updateSize))

  return {
    miniMenuTop,
    updateHeigthContent,
    updateSize,
    isMaxWindow,
    topMenuHeight,
    bodyMenuHeight,
    breadMenuHeight,
    isMiniMenuTop
  }
}