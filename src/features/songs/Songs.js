/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle';

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

function Songs() {
  const playerRef = useRef(null);

  useEffect(() => {
    let init = false;
    if (!init && playerRef.current) {
      fetchAudio(playerRef.current);
    }
    return () => {
      init = true;
    };
  }, [playerRef.current]);

  return (
    <div className="flex flex-col justify-start items-start">
      <PageTitle>Songs</PageTitle>
      <div>
        <audio ref={playerRef} controls />
      </div>
    </div>
  );
}

export default Songs;
