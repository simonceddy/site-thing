import { NavLink } from 'react-router-dom';

function NavbarLink({ to, children }) {
  return (
    <NavLink
      end
      to={to}
      className="flex navbar-link flex-row justify-start items-center hover:underline p-1 md:w-11/12 my-1 md:mx-1 md:my-0.5 rounded border border-slate-800 hover:border-gray-300 active:border-blue-400 bg-gray-600"
    >
      <div className="h-4 w-4 rounded-full navbar-link-light m-1" />
      <span className="mx-2 font-mono navbar-link-text">
        {children}
      </span>
    </NavLink>
  );
}

function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center p-1 border-2 border-black bg-slate-500 text-yellow-300 rounded navbar w-full">
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/dev">Web Dev</NavbarLink>
      <NavbarLink to="/audio">Audio</NavbarLink>
      <NavbarLink to="/guitar">Misc</NavbarLink>
      <NavbarLink to="/music-system">????</NavbarLink>
    </div>
  );
}

export default Navbar;
