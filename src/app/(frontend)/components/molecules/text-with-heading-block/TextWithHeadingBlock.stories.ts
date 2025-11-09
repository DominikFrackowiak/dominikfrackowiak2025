import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TextWithHeadingBlock from './TextWithHeadingBlock'

const meta: Meta<typeof TextWithHeadingBlock> = {
  title: 'Molecules/TextWithHeadingBlock',
  component: TextWithHeadingBlock,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'radio',
      options: ['p', 'span', 'h1', 'h2', 'h3'],
      description: 'Tag użyty przez część tekstową',
    },
    headingContent: {
      control: 'text',
      description: 'Treść nagłówka (renderowana jako <h2>)',
    },
    content: {
      control: 'text',
      description: 'Treść akapitu/tekstu',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TextWithHeadingBlock>

export const Default: Story = {
  args: {
    headingContent: 'Section Title',
    as: 'p',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
}

export const AsSpan: Story = {
  args: {
    headingContent: 'Inline Variant',
    as: 'span',
    content: 'Tekst inline wewnątrz <span>.',
  },
}

export const WithoutHeading: Story = {
  args: {
    headingContent: '',
    as: 'p',
    content: 'Blok bez nagłówka.',
  },
}

export const WithH3Content: Story = {
  args: {
    headingContent: 'Subsection',
    as: 'h3',
    content: 'Treść renderowana jako <h3> (styling pochodzi z atomu Text).',
  },
}
