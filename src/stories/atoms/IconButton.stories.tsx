import { IconButton, IconType } from '../../components/atoms/IconButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { action } from "@storybook/addon-actions";

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Yes = Template.bind({})
Yes.args = {
  isYes: true,
  iconType: IconType.Close,
  onClick: action("Icon is clicked!"),
}