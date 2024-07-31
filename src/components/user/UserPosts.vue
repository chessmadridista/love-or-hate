<script setup>
import { usePostStore } from '@/stores'
import { useRouter } from 'vue-router'

const postStore = usePostStore()
const router = useRouter()

function lovePost(post) {
    if (post.loggedInUserLovesPost === false) {
        if (post.loggedInUserHatesPost === true) {
            post.noOfHates -= 1
            post.loggedInUserHatesPost = false
        } 

        post.noOfLoves += 1
        post.loggedInUserLovesPost = true
    } else {
        post.noOfLoves -= 1
        post.loggedInUserLovesPost = false
    }
}

function hatePost(post) {
    if (post.loggedInUserHatesPost === false) {
        if (post.loggedInUserLovesPost === true) {
            post.noOfLoves -= 1
            post.loggedInUserLovesPost = false
        } 

        post.noOfHates += 1
        post.loggedInUserHatesPost = true
    } else {
        post.noOfHates -= 1
        post.loggedInUserHatesPost = false
    }
}

function commentOnPost(post) {
    router.push(`/post/${post.id}`)
}

function sharePost(post) {
    const originPath = window.location.origin
    const postPath = `/post/${post.id}`
    const fullPostPath = originPath + postPath
    postStore.setPostLinkToShare(fullPostPath)
    postStore.showPostShareDialog()
}

</script>
<template>
    <v-card class="pa-4 mb-4" v-for="post in postStore.posts" :key="post.id">
        <router-link class="text-blue-darken-4" :to="'/post/'+post.id">
            <v-card-title class="font-weight-bold">{{ post.title }}</v-card-title>
        </router-link>
        <v-card-subtitle>
            !<router-link :to="'/community/'+post.community">{{ post.community }}</router-link> | {{ post.dateCreated }} | <v-icon size="x-small" color="green">mdi-heart</v-icon>:<v-icon size="x-small" color="red">mdi-heart-broken</v-icon> = {{ post.loveToHateRatio }}
        </v-card-subtitle>
        <v-card-text class="text-grey-darken-2">
            {{ post.description }}
        </v-card-text>
        <v-card-actions>
            <span v-if="post.loggedInUserHatesPost"><v-icon @click="hatePost(post)" size="small" color="red" end>mdi-heart-broken</v-icon>{{ post.noOfHates }}</span>
            <span v-else><v-icon @click="hatePost(post)" size="small" color="red" end>mdi-heart-broken-outline</v-icon>{{ post.noOfHates }}</span>
            <span v-if="post.loggedInUserLovesPost"><v-icon @click="lovePost(post)" size="small" color="green" end>mdi-heart</v-icon>{{ post.noOfLoves }}</span>
            <span v-else><v-icon @click="lovePost(post)" size="small" color="green" end>mdi-heart-outline</v-icon>{{ post.noOfLoves }}</span>
            <v-icon @click="commentOnPost(post)" size="small" color="yellow" end>mdi-comment-outline</v-icon>{{ post.noOfComments }}
            <v-icon @click="sharePost(post)" size="small" color="blue" end>mdi-share</v-icon>{{ post.noOfShares }}
        </v-card-actions>
    </v-card>
</template>
<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
a:hover {
    text-decoration: underline;
}
</style>