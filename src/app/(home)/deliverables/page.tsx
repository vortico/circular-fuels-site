import Deliverable from './_components/Deliverable'
import type { Deliverable as TDeliverable } from './_components/types'

const deliverables: TDeliverable[] = [
  {
    name: 'Data management plan (DMP)',
    date: new Date('2026-06-30'),
    link: null,
    description:
      'The Data Management Plan (DMP) for the CIRCULAR FUEL project outlines the strategy for handling research data in accordance with FAIR principles (Findable, Accessible, Interoperable, Reusable). It details how data generated throughout the project will be collected, processed, stored, and shared.',
  },
  {
    name: 'Plan for dissemination and exploitation including communication activities',
    date: new Date('2026-06-30'),
    link: null,
    description:
      'The Plan for Dissemination, Exploitation, and Communication Activities outlines the strategy to maximize the impact of the CIRCULAR FUEL project by ensuring that results are effectively shared, utilized, and communicated to relevant stakeholders. The plan will be continuously updated to reflect project progress and stakeholder needs, thereby supporting long-term impact and sustainability.',
  },
  {
    name: 'Launch and Maintenance of the CIRCULAR FUELS Website',
    date: new Date('2026-03-31'),
    link: '/documents/deliverables/D_9_1.pdf',
    description:
      'This deliverable covers the creation and ongoing maintenance of the official CIRCULAR FUELS website. The platform will serve as a central hub for sharing scientific publications, project progress updates, and information on biowaste-to-biofuel pathways.',
  },
]

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Deliverables</h1>
          <p className="mt-4">
            This page lists the official deliverables produced within the CIRCULAR FUELS project. Each deliverable
            represents a concrete output or milestone, documenting the work carried out across the project&apos;s work
            packages.
          </p>
        </div>
      </header>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Deliverables</h2>
          <div className="mt-4">
            <ul className="space-y-10">
              {deliverables
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((deliverable, i) => (
                  <li key={i}>
                    <Deliverable deliverable={deliverable} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
