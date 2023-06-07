<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter';

    // import { useCounterStore } from '@/stores/counter';
    // defineProps<{
    //     msg: string,
    //     numval: number
    // }>()

    const props = defineProps({
        msg: {
            type: String,
            default:'Use'
        },
        numval: {
            type: Number,
            default: 0
        }
    })

    const counterStore = useCounterStore(); 

    const emit = defineEmits(['buttonClicked']);

    const handleClick = () => {
        counterStore.incrementBy(props.numval);
        emit('buttonClicked', 2);
    }

</script>

<template>
    <main>
        <button @click="handleClick">{{ msg }} + {{ numval }}</button>
    </main>

</template>
   
<style>

</style>