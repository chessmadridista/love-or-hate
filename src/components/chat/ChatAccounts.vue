<script setup>
import { useChatStore } from '@/stores'
import { ref } from 'vue'

const chatStore = useChatStore()
const selectedAccountId = ref()
const accounts = [
    {
        id: 0,
        username: 'bombino',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29gWEpXDrK8s-c-ng2kiTndHCVudOZqTG7Q&s'
    },
    {
        id: 1,
        username: 'skywalker',
        usernameDpSrc: 'https://wallpapers.com/images/featured/ace-7hd427if717flsty.jpg'
    },
    {
        id: 2,
        username: 'sunshine',
        usernameDpSrc: 'https://i.pinimg.com/736x/78/2f/03/782f032235bd4b00c80de140b8e70538.jpg'
    },
    {
        id: 3,
        username: 'darkknight',
        usernameDpSrc: 'https://wallpapers.com/images/hd/the-boys-homelander-cool-art-qf6tvl6ir2kjatvy.jpg'
    },
    {
        id: 4,
        username: 'rainbow',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjXIY_e_-4qaHXw1Bsth3gSBlOlivmpjgRA&s'
    },
    {
        id: 5,
        username: 'starlord',
        usernameDpSrc: 'https://backiee.com/static/wallpapers/560x315/214184.jpg'
    },
    {
        id: 6,
        username: 'galaxy',
        usernameDpSrc: 'https://w0.peakpx.com/wallpaper/233/741/HD-wallpaper-earth-starlight-forest-night-sky-stars-tree-thumbnail.jpg'
    },
    {
        id: 7,
        username: 'venom',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleeNt5rxp6uL2ZuayqEm1N8-QF0H5Ib8quhmD0qBsa1VT7k0AEt0bjyfvJHdB7N985rU&usqp=CAU'
    },
    {
        id: 8,
        username: 'whisper',
        usernameDpSrc: 'https://i.pinimg.com/474x/b2/07/ce/b207ce6e1ae4701db6632f50820e4ba9.jpg'
    },
    {
        id: 9,
        username: 'phoenix',
        usernameDpSrc: 'https://images5.alphacoders.com/793/thumb-1920-793016.jpg'
    },
    {
        id: 10,
        username: 'shadow',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEXY_CE8V2forwff8MxlOHtjiWnRSGlgyqgPkSXmbmYDsLACqq77KQxtsx56Wb8YEY7o&usqp=CAU'
    },
    {
        id: 11,
        username: 'inferno',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7e2ZeyE59e-Klr00tBkfbvwyjydvWf7KvglStc-YVQyMKlTFu2ZsKPzYOGbLO5XykaQI&usqp=CAU'
    },
    {
        id: 12,
        username: 'luminous',
        usernameDpSrc: 'https://c4.wallpaperflare.com/wallpaper/342/308/46/stars-starlight-hd-wallpaper-preview.jpg'
    },
    {
        id: 13,
        username: 'thunder',
        usernameDpSrc: 'https://archzine.com/wp-content/uploads/2020/02/planet-in-the-sky-surrounded-by-shining-stars-space-wallpaper-4k-black-blue-orange-colors.jpg'
    },
    {
        id: 14,
        username: 'eclipse',
        usernameDpSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzKRhTVJ5BZR-n_7Nd4Pb5JIA_73X4hbBCJuDhUkLZ7YxBxxhfo0iqLmE66M-NJe1qSI&usqp=CAU'
    },
]

function openChat(account) {
    chatStore.updateSelectedAccount(account)
    selectedAccountId.value = account.id
}
</script>
<template>
    <v-card height="85vh" class="bg-cyan-lighten-5">
        <v-card-text>
            <v-virtual-scroll class="pb-2" :items="accounts" height="78vh">
                <template v-slot:default="{ item: account }">
                    <v-card class="py-2 mt-2" :class="{ 'bg-cyan-lighten-4': (selectedAccountId === account.id)}" @click="openChat(account)">
                        <v-card-subtitle>
                            <v-avatar start :image="account.usernameDpSrc"></v-avatar>{{ account.username }}
                        </v-card-subtitle>
                    </v-card>
                </template>
            </v-virtual-scroll>
        </v-card-text>
    </v-card>
</template>