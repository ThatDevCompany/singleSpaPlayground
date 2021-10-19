import React, {useCallback} from 'react'

export interface ButtonProps {
    onClick: (...args) => void
    label: string
}

export function Button(props: ButtonProps) {
    const {
        onClick = () => {
        }, label
    } = props
    const handleClick = useCallback(e => onClick(e), [])
    return <button onClick={handleClick}>{label}</button>
}

export default Button
