<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
};
</script>

<template>
  <div class="card" style="width: 13rem; height: 13rem">
    <trong>Tên SP:</trong>
    <!-- <img src="../assets/img/Giầy.jpg" class="card-img-top" alt="..." /> -->
    {{ product.img_product }}
    <div class="card-body">
      <strong>Giá:</strong>
      {{ product.price_product }}
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
</template>
