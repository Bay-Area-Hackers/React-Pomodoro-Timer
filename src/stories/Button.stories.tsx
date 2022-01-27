import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Size } from '../components/atoms/Button'

// export default {
//   title: 'Button',
//   component: Button,
// } as ComponentMeta<typeof Button>

// export const Primary: ComponentStory<typeof Button> = () => (
//   <Button
//     primary={true}
//     size={Size.Large}
//     backgroundColor={'green-400'}
//     onClick={() => {}}
//   >
//     Button
//   </Button>
// )

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: 'Button',
}
