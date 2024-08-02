<script setup>
import { useChatStore } from '@/stores'
import { ref } from 'vue'
import ChatIconSearch from '@/components/chat/ChatIconSearch.vue'
import ChatIconPhone from '@/components/chat/ChatIconPhone.vue'
import ChatIconVideo from '@/components/chat/ChatIconVideo.vue'

const chatStore = useChatStore()
const newMessage = ref('')
const messages = ref([
    {
        "id": 0,
        "type": "sent",
        "body": "You were supposed to play as a false 9 man."
    },
    {
        "id": 1,
        "type": "received",
        "body": "I know, but I had to mark Messi as well."
    },
    {
        "id": 2,
        "type": "sent",
        "body": "We needed you to stay forward for the counter."
    },
    {
        "id": 3,
        "type": "received",
        "body": "I saw an opening and went for it."
    },
    {
        "id": 4,
        "type": "sent",
        "body": "But you left a huge gap in our defense."
    },
    {
        "id": 5,
        "type": "received",
        "body": "I thought our midfield could cover it."
    },
    {
        "id": 6,
        "type": "sent",
        "body": "We need better communication on the field."
    },
    {
        "id": 7,
        "type": "received",
        "body": "Agreed. I'll work on it."
    },
    {
        "id": 8,
        "type": "sent",
        "body": "Let's review the match footage later."
    },
    {
        "id": 9,
        "type": "received",
        "body": "Good idea. When do you want to do it?"
    },
    {
        "id": 10,
        "type": "sent",
        "body": "How about tomorrow morning?"
    },
    {
        "id": 11,
        "type": "received",
        "body": "Works for me. I'll bring my notes."
    },
    {
        "id": 12,
        "type": "sent",
        "body": "Perfect. Let's focus on our positioning."
    },
    {
        "id": 13,
        "type": "received",
        "body": "And our transitions between defense and attack."
    },
    {
        "id": 14,
        "type": "sent",
        "body": "Exactly. We need to be quicker."
    },
    {
        "id": 15,
        "type": "received",
        "body": "I'll talk to the midfielders as well."
    },
    {
        "id": 16,
        "type": "sent",
        "body": "Great. Let's aim for a solid performance next match."
    },
    {
        "id": 17,
        "type": "received",
        "body": "Absolutely. We can do this."
    },
    {
        "id": 18,
        "type": "sent",
        "body": "Remember, it's all about teamwork."
    },
    {
        "id": 19,
        "type": "received",
        "body": "Right. Together we're stronger."
    },
    {
        "id": 20,
        "type": "sent",
        "body": "I'll also have a chat with our coach."
    },
    {
        "id": 21,
        "type": "received",
        "body": "Good plan. His input will be valuable."
    },
    {
        "id": 22,
        "type": "sent",
        "body": "Let's keep our heads up and stay focused."
    },
    {
        "id": 23,
        "type": "received",
        "body": "We got this. Let's give it our all."
    },
    {
        "id": 24,
        "type": "sent",
        "body": "See you at practice."
    },
    {
        "id": 25,
        "type": "received",
        "body": "See you then. Let's go!"
    }
])
function sendMessage() {
    const message = {
        "id": messages.value.length,
        "type": "sent",
        "body": newMessage.value,
    }
    messages.value.push(message)
    newMessage.value = ''
}
</script>
<template>
    <v-card height="85vh" class="overflow-auto">
        <v-card-title class="d-flex justify-space-between align-center">
            <span class="text-body-2">
                <v-avatar size="x-small" :image="chatStore.selectedAccount.usernameDpSrc"></v-avatar>
                @{{ chatStore.selectedAccount.username }} 
            </span>
            <span>
                <ChatIconSearch />
                <ChatIconPhone />
                <ChatIconVideo />
            </span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row :class="{'justify-end': message.type === 'sent'}" v-for="message in messages" :key="message.id">
                    <v-col cols="10" lg="6" v-if="message.type === 'sent'">
                        <v-card variant="flat" class="bg-primary card__message-body">
                            <v-card-text>
                                {{ message.body }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="10" lg="6" v-else class="align-center">
                        <v-card variant="flat" class="bg-blue-grey-lighten-5 card__message-body">
                            <v-card-text>
                                {{ message.body }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Message"
                            v-model="newMessage"
                            rows="1"
                            density="compact"
                            variant="outlined"
                            append-icon="mdi-send"
                            auto-grow
                            color="primary"
                            @click:append="sendMessage"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<style scoped>
.card__message-body {
    white-space: pre-wrap;
}
</style>