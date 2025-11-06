import { cn } from '@/lib/tw-merge'

interface Props {
  as: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  children?: React.ReactNode
  className?: string
  content?: string
}

function getStylesByTag(tag: 'p' | 'span' | 'h1' | 'h2' | 'h3') {
  if (tag === 'p' || tag === 'span') {
    return 'text-base lg:text-lg'
  } else if (tag === 'h2') {
    return 'w-auto text-md lg:text-lg tracking-heading border-b border-b-accent pt-5 pb-2.5 uppercase'
  } else if (tag === 'h1') {
    return 'text-zero text-transparent'
  }
}

export default function Text({ as, children, className, content, ...props }: Props) {
  const Tag = as
  return (
    <Tag className={cn(className, 'font-sans ', getStylesByTag(Tag))} {...props}>
      {content}
      {children}
    </Tag>
  )
}
