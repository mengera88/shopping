import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatchStore, useStateStore } from '../../../../context'
import CartItem from '../cart-item'


export default function CartDetail() {
    const { carts } = useStateStore()
    const [total, setTotal] = useState(0)
    const dispatch = useDispatchStore()

    const handleQuantityChange = (e: number, index: number) => {
        const newCarts = cloneDeep(carts) || []
        newCarts[index].quantity = e
        dispatch({
            type: 'setcarts',
            data: newCarts
        })
    }

    useEffect(() => {
        let sum = 0
        carts?.forEach(good => {
            sum += (good.unitPrice * good.quantity) || 0
        })
        setTotal(+sum.toFixed(2))
    }, [carts])

    return (
        <div>
            {!!carts?.length && carts.map((good, index) => (
                <div  key={good.uniqueId}>
                    <CartItem data={good} onQuantityChange={(e) => handleQuantityChange(e, index)} />
                </div>
            ))}
            <div>
                Total: ${total}
            </div>
        </div>
    )
}

CartDetail.defaultProps = {
    goods: []
}