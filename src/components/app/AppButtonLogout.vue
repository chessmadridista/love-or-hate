<script setup>
import { useGeneralStore } from '@/stores';
import { useRouter } from 'vue-router'

const generalStore = useGeneralStore()
const router = useRouter()

function logout() {
    router.push('login')
    generalStore.setSnackbarMessage("You have logged out successfully.")
    generalStore.setSnackbarColor('success')
    generalStore.showSnackbar()
}
</script>
<template>
    <v-btn @click="logout" prepend-icon="mdi-logout">
        Logout
    </v-btn>
</template>