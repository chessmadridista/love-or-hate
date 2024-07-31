<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const communityName = router.currentRoute.value.params.communityName
const doesSignedInUserFollowThisCommunity = ref(false)

function changeFollowStatus() {
    doesSignedInUserFollowThisCommunity.value = !doesSignedInUserFollowThisCommunity.value
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-primary d-flex justify-space-between">
                        !{{ communityName }}
                        <v-btn
                        v-if="doesSignedInUserFollowThisCommunity"
                        @click="changeFollowStatus"
                        size="small"
                        variant="tonal"
                        prepend-icon="mdi-check"
                        >
                        Following
                    </v-btn>
                    <v-btn
                        v-else
                        @click="changeFollowStatus"
                        size="small"
                        variant="text"
                        prepend-icon="mdi-plus"
                    >
                        Follow
                    </v-btn>
                    </v-card-title>
                    <v-card-text>
                        This is a sample community page description.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>