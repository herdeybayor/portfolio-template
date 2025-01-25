import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileAvatarProps {
    name: string;
    avatarUrl: string;
    initials: string;
    className?: string;
    fallbackClassName?: string;
}

export function ProfileAvatar({ name, avatarUrl, initials, className, fallbackClassName }: ProfileAvatarProps) {
    return (
        <Avatar className={className}>
            <AvatarImage alt={name} src={avatarUrl} />
            <AvatarFallback className={fallbackClassName}>{initials}</AvatarFallback>
        </Avatar>
    );
}
