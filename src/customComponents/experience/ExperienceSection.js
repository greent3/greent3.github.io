import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import { themeByComponent } from "../theme/theme";
import recruiting1 from "../../../content/images/recruiting2.png";
import ct1 from "../../../content/images/ct1.png";
import af2 from "../../../content/images/af2.png";

const experienceDescArr = [
  {
    company: "Code/+/Trust",
    title: "Full-Stack Web Developer",
    startDate: "Jan2023",
    endDate: "Current",
    desc: [
      "Building RESTful APIs and server-side logic using Node.js, Express, and Prisma ORM for efficient data retrieval and manipulation",
      "Creating user-friendly interfaces and implementing interactive features using React, including component development, state management, and API integration",
      "Collaborating with designers to implement visual designs using CSS and Material-UI, focusing on aesthetics, consistency, and responsive design principles",
      "Participating in Agile methodologies, attending stand-up meetings, and contributing to sprint planning and retrospectives",
    ],
    primaryTools: [
      "TypeScript",
      "React/Native",
      "TanstackQuery",
      "Express",
      "Prisma ORM",
      "SQL",
      "CSS/UI-Libraries",
      "Github",
      "VS Code",
    ],
    projects: [
      {
        title: "Stareworthy",
        desc: "Scrapbook builder web app where users can create scrapbooks from templates, add custom images and text, and order a physical book.",
        bullets: [
          "Implemented stateful react logic like contexts and reducers",
          "Built dynamic and reusable UI components",
          "Implemented hooks, REST endpoints, and batch database transactions",
          "Provided technical guidance to junior devs",
        ],
      },
      {
        title: "Help Group",
        desc: "Web-based platform designed to streamline the disability claims process for veterans dealing with the VA.",
        bullets: [
          "Implemented UI, hooks, and endpoints for reactive components and features.",
          "Squashed dozens of bugs.",
        ],
      },
    ],
    img: ct1,
  },
  {
    company: "Reesby IT",
    title: "Python Developer (Intern)",
    startDate: "July2022",
    endDate: "Oct2022",
    desc: [
      "Designed and implemented an ML algorithm to cluster like candidates based on resume data",
      "Implemented relational database schemas",
      "Built scripts to read and parse CSV data",
      "Integrated external APIs with internal web apps",
    ],
    primaryTools: ["Python", "Django"],
    img: recruiting1,
  },
  {
    company: "US Air Force",
    title: "Medic 🏥",
    startDate: "July 2013",
    endDate: "Aug 2018",
    desc: [
      "Provided high-quality healthcare to members of the DoD and their families.",
    ],
    img: af2,
  },
];

export default function ExperienceSection() {
  // day js function to calculate months
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "930px",
          flex: 1,
        }}
      >
        <Stack sx={{ display: "flex", flex: 10 / 10, maxWidth: "930px" }}>
          <Typography
            sx={{ ...themeByComponent.sectionTitle, pb: 7, fontSize: 40 }}
          >
            Experience
          </Typography>
          {experienceDescArr.map((job, index) => (
            <Box sx={{ display: "flex", flexDirection: "row", mb: 12, gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", position: "relative" }}>
                  {index === 0 ? (
                    <img src={job.img} width="auto" height="80px" />
                  ) : (
                    <img src={job.img} width="auto" height="250px" />
                  )}
                </Box>
                <Typography
                  sx={{
                    mb: 2,
                    ...themeByComponent.sectionSubtitle,
                    fontSize: 28,
                  }}
                >
                  {`${job.company}`}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                  <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                    {`${job.title}`}
                  </Typography>
                  {job.startDate && job.endDate && (
                    <Typography sx={{ ...themeByComponent.regularText }}>
                      {`  ${job.startDate} - ${job.endDate}`}
                    </Typography>
                  )}
                </Box>
                {job.desc && (
                  <Box>
                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                      Desc:
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      {job.desc.map((lineItem) => (
                        <Typography>• {lineItem}</Typography>
                      ))}
                    </Box>
                  </Box>
                )}
                {job.primaryTools && (
                  <Box>
                    {" "}
                    <Box sx={{ mb: 1 }}>
                      <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                        Primary Tools:
                      </Typography>
                      {job.primaryTools.map((tool) => (
                        <Typography>• {tool}</Typography>
                      ))}
                    </Box>{" "}
                  </Box>
                )}
                {job.projects && (
                  <Stack sx={{ pt: 1 }}>
                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                      {`Projects:`}
                    </Typography>

                    {job.projects.map((project) => (
                      <Stack>
                        <Box
                          sx={{
                            flexDirection: "row",
                          }}
                        >
                          <Typography
                            sx={{
                              ...themeByComponent.regularText,
                              fontWeight: 600,
                              display: "inline",
                              color: "purple",
                            }}
                          >{`${project.title}: `}</Typography>
                          <Typography
                            sx={{
                              ...themeByComponent.regularText,
                              // display: "inline",
                            }}
                          >{`${project.desc}`}</Typography>
                          {project.bullets.map((bullet) => (
                            <Typography
                              sx={{
                                ...themeByComponent.regularText,
                              }}
                            >{`• ${bullet}`}</Typography>
                          ))}
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
