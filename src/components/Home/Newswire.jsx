import Card_Newswire from "../Common/Card_Newswire";

export default function Newswire() {
  const contents = [
    {
      id: "01",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
    {
      id: "02",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
    {
      id: "03",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
    {
      id: "04",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
    {
      id: "05",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
    {
      id: "06",
      image_src: "assets/Newswire_Suzume.png",
      game: "GTA Online",
      date: "September 25, 2025",
      title: "Secure The New Spy Shots Livery for the Overflod Suzume",
    },
  ];
  return (
    <>
      <article>
        <div>Newswire</div>
        <div className="grid grid-cols-3 gap-4">
          {contents.map((item) => {
            return (
              <>
                <Card_Newswire
                  key={item.id}
                  image_src={item.image_src}
                  game={item.game}
                  date={item.date}
                  title={item.title}
                />
              </>
            );
          })}
        </div>
      </article>
    </>
  );
}
