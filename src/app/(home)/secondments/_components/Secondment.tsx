import Image from 'next/image'

import type { Secondment } from './types'

export interface SecondmentProps {
  secondment: Secondment
}

function formatPeriod(startDate: Date, endDate: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }

  const start = startDate.toLocaleDateString('en-GB', options)
  const end = endDate.toLocaleDateString('en-GB', options)

  return `${start} – ${end}`

}

export default function Secondment({ secondment }: SecondmentProps) {
  return (
    <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
      <div>
        <Image height={80} width={200} src={secondment.image} alt="Secondment image" />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl">{secondment.researcher}</h2>
        <p className="text-accent-500 mt-1 text-sm font-semibold">{secondment.from}</p>
        <p className="mt-2">
          {secondment.secondment}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {formatPeriod(secondment.startDate, secondment.endDate)}
        </p>
      </div>
    </div>
  )
}
