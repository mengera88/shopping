import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Link, SkeletonCircle,
    SkeletonText
} from '@chakra-ui/react';
import { cloneDeep, findIndex } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useDispatchStore, useStateStore } from '../../context';
import { useVisible } from '../../hooks';
import mockData from '../../interface/products.json';
import CartDetail from './components/cart-detail';
import GoodItem from './components/good-item';
import styles from './index.module.scss';

type drawerSizeType = 'md' | 'full'

export default function Home(props: any){
    const { goods, carts } = useStateStore()
    const dispatch = useDispatchStore()
    const [loading, setLoading] = useState<boolean>(false)
    const {visible, open, close} = useVisible(false)
    const [drawerSise, setDrawerSize] = useState<drawerSizeType>(window.location.hash.indexOf('#cart') === -1 ? 'md' : 'full')
    console.log('init')

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
        // eslint-disable-next-line
    }, [])

    const handleAddToChart = useCallback((id: string, index: number) => {
        const good = (goods||[])[index]
        const newCarts = cloneDeep(carts) || []
        const cartIndex = findIndex(carts, (cart) => { return cart.uniqueId === id})
        if (cartIndex !== -1) {
            newCarts[cartIndex].quantity += good.quantity
        } else {
            newCarts.push(good)
        }
        dispatch({
            type: 'setcarts',
            data: newCarts
        })
        open()
    }, [goods, carts])

    const handleQuantityChange = useCallback((e: number, index: number) => {
        const newGoods = cloneDeep(goods) || []
        newGoods[index].quantity = e
        dispatch({
            type: 'setgoods',
            data: newGoods
        })
    }, [goods])

    const handleDetail = () => {
        setDrawerSize('full')
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
                        <Link><ArrowBackIcon onClick={close} /></Link>
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
                        <CartDetail />
                    </DrawerBody>
                    <DrawerFooter>
                        <div className={styles.drawerfooter}>
                            <Button width='100%' colorScheme='blue'>checkout</Button>
                            {drawerSise === 'md'  && (
                                <Link color='blue.500' href="#cart" onClick={handleDetail}>
                                    view detail cart
                                </Link>
                            )}
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}