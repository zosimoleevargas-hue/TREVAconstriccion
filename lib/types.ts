import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
}

export interface Razon {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Paso {
  icon: LucideIcon;
  title: string;
  desc: string;
  number: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  initials: string;
  role: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface GaleriaItem {
  icon: LucideIcon;
  label: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface Valor {
  icon: LucideIcon;
  label: string;
}

export interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  badge?: string;
  center?: boolean;
  dark?: boolean;
}

export interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}
