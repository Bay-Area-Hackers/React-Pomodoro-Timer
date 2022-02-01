import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Clock, TimeInfo } from '../../components/atoms/Clock'

export default {
  title: 'Atoms/Clock',
  component: Clock,
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />

export const Test = Template.bind({})
Test.args = {
  isPlaying: true,
  duration: 20,
  colors: TimeInfo.Working,
}
