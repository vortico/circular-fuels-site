import Image from 'next/image'

import type { Secondment } from './types'

export interface SecondmentProps {
  secondment: Secondment
}

export default function Secondment({ secondment }: SecondmentProps) {
  const date = `${secondment.start.toISOString().slice(0, 10)} - ${secondment.end.toISOString().slice(0, 10)}`
  return (
    <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
      <div>
        <Image height={130} width={300} src="/images/Logo.png" alt="Circular Fuels logo" />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl">{secondment.researcher}</h2>
        <p className="text-accent-500 mt-1 text-sm font-semibold">{secondment.from}</p>
        <p className="mt-2">
          {secondment.secondment} ({date})
        </p>
      </div>
    </div>
  )
}
