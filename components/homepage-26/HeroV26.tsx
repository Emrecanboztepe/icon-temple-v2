import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import CtaImageSlider from '../shared/CtaImageSlider'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

interface HeroV26Props {
  description?: string
}

const HeroV26: FC<HeroV26Props> = ({ description }) => {
  const defaultDescription = "Sadece bir ev değil, denizin mavisine ve şehrin ritmine sadece 30 adım mesafede yepyeni bir yaşam ritüeli. Özel tasarımı, akıllı donanımları ve fonksiyonel mimarisiyle 1+1 dairelerimiz; hem genç ve dinamik ruhlara hem de ruhu her daim genç kalanlara eşsiz bir enerji vadediyor."

  return (
    <section className="relative overflow-hidden pb-14 pt-32 max-sm:px-3 md:pb-16 md:pt-44 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <RevealWrapper className="mx-auto max-w-screen-xl px-5">
        <div>
          <h3 className="text-center lg:text-left">
            Her Güne <br className="lg:hidden" />  Tatil Enerjisiyle Başlayın
          </h3>
          <h1 className="text-center font-normal lg:text-left xl:text-[96px] xl:leading-[1.3] xl:tracking-[-2.88px]">
            Icon Temple Residence
            <br />
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/yasam.webp' },
                { id: '2', img: '/images/agent/keyif.webp' },
                { id: '3', img: '/images/agent/ozgurluk.webp' },
                { id: '4', img: '/images/agent/didim.webp' },
              ]}
            />
            Ritüelin
          </h1>
        </div>

        <p className="mt-10 max-w-[770px] text-center font-normal max-lg:mx-auto lg:mx-0 lg:text-left">
          {description || defaultDescription}
        </p>
      </RevealWrapper>
    </section>
  )
}

export default HeroV26
