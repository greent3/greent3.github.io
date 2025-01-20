import { useTheme, useMediaQuery, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { themeByComponent } from "../theme/theme";
import recruiting1 from "../../../content/images/recruiting2.png";
import ct1 from "../../../content/images/ct1.png";
import af2 from "../../../content/images/af2.png";
import src_logo_1 from "../../../content/images/src_logo_1.png";

const experienceDescArr = [
  {
    company: "Scientific Research Corporation",
    title: "Software Engineer",
    startDate: "Apr2024",
    endDate: "Current",
    desc: [
      "Leveraging frameworks like Spring, React, and Express to deliver robust and scalable server-side and full-stack applications",
      "Architecting, improving, and running test processes to minimize faults in various deployed environments",
      "Conducting monthly product demonstrations for clients; ensuring alignment with requirements",
    ],
    primaryTools: [
      "Java",
      "Typescript",
      "React",
      "Spring",
      "Express",
      "Github",
      "VS Code",
      "Jira",
    ],
    img: src_logo_1,
  },
  {
    company: "Code/+/Trust",
    title: "Full-Stack Web Developer",
    startDate: "Jan2023",
    endDate: "Apr 2024",
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
          "Implemented UI, hooks, and endpoints for reactive components and features",
          "Architecting and implementing changes requested by client",
          "Testing, debugging, and design improvement",
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
      "Designed and implemented ML algorithms that minimized serverless computing costs",
      "Implemented relational database schemas, automation scripts, and integrated internal apps with external APIs",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        px: isMobile ? 2 : 0, // Add padding for smaller screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "930px",
          flexDirection: "column", // Always column for better stacking on all screens
          flex: 1,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flex: 1,
            maxWidth: "930px",
            gap: isMobile ? 4 : 7, // Adjust gap between sections for mobile
          }}
        >
          <Typography
            sx={{
              ...themeByComponent.sectionTitle,
              pb: 7,
              fontSize: isMobile ? 30 : 40, // Adjust font size for smaller screens
            }}
          >
            Experience
          </Typography>
          {experienceDescArr.map((job, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Adjust layout for mobile
                mb: isMobile ? 6 : 12,
                gap: 2,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", position: "relative" }}>
                  <img
                    src={job.img}
                    alt={""}
                    width="auto"
                    height={
                      isMobile
                        ? "80px"
                        : index === 1 || index === 0
                        ? "100px"
                        : "250px"
                    }
                  />
                </Box>
                <Typography
                  sx={{
                    mb: 2,
                    ...themeByComponent.sectionSubtitle,
                    fontSize: isMobile ? 22 : 28,
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
                      {job.desc.map((lineItem, lineIndex) => (
                        <Typography key={lineIndex}>• {lineItem}</Typography>
                      ))}
                    </Box>
                  </Box>
                )}
                {job.primaryTools && (
                  <Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                        Primary Tools:
                      </Typography>
                      {job.primaryTools.map((tool, toolIndex) => (
                        <Typography key={toolIndex}>• {tool}</Typography>
                      ))}
                    </Box>
                  </Box>
                )}
                {job.projects && (
                  <Stack sx={{ pt: 1 }}>
                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                      {`Projects:`}
                    </Typography>
                    {job.projects.map((project, projIndex) => (
                      <Stack key={projIndex}>
                        <Box sx={{ flexDirection: "row" }}>
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
                            }}
                          >{`${project.desc}`}</Typography>
                          {project.bullets.map((bullet, bulletIndex) => (
                            <Typography
                              key={bulletIndex}
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
