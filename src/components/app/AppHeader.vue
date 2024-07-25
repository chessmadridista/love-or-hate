<script setup>
import AppButtonLogout from './AppButtonLogout.vue'
import AppButtonHome from './AppButtonHome.vue'
</script>
<template>
    <v-app-bar app color="primary">
        <v-app-bar-title>Love or hate</v-app-bar-title>
        <AppButtonHome />
        <AppButtonLogout />
    </v-app-bar>
</template>