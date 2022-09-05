<template>
  <div class="logFund">
    <el-dialog :title="dialog_config.title" :visible.sync="dialog_config.show" :close-on-click-modal='false'
      :close-on-press-escape='false' :modal-append-to-body="false">
      <div class="form">
        <el-form ref="form" :model="form" :rules="form_rules" label-width="120px" style="margin:10px;width:auto;">
          <el-form-item prop='item_quantity' label="Quantity">
            <el-input type="item_quantity" v-model="form.item_quantity"></el-input>
          </el-form-item>

          <el-form-item prop='item_name' label="Item">
            <el-input type="item_name" v-model="form.item_name"></el-input>
          </el-form-item>

          <el-form-item class="text_right">
            <el-button @click="dialog_config.show = false">Cancel</el-button>
            <el-button type="primary" @click='onSubmit("form")'>Confirm</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "logfound",
    props: {
      dialog_config: Object,
      form: Object
    },
    data() {
      return {
        form_rules: {
          item_quantity: [
            { required: true, message: "Can't be empty!", trigger: "blur" }
          ],
          item_name: [
            { required: true, message: "Can't be empty!", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate(valid => {
          if (valid) {
            //submit after validation
            const url =
              this.dialog_config.var == "add" ? `add/${this.form.user_email}` : `edit/${this.form.id}`;
            this.$axios.post(`/api/items/${url}`, this.form).then(() => {
              this.$message({
                message: "Change saved!",
                type: "success"
              });
              this.dialog_config.show = false;
              this.$emit("update");
            });
          }
        });
      }
    }
  };
</script>