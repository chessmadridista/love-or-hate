<script setup>
import ChatAccounts from '@/components/chat/ChatAccounts.vue'
import ChatActiveAccountMessages from '@/components/chat/ChatActiveAccountMessages.vue'
import ChatActiveAccountDetails from '@/components/chat/ChatActiveAccountDetails.vue'
</script>
<template>
    <v-container fluid>
        <v-row dense >
            <v-col cols="3">
                <ChatAccounts />
            </v-col>
            <v-col cols="6">
                <ChatActiveAccountMessages />
            </v-col>
            <v-col cols="3">
                <ChatActiveAccountDetails />                
            </v-col>
        </v-row>
    </v-container>
</template>