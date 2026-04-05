import Link from 'next/link'

interface Item {
  title: string
  href: string
}

const items: Item[] = [
  {
    title: 'Project',
    href: '/',
  },
  {
    title: 'Team',
    href: '/team/',
  },
  {
    title: 'News & Events',
    href: '/news/',
  },
  {
    title: 'Secondments',
    href: '/secondments/',
  },
  {
    title: 'Deliverables',
    href: '/deliverables/',
  },
]

export default function Menu() {
  return (
    <nav className="h-full w-full">
      <ul className="flex h-full items-center justify-center gap-2 sm:gap-6 md:gap-8">
        {items.map(({ title, href }, i) => (
          <li key={i} className="h-full shrink-0">
            <Link href={href}>
              <div className="hover:border-accent-500/50 text-primary-600 flex h-full items-center justify-center border-b-4 border-transparent px-1 text-xs transition-colors sm:px-2 sm:text-sm md:text-base">
                {title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
