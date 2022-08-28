import { ArrowBackIcon } from '@chakra-ui/icons'
import {
    Box, Button, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, SkeletonCircle,
    SkeletonText
} from '@chakra-ui/react'
import { cloneDeep, findIndex } from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatchStore, useStateStore } from '../../context'
import { useVisible } from '../../hooks'
import mockData from '../../interface/products.json'
import CartDetail from './components/cart-detail'
import GoodItem from './components/good-item'
import styles from './index.module.scss'

type drawerSizeType = 'md' | 'full'

export default function Home(){
    const { goods, carts } = useStateStore()
    const dispatch = useDispatchStore()
    const [loading, setLoading] = useState<boolean>(false)
    const {visible, open, close} = useVisible(false)
    const [drawerSise, setDrawerSize] = useState<drawerSizeType>('md')

    const getaData = () => {
        setLoading(true)
        // 此处如果有后端服务，改成接口请求
        setTimeout(() => {
            const res = mockData
            dispatch({
                type: 'setgoods',
                data: res.cart.items
            })
            setLoading(false)
        }, 300)
    }
    useEffect(() => {
        getaData()
    }, [])

    const handleAddToChart = (id: string, index: number) => {
        console.log(id)
        const good = (goods||[])[index]
        const newCarts = cloneDeep(carts) || []
        const cartIndex = findIndex(carts, (cart) => { return cart.uniqueId === id})
        if (cartIndex !== -1) {
            newCarts[cartIndex].quantity =+ good.quantity
        } else {
            newCarts.push(good)
        }
        dispatch({
            type: 'setcarts',
            data: newCarts
        })
        open()
    }

    const handleQuantityChange = (e: number | string, index: number) => {
        const newGoods = cloneDeep(goods) || []
        newGoods[index].quantity = +e
        dispatch({
            type: 'setgoods',
            data: newGoods
        })
    }

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
            {!!goods?.length && goods.map((good, index) => (
                <GoodItem key={good.uniqueId} data={good} addToChart={(id) => handleAddToChart(id, index)} onQuantityChange={(e) => handleQuantityChange(e, index)} />
            ))}
            <Drawer
                isOpen={visible}
                placement='right'
                onClose={close}
                size={drawerSise}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                       {drawerSise === 'full' && (
                        <>
                        <ArrowBackIcon />
                        continue shopping
                        </>
                       )}
                       {drawerSise === 'md' && (
                        <>
                        Cart summary
                        </>
                       )}
                        
                    </DrawerHeader>
                    <DrawerBody>
                        <CartDetail goods={carts} />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={close}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}