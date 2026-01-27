import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex h-full w-full items-center justify-between">
      <Image width={185} height={80} src="/images/Logo.png" alt="Circular Fuels logo" />
      <Link href="https://european-union.europa.eu/">
        <Image width={79} height={80} src="/images/home/FundedByEUVertical.png" alt="Funded by the European Union" />
      </Link>
    </header>
  )
}
