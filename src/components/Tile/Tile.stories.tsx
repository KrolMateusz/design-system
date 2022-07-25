import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tile from './Tile'

export default {
    title: 'Components/Tile',
    component: Tile,
} as ComponentMeta<typeof Tile>

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />

export const Standard = Template.bind({})
Standard.args = {
    title: 'TeamAlert: transition from MVP to product-market fit results in 300% more users',
    tags: [ '#b2b services', '#product/market fit', '#north america' ],
    image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    alt: 'green iguana',
    type: 'case study'
}
