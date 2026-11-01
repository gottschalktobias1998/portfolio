type ContentPageProps = {
  eyebrow: string
  title: string
  description: string
}

export default function ContentPage({
  eyebrow,
  title,
  description,
}: ContentPageProps) {
  return (
    <section className="content-page">
      <p className="page-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </section>
  )
}