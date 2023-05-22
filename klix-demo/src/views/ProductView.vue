<script setup>
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router'
    import { ref, computed } from 'vue';

    const route = useRoute();
    const title = route.query.title;
    const price = ref(route.query.price);
    const image = route.query.image;

    const priceInCents = computed(() => price.value * 100);
</script>

<template>
    <nav>
        <RouterLink to="/">Back to products</RouterLink>
    </nav>
    <div class="container">
        <div class="product-image">
            <img :src="image" alt="">
        </div>
        <div class="product-info">
            <h2>{{ title }}</h2>
            <div class="price">{{ price }} EUR</div>
            <klix-pay-later :amount="priceInCents" language="en" brand-id="55b7d52b-020e-4143-bc69-3292b5002cf2"></klix-pay-later>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid minima omnis delectus incidunt recusandae distinctio, eos tenetur est exercitationem veritatis, cum excepturi! Dolore, ratione perspiciatis! Rem facilis praesentium, enim aspernatur velit facere tempora placeat et molestias explicabo corporis iste, quibusdam, quos ipsa. Illo, consectetur iste quibusdam, optio obcaecati excepturi, facilis cupiditate veniam aliquid quia minus est necessitatibus deserunt cumque sapiente? Minus assumenda dolore alias nulla at, aspernatur iste tempora dolorem libero quam? Dicta ea itaque minima voluptas vel veniam incidunt provident dolorum doloremque reiciendis illo qui repellendus ex autem veritatis a quia repellat deserunt, tenetur distinctio culpa. Quae corrupti minima consequuntur vitae porro temporibus sed, iusto inventore impedit amet fugit in ullam, dolore aut natus ab eligendi laudantium incidunt quis sapiente est at repellat! Pariatur dicta beatae veniam architecto libero unde eum nostrum dolorum dignissimos? Eum nostrum quidem tempora nemo qui aspernatur ipsa autem quos saepe deleniti eaque pariatur quam numquam cumque illo reiciendis, dolor fugit voluptatum voluptatibus excepturi eveniet magnam velit? Accusantium vero, neque minus laudantium repellendus sapiente exercitationem qui ipsum in nemo consequuntur minima nulla esse culpa? Iure est doloremque labore placeat aperiam libero molestias tempora similique aliquam assumenda, sunt incidunt accusantium earum eligendi fugiat, facere perferendis!</p>
        </div>
    </div>
</template>

<style scoped>
nav {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
}
.container {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    gap: 20px;
}
.product-image img {
    max-width: 100%;
}
.product-image {
    text-align: center;
}
.price {
    font-size: 30px;
    margin-bottom: 10px;
}
h2 {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 10px;
}
p {
    font-size: 18px;
    line-height: 1.5;
}
@media screen and (max-width: 600px) {
    .container {
        grid-auto-flow: row;
    }
}
</style>