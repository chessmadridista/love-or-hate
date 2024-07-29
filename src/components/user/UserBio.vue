<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const username = router.currentRoute.value.params.username
const bio = 'Looking to make this world a better place when I leave this world.'
const tab = ref('posts')
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
        <v-row>
            <v-col>
                <v-card>
                    <v-tabs color="primary" v-model="tab" fixed-tabs>
                        <v-tab>Posts</v-tab>
                        <v-tab>Comments</v-tab>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-tabs-window v-model="tab" fixed-tabs>
                    <v-tabs-window-item value="posts">
                        <v-card>
                            <v-card-text>
                                This is a post.
                            </v-card-text>
                        </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="comments">
                        <v-card>
                            <v-card-text>
                                This is a comment.
                            </v-card-text>
                        </v-card>                        
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-col>
        </v-row>
    </v-container>
</template>