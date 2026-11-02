import type { IconType } from "react-icons";
import { FaTelegramPlane, FaVk, FaYoutube } from "react-icons/fa";
import { cn } from "@/shared/lib/cn";

type SocialLink = {
    name: string
    href: string
    Icon: IconType
}

const socialLinks: SocialLink[] = [
    { name: 'YouTube', href: 'https://youtu.be/1VEogQzZ93U?si=T4RmLi1x_25vm7jG', Icon: FaYoutube },
    { name: 'VK', href: 'https://vk.com', Icon: FaVk },
    { name: 'Telegram', href: 'https://t.me', Icon: FaTelegramPlane },
]

type SocialLinksProps = {
    className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
    return (
        <ul className={cn('flex items-center gap-5', className)}>
            {socialLinks.map(({ name, href, Icon }) => (
                <li key={name}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={name}
                        className="text-gold transition-opacity hover:opacity-70"
                    >
                        <Icon size={28} />
                    </a>
                </li>
            ))}
        </ul>
    )
}