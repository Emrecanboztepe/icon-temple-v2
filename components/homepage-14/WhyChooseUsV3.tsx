import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WhyChooseUsV3Props {
  mainTitle?: string
  subTitle?: string
  box1Title?: string
  box1Desc?: string
  box2Title?: string
  box2Desc?: string
  box3Title?: string
  box3Desc?: string
  box4Title?: string
  box4Desc?: string
  box5Title?: string
  box5Desc?: string
}

const WhyChooseUsV3: FC<WhyChooseUsV3Props> = ({
  mainTitle = 'Yüksek Standartlı, Ayrıcalıklı Detaylar',
  subTitle = 'Modern Teknoloji ve kalitenin kusursuz uyumu.',
  box1Title = 'Zamansız Mimari Tasarım',
  box1Desc = 'Hem enerjinizi yansıtan hem de ruhunuzu dinlendiren, yıllara meydan okuyan modern mimari çizgiler.',
  box2Title = 'Dört Mevsim İdeal İklim',
  box2Desc = 'Yerden ısıtma ve gizli tesisatlı multi split inverter klima sistemi ile her mevsim, istediğiniz iklim.',
  box3Title = 'Hayatı Kolaylaştıran Teknoloji',
  box3Desc = 'Aydınlatmadan güvenliğe kadar tüm evinizi tek tuşla veya uzaktan, zahmetsizce yönetebilme özgürlüğü.',
  box4Title = 'Özgürlük ve Huzurun Dengesi',
  box4Desc = 'Dış dünyanın karmaşasını kapıda bırakan, mutlak sessizlik ve mahremiyet sağlayan birinci sınıf yalıtım teknolojisi.',
  box5Title = 'Eksiksiz Premium Donanım',
  box5Desc = 'Şık davetlerinize eşlik edecek tam donanımlı ankastre set ve uzun yıllar güvenle kullanacağınız birinci sınıf malzemeler.',
}) => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge"></RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 font-instrument italic max-sm:text-[28px]">
              {mainTitle}
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">{subTitle}</p>
          </TextAppearAnimation>
        </div>
        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">{box1Title}</h5>
              <p>{box1Desc}</p>
            </div>
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">{box2Title}</h5>
              <p>{box2Desc}</p>
            </div>
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">{box3Title}</h5>
              <p>{box3Desc}</p>
            </div>
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">{box4Title}</h5>
              <p>{box4Desc}</p>
            </RevealWrapper>
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">{box5Title}</h5>
              <p>{box5Desc}</p>
            </RevealWrapper>
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default WhyChooseUsV3