import { TextButton } from '../../components/atoms/TextButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
)

export const Test = Template.bind({})
Test.args = {
  isYes: true,
  onClick: () => {},
}

// export const ManyItems: ComponentStory<typeof TextButton> = (args) => (
//   const []
// )
