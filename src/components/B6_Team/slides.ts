import {svgIcons} from "../../assets/svgIcons";
import src0 from "../../assets/png/B6_Team/0.png";

export interface ISlide {
    src: string
    name: string
    job: string
    description: string
    socials: {
            icon: JSX.Element
            href: string
        }[]
}

export const slides: ISlide[] = [
    {
        src: src0,
        name: "Alex SafeHaven",
        job: "Strategy & Finance",
        description: "Important text in a few lines about a team member Important text about a team member",
        socials: [
            {
                icon: svgIcons.twitter_dark,
                href: "#"
            },
            {
                icon: svgIcons.instagram,
                href: "#"
            },
        ],
    },
    {
        src: src0,
        name: "Oliver Sakov",
        job: "Engineering",
        description: "Important text in a few lines about a team member Important text about a team member",
        socials: [
            {
                icon: svgIcons.instagram,
                href: "#"
            },
        ],
    },
    {
        src: src0,
        name: "Ryder SafeHaven",
        job: "Founder",
        description: "Important text in a few lines about a team member Important text about a team member",
        socials: [
            {
                icon: svgIcons.twitter_dark,
                href: "#"
            },
            {
                icon: svgIcons.instagram,
                href: "#"
            },
        ],
    },
    {
        src: src0,
        name: "Vitaliy Klichko",
        job: "Business Development",
        description: "Important text in a few lines about a team member Important text about a team member",
        socials: [
            {
                icon: svgIcons.twitter_dark,
                href: "#"
            },
            {
                icon: svgIcons.instagram,
                href: "#"
            },
            {
                icon: svgIcons.medium_dark,
                href: "#"
            },
        ],
    },
]
