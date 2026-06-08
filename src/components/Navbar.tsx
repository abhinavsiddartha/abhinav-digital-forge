const navItems = ["About", "Skills", "Education", "Experience", "Projects", "Achievements", "Hobbies", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-primary font-semibold text-lg">
          Abhinav Siddartha <span className="hidden sm:inline">-Building Digital Solutions</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
