import BreakfastOverview from "./BreakfastOverview.js";
import { CartProvider } from "react-use-cart";

const Index =() => {
  return (
    <div>
      <CartProvider>
        <BreakfastOverview />
      </CartProvider>
    </div>
  );
}
export default Index;