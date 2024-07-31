<script setup>
import { useGeneralStore } from '@/stores';

const generalStore = useGeneralStore()

function logout() {
    generalStore.setSnackbarMessage("You have logged out successfully.")
    generalStore.setSnackbarColor('success')
    generalStore.showSnackbar()
}
</script>
<template>
    <v-btn @click="logout" to="/login" icon size="small">
        <v-icon>mdi-logout</v-icon>
    </v-btn>
</template>