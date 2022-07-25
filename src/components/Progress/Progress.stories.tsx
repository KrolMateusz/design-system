import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Progress from './Progress'
import MuiStack from '@mui/material/Stack'

export default {
    title: 'Components/Progress',
    component: Progress,
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => {
    return (
        <MuiStack direction={'row'} spacing={2}>
            <Progress color='primary' />
            <Progress color='yellow' />
        </MuiStack>
    )
}
export const Standard = Template.bind({})
