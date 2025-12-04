import type {
    BadgeProps,
    ButtonProps,
    IconProps
} from 'webcoreui/astro'

export type HeroProps = {
    badge?: {
        text: string
    } & BadgeProps | null
    heading: string
    subHeading?: string
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    image?: {
        src: string
        alt: string
        width: number
        height: number
    } | null
    reverse?: boolean
    className?: string
}
