<script setup>
import { ref } from 'vue'

const communities = ref([
    {
        id: 0,
        name: 'football',
        description: 'A community for football lovers.',
        doesSignedInUserFollowThisCommunity: false,
    },
    {
        id: 1,
        name: 'chess',
        description: 'A community for chess lovers.',
        doesSignedInUserFollowThisCommunity: true,
    },
    {
        id: 2,
        name: 'art',
        description: 'A community for art lovers.',
        doesSignedInUserFollowThisCommunity: false,
    },
    {
        id: 3,
        name: 'writing',
        description: 'A community for writers.',
        doesSignedInUserFollowThisCommunity: false,
    },
    {
        id: 4,
        name: 'sci-fi',
        description: 'A community for sci-fi lovers.',
        doesSignedInUserFollowThisCommunity: true,
    },
])

function changeFollowStatus(community) {
    community.doesSignedInUserFollowThisCommunity = !community.doesSignedInUserFollowThisCommunity
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="6" v-for="community in communities" :key="community.id">
                <v-card>
                    <v-card-title class="text-primary d-flex align-center justify-space-between">
                        <router-link :to="'/community/'+community.name">
                            !{{ community.name }}
                        </router-link>
                        <v-btn
                            v-if="community.doesSignedInUserFollowThisCommunity"
                            @click="changeFollowStatus(community)"
                            size="small"
                            variant="text"
                            prepend-icon="mdi-plus"
                        >
                            Follow
                        </v-btn>
                        <v-btn
                            v-else
                            @click="changeFollowStatus(community)"
                            size="small"
                            variant="tonal"
                            prepend-icon="mdi-check"
                        >
                            Following
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        {{ community.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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