import { cn } from '@/lib/tw-merge'

interface Props {
  as: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
}

function getStylesByTag(tag: 'p' | 'span' | 'h1' | 'h2' | 'h3') {
  if (tag === 'p' || tag === 'span') {
    return 'text-base lg:text-lg'
  } else if (tag === 'h2') {
    return 'text-md lg:text-lg'
  }
}

export default function Text({ as, children, className, ...props }: Props) {
  const Tag = as
  return (
    <Tag className={cn(className, getStylesByTag(Tag))} {...props}>
      {children}
    </Tag>
  )
}
