import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Text from './components/atoms/text/Text'
import TextWithHeadingBlock from './components/molecules/text-with-heading-block/TextWithHeadingBlock'

import config from '@/payload.config'
import Logo from './components/atoms/logo/Logo'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div className="w-full h-40 flex bg-accent">
        <Logo locale="es" />
      </div>

      <Text as="h1">DUPA JASIU</Text>
      <TextWithHeadingBlock
        as="p"
        content="Technologie, z którymi pracuję to: JavaScript, TypeScript, React.js, Next.js, Astro.js, SASS/SCSS, Tailwind, Git, Wordpress, Prisma, Firebase, Figma, BEM. Obecnie poszerzam swoją wiedzę w zakresie Node.js/Express.js i Mongodb/Mongoose."
        headingContent="technologie"
      />
    </>
  )
}
