<script setup>
import { ref } from 'vue'

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