<script setup>
import { useGeneralStore } from '@/stores';

const generalStore = useGeneralStore()
</script>
<template>
    <v-btn to="/" icon size="small" class="mr-1">
        <v-icon>mdi-home</v-icon>
    </v-btn>
</template>