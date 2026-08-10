import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
        
        const newState = {
          items: updatedItems,
          totalItems: state.totalItems + (action.payload.quantity || 1),
          totalPrice: Number((state.totalPrice + (action.payload.price * (action.payload.quantity || 1))).toFixed(2))
        };
        
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1
        };
        
        const newState = {
          items: [...state.items, newItem],
          totalItems: state.totalItems + (action.payload.quantity || 1),
          totalPrice: Number((state.totalPrice + (action.payload.price * (action.payload.quantity || 1))).toFixed(2))
        };
        
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      }
    }

    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload);
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      
      const newState = {
        items: updatedItems,
        totalItems: state.totalItems - item.quantity,
        totalPrice: Number((state.totalPrice - (item.price * item.quantity)).toFixed(2))
      };
      
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (quantity <= 0) {
        const newState = {
          items: state.items.filter(item => item.id !== id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: Number((state.totalPrice - (item.price * item.quantity)).toFixed(2))
        };
        
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      }

      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );

      const newState = {
        items: updatedItems,
        totalItems: state.totalItems - item.quantity + quantity,
        totalPrice: Number((
          state.totalPrice - (item.price * item.quantity) + (item.price * quantity)
        ).toFixed(2))
      };
      
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'CLEAR_CART': {
      localStorage.removeItem('cart');
      return initialState;
    }

    case 'LOAD_CART': {
      return action.payload || initialState;
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id) => {
    return state.items.some(item => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = state.items.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isInCart,
      getItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};