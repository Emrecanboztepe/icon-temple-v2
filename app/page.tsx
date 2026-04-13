import HeroV7 from '@/components/homepage-07/HeroV7'
import AboutV15 from '@/components/homepage-16/AboutV15'
import Clients from '@/components/homepage-03/Clients'
import VideoV2 from '@/components/shared/VideoV2'
import OurWork from '@/components/homepage-07/OurWork'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import TeamGalleryHome from '@/components/homepage-07/TeamGalleryHome'
import LayoutOne from '@/components/shared/LayoutOne'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Didim’in Yeni İkonu: Icon Temple',
}

const Home = () => {
  return (
    <LayoutOne>
      <HeroV7 />
      <AboutV15
        badge="Hakkımızda "
        title="Turizmdeki Misafirperverlik Kültürümüzü, Yuva Sıcaklığıyla Yeniden Tanımladık."
        subTitle="35 yılı aşkın turizm tecrübemiz ve yenilikçi inşaat vizyonumuz, konforunuz için bir araya geldi. Altınkum sahilinde, denizin mavisine sadece 30 adım mesafede yükselen Icon Temple; üst segment işçiliği ikonik bir zarafetle buluşturan, lüks ve huzurun Didim'deki yeni odağı."
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Clients
        italicTitle="Güçlü Geçmiş"
        headingTitle="Güvenli Gelecek"
        description="Sektörün öncü markalarıyla iş birliği yaparak yüksek kalite standartlarını evinize taşıdık."
      />
      <VideoV2 />
      <OurWorkShowcase />
      <OurWork />
      <TeamGalleryHome />
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

export default Home
