"use client";
const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-6 pr-12 pl-12">
        <div className="flex items-center space-x-4">
          <img src="/app/(frontend)/assets/hero.jpg" />
          <span className="text-xl font-medium">
            Auckland University <br />
            Student Chamber Orchestra Inc.
          </span>
        </div>
        <div className="flex items-center gap-12">
          <button>About Us</button>
          <button>Our People</button>
          <button>Concerts</button>
          <button>Gallery</button>
          <button>Contact Us</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
