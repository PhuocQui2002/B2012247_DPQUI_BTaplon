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
              <strong>Tên:</strong>
              {{ contact?.name }}<br>
              <label for="fname">Đổi tên:</label>
              <input type="text" id="fname" name="fname" placeholder="" /><br /><br />
            </div>
            <div class="p-1">
              <strong>E-mail:</strong>
              {{ contact?.email }}
              <br>
              <label for="fname">Đổi email:</label>
              <input type="text" id="fname" name="fname" placeholder="" /><br /><br />
            </div>
            <div class="p-1">
              <strong>Password:</strong>
              {{ contact?.passwords }}<br>
              <label for="fname">Đổi password:</label>
              <input type="text" id="fname" name="fname" placeholder="" /><br /><br />
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: { type: Object, required: false },
    show: false,
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
