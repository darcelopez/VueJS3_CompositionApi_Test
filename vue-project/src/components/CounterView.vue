<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter';

    const counterStore = useCounterStore(); 

    const increaseBy = (value: number ) => {
        counterStore.incrementBy(value);
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
    </main>
  </template>
   
  <style>

  </style>