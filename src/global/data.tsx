export let PropertyList = [
  {
    id: 0,
    ownerId: 0,
    title: "Apple",
    description: "🍎",
    status: "For Rent",
    route: "apple",
    price: 1900,
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
  },
  {
    id: 1,
    ownerId: 0,
    title: "Banana",
    description: "🍌",
    status: "For Sale",
    route: "banana",
    price: 1900,
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
  },
  {
    id: 2,
    ownerId: 1,
    title: "Orange",
    description: "🍊",
    status: "For Rent",
    route: "orange",
    price: 1900,
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
  },
];

export type CarouselItemsType = {
  Name: string;
  Caption: string;
  contentPosition: "left" | "right" | "middle";
  Items: { Name: string; Image: string }[];
  route: string;
};

export let CarouselItems: CarouselItemsType[] = [
  {
    Name: "122 Lorong 2 Toa Payoh",
    Caption: "For Rent",
    contentPosition: "left",
    route: "apple",
    Items: [
      {
        Name: "Living Room",
        Image:
          "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg",
      },
      {
        Name: "Master Room",
        Image:
          "https://res.cloudinary.com/kayden/image/upload/v1672909150/1-master_f3dj1n.jpg",
      },
    ],
  },
];