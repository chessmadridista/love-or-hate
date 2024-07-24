<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()
</script>
<template>
    <v-container>
        <v-row v-for="post in postStore.posts" :key="post.id">
            <v-col>
                <v-card>
                    <v-card-title>{{ post.title }}</v-card-title>
                    <v-card-text>
                        {{ post.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>