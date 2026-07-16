import {
  Building2,
  Calendar,
  Car,
  CheckCircle,
  ClipboardList,
  Clock,
  DollarSign,
  Factory,
  Grid3x3,
  GripVertical,
  GanttChartSquare,
  HardHat,
  HeartHandshake,
  Home,
  Layout,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Road,
  Shield,
  Square,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";

import type {
  NavItem,
  Service,
  Razon,
  Paso,
  Testimonial,
  FAQItem,
  GaleriaItem,
  ContactInfo,
  Valor,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICIOS: Service[] = [
  { icon: Truck, title: "Concreto premezclado" },
  { icon: Factory, title: "Pisos industriales" },
  { icon: Home, title: "Pisos para vivienda" },
  { icon: Square, title: "Losas y cubiertas" },
  { icon: GripVertical, title: "Columnas y trabes" },
  { icon: Grid3x3, title: "Cimentaciones y zapatas" },
  { icon: Layout, title: "Muros estructurales" },
  { icon: Car, title: "Estacionamientos" },
  { icon: Road, title: "Pavimentos, senderos y más" },
];

export const RAZONES: Razon[] = [
  {
    icon: Shield,
    title: "Calidad certificada",
    desc: "Concreto con resistencias certificadas para la durabilidad de tu obra.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    desc: "Llegamos a tu obra a la hora acordada. El tiempo es dinero y lo sabemos.",
  },
  {
    icon: MapPin,
    title: "Cobertura total",
    desc: "Mexicali, Valle, ejidos y zonas agrícolas. Donde estés, llegamos.",
  },
  {
    icon: HeartHandshake,
    title: "Asesoría personalizada",
    desc: "Te guiamos para elegir el concreto ideal para tu proyecto.",
  },
  {
    icon: DollarSign,
    title: "Precio justo",
    desc: "La mejor relación calidad-precio. Cotiza sin compromiso.",
  },
  {
    icon: Users,
    title: "Experiencia comprobada",
    desc: "Más de 3 años en la industria respaldan cada entrega.",
  },
];

export const PASOS: Paso[] = [
  {
    icon: ClipboardList,
    title: "Solicita tu cotización",
    desc: "Contáctanos por WhatsApp o el formulario y recibe tu cotización sin compromiso.",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Programamos la entrega",
    desc: "Coordinamos el día y horario para llevar el concreto a tu obra.",
    number: "02",
  },
  {
    icon: Factory,
    title: "Preparamos el concreto",
    desc: "Producimos el concreto con la resistencia que necesitas.",
    number: "03",
  },
  {
    icon: Truck,
    title: "Entregamos en obra",
    desc: "Camiones revolvedores puntuales descargan directo en tu obra.",
    number: "04",
  },
  {
    icon: CheckCircle,
    title: "Tu proyecto avanza",
    desc: "Con el material listo, tu construcción sigue sin retrasos.",
    number: "05",
  },
];

export const TESTIMONIOS: Testimonial[] = [
  {
    name: "Ing. Carlos Rivera",
    text: "TREVA nos ha suministrado concreto para varias obras residenciales. Siempre puntuales, buena calidad y el mejor precio de Mexicali.",
    rating: 5,
    initials: "CR",
    role: "Ingeniero Civil",
  },
  {
    name: "Arq. Laura Méndez",
    text: "Los recomiendo ampliamente. Su asesoría técnica me ayudó a elegir la resistencia ideal para mi proyecto. El concreto llegó a tiempo y en excelente estado.",
    rating: 5,
    initials: "LM",
    role: "Arquitecta",
  },
  {
    name: "Juan Carlos Navarro",
    text: "Para mi nave industrial necesitaba volumen grande y lo cumplieron sin problema. Personal profesional y entregas exactas.",
    rating: 5,
    initials: "JN",
    role: "Empresario",
  },
  {
    name: "María Elena Soto",
    text: "Excelente servicio para mi casa. Me explicaron todo el proceso, el concreto llegó puntual y los muchachos muy amables.",
    rating: 5,
    initials: "MS",
    role: "Cliente Residencial",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "No manejamos pedido mínimo, atendemos proyectos de cualquier tamaño.",
  },
  {
    q: "¿Entregan el mismo día?",
    a: "Sí, entregamos el mismo día.",
  },
  {
    q: "¿Qué resistencia de concreto manejan?",
    a: "Manejamos resistencias desde f'c 150 hasta f'c 250 kg/cm², según las necesidades de tu proyecto.",
  },
  {
    q: "¿Atienden obras grandes?",
    a: "Sí, tenemos capacidad para suministrar grandes volúmenes para desarrollos industriales, comerciales y residenciales.",
  },
  {
    q: "¿Cotizan sin compromiso?",
    a: "Por supuesto. Solicita tu cotización por WhatsApp, teléfono o formulario y te responderemos el mismo día.",
  },
  {
    q: "¿Dan factura?",
    a: "Sí, emitimos factura fiscal para todos nuestros pedidos.",
  },
];

export const GALERIA_ITEMS: GaleriaItem[] = [
  { icon: Truck, label: "Camiones revolvedores" },
  { icon: Building2, label: "Cimentaciones" },
  { icon: HardHat, label: "Descarga de concreto" },
  { icon: Grid3x3, label: "Losas" },
  { icon: GanttChartSquare, label: "Estructuras" },
  { icon: Warehouse, label: "Obras terminadas" },
  { icon: Wrench, label: "Instalaciones" },
];

export const VALORES: Valor[] = [
  { icon: Truck, label: "Entregas puntuales" },
  { icon: Shield, label: "Calidad garantizada" },
  { icon: Building2, label: "Todo tipo de obra" },
];

export const COBERTURA_ZONAS = [
  "Mexicali",
  "Valle de Mexicali",
  "Ejido Nuevo León",
  "Poblado López Portillo",
  "Ejido Nayarit",
  "Zonas agrícolas del Valle",
];

export const FOOTER_LINKS = [
  "Inicio",
  "Servicios",
  "Calculadora",
  "FAQ",
  "Contacto",
];
