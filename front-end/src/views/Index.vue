<template>
  <div class="grocery_list">
    <div class="header">
      <h1>Grocery List</h1>
    </div>

    <div class="table">
      <el-table :data="tableData" style="width: 100%" empty-text='click button below to add your first item!'
        :header-cell-style="{ background: '#AACCC6' }">
        <el-table-column label="Completed" style="width: 20%" prop="Completed">
          <template slot-scope='scope'>
            <el-checkbox v-model="scope.row.Completed" @change="onClickItem(scope.row)"></el-checkbox>
          </template>
        </el-table-column>

        <el-table-column label="Quantity" style="width: 20%" prop="item_quantity">
        </el-table-column>

        <el-table-column label="Item" style="width: 20%" prop="item_name">
        </el-table-column>

        <el-table-column label="Operation" style="width: 20%" prop="operation">
          <template slot-scope='scope'>
            <el-button type="warning" icon='edit' size="small" @click='onEditItem(scope.row)'>Edit</el-button>
            <el-button type="danger" icon='delete' size="small" @click='onDeleteItem(scope.row)'>Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="bottom">
      <el-form :inline="true" ref="add_data">
        <el-form-item class="add_button">
          <el-button type="primary" size="large" icon="view" @click='onAddItem()'>+add</el-button>
        </el-form-item>
        <el-form-item class="exit_button">
          <el-button type="primary" size="large" icon="view" @click='exit()'>log out</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- Dialog page -->
    <DialogFound :dialog_config='dialog_config' :form='form' @update="getData"></DialogFound>
  </div>
</template>

<script>
  import DialogFound from "../components/DialogFound";

  export default {
    name: 'index',
    data() {
      return {
        tableData: [],
        dialog_config: {
          show: false, //indicating whether show dialog page or not
          title: "",
          var: "" //"add" or "edit" indicating the type of operation
        },
        form: {
          item_name: "",
          item_quantity: "",
          id: "",
          user_email: ""
        }
      }
    },
    created() {
      this.getData();
    },
    components: {
      DialogFound
    },
    methods: {
      //retrieve data when loading the page
      getData() {
        this.$axios.get(`/api/items/${localStorage.user_email}`)
          .then(res => { this.tableData = res.data })
      },
      onEditItem(row) {
        this.dialog_config = { show: true, title: "Edit an item", var: "edit" };
        this.form = { item_name: row.item_name, item_quantity: row.item_quantity, id: row._id, user_email: "" };
      },
      onDeleteItem(row) {
        this.$axios.delete(`/api/items/delete/${row._id}`)
          .then(() => {
            this.$message("delete success!");
            this.getData();
          });
      },
      onAddItem() {
        this.dialog_config = { show: true, title: "Add an item", var: "add" };
        this.form = { item_name: "", item_quantity: "", id: "", user_email: localStorage.user_email };
      },
      onClickItem(row) {
        const tmp_form = { Completed: false };
        tmp_form.Completed = row.Completed;
        this.$axios.post(`/api/items/edit/${row._id}`, tmp_form)
          .then(() => {
            if (tmp_form.Completed == true) {
              this.$message("mark as purchased!");
            }
            else {
              this.$message("mark as unpurchased!");
            }
          });
      },
      //delete localstorage var when logging out
      exit() {
        localStorage.removeItem("eleToken");
        localStorage.removeItem("user_email");
        this.$router.push("/login");
      }
    }
  }
</script>


<style scoped>
  h1 {
    font-size: xx-large;
  }

  .grocery_list {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(170, 204, 198, 0.667);
    background-size: 100% 100%;
  }

  .table {
    margin-top: 20px;
    margin-right: 56%;
  }

  .bottom {
    margin-left: 0.7%;
    margin-top: 15px;
  }

  .add_button {
    margin-left: 50pm;
  }
</style>