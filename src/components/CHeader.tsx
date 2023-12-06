const Header = ({ userName }: { userName: string }) => {

  return (
    <header
      className="flex bg-zinc-900 text-white p-2"
    >
      <div className="flex align-center justify-center gap-4 w-32">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="icon" width="30px" />
        <span>{userName}</span>
      </div>
      <div className="flex align-center justify-end gap-4 w-full mr-12">
        <nav>
          <img src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png" alt="logout" width="30px" />
        </nav>
      </div>
    </header>
  );
};

export default Header;