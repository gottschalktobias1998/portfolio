
type FooterProps = {
  variant?: 'default' | 'coming-soon'
}

export default function Footer({ variant = 'default' }: FooterProps) {
  if (variant === 'coming-soon') {
    return (
      <footer className="site-footer site-footer--coming-soon">
        <span>© {new Date().getFullYear()} Tobias Gottschalk</span>
        <span>Mit Sorgfalt entwickelt.</span>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Tobias Gottschalk</p>
    </footer>
  )
}
