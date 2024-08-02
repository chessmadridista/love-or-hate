<script setup>
import { useGeneralStore, usePostStore } from '@/stores'

const generalStore = useGeneralStore()
const postStore = usePostStore()

function copyToClipboard() {
    navigator.clipboard.writeText(postStore.postLinkToShare)
    .then(() => {
        generalStore.setSnackbarMessage("The link has been copied successfully.")
        generalStore.setSnackbarColor("success")
    })
    .catch((error) => {
        generalStore.setSnackbarMessage(error)
        generalStore.setSnackbarColor("error")
    })
    .finally(() => {
        generalStore.showSnackbar()
    });
}
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
                    @click="copyToClipboard"
                >
                    Copy link to clipboard
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>