import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chatStore', () => {
    const selectedAccount = ref({});

    function updateSelectedAccount(account) {
        selectedAccount.value = account
    }

    return {
        selectedAccount,
        updateSelectedAccount,
    }
})