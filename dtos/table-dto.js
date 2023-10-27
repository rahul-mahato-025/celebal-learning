export default class TableDto {
  constructor(table) {
    this.id = table._id;
    this.capacity = table.capacity;
    this.status = table.status;
    this.createdAt = table.createdAt;
    this.updatedAt = table.updatedAt;
  }
}
