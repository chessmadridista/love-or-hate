<script setup>
import {useRouter} from 'vue-router'
import UserSummaryInterests from '@/components/user/UserSummaryInterests.vue'

const router = useRouter()
const username = router.currentRoute.value.params.username
const bio = 'Looking to make this world a better place when I leave it.'
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-primary font-weight-bold">
                        @{{ username }}
                    </v-card-title>
                    <v-card-text>
                        {{ bio }}
                    </v-card-text>
                    <v-card-text>
                        <UserSummaryInterests />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>