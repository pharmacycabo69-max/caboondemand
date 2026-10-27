// Edit prices, phone numbers and copy here. Everything on the page reads from this file.
export const site = {
  name: "Cabo On Demand",
  url: "https://caboondemand.com",
  // Digits only, with country code, no "+". Used for wa.me links.
  whatsappNumber: "5216240000000",
  // Shown on the page and used for tel: links.
  phoneDisplay: "+52 624 000 0000",
  phoneTel: "+526240000000",
  description:
    "Pharmacy delivery, IV therapy and doctors at your villa in Los Cabos. Bilingual registered nurses and physicians, USD pricing up front.",
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  meta?: string;
  image: { src: string; alt: string };
  // Pre-filled WhatsApp message (without the "from ads" suffix, added automatically).
  message: string;
};

export const services: Service[] = [
  {
    id: "pharmacy",
    title: "Pharmacy Delivery",
    description:
      "OTC and prescription medicine from a bilingual pharmacy, delivered to your room.",
    price: "From $25 delivery",
    image: { src: "/photos/pharmacy.jpg", alt: "Courier handing a sealed pharmacy bag to a guest at a villa door in Los Cabos" },
    message: "Hi, I need medicine delivered",
  },
  {
    id: "iv",
    title: "IV Therapy & Hydration",
    description:
      "Hydration, hangover recovery, immunity and athletic recovery.",
    meta: "45–75 min",
    price: "From $129",
    image: { src: "/photos/iv-kit.jpg", alt: "Nurse holding a sealed IV kit with the Los Cabos coast behind" },
    message: "Hi, I need an IV",
  },
  {
    id: "group-iv",
    title: "Group IV",
    description:
      "A nurse at your villa for 4+ people, with per-person pricing.",
    price: "Message for a quote",
    image: { src: "/photos/visit-terrace.jpg", alt: "Nurse preparing IV supplies while a group of guests relaxes on a villa terrace" },
    message: "Hi, I'd like a quote for a Group IV",
  },
  {
    id: "doctor",
    title: "Doctor at Your Villa",
    description:
      "Evaluation, diagnosis and treatment at your location.",
    price: "From $200",
    image: { src: "/photos/doctor.jpg", alt: "Doctor with a stethoscope arriving at the door of a villa in Los Cabos" },
    message: "Hi, I need a doctor at my location",
  },
  {
    id: "video",
    title: "Video Consultation",
    description: "Talk to a doctor in minutes, from wherever you are.",
    price: "From $49",
    image: { src: "/photos/video-consult.jpg", alt: "Guest on a villa terrace having a video consultation with a doctor on a phone" },
    message: "Hi, I'd like a video consultation with a doctor",
  },
  {
    id: "labs",
    title: "Labs & Rapid Testing",
    description: "Lab work and rapid tests at your villa.",
    price: "From $59",
    image: { src: "/photos/labs.jpg", alt: "Nurse collecting a blood sample from a guest in a villa living room" },
    message: "Hi, I need labs or a rapid test",
  },
];

export const generalMessage = "Hi, I need help";

export const badges = [
  "20–60 min response",
  "7 days a week",
  "EN/ES",
  "No insurance paperwork",
];

export const audiences = [
  {
    title: "Visitors",
    text: "Don't let one bad night cut the trip short. Get treated where you're staying and get back to your vacation.",
  },
  {
    title: "Residents & retirees",
    text: "Ongoing care and medicine without the drive. We come to you, in English or Spanish.",
  },
];

export const steps = [
  { title: "Message us", text: "Tell us what you need on WhatsApp, in English or Spanish." },
  { title: "Get a price", text: "We confirm the service, arrival time and total in USD before anything starts." },
  { title: "We come to you", text: "A nurse, doctor or delivery arrives at your villa, hotel or yacht." },
  { title: "Feel better", text: "Pay by card or cash, and get follow-up instructions in writing." },
];

export const coverage = [
  "Cabo San Lucas",
  "San José del Cabo",
  "Tourist Corridor",
  "Los Cabos Airport",
  "Pedregal",
  "Diamante",
  "East Cape",
  "Yachts & marinas",
];

export const faqs = [
  {
    q: "How fast can you get to me?",
    a: "Most requests get a reply within 20–60 minutes, and in most of Cabo San Lucas, San José del Cabo and the Corridor we arrive usually within the hour. We confirm the arrival time before you commit.",
  },
  {
    q: "Do you take insurance?",
    a: "No. You pay a clear price in USD up front, so there is no insurance paperwork. We can provide a receipt you may submit to your insurer for reimbursement.",
  },
  {
    q: "Can I pay by card?",
    a: "Yes. We accept major credit and debit cards, as well as cash in USD or pesos.",
  },
  {
    q: "Do you speak English?",
    a: "Yes. Our nurses, physicians and pharmacy team are bilingual in English and Spanish.",
  },
  {
    q: "Can you bring my prescription medication?",
    a: "Yes. Send us the name of the medication or a photo of your prescription and we will confirm availability and price. Some medicines require a valid prescription, and our doctors can evaluate you if you need one.",
  },
  {
    q: "What about emergencies?",
    a: "We are not an emergency service. For chest pain, trouble breathing, severe bleeding, or any life-threatening situation, call 911 immediately.",
  },
];
