<script setup>
import { useChatStore } from '@/stores'
import ChatIconSearch from '@/components/chat/ChatIconSearch.vue'

const chatStore = useChatStore()
</script>
<template>
    <v-card height="85vh">
        <v-card-title>
            @{{ chatStore.selectedAccount.username }}
        </v-card-title>
    </v-card>
</template>