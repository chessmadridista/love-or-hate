<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()
</script>
<template>
    <v-dialog max-width="500" v-model="postStore.postShareDialog">
        <v-card
            class="py-4"
        >
            <v-card-title class="text-center text-blue-darken-2">Share</v-card-title>
            <v-card-text>
                <v-code>
                    {{ postStore.postLinkToShare }}
                </v-code>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn
                    color="primary"
                    variant="outlined"
                >
                    Copy link to clipboard
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>