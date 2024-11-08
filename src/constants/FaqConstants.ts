export const FaqsArray = [
  {
    question:
      "We are currently able to calculate Scope 1 and 2 data in Excel. How will the OG platform add value?",
    answer:
      "Unlike Excel formats, the OG Decarb Navigator platform is able to create a baseline carbon footprint collating carbon footprints across fragmented data repositories. The platform can maintain historical carbon emissions and track against stated carbon reduction goals. The platform provides actionable insights into carbon hotspots, trends, benchmarks and a ranking of emissions from all enterprise facilities.",
  },
  {
    question: "How does the data get ingested into the platform?",
    answer: `Data can be ingested in a variety of ways:

1. Read directly from IoT devices/sensors such as an energy meter
2. Via APIs integrating with an existing ERP system such as SAP
3. Directly from the Operations/data entry wizard in the OG platform - this can be using AI-based bill capture, single or bulk Excel uploads`,
  },
  {
    question: "How do you maintain the veracity of the data?",
    answer:
      "For each data upload, the system maintains the user/employee ID, the timestamp of entry, and also supporting evidence such as invoices, or bills.",
  },
  {
    question:
      "We have multiple people and divisions responsible for different carbon data attributes. Are you able to create workflows that take into our account approval processes while collating the carbon footprints?",
    answer:
      "Yes, the platform is able to map users to *maker* and *checker* roles for a given facility and data attributes.",
  },
  {
    question: "Does the platform capture scope 3 emissions from Suppliers?",
    answer:
      "Yes, the platform is able to read supplier data on a continuous basis; the data is ingested in similar ways as the parent data.",
  },
  {
    question: "How does supplier data get into the platform?",
    answer:
      "A parent can invite suppliers to onboard from within the platform. Once a supplier accepts an invite, they can enter their Scope 1 and 2 data in their own instance of the platform, and the parent enterprise's corresponding Scope 3 data automatically updated. A supplier is able to adjust the method of attribution each time the data is entered.",
  },
  {
    question: "Is the platform able to account for Product Carbon Footprints?",
    answer:
      "Yes, the platform is able to compute the carbon emitted throughout a product's lifecycle, from raw material extraction through manufacturing, transportation, usage, and disposal.",
  },
  {
    question: "Does Onlygood provide any services in addition to the platform?",
    answer:
      "Yes, Onlygood provides an assessment to understand gaps in an existing sustainability program, and create a roadmap and recommendations for improving ESG scores. Onlygood also provides ESG strategy, governance, program management, analysis, auditing, certification, carbon reduction, offsets, and exchange listing services through its partner ecosystem.",
  },
  {
    question: "What is the nature of reporting provided by the platform?",
    answer:
      "The OG platform’s reporting engine can be configured to create standardized reports on demand – GRI, CBAM, CSRD, BRSR, and others. Any authorized user with access to the platform can enter data, and/or create and download a report.",
  },
  {
    question: "Does Onlygood help suppliers with data entry?",
    answer:
      "Yes, Onlygood provides facilities managers and data owners hand-holding for data entry. This is accomplished through educational webinars, plant/site visits, training and data entry support services.",
  },
  {
    question:
      "How is Onlygood different from the many other carbon accounting platforms in the marketplace?",
    answer:
      "Onlygood’s DeCarb Navigator platform is able to automate data collection, making it easy for global facilities and suppliers to enter carbon data. The platform’s built-in document management and auditing system ensures data veracity. The platform’s IoT DNA allows carbon hotspots to be identified at any level of granularity in an enterprise – machine or portfolio-level, assembly-line-level, plant-level, sub-brand-level, etc. The platform has a machine-learning capability allowing an enterprise to create ‘what-if’ scenarios and predict carbon emissions. The platform’s architecture is designed for scalability and is easily configurable for analytics, workflows, reporting and visualization. Most importantly, the platform allows for a continuous, near-realtime, evidence based ingestion of supplier data that is auditable for compliance.",
  },
] as const;
