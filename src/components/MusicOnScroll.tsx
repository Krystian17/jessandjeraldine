import React, { useEffect, useRef, useState } from 'react';

const MusicOnScroll: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          window.removeEventListener('scroll', handleScroll);
        }).catch(e => {
          console.log('Playback prevented:', e);
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/path/to/your-music.mp3" loop />
      {!isPlaying && <p>Scroll to start background music 🎵</p>}
    </>
  );
};

export default MusicOnScroll;
