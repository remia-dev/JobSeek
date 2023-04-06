const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-blue-400 text-[25px] ">
          <strong>Job</strong>Seek
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-gray-400 hover:text-blue-400">Jobs</li>
        <li className="menuList text-gray-400 hover:text-blue-400">
          Companies
        </li>
        <li className="menuList text-gray-400 hover:text-blue-400">Login</li>
        <li className="menuList text-gray-400 hover:text-blue-400">Register</li>
      </div>
    </div>
  );
};

export default NavBar;
