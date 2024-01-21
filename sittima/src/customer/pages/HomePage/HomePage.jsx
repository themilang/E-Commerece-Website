import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCardCarousle from "../../component/HomeSectionCardCarousle/HomeSectionCardCarousle";
import { dummyjson } from "../../component/HomeSectionCard/dummyjson";
import { dummy1 } from "../../component/HomeSectionCard/dummy1";
import logo from "../../../assets/index";
import { Navigate, useNavigate } from "react-router-dom";
import CategoryAvatar from "../../component/avatar/CategoryAvatar";

const avatarcategory = [
  { category1: "Electronics", href: "/categories/electronics" },
  { category2: "Fashion", href: "/categories/fashion" },
  { category3: "Kids", href: "/categories/kids" },
  { category4: "Winter", href: "/categories/winter" },
  { category5: "Grossory", href: "/categories/grossery" },
];

const categories = [
  { category1: "Electronics", href: "/categories/electronics" },
  { category2: "Fashion", href: "/categories/fashion" },
  { category3: "Kids", href: "/categories/kids" },
  { category4: "Winter", href: "/categories/winter" },
  { category5: "Grossory", href: "/categories/grossery" },
];

const navigate = useNavigate;

const handleclick1 = () => {
  navigate("/cate");
};

const HomePage = () => {
  return (

    <div className="bg-[#181818] rounded-3xl -mt-9">
      <div>
        <div className="  lg:grid grid-cols-3 col-span items-centern gap-2 justify-center ">
          <div className=" hidden lg:flex lg:flex-col lg:mt-16 mb-14  ml-20  border border-[#5a5a5a] p-3 rounded-2xl w-60  ">
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[0].category1}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[0].category1}
              </p>
            </div>

            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[0].category1}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[0].category1}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[1].category2}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[2].category3}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[3].category4}
              </p>
            </div>
            <div className="flex  items-center gap-4 p-2 ">
              <img
                className="items-center   justify-center max-w-[1rem] max-h-[1rem]"
                src={logo}
                alt="img"
              />
              <p className=" text-xs cursor-pointer text-white">
                {categories[4].category5}
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 lg:mt-16 lg:mr-6 lg:-ml-28 ">
            <MainCarousel />
          </div>
        </div>

    <div className=" ml-32 mt-5 mr-32 rounded-3xl bg-[#373737] p-2">
      <img className="  w-full h-32" src="
https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN01sNgWLl1ftMWren4Na_!!6000000004064-2-tps-1920-144.png"      alt="" />
    </div>







        <div className=" mt-10 mb-10  bg-[#373737] rounded-3xl p-6 ml-16 mr-16  ">
          <div className=" flex gap-8 justify-center">
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>{" "}
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>{" "}
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>{" "}
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>{" "}
            <div>
              <CategoryAvatar />
              <p>{avatarcategory[0].category1}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">
              Popular Products
            </h2>
          </div>
          <HomeSectionCardCarousle data={dummyjson} />
        </div>{" "}
        <div className="mt-4">
          <HomeSectionCardCarousle data={dummy1} />
        </div>{" "}
        <div className="mt-4">
          <div>
            <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">
              Electronics Products
            </h2>
          </div>
          <HomeSectionCardCarousle data={dummyjson} />
        </div>{" "}
        <div className="mt-4">
          <HomeSectionCardCarousle data={dummyjson} />
          <HomeSectionCardCarousle data={dummyjson} />
          <div>
            <h2 className=" ml-16 text-[#cecece]  mb-8 font-medium text-2xl  ">
              Fashion Products
            </h2>
          </div>
          <HomeSectionCardCarousle data={dummyjson} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
