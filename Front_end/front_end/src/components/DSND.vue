<template>
  <div style="display: flex">
    <h3 style="display: flex">Danh sach nguoi dung</h3>
    <h3><i class="fa-solid fa-user"></i></h3>
  </div>
  <div>
    <ContactCart :contact="contact" :show="show" @close="closeDialog" />
    <div v-for="contact of contacts" class="mr-auto navbar-nav">
      <ul class="list-group active">
        <li style="width: 40%" class="list-group-item">
          {{ contact.name }}
          <button @click="showDialog(contact)">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </li>
      </ul>
    </div>
    <div id="edit"></div>
  </div>
</template>

<script>
import axios from "axios";
import ContactCart from "./ContactCart.vue";
export default {
  components: {
    ContactCart,
  },
  data() {
    return {
      contacts: [],
      show: false,
      contact: {},
    };
  },
  methods: {
    // Gửi request lên server khi mà postPost() được gọi
    getContacts() {
      axios
        .get(`http://localhost:3000/api/contacts/`, {})
        .then((response) => {
          this.contacts = response.data;
        })
        .catch((e) => {
          alert(e);
        });
    },
    showDialog(contact) {
      this.show = !this.show;
      this.contact = contact;
    },
    closeDialog() {
      this.show = !this.show;
    },
  },
  mounted() {
    this.getContacts();
  },
  putContacts() {
    axios
      .put(`http://localhost:3000/api/contacts/`, {
        name: this.name,
        email: this.email,
        passwords: this.passwords,
      })
      .then((response) => {
        alert("Cap nhat thanh cong");
      })
      .catch((e) => {
        alert(e);
      });
  },
};
// function editUse(users) {
//   var listCoursesBlock = document.querySelector('#edit');
//   var htmls = users.map(function(user) {
//         return `
//         <div class="mb-3">
//     <label
//       style="display: block"
//       for="exampleFormControlInput1"
//       class="form-label"
//       >Name_product</label
//     >
//     <input
//       v-model="name_product"
//       type="text"
//       class="form-control"
//       id="exampleFormControlInput1"
//       placeholder="VD: Áo sơ mi trắng, quần tây đen"
//     />
//   </div>
//   <div class="mb-3">
//     <label
//       style="display: block"
//       for="exampleFormControlInput1"
//       class="form-label"
//       >Color_product</label
//     >
//     <input
//       v-model="color_product"
//       type="text"
//       class="form-control"
//       id="exampleFormControlInput1"
//       placeholder="VD: Red, Black"
//     />
//   </div>
//   <div class="mb-3">
//     <label
//       style="display: block"
//       for="exampleFormControlInput1"
//       class="form-label"
//       >Price_product</label
//     >
//     <div style="display: flex">
//       <input
//         v-model="price_product"
//         type="text"
//         class="form-control"
//         id="exampleFormControlInput1"
//         placeholder="VD: Red, Black"
//       />

//       <select
//         class="form-select form-select-lg mb-3"
//         aria-label=".form-select-lg example"
//       >
//         <option selected>Size</option>
//         <option value="1">31</option>
//         <option value="2">32</option>
//         <option value="3">33</option>
//       </select>
//     </div>
//   </div>

//   <div class="mb-3">
//     <label style="display: block" for="formFile" class="form-label">IMG</label>
//     <input class="form-control" type="file" id="formFile" />
//   </div>
//   <div class="mb-3">
//     <label
//       style="display: block"
//       for="exampleFormControlInput1"
//       class="form-label"
//       >Classly_product</label
//     >
//     <input
//       v-model="classify_product"
//       type="text"
//       class="form-control"
//       id="exampleFormControlInput1"
//       placeholder="VD: Quần dài , áo sơ mi"
//     />
//   </div>
//   <button
//     @click="postPost"
//     type="button"
//     style="display: block"
//     class="btn btn-primary"
//   >
//     Submit
//   </button>
//         `
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }
</script>
