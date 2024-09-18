import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconSquareRoundedLetterVFilled,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Collaborative Learning",
      description:
        "Share coding insights and learn from experienced developers worldwide.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Code Sharing",
      description:
        "Easily share your code snippets and projects with the community.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Problem Solving",
      description:
        "Get help with coding challenges and troubleshoot issues with experts.",
      icon: <IconSquareRoundedLetterVFilled />,
    },
    {
      title: "Resource Library",
      description: "Access a wide range of coding resources, tutorials, and articles.",
      icon: <IconCloud />,
    },
    {
      title: "Skill Development",
      description: "Enhance your coding skills through shared knowledge and real-world examples.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with like-minded developers and expand your professional network.",
      icon: <IconHelp />,
    },
    {
      title: "Project Showcasing",
      description:
        "Share your coding projects and get feedback from fellow developers.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Stay Updated",
      description: "Stay informed about the latest coding trends, tools, and technologies.",
      icon: <IconHeart />,
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative text-center mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-3xl font-bold md:text-7xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>Features section</span>
          </div>
          <div className="relative text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>Features section</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
