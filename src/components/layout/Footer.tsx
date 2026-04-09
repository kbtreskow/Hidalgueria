export function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--obsidian)',
        padding: '3rem clamp(2rem, 7vw, 9rem)',
        borderTop: '1px solid rgba(245,240,232,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          className="editorial"
          style={{
            fontSize: '1.125rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(245,240,232,0.4)',
            letterSpacing: '0.05em',
          }}
        >
          Hidalguería
        </span>

        <span
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 300,
            fontSize: '0.5625rem',
            letterSpacing: '0.2em',
            color: 'rgba(245,240,232,0.2)',
            textTransform: 'uppercase',
          }}
        >
          © {año} · Diseño interior de alta decoración · CDMX
        </span>
      </div>
    </footer>
  )
}
