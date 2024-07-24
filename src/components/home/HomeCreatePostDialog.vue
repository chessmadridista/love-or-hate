<script setup>
import { usePostStore, useGeneralStore } from '@/stores'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const generalStore = useGeneralStore()
const postStore = usePostStore()

function createNewPost() {
    const post = {
        id: postStore.posts.length,
        username: '@admin',
        usernameDpSrc: 'https://i.pinimg.com/736x/6e/d1/b6/6ed1b66ad6fa5e395fe18eb4a88f790d.jpg',
        dateCreated: 'Today',
        title: title.value,
        description: description.value,
        noOfLoves: 10,
        noOfHates: 8,
        loveToHateRatio: 1.25,
        noOfComments: 25,
        noOfShares: 5,
    }
    postStore.createNewPost(post)
    generalStore.setSnackbarMessage("The post has been created successfully.")
    generalStore.setSnackbarColor("success")
    generalStore.showSnackbar()
    postStore.hideCreateNewPostDialog()
}
</script>
<template>
    <v-dialog v-model="postStore.createNewPostDialog">
        <v-card>
            <v-card-title class="text-center">Create a new post</v-card-title>
            <v-card-text>
                <v-text-field v-model="title" label="Title" />
                <v-textarea v-model="description" label="Description" />
            </v-card-text>
            <v-card-actions>
                <v-btn variant="elevated" @click="createNewPost" block color="primary" prepend-icon="mdi-check">
                    Create
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>