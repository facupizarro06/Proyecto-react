import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartContext } from '../Context/CartContext' 


const CartWidget = () => {
    const { totalProducts, cart } = useCartContext();
    return (
      <div>
        <button> <MdOutlineShoppingCart/> </button>
      </div>
    );
  }
  
  export default CartWidget;
  