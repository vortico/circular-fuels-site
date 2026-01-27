import Image from 'next/image'

export default function Section() {
  return (
    <>
      <h1>Innovative Biowaste Valorisation</h1>
      <p className="mt-4">Advancing Biomass Recycling through Technology and AI</p>
      <p className="mt-8">
        The CIRCULAR FUELS project is a four-year, integrated programme focused on tackling crucial biomass utilization
        challenges within the framework of the circular economy. We aim to revolutionize the recycling of biowaste into
        high-value chemicals and materials using innovative technologies.
      </p>
      <div className="mt-8 flex items-center justify-center">
        <Image className="h-auto" height={495} width={640} src="/images/home/Proyecto.png" alt="Project diagram" />
      </div>
    </>
  )
}
