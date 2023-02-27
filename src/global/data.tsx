export let isHomeownerAccount = false

export let PropertyList = [
  {
    id: 0,
    ownerId: 0,
    title: "Apple",
    description: "🍎",
    status: "For Rent",
    nationalities: ["Singaporean"],
    route: "apple",
    price: 1900,
    whatsappContact: "92976946",
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
    apartmentFeatures: ["Apartment Feature 1", "Apartment Feature 2"],
    commonFacilities: ["Common Facility 1", "Common Facility 2"],
  },
  {
    id: 1,
    ownerId: 0,
    title: "Banana",
    description: "🍌",
    status: "For Sale",
    nationalities: ["Singaporean"],
    route: "banana",
    price: 1900,
    whatsappContact: "92976946",
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
    apartmentFeatures: ["Apartment Feature 1", "Apartment Feature 2"],
    commonFacilities: ["Common Facility 1", "Common Facility 2"],
  },
  {
    id: 2,
    ownerId: 1,
    title: "Orange",
    description: "🍊",
    status: "For Rent",
    nationalities: ["Singaporean"],
    route: "orange",
    price: 1900,
    whatsappContact: "92976946",
    extraDetails: [
      "Minimum rental period is three months",
      "Rental inclusive utilities, wifi and apartment common area cleaning",
    ],
    maxPax: 2,
    roomFeatures: ["Room Feature 1", "Room Feature 2"],
    apartmentFeatures: ["Apartment Feature 1", "Apartment Feature 2"],
    commonFacilities: ["Common Facility 1", "Common Facility 2"],
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

export type PropertyCarouselItemsType = {
  name: string;
  description: string;
  color: string;
  href: string;
  imgUrl: string;
};

export const PropertyCarouselItems: PropertyCarouselItemsType[] = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: "https://github.com/Learus/Lear-Music-Reader",
    imgUrl: "https://res.cloudinary.com/kayden/image/upload/v1672909150/1-master_f3dj1n.jpg"
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
    imgUrl: "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg"
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
    imgUrl: "https://res.cloudinary.com/kayden/image/upload/v1672909150/1-master_f3dj1n.jpg"
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
    imgUrl: "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg"
  },
];

export const enquireExternal = false
