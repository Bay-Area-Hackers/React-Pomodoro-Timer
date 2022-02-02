import Modal from '../../components/atoms/Modal'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
)

export const Test = Template.bind({})
Test.args = {
  isTrue: true,
  
}
