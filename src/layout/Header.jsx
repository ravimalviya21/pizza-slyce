import { Badge, Flex } from 'antd'
import { User, ShoppingCart } from 'lucide-react'
import { scrollToSection } from '../helper/index.js'
import { BRAND_NAME, CART_BADGE_COUNT, COLORS, NAV_LINKS } from '../constant/index.js'

export default function Header() {
  return (
    <header className="site-header">
      <Flex align="center" justify="space-between" className="site-header-inner">
        <button className="site-logo" onClick={() => scrollToSection('hero')}>
          {BRAND_NAME}
        </button>

        <nav className="site-nav">
          {NAV_LINKS.map(({ label, target }) => (
            <button key={label} className="site-nav-link" onClick={() => scrollToSection(target)}>
              {label}
            </button>
          ))}
        </nav>

        <Flex align="center" gap="middle">
          <button className="site-icon-button" aria-label="Account">
            <User size={18} />
          </button>
          <Badge count={CART_BADGE_COUNT} size="small" color={COLORS.primary}>
            <button className="site-icon-button" aria-label="Cart">
              <ShoppingCart size={18} />
            </button>
          </Badge>
        </Flex>
      </Flex>
    </header>
  )
}
