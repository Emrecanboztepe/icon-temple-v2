import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface DaireProps {
  title?: string
  paragraph1?: string
  paragraph2?: string
  features?: string[]
}

const defaultFeatures = [
  "Mavi Bayraklı Plaj: Denize sadece 30 Metre mesafede, Altınkum'un kalbinde.",
  'Şehir Merkezi: Didim merkezine ve alışveriş noktalarına yalnızca 3.5 km uzaklıkta.',
  "Kesintisiz Sosyal Hayat: Altınkum'un popüler beach club'larına, trend mekanlarına veya canlı gece hayatına anında erişim.",
  'Antik Miras: Apollon Tapınağı ve tarihi gezi alanlarına dakikalar içinde ulaşım.',
]

const Daire: FC<DaireProps> = ({
  title = 'Akıllı, Pratik ve Tamamen Size Ait 1+1 Daire Deneyimi',
  paragraph1 = "Icon Temple'daki 1+1 daireler; modern hayatın hızını, deniz manzarasının dinginliğiyle dengeliyor. Valizinizi alıp anın tadını çıkarmaya başlamanız için premium ankastre mutfağınızdan yerden ısıtmaya, akıllı ev otomasyonundan multi-split klima altyapısına kadar her detayı eksiksiz kurguladık.",
  paragraph2 = "Altınkum'un kalbinde olmanın enerjisini yaşarken, kusursuz ses ve ısı yalıtımı sayesinde dilediğiniz an dış dünyayı sessize alabileceğiniz, keyfinizi özgürce yaşayabileceğiniz kompakt ama lüks bir yaşam ritüeli",
  features = defaultFeatures,
}) => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center md:mb-20">{title}</h2>
        </TextAppearAnimation>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-20">
          <RevealWrapper className="order-2 md:order-1">
            <p className="mb-6 text-base leading-relaxed md:text-lg">{paragraph1}</p>
            <p className="mb-8 text-base leading-relaxed md:text-lg">{paragraph2}</p>

            {/* Tikli Liste */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper className="order-1 md:order-2">
            <figure className="relative">
              <img
                src="/images/hero-img/about-hero-1.webp"
                alt="Daire Plan"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </figure>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Daire
