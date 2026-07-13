export const COMPANY = {
  name: "TREVA Concreto",
  nameShort: "TREVA",
  phone: "+52 686 306 2340",
  phoneRaw: "526863062340",
  whatsappUrl: "https://wa.me/526863062340",
  email: "ventas@trevaconcreto.com",
  address: "Poblado López Portillo, Valle de Mexicali, B.C.",
  instagram: "trevaconstruccionesyconcreto",
  hours: "Lun - Sáb: 7:00 - 15:00",
  schedule: "Mo-Sa 07:00-15:00",
  description:
    "Venta y distribución de concreto premezclado de alta calidad en Mexicali y Valle de Mexicali. Residencial, comercial, industrial y agrícola.",
  shortDescription:
    "Venta y distribución de concreto premezclado en Mexicali y Valle de Mexicali.",
} as const;

export const WHATSAPP_MESSAGE = {
  cotizacion: (data: {
    nombre?: string;
    telefono?: string;
    mensaje?: string;
    largo?: string;
    ancho?: string;
    espesor?: string;
    resultado?: string;
  }) => {
    if (data.largo) {
      return `Hola TREVA, quiero cotizar concreto:\n\nLargo: ${data.largo} m\nAncho: ${data.ancho} m\nEspesor: ${data.espesor} cm\nTotal: ${data.resultado} m³\n\n¿Me pueden dar el precio?`;
    }
    return `Hola TREVA, soy ${data.nombre}.\n\nTel: ${data.telefono}\n\n${data.mensaje}`;
  },
} as const;
