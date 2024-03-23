const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col p-10 bg-neutral-900 items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-6 lg:gap-0">
        <div>
          <span className="text-white text-3xl font-extrabold font-['Montserrat']">
            Crework
          </span>
          <span className="text-orange-400 text-4xl font-extrabold font-['Montserrat']">
            .
          </span>
        </div>
        <div className="justify-start items-start gap-10 lg:gap-36 flex">
          {[
            ["Newsletter", "Builders Cohort", "About Us", "Curriculum"],
            [
              "30 days of PM",
              "Transition to PM role",
              "Our Graduates",
              "Refund Policy",
            ],
          ].map((column: string[], columnIndex: number) => (
            <div
              key={columnIndex}
              className="flex-col justify-start items-start gap-4 lg:gap-6 flex"
            >
              {column.map((text: string, index: number) => (
                <p
                  key={index}
                  className={`text-zinc-400 text-xl font-normal font-['Poppins'] leading-normal ${
                    index >= 2 ? "lg:hidden" : "hidden lg:inline-block"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="justify-center items-center gap-5 flex self-center">
          {["dribbble", "behance", "linkedin", "facebook"].map(
            (platform: string, index: number) => (
              <img
                key={index}
                className="w-11 h-11"
                src={`/assets/${platform}.svg`}
                alt={`${platform} logo`}
              />
            )
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-px bg-gradient-to-r from-white to-neutral-800 self-center my-6" />
      <p className="text-zinc-400 text-base font-medium font-['Inter'] leading-normal items-center gap-2 hidden lg:inline-flex">
        Copyright
        <span>
          <img
            className="w-4 h-4 self-center"
            src="/assets/copyright-symbol.svg"
          />
        </span>
        2024 Crework
      </p>
      <p className="text-zinc-400 text-base font-medium font-['Inter'] leading-normal inline-flex items-center gap-2 lg:hidden">
        2021 Crework, 2023
      </p>
    </footer>
  );
};

export default Footer;
