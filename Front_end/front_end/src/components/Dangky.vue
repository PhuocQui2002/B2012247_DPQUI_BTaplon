<template>
  <div class="main">
    <Form
      @submit="submitContact"
      action=""
      method="POST"
      class="form"
      id="form-1"
    >
      <h3 class="heading">Thành viên đăng ký</h3>
      <!-- <p class="desc">Quản lý đặt hàng</p> -->

      <div class="spacer"></div>

      <div class="form-group">
        <label for="fullname" class="form-label">Tên đầy đủ</label>
        <Field
          id="fullname"
          name="fullname"
          type="text"
          placeholder="VD: Phước Quí"
          class="form-control"
          v-model="name"
        />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="text"
          placeholder="VD: email@domain.com"
          class="form-control"
          v-model="email"
        />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Mật khẩu</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="Nhập mật khẩu"
          class="form-control"
          v-model="passwords"
        />
        <span class="form-message"></span>
      </div>

      <div class="form-group">
        <label for="password_confirmation" class="form-label"
          >Nhập lại mật khẩu</label
        >
        <Field
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Nhập lại mật khẩu"
          type="password"
          class="form-control"
        />
        <span class="form-message"></span>
      </div>

      <button @click="postPost" class="form-submit">Đăng ký</button>
      <p style="margin-top: 3px">
        Ban co tai khoan ? <router-link
          :to="{
            name: 'dangnhap',
          }"
          >Dang nhap</router-link
        >
        <!-- <router-link
          :to="{
            name: 'login',
          }"
          >Dang nhap</router-link
        > -->
      </p>
    </Form>
  </div>
</template>
<script>
import * as yup from "yup";
import axios from "axios";
import { Form, Field } from "vee-validate";
export default {
  components: {
    Form,
    Field,
  },
  emits: ["submit:contact", "delete:contact"],
  props: {
    contact: { type: Object, required: true },
  },
  data() {
    const contactFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup.string().max(20, "Địa chỉ tối đa 20 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các Field trên form
      contactLocal: this.contact,
      contactFormSchema,
      name: "",
      email: "",
      passwords: "",
      isAdmin: "",
      errors: [],
    };
  },
  methods: {
    submitContact() {
      this.$emit("submit:contact", this.contactLocal);
    },
    deleteContact() {
      this.$emit("delete:contact", this.contactLocal.id);
    },
    postPost() {
      axios
        .post(`http://localhost:3000/api/contacts`, {
          name: this.name,
          email: this.email,
          passwords: this.passwords,
          isAdmin: "No",
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


<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#form-1{
  background-color: initial;
}
html {
  color: #333;
  font-size: 62.5%;
  font-family: "Open Sans", sans-serif;
}
body {
  background-color: #fff;
  background-color: #1dbfaf;
}
.main {
  text-align: -webkit-center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 360px;
  min-height: 100px;
  padding: 32px 24px;
  text-align: center;
  background: #fff;
  border-radius: 2px;
  margin: 24px;
  align-self: center;
  box-shadow: 0 2px 5px 0 rgba(51, 62, 73, 0.1);
}
.form .heading {
  font-size: 2rem;
}
.form .desc {
  text-align: center;
  color: #636d77;
  font-size: 1.6rem;
  font-weight: lighter;
  line-height: 2.4rem;
  margin-top: 16px;
  font-weight: 300;
}

.form-group {
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
}

.form-label,
.form-message {
  text-align: left;
}

.form-label {
  font-weight: 700;
  padding-bottom: 6px;
  line-height: 1.8rem;
  font-size: 1.4rem;
}

.form-control {
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #b3b3b3;
  border-radius: 3px;
  outline: none;
  font-size: 1.4rem;
}

.form-control:hover {
  border-color: #1dbfaf;
}

.form-group.invalid .form-control {
  border-color: #f33a58;
}

.form-group.invalid .form-message {
  color: #f33a58;
}

.form-message {
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 4px 0 0;
}

.form-submit {
  outline: none;
  background-color: #1dbfaf;
  margin-top: 12px;
  padding: 12px 16px;
  font-weight: 600;
  color: #fff;
  border: none;
  width: 100%;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
}

.form-submit:hover {
  background-color: #1ac7b6;
}

.spacer {
  margin-top: 36px;
}
</style>
