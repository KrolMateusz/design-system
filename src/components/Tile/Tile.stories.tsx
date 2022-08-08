import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MuiSvgIcon from '@mui/material/SvgIcon'
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp'
import Tile from './Tile'

export default {
  title: 'Components/Tile',
  component: Tile,
} as ComponentMeta<typeof Tile>

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />

export const Icon = Template.bind({})
Icon.args = {
  title: 'TeamAlert: transition from MVP to product-market fit results in 300% more users',
  tags: ['#b2b services', '#product/market fit', '#north america'],
  image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  alt: 'green iguana',
  type: 'case study',
  icon: (
    <MuiSvgIcon>
      <AccountBalanceSharpIcon />
    </MuiSvgIcon>
  ),
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  title: 'TeamAlert: transition from MVP to product-market fit results in 300% more users',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio omnis cum nobis aspernatur, quasi eveniet sint maxime quos eum.',
  tags: ['#b2b services', '#product/market fit', '#north america'],
  image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  alt: 'green iguana',
  type: 'case study',
  icon: (
    <MuiSvgIcon>
      <AccountBalanceSharpIcon />
    </MuiSvgIcon>
  ),
}
