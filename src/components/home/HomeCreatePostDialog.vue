<script setup>
import { usePostStore, useGeneralStore } from '@/stores'
import { ref } from 'vue'

const title = ref('')
const generalStore = useGeneralStore()
const postStore = usePostStore()

function createNewPost() {
    generalStore.setSnackbarMessage("The post has been created successfully.")
    generalStore.setSnackbarColor("success")
    generalStore.showSnackbar()
    postStore.hideCreateNewPostDialog()
}
</script>
<template>
    <v-dialog v-model="postStore.createNewPostDialog">
        <v-card>
            <v-card-title>Create a new post</v-card-title>
            <v-card-text>
                <v-text-field v-model="title" label="Title" />
                <v-btn @click="createNewPost" block color="primary" prepend-icon="mdi-check">
                    Create
                </v-btn>
            </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>