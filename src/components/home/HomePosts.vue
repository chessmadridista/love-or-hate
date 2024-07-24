<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()
</script>
<template>
    <v-container>
        <v-row v-for="post in postStore.posts" :key="post.id">
            <v-col>
                <v-card class="pa-4">
                    <v-avatar :image="post.usernameDpSrc" size="small" /><span class="ml-2">{{ post.username }}</span>
                    <v-card-title>{{ post.title }}</v-card-title>
                    <v-card-subtitle>
                        {{ post.dateCreated }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ post.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>