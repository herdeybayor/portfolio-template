import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useState } from "react";

interface EmailButtonProps {
    email: string;
}

export function EmailButton({ email }: EmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    return (
        <Button variant="outline" size="lg" onClick={copyEmail}>
            {copied ? "Copied!" : "Copy email"}
            <Icons.copy className="size-4 ml-2" />
        </Button>
    );
}
