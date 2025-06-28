import AWSIcon from "@/components/icons/aws-icon";
import DynamoDBIcon from "@/components/icons/dynamodb-icon";
import FigmaIcon from "@/components/icons/figma-icon";
import GoIcon from "@/components/icons/go-icon";
import GraphQLIcon from "@/components/icons/graphql-icon";
import JavaScriptIcon from "@/components/icons/javascript-icon";
import JestIcon from "@/components/icons/jest-icon";
import NextIcon from "@/components/icons/next-icon";
import PostgreSQLIcon from "@/components/icons/postgresql-icon";
import PythonIcon from "@/components/icons/python-icon";
import ReactIcon from "@/components/icons/react-icon";
import SassIcon from "@/components/icons/sass-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";
import type { ElementType } from "react";

interface SkillListItem {
  iconElement: ElementType;
  iconDescription: string;
}

export interface Skill {
  listItems: SkillListItem[];
  title: string;
}

const feDevelopmentCard: Skill = {
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

const beDevelopmentCard: Skill = {
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

export const skillCards: Skill[] = [feDevelopmentCard, beDevelopmentCard];
