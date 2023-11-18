const ProductService = require("../services/product.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//Creat and Save a new product
exports.create = async (req, res, next) => {
  if (!req.body?.name_product) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the product")
    );
  }
};
//Retrieve all product of a user from the database
exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const productService = new ProductService(MongoDB.client);
    const { name_product } = req.query;
    if (name_product) {
      documents = await productService.findByName(name_product);
    } else {
      documents = await productService.find({});
    }
  } catch (error) {
    return next(
      new ApiError(500, "An  error occurred while retrieving product")
    );
  }
  return res.send(documents);
};

//Find a single product with an id
exports.findOne = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "product not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving product with id=${req.params.id}`)
    );
  }
};

//Update a product by the id in the request
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "product not found"));
    }
    return res.send({ message: "product was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating product with id=${req.params.id}`)
    );
  }
};

//Delete a product with the specified id in the request
exports.delete = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "product not found"));
    }
    return res.send({ message: "product was deleted successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete product with id=${req.params.id}`)
    );
  }
};

//Find all classly product of a user
exports.findAllClassify = async (_req, res, next) => {
  try {
    const ProductService = new ProductService(MongoDB.client);
    const documents = await ProductService.findAllClassify();
    return res.send(documents);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving Classly products ")
    );
  }
};

//Delete all handler deleteAll
exports.deleteAll = async (_req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const deleteCount = await productService.deleteAll();
    return res.send({
      message: `${deleteCount} product were deleted successfully`,
    });
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while removing all product")
    );
  }
};
