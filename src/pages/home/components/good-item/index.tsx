import {
    Button, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { GoodItemType } from '../../../../interface/type'
import styles from './index.module.scss'

interface GoodItemProps {
    data: GoodItemType
    addToChart: (id: string, quantity: number) => void
}

export default function GoodItem({data, addToChart}: GoodItemProps) {
    const [quantity, setQuantity] = useState<number | string>(1)

    const handleQuantityChange = useCallback((e: string | number) => {
        setQuantity(e)
    }, [])

    const addChart = useCallback(() => {
        addToChart && addToChart(data.uniqueId, +quantity)
    }, [quantity, data])

    return (
        <div className={styles.item} key={data.uniqueId}>
            <div className={styles.info}>
                <Text fontSize='2xl'>{data.name}</Text>
                <Text fontSize='lg'>{data.description}</Text>
                <div className={styles.formwrap}>
                    <div>
                        <div>QUANTITY</div>
                        <NumberInput value={quantity} onChange={handleQuantityChange}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                </div>
                <div className={styles.shop}>
                    <div className={styles.price}>${(data.unitPrice * (+quantity)).toFixed(2)}</div>
                    <Button colorScheme='blue' onClick={addChart}>ADD TO CHART</Button>
                </div>
            </div>
            <div className={styles.imgWrap}>
                <img className={styles.img} src={data.image} alt="图片" />
            </div>
        </div>
    )
}