<script setup>
import { ref } from 'vue'

const commentsOfLove = ref([
    {
        id: 0,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'I think Madrid is by far the best team in history mainly because of players like Valverde and Vini.',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 1,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'I think Madrid is by far the best team in history mainly because of players like Valverde and Vini.',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 2,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'I think Madrid is by far the best team in history mainly because of players like Valverde and Vini.',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 3,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'I think Madrid is by far the best team in history mainly because of players like Valverde and Vini.',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 4,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'I think Madrid is by far the best team in history mainly because of players like Valverde and Vini.',
        noOfLikes: 4,
        noOfComments: 7,
    },
])
const commentsOfHate = ref([
    {
        id: 0,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'Nah, I think Barcelona is by far the best team in history mainly because of players like Lamine Yamal and Pedri.',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 1,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'United the best!',
        noOfLikes: 4,
        noOfComments: 7,
    },
    {
        id: 2,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        body: 'Lord Bendtner is the best!',
        noOfLikes: 4,
        noOfComments: 7,
    },
])
const newCommentOfLove = ref('')
const newCommentOfHate = ref('')

function addNewCommentOfLove(event) {
    if (!event.shiftKey) {
        const commentOfLove = {
            id: commentsOfLove.length,
            username: 'admin',
            usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
            body: newCommentOfLove.value,
            noOfLikes: 4,
            noOfComments: 7,
        }
        commentsOfLove.value.push(commentOfLove)
        newCommentOfLove.value = ''
    }
}

function addNewCommentOfHate(event) {
    if (!event.shiftKey) {
        const commentOfHate = {
            id: commentsOfLove.length,
            username: 'admin',
            usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
            body: newCommentOfHate.value,
            noOfLikes: 4,
            noOfComments: 7,
        }
        commentsOfHate.value.push(commentOfHate)
        newCommentOfHate.value = ''
    }
}
</script>
<template>
    <v-container>
        <v-row dense>
            <v-col cols="6">
                <v-card>
                    <v-card-title class="bg-red text-center">
                        😒 Hate
                    </v-card-title>
                    <v-card-text>
                        <v-textarea 
                        v-model="newCommentOfHate"
                            class="mt-6"
                            density="compact"
                            variant="outlined"
                            color="red"
                            label="Add a comment"
                            rows="1"
                            auto-grow
                            @keyup.enter="addNewCommentOfHate"
                        />
                            <v-btn @click="addNewCommentOfHate" block color="red">Comment</v-btn>
                        <v-card class="mt-2 pt-2 bg-red-lighten-4" v-for="comment in commentsOfHate" :key="comment.id">
                            <v-avatar size="x-small" start end :image="comment.usernameDpSrc"></v-avatar><router-link :to="'/username/'+comment.username"><span class="text-red-darken-4">@{{ comment.username }}</span></router-link>
                            <v-card-text>{{ comment.body }}</v-card-text>
                            <v-card-actions>
                                <v-icon end size="small" color="red">mdi-thumb-up</v-icon>{{ comment.noOfLikes }}
                                <v-icon end size="small" color="red">mdi-comment-outline</v-icon>{{ comment.noOfComments }}
                            </v-card-actions>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title class="bg-green text-center">
                        😍 Love
                    </v-card-title>
                    <v-card-text>
                        <v-textarea 
                        v-model="newCommentOfLove"
                        class="mt-6"
                        density="compact"
                        variant="outlined"
                        color="green"
                            label="Add a comment"
                            rows="1"
                            auto-grow
                            @keyup.enter="addNewCommentOfLove"
                        />
                        <v-btn @click="addNewCommentOfLove" block color="green">Comment</v-btn>
                        <v-card class="mt-2 pt-2 bg-green-lighten-4" v-for="comment in commentsOfLove" :key="comment.id">
                            <v-avatar size="x-small" start end :image="comment.usernameDpSrc"></v-avatar><router-link :to="'/username/'+comment.username"><span class="text-green-darken-4">@{{ comment.username }}</span></router-link>
                            <v-card-text>{{ comment.body }}</v-card-text>
                            <v-card-actions>
                                <v-icon end size="small" color="green">mdi-thumb-up</v-icon>{{ comment.noOfLikes }}
                                <v-icon end size="small" color="green">mdi-comment-outline</v-icon>{{ comment.noOfComments }}
                            </v-card-actions>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
a {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>