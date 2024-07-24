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
                        {{ post.dateCreated }} | <v-icon color="green">mdi-heart</v-icon>:<v-icon color="red">mdi-heart-broken</v-icon> = {{ post.loveToHateRatio }}
                    </v-card-subtitle>
                    <v-card-title>{{ post.title }}</v-card-title>
                    <v-card-text>
                        {{ post.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-icon color="green">mdi-heart</v-icon>{{ post.noOfLoves }}
                        <v-icon color="red" class="ml-2">mdi-heart-broken</v-icon>{{ post.noOfHates }}
                        <v-icon color="yellow" class="ml-2">mdi-comment-outline</v-icon>{{ post.noOfComments }}
                        <v-icon color="blue" class="ml-2">mdi-share</v-icon>{{ post.noOfHates }}
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>