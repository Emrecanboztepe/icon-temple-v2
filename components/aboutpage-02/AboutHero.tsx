import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const AboutHero = () => {
  return (
    <section className="pb-14 pt-28 md:pb-20 md:pt-48 lg:pb-[100px] lg:pt-[200px]">
      <RevealWrapper className="container">
        <div className="flex flex-col items-center justify-between gap-x-10 gap-y-5 sm:flex-row md:gap-y-10">
          <h1 className="shrink-0 font-instrument text-5xl font-normal italic md:text-6xl lg:text-9xl xl:text-[156px] xl:leading-[1.1]">
            Hakkımızda
          </h1>

          <p className="w-full sm:w-3/5 lg:w-1/2">
           Temple Grup&apos;un 35 yıldır süregelen ve halihazırda bünyesinde hizmet veren 3 oteli ile devam eden turizm tecrübesi, kalıcı bir konaklama deneyiminin nasıl olması gerektiği hakkında derin bir analizi ortaya çıkardı. Ve böylece Icon Temple, benzersiz bir içgörü ile Didim&apos;in merkezinde, Altınkum Plajı&apos;na birkaç adım mesafede, sadece bir konut değil; estetik, teknoloji ve konforun harmanlandığı ayrıcalıklı bir yaşam kültürü sunmak için tasarlandı.
          </p>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default AboutHero
