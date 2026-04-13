import Didim from '@/components/homepage-26/Didim'
import HeroV26 from '@/components/homepage-26/HeroV26'
import Daire from '@/components/homepage-26/Daire'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import Clients from '@/components/homepage-03/Clients'
import AboutV15 from '@/components/homepage-16/AboutV15'
import CTA from '@/components/shared/CTA'
import OurWork from '@/components/homepage-07/OurWork'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import VideoV2 from '@/components/shared/VideoV2'

export const metadata = {
  title: '1+1 Daire Özellikleri - Icon Temple',
}

const IconTempleResidence11Daire = () => {
  return (
    <LayoutOne>
      <HeroV26 />
      <VideoV2 />
      <AboutV15
        title="Turizmdeki 35 yılı aşkın kusursuz konaklama anlayışımızı, sizlere kalıcı bir tatil deneyimi sunmak için Icon Temple’a aktardık."
        subTitle="Köklerimiz 1993’e, vizyonumuz yarına dayanıyor. Temple Grup güvencesiyle, Ege'nin en değerli lokasyonlarında sınırları kaldıran ve modern hayatın hızına ayak uyduran bir proje ile karşınızdayız"
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Daire />
      <WhyChooseUsV3 />
      <OurWork />
      <Clients />
      <Didim />
      <CTA buttonText="ŞİMDİ İLETİŞİME GEÇİN">
        Yeni
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/yasaminizi.webp' },
            { id: '2', img: '/images/agent/anilarinizi.webp' },
            { id: '3', img: '/images/agent/konforunuzu.webp' },
          ]}
        />
        birlikte planlayalım.
      </CTA>
    </LayoutOne>
  )
}

export default IconTempleResidence11Daire
