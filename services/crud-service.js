class CrudService {
  constructor(Model) {
    this.Model = Model;
  }
  async create(data) {
    try {
      const resp = await this.Model.create(data);
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const resp = await this.Model.findByIdAndUpdate(id, data, { new: true });
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async findOne(filter) {
    try {
      const resp = await this.Model.findOne(filter);
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async findAll(filter) {
    try {
      const resp = await this.Model.find(filter);
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      const resp = await this.Model.findByIdAndDelete(id);
      return resp;
    } catch (error) {
      throw error;
    }
  }
}

export default CrudService;
