"use client";

import { useRef, useEffect, useState } from "react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const playerRef = useRef<any>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [playerReady, setPlayerReady] = useState(false);

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
            onReady: (event: any) => {
              setPlayerReady(true);
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

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-8 w-full"
      style={{
        background: "var(--headerblue)",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <h2
        className="w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-bold text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ color: "var(--navy)" }}
      >
        From our last concert
      </h2>

      <div className="flex items-center justify-center mx-auto w-[560px] h-[315px]">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[1.2rem] relative overflow-hidden">
          <div id="youtube-player" className="w-full h-full aspect-video" />
        </div>
      </div>
    </section>
  );
};

export default PastConcert;
