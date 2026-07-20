import { useCallback } from 'react'
import { Typography, Button, Flex, Row, Col } from 'antd'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../helper/index.js'
import { FEATURES_DESCRIPTION, FEATURES_TITLE } from '../../constant/index.js'

const { Title, Paragraph } = Typography

export default function Features() {
  const handleViewMenu = useCallback(() => {
    scrollToSection('menu')
  }, [])

  return (
    <section id="features" className="section features-section">
      <Row gutter={[32, 32]} align="middle" style={{ width: '100%' }}>
        <Col xs={24} md={12}>
          <Flex justify="center" align="center" style={{ width: '100%' }}>
            <div className="features-pizza-placeholder" style={{ width: '280px', height: '280px', visibility: 'hidden' }} />
          </Flex>
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical gap="large" className="features-copy" style={{ marginLeft: 'auto', marginRight: 0 }}>
            <Title level={2} className="features-title">
              {FEATURES_TITLE}
            </Title>
            <Paragraph className="features-description">
              {FEATURES_DESCRIPTION}
            </Paragraph>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRight size={18} />}
              iconPlacement="end"
              onClick={handleViewMenu}
              className="features-btn"
            >
              View Menu
            </Button>
          </Flex>
        </Col>
      </Row>
    </section>
  )
}
