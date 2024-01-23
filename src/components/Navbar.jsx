import Github from "../assets/github.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-zinc-900 py-5 shadow-lg">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <a href="/">
            <h1 className="bg-gradient-to-r from-green-400 via-sky-700 to-indigo-800 inline-block text-transparent bg-clip-text font-bold uppercase text-2xl select-none hover:from-sky-700 hover:via-indigo-800 hover:to-green-400 duration-500 transition ease-linear">
              #GetHex
            </h1>
          </a>

          <a
            href="https://github.com/mauroTG"
            target="_blank"
            rel="noreferrer noopener">
            <img src={Github} alt="Github logo" className="w-9" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
