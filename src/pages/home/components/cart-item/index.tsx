import { DeleteIcon } from '@chakra-ui/icons'
import { GoodItemType } from '../../../../interface/type'
import styles from './index.module.scss'

interface CartItemProps {
    data: GoodItemType
}

export default function CartItem({data}: CartItemProps) {
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
                    dsd
                </div>
                <div>
                    dsd
                </div>
            </div>
        </div>
    )
}