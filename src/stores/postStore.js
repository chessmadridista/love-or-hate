import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', () => {
    const createNewPostDialog = ref(false);

    function showCreateNewPostDialog() {
        createNewPostDialog.value = true
    }

    function hideCreateNewPostDialog() {
        createNewPostDialog.value = false
    }

    return {
        createNewPostDialog,
        showCreateNewPostDialog,
        hideCreateNewPostDialog,
    }
})