/** eslint-disable */
import { createContext, useContext, useReducer } from 'react';
import { GoodItemType } from '../interface/type';

interface Item {
    productId: number,
    productName: '商品1',
    number: 1,
    price: 333,
    salePrice: 222
}

interface State {
    goods?: GoodItemType[];
    carts?: GoodItemType[]
}

const initialState: State = {
    goods: [],
    carts: []
}

const StateContext = createContext<State>(initialState);
const DispatchContext = createContext((item: any) => {});

export function useStateStore() {
    return useContext(StateContext);
}

export function useDispatchStore() {
    return useContext(DispatchContext);
}

// todo：稍后写这里的数据流转逻辑
function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
        case 'setgoods':
            return {
                ...state,
                goods: action.data
            }
        case 'setcarts':
            return {
                ...state,
                carts: action.data
            }
        default:
            throw new Error();
    }
  }

export function StoreProvider({ children }: any) {
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch as any}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}
