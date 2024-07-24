<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()

function createNewPost() {
    postStore.showCreateNewPostDialog()
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn @click="createNewPost" block color="primary" prepend-icon="mdi-plus">
                    Create new post
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>