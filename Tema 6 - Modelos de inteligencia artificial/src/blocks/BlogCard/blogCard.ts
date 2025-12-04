import type { ButtonProps, CardProps } from 'webcoreui/astro'

export type BlogCardProps = {
    target?: ButtonProps['target']
    img: {
        src: string
        alt: string
    }
    title?: string
    text?: string
    secondary?: boolean
    className?: string
    [key: string]: any
} & CardProps
