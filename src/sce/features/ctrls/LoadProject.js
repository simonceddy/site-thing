import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadProjects } from '../../util/storage';

function LoadProject() {
  const [projects, setProjects] = useState([]);
  const { darkMode } = useSelector((state) => state.kernel);
  useEffect(() => {
    loadProjects()
      .then((data) => setProjects(Object.keys(data)))
      .catch(console.error);
  }, []);
  return (
    <div>
      {projects.map((name) => (
        <div
          key={`project-${name}-row`}
          className={`flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-300' : 'border-black'}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default LoadProject;
