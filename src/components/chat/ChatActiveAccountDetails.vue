<script setup>
import { useChatStore } from '@/stores'

const chatStore = useChatStore()
</script>
<template>
    <v-card height="85vh" class="pt-2 text-center">
        <v-card-title class="text-subtitle-1">
            <v-avatar size="x-large" :image="chatStore.selectedAccount.usernameDpSrc"></v-avatar>
            <div class="mt-1">
                @{{ chatStore.selectedAccount.username }}
            </div>
        </v-card-title>
        <v-card-text>
            Life goes by pretty soon if you don't live it fully and with complete mindfulness.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title class="text-subtitle-2 text-primary">Photos and videos</v-card-title>
        <v-card-text class="text-grey">
            No media is available.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title class="text-subtitle-2 text-primary">Shared files</v-card-title>
        <v-card-text class="text-grey">
            No media is available.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title class="text-subtitle-2 text-primary">Shared links</v-card-title>
        <v-card-text class="text-grey">
            No media is available.
        </v-card-text>
    </v-card>
</template>