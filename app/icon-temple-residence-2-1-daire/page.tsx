import Didim from '@/components/homepage-26/Didim'
import HeroV27 from '@/components/homepage-26/HeroV27'
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
  title: '2+1 Daire Özellikleri - Icon Temple',
}

const IconTempleResidence21Daire = () => {
  return (
    <LayoutOne>
      <HeroV27 description="Sadece bir ev değil, denizin kokusunu içinize çekerken sevdiklerinizle büyüteceğiniz yepyeni bir yaşam ritüeli. Genişletilmiş iç mekanları, üst düzey akıllı donanımları ve zarif mimarisiyle 2+1 dairelerimiz; hikayesini Ege'nin huzuruyla yeniden yazmak ve kendine ait sıcak bir dünya kurmak isteyenlere eşsiz bir hissiyat vadediyor." />
      <VideoV2 />
      <AboutV15
        title="Turizmdeki 35 yılı aşkın kusursuz konaklama anlayışımızı, sizlere kalıcı bir tatil deneyimi sunmak için Icon Temple’a aktardık. "
        subTitle="Köklerimiz 1993’e, vizyonumuz yarına dayanıyor. Temple Grup güvencesiyle, Ege'nin en değerli lokasyonlarında sınırları kaldıran ve modern hayatın hızına ayak uyduran bir proje ile karşınızdayız."
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Daire
        title="Bir Arada Olmanın En Doğal, En Sıcak Hali: 2+1 Daire Deneyimi"
        paragraph1="Icon Temple'daki 2+1 daireler; Ege'nin dinginliğini, birlikte geçirilecek güzel zamanlar için tasarlanmış geniş yaşam alanlarıyla buluşturuyor. Sevdiklerinize şık sofralar hazırlayacağınız premium ankastre mutfağınızdan dört mevsim konfor sunan yerden ısıtmaya, akıllı ev otomasyonundan multi-split klima altyapısına kadar her detayı eksiksiz kurguladık."
        paragraph2="Altınkum'un eşsiz maviliğine sadece birkaç adım uzaktayken, kusursuz ses ve ısı yalıtımı sayesinde dış dünyanın karmaşasını geride bırakabileceğiniz, sadece sevdiklerinize ve kendinize odaklanacağınız dingin bir keyif ritüeli."
        features={[
          "Mavi Bayraklı Plaj: Denize sadece 30 Metre mesafede, Altınkum'un kalbinde.",
          "Şehir Merkezi: Didim merkezine ve alışveriş noktalarına yalnızca 3.5 km uzaklıkta.",
          "Huzurlu Sahil Yaşamı: Ailecek keyifli akşam yürüyüşleri yapabileceğiniz nezih mekanlara anında erişim.",
          "Antik Miras: Apollon Tapınağı ve tarihi gezi alanlarına dakikalar içinde ulaşım.",
        ]}
      />
      <WhyChooseUsV3
        mainTitle="Dokunduğunuz Her Detayda Hissedeceğiniz Güven"
        subTitle="Geçici trendler değil; Uzun yıllarınıza sorunsuz eşlik edecek kalıcı ve akılcı seçimler."
        box1Title="İkonik Mimari Tasarım"
        box1Desc="Hem enerjinizi yansıtan hem de ruhunuzu dinlendiren modern mimari çizgiler."
        box2Title="Dört Mevsim İdeal İklim"
        box2Desc="Yerden ısıtma ve gizli tesisatlı multi split inverter klima sistemi ile her mevsim, istediğiniz iklim."
        box3Title="Hayatı Kolaylaştıran Teknoloji"
        box3Desc="Aydınlatmadan güvenliğe kadar tüm evinizi tek tuşla veya uzaktan, zahmetsizce yönetebilme özgürlüğü."
        box4Title="Özgürlük ve Huzurun Dengesi"
        box4Desc="Dış dünyanın karmaşasını kapıda bırakan, mutlak sessizlik ve mahremiyet sağlayan birinci sınıf yalıtım teknolojisi."
        box5Title="Eksiksiz Premium Donanım"
        box5Desc="Şık davetlerinize eşlik edecek tam donanımlı ankastre set ve uzun yıllar güvenle kullanacağınız birinci sınıf malzemeler."
      />
      <OurWork />
      <Clients />
      <Didim />
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

export default IconTempleResidence21Daire
