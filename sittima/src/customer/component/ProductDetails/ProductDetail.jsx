import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { RadioGroup } from "@headlessui/react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Avatar, Grid } from "@mui/material";
import { Button, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { useNavigate } from "react-router-dom";
const product = {
  name: "Apple MacBook Air 13-inch M1 256GB Gold",
  price: "Rs168,000.00",
  color: true,
  star: 4.5,
  numberofratings: 45554,
  numberofreviews: 2333,
  starprecision: 0.5,
  size: true,
  mrp: "Rs190,000.00",
  discount: "-23%",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/m/a/macbook-air-gallery3-20201110.jpeg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },

    {
      src: "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/m/a/macbook-air-gallery4-20201110.jpeg",
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/m/a/macbook-air-gallery1-20201110_geo_us.jpeg",
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/m/a/macbook-air-gallery2-20201110.jpeg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  brand: ["Apple"],
  brandimage: [
    "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png",
  ],

  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'This lightweight mobile workstation features an Apple M2 8-Core processor that is designed to deliver up to 18 percent greater, or 1.4x faster, performance compared to the previous M1 CPU while maintaining high battery efficiency. Its 10-core integrated GPU is also 35 percent faster than the M1, which significantly cuts down rendering times when working with intensive applications. The 13.3" Retina display features a 2560 x 1600 resolution, 500 nits of brightness, wide P3 color gamut support, and more. With 8GB of memory and 512GB of SSD storage, you can quickly multitask applications and load large video clips and project files.',
  highlights: [
    "Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine",
    "8GB unified memory",
    "256GB SSD storage¹",
    "Retina display with True Tone",
    "Magic Keyboard",
    "Touch ID",
    "Force Touch trackpad",
    "Two Thunderbolt / USB 4 ports",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate=useNavigate();
  const handleaddtocart=()=>{
  navigate('/cart')
 }

  return (
    <div className="bg-black ">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-white"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center gap-x-9  gap-y-10">
            <div className="overflow-hidden rounded-lg  max-h-[25rem]  max-w-[30rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap justify-center space-x-5 ">
              {product.images.map((item) => (
                <div className=" max-w-[5rem] lg:max-w-[6rem] max-h-[7rem] overflow-hidden rounded-lg mt-4">
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className=" sm:ml-14  lg:col-span-1  max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg-pb-25">
            <div className="lg:col-span-2 ">
              <h1 className=" font-bold tracking-tight text-white text-3xl lg:text-3xl">
                {product.name}
              </h1>

              <div className="flex gap-5 items-center mt-3">
                <img
                  className="max-w-[2rem] max-h-[2rem]"
                  src={product.brandimage}
                  alt="brand"
                />
                <h1 className="text-white">{product.brand}</h1>
              </div>
            </div>

            {/* Reviews  mui rating*/}
            <div className="mt-3  mb-9  ">
              <div className="flex space-x-3 items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.star}
                  precision={product.starprecision}
                  emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
                  readOnly
                />
                <p className="text-gray-400 text-xs">
                  <span className="text-indigo-400">
                    {product.numberofratings}
                  </span>{" "}
                  - Ratings
                </p>
                <p className="text-gray-400 text-xs">
                  <span className="text-indigo-400">
                    {product.numberofreviews}
                  </span>{" "}
                  - Reviews
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg mt-6">
                <p className="text-white font-semibold text-2xl ">
                  {product.price}
                </p>

                <p className="text-gray-400 line-through ">{product.mrp}</p>
                <p className="text-[#22c03d] text">{product.discount}</p>
              </div>
              <div className="mt-10">
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {product.color && (
                  <div>
                    <h3 className="text-sm font-medium text-white">color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Sizes */}
                {product.size && (
                  <div className="mt-10">
                    <div className="flex items-center justify-between ">
                      <h3 className="text-sm  font-medium text-white">Size</h3>
                      {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a> */}
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only ">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="md:p-1 md:py-2 grid grid-cols-4  sm:grid-cols-8 lg:grid-cols-4 px-8 gap-5 py-[0.5] mb-10 ">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer  bg-white text-black shadow-sm "
                                  : "cursor-not-allowed bg-gray-50 text-gray-200 ",
                                active ? "ring-2 ring-indigo-500 " : "",
                                "group md:py-2 md:px-5  relative flex items-center justify-center rounded-md border  py-3  text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 "
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}
                <div className=" flex gap-2 justify-center lg:w-full">
                  <Button
                    variant="contained"
                    sx={{
                      p: "1rem",
                      flex: "1 1 0",
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      "&:hover": { backgroundColor: "white" },
                      "&:active": {
                        backgroundColor: "success.main",
                        color: "white",
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                  <Button
                 onClick={handleaddtocart}
                    variant="outlined"
                    color="success"
                    sx={{
                      p: "1rem",
                      flex: "1 1 0",
                      outlineColor: "white",
                      color: "white",
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="bg-black ml-10 py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="text-white mb-3">Description</h3>

            <div className="space-y-6  ">
              <p className="text-base text-gray-600">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-white">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-white">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
        <section>
          <h1 className="text-white ml-10 mb-10">Recent Review</h1>
          <Grid container>
            <div className="ml-10">
              {[1, 1, 1, 1].map((item) => (
                <ProductReviewCard />
              ))}
            </div>
          </Grid>
          <div className="flex items-center gap-3 ml-10 mt-10">
            <Avatar className="text-white mt-4 ">M</Avatar>
            <form action="">
              <input
                className="p-2 rounded-lg mt-5  w-full bg-[#2e2e2e] text-white  outline-none"
                type="text"
                placeholder="Give Review Here"
              />
            </form>
            <div className="mt-4  mr-1">
              <Button
                className="items-center mt-5 "
                variant="outlined"
                endIcon={<SendIcon />}
              ></Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
