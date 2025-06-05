
export default function Layout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
