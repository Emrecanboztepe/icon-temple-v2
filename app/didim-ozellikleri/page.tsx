import AboutV7 from '@/components/homepage-09/AboutV7'
import HeroV9 from '@/components/homepage-09/HeroV9'
import PersonalProjects from '@/components/homepage-09/PersonalProjects'
import LayoutOne from '@/components/shared/LayoutOne'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'

export const metadata = {
  title: 'Didim - Icon Temple',
}
const page = () => {
  return (
    <LayoutOne>
      <HeroV9 />
      <AboutV7 />
      <PersonalProjects />
      <OurWorkShowcase
        headingBefore="Geleceği inşa eden"
        headingItalic="İlham Veren Yapılar"
        subtitle="Modern mimari ve üstün mühendislikle hayata geçirdiğimiz referans projelerimiz."
      />
      <CTA buttonText="ŞİMDİ İLETİŞİME GEÇİN">
        Yeni
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/yasami.webp' },
            { id: '2', img: '/images/agent/anı.webp' },
            { id: '3', img: '/images/agent/konfor.webp' },
          ]}
        />
        birlikte planlayalım.
      </CTA>
    </LayoutOne>
  )
}

export default page
