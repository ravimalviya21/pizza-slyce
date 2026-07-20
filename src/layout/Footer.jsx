import { Typography, Row, Col, Flex } from 'antd'
import {
  BRAND_NAME,
  COLORS,
  FOOTER_ADDRESS,
  FOOTER_COPYRIGHT,
  FOOTER_HOURS,
  FOOTER_PHONE,
  QUICK_LINKS,
  SOCIALS,
} from '../constant/index.js'

const { Title, Text } = Typography

const onDark = { color: COLORS.onDark }
const headingStyle = { color: COLORS.onDark, margin: '0 0 16px 0' }

export default function Footer() {
  return (
    <footer id="footer" className="section footer-section">
      <Row gutter={[32, 32]} className="footer-columns">
        <Col xs={24} sm={12} md={6} className="footer-column">
          <Title level={4} className="footer-logo" style={headingStyle}>
            {BRAND_NAME}
          </Title>
          <Flex vertical gap="small">
            <Text style={onDark}>{FOOTER_ADDRESS}</Text>
            <Text style={{ ...onDark, fontWeight: 'bold' }}>{FOOTER_PHONE}</Text>
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6} className="footer-column">
          <Title level={5} className="footer-heading" style={headingStyle}>
            Opening hours
          </Title>
          <Flex vertical gap="small">
            {FOOTER_HOURS.map((hours) => (
              <Text key={hours} style={onDark}>{hours}</Text>
            ))}
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6} className="footer-column">
          <Title level={5} className="footer-heading" style={headingStyle}>
            Quick Links
          </Title>
          <Flex vertical gap="small">
            {QUICK_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer-link-new">
                {link.label}
              </a>
            ))}
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6} className="footer-column">
          <Title level={5} className="footer-heading" style={headingStyle}>
            Social Media
          </Title>
          <Flex vertical gap="small">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} className="footer-link-new">
                {social.label}
              </a>
            ))}
          </Flex>
        </Col>
      </Row>
      <Text className="footer-copyright-new" style={{ display: 'block', textAlign: 'center', marginTop: 40, color: COLORS.onDark, fontSize: '0.85rem' }}>
        {FOOTER_COPYRIGHT}
      </Text>
    </footer>
  )
}
