import Member from './_components/Member'
import type { Member as TMember } from './_components/types'

const members: TMember[] = [
  {
    title: 'Universidad De Sevilla (UoS)',
    country: 'Spain',
    description: (
      <>
        <p>
          Founded in 1505 the <a href="https://www.us.es/">University of Seville</a> (USE) is the third largest
          university in Spain with over 70000 students and more than 4000 academic staff. USE offers 111 master programs
          and 32 doctoral programs and it is committed to international research with over 100 European ongoing
          projects. Research is carried out in 134 academic departments, in 8 joint research centres USE - Spanish
          National Research Council (CSIC) and 10 university research institutes. USE embraces academia, industry,
          engineering and science and provides an intellectual reference in the South of Europe, with a powerful
          educational and technological infrastructure.
        </p>
        <br />
        <p>
          USE participates in CIRCULAR FUELS through Surface Science & Catalysis laboratory
          <a href="https://surfcat.icms.us-csic.es/">SURFCAT</a> being Prof. Tomas R. Reina the main contact for the
          project. SURFCAT possess over 40 years of experience in catalysis for energy and environmental applications
          and their labs at the <a href="https://www.icms.us-csic.es/en/inicio">Materials Science Institute</a> are
          fully equipped with automatised catalytic rigs, microchannel reactor manufacturing devices, operando
          spectroscopy and state of the art characterisation infrastructure. All these facilities are available to
          deliver CIRCULAR FUELS activities. USE´s lead the project activities related to training and knowledge
          exchange on structured catalysts and microchannel reactors manufacturing.
        </p>
      </>
    ),
  },
  {
    title: 'Politecnico Di Milano (POLIMI)',
    country: 'Italy',
    description: (
      <>
        <p></p>
      </>
    ),
  },
  {
    title: 'Universitaet Hohenheim (UHOH)',
    country: 'Germany',
    description: (
      <>
        <p>
          The University of Hohenheim (UHOH), founded in 1818, is a leading German agricultural research university with
          an international reputation for interdisciplinary, innovation-driven work. It combines agricultural, natural,
          economic, and social sciences to address major challenges in food systems, the environment, and society. Its
          research priorities include the bioeconomy, food and nutrition security, climate and environmental change,
          digital transformation, and sustainable agriculture aligned with the One Health concept. Thematic platforms
          support cross-disciplinary collaboration. Advanced infrastructure and entrepreneurship programs strengthen
          knowledge transfer, enabling impactful research and real-world innovation worldwide.
        </p>
        <br />
        <p>
          UHOH participates in CIRCULAR FUELS through the Department{' '}
          <a href="https://konversionstechnologie.uni-hohenheim.de/en/">
            &apos;Conversion Technologies of Biobased Resources&apos;
          </a>
          , represented by its chairholder{' '}
          <a href="https://hohcampus.verw.uni-hohenheim.de/qisserver/pages/startFlow.xhtml?_flowId=showPublicOrgunitHierarchy-flow&personOrgunitRelationId=1376&object=PersonOrgunitRelation&navigationPosition=organisation,searchhisinonepersonorgunitrelation">
            Prof. Dr. Andrea Kruse
          </a>{' '}
          and{' '}
          <a href="https://hohcampus.verw.uni-hohenheim.de/qisserver/pages/startFlow.xhtml?_flowId=showPublicOrgunitHierarchy-flow&personOrgunitRelationId=3091&object=PersonOrgunitRelation">
            Dr. Pablo Jose Arauzo Gimeno
          </a>{' '}
          as main contacts for the project. Research activities focus on the development of innovative separation
          technology, processes for the production of platform chemicals, and novel approaches for the production and
          characterization of carbon materials{' '}
          <a href="https://www.youtube.com/channel/UCR7BJTJMTFX1__13CudnXiQ">(...more on our YouTube Channel)</a>.
        </p>
        <br />
        <p>
          UHOH leads WP4 to advance hydrothermal carbonization (HTC) and hydrothermal liquefaction (HTL) for managing
          wet biowaste in CIRCULAR FUELS. The work optimizes operating conditions to increase carbon efficiency and
          recover valuable products, prioritizing nutrient recovery and extraction of protein and phenolic fractions.
          With the University of Sheffield, UHOH will develop and validate hydrogen production using HTC/HTL liquid
          by-products as feed. In partnership with GreenE, UHOH will implement a parallel HTC/HTL pathway to widen
          accepted feedstocks and run joint testing and characterization campaigns. POLIMI contributes modelling and
          process optimization. Experiments will benchmark yields, product quality, emissions, and energy balances at
          scale.
        </p>
      </>
    ),
  },
  {
    title: "The Queen's University Of Belfast (QUB)",
    country: 'UK',
    description: (
      <>
        <p>
          Queen’s University Belfast (QUB) is a member of the Russell Group of 24 world-leading UK research-intensive
          Universities and ranked 37th in the sector in REF 2021 (Times Higher Education), with 88% of research activity
          at QUB judged to be world-leading or internationally excellent. QUB combines excellence in research and
          education with a student-centred ethos. Over 96% of QUB graduates are in employment or further study six
          months after graduation. QUB ranked 85th globally in the Times Higher Education 2022 Impact Rankings, which
          assesses the impact of the University relative to the SDGs. QUB are UK leaders in facilitating the transfer of
          research outcomes from the laboratory into markets - ranking 1st in the UK for entrepreneurial impact (Octopus
          Ventures, 2020) and 6th in the UK in IP revenues. QUBIS, the commercialisation arm of QUB, has created more
          than 100 technology spin out companies, generating £323m in revenue and 3,100 jobs.
        </p>
        <br />
        <p>
          QUB holds an Athena SWAN institutional Silver award, as does the School of Chemistry and Chemical Engineering,
          where the ESRs will be hosted. The Athena SWAN Charter was introduced in 2005 to advance the representation of
          women in science, engineering and technology. The University published its Research Culture Action Plan in
          2021 – this demonstrates the universities commitment to promoting a more supportive, inclusive, and
          collaborative research culture. QUB also signed up to Advance HE’s Race Equality Charter (REC) in 2020, which
          seeks to identify and critically reflect on institutional and cultural barriers standing in the way of Black,
          Asian and Minority Ethnic staff and students.
        </p>
      </>
    ),
  },
  {
    title: 'GreenE Enterprise, S.L. (GreenE)',
    country: 'Spain',
    description: (
      <>
        <p>
          Greene Enterprise (Spain) is an advanced technology company specialised in thermochemical conversion of
          complex waste streams into circular fuels and chemical feedstocks. Founded to accelerate the deployment of
          industrial-scale pyrolysis, gasification and catalytic upgrading systems, the company operates an integrated
          R&D, engineering and pilot-scale platform that supports the transition toward low-carbon and
          resource-efficient processes in Europe. Greene Enterprise leads multiple national and European innovation
          projects and collaborates with industrial offtakers across the petrochemical, energy and materials sectors.
        </p>
        <br />
        <p>
          Greene Enterprise participates in CIRCULAR FUELS through its Advanced Thermochemical Conversion, which
          develops proprietary technologies for waste-to-syngas, waste-to-hydrogen and pyrolysis-oil upgrading. The
          company operates pilot units for pyrolysis, gasification, and hydrogen generation, complemented by full
          analytical capabilities (GC-FID/TCD, ICP-OES, BET, TGA, elemental analysis) and process-engineering tools for
          scale-up with the available pilots plants. These facilities and engineering teams are fully available to
          support CIRCULAR FUELS.
        </p>
        <br />
        <p>
          Greene Enterprise will contribute to the project by providing industrial know-how, process integration
          expertise and training in thermochemical processing of waste-derived intermediates, syngas conditioning,
          catalytic upgrading and hydrogen-compatible circular-fuel pathways. The company will host secondments,
          participate in knowledge-exchange activities, and support the translation of laboratory insights into scalable
          technological solutions aligned with EU circular-economy and decarbonisation objectives.
        </p>
      </>
    ),
  },
  {
    title: 'Vortico Tech SL (Vortico)',
    country: 'Spain',
    description: (
      <>
        <p>
          Vortico is a software engineering and artificial intelligence boutique specializing in the development of
          high-performance, cloud-native architectures and machine learning solutions. Based in Málaga, Spain, the
          company is built on a foundation of expert knowledge in distributed systems, API design, and scalable data
          processing. Vortico is known for its commitment to open-source software, having developed frameworks like{' '}
          <a href="https://flama.dev/">Flama</a> to streamline the deployment of high-speed machine learning models, and
          the <a href="https://vortico.cloud/solutions/energy/">Vortico Energy Platform</a>, an AI-powered solution for
          predictive analytics and strategy optimization in complex energy markets, such as spanish electricity market.
          Besides, Vortico is fully committed to fundamental research in the fields of artificial intelligence, complex
          multi-scale systems, and other fundamental scientific areas.
        </p>
        <br />
        <p>
          Within the CIRCULAR FUELS framework, Vortico provides the core digital and computational expertise required to
          bridge experimental research with modern technology. The company applies advanced software engineering
          principles and data-driven methodologies to support the project’s technical objectives. By leveraging
          artificial intelligence and sophisticated data processing, Vortico helps transform complex information into
          actionable insights, enhancing the overall efficiency and scalability of the technologies being developed.
        </p>
        <br />
        <p>
          Vortico’s team leads the integration of digital tools and intelligent systems that streamline collaboration
          across the consortium. Their focus remains on ensuring technological robustness and high software quality
          standards, facilitating the transition from laboratory concepts to optimized digital environments. Through the
          application of modern software patterns and predictive modeling, Vortico strengthens the project’s ability to
          innovate within the circular economy.
        </p>
      </>
    ),
  },
  {
    title: 'GreenX Technology LTD (GreenX)',
    country: 'UK',
    description: (
      <>
        <p>
          GreenX Technology (United Kingdom) is an innovation-driven company specialising in advanced catalytic and
          process-engineering solutions for sustainable chemical and energy applications. With strong R&D capabilities,
          GreenX develops next-generation catalysts and integrated process concepts that enhance efficiency, durability
          and environmental performance across industrial conversion pathways.
        </p>
        <br />
        <p>
          Our core expertise includes catalyst development and optimisation for key synthesis reactions, enabling the
          conversion of waste-derived carbon and renewable hydrogen into low-emission products such as fuels and
          chemicals. In parallel, the company provides tailored process design optimisation services to support
          industrial decarbonisation and resource efficiency.
        </p>
        <br />
        <p>
          Within CIRCULAR FUELS, GreenX will contribute to catalyst optimisation, as well as process modelling and
          optimisation. GreenX will also support market analysis, commercialisation strategies, and catalyst performance
          analysis in the energy sector. The company is based at the Surrey Research Park and is supported by team
          members such as Prof. Sai Gu, who has an extensive international network across Asia, Africa, and Europe,
          covering biomass resources, processing, and product upgrading, together with substantial experience and strong
          industry connections.
        </p>
      </>
    ),
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
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <ul className="space-y-16">
            {members.map((member, i) => (
              <li key={i}>
                <Member member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
