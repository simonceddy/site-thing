import SmlSqrLabelBtn from './SmlSqrLabelBtn';

function MuteButton({ onClick, active = false }) {
  return (
    <SmlSqrLabelBtn
      className={`${active ? 'bg-red-500 text-blue-900' : 'bg-slate-500 text-blue-800 dark:text-blue-400'}`}
      onClick={onClick}
    >
      M
    </SmlSqrLabelBtn>
  );
}

export default MuteButton;
