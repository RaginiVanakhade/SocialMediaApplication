// Base product coming from your backend or UI
export interface Product {
  id: string | number;
  name: string;
  price: number;
  image?: string;
}

// Product as stored inside the cart
export interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  products: CartProduct[];
  totalQuantity: number;
  totalPrice: number;
}
