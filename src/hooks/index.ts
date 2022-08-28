import { useCallback, useState } from "react";

export function useVisible(initVisible: boolean) {
    const [visible, setVisible] = useState(initVisible)
    
    const open = useCallback(() => {
        setVisible(true)
    }, [])

    const close = useCallback(() => {
        setVisible(false)
    }, [])

    return {visible, open, close}
}