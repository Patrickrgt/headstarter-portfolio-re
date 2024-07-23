// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import BackgroundVideo from "next-video/background-video";
import Video from "next-video";
// Desktop Videos
import AikoVirtual from "/videos/AikoVirtual.mp4";
import HexTermina from "/videos/HexTermina.mp4";
import LunarCapital from "/videos/LunarCapital.mp4";
import MAdoll from "/videos/MAdoll.mp4";
import StarStore from "/videos/StarStore.mp4";
// Mobile Videos
import AikoMobile from "/videos/AikoVirtualMobile.mp4";
import HexTerminaMobile from "/videos/HexTerminaMobile.mp4";
import LunarMobile from "/videos/LunarMobile.mp4";
import MAdollMobile from "/videos/MAdollMobile.mp4";
import StarOdysseyMobile from "/videos/StarOdysseyMobile.mp4";
import shark from "../images/sharkLogo.png";
import sharkAnimate from "../images/sharkAnimate.png";
import sharkGlasses from "../images/sharkGlasses.png";
import sharkNo from "../images/sharkNo.png";
import aikoLogo from "../images/aikoLogo.png";
import hexLogo from "../images/hexLogo.png";
import lunarLogo from "../images/lunarLogo.png";
import madollLogo from "../images/madollLogo.png";
import starLogo from "../images/starLogo.png";

interface Investment {
  title: string;
  img: StaticImageData | string; // Adjust based on your actual usage
  handle: string;
  link: string;
}

interface PortfolioCategory {
  [category: string]: Investment[];
}

const mobileVideos = [
  AikoMobile,
  HexTerminaMobile,
  LunarMobile,
  MAdollMobile,
  StarOdysseyMobile,
];

const gifs = [
  "https://media1.tenor.com/m/rg03WC8qPfsAAAAC/transcend-uma-musume.gif",
  "https://media1.tenor.com/m/sADLGPNMg_0AAAAC/houseki-no-kuni-you.gif",
  "https://media1.tenor.com/m/BPCyd68InNUAAAAC/lucky-star.gif",
  "https://media.discordapp.net/attachments/1027551243784163428/1226945571152072766/fastestmambo.gif?ex=66a1389b&is=669fe71b&hm=39f0042e0972582f3a3bfb0e68c6a471a05891cbc7e0d2bb5a50788b5591f07f&",
  "https://media1.tenor.com/m/ueCNOXwU-jEAAAAd/uma-musume-uma-musume-pretty-derby.gif",
  "https://media1.tenor.com/m/FkELNdTE-l8AAAAd/frieren-sip-frieren.gif",
  "https://media1.tenor.com/m/GFZhyr3cNt4AAAAC/yt-lancey-foux.gif",
  "https://media1.tenor.com/m/1iR3eauyOvoAAAAd/matikane-tannh%C3%A4user-uma-musume.gif",
  "https://cdn.discordapp.com/attachments/427857154733768714/1246282327798321152/39845j912f8746hf9238645b2.gif?ex=66a1091d&is=669fb79d&hm=6118047e8e794f6ff465c8cfa58973692f74b45a350582b29cc36f956b286b7b&",
  "https://cdn.discordapp.com/attachments/427857154733768714/1248254430072279140/AecNoMoreCavity.gif?ex=66a0f587&is=669fa407&hm=19ac6720cca3fedf8aa76a235b1c9cddfb83ed17521a88625272620f6a498f59&",
];

const sharks = [shark, sharkAnimate, sharkGlasses, sharkNo];

const videos = [
  {
    link: "https://aikovirtualnfts.com/userpanel",
    video: AikoVirtual,
    title: "Aiko Userpanel",
    thumbnail: aikoLogo,
    gradient: ["#ef758d", "#4492FF", "#FFBE1C"],
    web: "#ef758d",
    desc: "Created an NFT dashboard as well as a custom Shopify for users to redeem their NFTs for physical goods. Was used for a 4 week campaign and over 100 users redeemed and were sent physical goods.",
  },
  {
    link: "https://hextermina.com/",
    video: HexTermina,
    title: "Hex Termina",
    thumbnail: hexLogo,
    gradient: ["#F2F8FF", "#5577F8", "#94B1FE"],
    web: "#ef758d",
    desc: "Streetwear brand with custom authenticity platform. Over 5,000+ emails signed up on newsletter and 80k+ in gross sales with around 1,000+ orders and 38k store sessions.",
  },
  {
    link: "https://lunarcapital.xyz/",
    video: LunarCapital,
    title: "Lunar Capital",
    thumbnail: lunarLogo,
    gradient: ["#121110", "#171514", "#4B4A48"],
    web: "#ef758d",
    desc: "Capital Firm portfolio, where I setup a small CMS for the client to be able to add their investors throughout their capital firm journey.",
  },
  {
    link: "https://www.madoll.art/",
    video: MAdoll,
    title: "MAdoll",
    thumbnail: madollLogo,
    gradient: ["#FF008E", "#FFDF85", "#FFB3DD"],
    web: "#ef758d",
    desc: "NFT collection I am working on with a Japanese artist that I absolutely admire her work. Her name is MAcci and we have met in Japan and she continues to deliver amazing quality artworks.",
  },
  {
    link: "https://starodysseystore.com/",
    video: StarStore,
    title: "Star Odyssey",
    thumbnail: starLogo,
    gradient: ["#fdfdfd", "#1e77f4", "#92e6fe"],
    web: "#ef758d",
    desc: "Official e-commerce platform for the artist Star Odyssey, who has over 39,000 followers on Instagram and produced music videos with over 1 million views on YouTube. Star Odyssey specializes in Y2K aesthetics, and his physical products reflect his character.",
  },
];

