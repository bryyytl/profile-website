import {
  IconAccessible,
  IconBrandSpeedtest,
  IconBrush,
  IconHeartRateMonitor,
  IconMapQuestion,
  IconRoute,
} from "@tabler/icons-react";
import type { ElementType } from "react";

export interface PersonalInterest {
  icon: ElementType;
  title: string;
  description: string;
}

const designSystemsCard: PersonalInterest = {
  description:
    "Experienced in creating and maintaining responsive (desktop & mobile) design systems for small and medium size brands.",
  icon: IconBrush,
  title: "UX design systems",
};

const accessibilityCard: PersonalInterest = {
  description:
    "Champion of building accessible platforms for all users - regardless of background.",
  icon: IconAccessible,
  title: "Application accessibility",
};

const performanceCard: PersonalInterest = {
  description:
    "Experienced in variety of performance optimization techniques with proven record of enhancing web page load performance by more than 50%.",
  icon: IconBrandSpeedtest,
  title: "Application performance optimization",
};

const testingCard: PersonalInterest = {
  description:
    "Experienced in leading adoption of unit, integration, and end-to-end test suite development for small and medium sized platforms.",
  icon: IconHeartRateMonitor,
  title: "User-centric automated testing",
};

const platformSolutionsCard: PersonalInterest = {
  description:
    "Interest in developing platform solutions, product solutions, and internal tools for a variety of use cases.",
  icon: IconMapQuestion,
  title: "Development of large and small scale solutions",
};

const productRoadmapCard: PersonalInterest = {
  description:
    "Experienced in guiding product direction and details from the start, middle, and end of projects - particularly through the adoption of agile practices.",
  icon: IconRoute,
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
