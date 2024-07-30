<script setup>
import { ref } from 'vue'
import UserPosts from '@/components/user/UserPosts.vue'
import UserComments from '@/components/user/UserComments.vue'

const tab = ref('posts')
</script>
<template>
    <v-container>
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
                        <UserPosts />
                    </v-tabs-window-item>
                    <v-tabs-window-item value="comments">
                        <UserComments />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-col>
        </v-row>
    </v-container>
</template>