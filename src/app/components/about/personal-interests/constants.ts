import {
  IconAccessible,
  IconBrandSpeedtest,
  IconBrush,
  IconHeartRateMonitor,
  IconMapQuestion,
  IconRoute,
} from "@tabler/icons-react";
import type { ElementType } from "react";

export interface PersonalInterestCard {
  icon: ElementType;
  title: string;
  description: string;
}

const designSystemsCard: PersonalInterestCard = {
  icon: IconBrush,
  title: "UX design systems",
  description:
    "Experienced in creating and maintaining responsive (desktop & mobile) design systems for small and medium size brands.",
};

const accessibilityCard: PersonalInterestCard = {
  icon: IconAccessible,
  title: "Application accessibility",
  description:
    " Champion of building accessible platforms for all users - regardless of background.",
};

const performanceCard: PersonalInterestCard = {
  icon: IconBrandSpeedtest,
  title: "Application performance optimization",
  description:
    "Experienced in variety of performance optimization techniques with proven record of enhancing web page load performance by more than 50%.",
};

const testingCard: PersonalInterestCard = {
  icon: IconHeartRateMonitor,
  title: "User-centric automated testing",
  description:
    "Experienced in leading adoption of unit, integration, and end-to-end test suite development for small and medium sized platforms.",
};

const platformSolutionsCard: PersonalInterestCard = {
  icon: IconMapQuestion,
  title: "Development of large and small scale solutions",
  description:
    "Interest in developing platform solutions, product solutions, and internal tools for a variety of use cases.",
};

const productRoadmapCard: PersonalInterestCard = {
  icon: IconRoute,
  title: "Product roadmap champion",
  description:
    "Experienced in guiding product direction and details from the start, middle, and end of projects - particularly through the adoption of agile practices.",
};

export const personalInterestCards: PersonalInterestCard[] = [
  designSystemsCard,
  accessibilityCard,
  performanceCard,
  testingCard,
  platformSolutionsCard,
  productRoadmapCard,
];
