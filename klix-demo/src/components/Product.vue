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
        <div class="price">{{ price }} EUR</div>  
    </div>
</template>

<style scoped>
.image {
    max-width: 100%;
}
.title,
.price {
    font-size: 20px;
    color: #000;
}
.price {
    font-weight: 700;
}
</style>