import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Size } from '../../components/atoms/Button'
// import { Meta, Story } from '@storybook/react'
// import { Button, Props } from '../components/atoms/Button'

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
  title: 'Atoms/Button',
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
export const Test = Template.bind({})
Test.args = {
  primary: true,
  children: 'Button',
}

export const next = Template.bind({})
next.args = {
  primary: true,
  children: 'Button',
}
export const stop = Template.bind({})
stop.args = {
  primary: true,
  children: 'Button',
}
export const start = Template.bind({})
start.args = {
  primary: true,
  children: 'Button',
}

export const pomoblack = Template.bind({})
pomoblack.args = {
  primary: true,
  children: 'Button',
}

export const pomowhite = Template.bind({})
pomowhite.args = {
  primary: true,
  children: 'Button',
}

export const skip = Template.bind({})
skip.args = {
  primary: true,
  children: 'Button',
}

export const quit = Template.bind({})
quit.args = {
  primary: true,
  children: 'Button',
}

export const twitter = Template.bind({})
twitter.args = {
  primary: true,
  children: 'Button',
}

export const photo = Template.bind({})
photo.args = {
  primary: true,
  children: 'Button',
}

export const linkcopy = Template.bind({})
linkcopy.args = {
  primary: true,
  children: 'Button',
}

export const picture = Template.bind({})
picture.args = {
  primary: true,
  children: 'Button',
}

export const close = Template.bind({})
close.args = {
  primary: true,
  children: 'Button',
}

// export const up = Template.bind({})
// up.args = {
//   primary: true,
//   children: 'Button',
// }

// export const down = Template.bind({})
// down.args = {
//   primary: true,
//   children: 'Button',
// }

// export const Basic = () => (
//   <atoms/>
// )

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">TypeScriptはいいぞ</header>
//     </div>
//   );
// }

// const meta: Meta = {
//   title: 'Button',
//   component: Button
// }

// export default meta;

// export const Default = () => <Button variant="primary">Click me</Button>