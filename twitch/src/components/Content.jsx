import React from 'react';
import Card from './Card'; 

export default function Content() {
  const cards = [
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
      title: "Just chatting",
      viewes: "335.3  of our viewers",
      tag1: "IRL (Real Life)"
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
      title: "Rust",
      viewes: "87.9 of our viewers",
      tag1: "First-person shooter",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
      title: "Special Events",
      viewes: "2.8 of our viewers",
      tag1: "IRL (Real Life)",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
      title: "League of Legends",
      viewes: "66.5 of our viewers",
      tag1: "Role-playing",
      tag2: "Strategy",
    },
    {
      image: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cc414737-1954-4a51-ac13-c13dbd67fc87.jpg",
      title: "Advertisement",
      viewes: "",
      doubleWidth: true,
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
      title: "Kings League",
      viewes: "429 of our viewers",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
      title: "Minecraft",
      viewes: "16.9 of our viewers",
      tag1: "Simulation",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
      title: "Fortnite",
      viewes: "39.2 of our viewers",
      tag1: "Shooter",
      tag2: "Role-playing"
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
      title: "Call of Duty: Warzone",
      viewes: "41.2 of our viewers",
      tag1: "First-person shooter",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg",
      title: "EA Sports FC 24",
      viewes: "11.7 of our viewers",
      tag1: "Simulation",
      tag2: "Sport",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
      title: "ELDEN RING",
      viewes: "63.2 of our viewers",
      tag1: "Role-playing",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
      title: "Grand Theft Auto V",
      viewes: "123.6 of our viewers",
      tag1: "First-person shooter",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
      title: "VALORANT",
      viewes: "20.7 of our viewers",
      tag1: "First-person shooter",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg",
      title: "Overwatch 2",
      viewes: "20.7  of our viewers",
      tag1: "First-person shooter",
    },
    {
      image: "https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg",
      title: "Dead by Daylight",
      viewes: "31.4 of our viewers",
      tag1: "Strategy",
      tag2: "Action",
    },{
      image: "https://static-cdn.jtvnw.net/ttv-boxart/18846_IGDB-285x380.jpg",
      title: "Garry's Mod",
      viewes: "974 spectators",
      tag1: "Simulation",
      tag2: "Indie game",
    },{
      image: "https://static-cdn.jtvnw.net/ttv-boxart/497057-285x380.jpg",
      title: "Destiny 2",
      viewes: "16.4 of our viewers",
      tag1: "First-person shooter",
      
    },{
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg",
      title: "IRL",
      viewes: "10.3 of our viewers",
      tag1: "IRL (Real Life)",
    },
  ];

  const hasDoubleWidth = cards.some(card => card.doubleWidth);

  return (
    <section className="col-span-1 row-span-1">
      <section className={`grid ${hasDoubleWidth ? 'grid-cols-5' : 'grid-cols-6'} gap-x-2 gap-y-4 pt-4 ml-10`}>
        {cards.map((card, index) => (
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            viewes={card.viewes}
            doubleWidth={card.doubleWidth} 
            tag1={card.tag1} 
            tag2={card.tag2} 
          />
        ))}
      </section>
    </section>
  );
}


