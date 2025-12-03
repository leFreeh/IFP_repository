
import type { BlogCardProps } from '@blocks/BlogCard/blogCard'
import type { IconListProps } from '@blocks/IconList/iconList'
import type { LayoutProps } from '@blocks/Layout/layout'
import type { ButtonProps, CarouselProps, IconProps } from 'webcoreui/astro'
import type { HeroProps } from "@blocks/Hero/Hero.astro";

export type ProductPageProps = {
    layout: LayoutProps
    hero?: HeroProps;
    images?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    carousel?: Omit<CarouselProps, 'items'>
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    features?: IconListProps['items']
    recommended?: {
        title?: string
        items: BlogCardProps[]
    }
    [key: string]: any
    
}