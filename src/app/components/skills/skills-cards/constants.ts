import AWSIcon from "@/app/icons/aws-icon";
import DynamoDBIcon from "@/app/icons/dynamodb-icon";
import FigmaIcon from "@/app/icons/figma-icon";
import GoIcon from "@/app/icons/go-icon";
import GraphQLIcon from "@/app/icons/graphql-icon";
import JavaScriptIcon from "@/app/icons/javascript-icon";
import JestIcon from "@/app/icons/jest-icon";
import NextIcon from "@/app/icons/next-icon";
import PostgreSQLIcon from "@/app/icons/postgresql-icon";
import PythonIcon from "@/app/icons/python-icon";
import ReactIcon from "@/app/icons/react-icon";
import SassIcon from "@/app/icons/sass-icon";
import TypeScriptIcon from "@/app/icons/typescript-icon";
import type { ElementType } from "react";

interface SkillsCardListItem {
  iconElement: ElementType;
  iconDescription: string;
}

export interface SkillsCard {
  listItems: SkillsCardListItem[];
  title: string;
}

const feDevelopmentCard: SkillsCard = {
  listItems: [
    {
      iconDescription: "React",
      iconElement: ReactIcon,
    },
    {
      iconDescription: "Next",
      iconElement: NextIcon,
    },
    {
      iconDescription: "TypeScript",
      iconElement: TypeScriptIcon,
    },
    {
      iconDescription: "JavaScript",
      iconElement: JavaScriptIcon,
    },
    {
      iconDescription: "CSS/SCSS/SASS",
      iconElement: SassIcon,
    },
    {
      iconDescription: "Jest",
      iconElement: JestIcon,
    },
    {
      iconDescription: "Figma",
      iconElement: FigmaIcon,
    },
  ],
  title: "Front-end Development / UX Design",
};

const beDevelopmentCard: SkillsCard = {
  listItems: [
    {
      iconDescription: "Go",
      iconElement: GoIcon,
    },
    {
      iconDescription: "Python",
      iconElement: PythonIcon,
    },
    {
      iconDescription: "GraphQL",
      iconElement: GraphQLIcon,
    },
    {
      iconDescription: "AWS",
      iconElement: AWSIcon,
    },
    {
      iconDescription: "DynamoDB",
      iconElement: DynamoDBIcon,
    },
    {
      iconDescription: "PostgreSQL",
      iconElement: PostgreSQLIcon,
    },
  ],
  title: "Full-stack / Back-end Development",
};

export const skillCards: SkillsCard[] = [feDevelopmentCard, beDevelopmentCard];
