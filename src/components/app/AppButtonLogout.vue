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
    <v-btn @click="logout" to="/login" prepend-icon="mdi-logout">
        Logout
    </v-btn>
</template>