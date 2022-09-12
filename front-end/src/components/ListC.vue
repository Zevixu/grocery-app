<template>
  <div class="listC">
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
</template>

<script>
  import { onEditItem, onDeleteItem, onClickItem } from "../crud_functions.js"

  export default {
    name: "listC",
    props: {
      dialog_config: Object,
      form: Object,
      tableData: Array,
      type: String
    },
    data() {
      return {
      }
    },
    methods: {
      onEditItem,
      onDeleteItem,
      onClickItem
    }
  };
</script>