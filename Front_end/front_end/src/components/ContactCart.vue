<template>
  <div v-if="show" class="modal" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thong tin nguoi dung</h5>
          <button @click="closeDialog" type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <div>
            <div class="p-1">
              <label for="fname">Đổi tên:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder=""
                v-model="changName"
              /><br /><br />
            </div>
            <div class="p-1">
              <br />
              <label for="fname">Đổi email:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder=""
                v-model="changEmail"
              /><br /><br />
            </div>
            <div class="p-1">
              <label for="fname">Đổi password:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder=""
                v-model="changPass"
              /><br /><br />
            </div>
            <div class="p-1">
              <strong>Admin&nbsp;</strong>
              <i v-if="contact?.isAdmin" class="fas fa-check"></i>
              <i v-else class="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="closeDialog"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="putContacts(contact?._id)"
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DSND from "./DSND.vue";
import axios from "axios";
export default {
  props: {
    contact: { type: Object, required: false },
    show: false,
  },
  data: () => {
    return {
      changName: "",
      changEmail: "",
      changPass: "",
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    putContacts(id) {
      if (
        this.changName == null ||
        this.changEmail == null ||
        this.changPass == null
      ) {
        alert("Vui long nhap day du thong tin");
      } else {
        axios
          .put(`http://localhost:3000/api/contacts/` + id, {
            name: this.changName,
            email: this.changEmail,
            passwords: this.changPass,
          })
          .then((response) => {
            this.$emit("updateContacts");
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
  },
  watch: {
    contact() {
      this.changName = this.contact?.name;
      this.changEmail = this.contact?.email;
      this.changPass = this.contact?.passwords;
    },
  },
};
</script>
