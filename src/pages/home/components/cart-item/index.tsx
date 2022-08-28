import { DeleteIcon } from '@chakra-ui/icons'
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/react'
import { useCallback } from 'react'
import { GoodItemType } from '../../../../interface/type'
import styles from './index.module.scss'

interface CartItemProps {
    data: GoodItemType
    onQuantityChange: (e: number) => void
}

export default function CartItem({data, onQuantityChange}: CartItemProps) {
    
    const handleQuantityChange = useCallback((e: string | number) => {
        onQuantityChange && onQuantityChange(+e)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img className={styles.img} src={data.image} alt="" />
                <span className={styles.title}>{data.name}</span>
                <DeleteIcon />
            </div>
            <div className={styles.desc}>
                {data.description}
            </div>
            <div className={styles.actionWrap}>
                <div>
                    <div className={styles.quatitle}>QUANTITY</div>
                    <NumberInput value={data.quantity} onChange={handleQuantityChange} size="md">
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    </div>
                <div className={styles.priceWrap}>
                    ${(data.unitPrice * (+data.quantity)).toFixed(2)}
                </div>
            </div>
        </div>
    )
}