import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'radio',
      options: ['pl', 'es', 'en'],
      description: 'Determines the locale segment in the link URL',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    locale: 'en',
  },
}

export const Polish: Story = {
  args: {
    locale: 'pl',
  },
}

export const Spanish: Story = {
  args: {
    locale: 'es',
  },
}
