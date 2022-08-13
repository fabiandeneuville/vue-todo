<template>
    
    <div class="completedItem">
        <p class="completedItem__content">{{ task }}</p>
    </div>

</template>

<script>

export default {
    name: 'completedItem',
    props: ['task']
}

</script>