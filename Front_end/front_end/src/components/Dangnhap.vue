<template>
  <div id="main">
    <form
      action=""
      style="display: inline-block"
      method="POST"
      class="form"
      id="form-2"
    >
      <h3 class="heading">Đăng nhập</h3>
      <p class="desc">Quản lý khách đặt hàng ❤️❤️❤️</p>

      <div class="spacer"></div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
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
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Nhập mật khẩu"
          class="form-control"
          v-model="password"
        />
        <span class="form-message">{{ password }}</span>
      </div>

      <button class="form-submit" ><router-link
          :to="{
            name: 'home',
          }"
          >Dang Nhap</router-link
        ></button>


      <p style="margin-top: 3px">
        Ban khong co tai khoang ?
        <router-link
          :to="{
            name: 'register',
          }"
          >Dang ky</router-link
        >
      </p>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // Gửi request lên server khi mà postPost() được gọi
    getGet() {
      axios
        .get(`http://localhost:3000/api/products/`, {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          alert("Lấy");
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
