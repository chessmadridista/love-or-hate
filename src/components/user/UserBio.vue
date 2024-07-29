<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const username = router.currentRoute.value.params.username
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-primary font-weight-bold">
                        @{{ username }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>