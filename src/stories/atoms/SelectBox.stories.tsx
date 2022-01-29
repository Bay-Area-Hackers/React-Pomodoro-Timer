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

export const Test = Template.bind({})
Test.args = {
  isTimer: true,
  initNum: 100,
}

// export const ManyItems: ComponentStory<typeof TextButton> = (args) => (
//   const []
// )
