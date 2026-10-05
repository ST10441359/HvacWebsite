import {
  Wrench,
  Settings,
  ClipboardCheck,
  Building2,
  Flame,
  Truck,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Settings,
  ClipboardCheck,
  Building2,
  Flame,
  Truck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Wrench; // fallback if backend sends an unknown name
}