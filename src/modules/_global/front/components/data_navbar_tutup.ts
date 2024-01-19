import { MdFreeCancellation, MdGrading, MdHub, MdJoinLeft, MdLiveTv, MdOutlineStarBorderPurple500, MdOutlineStars, MdStorage, MdVerifiedUser } from "react-icons/md";

export const DataNavbarTutup = [
  {
    key: "1",
    link: "/summary",
    icon: MdStorage,
    label: "Beranda"
  },
  {
    key: "2",
    link: "/popularity",
    icon: MdOutlineStarBorderPurple500,
    label: "Metrik Popularitas"
  },
  {
    key: "3",
    link: "/insights",
    icon: MdOutlineStars,
    label: "Wawasan Regional"
  },
  {
    key: "4",
    link: "/pairing",
    icon: MdJoinLeft,
    label: "Data Pasangan Regional"
  },
  {
    key: "5",
    link: "/step",
    icon: MdFreeCancellation,
    label: "Penilaian STEP"
  },
  {
    key: "6",
    link: "/swot",
    icon: MdGrading,
    label: "Evaluasi SWOT"
  },
  {
    key: "7",
    link: "/ml-ai",
    icon: MdHub,
    label: "ML-AI"
  },

]