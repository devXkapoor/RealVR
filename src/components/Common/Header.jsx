export default (Header) => {
  return (
    <>
      <header>
        <nav className="flex justify-between border-2 border-amber-600 m-0 p-0 text-sm">
          <ul className="flex border-2 border-amber-600 ml-0 mr-5 px-5">
            <li>
              <img src="assets/Container.png" alt="" className="" />
            </li>
          </ul>
          <ul className="flex justify-between border-2 border-amber-600">
            <li>Games</li>
            <li>Newswire</li>
            <li>Videos</li>
            <li>Downloads</li>
            <li>Store</li>
            <li>Support</li>
          </ul>
          <ul className="flex border-2 border-cyan-600 mr-0 ml-5">
            <li>GetLauncher</li>
            <li>Search</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
