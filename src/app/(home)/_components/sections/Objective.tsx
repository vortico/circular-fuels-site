import Image from 'next/image'

export default function Section() {
  return (
    <>
      <h2>Our Objective</h2>
      <p className="mt-4">Closing the Loop with Biowaste</p>
      <div className="mt-8 space-y-2">
        <p>
          Funded by the EU&apos;s Marie Skłodowska-Curie Actions (MSCA) Staff Exchanges programme, CIRCULAR FUELS is
          centered on knowledge transfer and networking across seven international partners. Our core objective is to
          research and develop cutting-edge approaches for:
        </p>
        <ul className="list-inside list-disc">
          <li className="list-item">
            Sorting and Recycling Biowaste: Implementing innovative pathways to convert biowaste into value-added
            chemicals and materials.
          </li>
          <li>
            Advanced Catalysis & Process Efficiency: Enhancing the effectiveness and sustainability of the conversion
            processes.
          </li>
          <li>
            AI for Sustainability: Expanding the scope to a wider range of biomass species by incorporating process
            simulation and machine learning for smarter, more efficient recycling.
          </li>
        </ul>
        <p>
          The project promotes the essential concepts of biowaste valorisation and the circular economy by generating
          and exchanging expertise between academic and non-academic sectors.
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Image className="w-auto" height={311} width={640} src="/images/home/WPs.png" alt="WPs" />
      </div>
    </>
  )
}
