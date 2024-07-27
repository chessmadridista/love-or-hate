import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', () => {
    const createNewPostDialog = ref(false);
    const postShareDialog = ref(false);
    const postLinkToShare = ref('');
    const posts = ref([
        {
            id: 0,
            username: 'admin',
            usernameDpSrc: 'https://images2.alphacoders.com/649/649995.jpg',
            dateCreated: 'Today',
            title: 'Real Madrid is the greatest club in the world.',
            description: 'I think they are by far the greatest club in the world. No doubt.',
            noOfLoves: 10,
            noOfHates: 8,
            loveToHateRatio: 1.25,
            noOfComments: 25,
            noOfShares: 5,
            loggedInUserLovesPost: false,
            loggedInUserHatesPost: false,
        },
        {
            id: 1,
            username: 'admin',
            usernameDpSrc: 'https://images2.alphacoders.com/649/649995.jpg',
            dateCreated: 'Today',
            title: 'UEFA Champions League should be revamped.',
            description: 'There! I said it. It has become a money hungry competition in recent years. And more so with the advent of the new format from 2024-25 season.',
            noOfLoves: 10,
            noOfHates: 8,
            loveToHateRatio: 1.25,
            noOfComments: 25,
            noOfShares: 5,
            loggedInUserLovesPost: false,
            loggedInUserHatesPost: false,
        },
    ])

    function createNewPost(post) {
        posts.value.push(post)
    }

    function showCreateNewPostDialog() {
        createNewPostDialog.value = true
    }

    function hideCreateNewPostDialog() {
        createNewPostDialog.value = false
    }

    function showPostShareDialog() {
        postShareDialog.value = true
    }

    function setPostLinkToShare(link) {
        postLinkToShare.value = link
    }

    return {
        createNewPostDialog,
        postShareDialog,
        posts,
        postLinkToShare,
        showPostShareDialog,
        showCreateNewPostDialog,
        hideCreateNewPostDialog,
        createNewPost,
        setPostLinkToShare,
    }
})