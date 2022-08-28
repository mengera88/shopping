import { createContext, useContext, useReducer } from 'react';

interface Item {
    productId: number,
    productName: '商品1',
    number: 1,
    price: 333,
    salePrice: 222
}

const initialState = {
    list: []
}

const StateContext = createContext({});
const DispatchContext = createContext({});

export function useStateStore() {
    return useContext(StateContext);
}

export function useDispatchStore() {
    return useContext(DispatchContext);
}

// todo：稍后写这里的数据流转逻辑
function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
      case 'addcart':
        
        // return {count: state.count + 1};
      case 'deletecart':
        // return {count: state.count  1};
      default:
        throw new Error();
    }
  }

export function StoreProvider({ children }: any) {
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}
