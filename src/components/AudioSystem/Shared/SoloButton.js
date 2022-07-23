import SmlSqrLabelBtn from './SmlSqrLabelBtn';

function SoloButton({ onClick, active = false }) {
  return (
    <SmlSqrLabelBtn
      className={`${active ? 'bg-yellow-400 text-blue-900' : 'bg-slate-500 text-blue-800 dark:text-blue-300'}`}
      onClick={onClick}
    >
      S
    </SmlSqrLabelBtn>
  );
}

export default SoloButton;