const Portfolio: NextPage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [animateOnce, setAnimateOnce] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [music, setMusic] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMobileNav = () => {
    setShowNav(!showNav);
  };

  const handleSelection = (videoId: number) => {
    setAnimate(false);
    setCurrentVideo(videoId);
    setShowNav(false);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  };

  useState(() => {
    setAnimateOnce(true);
    setAnimate(false);
    setCurrentVideo(0);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  });

  const handleAnimateOnce = () => {
    setAnimateOnce(false);
    setMusic(true);
  };

  useEffect(() => {
    if (music && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [music]);

  const handleMusic = () => {
    setMusic(!music);
  };

  function hexToRgb(hex: string) {
    let r = 0,
      g = 0,
      b = 0;
    // 3 digits
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `${r}, ${g}, ${b}`; // Return as `r, g, b` for use in `rgba`
  }

  return (
    <div>
      <Head>
        <title>shvrk.tsx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio ref={audioRef} src="/loopit.mp3" preload="auto" loop />
      <div
        className={`no-scroll lg:scroll absolute top-0 h-[calc(100dvh)] lg:h-screen w-full lg:relative`}
      >
        <div
          className={`${
            animateOnce ? "block" : "opacity-0 invisible"
          } transition-all ease-in-out absolute h-[100vh] w-full bg-[#fff] z-[2]`}
          onClick={() => handleAnimateOnce()}
        >
          <div className="absolute justify-center animate-fadeInSlowest z-10 flex w-full h-full">
            <img
              className="absolute top-[4vh] h-[10vh] w-[10vh]"
              alt="Patrick Torres"
              src={gifs[Math.floor(Math.random() * gifs.length)]}
            />
          </div>

          <div className="h-full w-full m-auto justify-center items-center flex flex-col lg:gap-[6vh]">
            <Image
              alt="Patrick Torres"
              src={sharks[Math.floor(Math.random() * sharks.length)]}
              className="h-[35vh] w-[35vh] animate-fadeIn"
            ></Image>
            <div className="text-[#6a7efb] underline z-10">
              logo character made by my friend{" "}
              <a href="https://www.instagram.com/syrctal/">@sryctal</a>{" "}
            </div>
            <div className="flex flex-col text-center animate-fadeInSlow">
              <span className="text-[5vh] font-bold animate-fadeInSlow whitespace-pre-line leading-none overflow-hidden text-[#174688]">
                a smol <span className="text-[#6a7efb] ">SHARK</span> {`that`}{" "}
                <span className="text-[#6a7efb] ">DELIVERS</span>{" "}
              </span>
              <span className="text-[3.5vh] font-bold animate-fadeInSlow whitespace-pre-line leading-none overflow-hidden text-[#ff3399]">
                {`custom ecommerce, capital firm portfolios, crypto projects`}
              </span>
              <span className="animate-fadeInSlowest text-[2.5vh] font-bold whitespace-pre-line leading-none overflow-hidden text-[#174688]/50">
                {`\n(and pizza 🍕)`}
              </span>
              <h1 className="text-[5vh] font-bold"></h1>
            </div>
          </div>
        </div>
        <div className="block lg:hidden rounded-full h-[80vh] w-[80vh] absolute z-[1] bg-[#fff]/90 bottom-0 -mb-[40vh] -ml-[-0vh]"></div>
        <div className="hidden lg:block rounded-full h-[100vh] w-[100vh] absolute z-[1] bg-[#fff]/80 -mt-[25vh] -ml-[25vh]"></div>
        <div
          className="absolute h-[calc(100dvh)] lg:h-screen w-full z-[1] background-size"
          style={{
            backgroundImage: `linear-gradient(10deg, rgba(${hexToRgb(
              videos[currentVideo].gradient[0]
            )}, 1), rgba(${hexToRgb(
              videos[currentVideo].gradient[1]
            )}, 1), rgba(${hexToRgb(videos[currentVideo].gradient[2])}, 0.25))`,
          }}
        >
          <div className="p-[2vh] flex flex-col w-full h-full justify-between items-end lg:items-start lg:justify-start lg:p-[4vh] absolute lg:block bottom-0 right-0 ">
            <div className="flex flex-col lg:flex-row overflow-hidden w-full justify-between items-end">
              <Image
                alt="Patrick Torres"
                className={`${
                  animate ? "animate-bounceCustom" : ""
                }  lg:block right-0 z-[1] transform lg:scale-x-[-1] h-[12vh] w-[12vh]`}
                src={shark}
                onClick={() => handleMobileNav()}
              ></Image>

              <div
                onClick={() => handleMusic()}
                className={`${
                  music ? "animate-spin" : "aniamte-ping"
                } bg-white rounded-full w-[6vh] right-0 h-[6vh]`}
              >
                <Image alt="Patrick Torres" src={sharkAnimate}></Image>{" "}
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-end lg:overflow-hidden">
              <div className="lg:hidden block ml-[4vh] w-[60%] text-right">
                <h1
                  className={`${
                    animate ? "lg:animate-fadeInMobile" : "opacity-0"
                  } hover:text-[#000000] transition-all ease-in-out text-[1.5vh] text-[#fff]`}
                >
                  {videos[currentVideo].desc}
                </h1>
              </div>
              <h1
                className={`${
                  animate ? "lg:animate-fadeIn" : "opacity-0"
                } hover:text-[#000000] transition-all ease-in-out w-[100%] text-right lg:text-left lg:w-[30%] p-0 text-[8vh] lg:text-[10vh] text-[#6a7efb] font-bold uppercase leading-none overflow-hidden`}
                style={{
                  color: `${
                    videos[currentVideo].gradient[Math.floor(Math.random() * 3)]
                  }`,
                }}
              >
                <a href={videos[currentVideo].link}>
                  {videos[currentVideo].title}
                </a>
              </h1>
            </div>

            <div className="hidden lg:block ml-[4vh] w-[30%]">
              <h1
                className={`${
                  animate ? "lg:animate-fadeInMobile" : "opacity-0"
                } hover:text-[#000000] transition-all ease-in-out text-[1.5vh] text-[#fff]`}
              >
                {videos[currentVideo].desc}
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full h-full`}
          style={{
            background: `rgba(${hexToRgb(videos[currentVideo].gradient[0])})`,
          }}
        ></div>
        <BackgroundVideo
          src={mobileVideos[currentVideo]}
          autoPlay
          muted
          loop
          playsInline
          className="h-[calc(100dvh)] lg:hidden block overflow-hidden absolute lg:right-[-50vh]"
        />

        <BackgroundVideo
          src={videos[currentVideo].video}
          autoPlay
          muted
          loop
          playsInline
          className=" h-[calc(100dvh)] hidden lg:block lg:h-[80%] overflow-hidden absolute lg:right-[-50vh]"
        />

        <div className="hidden lg:h-[20%] w-full lg:flex justify-evenly items-center lg:relative">
          {videos.map((video, id) => (
            <button
              key={id}
              onClick={() => handleSelection(id)}
              className={`group lg:relative selector border-x-[0.1vh] border-t-[0.1vh] border-[#919191] overflow-hidden aspect-square background-size animate-gradient h-[80%] rounded-[2vh] shadow-2xl z-[1] box-border`}
              style={{
                backgroundImage: `linear-gradient(125deg, ${video.gradient[0]}, ${video.gradient[1]}, ${video.gradient[2]})`,
              }}
            >
              <div className="group-hover:opacity-100 opacity-0 transition-all ease-in-out z-[1] absolute h-full w-full bg-[#ffffff]/40"></div>
              <Image
                className="h-[16vh] w-[16vh]"
                alt="Patrick Torres"
                src={video.thumbnail}
              ></Image>
            </button>
          ))}
          <span className="bg-gradient-to-b from-[#000]/80 to-[#000]/80 w-full h-full absolute z-[0]"></span>
          <span
            className="animate-gradient w-full h-full absolute z-[0]"
            style={{
              backgroundImage: `linear-gradient(125deg, rgba(${hexToRgb(
                videos[currentVideo].gradient[0]
              )}, 0.5), rgba(${hexToRgb(
                videos[currentVideo].gradient[1]
              )}, 0.5), rgba(${hexToRgb(
                videos[currentVideo].gradient[2]
              )}, 0.5))`,
            }}
          ></span>
        </div>

        <div
          className={`${
            animateOnce ? "opacity-0 invisible" : "opacity-1 visible"
          } ${
            showNav ? "opacity-1 visible" : "opacity-0 invisible"
          } p-[2vh] transition-all ease-in-out top-0 left-0 absolute w-fit lg:hidden flex flex-col justify-evenly items-center`}
        >
          {videos.map((video, id) => (
            <button
              key={id}
              onClick={() => handleSelection(id)}
              className={` aspect-square z-[3]`}
            >
              <Image
                className="h-[12vh] w-[12vh]"
                alt="Patrick Torres"
                src={video.thumbnail}
              ></Image>
            </button>
          ))}
          <span
            className="animate-gradient w-full h-full absolute z-[0] hidden lg:block"
            style={{
              backgroundImage: `linear-gradient(125deg, rgba(${hexToRgb(
                videos[currentVideo].gradient[0]
              )}, 0.5), rgba(${hexToRgb(
                videos[currentVideo].gradient[1]
              )}, 0.5), rgba(${hexToRgb(
                videos[currentVideo].gradient[2]
              )}, 0.5))`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
