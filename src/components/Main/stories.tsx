import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Custom: Story = (args) => <Main {...args} />
Custom.args = {
  title: 'Sample title',
  description: 'Sample description'
}
