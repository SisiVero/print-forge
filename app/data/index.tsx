import model from "@/public/svg/model.svg";
import community from "@/public/svg/community.svg";
import free from "@/public/svg/free.svg";
import like from "@/public/svg/like.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export const aboutData = [
  {
    icon: model,
    heading: "100K+ Models",
    text: "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
  },
  {
    icon: community,
    heading: "Active Community",
    text: "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
  },
  {
    icon: free,
    heading: "Free to Use",
    text: "Most models are free to download, with optional premium features for power users.",
  },
];


type ModelDataTypes = {
  id: number;
  heading: string;
  description: string;
  likeIcon: string | StaticImport;
  tag: string;
  likeNumber: number;
};

export const modelData: ModelDataTypes[] = [
  {
    id: 1,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 2,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 3,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 4,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 5,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 6,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
      {
    id: 7,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 8,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
    {
    id: 9,
    heading: "Printer Upgrade Kit",
    description: "Enhancement parts for 3D printer performance",
    tag: "3D-printer",
    likeIcon: like,
    likeNumber: 1789,
  },
];


