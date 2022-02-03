import { SelectBox } from '../../components/atoms/SelectBox'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/SelectBox',
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>

const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
)

export const TimerTest = Template.bind({})
TimerTest.args = {
  isTimer: true,
  initNum: 25,
}

export const PomoTest = Template.bind({})
PomoTest.args = {
  isTimer: false,
  initNum: 4,
}