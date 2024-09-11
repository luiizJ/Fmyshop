import { GlobalStyled } from "./GlobalStyled";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductList/ProductList";
import { PromoB } from "./components/Header/Promo";
import { Provider } from "react-redux";
import { store } from "./redux/UseReducer/store";

function App() {
  return (
    <Provider store={store}>
      <PromoB />
      <Header />
      <ProductsList />
      <GlobalStyled />
    </Provider>
  );
}

export default App;
