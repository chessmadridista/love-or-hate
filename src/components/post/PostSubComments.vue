<script setup>
import { ref } from 'vue'

const subComments = ref([
    {
        id: 0,
        body: 'This is a new one.',
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        noOfLikes: 4,
    },
    {
        id: 1,
        body: 'This is a still a new comment but slightly better than the old one.',
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        noOfLikes: 4,
    },
    {
        id: 2,
        body: 'I do not understand why people believe Barcelona is the biggest club of all time. Why should it be the biggest club?.',
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        noOfLikes: 4,
    },
])
const newSubComment = ref('')

function addNewSubComment() {
    const subComment = {
        id: subComments.value.length,
        body: newSubComment.value,
        username: 'admin',
        usernameDpSrc: 'https://i.ytimg.com/vi/Ttcwhk5E5B0/sddefault.jpg',
        noOfLikes: 1,
    }
    subComments.value.push(subComment)
    newSubComment.value = ''
}
</script>
<template>
    <v-card>
        <v-card-text>
            <v-textarea 
                v-model="newSubComment"
                density="compact"
                variant="outlined"
                color="primary"
                label="Add a comment"
                rows="1"
                auto-grow
                @keyup.enter="addNewSubComment"
            />
            <v-btn @click="addNewSubComment" block color="primary">Comment</v-btn>
        </v-card-text>
    </v-card>
    <v-card variant="flat" class="mt-2 pt-2" v-for="comment in subComments" :key="comment.id">
        <v-avatar size="x-small" start end :image="comment.usernameDpSrc"></v-avatar><router-link :to="'/user/'+comment.username"><span>@{{ comment.username }}</span></router-link>
        <v-card-text>{{ comment.body }}</v-card-text>
        <v-card-actions>
            <v-icon end size="small" color="primary">mdi-thumb-up</v-icon>{{ comment.noOfLikes }}
        </v-card-actions>
    </v-card>
</template>
<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
a:hover {
    text-decoration: underline;
}
</style>