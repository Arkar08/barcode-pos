
import CategoryProvider from "./context/CategoryContext";
import FindProvider from "./context/FindContext";
import InvoiceProvider from "./context/InvoiceContext";
import OrderProvider from "./context/OrderContext";
import ProductProvider from "./context/ProductContext";
import UserProvider from "./context/UserContext";
import View from "./routes/View";

function App() {
  return (
      <FindProvider>
        <UserProvider>
          <InvoiceProvider>
            <OrderProvider>
              <ProductProvider>
                <CategoryProvider>
                  <View />
                </CategoryProvider>
              </ProductProvider>
            </OrderProvider>
          </InvoiceProvider>
        </UserProvider>
      </FindProvider>
  );
}

export default App;
