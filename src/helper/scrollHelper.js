import { SCROLL_TO_DURATION } from '../constant/index.js'

export function getScrollProxyEl() {
  const canvas = document.querySelector('canvas')
  const target = canvas?.parentElement
  if (!target) return null
  return Array.from(target.children).find(
    (child) => child.tagName === 'DIV' && getComputedStyle(child).overflowY === 'auto',
  )
}

export function scrollToSection(id) {
  const target = document.getElementById(id)
  const el = getScrollProxyEl()
  if (!target || !el) return

  const rect = target.getBoundingClientRect()
  const scrollRange = el.scrollHeight - el.clientHeight
  const transformRange = scrollRange - el.clientHeight
  const rawDelta = transformRange > 0 ? rect.top * (scrollRange / transformRange) : rect.top

  const from = el.scrollTop
  const to = Math.max(0, Math.min(from + rawDelta, scrollRange))

  const duration = SCROLL_TO_DURATION
  const start = performance.now()

  function step(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    el.scrollTop = from + (to - from) * eased
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
