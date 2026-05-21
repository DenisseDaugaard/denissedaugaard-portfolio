
export default function HeroVideo({ children, poinerEvents = "" }) {
  return (
    <section
      id="home"
      className={`relative min-h-[92vh] w-full overflow-hidden ${poinerEvents}`}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/bg_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.92)_0%,rgba(8,12,18,0.72)_48%,rgba(8,12,18,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101114] to-transparent" />

      <div className="relative z-10 flex min-h-[92vh] items-center">
        {children}
      </div>
    </section>
  )
}
