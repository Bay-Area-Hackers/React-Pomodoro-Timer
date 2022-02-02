import { TextButton } from '../../components/atoms/TextButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { action } from "@storybook/addon-actions";

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TextButton>

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
)

export const Yes = Template.bind({})
Yes.args = {
  isYes: true,
  onClick: action("Button is clicked!"),
}
