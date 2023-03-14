
import QuadEqSolver from "../components/QuadEqSolver";
import OddEvenChecker from "../components/OddEvenChecker";
import MultipleChecker from "../components/MultipleChecker";
import SimultaneousEquationSolver from "../components/SimulSolver";
import AddNo from "../components/AddNo";
import DisplayNo from "../components/DisplayNo";
import FractionConverter from "../components/FractionConverter";
import AddNumbers from "../components/AddNumbers";

export let ownerId = 0;
export let isLandlordAccount = true;
export let fName = "Adolf";
export let lName = "Hitler";
export let location = "Germany";
export let email = "hitler@nazi.org";
export let password = "AdolfHitler123";

export let PropertyList = [
  {
    id: 0,
    ownerId: 0,
    title: "Apple",
    description: "🍎",
    img: "https://mui.com/static/images/cards/paella.jpg",
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
    img: "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg",
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
    // img: "https://mui.com/static/images/cards/paella.jpg",
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

export type ReactComponentType =
  | React.FunctionComponent<any>
  | React.ComponentClass<any, any>;

type ToolListType = {
  title: string;
  description?: string;
  cat: "math";
  route?: string;
  imgUrl?: string;
  component: ReactComponentType;
};

export let ToolList: ToolListType[] = [
  {
    title: "Quadratic",
    description: "Solve quadratic expressions",
    cat: "math",
    route: "quadratic",
    component: QuadEqSolver,
  },
  {
    title: "Even or Odd",
    description: "Find out if a number is even or odd",
    cat: "math",
    route: "oddeven",
    component: OddEvenChecker,
  },
  {
    title: "Multiple Checker",
    description: "Find out if a number is a multiple of another number",
    cat: "math",
    route: "multiple",
    component: MultipleChecker,
  },
  {
    title: "Multiple Checker (2)",
    description: "Find out if a number is a multiple of 3, 4, 5, 6, 7, 8, 9 or 10",
    cat: "math",
    route: "multiple2",
    component: MultipleChecker,
  },
  {
    title: "Simultaneous Equations",
    description: "Solve simultaneous equations (BETA). This is not functional yet.",
    cat: "math",
    route: "simul",
    component: SimultaneousEquationSolver,
  },
  {
    title: "Add Numbers",
    description: "Add 2 numbers together",
    cat: "math",
    route: "add",
    component: AddNo,
  },
  {
    title: "Display Numbers",
    description: "Displays the number of numbers keyed in",
    cat: "math",
    route: "display",
    component: DisplayNo,
  },
  {
    title: "Fraction Simplifier",
    description: "Simplifies fraction",
    cat: "math",
    route: "fraction-converter",
    component: FractionConverter,
  },
  {
    title: "Add Numbers",
    description: "Adds numbers given",
    cat: "math",
    route: "addnumbers",
    component: AddNumbers,
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
    imgUrl:
      "https://res.cloudinary.com/kayden/image/upload/v1672909150/1-master_f3dj1n.jpg",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
    imgUrl:
      "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
    imgUrl:
      "https://res.cloudinary.com/kayden/image/upload/v1672909150/1-master_f3dj1n.jpg",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
    imgUrl:
      "https://res.cloudinary.com/kayden/image/upload/v1672909158/1-livingroom_xhsgac.jpg",
  },
];

export const enquireExternal = false;
