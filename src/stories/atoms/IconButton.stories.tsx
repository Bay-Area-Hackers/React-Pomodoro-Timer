import { IconButton, IconType } from '../../components/atoms/IconButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { action } from "@storybook/addon-actions";

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  // argTypes: { onClick: { action: 'clicked' } },
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





//   //👇 Creates specific argTypes with options
//   argTypes: {
//     propertyA: {
//       options: ['close', 'down', 'linkcopy', 'picture', 'pomoblack', 'pomowhite', 'quit', 'skip', 'start', 'stop', 'twitter', 'up'],
//       control: { type: 'select' }, // Automatically inferred when 'options' is defined
//     },
//     propertyB: {
//       options: ['Another Item One', 'Another Item Two', 'Another Item Three', 'Another Item Four', 'Another Item Five', 'Another Item Six', 'Another Item Seven', 'Another Item Eight', 'Another Item Nine', 'Another Item Ten', 'Another Item Eleven', 'Another Item Twelve'],
//     },
//   },
// };

// //👇 Some function to demonstrate the behavior
// const someFunction = (valuePropertyA, valuePropertyB) => {
//   // Makes some computations and returns something
// };

// const Template = ({ propertyA, propertyB, ...rest }) => {
//   //👇 Assigns the function result to a variable
//   const someFunctionResult = someFunction(propertyA, propertyB);

//   return <YourComponent someProperty={someFunctionResult} {...rest} />;
// };

// export const ExampleStory = Template.bind({});
// ExampleStory.args= {
//   propertyA: 'Item One',
//   propertyB: 'Another Item One',
// };