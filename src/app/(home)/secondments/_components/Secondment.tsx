import Image from 'next/image'

import type { Secondment } from './types'

export interface SecondmentProps {
  secondment: Secondment
}

const SEASONS = ['Winter', 'Spring', 'Summer', 'Autumn']

function formatSeason(date: Date): string {
  return `${SEASONS[Math.floor(((date.getUTCMonth() + 1) % 12) / 3)]} ${date.getUTCFullYear()}`
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
          {secondment.secondment} ({formatSeason(secondment.date)})
        </p>
      </div>
    </div>
  )
}
