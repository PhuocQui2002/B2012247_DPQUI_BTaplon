const { ObjectId } = require("mongodb");
class ProductService {
  constructor(client) {
    this.Product = client.db().collection("products");
  }

  // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
  extractConactData(product) {
    const ret = {
      name_product: product.name_product,
      color_product: product.color_product,
      price_product: product.price_product,
      img_product: product.img_product,
      classify_product: product.classify_product,
    };

    return ret;
  }

  async create(product) {
    const products = this.extractConactData(product);
    const result = await this.Product.findOneAndUpdate(
      products,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result;
  }

  async find(filter) {
    const cursor = await this.Product.find(filter);
    return await cursor.toArray();
  }

  async findByName(name_product) {
    return await this.find({
      name_product: { $regex: new RegExp(name_product), $options: "i" },
    });
  }
  async findById(id) {
    return await this.Product.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, product) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractConactData(product);
    const result = await this.Product.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result;
  }
  async delete(id) {
    const result = await this.Product.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result;
  }

  async deleteAll() {
    const result = await this.Product.deleteMany({});
    return result.deletedCount;
  }
}
module.exports = ProductService;
