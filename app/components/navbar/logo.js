function Logo() {
  return (
    <div className="flex flex-col justify-center gap-2 items-center">
      <img src="logo.svg" alt="Logo" width="40" className="w-[7vw]" />
      <img
        src="logoName.svg"
        alt="Logo Name"
        width="100"
        className="w-[12vw]"
      />
    </div>
  );
}

export default Logo;
