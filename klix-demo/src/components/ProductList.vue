<script setup>
    import { RouterLink } from 'vue-router'
    import Product from './Product.vue';

    const products = [
        { id: 1, title: 'Peace Lily Domino', price: 250.59, image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Peace-Lily-Domino_MediumHyde_Cream.jpg?v=1678826402&width=400' },
        { id: 2, title: 'Stromanthe Triostar', price: 177.99, image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-calathea_triostar.jpg?v=1680549520&width=400' },
        { id: 3, title: 'Large Dracaena Lemon Lime', price: 2314.29, image: 'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_LargeDracaenaLemonLime_Large_Helenaplanter-Cream_variant.jpg?v=1682603494&width=400' },
        { id: 4, title: 'Corkscrew Rush', price: 39.99, image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Corkscrew-Rush_Small_Hyde_Black.jpg?v=1684435167&width=400' },
    ];
</script>

<template>
    <div class="product-list-container">
        <div v-for="product in products" :key="product.title">
            <RouterLink :to="{
                path: `/product/${product.id}`,
                query: { title: product.title, price: product.price, image: product.image }
            }">
                <Product 
                    :title="product.title"
                    :price="product.price"
                    :image="product.image"
                />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.product-list-container {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 15px;
}
</style>