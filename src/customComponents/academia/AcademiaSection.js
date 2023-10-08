import { Typography, Box, Stack, } from "@mui/material";
import React from "react";
import { customTheme, themeByComponent } from "../theme/theme";
import uh3 from "../../../content/images/uh3.png"


const subjectArr = ['Java', 'C++', 'SQL', 'data structures', 'program structure', 'OOP', 'unit testing', 'algorithms and runtime', 'discrete math', 'calculus']
const academiaDescArr = [
    {
        school: "University of Hawai'i",
        degree: "143 Credits - Bachelors Computer Science & Chinese",
        startDate: "Fall 2018",
        endDate: "Fall 2021",
        desc: subjectArr,
        img: uh3,
        note: "I did not graduate. Rather than take required filler courses like Astrology and Botany, I elected to leave university and gain experience in software development."
    },
]

const certsArr = [
    {
        title: "AWS Certified Cloud Practicioner",
        date: "Dec2022 - Dec2025",
    },
    {
        title: "Harvard's AI Programming with Python",
        date: "June 2021",
    },
    {
        title: "Global Seal of Biliteracy, Mandarin Chinese",
        date: "May 2020",
    },
]



export default function AcademiaSection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, }}>
            <Box sx={{ maxWidth: '930px', m: 4.5 }}>

                <Stack sx={{ display: 'flex', flex: 7 / 10 }}>
                    <Typography sx={{ ...themeByComponent.sectionTitle, mb: 4, fontSize: 40 }}>
                        Academia
                    </Typography>
                    {academiaDescArr.map((academia, index) => (
                        <Box sx={{ display: 'flex', flexDirection: index % 2 === 0 ? "row" : "row-reverse", mb: 12, gap: 2 }}>
                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ mb: 2, ...themeByComponent.sectionSubtitle }}>
                                    {`${academia.school}`}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1, }}>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        {`${academia.degree}`}
                                    </Typography>
                                    <Typography sx={{ ...themeByComponent.regularText }}>
                                        {`  ${academia.startDate}-${academia.endDate}`}
                                    </Typography>
                                </Box>
                                <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                    Coursework:
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    {academia.desc.map((lineItem) => (
                                        <Typography>
                                            • {lineItem}
                                        </Typography>
                                    ))}
                                </Box>
                                {academia.note && <>
                                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                        Note:
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography>
                                            {academia.note}
                                        </Typography>
                                    </Box>
                                </>}
                            </Box>
                            <Box sx={{ display: 'flex', flex: '1' }}>

                                <img src={academia.img} width='auto' height='400' />

                            </Box>

                        </Box>

                    ))}

                    <Typography sx={{ ...themeByComponent.sectionTitle, pb: 4, fontSize: 40 }}>
                        Certs
                    </Typography>
                    {certsArr.map((cert, index) => (
                        <Box sx={{ pb: 2 }}>
                            <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                                {`• ${cert.title}`}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1, }}>
                                <Typography sx={{ ...themeByComponent.regularText }}>
                                    {`${cert.date}`}
                                </Typography>
                            </Box>
                        </Box>

                    ))}

                </Stack>
            </Box >
        </Box >
    )
}