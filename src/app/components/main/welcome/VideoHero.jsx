
export default function HeroVideo({children, poinerEvents}) {
  return (
    <div className={`h-[13rem] w-full overflow-hidden ${poinerEvents}`}>
      <video
        className="absolute inset-0 lg:h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/bg_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  )
}