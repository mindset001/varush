export const company = {
  name: "Varush Global Services Limited",
  shortName: "Varush",
  rcNumber: "RC 722798",
  founded: "14th December, 2007",
  tagline: "Superior construction management, from concept to occupancy.",
  about: `Varush Global Services LTD is a full service construction management firm specializing in managing the entire infrastructure and building construction process from concept, design, and procurement, construction through closeout and client occupancy. Varush Global Services LTD projects have ranged in size from 300 million to over 800 billion naira. We have provided our professional services for projects totaling over 1.5 billion naira of construction value. Varush is most proud of an unparalleled reputation for client service, dedication, successful project delivery, and integrity of staff.`,
  mission: `The Varush mission is to provide superior construction management services. This objective is accomplished through a broad range of 'value added' services that represent and protect clients during every phase of a project, from planning and design, to procurement and construction, to start-up and operation, and ultimately to the occupancy of the new facility.`,
  vision: `The Vision Statement has been inspired by the global infrastructure development needs of tomorrow, with the Customer as the central focus. It was developed after conducting a series of in-house workshops. Senior Leaders within the organization are actively involved in developing and maintaining an effective and efficient management system to disseminate the Vision across Varush Global Services Limited in order to achieve "Customer Delight".`,
  contact: {
    address: "No. 40 TOS Beson Crescent, Utako, Abuja, Nigeria.",
    website: "www.varushglobalservices.com",
  },
};

export const services = [
  {
    title: "Engineering Design",
    description:
      "Front-end engineering and design services that shape every project from concept through to a fully specified, buildable plan.",
    icon: "drafting",
  },
  {
    title: "Construction",
    description:
      "End-to-end construction delivery, covering installation, commissioning, and asset maintenance across infrastructure and building projects.",
    icon: "crane",
  },
  {
    title: "Project Management",
    description:
      "Planning, procurement, and on-site coordination that protects clients through every phase of a project, from start-up to occupancy.",
    icon: "checklist",
  },
  {
    title: "General Supplies & Merchandise",
    description:
      "Reliable procurement and supply of equipment, machinery, and general merchandise for government and institutional clients.",
    icon: "supply",
  },
] as const;

export const projects = [
  "Construction of Primary Health Care Center (Type-1) at Tasha in Tundun Wada LGA of Kano State",
  "Contract for the supply of Generators (T950) to Enugu State",
  "Contract for the supply of Generators (T2700) to Lagos State",
  "Contract for the supply of Sewing Machines to Cross River State",
  "Contract for the supply of Grinding Machines to Kebbi State",
  "Contract for the supply of Brick Making Machines to Lagos State",
  "Contract for the supply of Bajaj Tricycles to Lagos State",
  "Contract for the supply of Sewing Machines to Kebbi State",
  "Contract for the supply of Generators (T950) to Enugu State",
  "Development Partner in the building of 250 housing units in Zamfara State",
  "Supply of desks and seats to Sumaila Local Government in collaboration with MDGs",
  "Procurement of computer systems with accessories",
];

export const clients = [
  "National Primary Health Care Development Agency (NPHCDA)",
  "National Commission for Refugees, Migrants and Internally Displaced Persons",
  "Federal Ministry of Education (Office of the Honourable Minister of State), Federal Secretariat Complex, Abuja",
  "Kano State LGA (Sumaila LGA)",
  "Dahasi Freight Limited",
];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
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
