<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const username = router.currentRoute.value.params.username
const bio = 'Looking to make this world a better place when I leave this world.'
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
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>