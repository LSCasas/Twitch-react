

export default function Aside() {
  // Lista de elementos del menú con imágenes, textos, subtextos y views
  const menuItems = [
    {
      img: "https://img.redbull.com/images/c_crop,x_1676,y_0,h_1310,w_1048/c_fill,w_900,h_1125/q_auto:low,f_auto/redbullcom/2023/2/22/qpctvo5nspffj1vgy3a1/red-bull-click-cabecera",
      text: "TheGrefg",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D0BAQEAI5rbGBnmHA/company-logo_200_200/0/1631328216033?e=2147483647&v=beta&t=AeiKyWus92JDY7U26bjlC63PEip3ez3s4A0WUe0DZ7s",
      text: "Mixwell",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2vFakVO0xetRvAPHBR45fby3Bli1x3N8Iw&s",
      text: "CrystalMolly",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://i.pinimg.com/474x/6e/c6/0a/6ec60aeb6fd42b6edd878d9b599ecca4.jpg",
      text: "rivers_gg",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd9bf69a-913f-4040-927e-cbdb21f40bd2-profile_image-300x300.png",
      text: "vickypalami",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/0a07aa83-9f97-48d6-b014-66ad4e1e7668-profile_image-300x300.png",
      text: "Staryuuki",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://pbs.twimg.com/media/EDuFtbdWkAExNpx.jpg:large",
      text: "elxokas",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TiIm6p_ZAtSFD-PCzwCGSQHgsjeD1MerHLmG6Bme-gmbx3Ohd9mKSCOEPhRMJCZg9pM&usqp=CAU",
      text: "zackrawrr",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://img.freepik.com/premium-vector/apex-gaming-character-mascot-design-revenant-mascot-logo-esport-gaming-team_268458-400.jpg",
      text: "REVENANT",
      subtext: "Rust",
      views: "11k",
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/f01671f9-b022-42eb-9be1-9756a9e17bb8-profile_image-300x300.png",
      text: "Nissaxter",
      subtext: "Rust",
      views: "11k",
    },
  ];

  return (
    <aside className="hidden md:block col-start-1 col-end-2 row-start-2 row-end-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="col-span-2 flex items-center justify-between">
          <span className="font-mono text-sm text-slate-50">
            RECOMMENDED CHANNELS
          </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fd52OTdb5jFQJ6ee5YU0G03WSgJPZMHAL0cselBQAWIAgPufFljELq4R32-FJKTmz3g&usqp=CAU"
            alt=""
            className="w-5 h-5"
          />
        </div>
        {menuItems.map((item, index) => (
          <div
            key={`menu-item-${item.text}`}
            className="p-2 rounded-2xl flex items-center gap-4 md:gap-2 hover:bg-gray-800"
            style={{
              gridRow: `${index + 2}`,
              gridColumn: "span 2",
              marginTop: "0.5px",
              marginBottom: "0.5px",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-20 h-20 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span>{item.text}</span>
              <span className="text-xs text-gray-400">{item.subtext}</span>
            </div>
            <span className="text-xs text-gray-400">{item.views}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}



