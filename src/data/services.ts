import type { LucideIcon } from 'lucide-react';
import { Wrench, ClipboardCheck, Settings, Building2, Flame, Truck } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'installations',
    title: 'New Installations',
    description: 'Professional installation of split, cassette, and multi-split systems for homes and businesses.',
    bullets: ['Site assessment and system sizing', 'Supply and installation of unit', 'Electrical and pipework connections', 'Testing, commissioning and user training'],
    icon: Wrench,
  },
  {
    id: 'repairs',
    title: 'Repairs & Fault Diagnosis',
    description: 'Fast fault diagnosis and repair on all major brands of air conditioning equipment.',
    bullets: ['Same-day emergency callouts available', 'All major brands serviced', 'Gas top-up and leak detection', 'PCB and component replacement'],
    icon: Settings,
  },
  {
    id: 'maintenance',
    title: 'Scheduled Maintenance',
    description: 'Keep your system efficient with our comprehensive service and maintenance plans.',
    bullets: ['Filter cleaning and replacement', 'Refrigerant level check', 'Coil and drain cleaning', 'Electrical safety inspection'],
    icon: ClipboardCheck,
  },
  {
    id: 'commercial',
    title: 'Commercial Solutions',
    description: 'Tailored solutions for offices, retail, hospitality, and industrial environments.',
    bullets: ['Multi-zone VRF systems', 'Cassette and concealed ducted units', 'BMS integration', '24/7 support agreements'],
    icon: Building2,
  },
  {
    id: 'gas',
    title: 'Gas Recharge',
    description: 'Certified F-Gas engineers carry out safe, compliant refrigerant top-ups and leak repairs.',
    bullets: ['R32 and R410A refrigerants', 'Leak detection survey', 'F-Gas certification provided', 'Pressure testing and compliance'],
    icon: Flame,
  },
  {
    id: 'relocation',
    title: 'System Relocation',
    description: 'Moving premises? We safely disconnect, transport, and reinstall your existing units.',
    bullets: ['Gas recovery and storage', 'Careful unit removal', 'New site survey', 'Full recommissioning'],
    icon: Truck,
  },
];