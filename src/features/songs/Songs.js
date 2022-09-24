/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import AudioPlayer from './AudioPlayer';
import PageTitle from '../../components/PageTitle';

/**
 * fetch audio and load to given audio element
 * @param {HTMLAudioElement} audioEl The current audio element
 * @param {string} filename the filename of the mp3
 */
function fetchAudio(audioEl, filename = 'on big event.mp3') {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', `http://localhost:3333/media/${filename}`, true);
  oReq.responseType = 'arraybuffer';

  function xor() {
    // convert arrayBuffer to regular Array
    const arr = oReq.response;
    let byteArray = new Uint8Array(arr);

    // obtain encryption key
    const key = byteArray[byteArray.length - 1];

    // use key to decrypt contents
    byteArray = byteArray.map((x) => x ^ key).map((x) => ~x);

    // restore key
    byteArray[byteArray.length - 1] = key;

    // convert byteArray to Blob
    const blob = new Blob([byteArray], { type: 'audio/mp3' });
    // create playable URL from Blob object
    const url = URL.createObjectURL(blob); // memory leak possible!

    audioEl.src = url;
    audioEl.load();
  }

  oReq.onload = (oEvent) => {
    xor();
  };
  oReq.send();
}

const songList = [
  { name: 'On Big Event', src: 'on big event.mp3' },
  { name: 'Looking For At', src: 'looking for at.mp3' },
];

function Songs() {
  const playerRef = useRef(null);

  // useEffect(() => {
  //   let init = false;
  //   if (!init && playerRef.current) {
  //     fetchAudio(playerRef.current);
  //   }
  //   return () => {
  //     init = true;
  //   };
  // }, [playerRef.current]);

  const getSong = ({ src }) => {
    if (playerRef.current) {
      fetchAudio(playerRef.current, src);
      // console.log('here');
    }
  };
  console.log(playerRef);
  return (
    <div className="flex flex-col justify-start items-start">
      <PageTitle>Songs</PageTitle>
      <div className="flex flex-col justify-start items-start">
        {songList.map(({ name, src }, idx) => (
          <button
            type="button"
            key={`load-button-${idx}-${src}`}
            onClick={() => getSong({ src })}
            className="p-2 m-2 font-mono font-bold text-lg border-2 rounded-md border-teal-500 hover:border-cyan-500 active:border-rose-500"
          >
            {name}
          </button>
        ))}
      </div>
      <div>
        <AudioPlayer ref={playerRef} />
      </div>
    </div>
  );
}

export default Songs;
