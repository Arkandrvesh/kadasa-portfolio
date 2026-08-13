// =============================================================
// KADASA — Team Data
// Update with real founder names when available
// =============================================================

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  focus: string[];
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "founder-01",
    number: "01",
    name: "Deva",
    role: "Web Developer",
    focus: ["Frontend", "UI Engineering", "React"],
    image: "/team/Deva.jpeg",
  },
  {
    id: "founder-02",
    number: "02",
    name: "Arkan",
    role: "Web Developer",
    focus: ["Development", "Architecture", "Backend"],
    image: "/team/Arkan.jpeg",
  },
  {
    id: "founder-03",
    number: "03",
    name: "Azka",
    role: "Marketing Communication",
    focus: ["Communication", "Brand Strategy", "PR"],
    image: "/team/Azka.jpeg",
  },
  {
    id: "founder-04",
    number: "04",
    name: "Saddam",
    role: "Marketing",
    focus: ["Growth", "Sales", "Business"],
    image: "/team/Saddam.jpeg",
  },
];
