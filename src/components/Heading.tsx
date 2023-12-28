export default function Heading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-12 px-4 lg:px-0">
      <div className="flex flex-col justify-between">
        <h1 className="text-6xl">FULED TO IMPACT</h1>
      </div>
      <div>
        <p className="text-red mb-4">
          MAYA, Inc. is a team comprised of the Nike, Jordan and Converse brands
          driven by a shared purpose to leave an enduring impact.
        </p>
        <p className="text-black/50">
          We’ve spent 50 years shifting big ideas into scaled, sustainable
          platforms that have changed our products and manufacturing process,
          fueled our design ethos, and championed our athlete community.
        </p>
      </div>
      <div className="w-5/6 h-2 bg-black"></div>
    </div>
  )
}
