import { useCallback } from 'react'
import { Typography, Button, Flex } from 'antd'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { scrollToSection } from '../../helper/index.js'
import { usePizzaCarousel } from '../../hooks/index.js'
import { HERO_INGREDIENTS, HERO_SUBTITLE, HERO_TITLE } from '../../constant/index.js'

const { Title, Paragraph } = Typography

export default function Hero({ setPizzaIndex }) {
  const handleViewMenu = useCallback(() => {
    scrollToSection('menu')
  }, [])

  const { prev: handlePrev, next: handleNext } = usePizzaCarousel(setPizzaIndex)

  return (
    <section id="hero" className="section hero-section">
      {HERO_INGREDIENTS.map(({ emoji, top, left }, i) => (
        <span key={i} className="hero-ingredient" style={{ top, left }}>
          {emoji}
        </span>
      ))}

      <Flex vertical align="center" gap="middle" className="hero-copy">
        <Title className="hero-title">{HERO_TITLE}</Title>
        <Paragraph className="hero-subtitle">{HERO_SUBTITLE}</Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<ArrowRight size={18} />}
          iconPlacement="end"
          onClick={handleViewMenu}
        >
          View Our Menu
        </Button>
      </Flex>

      <div className="hero-pizza-placeholder" style={{ width: '450px', height: '450px', visibility: 'hidden', marginTop: 40 }} />

      <button
        className="hero-carousel-arrow hero-carousel-arrow-left"
        aria-label="Previous Pizza"
        onClick={handlePrev}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        className="hero-carousel-arrow hero-carousel-arrow-right"
        aria-label="Next Pizza"
        onClick={handleNext}
      >
        <ChevronRight size={22} />
      </button>
    </section>
  )
}
