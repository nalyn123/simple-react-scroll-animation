import { useRef, useState, useEffect } from 'react'
import { classNames } from './utils/enum'
export const useLazyLoad = (props) => {
  const { animation, speed = 0.3, delay = 0, distance = 100 } = props || {}
  const [className, setClassName] = useState('')
  const [css, setCSS] = useState({
    '--speed': speed + 's',
    '--delay': delay + 's',
    '--distance': distance + 'px'
  })
  const ref = useRef(null)
  const visibility = useRef(false)

  useEffect(() => {
    window.addEventListener('load', init)

    return () => window.removeEventListener('load', init)
  }, [])

  const init = () => {
    if (!ref?.current) return

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
    const observer = new IntersectionObserver(async (entries) => {
      entries.forEach((entry) => {
        const target = entry?.target

        if (visibility?.current) return
        if (entry?.isIntersecting) {
          visibility.current = true

          const child = ref?.current?.children?.[0]
          if (child?.nodeName === 'IMG') {
            const img = new Image()
            img.src = child?.src
            img.onload = () => {
              doAnimation()
            }
          } else {
            doAnimation()
          }
        } else {
          setClassName('')
        }
      })
    }, option)

    observer.observe(ref?.current)
  }

  const doAnimation = () => {
    setCSS((prev) => ({
      ...prev,
      display: 'block'
    }))

    setTimeout(() => {
      setClassName(`${classNames.DEFAULT}--${animation || 'fadeIn'}`)
    }, 100)
  }
  return { ref, className, css }
}
