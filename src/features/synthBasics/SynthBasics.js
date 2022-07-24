import { useDispatch, useSelector } from 'react-redux';
import { sbChapters } from '../../support/synthBasics';
import { setChapter } from './synthBasicsSlice';

function SynthBasics() {
  const { chapter } = useSelector((state) => state.synthBasics);
  const dispatch = useDispatch();
  console.log(chapter);
  return (
    <div className="w-full flex-1">
      {sbChapters[chapter] ? (
        <div>
          <h2>{sbChapters[chapter].title}</h2>
          <span>{sbChapters[chapter].body}</span>
        </div>
      ) : null}
      <div className="flex flex-row justify-around items-center w-full px-4 my-2">
        {sbChapters[chapter - 1] ? (
          <button
            className="m-2 p-2 border-2 text-lg font-mono font-bold hover:underline rounded-md border-slate-400 hover:border-blue-400 active:border-green-500"
            type="button"
            onClick={() => dispatch(setChapter(chapter - 1))}
          >
            Previous Chapter
          </button>
        ) : null}
        {sbChapters[chapter + 1] ? (
          <button
            className="m-2 p-2 border-2 text-lg font-mono font-bold hover:underline rounded-md border-slate-400 hover:border-blue-400 active:border-green-500"
            type="button"
            onClick={() => dispatch(setChapter(chapter + 1))}
          >
            Next Chapter
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default SynthBasics;
