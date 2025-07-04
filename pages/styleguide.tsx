export default function Styleguide() {
  return (
    <div className="container mx-auto my-8 px-4 md:px-8">
      <h2 className="h2 font-sans mt-12 mb-6 uppercase">Typography</h2>
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

      <h2 className="h2 font-sans mt-12 mb-6 uppercase">Colors</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-dark-green"></span>
          <div>
            <pre className="[font-size:12px]">Dark Green</pre>
            <pre className="[font-size:12px]">#024834</pre>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-green"></span>
          <div>
            <pre className="[font-size:12px]">Green</pre>
            <pre className="[font-size:12px]">#85C441</pre>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-light-green"></span>
          <div>
            <pre className="[font-size:12px]">Light Green</pre>
            <pre className="[font-size:12px]">#CEE074</pre>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-pink"></span>
          <div>
            <pre className="[font-size:12px]">Pink</pre>
            <pre className="[font-size:12px]">#F7ACBB</pre>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-cream"></span>
          <div>
            <pre className="[font-size:12px]">Cream</pre>
            <pre className="[font-size:12px]">#FFF6EC</pre>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="rounded-full border w-12 h-12 flex bg-beige"></span>
          <div>
            <pre className="[font-size:12px]">Beige</pre>
            <pre className="[font-size:12px]">#EAE2CC</pre>
          </div>
        </div>
      </div>

      <h2 className="h2 font-sans mt-12 mb-6 uppercase">Buttons</h2>
      <div className="flex flex-col gap-4">
        <button type="button" className="button w-fit">Button</button>
        <button type="button" className="button-large w-[400px]">Button Large</button>
      </div>
    </div>
  )
}