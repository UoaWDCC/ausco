"use client";

import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const playerRef = useRef<any>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true); //
  const [youtubeUrl, setYoutubeUrl] = useState<string | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [boxWidth, setBoxWidth] = useState(560);
  const [boxHeight, setBoxHeight] = useState(315);

  // Fetch YouTube URL from Payload Videos collection
  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) {
          const video = data.docs[0];
          setYoutubeUrl(video.youtubeUrl);
          const match = video.youtubeUrl.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
          setVideoId(match ? match[1] : null);
        }
      });
  }, []);

  // Parallax effect (for color)
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      let ratio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      ratio = Math.max(0, Math.min(1, ratio));
      setScrollRatio(ratio);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Intersection Observer for autoplay and expand
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Responsive video box size (SSR-safe)
  useEffect(() => {
    function updateSize() {
      if (inView && typeof window !== "undefined") {
        setBoxWidth(window.innerWidth);
        setBoxHeight(window.innerHeight);
      } else {
        setBoxWidth(560);
        setBoxHeight(315);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [inView]);

  // Color interpolation
  function interpolateColor(hex1: string, hex2: string, factor: number) {
    const c1 = hex1.match(/\w\w/g)!.map(x => parseInt(x, 16));
    const c2 = hex2.match(/\w\w/g)!.map(x => parseInt(x, 16));
    const result = c1.map((v, i) => Math.round(v + (c2[i] - v) * factor));
    return `#${result.map(x => x.toString(16).padStart(2, "0")).join("")}`;
  }
  const bgColor = interpolateColor("c7d5e8", "2451a6", scrollRatio);

  // YouTube Player API
  useEffect(() => {
    if (!videoId) return;

    function createPlayerWhenReady() {
      if (window.YT && window.YT.Player) {
        if (playerRef.current) return;
        playerRef.current = new window.YT.Player("youtube-player", {
          videoId: videoId,
          playerVars: {
            autoplay: inView ? 1 : 0,
            controls: 0,
            enablejsapi: 1,
            mute: 1, 
          },
          events: {
            onReady: (event: any) => {
              setPlayerReady(true);
              if (!isMuted) event.target.unMute();
              if (inView) event.target.playVideo();
            },
          },
        });
      } else {
        setTimeout(createPlayerWhenReady, 100); // Try again in 100ms
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
    // eslint-disable-next-line
  }, [videoId, inView, isMuted]);

  // Autoplay/pause when in view
  useEffect(() => {
    if (playerRef.current && playerReady) {
      if (inView) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [inView, playerReady]);

  // Mute/unmute handler
  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (playerRef.current) {
        if (next) {
          playerRef.current.mute();
        } else {
          playerRef.current.unMute();
        }
      }
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[60vh] py-8 transition-colors duration-500 w-full"
      style={{ background: bgColor }}
    >
      <h2 className="w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-extrabold text-[#2451a6] text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
        From our last concert
      </h2>
      <div
        className="flex items-center justify-center mx-auto transition-all duration-500 w-full"
        style={{
          width: inView ? "100vw" : boxWidth,
          height: inView ? "100vh" : boxHeight,
          maxWidth: "100vw",
          maxHeight: "100vh",
        }}
      >
        <div
          className="w-full h-full bg-[#b0b9c6] flex items-center justify-center text-[#555] text-[1.2rem] rounded-lg transition-all duration-500 relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            id="youtube-player"
            className="w-full h-full rounded-lg aspect-video"
            style={{ background: "#000" }}
          />
          {hovered && (
            <button
              onClick={handleToggleMute}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2451a6] border-none rounded-full p-2 cursor-pointer z-20 flex items-center justify-center shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX color="#fff" size={28} />
              ) : (
                <Volume2 color="#fff" size={28} />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PastConcert;