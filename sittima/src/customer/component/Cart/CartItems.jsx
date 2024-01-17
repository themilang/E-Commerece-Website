import React from "react";

const CartItems = (props) => {
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

  return (
    <>
    
   <div className=" hidden sm:grid text-center grid-cols-6 justify-around mt-8 ">
   <p className="text-white col-span-3">ITEMS</p>
   <p className="text-white ">PRICE</p>
   <p className="text-white ">QUANTITY</p>
   <p className="text-white ">SUBTOTAL</p>

  
   </div>

    <div className=" bg-[#000000] p-10 mt-7 mb-10 shadow-lg border border-l-0  border-r-0 border-[#707070] mr-2 w-full ">
    <div className="md:grid md:grid-cols-6 justify-around">
        <div className="  col-span-3 flex justify-start  ">
          <img
            className=" object-cover object-top w-[5rem] h-[5rem] lg-w-[9rem] lg-h-[9rem]  "
            src="https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/i/p/iphone-12-purple.jpg"
            alt=""
          />
           <div className="text-white ml-5 ">
            <h1 className="   text-white ">
              {product.name}
            </h1>
          
          <div className="flex gap-4 items-center mt-3 ">
            <img
              className="max-w-[1rem] max-h-[2rem]"
              src={product.brandimage}
              alt="brand"
            />
            <h1 className="text-white">{product.brand}</h1>
          </div>
        </div>
        </div>

       


        <div>
       
                <p className="text-white  text-center">
                  {product.price}
                </p>

              
        </div>


        <div><p className="text-white text-center">2</p></div>
        <div>
            <p className="text-small text-white text-center">{product.price}</p>
        </div>
      </div>

    </div>
    
    </>
    
  );
};

export default CartItems;
