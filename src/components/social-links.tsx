import { Icons } from "@/components/icons";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";

interface SocialLink {
    url: string;
    icon: string;
    navbar: boolean;
}

interface SocialLinksProps {
    social: Record<string, SocialLink>;
}

export function SocialLinks({ social }: SocialLinksProps) {
    return (
        <TooltipProvider>
            {Object.entries(social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social], index) => {
                    const Icon = Icons[social.icon as keyof typeof Icons];
                    return (
                        <div key={name} className="flex items-center gap-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href={social.url} target="_blank">
                                        <Icon className="size-5 text-gray-400" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                            {index !== Object.entries(social).length - 1 && <Separator className="h-5 bg-border w-px" orientation="vertical" />}
                        </div>
                    );
                })}
        </TooltipProvider>
    );
}
