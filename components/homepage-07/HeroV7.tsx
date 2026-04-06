import RevealWrapper from '../animation/RevealWrapper'
import CtaImageSlider from '../shared/CtaImageSlider'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import SkewMarquee from '../shared/SkewMarquee'

const HeroV7 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 max-sm:px-3 md:pb-16 md:pt-44 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <RevealWrapper className="mx-auto max-w-screen-xl px-5">
        <div>
          <h3 className="text-center lg:text-left">
            Ege&apos;nin Kalbinde<br className="lg:hidden" /> Seçkin Bir Yaşam
          </h3>
          <h1 className="text-center font-normal lg:text-left xl:text-[96px] xl:leading-[1.3] xl:tracking-[-2.88px]">
            Icon Temple Residence
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/huzurun.jpg' },
                { id: '2', img: '/images/agent/nesenin.jpg' },
                { id: '3', img: '/images/agent/umut.jpg' },
                { id: '4', img: '/images/agent/sevgi.jpg' },
                { id: '5', img: '/images/agent/ses.jpg' },
                { id: '6', img: '/images/agent/hayal.jpg' },
              ]}
            />
            Ritüelin
          </h1>
        </div>

        <p className="mt-10 max-w-[770px] text-center font-normal max-lg:mx-auto lg:mx-0 lg:text-left">
          Didim Altınkum&apos;da yükselen Icon Temple; son teknoloji akıllı ev tasarımı, benzersiz mimarisi ve deniz manzarasıyla rezidans konforunda bir yaşam ritüeli sunuyor.
        </p>
      </RevealWrapper>

      <SkewMarquee />
    </section>
  )
}

export default HeroV7
