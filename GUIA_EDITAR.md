# Guía para editar TREVA Concreto

Tu sitio está en: **https://treva-concreto.vercel.app**

## Cómo editar textos

Cada sección está en un archivo separado dentro de `components/`:

| Sección | Archivo |
|---------|---------|
| Hero (inicio) | `components/Hero.tsx` |
| Servicios | `components/Servicios.tsx` |
| Proceso | `components/Proceso.tsx` |
| Testimonios | `components/Testimonios.tsx` |
| FAQ | `components/Faq.tsx` |
| Footer | `components/Footer.tsx` |
| Información general | `app/layout.tsx` |

**Ejemplo:** Para cambiar el título del Hero, abre `components/Hero.tsx`, busca el texto entre `<h1>` y `</h1>`, y cámbialo.

## Cómo cambiar fotos

La galería actualmente usa íconos. Para poner fotos reales:

1. Sube tus fotos a una carpeta `public/imagenes/` dentro del proyecto
2. En `components/Galeria.tsx`, cambia los `<Icon>` por `<Image>` de Next.js:

```tsx
import Image from "next/image";
// luego en cada item:
<Image src="/imagenes/tu-foto.jpg" alt="descripción" fill className="object-cover" />
```

O puedes usar URLs de fotos que ya estén en internet.

## Cómo cambiar teléfono/WhatsApp

Está en varios archivos. Búscalos con "6863062340":

- `components/WhatsAppButton.tsx`
- `components/Hero.tsx`
- `components/Calculadora.tsx`
- `components/Contacto.tsx`
- `components/Footer.tsx`
- `app/layout.tsx`

## Cómo cambiar precios

Los precios NO están en el sitio. La calculadora solo calcula m³ y envía la cotización por WhatsApp. Para cambiar el mensaje que envía, edita `components/Calculadora.tsx`.

## Cómo cambiar el mapa

El mapa está en `components/Cobertura.tsx`. Es un embed de Google Maps apuntando a Valle de Mexicali. Para cambiarlo:

1. Ve a Google Maps, busca tu dirección
2. Click en "Compartir" → "Insertar un mapa"
3. Copia el código `<iframe>` y pégalo en lugar del actual

## Actualizar el sitio después de cambios

1. Abre una terminal en la carpeta del proyecto
2. Ejecuta: `npm run build` (verifica que no haya errores)
3. Ejecuta: `vercel --prod` (despliega los cambios)

## Contacto técnico

Pídele a la persona que te hizo el sitio que haga los cambios, o si quieres aprender, empieza con cambios pequeños de texto.
