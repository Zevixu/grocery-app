//define functions for edit/delete/click items
function onEditItem(row) {
    const dialog_config = { show: true, title: "Edit an item", var: "edit" };
    this.$emit('update_dialog_config', dialog_config);
    const form = { item_name: row.item_name, item_quantity: row.item_quantity, category: this.type, id: row._id, user_email: "" };
    this.$emit('update_form', form);
}

function onDeleteItem(row) {
    this.$axios.delete(`/api/items/delete/${row._id}`)
        .then(() => {
            this.$message("delete success!");
            this.$emit("update1");
        });
}

function onClickItem(row) {
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
}

export { onEditItem, onDeleteItem, onClickItem }