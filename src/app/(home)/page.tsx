import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Innovative Biowaste Valorisation</h1>
          <p className="mt-4">Advancing Biomass Recycling through Technology and AI</p>
          <p className="mt-8">
            The CIRCULAR FUELS project is a four-year, integrated programme focused on tackling crucial biomass
            utilization challenges within the framework of the circular economy. We aim to revolutionize the recycling
            of biowaste into high-value chemicals and materials using innovative technologies.
          </p>
        </div>
      </header>
      <section className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Our Objective</h2>
          <p className="mt-4">Closing the Loop with Biowaste</p>
          <div className="mt-8 space-y-2">
            <p>
              Funded by the EU&apos;s Marie Skłodowska-Curie Actions (MSCA) Staff Exchanges programme, CIRCULAR FUELS is
              centered on knowledge transfer and networking across seven international partners. Our core objective is
              to research and develop cutting-edge approaches for:
            </p>
            <ul className="list-inside list-disc">
              <li className="list-item">
                Sorting and Recycling Biowaste: Implementing innovative pathways to convert biowaste into value-added
                chemicals and materials.
              </li>
              <li>
                Advanced Catalysis & Process Efficiency: Enhancing the effectiveness and sustainability of the
                conversion processes.
              </li>
              <li>
                AI for Sustainability: Expanding the scope to a wider range of biomass species by incorporating process
                simulation and machine learning for smarter, more efficient recycling.
              </li>
            </ul>
            <p>
              The project promotes the essential concepts of biowaste valorisation and the circular economy by
              generating and exchanging expertise between academic and non-academic sectors.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="border-primary-700/25 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t px-4 py-12 sm:gap-6 sm:px-6 md:flex-row md:gap-8 md:px-8">
          <p className="text-lg md:text-xl">
            Funded by the European Union under HORIZON-MSCA-2024-SE-01 Project reference: 101235948
          </p>
          <Link href="https://european-union.europa.eu/">
            <Image
              height={200}
              width={400}
              src="/images/home/FundedByEUHorizontal.png"
              alt="Funded by the European Union"
            />
          </Link>
        </div>
      </section>
    </>
  )
}
