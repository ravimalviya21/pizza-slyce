import { Typography, Row, Col, Card, Rate, Avatar, Flex } from 'antd'
import { Quote } from 'lucide-react'
import {
  TESTIMONIALS,
  TESTIMONIALS_SUBTITLE,
  TESTIMONIALS_TITLE,
} from '../../constant/index.js'

const { Title, Paragraph, Text } = Typography

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <Flex vertical align="center" gap="small" className="testimonials-intro">
        <Title level={2} className="section-heading">
          {TESTIMONIALS_TITLE}
        </Title>
        <Paragraph className="testimonials-subtitle">
          {TESTIMONIALS_SUBTITLE}
        </Paragraph>
      </Flex>

      <Row gutter={[24, 24]} className="testimonials-grid">
        {TESTIMONIALS.map(({ name, role, quote, rating }) => (
          <Col xs={24} md={8} key={name}>
            <Card className="testimonial-card" bordered={false}>
              <Quote size={24} className="testimonial-quote-icon" />
              <Paragraph className="testimonial-quote">{quote}</Paragraph>
              <Flex align="center" gap="small" className="testimonial-user">
                <Avatar size={40} className="testimonial-avatar">
                  {name.charAt(0)}
                </Avatar>
                <Flex vertical gap={0}>
                  <Text strong className="testimonial-name">{name}</Text>
                  <Text type="secondary" className="testimonial-role" style={{ fontSize: '0.8rem' }}>
                    {role}
                  </Text>
                  <Rate disabled defaultValue={rating} style={{ fontSize: 12, marginTop: 4 }} />
                </Flex>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
