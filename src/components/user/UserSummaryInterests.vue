<script setup>
const interests = [
    {
        id: 0,
        description: 'football',
    },
    {
        id: 1,
        description: 'chess',
    },
    {
        id: 2,
        description: 'software development',
    },
    {
        id: 3,
        description: 'piano',
    },
]
</script>
<template>
    <v-chips>
        <v-chip class="mr-1" v-for="interest in interests" :key="interest.id" color="primary">
            {{ interest.description }}
        </v-chip>
    </v-chips>
</template>