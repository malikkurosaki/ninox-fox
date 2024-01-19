import { MdFreeCancellation, MdGrading, MdHub, MdJoinLeft, MdLiveTv, MdOutlineStarBorderPurple500, MdOutlineStars, MdStorage, MdVerifiedUser } from "react-icons/md";

export const DataNavbarBuka = [
    {
      key: "1",
      link: "/summary",
      icon: MdStorage,
      label: "BERANDA"
    },
    {
      key: "2",
      link: "/popularity",
      icon: MdOutlineStarBorderPurple500,
      label: "METRIK POPULARITAS"
    },
    {
      key: "3",
      link: "/insights",
      icon: MdOutlineStars,
      label: "WAWASAN REGIONAL"
    },
    {
      key: "4",
      link: "/pairing",
      icon: MdJoinLeft,
      label: "DATA PASANGAN REGIONAL"
    },
    {
      key: "5",
      link: "/step",
      icon: MdFreeCancellation,
      label: "PENILAIAN STEP"
    },
    {
      key: "6",
      link: "/swot",
      icon: MdGrading,
      label: "EVALUASI SWOT"
    },
    {
      key: "7",
      link: "/ml-ai",
      icon: MdHub,
      label: "ML-AI"
    },

  ]