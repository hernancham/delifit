import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer
      id='Contactanos'
      className='border-t-2 border-gray-300 bg-green-50 dark:border-green-700 dark:bg-gray-900 w-full'
    >
      <div className='px-6 py-8 sm:px-10'>
        <div className='flex flex-wrap justify-center sm:justify-between'>
          <div className='w-full sm:w-1/2 lg:w-1/3 mb-10 sm:mb-0 text-left'>
            <div className='mx-auto max-w-xs'>
              <p>
                <span className='text-sm uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                  Llamar a
                </span>
                <br />
                <Link
                  href='tel:917774573'
                  className='block text-xl font-bold text-gray-900 hover:text-green-600 dark:text-green-400 sm:text-2xl'
                >
                  {siteConfig.phone}
                </Link>
              </p>
              <br />
              <div className='mx-auto max-w-xs'>
                <p className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                  ENCUÉNTRANOS
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400 mb-2'>
                  Intersección de calle Destua con calle Zela
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400 mb-2'>
                  BULEVAR PLAZA, Tacna - Tacna - Perú
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  <Link
                    href='mailto:delifit.tacna@gmail.com'
                    className='text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300'
                  >
                    delifit.tacna@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-1/2 lg:w-1/3 mb-10 sm:mb-0 text-left'>
            <div className='mx-auto max-w-xs'>
              <p className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                HORARIO DE ATENCIÓN
              </p>
              <ul className='mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-400'>
                {siteConfig.availability.map((aval, i) => (
                  <li key={i}>{aval}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='w-full sm:w-1/2 lg:w-1/3 mb-10 sm:mb-0'>
            <div className='mx-auto max-w-xs text-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2828976403366!2d-70.25250708892564!3d-18.012070081391542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acfba7602a723%3A0xafcaeeb2e74d2269!2sDelifit%20Tacna!5e0!3m2!1ses!2spe!4v1720482199609!5m2!1ses!2spe'
                width={260}
                height={210}
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-8'>
          <SocialLinks GroupLink={siteConfig.social} />
        </div>

        <div className='mt-6 border-t-2 border-gray-400 dark:border-gray-700'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <ul className='flex flex-wrap gap-6 mt-4 text-xs justify-center'>
              <li>
                <Link
                  href='/terminos-y-condiciones'
                  className='text-gray-800 text-sm transition hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400'
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
            <p className='flex flex-wrap gap-4 mt-4 text-sm text-center justify-center text-gray-800 dark:text-gray-200 py-4'>
              &copy; {new Date().getFullYear()}. Delifitness E.I.R.L Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
