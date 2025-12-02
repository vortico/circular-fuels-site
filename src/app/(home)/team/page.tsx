import Member from './_components/Member'

interface Member {
  title: string
  country: string
  description: string
}

const members: Member[] = [
  {
    title: 'Universidad De Sevilla (UoS)',
    country: 'Spain',
    description:
      "As the coordinator, UoS is central to the project's management and scientific direction. They contribute significant academic expertise in areas like chemical engineering, advanced materials, and process optimization, ensuring the coherence and quality of the core biowaste valorisation research.",
  },
  {
    title: 'Politecnico Di Milano (POLIMI)',
    country: 'Italy',
    description:
      'A leading technical university, POLIMI’s focus is expected to be on specialized technical areas such as process simulation, advanced catalysis, or material science. Their expertise is vital in modeling the new conversion processes for efficiency and scalability.',
  },
  {
    title: 'Universitaet Hohenheim (UHOH)',
    country: 'Germany',
    description:
      "UHOH's involvement likely focuses on the biomass and biowaste feedstock side of the project. This includes feedstock characterization, sorting strategies, and the sustainability assessment of the entire valorisation chain, supporting an effective circular economy approach.",
  },
  {
    title: "The Queen's University Of Belfast (QUB)",
    country: 'UK',
    description:
      'QUB is expected to focus on key technological aspects, such as the development of innovative catalytic materials or the application of machine learning (AI) algorithms for enhancing process performance and predicting optimal recycling pathways.',
  },
  {
    title: 'GreenE Enterprise, S.L. (GreenE)',
    country: 'Spain',
    description:
      'A private, for-profit company crucial for knowledge transfer from academia to the business sector. They will be key in providing industrial application context, potentially in scaling up technologies or providing real-world operational context for biowaste processing.',
  },
  {
    title: 'Vortico Tech SL (Vortico)',
    country: 'Spain',
    description:
      "Reinforcing the project's industry connection, Vortico contributes hands-on expertise, pilot plant validation, or specific commercial insights related to the market for value-added chemicals and materials, bridging the gap between research and commercial viability.",
  },
  {
    title: 'GreenX Technology LTD (GreenX)',
    country: 'UK',
    description:
      'GreenX will likely be involved in developing or implementing specific proprietary technologies or processes for biowaste conversion, potentially providing expertise in the final product refinement or market access strategies for the circular fuels produced.',
  },
]

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Team</h1>
          <p className="mt-4">
            The CIRCULAR FUELS project brings together a strong, international consortium of seven partners spanning
            three countries (Spain, Italy, Germany, and the UK), combining the expertise of leading universities and
            innovative enterprises. This unique mix facilitates high-level knowledge transfer across the academic and
            private sectors.
          </p>
        </div>
      </header>
      <section className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <ul className="space-y-16">
            {members.map(({ title, country, description }, i) => (
              <li key={i}>
                <Member title={title} country={country} description={description} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
