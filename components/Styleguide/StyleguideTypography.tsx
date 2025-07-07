export default function StyleguideTypography() {
  return (
    <div className="flex flex-col gap-8 pt-12">
      <h2 className="h2 uppercase">Typography</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="h1">
              Right way to share it
            </p>
            <p className="text-body">H1</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="h2">
              Right way to share it
            </p>
            <p className="text-body">H2</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="h3">
              Right way to share it
            </p>
            <p className="text-body">H3</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="h4">
              Right way to share it
            </p>
            <p className="text-body">H4</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="h5">
              Right way to share it
            </p>
            <p className="text-body">H5</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="h6">
              Right way to share it
            </p>
            <p className="text-body">H6</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-body-large">
              Right way to share it
            </p>
            <p className="text-body">Text Body Large</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body">
              Right way to share it
            </p>
            <p className="text-body">Text Body</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-small">
              Right way to share it
            </p>
            <p className="text-body">Text Body Small</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-button">
              Right way to share it
            </p>
            <p className="text-body">Text Button</p>
          </div>
        </div>
      </div>
    </div>
  )
}