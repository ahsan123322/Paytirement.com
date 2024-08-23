'use client'
import React from 'react'
import Link from 'next/link'
import SearchOption from './SearchOption'
import { useState } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
import { createPortal } from 'react-dom'

function ShowModal() {
  const [showSearch, setShowSearch] = useState(false)

  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <div>
      <button onClick={() => setShowSearch(!showSearch)} className="btn btn-navbar ">
        Sign up
      </button>
      {showSearch && createPortal(<SearchOption onClose={() => setShowSearch(false)} />, document.body)}
    </div>
  )
}

export default ShowModal
