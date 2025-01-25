import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

interface MobileNavProps {
    name: string;
    social: any;
    location: {
        city: string;
        country: {
            flag: string;
        };
        link: string;
    };
}

export function MobileNav({ name, social, location }: MobileNavProps) {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden flex items-center gap-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pr-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <a href={location.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span className="text-sm">{location.city}</span>
                        <span className="text-sm">{location.country.flag}</span>
                    </a>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Available for hire</span>
                    </div>
                </div>
                <Separator />
                <nav className="flex items-center gap-4">
                    <SocialLinks social={social} />
                </nav>
                <Separator />
                <ModeToggle />
            </SheetContent>
        </Sheet>
    );
}
