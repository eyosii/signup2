import React from "react";

import { Img, SelectBox, Text, Line } from "components";

const SignupsPagePage = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1117px] mx-auto relative w-full">
        <Img
          src="images/img_rectangle31.png"
          className="absolute h-[1117px] inset-y-[0] left-[0] my-auto object-cover rounded-bl-none rounded-br-[75px] rounded-tl-none rounded-tr-[75px] w-[58%]"
          alt="rectangleThirtyOne"
        />
        <div className="absolute bottom-[0] md:h-[1117px] h-[1172px] inset-x-[0] max-w-[1659px] mx-auto pb-[55px] md:px-5 w-full">
          <SelectBox
            className="absolute font-bold leading-[normal] left-[0] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl top-[2%] w-[14%] sm:w-full"
            placeholderClassName="text-white_A700"
            name="language"
            placeholder="English (UK)"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_materialsymbolsarrowdropdownrounded.svg"
                className="h-16 mr-[0] w-16 right-[0] absolute"
                alt="material-symbols:arrow-drop-down-rounded"
              />
            }
          ></SelectBox>
          <div className="flex flex-col md:gap-10 gap-[106px] h-full justify-start ml-7 mt-[277px] w-[29%]">
            <Text
              className="md:ml-[0] ml-[117px] text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Register Account
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Email
              </Text>
              <Text
                className="mt-[102px] text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Password
              </Text>
              <Text
                className="mt-[79px] text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Confirm Password
              </Text>
            </div>
          </div>
          <div className="absolute h-[1117px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="h-[1117px] m-auto w-full">
              <div className="h-[1117px] m-auto w-full">
                <div className="absolute bottom-[16%] flex items-center justify-start left-[0] w-[39%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 flex items-start justify-start p-2.5 rounded-[22px] w-full">
                      <Img
                        src="images/img_lock.svg"
                        className="h-11 md:ml-[0] ml-[11px] w-11"
                        alt="lock"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start mt-[46px] p-3 rounded-[22px] w-full">
                      <Img
                        src="images/img_lock_red_600.svg"
                        className="h-[39px] ml-3 md:ml-[0] w-[39px]"
                        alt="lock_One"
                      />
                    </div>
                    <Text
                      className="bg-white_A700 h-16 mt-[88px] sm:px-5 px-[35px] py-[13px] rounded-[22px] text-left text-red_600 w-[226px]"
                      as="h2"
                      variant="h2"
                    >
                      Continue
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_kerfin7nea2375.png"
                  className="absolute h-[1117px] inset-y-[0] my-auto object-cover right-[0] w-[64%]"
                  alt="kerfin7nea2375"
                />
              </div>
              <div className="absolute bg-white_A700 flex items-start justify-end left-[0] p-[9px] rounded-[22px] top-[45%] w-[39%]">
                <Img
                  src="images/img_minimize.svg"
                  className="h-[43px] ml-3.5 md:ml-[0] w-auto"
                  alt="minimize"
                />
              </div>
            </div>
            <Line className="absolute bg-red_600 h-16 left-[5%] top-[45%] w-px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupsPagePage;
