import { useCallback } from 'react'
import { Typography, Row, Col, Card, Button, Flex } from 'antd'
import { Plus, Minus } from 'lucide-react'
import { useQuantities } from '../../hooks/index.js'
import {
  COLORS,
  MENU_HERO_ITEM_ID,
  MENU_ITEMS,
  MENU_SUBTITLE,
  MENU_TITLE,
} from '../../constant/index.js'

const { Title, Paragraph, Text } = Typography

export default function Menu({ onCustomize }) {
  const { quantities, increment, decrement } = useQuantities()

  const handleAddToCart = useCallback((name, qty) => {
    console.log(`Added to cart: ${qty}x ${name}`)
  }, [])

  return (
    <section id="menu" className="section menu-section">
      <Flex vertical align="center" gap="small" className="menu-intro" style={{ marginBottom: 48 }}>
        <Title level={2} className="menu-title" style={{ textAlign: 'center', margin: 0 }}>
          {MENU_TITLE}
        </Title>
        <Paragraph className="menu-subtitle" style={{ textAlign: 'center', color: COLORS.textSecondary, maxWidth: 600 }}>
          {MENU_SUBTITLE}
        </Paragraph>
      </Flex>

      <Row gutter={[24, 24]} align="stretch">
        {MENU_ITEMS.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              className={`menu-card ${item.id === MENU_HERO_ITEM_ID ? 'menu-card-hero' : ''}`}
              hoverable
              onClick={() => onCustomize?.(item)}
            >
              <div className="menu-card-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="menu-card-3d-placeholder" />
                )}
              </div>
              <Title level={4} style={{ marginTop: 12, marginBottom: 8 }}>{item.name}</Title>
              <Paragraph type="secondary" className="menu-card-desc" style={{ minHeight: 66, fontSize: '0.9rem' }}>
                {item.description}
              </Paragraph>
              <div className="menu-card-footer">
                <Text strong className="menu-card-price">
                  ${(item.price * quantities[item.id]).toFixed(2)}
                </Text>
                <Flex align="center" gap={8} className="menu-card-actions">
                  <Flex align="center" className="quantity-selector" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="qty-btn qty-btn-minus"
                      onClick={() => decrement(item.id)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-val">{quantities[item.id]}</span>
                    <button
                      className="qty-btn qty-btn-plus"
                      onClick={() => increment(item.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </Flex>
                  <Button
                    type="primary"
                    className="add-now-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(item.name, quantities[item.id])
                    }}
                  >
                    Add Now
                  </Button>
                </Flex>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Flex justify="center" style={{ marginTop: 48 }}>
        <button className="view-more-menu-btn">
          View Our Menu
        </button>
      </Flex>
    </section>
  )
}
