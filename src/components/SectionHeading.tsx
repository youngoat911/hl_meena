export default function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-10">
      <span aria-hidden className="mb-4 block h-1 w-14 rounded-full bg-gold" />
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl">{children}</h2>
    </div>
  )
}
