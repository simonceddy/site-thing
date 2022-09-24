/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, forwardRef, useState } from 'react';
import {
  CgPlayButton as PlayIcon,
  CgPlayPause as PauseIcon,
  CgRepeat as LoopIcon,
} from 'react-icons/cg';
import PlayerButton from '../../components/Songs/PlayerButton';
import PlayerControls from '../../components/Songs/PlayerControls';

const AudioPlayer = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  // console.log(ref);
  useEffect(() => {
    let init = false;
    if (!init && ref.current) {
      // console.log('here');
      ref.current.addEventListener('loadeddata', () => {
        // console.log('here');
        ref.current.play();
      });
      ref.current.addEventListener('play', () => {
        setIsPlaying(true);
      });
      ref.current.addEventListener('pause', () => {
        setIsPlaying(false);
      });
      ref.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    return () => {
      init = true;
    };
  });

  const setPlaying = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
    }
  };

  const setVolume = (e) => {
    if (ref.current) ref.current.volume = Number(e.target.value);
  };

  const setLoop = () => {
    if (ref.current) {
      ref.current.loop = !ref.current.loop;
      setIsLooping((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <audio
        {...props}
        ref={ref}
        controls
        className="p-2 rounded-md"
      />
      <PlayerControls>
        <PlayerButton
          disabled={ref.current === null || ref.current.readyState === 0}
          onClick={setPlaying}
          toggled={isPlaying}
        >
          {isPlaying ? (
            <PauseIcon size={50} />
          ) : (
            <PlayIcon size={50} />
          )}
        </PlayerButton>
        <PlayerButton
          toggled={isLooping}
          onClick={setLoop}
        >
          <LoopIcon size={50} />
        </PlayerButton>
      </PlayerControls>
    </div>
  );
});

export default AudioPlayer;
