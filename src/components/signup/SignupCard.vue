<script setup>
import { useGeneralStore } from '@/stores'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const generalStore = useGeneralStore()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const router = useRouter()

function signup() {
  generalStore.setSnackbarMessage("You have successfully signed up.")
  generalStore.setSnackbarColor("success")
  generalStore.showSnackbar()
  router.push('/login')
}
</script>
<template>
  <v-container class="card-container">
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-card-title class="text-center">Signup</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field density="compact" v-model="firstName" type="text" label="First name" />
              <v-text-field density="compact" v-model="lastName" type="text" label="Last name" />
              <v-text-field density="compact" v-model="email" type="email" label="Email" />
              <v-text-field density="compact" v-model="username" type="text" label="Username" />
              <v-text-field density="compact" v-model="password" type="password" label="Password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="elevated" color="primary" block @click="signup">Signup</v-btn>
          </v-card-actions>
          <div class="d-flex justify-center mt-2">
            <router-link to="/login">Already a user?</router-link>
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
