<template>
  <div>
    <h1>Danh sách sản phẩm</h1>
  </div>
  <div style="display: flex; justify-content: center">
    <div class="card" style="width: 18rem">
      <img src="../assets/img/Aoo.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Áo</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img src="../assets/img/Quần.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Quần</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img src="../assets/img/Giầy.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Giày</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <h2>Sản phẩm hot trend</h2>
  <div
    style="
      display: grid;
      justify-content: center;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
    "
  >
    <div v-for="product of products" class="card" style="width: 18rem">
      <img
        :src="'/src/assets/img/' + product.img_product"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name_product }}</h5>
        <p> Giá: {{ product.price_product }}</p>
        <a href="#" class="btn btn-primary">Buy</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    // Gửi request lên server khi mà postPost() được gọi
    getProducts() {
      axios
        .get(`http://localhost:3000/api/products/`, {})
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
