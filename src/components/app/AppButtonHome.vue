<script setup>
import { useGeneralStore } from '@/stores';

const generalStore = useGeneralStore()
</script>
<template>
    <v-btn to="/" prepend-icon="mdi-home">
        Home
    </v-btn>
</template>