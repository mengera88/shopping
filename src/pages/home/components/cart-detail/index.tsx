import { GoodItemType } from '../../../../interface/type'
import CartItem from '../cart-item'

interface ChartDetailProps {
    goods: GoodItemType[]
}

export default function CartDetail(props: ChartDetailProps) {
    const { goods } = props
    return (
        <div>
            {!!goods.length && goods.map(good => (
                <div  key={good.uniqueId}>
                    <CartItem data={good} />
                </div>
            ))}
        </div>
    )
}

CartDetail.defaultProps = {
    goods: []
}