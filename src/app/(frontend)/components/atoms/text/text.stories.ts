import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'radio',
      options: ['p', 'span', 'h1', 'h2', 'h3'],
      description: 'Determines which HTML tag is rendered',
    },
    content: {
      control: 'text',
      description: 'Text content displayed inside the component',
    },
    className: {
      control: 'text',
      description: 'Optional custom class names for additional styling',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Paragraph: Story = {
  args: {
    as: 'p',
    content: 'This is a paragraph of text.',
  },
}

export const Heading1: Story = {
  args: {
    as: 'h1',
    content: 'Invisible Heading (text-transparent)',
  },
}

export const Heading2: Story = {
  args: {
    as: 'h2',
    content: 'Section Title',
  },
}

export const Span: Story = {
  args: {
    as: 'span',
    content: 'Inline span text.',
  },
}

export const CustomClass: Story = {
  args: {
    as: 'p',
    content: 'Paragraph with custom class.',
    className: 'text-red-500 italic',
  },
}
