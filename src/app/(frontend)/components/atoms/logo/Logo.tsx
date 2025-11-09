import Link from 'next/link'
import { cn } from '@/lib/tw-merge'

interface Props {
  locale: 'pl' | 'es' | 'en'
}
const logoClasses = 'flex items-center text-light tracking-heading font-light text-md'

export default function Logo({ locale }: Props) {
  return (
    <Link className="flex flex-col gap-0" href={`/${locale}/`}>
      <span className={cn(logoClasses)}>DOMINIK FRACKOWIAK</span>
      <span className={cn(logoClasses, 'font-medium text-sm tracking-zero')}>Web Developer</span>
    </Link>
  )
}
