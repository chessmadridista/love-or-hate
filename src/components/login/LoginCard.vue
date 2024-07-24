<script setup>
import { useGeneralStore } from '@/stores'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const generalStore = useGeneralStore()
const username = ref('')
const password = ref('')
const router = useRouter();

function login() {
  const correctUsername = "admin"
  const correctPassword = "password"

  if (username.value === correctUsername && password.value === correctPassword) {
    generalStore.setSnackbarMessage("You have successfully logged in.")
    generalStore.setSnackbarColor("success")
    router.push('/')
  } else {
    generalStore.setSnackbarMessage("The credentials are incorrect.")
    generalStore.setSnackbarColor("error")
  }

  generalStore.showSnackbar()
}
</script>
<template>
  <v-container class="card-container">
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field density="compact" v-model="username" type="text" label="Username" />
              <v-text-field density="compact" v-model="password" type="password" label="Password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="elevated" color="primary" block @click="login">Login</v-btn>
          </v-card-actions>
          <div class="d-flex justify-center mt-2">
            <router-link to="/signup">Create a new account</router-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.card-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
