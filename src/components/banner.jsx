export default function Banner({ imageUrl, title, subtitle }) {
  return (
    <div
      className="w-full aspect-[3/2] sm:aspect-[16/7] bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-sm sm:text-lg mt-2">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
