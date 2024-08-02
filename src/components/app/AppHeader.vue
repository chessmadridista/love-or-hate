<script setup>
import AppButtonLogout from './AppButtonLogout.vue'
import AppButtonHome from './AppButtonHome.vue'
import AppButtonChat from './AppButtonChat.vue'
</script>
<template>
    <v-app-bar app color="primary">
        <v-app-bar-title>Love or hate</v-app-bar-title>
        <AppButtonHome />
        <AppButtonChat />
        <AppButtonLogout />
    </v-app-bar>
</template>