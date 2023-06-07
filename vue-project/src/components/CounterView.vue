<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter';
    import CustomButton from './CustomButton.vue';
    import { ref, computed } from 'vue'

    const counterStore = useCounterStore(); 

    const increaseBy = (value: number ) => {
        counterStore.incrementBy(value);
    }

    const customButtonVal = ref(4);

    const showAlert = (newValue: number) => {
        console.log('click action');
        console.log('Value received=' + newValue);
        alert('Child button was clicked');
    }

</script>

<template>
    <main>
        <h1>
            Home View: {{ counterStore.count }}
        </h1>

        <h3>
            Number of changes: {{ counterStore.numberOfChanges }}
        </h3>

        <button @click="increaseBy(-1)">-1</button>
        <button @click="increaseBy(2)">+1</button>
        <button @click="increaseBy(5)">+2</button>
        <CustomButton 
            msg="Calc"
           :numval = 5
           @buttonClicked="showAlert"
            />
    </main>
  </template>
   
  <style>

  </style>