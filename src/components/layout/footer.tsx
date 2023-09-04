import { Link } from "@tanstack/react-router";
import LogoDark from "../../assets/shared/desktop/logo-light.png";
export const Footer = () => {
  return (
    <div className=" bg-clrBlackDark">
      <div className="max-w-[1111px] md:pb-20 lg:pb-[72px] pt-[253px] md:pt-[144px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <Link to="/">
            <img
              className="w-[202px] h-[27px] mx-auto md:mx-0 md:ml-[5px]"
              src={LogoDark}
              alt=""
            />
          </Link>
          <hr className="h-[2px] md:hidden bg-white opacity-10 my-8 mx-6" />
          <div className="flex flex-col md:flex-row uppercase text-white text-sm leading-[14px] tracking-widest gap-y-8 mb-10 text-center md:gap-x-[42px]">
            <Link to="/ourCompany" className="hover:underline">
              Our Company
            </Link>
            <Link to="/locations" className="hover:underline">
              Locations
            </Link>
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <hr className="hidden md:block h-[1px] opacity-10 mx-auto mt-[13px]" />
        <div className="flex flex-col md:flex-row items-center md:justify-between md:items-end">
          <div className="flex gap-10 flex-col items-end md:flex-row text-clrWhite font-normal opacity-50 mt-[31px] text-center md:text-start">
            <div className="w-[223px] gap-10 md:gap-[10px] lg:w-[350px] lg:gap-[30px] te">
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="w-[223px] md:gap-[10px] lg:w-[350px] lg:gap-[30px]">
              <p className="font-bold">Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <div className="mt-10 mb-16 flex md:mb-0 md:mt-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="184"
              height="24"
              viewBox="0 0 184 24"
              fill="none"
            >
              <a href="https://www.facebook.com/" target="_blank">
                <path
                  className="hover:fill-clrPinkLight cursor-pointer"
                  d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                  fill="#E7816B"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <path
                  className="hover:fill-clrPinkLight cursor-pointer"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M172 0C168.741 0 168.333 0.014 167.053 0.072C162.695 0.272 160.273 2.69 160.073 7.052C160.014 8.333 160 8.741 160 12C160 15.259 160.014 15.668 160.072 16.948C160.272 21.306 162.69 23.728 167.052 23.928C168.333 23.986 168.741 24 172 24C175.259 24 175.668 23.986 176.948 23.928C181.302 23.728 183.73 21.31 183.927 16.948C183.986 15.668 184 15.259 184 12C184 8.741 183.986 8.333 183.928 7.053C183.732 2.699 181.311 0.273 176.949 0.073C175.668 0.014 175.259 0 172 0ZM172 2.163C175.204 2.163 175.584 2.175 176.85 2.233C180.102 2.381 181.621 3.924 181.769 7.152C181.827 8.417 181.838 8.797 181.838 12.001C181.838 15.206 181.826 15.585 181.769 16.85C181.62 20.075 180.105 21.621 176.85 21.769C175.584 21.827 175.206 21.839 172 21.839C168.796 21.839 168.416 21.827 167.151 21.769C163.891 21.62 162.38 20.07 162.232 16.849C162.174 15.584 162.162 15.205 162.162 12C162.162 8.796 162.175 8.417 162.232 7.151C162.381 3.924 163.896 2.38 167.151 2.232C168.417 2.175 168.796 2.163 172 2.163ZM165.838 12C165.838 8.597 168.597 5.838 172 5.838C175.403 5.838 178.162 8.597 178.162 12C178.162 15.404 175.403 18.163 172 18.163C168.597 18.163 165.838 15.403 165.838 12ZM172 16C169.791 16 168 14.21 168 12C168 9.791 169.791 8 172 8C174.209 8 176 9.791 176 12C176 14.21 174.209 16 172 16ZM176.965 5.595C176.965 4.8 177.61 4.155 178.406 4.155C179.201 4.155 179.845 4.8 179.845 5.595C179.845 6.39 179.201 7.035 178.406 7.035C177.61 7.035 176.965 6.39 176.965 5.595Z"
                  fill="#E7816B"
                />
              </a>
              <a href="https://www.pinterest.com/" target="_blank">
                <path
                  className="hover:fill-clrPinkLight cursor-pointer"
                  d="M132 0C125.373 0 120 5.372 120 12C120 17.084 123.163 21.426 127.627 23.174C127.522 22.225 127.427 20.769 127.669 19.733C127.887 18.796 129.076 13.768 129.076 13.768C129.076 13.768 128.717 13.049 128.717 11.986C128.717 10.318 129.684 9.072 130.888 9.072C131.911 9.072 132.406 9.841 132.406 10.762C132.406 11.791 131.751 13.33 131.412 14.757C131.129 15.951 132.011 16.926 133.189 16.926C135.322 16.926 136.961 14.677 136.961 11.431C136.961 8.558 134.897 6.549 131.949 6.549C128.535 6.549 126.531 9.11 126.531 11.756C126.531 12.787 126.928 13.894 127.424 14.494C127.522 14.613 127.536 14.718 127.507 14.839L127.174 16.199C127.121 16.419 127 16.466 126.772 16.36C125.273 15.662 124.336 13.471 124.336 11.711C124.336 7.926 127.086 4.449 132.265 4.449C136.428 4.449 139.663 7.416 139.663 11.38C139.663 15.516 137.056 18.844 133.436 18.844C132.22 18.844 131.077 18.213 130.686 17.466L129.938 20.319C129.667 21.362 128.936 22.669 128.446 23.465C129.57 23.812 130.763 24 132 24C138.627 24 144 18.627 144 12C144 5.372 138.627 0 132 0Z"
                  fill="#E7816B"
                />
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <path
                  className="hover:fill-clrPinkLight cursor-pointer"
                  d="M104 4.55705C103.117 4.94905 102.168 5.21305 101.172 5.33205C102.189 4.72305 102.97 3.75805 103.337 2.60805C102.386 3.17205 101.332 3.58205 100.21 3.80305C99.313 2.84605 98.032 2.24805 96.616 2.24805C93.437 2.24805 91.101 5.21405 91.819 8.29305C87.728 8.08805 84.1 6.12805 81.671 3.14905C80.381 5.36205 81.002 8.25705 83.194 9.72305C82.388 9.69705 81.628 9.47605 80.965 9.10705C80.911 11.388 82.546 13.522 84.914 13.997C84.221 14.185 83.462 14.229 82.69 14.081C83.316 16.037 85.134 17.46 87.29 17.5C85.22 19.123 82.612 19.848 80 19.54C82.179 20.937 84.768 21.752 87.548 21.752C96.69 21.752 101.855 14.031 101.543 7.10605C102.505 6.41105 103.34 5.54405 104 4.55705Z"
                  fill="#E7816B"
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <path
                  className="hover:fill-clrPinkLight cursor-pointer"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52 0C45.373 0 40 5.373 40 12C40 18.627 45.373 24 52 24C58.627 24 64 18.627 64 12C64 5.373 58.627 0 52 0ZM56.441 16.892C54.339 17.036 49.657 17.036 47.558 16.892C45.282 16.736 45.017 15.622 45 12C45.017 8.371 45.285 7.264 47.558 7.108C49.657 6.964 54.34 6.964 56.441 7.108C58.718 7.264 58.982 8.378 59 12C58.982 15.629 58.715 16.736 56.441 16.892ZM54.917 11.996L50 9.658V14.342L54.917 11.996Z"
                  fill="#E7816B"
                />
              </a>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
