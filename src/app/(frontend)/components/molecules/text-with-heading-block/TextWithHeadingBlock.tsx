import React from 'react'
import Text from '../../atoms/text/Text'

interface Props {
  headingContent: string
  as: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  content: string
  children?: React.ReactNode
}
export default function TextWithHeadingBlock({
  as,
  children,
  content,
  headingContent,
  ...props
}: Props) {
  return (
    <section className="flex flex-col gap-4" {...props}>
      {headingContent ? <Text as="h2" content={headingContent} /> : null}
      <Text as={as} content={content} />
      {children}
    </section>
  )
}
