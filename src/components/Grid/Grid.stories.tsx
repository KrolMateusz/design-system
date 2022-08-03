import React from 'react'
import { styled } from '@mui/material/styles'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Grid from './Grid'
import Paper from '@mui/material/Paper'

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Template: ComponentStory<typeof Grid> = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      width={'75vw'}
    >
      <Grid
        item
        mobileSmall={2}
        desktopSmall={3}
        desktop={4}
      >
        <Item />
      </Grid>
      <Grid
        item
        mobileSmall={2}
        desktopSmall={5}
        desktop={4}
      >
        <Item />
      </Grid>
      <Grid
        item
        mobileSmall={4}
        desktopSmall={4}
        desktop={4}
      >
        <Item />
      </Grid>
      <Grid
        item
        mobileSmall={4}
        desktopSmall={4}
        desktop={4}
      >
        <Item />
      </Grid>
    </Grid>
  )
}

export const Standard = Template.bind({})
