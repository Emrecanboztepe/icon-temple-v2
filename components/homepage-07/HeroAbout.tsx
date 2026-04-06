'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3
        ref={revealRef}
        className="reveal-text-2 text-xl text-secondary dark:text-backgroundBody sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
       Kapıdan içeri adım attığınız an telaşların dışarıda kaldığı, her sabah denizin taze kokusuyla güne başlayacağınız, sevdikleriniz ile hoş anılar biriktireceğiniz bir hayata davetlisiniz. Icon Temple’ın karakteristik vizyonu, müstakbel ev sahiplerine bir ömür sürecek eşsiz tatil hissini vadediyor. 
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container"></RevealWrapper>
  )
}

export default HeroAbout
