export const calculateTotalPrice = (cart) => {
    return cart.reduce((total, book) => total + book.price, 0);
  };