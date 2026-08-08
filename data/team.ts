// =============================================================
// KADASA — Team Data
// Update with real founder names when available
// =============================================================

export interface TeamMember {
  id: string;
  number: string;
  name: string; // Replace with actual name
  role: string; // Replace with actual role
  focus: string[];
  placeholder: boolean; // true = using placeholder data
}

export const team: TeamMember[] = [
  {
    id: "founder-01",
    number: "01",
    name: "Founder 01",
    role: "Role — TBD",
    focus: ["Strategy", "Business", "Vision"],
    placeholder: true,
  },
  {
    id: "founder-02",
    number: "02",
    name: "Founder 02",
    role: "Role — TBD",
    focus: ["Development", "Architecture", "Backend"],
    placeholder: true,
  },
  {
    id: "founder-03",
    number: "03",
    name: "Founder 03",
    role: "Role — TBD",
    focus: ["Frontend", "UI Engineering", "React"],
    placeholder: true,
  },
  {
    id: "founder-04",
    number: "04",
    name: "Founder 04",
    role: "Role — TBD",
    focus: ["Design", "UX", "Brand"],
    placeholder: true,
  },
];
