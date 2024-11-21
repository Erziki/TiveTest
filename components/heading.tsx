import { cn } from "@/lib/utils";

// Component file (Heading.tsx)
interface HeadingProps {
  title: string;
  description: string;
  icon: React.ElementType; // Allows dynamic icons
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Usage example:
import { HomeIcon } from "lucide-react";

<Heading
  title="Dashboard"
  description="Manage your settings"
  icon={HomeIcon}
  iconColor="text-blue-500"
  bgColor="bg-gray-200"
/>;
