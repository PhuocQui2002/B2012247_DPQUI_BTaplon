<template id="productForm">
  <div class="mb-3">
    <label
      style="display: block"
      for="exampleFormControlInput1"
      class="form-label"
      >Name_product</label
    >
    <input
      v-model="name_product"
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="VD: Áo sơ mi trắng, quần tây đen"
    />
  </div>
  <div class="mb-3">
    <label
      style="display: block"
      for="exampleFormControlInput1"
      class="form-label"
      >Color_product</label
    >
    <input
      v-model="color_product"
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="VD: Red, Black"
    />
  </div>
  <div class="mb-3">
    <label
      style="display: block"
      for="exampleFormControlInput1"
      class="form-label"
      >Price_product</label
    >
    <div style="display: flex">
      <input
        v-model="price_product"
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="VD: Red, Black"
      />

      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Size</option>
        <option value="1">31</option>
        <option value="2">32</option>
        <option value="3">33</option>
      </select>
    </div>
  </div>

  <div class="mb-3">
    <label style="display: block" for="formFile" class="form-label">IMG</label>
    <input class="form-control" type="file" id="formFile" />
  </div>
  <div class="mb-3">
    <label
      style="display: block"
      for="exampleFormControlInput1"
      class="form-label"
      >Classly_product</label
    >
    <input
      v-model="classify_product"
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="VD: Quần dài , áo sơ mi"
    />
  </div>
  <button
    @click="postPost"
    type="button"
    style="display: block"
    class="btn btn-primary"
  >
    Submit
  </button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name_product: "",
      color_product: "",
      price_product: "",
      img_product: "",
      classify_product: "",
      errors: [],
    };
  },
  methods: {
    // Gửi request lên server khi mà postPost() được gọi
    postPost() {
      axios
        .post(`http://localhost:3000/api/products/`, {
          name_product: this.name_product,
          color_product: this.color_product,
          price_product: this.price_product,
          img_product: "img.png",
          classify_product: this.classify_product,
        })
        .then((response) => {
          alert("Tao moi thanh cong");
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>
