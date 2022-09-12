<template>
  <div class="grocery_list">
    <div class="header">
      <h1>Grocery List</h1>
    </div>

    <div class="selection">
      <span>Current List: </span>
      <el-select v-model="type" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>

    <div class="table">
      <div v-if="type === 'Meat'">
        <listA :tableData='tableDataforMeat' :type='type' @update_dialog_config="update_dialog_config"
          @update_form="update_form" @update1="getData"></listA>
      </div>
      <div v-else-if="type === 'Vegetable&Fruit'">
        <listB :tableData='tableDataforVF' :type='type' @update_dialog_config="update_dialog_config"
          @update_form="update_form" @update1="getData"></listB>
      </div>
      <div v-else-if="type === 'Dairy'">
        <listC :tableData='tableDataforDairy' :type='type' @update_dialog_config="update_dialog_config"
          @update_form="update_form" @update1="getData"></listC>
      </div>
      <div v-else-if="type === 'Other'">
        <listD :tableData='tableDataforOther' :type='type' @update_dialog_config="update_dialog_config"
          @update_form="update_form" @update1="getData"></listD>
      </div>
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
    <DialogFound :dialog_config='dialog_config' :form='form' @update2="getData"></DialogFound>
  </div>
</template>

<script>
  import DialogFound from "../components/DialogFound";
  import listA from "../components/ListA";
  import listB from "../components/ListB";
  import listC from "../components/ListC";
  import listD from "../components/ListD";

  export default {
    name: 'index',
    data() {
      return {
        tableDataforMeat: [],  //data for list of meat
        tableDataforVF: [],    //data for list of vegetables and fruits
        tableDataforDairy: [], //data for dairy
        tableDataforOther: [], //data for all other items
        dialog_config: {
          show: false, //indicating whether show dialog page or not
          title: "",
          var: "" //"add" or "edit" indicating the type of operation
        },
        form: {
          item_name: "",
          item_quantity: "",
          category: "",
          id: "",
          user_email: ""
        },
        options: [{
          value: 'Meat',
          label: 'Meat'
        }, {
          value: 'Vegetable&Fruit',
          label: 'Vegetable&Fruit'
        }, {
          value: 'Dairy',
          label: 'Dairy'
        }, {
          value: 'Other',
          label: 'Other'
        }],
        type: 'Meat'
      }
    },
    created() {
      this.getData();
    },
    components: {
      DialogFound,
      listA,
      listB,
      listC,
      listD
    },
    methods: {
      //retrieve data when loading the page
      getData() {
        this.$axios.get(`/api/items/${localStorage.user_email}`)
          .then(res => {
            const tmp = res.data;
            this.tableDataforMeat = tmp.filter(item => item.category === 'Meat');
            this.tableDataforVF = tmp.filter(item => item.category === 'Vegetable&Fruit');
            this.tableDataforDairy = tmp.filter(item => item.category === 'Dairy');
            this.tableDataforOther = tmp.filter(item => item.category === 'Other');
          })
      },
      onAddItem() {
        this.dialog_config = { show: true, title: "Add an item", var: "add" };
        this.form = { item_name: "", item_quantity: "", category: this.type, id: "", user_email: localStorage.user_email };
      },
      //delete localstorage var when logging out
      exit() {
        localStorage.removeItem("eleToken");
        localStorage.removeItem("user_email");
        this.$router.push("/login");
      },
      update_dialog_config(newVal) {
        this.dialog_config = newVal
      },
      update_form(newVal) {
        this.form = newVal
      }
    }
  }
</script>


<style scoped>
  h1 {
    font-size: xx-large;
  }

  .selection {
    margin-top: 20px;
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