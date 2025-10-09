export default function Card_Newswire({
  key,
  image_src,
  game,
  date,
  title,
}) {
  return (
    <>
      <div>
        <img src={image_src} alt=" " />
        <div className="flex flex-col">
          <div className="grid grid-cols-[auto_auto] gap-1 border-blue-200 border-2 text-sm">
            <div className="border-blue-200 border-2">{game}</div>
            <div className="text-gray-300 border-blue-200 border-2">{date}</div>
          </div>
          <div>{title}</div>
        </div>
      </div>
    </>
  );
}
