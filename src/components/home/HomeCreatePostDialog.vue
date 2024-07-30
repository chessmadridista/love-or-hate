<script setup>
import { usePostStore, useGeneralStore } from '@/stores'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const community = ref()
const generalStore = useGeneralStore()
const postStore = usePostStore()
const communities = [
    'football',
    'chess',
    'art',
    'writing',
]

function createNewPost() {
    const post = {
        id: postStore.posts.length,
        username: 'admin',
        usernameDpSrc: 'https://images2.alphacoders.com/649/649995.jpg',
        dateCreated: 'Today',
        title: title.value,
        description: description.value,
        noOfLoves: 10,
        noOfHates: 8,
        loveToHateRatio: 1.25,
        noOfComments: 25,
        noOfShares: 5,
        community: community.value,
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
                <v-select 
                    v-model="community"
                    label="Community"
                    :items="communities"
                />
            </v-card-text>
            <v-card-actions>
                <v-btn variant="elevated" @click="createNewPost" block color="primary" prepend-icon="mdi-check">
                    Create
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>