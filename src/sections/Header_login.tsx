import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/mascott.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Avatar from "@/assets/mascott.png"; // Import the avatar image
import Link from "next/link";

export const HeaderLogin = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Timer</a>
              <a href="#">Roadmaps</a>
              <a href="#">Blogs</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium align-items justify-center tracking-tight">
                Profile
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image src={Avatar} alt="User Avatar" height={32} width={32} className="object-cover" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
