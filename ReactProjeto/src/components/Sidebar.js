import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[45vw] transition-all duration-400 z-20 px-4 lg:px-[65px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Suas compras ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> R$ {Number(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">
          Adicionar ao carrinho
        </Link>
        <Link
          to="/"
          className="bg-cyan-200 flex p-4 justify-center items-center text-black w-full font-medium">
          Comprar Agora
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
