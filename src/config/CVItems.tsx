export interface CVItem {
  key: string
  title: string
  company: string
  duration: string
  bulletPoints: string[]
}

export const getCVItems = (): CVItem[] => {
  return [
    {
      key: "softwareag",
      title: "Working Student",
      company: "Software AG",
      duration: "2019 - Present",
      bulletPoints: [
        "Designing, developing and testing web applications.",
        "Learning PHP, Java, TypeScript, React, CSS, SQL.",
        "Creating custom UI components with React and Typescript.",
        "Migrating the ARIS community from Drupal 7 to 9 and updating the UI.",
        "Develop a web app for administrative tasks in ARIS Connect."
      ]
    },
    {
      key: "university",
      title: "Bachelor Of Mathematics",
      company: "Saarland University",
      duration: "2018 - 2022",
      bulletPoints: [
        "Focus on Algebra, Topology and geometry.",
        "Minor in CS.",
        "Implementing numerical algorithms with C."
      ]
    }
  ]
}