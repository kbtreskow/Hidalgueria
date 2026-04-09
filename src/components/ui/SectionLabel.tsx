interface SectionLabelProps {
  text: string
  align?: 'left' | 'center' | 'right'
}

export function SectionLabel({ text, align = 'left' }: SectionLabelProps) {
  const alignClass = align === 'center'
    ? 'items-center'
    : align === 'right'
    ? 'items-end'
    : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <div className="rule-gold" />
      <span
        style={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 300,
          fontSize: '0.625rem',
          letterSpacing: '0.25em',
          color: 'var(--ash)',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
    </div>
  )
}
