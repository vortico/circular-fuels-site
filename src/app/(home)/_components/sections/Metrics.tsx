interface Metric {
  name: string
  value: number
}

const metrics: Metric[] = [
  { name: 'Months', value: 48 },
  { name: '€', value: 455910 },
  { name: 'Countries', value: 4 },
  { name: 'Partners', value: 7 },
]

export default function Section() {
  return (
    <>
      <h2>Circular Fuels in Numbers</h2>
      <div className="mt-4 grid grid-cols-2 place-items-center md:grid-cols-4">
        {metrics.map(({ value, name }, i) => (
          <div
            key={i}
            className="bg-accent-500 shadow-accent-500 flex h-32 w-32 flex-col items-center justify-center rounded-full shadow-md select-none"
          >
            <div className="text-primary-50 font-mono text-2xl font-semibold">{value.toLocaleString()}</div>
            <div className="text-primary-50 text-sm">{name}</div>
          </div>
        ))}
      </div>
    </>
  )
}
