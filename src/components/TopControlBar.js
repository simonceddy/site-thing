import LgCircleNavlink from './Interactive/LgCircleNavlink';
import LgCrclButton from './Interactive/LgCrclButton';
import MultiStateToggle from './Interactive/MultiStateToggle';

const controlItems = [
  {
    to: '/',
    label: 'Home',
    end: true
  },
  {
    to: '/audio',
    label: 'audio',
    end: true
  },
  {
    to: '/dev',
    label: 'dev',
    end: true
  },
  {
    to: '/music-system',
    label: '????',
    end: true
  },
  {
    Component: () => (
      <MultiStateToggle
        onChange={console.log}
        states={8}
      >
        Oi!
      </MultiStateToggle>
    )
  }
];

function TopControlBar() {
  return (
    <div className="top-control-bar flex flex-row justify-start items-center p-1 bg-slate-300 dark:bg-stone-700 rounded navbar">
      {controlItems.map((c, idx) => {
        if (c.Component) return <c.Component data={c} key={`${idx}-control`} />;
        if (c.to) {
          return (
            <LgCircleNavlink key={`${idx}-control`} to={c.to} end={c.end === true}>
              {c.label}
            </LgCircleNavlink>
          );
        }
        return (
          <LgCrclButton key={`${idx}-control`} onClick={c.onClick || null}>
            {c.label}
          </LgCrclButton>
        );
      })}
    </div>
  );
}

export default TopControlBar;
