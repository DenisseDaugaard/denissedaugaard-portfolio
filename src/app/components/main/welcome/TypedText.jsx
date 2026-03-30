"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypedText() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello there  &#128075; !", "My name is <strong>Denisse</strong> and I'm a Web Developer."],
      typeSpeed: 30,
      fadeOut: true,
      cursorChar: '',
    })

    return () => {
      typed.destroy() // cleanup
    }
  }, [])

  return (
    <span ref={el} style={{ fontFamily: "var(--font-roboto-mono)" }} className="fadeup auto-type text-5xl"></span>
  )
}