import AccessibleIcon from "@/components/icons/accessible-icon";
import BrandSpeedtestIcon from "@/components/icons/brand-speedtest-icon";
import HeartRateMonitorIcon from "@/components/icons/heart-rate-monitor-icon";
import MapQuestionIcon from "@/components/icons/map-question-icon";
import RouteIcon from "@/components/icons/route-icon";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import type { ElementType } from "react";

export interface PersonalInterest {
  description: string;
  icon: ElementType;
  title: string;
}

const designSystemsCard: PersonalInterest = {
  description:
    "Experienced in creating and maintaining responsive (desktop & mobile) design systems for small and medium size brands.",
  icon: PaintBrushIcon,
  title: "UX design systems",
};

const accessibilityCard: PersonalInterest = {
  description:
    "Champion of building accessible platforms for all users - regardless of background.",
  icon: AccessibleIcon,
  title: "Application accessibility",
};

const performanceCard: PersonalInterest = {
  description:
    "Experienced in variety of performance optimization techniques with proven record of enhancing web page load performance by more than 50%.",
  icon: BrandSpeedtestIcon,
  title: "Application performance optimization",
};

const testingCard: PersonalInterest = {
  description:
    "Experienced in leading adoption of unit, integration, and end-to-end test suite development for small and medium sized platforms.",
  icon: HeartRateMonitorIcon,
  title: "User-centric automated testing",
};

const platformSolutionsCard: PersonalInterest = {
  description:
    "Interest in developing platform solutions, product solutions, and internal tools for a variety of use cases.",
  icon: MapQuestionIcon,
  title: "Development of large and small scale solutions",
};

const productRoadmapCard: PersonalInterest = {
  description:
    "Experienced in guiding product direction and details from the start, middle, and end of projects - particularly through the adoption of agile practices.",
  icon: RouteIcon,
  title: "Product roadmap champion",
};

export const personalInterests: PersonalInterest[] = [
  platformSolutionsCard,
  designSystemsCard,
  performanceCard,
  accessibilityCard,
  testingCard,
  productRoadmapCard,
];
