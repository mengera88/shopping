import {
    Box, SkeletonCircle,
    SkeletonText
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import mockData from '../../interface/products.json'
import { GoodItemType } from '../../interface/type'
import GoodItem from './components/good-item'
import styles from './index.module.scss'

export default function Home(){
    const [goods, setGoods] = useState<Array<GoodItemType>>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getaData = () => {
        setLoading(true)
        // 此处如果有后端服务，改成接口请求
        setTimeout(() => {
            const res = mockData
            setGoods(res.cart.items)
            setLoading(false)
        }, 300)
    }
    useEffect(() => {
        getaData()
    }, [])

    if (loading) {
        return (
            <Box padding='6' margin='60'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
        )
    }
    
    return (
        <div className={styles.wrapper}>
            {!!goods?.length && goods.map(good => (
                <GoodItem key={good.uniqueId} data={good} />
            ))}
        </div>
    )
}