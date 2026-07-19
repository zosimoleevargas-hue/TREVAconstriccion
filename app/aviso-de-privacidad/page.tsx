import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | TREVA Concreto",
  description:
    "Aviso de privacidad de TREVA Concreto. Conoce cómo tratamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  robots: "noindex, follow",
};

export default function AvisoDePrivacidad() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary tracking-tight">
            TREVA
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-accent transition-colors"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </header>

      <main id="main-content" className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long" })}
          </p>

          <div className="max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Responsable del tratamiento de datos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {COMPANY.name} ({COMPANY.nameShort}), con domicilio en{" "}
                {COMPANY.address}, es responsable del tratamiento de sus datos
                personales conforme a la Ley Federal de Protección de Datos
                Personales en Posesión de los Particulares (LFPDPPP).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Datos personales recopilados
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para brindar nuestros servicios de venta y distribución de
                concreto premezclado, recopilamos las siguientes categorías de
                datos personales:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Nombre completo</li>
                <li>Número telefónico (fijo y/o móvil)</li>
                <li>Correo electrónico</li>
                <li>Dirección física (incluyendo ubicación de obra)</li>
                <li>
                  Datos de identificación fiscal (RFC, razón social) cuando
                  aplique facturación
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Finalidad del tratamiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los datos personales recopilados serán utilizados para las
                siguientes finalidades:
              </p>
              <h3 className="font-semibold text-gray-800 mb-2">
                Finalidades primarias (necesarias)
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Proporcionar cotizaciones de concreto premezclado</li>
                <li>Procesar y dar seguimiento a pedidos</li>
                <li>Coordinar horarios y lugares de entrega</li>
                <li>Emitir facturas y documentos fiscales</li>
                <li>Contactar al cliente sobre su pedido</li>
              </ul>
              <h3 className="font-semibold text-gray-800 mb-2">
                Finalidades secundarias (no necesarias)
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Envío de promociones y nuevos productos</li>
                <li>Encuestas de satisfacción</li>
                <li>Estadísticas internas de servicio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Protección de datos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Implementamos medidas de seguridad administrativas, técnicas y
                físicas para proteger sus datos personales contra daño, pérdida,
                alteración, destrucción o uso indebido. Sus datos personales
                serán almacenados únicamente durante el tiempo necesario para
                cumplir con las finalidades descritas en este aviso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Transferencia de datos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                No transferimos sus datos personales a terceros no vinculados
                sin su consentimiento, salvo las excepciones previstas en la
                LFPDPPP (obligaciones legales, autoridades competentes, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Derechos ARCO
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usted tiene derecho a ejercer sus Derechos ARCO (Acceso,
                Rectificación, Cancelación y Oposición) en cualquier momento.
                Para ello, puede enviar su solicitud a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-accent hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <strong>Teléfono:</strong>{" "}
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-accent hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Su solicitud deberá contener: nombre completo, datos de
                contacto, descripción clara de los datos a los que se refiere,
                y cualquier elemento que facilite la localización de los datos.
                Le responderemos en un plazo máximo de 20 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Revocación del consentimiento
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Usted puede revocar el consentimiento que nos haya otorgado
                para el tratamiento de sus datos personales en cualquier
                momento, mediante el envío de su solicitud a los canales de
                contacto indicados anteriormente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Cambios al aviso de privacidad
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar este aviso de privacidad
                en cualquier tiempo. Las modificaciones entrarán en vigor al
                momento de su publicación en esta misma URL. Recomendamos
                revisar periódicamente esta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contacto
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Si tiene dudas o preguntas sobre este aviso de privacidad, puede
                contactarnos a trav&eacute;s de:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-semibold text-gray-900">{COMPANY.name}</p>
                <p className="text-gray-600 text-sm mt-1">{COMPANY.address}</p>
                <p className="text-gray-600 text-sm mt-1">
                  Tel:{" "}
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-accent hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Email:{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-accent hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
