<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()
</script>
<template>
    <v-container>
        <v-row v-for="post in postStore.posts" :key="post.id">
            <v-col>
                <v-card class="pa-4">
                    <v-container>
                        <v-avatar :image="post.usernameDpSrc" size="small" /><span class="ml-2">{{ post.username }}</span>
                    </v-container>
                    <v-card-subtitle>
                        {{ post.dateCreated }} | <v-icon size="x-small" color="green">mdi-heart</v-icon>:<v-icon size="x-small" color="red">mdi-heart-broken</v-icon> = {{ post.loveToHateRatio }}
                    </v-card-subtitle>
                    <router-link class="text-blue-darken-4" :to="'/posts/'+post.id">
                        <v-card-title class="font-weight-bold">{{ post.title }}</v-card-title>
                    </router-link>
                    <v-card-text class="text-grey-darken-2">
                        {{ post.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-icon size="small" color="green">mdi-heart</v-icon>{{ post.noOfLoves }}
                        <v-icon size="small" color="red" end>mdi-heart-broken</v-icon>{{ post.noOfHates }}
                        <v-icon size="small" color="yellow" end>mdi-comment-outline</v-icon>{{ post.noOfComments }}
                        <v-icon size="small" color="blue" end>mdi-share</v-icon>{{ post.noOfHates }}
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>