<script setup>
defineProps({
    title: 'Product',
    price: 0,
    image: '',
});
</script>

<template>
    <div class="product">
        <img class="image" :src="image" alt="">   
        <div class="title">{{ title }}</div>
        <div class="price">{{ price }}</div>  
    </div>
</template>

<style scoped>
.image {
    max-width: 100%;
}
</style>