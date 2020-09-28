let request;
let app;

const defaultId = '56cb91bdc3464f14678934ca';

beforeEach(async () => {
  await Product.deleteMany();

  const product = new Product(defaultProduct);
  product._id = defaultId;
  return await product.save();
});

afterEach(async () => await Product.deleteMany);