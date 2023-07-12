import logo from './logo.svg';
import './App.css';
import ProductInput from './conponents/ProductInput';
import ProductList from './conponents/ProductList';

function App() {
  return (
    <div className="App">
      <ProductInput></ProductInput>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
