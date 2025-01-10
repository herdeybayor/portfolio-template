import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileAvatarProps {
    name: string;
    avatarUrl: string;
    initials: string;
    className?: string;
}

export function ProfileAvatar({ name, avatarUrl, initials, className }: ProfileAvatarProps) {
    return (
        <Avatar className={className}>
            <AvatarImage alt={name} src={avatarUrl} />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    );
}
