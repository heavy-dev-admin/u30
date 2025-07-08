export default function StyleguideColor() {
  return (
    <>
      <h2 className="h2 mt-12 mb-6 uppercase">Colors</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-dark-green" />
          <div>
            <pre className="text-xs">Dark Green</pre>
            <pre className="text-xs">#024834</pre>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-green" />
          <div>
            <pre className="text-xs">Green</pre>
            <pre className="text-xs">#85C441</pre>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-light-green" />
          <div>
            <pre className="text-xs">Light Green</pre>
            <pre className="text-xs">#CEE074</pre>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-pink" />
          <div>
            <pre className="text-xs">Pink</pre>
            <pre className="text-xs">#F7ACBB</pre>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-cream" />
          <div>
            <pre className="text-xs">Cream</pre>
            <pre className="text-xs">#FFF6EC</pre>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border w-12 h-12 flex bg-beige" />
          <div>
            <pre className="text-xs">Beige</pre>
            <pre className="text-xs">#EAE2CC</pre>
          </div>
        </div>
      </div>
    </>
  )
}
