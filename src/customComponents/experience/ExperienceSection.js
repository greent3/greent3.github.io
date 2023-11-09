import { Typography, Box, Stack, } from "@mui/material";
import React from "react";
import { customTheme, themeByComponent } from "../theme/theme";
import uh3 from "../../../content/images/uh3.png"
import recruiting1 from "../../../content/images/recruiting2.png"
import ct1 from "../../../content/images/ct1.png"
import af2 from "../../../content/images/af2.png"



const experienceDescArr = [
    {
        company: "Code/+/Trust",
        title: "Full-Stack Web Developer",
        startDate: "Jan2023",
        endDate: "Current",
        desc: ["Building, debugging, and maintaining web & mobile apps for enterprise clients", "100+ merged PRs (as of Oct2023)"],
        primaryTools: ["TypeScript", "React/Native", "TanstackQuery", "Express", "Prisma ORM", "SQL", "CSS/UI-Libraries", "Github"],
        otherTools: ["Redis", "Expo", "VS Code", "Twilio"],
        img: ct1
    },
    {
        company: "Reesby IT",
        title: "Python Developer (Intern)",
        startDate: "July2022",
        endDate: "Oct2022",
        desc: ["Designed and implemented ML algorithms that minimized serverless computing costs",
            "Implemented relational database functionality",
            "Integrated external APIs with internal web apps"],
        primaryTools: ["Python", "Django"],
        otherTools: ["Jupyter", "GitLab",],
        img: recruiting1
    },
    {
        company: "University of Hawai'i",
        title: "Assistant TA",
        startDate: "Spring 2020",
        endDate: "Spring 2020",
        desc: ["Assisted in instruction of introductury programming concepts (Primitives, OOP)"],
        primaryTools: ["Java"],
        otherTools: ["Eclipse IDE"],
        img: uh3
    },
    {
        company: "US Air Force",
        title: "Medic 🏥",
        startDate: "July 2013",
        endDate: "Aug 2018",
        desc: ["Provided high-quality healthcare to members of the DoD and their families."],
        img: af2
    },

]



export default function ExperienceSection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
            <Box sx={{ maxWidth: '930px', m: 4.5 }}>
                <Stack sx={{ display: 'flex', flex: 7 / 10 }}>
                    <Typography sx={{ ...themeByComponent.sectionTitle, pb: 7, fontSize: 40 }}>
                        Experience
                    </Typography>
                    {experienceDescArr.map((job, index) => (
                        <Box sx={{ display: 'flex', flexDirection: index % 2 === 0 ? "row" : "row-reverse", mb: 12, gap: 2 }}>
                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ mb: 2, ...themeByComponent.sectionSubtitle, fontSize: 28 }}>
                                    {`${job.company}`}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1, }}>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        {`${job.title}`}
                                    </Typography>
                                    {job.startDate && job.endDate && <Typography sx={{ ...themeByComponent.regularText }}>
                                        {`  ${job.startDate}-${job.endDate}`}
                                    </Typography>}
                                </Box>
                                {job.desc && <Box>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        Desc:
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        {job.desc.map((lineItem) => (
                                            <Typography>
                                                • {lineItem}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>}
                                {job.primaryTools && <Box> <Box sx={{ mb: 1 }}>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        Primary Tools:
                                    </Typography>
                                    {job.primaryTools.map((tool) => (
                                        <Typography>
                                            • {tool}
                                        </Typography>
                                    ))}
                                </Box> </Box>}
                                {job.otherTools && <Box><Box>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        Other Tools:
                                    </Typography>
                                    {job.otherTools.map((tool) => (
                                        <Typography>
                                            • {tool}
                                        </Typography>
                                    ))}
                                </Box> </Box>}
                            </Box>
                            <Box sx={{ display: 'flex', flex: '1', pt: 2 }}>
                                {index === 0 ?
                                    <img src={job.img} width='auto' height='100px' />
                                    :
                                    <img src={job.img} width='400px' height='auto' />}

                            </Box>

                        </Box>

                    ))}

                </Stack>
            </Box>

        </Box>
    )
}