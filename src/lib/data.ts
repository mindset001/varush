export const company = {
  name: "Varush Global Services Limited",
  shortName: "Varush",
  rcNumber: "RC 722798",
  founded: "14th December, 2007",
  motto: "Leveraging Synergies for Growth",
  tagline: "Superior construction management, from concept to occupancy.",
  about: `Varush Global Services LTD is a full service construction management firm specializing in managing the entire infrastructure and building construction process from concept, design, and procurement, construction through closeout and client occupancy. Our projects have ranged in size from 300 million to over 800 billion naira, and we have provided professional services for projects totaling over 1.5 billion naira of construction value. We specialize in large-scale civil construction by leveraging new-age construction technologies, from roads and bridges to dams, barrages, power generators, and rural electrification. With our business office located in Abuja, we have delivered innovative and cutting-edge construction and civil engineering services to both public and private sector clients across Nigeria.`,
  mission: `The Varush mission is to provide superior construction management services. This objective is accomplished through a broad range of 'value added' services that represent and protect clients during every phase of a project, from planning and design, to procurement and construction, to start-up and operation, and ultimately to the occupancy of the new facility.`,
  vision: `The Vision Statement has been inspired by the global infrastructure development needs of tomorrow, with the Customer as the central focus. It was developed after conducting a series of in-house workshops. Senior Leaders within the organization are actively involved in developing and maintaining an effective and efficient management system to disseminate the Vision across Varush Global Services Limited in order to achieve "Customer Delight".`,
  contact: {
    address: "No. 40 TOS Beson Crescent, Utako, Abuja, Nigeria.",
    website: "www.varushglobalservices.com",
  },
};

export const directors = [
  { name: "Yelwa Danjuma", role: "Director" },
  { name: "Zainab Ibrahim", role: "Director" },
];

export const management = [
  { role: "Managing Director / CEO", name: "Samuel Adegbe" },
  { role: "Executive Director, Operations", name: "Eze Ikechukwu" },
  { role: "GM, Business Development", name: "Tanimu Awal Baida" },
  { role: "Project Manager", name: "Udofia Obot Ekanem" },
  { role: "Site Manager", name: "Ahaguotu Kings" },
  { role: "Project Co-ordinator", name: "Ngozi Chukwuemeka" },
  { role: "Mechanical Engineering Lead", name: "Engr. Dimeji Robinson" },
  { role: "Electrical Engineering Lead", name: "Engr. Adeola Martins" },
  { role: "Health & Safety Lead", name: "Esther Philips" },
];

export const services = [
  {
    title: "Engineering & EPC",
    description:
      "Front-end engineering design, FEEDs, and conceptual studies that take a project from concept to a fully specified, buildable plan.",
    icon: "drafting",
  },
  {
    title: "Construction & Design/Build",
    description:
      "Full-service construction delivery, from installation and commissioning to long-term operation and asset maintenance.",
    icon: "crane",
  },
  {
    title: "Project & Program Management",
    description:
      "Contract administration, cost and schedule control, and field supervision delivering innovative, on-time, on-budget projects.",
    icon: "checklist",
  },
  {
    title: "Procurement",
    description:
      "Customized procurement solutions that deliver the right materials and services on time and at the best price.",
    icon: "supply",
  },
  {
    title: "Road Construction",
    description:
      "Roads, bridges, dams and jetties; excavation, kerbing and drainage; stone, block and asphalt surfacing, hand-laid or machine-laid.",
    icon: "road",
  },
  {
    title: "Rural Electrification",
    description:
      "Installation, maintenance and upgrading of electrical systems bringing modern, reliable power to growing communities.",
    icon: "bolt",
  },
  {
    title: "Agricultural Services",
    description:
      "End-to-end agricultural supply chain services, from seed development and soil testing to harvesting and trade logistics.",
    icon: "leaf",
  },
] as const;

type ProjectItem = {
  title: string;
  client: string;
};

export const projects: ProjectItem[] = [
  {
    title:
      "Construction of Primary Health Care Centre (Type-1) at Tasha, Tudun Wada LGA, Kano State",
    client: "National Primary Health Care Development Agency (NPHCDA)",
  },
  {
    title: "Supply of 600 Generators (T950) to Enugu State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 700 Generators (T2700) to Lagos State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 536 Sewing Machines to Cross River State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 151 Grinding Machines to Kebbi State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 48 Brick Making Machines to Lagos State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 48 Bajaj Tricycles to Lagos State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 234 Sewing Machines to Kebbi State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title: "Supply of 50 Tricycles to Kebbi State",
    client: "National Commission for Refugees, Migrants & IDPs",
  },
  {
    title:
      "Supply of 1,720 3-pupil desks and seats across 18 schools, Sumaila LGA, Kano State",
    client: "Sumaila Local Government (with MDGs CGS LG Track 2012)",
  },
  {
    title: "Procurement of 20 Compaq Computer Systems (Pentium IV) with accessories",
    client: "Dahaishi Freight (W.A.) Limited",
  },
  {
    title: "Development Partner for 250 housing units, Zamfara State",
    client: "Federal Ministry of Education (HATS Scheme)",
  },
];

export const clients = [
  "National Primary Health Care Development Agency (NPHCDA)",
  "National Commission for Refugees, Migrants and Internally Displaced Persons",
  "Federal Ministry of Education",
  "Sumaila Local Government, Kano State",
  "Dahaishi Freight (W.A.) Limited",
  "Adamawa State Government",
];

export const certifications = [
  {
    name: "Certificate of Incorporation",
    issuer: "Corporate Affairs Commission",
    detail: "RC 722798 · Issued 14th December, 2007",
  },
  {
    name: "Tax Clearance Certificate",
    issuer: "Federal Inland Revenue Service",
    detail: "TCC No. 225510332895 · Valid to 31 Dec 2025",
  },
  {
    name: "PenCom Clearance Certificate",
    issuer: "National Pension Commission",
    detail: "Compliant with statutory pension contributions",
  },
  {
    name: "ITF Certificate of Compliance",
    issuer: "Industrial Training Fund",
    detail: "2024 contribution compliant · Valid to 31 Dec 2025",
  },
  {
    name: "NSITF ECS Clearance Certificate",
    issuer: "Nigeria Social Insurance Trust Fund",
    detail: "Employees' Compensation Act compliant · Valid to 31 Dec 2025",
  },
  {
    name: "BPP Interim Registration Report",
    issuer: "Bureau of Public Procurement",
    detail: "Compliant: FIRS · PenCom · NSITF · ITF · Valid to 31 Dec 2025",
  },
];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "2007", label: "Year Founded" },
  { value: `${projects.length}+`, label: "Projects Delivered" },
  { value: "₦1.5bn+", label: "Construction Value" },
  { value: `${clients.length}+`, label: "Institutional Clients" },
];
