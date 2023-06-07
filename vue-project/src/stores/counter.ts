import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const numberOfChanges = ref(0)

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } 
  function incrementBy( value: number ) {
    count.value += value 
    numberOfChanges.value += 1
  } 

  return { count, doubleCount, increment, incrementBy, numberOfChanges }
})
