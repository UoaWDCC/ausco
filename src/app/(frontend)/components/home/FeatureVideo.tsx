"use client";

import { useRef, useEffect, useState } from "react";
import { inView } from "motion";
import { motion, useScroll, useTransform } from "motion/react";

declare global {
  interface Window {
    YT?: { Player: new (elementId: string, options: unknown) => unknown };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<{
    playVideo: () => void;
    seekTo: (seconds: number) => void;
  } | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [hasAutoplayed, setHasAutoplayed] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [maxScale, setMaxScale] = useState<number>(3);
  const [sectionHeight, setSectionHeight] = useState<string>("100vh");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  //scaling animation
  const unclampedScale = useTransform(scrollYProgress, [0.25, 0.45], [1, maxScale]);
  const scaleValue = useTransform(unclampedScale, (v) => Math.max(0.75, Math.min(maxScale, v)));

  //bg colour transform
  //when i use the css style vars it does not smoothly transition the colours
  const bgColor = useTransform(scrollYProgress, [0.2, 0.5], ["#c7d5e8", "#264c84"]);

  //header opacity animation
  const headerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0.2, 0.6], [0, -50]);

  //calc max scale + section height
  useEffect(() => {
    const compute = () => {
      if (!videoContainerRef.current) return;

      const width = videoContainerRef.current.offsetWidth;
      const height = videoContainerRef.current.offsetHeight;
      if (!width) return;

      //makes sure video can only scale to 90% of vw, between 1x and 1.6x scale
      const scale = Math.min(1.6, Math.max(1, (window.innerWidth * 0.8) / width));
      setMaxScale(scale);
      setSectionHeight(
        `${Math.max(height * scale + (showHeader ? 296 : 196), window.innerHeight)}px`,
      );
    };

    //video container observer recalcs scaling + height when resized
    const resizeObserver = new ResizeObserver(compute);
    if (videoContainerRef.current) {
      compute();
      resizeObserver.observe(videoContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [showHeader]);

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
        playerRef.current = new (window.YT.Player as unknown as new (
          elementId: string,
          options: unknown,
        ) => {
          playVideo: () => void;
          seekTo: (seconds: number) => void;
        })("youtube-player", {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 1,
            enablejsapi: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            cc_load_policy: 0,
            fs: 1,
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
            },
            //restarts video when finished
            onStateChange: (event: {
              data: number;
              target: { seekTo: (seconds: number) => void; playVideo: () => void };
            }) => {
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
  }, [videoId]);

  //autoplays when 60% of the video frame is in view
  useEffect(() => {
    if (!videoContainerRef.current) return;
    return inView(
      videoContainerRef.current,
      () => {
        if (playerReady && !hasAutoplayed && playerRef.current) {
          playerRef.current.playVideo();
          setHasAutoplayed(true);
        }
      },
      { amount: 0.6 },
    );
  }, [playerReady, hasAutoplayed]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-8 gap-8 w-full"
      style={{ backgroundColor: bgColor, minHeight: sectionHeight }}
    >
      <motion.h2
        className="w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-bold text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis relative z-20"
        style={{
          color: "var(--concertblue)",
          opacity: headerOpacity,
          top: "0px",
          y: headerY,
        }}
      >
        From our last concert
      </motion.h2>

      <motion.div
        ref={videoContainerRef}
        className="flex items-center justify-center mx-auto bg-black text-[1.2rem] relative overflow-hidden w-[180px] sm:w-[420px] md:w-[660px] max-w-[100vw] aspect-video z-10"
        style={{ scale: scaleValue }}
      >
        <div id="youtube-player" className="w-full h-full aspect-video" />
      </motion.div>
    </motion.section>
  );
};

export default PastConcert;
