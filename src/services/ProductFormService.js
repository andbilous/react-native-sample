/* eslint-disable class-methods-use-this */
class ProductFormService {
  saveItem() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
export default ProductFormService;
