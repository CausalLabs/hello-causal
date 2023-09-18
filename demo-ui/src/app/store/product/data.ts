type ProductType = {
  id: number;
  name: string;
  color: string;
  price: number;
  href: string;
  rating: number;
  imageSrc: string;
  productDescription: string;
  details: {
    name: string;
    items: string[];
  }[];
  availableColors: {
    name: string;
    colorBg: string;
    selectedColor: string;
  }[];
  onSale: boolean;
};

const Products: ProductType[] = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: 35,
    href: "/store/product/1",
    rating: 4.3,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    productDescription:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    details: [
      {
        name: "Features",
        items: [
          "Durable, machined stainless steel body",
          "Etched grip pattern on barrel",
          "Cap can be posted onto opposite end",
        ],
      },
      { name: "Materials", items: ["Solid stainless steel", "Plastic"] },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
    ],
    availableColors: [
      { name: "Black", colorBg: "#111827", selectedColor: "ring-gray-700" },
      { name: "Brass", colorBg: "#FDE68A", selectedColor: "ring-yellow-500" },
      { name: "Chrome", colorBg: "#E5E7EB", selectedColor: "ring-gray-300" },
    ],
    onSale: true,
  },
  {
    id: 2,
    name: "Earthen Mug",
    color: "Matte Black",
    price: 28,
    href: "/store/product/2",
    rating: 4.2,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg",
    productDescription:
      "Black porcelain mug with modern square handle and natural clay accents on rim and bottom.",
    availableColors: [
      {
        name: "Matte Black",
        colorBg: "#4B5563",
        selectedColor: "ring-gray-700",
      },
      { name: "Brass", colorBg: "#FEF3C7", selectedColor: "ring-yellow-500" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Holds 12 oz. of your favorite beverage",
          "Materials sourced locally",
          "Hand wash only",
        ],
      },
      { name: "Materials", items: ["Porcelain", "Clay", "Mineral Oil"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: [
          "Hand wash only",
          "Do not use chemical cleaners",
          "Microwave safe",
        ],
      },
    ],
    onSale: true,
  },
  {
    id: 3,
    name: "Leatherbound Daily Journal Set",
    color: "Natural",
    price: 50,
    href: "/store/product/3",
    rating: 5,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg",
    productDescription:
      "Natural leather journal with brass disc binding and three paper refill sets.",
    availableColors: [
      { name: "Natural", colorBg: "#FEF3C7", selectedColor: "ring-yellow-500" },
      { name: "Black", colorBg: "#1F2937", selectedColor: "ring-gray-700" },
      { name: "Brown", colorBg: "#7C2D12", selectedColor: "ring-yellow-900" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Genuine leather cover ages beautifully",
          "Brass disc binding",
          "Refillable with paper sets",
        ],
      },
      {
        name: "Materials",
        items: ["Handcrafted leather", "Brass", "100% cotton paper"],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: true,
  },
  {
    id: 4,
    name: "Focus Card Holder",
    color: "Walnut",
    price: 64,
    href: "/store/product/4",
    rating: 4.6,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
    productDescription:
      "Wooden desktop card holder for focus paper todo lists.",
    availableColors: [
      { name: "Walnut", colorBg: "#7C2D12", selectedColor: "ring-yellow-900" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Holds up to 15 focus cards at a time",
          "Refillable with standard size index cards",
        ],
      },
      { name: "Materials", items: ["Walnut", "Brass"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 5,
    name: "Focus Paper Refill",
    color: "White",
    price: 13,
    href: "/store/product/5",
    rating: 4.1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    productDescription: "Focus paper system help you get work done.",
    availableColors: [
      { name: "White", colorBg: "#FFFFFF", selectedColor: "ring-gray-300" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Refill for our Focus paper system",
          "Comes in a pack of three",
          "Blank, lined, and graph paper",
        ],
      },
      { name: "Materials", items: ["100% cotton paper"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Do not get wet", "Do not fold", "Do not feed after midnight"],
      },
    ],
    onSale: false,
  },
  {
    id: 6,
    name: "Focus Carry Case",
    color: "Heather Gray",
    price: 32,
    href: "/store/product/6",
    rating: 4.7,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    productDescription: "Carry case for Focus paper system.",
    availableColors: [
      {
        name: "Heather Gray",
        colorBg: "#B7B7B7",
        selectedColor: "ring-gray-500",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Holds up to 15 focus cards at a time",
          "Refillable with standard size index cards",
        ],
      },
      { name: "Materials", items: ["Wool", "Leather"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 7,
    name: "Focus Multi-Pack",
    color: "Army Green",
    price: 39,
    href: "/store/product/7",
    rating: 4.9,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-04.jpg",
    productDescription:
      "Wooden desktop card holder for focus paper todo lists.",
    availableColors: [
      {
        name: "Army Green",
        colorBg: "#4B5320",
        selectedColor: "ring-green-900",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Refill set of Focus cards",
          "Comes with three different focus card styles: todo, dot printed, goal planning",
        ],
      },
      { name: "Materials", items: ["Walnut", "Brass"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    color: "Black and Brass",
    price: 35,
    href: "/store/product/8",
    rating: 4.1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-05.jpg",
    productDescription:
      "Black machined steel mechanical pencil with brass tip and top.",
    availableColors: [
      {
        name: "Black and Brass",
        colorBg: "#111827",
        selectedColor: "ring-gray-700",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Machined hexagonal body",
          "Knurled grip",
          "Metal click button",
        ],
      },
      { name: "Materials", items: ["Solid brass", "High-quality steel"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: true,
  },
  {
    id: 9,
    name: "Brass Scissors",
    color: "Brass",
    price: 50,
    href: "/store/product/9",
    rating: 4.5,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-06.jpg",
    productDescription:
      "Brass scissors with walnut handles resting on a brass stand.",
    availableColors: [
      { name: "Brass", colorBg: "#FDE68A", selectedColor: "ring-yellow-500" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Solid brass blades",
          "Walnut handles",
          "Removable brass stand",
        ],
      },
      { name: "Materials", items: ["Brass", "Walnut"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: true,
  },
  {
    id: 10,
    name: "Nomad Tumbler",
    color: "Olive Green",
    price: 35,
    href: "/store/product/10",
    rating: 4.9,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    productDescription:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    availableColors: [
      {
        name: "Olive Green",
        colorBg: "#808000",
        selectedColor: "ring-yellow-900",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Double-walled insulated bottle",
          "Screw lid with seal",
          "Dishwasher safe",
        ],
      },
      { name: "Materials", items: ["Stainless steel", "Silicone"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
          "Expedited shipping available",
        ],
      },
      {
        name: "Care",
        items: [
          "Dishwasher safe",
          "Do not microwave",
          "Do not use with hot liquids",
        ],
      },
    ],
    onSale: true,
  },
  {
    id: 11,
    name: "Zip Tote Basket",
    color: "Washed Black",
    price: 140,
    href: "/store/product/11",
    rating: 4.2,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
    productDescription:
      "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
    availableColors: [
      {
        name: "Washed Black",
        colorBg: "#4B5563",
        selectedColor: "ring-gray-700",
      },
      { name: "White", colorBg: "#FFFFFF", selectedColor: "ring-gray-300" },
      {
        name: "Washed Grey",
        colorBg: "#D1D5DB",
        selectedColor: "ring-gray-400",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Converts to hand bag, shoulder bag, and backpack",
          "Interior divider pocket",
          "Zippered top",
        ],
      },
      {
        name: "Materials",
        items: ["Waxed canvas exterior", "Cotton blend lining"],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: true,
  },
  {
    id: 12,
    name: "Machined Sphere Puzzle",
    color: "Polished Steel",
    price: 95,
    href: "/store/product/12",
    rating: 3.9,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-10.jpg",
    productDescription:
      "Polished steel sphere puzzle with circular indentations on the surface. Comes with wooden storage box and brass display stand.",
    availableColors: [
      {
        name: "Polished Steel",
        colorBg: "#E5E7EB",
        selectedColor: "ring-gray-300",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Machined from solid steel",
          "Comes in a wooden storage box",
          "Includes 2 sets of 2 pieces",
        ],
      },
      { name: "Materials", items: ["Solid steel", "Wood", "Brass"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: true,
  },
  {
    id: 13,
    name: "Leather Workspace Pad",
    color: "Black",
    price: 165,
    href: "/store/product/13",
    rating: 3.9,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-08.jpg",
    productDescription:
      "Full grain black leather workspace pad with white contrast stitching.",
    availableColors: [
      { name: "Black", colorBg: "#1F2937", selectedColor: "ring-gray-700" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Full grain leather",
          "Contrast stitching",
          "Handcrafted in the USA",
        ],
      },
      { name: "Materials", items: ["Leather"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 14,
    name: "Everday Ruck Sack",
    color: "Green",
    price: 220,
    href: "/store/product/14",
    rating: 3.1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
    productDescription:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    availableColors: [
      { name: "Green", colorBg: "#84CC16", selectedColor: "ring-green-500" },
      { name: "Blue", colorBg: "#60A5FA", selectedColor: "ring-blue-500" },
      { name: "Red", colorBg: "#F87171", selectedColor: "ring-red-500" },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Spacious interior with drawstring top",
          "Front zippered pocket",
          "Double-stitched canvas materials",
        ],
      },
      {
        name: "Materials",
        items: ["Waxed canvas exterior", "Cotton blend lining"],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 15,
    name: "Leather Long Wallet",
    color: "Tan Honey",
    price: 85,
    href: "/store/product/15",
    rating: 2.3,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    productDescription:
      "Keep your cards and cash organized with this timeless leather wallet. With space for eight cards and a center divider for cash, you'll never be without what you need.",
    availableColors: [
      {
        name: "Tan Honey",
        colorBg: "#FCD34D",
        selectedColor: "ring-yellow-500",
      },
      {
        name: "Dark Brown",
        colorBg: "#8B5C33",
        selectedColor: "ring-yellow-900",
      },
    ],
    details: [
      {
        name: "Features",
        items: [
          "Eight card slots",
          "Center divider for cash",
          "Handcrafted from genuine leather",
        ],
      },
      { name: "Materials", items: ["Full grain leather"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
  {
    id: 16,
    name: "Mini-Sketchbooks",
    color: "Black",
    price: 27,
    href: "/store/product/16",
    rating: 4.1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg",
    productDescription:
      "These notebooks are small enough to slip into most pockets, so you'll always have one on hand when inspiration strikes. The sturdy covers protect the thick blank pages inside, and the stitched binding keeps the notebook flat as you write.",
    availableColors: [
      { name: "Black", colorBg: "#1F2937", selectedColor: "ring-gray-700" },
      { name: "White", colorBg: "#FFFFFF", selectedColor: "ring-gray-300" },
      { name: "Kraft", colorBg: "#D1BDA1", selectedColor: "ring-yellow-300" },
    ],
    details: [
      {
        name: "Features",
        items: ["48 pages", "Stitched binding", "Thick card stock cover"],
      },
      { name: "Materials", items: ["100% recycled paper"] },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $50",
          "Shipping takes 5 - 7 business days",
        ],
      },
      {
        name: "Care",
        items: ["Wipe with a damp cloth", "Do not use chemical cleaners"],
      },
    ],
    onSale: false,
  },
];

export { Products };
export type { ProductType };
