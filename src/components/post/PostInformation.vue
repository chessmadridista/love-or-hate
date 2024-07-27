<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores'

const post = ref({})
const router = useRouter()
const postStore = usePostStore()

function getSelectedPost() {
    const postId = router.currentRoute.value.params.id
    const selectedPost = postStore.posts.filter((post) => {
        return post.id == postId
    })[0]
    
    return selectedPost
}

function lovePost(post) {
    post.noOfLoves += 1
}

function hatePost(post) {
    post.noOfHates += 1
}

function sharePost() {
    const originPath = window.location.origin
    const postPath = router.currentRoute.value.fullPath
    const fullPostPath = originPath + postPath
    postStore.setPostLinkToShare(fullPostPath)
    postStore.showPostShareDialog()
}

onBeforeMount(() => {
    post.value = getSelectedPost()  
})
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-4">
                    <v-container>
                        <v-avatar :image="post.usernameDpSrc" size="small" /><router-link :to="'/username/'+post.username"><span class="ml-2">@{{ post.username }}</span></router-link>
                    </v-container>
                    <v-card-subtitle>
                        {{ post.dateCreated }} | <v-icon size="x-small" color="green">mdi-heart</v-icon>:<v-icon size="x-small" color="red">mdi-heart-broken</v-icon> = {{ post.loveToHateRatio }}
                    </v-card-subtitle>
                    <v-card-title class="font-weight-bold">{{ post.title }}</v-card-title>
                    <v-card-text class="text-grey-darken-2">
                        {{ post.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-icon @click="lovePost(post)" size="small" color="green">mdi-heart</v-icon>{{ post.noOfLoves }}
                        <v-icon @click="hatePost(post)" size="small" color="red" end>mdi-heart-broken</v-icon>{{ post.noOfHates }}
                        <v-icon size="small" color="yellow" end>mdi-comment-outline</v-icon>{{ post.noOfComments }}
                        <v-icon @click="sharePost" size="small" color="blue" end>mdi-share</v-icon>{{ post.noOfShares }}
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
a {
    text-decoration: none;
    color: inherit
}
a:hover {
    text-decoration: underline;
}
</style>