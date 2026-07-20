import { theme } from 'antd'

export const COLORS = {
  primary: '#e7272d',
  bgContainer: '#ffffff',
  bgElevated: '#ffffff',
  bgLayout: '#f8f9fa',
  text: '#1a1a1a',
  textSecondary: '#5a5a5a',
  onDark: '#ffffff',
}

export const BORDER_RADIUS = 10

export const antdTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: COLORS.primary,
    colorBgContainer: COLORS.bgContainer,
    colorBgElevated: COLORS.bgElevated,
    colorBgLayout: COLORS.bgLayout,
    colorText: COLORS.text,
    colorTextSecondary: COLORS.textSecondary,
    borderRadius: BORDER_RADIUS,
  },
}
