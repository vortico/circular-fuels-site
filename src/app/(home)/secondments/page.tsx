import Secondment from './_components/Secondment'
import type { Secondment as TSecondment } from './_components/types'

const secondments: TSecondment[] = []

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Secondments</h1>
          <p className="mt-4">
            At the core of the CIRCULAR FUELS project lies a dynamic program of international and cross-sectoral
            exchanges. As an EU-funded MSCA Staff Exchange initiative, our success isn’t just measured by data and
            publications, but by the movement of knowledge, ideas, and people across borders.
          </p>
        </div>
      </header>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>What are Secondments?</h2>
          <div className="mt-4">
            <p>
              Secondments are dedicated periods where researchers, technicians, and administrative staff from one
              partner organization travel to work at another. This <i>knowledge-sharing mobility</i> is the primary tool
              we use to bridge the gap between academic research and industrial application.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Why Mobility Matters for Circular Fuels</h2>
          <div className="mt-4">
            <p>
              To solve complex challenges like biowaste valorisation and AI-driven recycling, we believe in the power of
              synergy. Our secondment program is designed to:
            </p>
            <ul className="ml-5 list-outside list-disc">
              <li>
                <span className="font-semibold">Foster Knowledge Transfer:</span> Scientists bring theoretical
                breakthroughs directly into the labs of our industrial partners.
              </li>
              <li>
                <span className="font-semibold">Bridge the Academic-Industrial Divide:</span> Staff from our SMEs spend
                time in world-class university environments, ensuring that research remains grounded in market reality
                and industrial feasibility.
              </li>
              <li>
                <span className="font-semibold">International Networking:</span> By rotating staff between Spain, Italy,
                Germany, and the UK, we are building a permanent, international network of experts.
              </li>
              <li>
                <span className="font-semibold">Skill Diversification:</span> Our team members gain hands-on experience
                in diverse fields, from advanced catalysis and process simulation to machine learning.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Secondments</h2>
          <div className="mt-4">
            <ul className="space-y-16">
              {secondments
                .sort((a, b) => a.start.getTime() - b.start.getTime())
                .map((secondment, i) => (
                  <li key={i}>
                    <Secondment secondment={secondment} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
