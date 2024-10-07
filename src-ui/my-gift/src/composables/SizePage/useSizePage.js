import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useSizePage () {
  
  const isMaxWindow = ref(0)

  function updateSize (event) {
    const maxWidth = 620
    isMaxWindow.value = window.innerWidth > maxWidth ? 1 : 0
  }

  onMounted(() => window.addEventListener('resize', updateSize))
  onUnmounted(() => window.removeEventListener('resize', updateSize))

  return {
    isMaxWindow,
    updateSize
  }
}