// content/data.ts - SINGLE SOURCE OF TRUTH for all portfolio content
// Adam: edit this file to update text, dates, numbers, and photo paths.
// Do NOT edit component files for content changes.

export interface StatItem {
  value: string;
  label: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  size: "large" | "medium" | "small";
  radiusVariant?: "default" | "asymmetric";
}

export interface ExperienceItem {
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  category: "professional" | "leadership";
}

export interface EducationItem {
  institution: string;
  program: string;
  gpa: string;
  dateRange: string;
  courses: string[];
}

export interface SiteContent {
  person: {
    name: string;
    role: string;
    location: string;
    university: string;
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
  };
  hero: {
    headline: string;
    summary: string;
    profilePhoto: {
      src: string;
      alt: string;
    };
  };
  stats: StatItem[];
  internshipGallery: {
    institutionLabel: string;
    photos: GalleryPhoto[];
    isPlaceholder: boolean;
  };
  experience: ExperienceItem[];
  competencies: string[];
  education: EducationItem[];
}

export const siteContent: SiteContent = {
  person: {
    name: "Adam Yudhistira Muhtar",
    role: "Quality Assurance Engineer",
    location: "Cikarang, West Java, Indonesia",
    university: "Telkom University Jakarta",
    email: "adamyudhistiramuhtar@gmail.com",
    phone: "+62 821-1236-6831",
    linkedin: "https://www.linkedin.com/in/adamyudhistira",
    github: "https://github.com/adamyudhistiramuhtar-byte/portfolio-QA",
  },
  hero: {
    headline: "Adam Yudhistira M.",
    summary:
      "Junior QA Engineer at PERURI, Indonesia's national currency authority. Executing 50+ test cases and documenting 15+ defects per release cycle with zero-ambiguity Jira reporting to shorten development triage time.",
    profilePhoto: {
      src: "/images/profile.jpg",
      alt: "Foto profil Adam Yudhistira Muhtar, Quality Assurance Engineer",
    },
  },
  stats: [
    { value: "50+", label: "Test cases / cycle" },
    { value: "14", label: "Team members led" },
    { value: "120%", label: "MoM impression growth" },
    { value: "3.8", label: "GPA / 4.0" },
  ],
  internshipGallery: {
    institutionLabel: "PERURI - MAR-JUN 2026",
    isPlaceholder: true,
    photos: [
      {
        src: "/images/internship/beta-testing-room.jpg",
        alt: "Ruang kerja testing beta environment di PERURI",
        caption: "Ruang testing beta environment",
        size: "large",
      },
      {
        src: "/images/internship/daily-standup.jpg",
        alt: "Sesi daily standup tim QA PERURI",
        caption: "Sesi daily standup QA",
        size: "medium",
        radiusVariant: "asymmetric",
      },
      {
        src: "/images/internship/jira-review.jpg",
        alt: "Dokumentasi review tiket Jira",
        caption: "Dokumentasi Jira review",
        size: "small",
      },
      {
        src: "/images/internship/badge-handover.jpg",
        alt: "Serah terima badge magang PERURI",
        caption: "Serah terima badge PERURI",
        size: "small",
      },
      {
        src: "/images/internship/team-photo.jpg",
        alt: "Foto bersama tim QA PERURI",
        caption: "Foto bersama tim QA PERURI",
        size: "medium",
      },
    ],
  },
  experience: [
    {
      dateRange: "Mar - Jun 2026",
      title: "Quality Engineer",
      organization: "PERURI - National state-owned enterprise, Jakarta",
      description:
        "Maintained pre-release stability by executing 50+ structured test cases and 20+ scenarios per biweekly deployment cycle. Documented 15+ Jira issues with full reproduction steps and severity classification. Established the API automation testing environment foundation.",
      category: "professional",
    },
    {
      dateRange: "Dec 2025 - Present",
      title: "Commission IV Coordinator",
      organization: "Dewan Perwakilan Mahasiswa, Telkom University Jakarta",
      description:
        "Directed a 14-member team across three subdivisions with defined workflow standards, reducing documentation inconsistencies across institutional reports and advocacy programs.",
      category: "leadership",
    },
    {
      dateRange: "Nov 2025 - Present",
      title: "Member, Marketing Crew",
      organization: "FGD Storytelyu, Instagram, Telkom University Jakarta",
      description:
        "Produced Reels content for the Storytelyu Instagram account, creating platform-adapted short-form video content targeting prospective high school student audiences.",
      category: "leadership",
    },
    {
      dateRange: "Mar - Nov 2025",
      title: "Creative Media Coordinator",
      organization: "Dewan Perwakilan Mahasiswa, Telkom University Jakarta",
      description:
        "Produced and reviewed visual communication assets for the Academic Affairs division, including advocacy publications, seminar materials, and organizational agendas. Coordinated a 7-member team across social media, design, and documentation sub-divisions.",
      category: "leadership",
    },
    {
      dateRange: "Dec 2024 - Nov 2025",
      title: "Head of Creative Division",
      organization: "Telkom University Jakarta Esports",
      description:
        "Led a 2-member creative team in graphic and video content production across Instagram, managing content review cycles and maintaining visual brand standards. Monitored platform performance analytics, contributing to a measured increase in engagement rate over a 3-month period.",
      category: "leadership",
    },
    {
      dateRange: "Apr - Sep 2025",
      title: "Event Division Staff",
      organization:
        "Inforvation, Essay and UI/UX Competition, Telkom University Jakarta",
      description:
        "Maintained technical rundown documents and operational flow specifications for two parallel competition branches. Managed coordination with judges, participants, and MCs across competition activities.",
      category: "leadership",
    },
    {
      dateRange: "Jan - Nov 2025",
      title: "Member, Marketing Crew",
      organization: "FGD smbtelkomjkt, Platform X, Telkom University Jakarta",
      description:
        "Produced and published meme and humor-based visual content on a regular publishing cadence for the smbtelkomjkt account on Platform X, contributing to a 120% increase in monthly platform impressions within the first 5 months.",
      category: "leadership",
    },
  ],
  competencies: [
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Manual Testing",
    "Test Case Design",
    "Test Case Execution",
    "Bug Reporting",
    "Jira (Defect Tracking)",
    "Test Scenario Design",
    "Defect Life Cycle",
    "Test Documentation",
    "Selenium WebDriver",
    "Git",
    "Automation Workflow",
    "Python",
    "Figma",
    "VPN & LAN Networking",
    "QA Tooling Setup",
  ],
  education: [
    {
      institution: "Telkom University Jakarta",
      program: "Bachelor of Information Systems",
      gpa: "3.8 / 4.0",
      dateRange: "Sep 2023 - Present",
      courses: [
        "Software Testing Fundamentals",
        "Systems Analysis & Design",
        "Database Management",
        "Computer Networking",
        "Object-Oriented Programming",
        "UI/UX Design Principles",
      ],
    },
  ],
};
