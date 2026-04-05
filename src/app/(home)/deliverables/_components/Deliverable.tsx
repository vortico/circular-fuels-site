import type { Deliverable } from './types'

export interface DeliverableProps {
  deliverable: Deliverable
}

export default function Deliverable({ deliverable }: DeliverableProps) {
  const date = deliverable.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        {deliverable.link ? (
          <a href={deliverable.link} className="text-accent-500 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
            {deliverable.name}
          </a>
        ) : (
          <span className="font-semibold">{deliverable.name}</span>
        )}
        <span className="text-primary-400 text-sm">{date}</span>
      </div>
      <p className="text-primary-600">{deliverable.description}</p>
    </div>
  )
}
