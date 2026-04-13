import Didim from '@/components/homepage-26/Didim'
import HeroV28 from '@/components/homepage-26/HeroV28'
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
  title: '3+1 Dublex Daire Özellikleri - Icon Temple',
}

const IconTempleResidence31Daire = () => {
  return (
    <LayoutOne>
      <HeroV28 description="Sadece bir ev değil, kalabalık sofraların neşesini kişisel alanların dinginliğiyle dengeleyen yepyeni bir yaşam ritüeli. İki kata yayılan özgürlük hissi, üst düzey akıllı donanımları ve sınırları tamamen kaldıran panoramik manzarası ile 3+1 dublekslerimiz; hem sevdikleriyle hep bir arada olmak hem de dilediği an kendi huzuruna çekilmek isteyenlere Ege'nin en ferah halini vadediyor." />
      <VideoV2 />
      <AboutV15
        title="Turizmdeki 35 yılı aşkın kusursuz konaklama anlayışımızı, sizlere kalıcı bir tatil deneyimi sunmak için Icon Temple’a aktardık. "
        subTitle="Köklerimiz 1993’e, vizyonumuz yarına dayanıyor. Temple Grup güvencesiyle, Ege'nin en değerli lokasyonlarında sınırları kaldıran ve modern hayatın hızına ayak uyduran bir proje ile karşınızdayız."
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Daire
        title="İhtişamı ve Özgürlüğü Zirvede Yaşatan: 3+1 Dubleks Deneyimi"
        paragraph1="Icon Temple'daki 3+1 Dubleksler; iki kata yayılan hacmiyle hayatınızın en güzel anılarına eksiksiz bir sahne sunuyor. Siz sadece sevdiklerinizle geçireceğiniz zamana odaklanın diye; premium ankastre donanımlarından tüm eve yayılan kusursuz iklimlendirme altyapısına ve hayatı kolaylaştıran akıllı teknolojilere kadar her şeyi biz düşündük."
        paragraph2="Altınkum'un o canlı ritmine sadece adımlar uzaktayken; üst düzey ses yalıtımı ve panoramik ferahlığı sayesinde, ailenizdeki herkesin dilediği an kendi izole dünyasına çekilebileceği, nefes aldıran bir Didim ritüeli."
        features={[
          "Mavi Bayraklı Plaj: Denize sadece 30 Metre mesafede, Altınkum'un kalbinde.",
          "Şehir Merkezi: Didim merkezine ve alışveriş noktalarına yalnızca 3.5 km uzaklıkta.",
          "Ayrıcalıklı Ev Sahipliği: En özel misafirlerinizi ve uzun gece sohbetlerini Ege manzaranıza karşı yaşayın.",
          "Antik Miras: Apollon Tapınağı ve tarihi gezi alanlarına dakikalar içinde ulaşım.",
        ]}
      />
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

export default IconTempleResidence31Daire
