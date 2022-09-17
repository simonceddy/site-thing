import StaticCircle from '../Shared/StaticCircle';

function LgCrclButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 flex text-black dark:text-white flex-col justify-between items-center lg-circle-button mx-1"
    >
      <StaticCircle diameter="40px" />
      <span>
        {children}
      </span>
    </button>
  );
}

export default LgCrclButton;
