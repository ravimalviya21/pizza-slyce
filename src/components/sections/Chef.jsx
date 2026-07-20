import { Typography, Flex, Row, Col } from 'antd'
import {
  CHEF_DESCRIPTION,
  CHEF_IMAGE,
  CHEF_IMAGE_ALT,
  CHEF_TITLE,
} from '../../constant/index.js'

const { Title, Paragraph } = Typography

export default function Chef() {
  return (
    <section id="chef" className="section chef-section">
      <Row gutter={[48, 32]} align="center">
        <Col xs={24} md={12}>
          <div className="chef-image-container">
            <img src={CHEF_IMAGE} alt={CHEF_IMAGE_ALT} className="chef-image" />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical gap="medium" className="chef-copy">
            <Title level={2} className="chef-title">
              {CHEF_TITLE}
            </Title>
            <Paragraph className="chef-description">
              {CHEF_DESCRIPTION}
            </Paragraph>
            <button className="chef-learn-more-btn">
              Learn More
            </button>
          </Flex>
        </Col>
      </Row>
    </section>
  )
}
