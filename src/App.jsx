import './App.css'
import ProductCard from "./component/Product"
import { productData } from './data/productData';


const App = () => {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App
