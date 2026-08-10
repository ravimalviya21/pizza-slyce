import Hero from '../../components/sections/Hero.jsx'
import Features from '../../components/sections/Features.jsx'
import Menu from '../../components/sections/Menu.jsx'
import Chef from '../../components/sections/Chef.jsx'
import Testimonials from '../../components/sections/Testimonials.jsx'
import Footer from '../../layout/Footer.jsx'

export default function Overlay({
  ref,
  setPizzaIndex,
  onCustomize,
}) {
  return (
    <div className="overlay" ref={ref}>
      <Hero setPizzaIndex={setPizzaIndex} />
      <Features />
      <Menu onCustomize={onCustomize} />
      <Chef />
      <Testimonials />
      <Footer />
    </div>
  )
}
