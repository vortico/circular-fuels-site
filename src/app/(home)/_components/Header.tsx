import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex h-full w-full items-center justify-between">
      <div className="">
        <Image height={100} width={200} src="/images/Logo.png" alt="Circular Fuels logo" />
      </div>
      <Link href="https://european-union.europa.eu/">
        <Image height={100} width={100} src="/images/home/FundedByEUVertical.png" alt="Funded by the European Union" />
      </Link>
    </header>
  )
}
