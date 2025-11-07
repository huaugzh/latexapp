import React, { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import lessons from './lessons'

export default function App() {
  const [latex, setLatex] = useState(lessons[0].content)
  const [selected, setSelected] = useState(lessons[0].id)
  const [error, setError] = useState(null)

  function pickLesson(id) {
    const l = lessons.find(x => x.id === id)
    if (l) {
      setSelected(id)
      setLatex(l.content)
    }
  }

  function pickLesson(id) {
    const l = lessons.find(x => x.id === id)
    if (l) {
      setSelected(id)
      setLatex(l.content)
      setError(null)
    }
  }

  function renderPreview() {
    try {
      // 如果是完整文件，顯示為純文字
      if (latex.includes('\\documentclass') || latex.includes('\\begin{document}')) {
        return <pre className="latex-raw">{latex}</pre>
      }
      // 否則使用 BlockMath 渲染
      return <BlockMath math={latex} errorColor="#cc0000" />
    } catch (err) {
      return <div className="error">{err.message}</div>
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>課程</h2>
        <ul>
          {lessons.map(l => (
            <li 
              key={l.id} 
              className={selected === l.id ? 'active' : ''} 
              onClick={() => pickLesson(l.id)}
            >
              {l.title}
            </li>
          ))}
        </ul>
        <div className="templates">
          <h3>範本</h3>
          <button onClick={() => setLatex('\\frac{a}{b} = c')}>分數</button>
          <button onClick={() => setLatex('\\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}')}>級數</button>
          <button onClick={() => setLatex('E = mc^2')}>愛因斯坦</button>
        </div>
      </aside>

      <main className="main">
        <section className="editor">
          <h2>編輯</h2>
          <textarea 
            value={latex} 
            onChange={e => {
              setLatex(e.target.value)
              setError(null)
            }}
            placeholder="在此輸入 LaTeX 公式..."
          />
        </section>

        <section className="preview">
          <h2>預覽</h2>
          <div className="preview-box">
            {error ? (
              <div className="error">{error}</div>
            ) : (
              renderPreview()
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
