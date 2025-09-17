"use client";

import { useRef, useEffect, useState } from "react";
import { inView } from "motion";
import { motion, useScroll, useTransform } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [hasAutoplayed, setHasAutoplayed] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  //track section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scaleValue = useTransform(scrollYProgress, [0.2, 0.5], [1, 2.5]);

  //bg colour transform
  //when i use the css style vars it does not smoothly transition the colours
  const bgColor = useTransform(scrollYProgress, [0.2, 0.5], ["#c7d5e8", "#264c84"]);

  //hide or show header based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowHeader(latest < 0.2);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Fetch YouTube video ID from API
  useEffect(() => {
    fetch("/api/Videos")
      .then((res) => res.json())
      .then((data) => {
        if (data.docs && data.docs.length > 0) {
          const video = data.docs[0];
          const match = video.youtubeUrl.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
          setVideoId(match ? match[1] : null);
        }
      });
  }, []);

  // YouTube Player API
  useEffect(() => {
    if (!videoId) return;

    function createPlayerWhenReady() {
      if (window.YT && window.YT.Player) {
        if (playerRef.current) return;
        playerRef.current = new window.YT.Player("youtube-player", {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            enablejsapi: 1,
            mute: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            cc_load_policy: 0,
            fs: 0,
          },
          events: {
            //checks if mute state is correct
            onReady: (event: any) => {
              if (isMuted) event.target.mute();
              else event.target.unMute();
              setPlayerReady(true);
            },
            //restarts video when finished
            onStateChange: (event: any) => {
              if (event.data === 0) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            },
          },
        });
      } else {
        setTimeout(createPlayerWhenReady, 100);
      }
    }

    if (window.YT && window.YT.Player) {
      createPlayerWhenReady();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = createPlayerWhenReady;
    }
  }, [videoId, isMuted]);

  //autoplays when 60% of the video frame is in view
  useEffect(() => {
    if (!videoContainerRef.current) return;

    const videoContainer = videoContainerRef.current;

    //call youtube api for playback
    const stopInView = inView(
      videoContainer,
      () => {
        if (playerReady && !hasAutoplayed && playerRef.current) {
          playerRef.current.playVideo();
          setHasAutoplayed(true);
        }
      },
      {
        amount: 0.6,
      },
    );

    //stop playing/cleanup
    return () => {
      stopInView();
    };
  }, [playerReady, hasAutoplayed]);

  const handleMute = () => {
    const player = playerRef.current;
    if (!player) return;

    setIsMuted((wasMuted) => {
      const isNowMuted = !wasMuted;
      if (isNowMuted) player.mute();
      else player.unMute();
      return isNowMuted;
    });
  };

  //conditional icon for mute
  const Icon = isMuted ? VolumeX : Volume2;

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-8 gap-8 w-full"
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
      }}
    >
      {/*section header, disappears with scroll*/}
      <h2
        className={`w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-bold text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis  ${
          showHeader ? "block" : "hidden"
        }`}
        style={{ color: "var(--concertblue)" }}
      >
        From our last concert
      </h2>

      {/*motion container for video with dynamic scroll-based scaling effect*/}
      <motion.div
        ref={videoContainerRef}
        className="flex items-center justify-center mx-auto bg-black text-[1.2rem] relative overflow-hidden w-[660px] h-[315px]"
        style={{
          scale: scaleValue,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div id="youtube-player" className="w-full h-full aspect-video"></div>

        {/*mute button appears when hovered*/}
        <button
          type="button"
          onClick={handleMute}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-250 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "transparent" }}
        >
          <span className="rounded-full bg-black/50 p-2">
            <Icon className="w-7 h-7 text-[var(--blue)]" />
          </span>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default PastConcert;
