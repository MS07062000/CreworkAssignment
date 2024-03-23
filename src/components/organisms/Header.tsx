import { useState } from "react";

const Header: React.FC = () => {
  const navItems = ["30 Days of PM", "Newsletter", "Builders Cohort"];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#1B1919] py-8 px-5 lg:px-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-white text-3xl font-extrabold font-['Montserrat']">
            Crework
          </span>
          <span className="text-orange-400 text-4xl font-extrabold font-['Montserrat']">
            .
          </span>{" "}
        </div>
        {!isMenuOpen && (
          <img
            src="/assets/hamburger.svg"
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        )}
        {isMenuOpen && (
          <img
            src="/assets/close.svg"
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        )}
        <div className="hidden lg:flex flex-row gap-12">
          {navItems.map((navItem: string, index: number) => (
            <p
              key={index}
              className="text-center text-stone-300 text-xl font-normal font-['Inter']"
            >
              {navItem}
            </p>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[#1B1919] w-full flex flex-col fixed left-0 gap-6 justify-start items-center pt-8 pb-12 lg:hidden">
          {navItems.map((navItem: string, index: number) => (
            <p
              key={index}
              className="text-center text-white text-xl font-normal font-['Poppins']"
            >
              {navItem}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
