import { useEffect, useState } from 'react'

const App = () => {
  const [shortcut, setShortcut] = useState('')
  useEffect(() => {
    const handleKeydown = (ev: globalThis.KeyboardEvent): any => {
      console.log(ev)
      let keys: string[] = []
      if (ev.ctrlKey) {
        keys.push('CTRL')
      }

      if (ev.shiftKey) {
        keys.push('SHIFT')
      }

      if (ev.altKey) {
        keys.push('ALT')
      }

      if (ev.key !== 'Control' && ev.key !== 'Alt' && ev.key !== 'Shift') {
        keys.push(ev.key.toUpperCase())
      }
      const shortcut = keys.join(' + ')
      switch (shortcut) {
        default: {
          setShortcut(shortcut)
          ev.preventDefault()
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)

    window.addEventListener('pagehide', (event) => {
      event.preventDefault()
    })

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <div>
      <p>
        Short cut: <strong>{shortcut}</strong>
      </p>
      <ul>
        <li>
          <code>CTRL + ALT + R</code>
        </li>
        <li>
          <code>CTRL + ALT + P</code>
        </li>
      </ul>
    </div>
  )
}

export default App
