import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Progress from './Progress'
import MuiStack from '@mui/material/Stack'

export default {
    title: 'Components/Progress',
    component: Progress,
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    variant: 'indeterminate',
    value: 30
}

export const Yellow = Template.bind({})
Yellow.args = {
    color: 'yellow'
}
