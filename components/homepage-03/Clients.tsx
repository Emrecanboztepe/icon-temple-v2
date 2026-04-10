import { FC } from 'react'
import SectionHeader from '../shared/SectionHeader'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'

const company = [
  {
    id: 1,
    logo: '/images/icons/company/client-top-11.webp',
  },
  {
    id: 2,
    logo: '/images/icons/company/client-top-9.webp',
  },
  {
    id: 3,
    logo: '/images/icons/company/client-bottom-5.webp',
  },
  {
    id: 4,
    logo: '/images/icons/company/client-top-1.webp',
  },
  {
    id: 5,
    logo: '/images/icons/company/client-top-3.webp',
  },
  {
    id: 6,
    logo: '/images/icons/company/client-top-6.webp',
  },
  {
    id: 7,
    logo: '/images/icons/company/client-top-7.webp',
  },
]
const reverseCompanyRow1 = [
  {
    id: 1,
    logo: '/images/icons/company/client-bottom-11.webp',
  },
  {
    id: 2,
    logo: '/images/icons/company/client-bottom-12.webp',
  },
  {
    id: 3,
    logo: '/images/icons/company/client-bottom-13.webp',
  },
  {
    id: 4,
    logo: '/images/icons/company/client-bottom-14.webp',
  },
  {
    id: 5,
    logo: '/images/icons/company/client-bottom-15.webp',
  },
  {
    id: 6,
    logo: '/images/icons/company/client-bottom-16.webp',
  },
  {
    id: 7,
    logo: '/images/icons/company/client-bottom-17.webp',
  },
  {
    id: 8,
    logo: '/images/icons/company/client-bottom-1.webp',
  },
  {
    id: 9,
    logo: '/images/icons/company/client-bottom-2.webp',
  },
  {
    id: 10,
    logo: '/images/icons/company/client-bottom-3.webp',
  },
  {
    id: 11,
    logo: '/images/icons/company/client-bottom-4.webp',
  },
  {
    id: 12,
    logo: '/images/icons/company/client-bottom-5.webp',
  },
  {
    id: 13,
    logo: '/images/icons/company/client-bottom-6.webp',
  },
]

const reverseCompanyRow2 = [
  {
    id: 14,
    logo: '/images/icons/company/client-bottom-7.webp',
  },
  {
    id: 15,
    logo: '/images/icons/company/client-bottom-8.webp',
  },
  {
    id: 16,
    logo: '/images/icons/company/client-bottom-9.webp',
  },
  {
    id: 17,
    logo: '/images/icons/company/client-bottom-10.webp',
  },
  {
    id: 18,
    logo: '/images/icons/company/client-bottom-20.webp',
  },
  {
    id: 19,
    logo: '/images/icons/company/client-bottom-21.webp',
  },
  {
    id: 20,
    logo: '/images/icons/company/client-bottom-22.webp',
  },
  {
    id: 21,
    logo: '/images/icons/company/client-bottom-23.webp',
  },
  {
    id: 22,
    logo: '/images/icons/company/client-bottom-24.webp',
  },
  {
    id: 23,
    logo: '/images/icons/company/client-bottom-25.webp',
  },
  {
    id: 24,
    logo: '/images/icons/company/client-bottom-26.webp',
  },
  {
    id: 25,
    logo: '/images/icons/company/client-bottom-27.webp',
  },
]

interface ClientsProps {
  headingTitle?: string
  italicTitle?: string
  description?: string
}

const Clients: FC<ClientsProps> = ({
  headingTitle = 'Güvenli Gelecek',
  italicTitle = 'Güçlü Geçmiş',
  description = 'Bir İnşaat projesinin değerinin ve kalitesinin sadece lokasyon veya metrekare ile ilgili olmadığını çok iyi biliyoruz. Bizim için Değer ve Kalite kavramları, projenin temelinden başlayarak hayatınıza dokunacak tüm yapı malzemelerinde somutlaştırılmalıdır. Alt Kısımdaki Logolar mevcut ',
}) => {
  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            headingTitle={headingTitle}
            italicTitle={italicTitle}
            serviceHeadingColor
            description={description}
          />
        </div>
      </div>
      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center gap-x-16 py-8 md:gap-x-20">
            {company.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.logo}
                  alt="client Logo"
                  width={180}
                  height={80}
                  className="h-[80px] w-auto object-contain md:h-[100px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={60} pauseOnHover>
          <div className="flex items-center gap-x-12 py-5 md:gap-x-16">
            {reverseCompanyRow1.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.logo}
                  alt="client Logo"
                  width={140}
                  height={60}
                  className="h-[55px] w-auto object-contain md:h-[70px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={50} pauseOnHover direction="right">
          <div className="flex items-center gap-x-12 py-5 md:gap-x-16">
            {reverseCompanyRow2.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.logo}
                  alt="client Logo"
                  width={140}
                  height={60}
                  className="h-[55px] w-auto object-contain md:h-[70px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default Clients
