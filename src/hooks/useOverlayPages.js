import { useEffect, useRef, useState } from 'react'
import { SCROLL_PAGES } from '../constant/index.js'
import { getScrollProxyEl } from '../helper/index.js'

const PAGE_EPSILON = 0.01

function getScrollRatio() {
  const el = getScrollProxyEl()
  if (!el) return 0
  const range = el.scrollHeight - el.clientHeight
  return range > 0 ? el.scrollTop / range : 0
}

export function useOverlayPages(contentEl) {
  const [pages, setPages] = useState(SCROLL_PAGES)
  const ratioRef = useRef(0)

  useEffect(() => {
    if (!contentEl) return

    const measure = () => {
      const contentHeight = contentEl.getBoundingClientRect().height
      const viewportHeight = window.innerHeight
      if (!contentHeight || !viewportHeight) return

      const next = Math.max(1, contentHeight / viewportHeight)
      setPages((current) => {
        if (Math.abs(current - next) < PAGE_EPSILON) return current
        ratioRef.current = getScrollRatio()
        return next
      })
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(contentEl)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [contentEl])

  useEffect(() => {
    const ratio = ratioRef.current
    if (!ratio) return

    const el = getScrollProxyEl()
    if (!el) return

    el.scrollTop = ratio * (el.scrollHeight - el.clientHeight)
  }, [pages])

  return pages
}
