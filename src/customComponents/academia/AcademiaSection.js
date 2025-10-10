import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import { themeByComponent } from "../theme/theme";
import uh3 from "../../../content/images/uh3.png";
import wgu from "../../../content/images/wgu.png";

const subjectArr = [
  "Java",
  "C++",
  "SQL",
  "data structures",
  "program structure",
  "OOP",
  "unit testing",
  "algorithms and runtime",
  "discrete math",
  "calculus",
];
const academiaDescArr = [
  {
    school: "Western Governor's University",
    degree: "B.S. Computer Science",
    startDate: "Jan 2025",
    desc: [
      "Advanced AI",
      "Advanced Java",
      "Networking",
      "Linux",
      "Computer Architecture",
    ],
    endDate: "Oct 2025",
    img: wgu,
  },
  {
    school: "University of Hawai'i",
    degree: "B.A. Computer Science & Chinese",
    startDate: "Fall 2018",
    endDate: "Fall 2021",
    desc: subjectArr,
    img: uh3,
    note: "Left university during covid to gain experience in software development. Finished my remaining degree requirements at WGU.",
  },
];

const certsArr = [
  {
    title: "Harvard's AI Programming with Python Course",
    date: "June 2021",
  },
  {
    title: "Global Seal of Bi-literacy (Mandarin Chinese)",
    date: "June 2021",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    date: "Dec 2022",
  },
  {
    title: "LPI Linux Essentials",
    date: "Sept 2025",
  },
];

const languagesArr = [
  {
    language: "Mandarin Chinese",
    level: "Intermediate",
    cert: "Global Seal of Biliteracy: Functional Fluency",
  },
  {
    language: "Japanese",
    level: "Lower Intermediate",
    cert: "n/a (roughly N4)",
  },
];

export default function AcademiaSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Box sx={{ maxWidth: "930px", m: 4.5 }}>
        <Stack sx={{ display: "flex", flex: 7 / 10, gap: 4 }}>
          <Stack
            sx={{
              gap: 4,
            }}
          >
            <Typography
              sx={{ ...themeByComponent.sectionTitle, pb: 2, fontSize: 40 }}
            >
              Academia
            </Typography>
            {academiaDescArr.map((academia, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItems: "center",
                  // mb: 12,
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ mb: 2, ...themeByComponent.sectionTitle }}>
                    {`${academia.school}`}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                    <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                      {`${academia.degree}`}
                    </Typography>
                    <Typography sx={{ ...themeByComponent.regularText }}>
                      {academia.endDate
                        ? `  ${academia.startDate}-${academia.endDate}`
                        : `${academia.startDate}`}
                    </Typography>
                  </Box>
                  <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                    Coursework:
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {academia.desc.map((lineItem) => (
                      <Typography>• {lineItem}</Typography>
                    ))}
                  </Box>
                  {academia.note && (
                    <>
                      <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                        Note:
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Typography>{academia.note}</Typography>
                      </Box>
                    </>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={academia.img} width="auto" height="300" />
                </Box>
              </Box>
            ))}
          </Stack>

          <Stack>
            <Typography
              sx={{ ...themeByComponent.sectionTitle, pb: 2, fontSize: 40 }}
            >
              Certs
            </Typography>
            {certsArr.map((cert, index) => (
              <Box sx={{ pb: 2 }}>
                <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                  {`• ${cert.title}`}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                  <Typography sx={{ ...themeByComponent.regularText }}>
                    {`${cert.date}`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          <Stack>
            <Typography
              sx={{ ...themeByComponent.sectionTitle, pb: 2, fontSize: 40 }}
            >
              Languages
            </Typography>
            {languagesArr.map((lang, index) => (
              <Box sx={{ pb: 2 }}>
                <Typography sx={{ ...themeByComponent.sectionSubtitle }}>
                  {` ${lang.language}`}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                  <Typography sx={{ ...themeByComponent.regularText }}>
                    {`Level: ${lang.level}`}
                  </Typography>
                  <Typography sx={{ ...themeByComponent.regularText }}>
                    {`Cert: ${lang.cert}`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
