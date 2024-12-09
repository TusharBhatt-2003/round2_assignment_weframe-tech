function Logo() {
  return (
    <a
      href="/"
      role="button"
      id="logo"
      className="flex flex-col justify-center gap-2 items-center"
    >
      <img src="logo.svg" alt="Logo" width="40" className="w-[5vw]" />
      <img src="logoName.svg" alt="Logo" width="100" className="w-[10vw]" />
    </a>
  );
}

export default Logo;
