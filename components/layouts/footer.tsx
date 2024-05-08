import Image from "next/image";


export const Footer = () => {

  return (
    <>
      <div className="flex h-1 bg-gradient-to-r from-goldPrimary to-goldSecondary" />
      <footer className="bg-gradient-to-r from-darkGreen100 to-darkGreen200 px-5">
        <div className="container mx-auto py-10">
          <div className="flex  flex-col md:flex-row items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col md:p-0 py-4 gap-8 relative">
              <Image
                src={"/BrainBoosters.png"}
                alt="BioNatural Logo"
                width={100}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-3 relative md:items-center w-52 md:w-auto">
              <p className="footer-title">Stay Connected</p>
              <div className="flex gap-7 text-[18px] text-[#646464] justify-start">
                
              </div>
            </div>
            <div className="flex flex-col gap-5 relative items-start mt-8 md:mt-0 w-52 md:w-auto">
              <p className="footer-title">Customer Service</p>
              <div className="flex flex-col gap-3 text-center items-start">
                
              </div>
            </div>
            <div className="flex flex-col gap-5 relative items-start mt-8 md:mt-0 w-52 lg:w-auto">
              <p className="footer-title">Company</p>
              <div className="flex flex-col gap-3 items-start">
                
              </div>
            </div>
            <div className="flex flex-col gap-6 relative items-start mt-8 md:mt-0 w-52 lg:w-auto">
              <p className="footer-title">Contact Us</p>
              <div className="flex flex-col gap-3 text-center items-start">
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-100 py-3 gap-3">
          <div className="flex w-1/2 h-px bg-white opacity-20" />
          <div className="flex items-center gap-3 justify-center ">
           
          </div>
          <p className="text-black opacity-40 text-center">
            Copyright © 2024 Little Brain Boosters. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

