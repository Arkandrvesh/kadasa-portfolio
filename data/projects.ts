// =============================================================
// KADASA — Portfolio Projects Data
// Add or edit projects here. Images go in /public/projects/
// =============================================================

export type ProjectCategory =
  | "all"
  | "websites"
  | "ecommerce"
  | "applications"
  | "business-systems"
  | "education"
  | "government";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory[];
  categoryLabel: string;
  description: string;
  fullDescription: string;
  image: string;
  url: string;
  year: string;
  technologies: string[];
  highlights: string[];
  challenge: string;
  approach: string[];
  featured: boolean;
  badge?: string; // e.g. "KADASA PRODUCT" | "Enterprise System"
  industry: string;
}

export const projects: Project[] = [
  /*
  {
    slug: "si-dinamis",
    title: "SI-DINAMIS",
    shortTitle: "SI-DINAMIS",
    category: ["government", "applications", "business-systems"],
    categoryLabel: "Enterprise System",
    description:
      "Sistem aplikasi web untuk mendukung proses administrasi dan pengelolaan data secara digital dalam lingkungan organisasi.",
    fullDescription:
      "SI-DINAMIS adalah enterprise web application yang kami bangun untuk mendukung proses administrasi digital dalam lingkungan organisasi. Sistem ini menangani autentikasi multi-level, pengelolaan data, workflow dokumen, dan dashboard monitoring yang terintegrasi.",
    image: "/projects/si-dinamis.png",
    url: "https://si-dinamis-spj-web.vercel.app/auth/login",
    year: "2025",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    highlights: [
      "Enterprise Web Application",
      "Multi-level Authentication",
      "Dashboard & Analytics",
      "Document Workflow",
      "Data Management",
      "Internal System",
    ],
    challenge:
      "Bagaimana memigrasikan proses administrasi manual yang kompleks ke dalam sistem digital yang intuitif, aman, dan dapat digunakan oleh berbagai level pengguna?",
    approach: [
      "Requirements Discovery",
      "System Architecture Design",
      "UI/UX for Internal Users",
      "Full-Stack Development",
      "Integration & Testing",
      "Deployment",
    ],
    featured: true,
    badge: "Enterprise System",
    industry: "Government / Institutional",
  },
  */
  {
    slug: "akazapos",
    title: "AkazaPOS",
    shortTitle: "AkazaPOS",
    category: ["applications", "business-systems"],
    categoryLabel: "SaaS / POS",
    description:
      "Platform kasir dan business management modern yang dirancang untuk bisnis dari warung kopi hingga retail multi-cabang.",
    fullDescription:
      "AkazaPOS adalah KADASA's own product — sebuah sistem kasir dan business management platform yang kami rancang dan bangun sendiri. Platform ini ditujukan untuk membantu bisnis mengelola transaksi, inventory, laporan keuangan, dan operasional secara terintegrasi dari satu dashboard.",
    image: "/projects/akazapos.png",
    url: "https://akazapos-landing.vercel.app/",
    year: "2025",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
    highlights: [
      "POS System",
      "SaaS Platform",
      "Business Management",
      "Multi-branch Support",
      "Dashboard & Reports",
      "Product Landing Page",
    ],
    challenge:
      "Membangun POS system yang cukup sederhana untuk warung kopi tetapi cukup powerful untuk kebutuhan retail multi-cabang — dengan UX yang tidak membutuhkan training intensif.",
    approach: [
      "Product Research",
      "User Journey Mapping",
      "UI/UX Design",
      "Frontend Development",
      "Backend & API",
      "Launch",
    ],
    featured: true,
    badge: "KADASA PRODUCT",
    industry: "SaaS / Business Software",
  },
  {
    slug: "indosarana-travel",
    title: "Indosarana Travel",
    shortTitle: "Indosarana",
    category: ["websites"],
    categoryLabel: "Travel & Tourism",
    description:
      "Website digital untuk bisnis travel yang menghadirkan informasi destinasi, tour package, visa services, dan transportasi.",
    fullDescription:
      "Indosarana Travel membutuhkan website yang mampu mempresentasikan layanan perjalanan mereka secara profesional — dari tour packages ke Bali, Lombok, dan destinasi lain, hingga layanan visa dan transportasi. Kami membangun website yang menyeimbangkan visual storytelling dengan kemudahan navigasi informasi.",
    image: "/projects/indosarana.png",
    url: "https://indosaranatravel.com/",
    year: "2024",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    highlights: [
      "Travel Website",
      "Tour Packages",
      "Visa Services",
      "Transportation",
      "Destination Showcase",
      "Responsive Design",
    ],
    challenge:
      "Bagaimana menyampaikan puluhan layanan travel secara terstruktur tanpa membuat pengguna kewalahan saat pertama kali mengunjungi website?",
    approach: [
      "Content Strategy",
      "Information Architecture",
      "Visual Design",
      "Development",
      "Content Integration",
      "Launch",
    ],
    featured: true,
    industry: "Travel & Tourism",
  },
  {
    slug: "wasta-kopi",
    title: "Wasta Kopi",
    shortTitle: "Wasta Kopi",
    category: ["websites"],
    categoryLabel: "F&B / Coffee",
    description:
      "Website untuk coffee shop dan creative workspace yang menggabungkan informasi produk, layanan, dan visual experience.",
    fullDescription:
      "Wasta Kopi adalah coffee shop yang juga berfungsi sebagai creative workspace. Mereka membutuhkan website yang mampu menyampaikan dua identitas sekaligus: tempat menikmati kopi berkualitas dan ruang kerja yang inspiratif. Kami merancang website dengan estetika yang hangat, modern, dan memorable.",
    image: "/projects/wastakopi.png",
    url: "https://wastakopi.com/",
    year: "2024",
    technologies: ["WordPress", "PHP", "Custom CSS", "JavaScript"],
    highlights: [
      "Coffee Shop Website",
      "Menu Showcase",
      "Workspace Section",
      "Gallery",
      "Testimonials",
      "Contact Integration",
    ],
    challenge:
      "Menciptakan identitas digital yang mampu menyampaikan nuansa 'coffee meets creativity' tanpa terasa seperti website kafe generik.",
    approach: [
      "Brand Discovery",
      "Mood Board",
      "UI Design",
      "Development",
      "Content & Photography",
      "Launch",
    ],
    featured: true,
    industry: "F&B / Creative Space",
  },
  {
    slug: "warung-puri-bambu",
    title: "Warung Puri Bambu",
    shortTitle: "Puri Bambu",
    category: ["websites"],
    categoryLabel: "Restaurant",
    description:
      "Website restoran yang menonjolkan pengalaman kuliner lokal, cooking class, dan storytelling pemberdayaan komunitas.",
    fullDescription:
      "Warung Puri Bambu bukan sekadar restoran — mereka memiliki cerita community empowerment yang kuat. Website yang kami bangun tidak hanya menampilkan menu dan reservasi, tetapi juga storytelling mengenai bagaimana bisnis ini memberdayakan komunitas lokal melalui kuliner tradisional.",
    image: "/projects/warung-puri-bambu.png",
    url: "https://warungpuribambu.com/",
    year: "2024",
    technologies: ["WordPress", "PHP", "Custom Theme", "CSS"],
    highlights: [
      "Restaurant Website",
      "Menu & Reservasi",
      "Cooking Class",
      "Brand Storytelling",
      "Community Empowerment",
      "Gallery",
    ],
    challenge:
      "Menghadirkan cerita brand yang lebih dari sekadar 'tempat makan' — mencakup nilai sosial dan pemberdayaan komunitas lokal yang menjadi inti identitas bisnis.",
    approach: [
      "Brand Story Discovery",
      "Content Strategy",
      "Visual Design",
      "Development",
      "Story Integration",
      "Launch",
    ],
    featured: false,
    industry: "Restaurant / Culinary",
  },
  {
    slug: "sari-merta-kakao",
    title: "Sari Merta Kakao",
    shortTitle: "Sari Merta",
    category: ["websites"],
    categoryLabel: "Agriculture",
    description:
      "Website digital untuk kelompok tani kakao yang memperkenalkan brand, varietas produk, dan cerita komunitas petani lokal.",
    fullDescription:
      "Sari Merta Kakao adalah brand produk kakao lokal dari kelompok tani di Bali. Kami membangun website yang mampu mempresentasikan produk kakao mereka secara profesional kepada pasar yang lebih luas, sekaligus menyampaikan cerita autentik di balik brand tersebut.",
    image: "/projects/sari-merta-kakao.png",
    url: "https://www.sarimertakakao.com/",
    year: "2024",
    technologies: ["WordPress", "WooCommerce", "PHP", "Custom CSS"],
    highlights: [
      "Agriculture Website",
      "Product Catalog",
      "Brand Story",
      "Local Community",
      "Blog",
      "Contact",
    ],
    challenge:
      "Membangun kepercayaan konsumen terhadap produk lokal melalui website yang mampu menyampaikan kualitas dan autentisitas brand petani kakao.",
    approach: [
      "Brand Positioning",
      "Product Photography Strategy",
      "UI Design",
      "Development",
      "Content",
      "Launch",
    ],
    featured: false,
    industry: "Agriculture / Local Brand",
  },
  {
    slug: "smpn2-tlogomulyo",
    title: "SMPN 2 Tlogomulyo",
    shortTitle: "SMPN 2",
    category: ["education", "websites"],
    categoryLabel: "Education",
    description:
      "Website sekolah yang menyediakan informasi profil, aktivitas, ekstrakurikuler, dan komunikasi digital untuk sekolah.",
    fullDescription:
      "SMP Negeri 2 Tlogomulyo membutuhkan website resmi yang dapat menjadi pusat informasi digital sekolah — menampilkan profil sekolah, kegiatan, program ekstrakurikuler, dan memudahkan komunikasi antara sekolah, siswa, dan orang tua.",
    image: "/projects/smpn2-tlogomulyo.png",
    url: "https://smpn2tlogomulyo.sch.id/",
    year: "2024",
    technologies: ["WordPress", "PHP", "Custom Theme", "CSS"],
    highlights: [
      "School Website",
      "Education",
      "School Profile",
      "Activities Gallery",
      "Extracurricular",
      "Vision & Mission",
    ],
    challenge:
      "Membangun website institusi pendidikan yang terlihat profesional, mudah dikelola oleh staf sekolah, dan mampu menjadi wajah digital sekolah yang dipercaya.",
    approach: [
      "Requirements Gathering",
      "Content Architecture",
      "Institutional UI Design",
      "Development",
      "Training",
      "Launch",
    ],
    featured: false,
    industry: "Education",
  },
  {
    slug: "bonfruiteas",
    title: "BonfruiTeas",
    shortTitle: "BonfruiTeas",
    category: ["ecommerce", "websites"],
    categoryLabel: "E-Commerce",
    description:
      "Website e-commerce untuk produk teh buah dan herbal dengan pengalaman product discovery dan online shopping.",
    fullDescription:
      "BonfruiTeas adalah brand teh buah dan herbal yang membutuhkan digital storefront untuk menjual produk mereka secara online. Kami membangun website e-commerce dengan fokus pada visual product presentation dan seamless shopping experience.",
    image: "/projects/bonfruiteas.png",
    url: "https://bonfruiteas.netlify.app/",
    year: "2024",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    highlights: [
      "E-Commerce Website",
      "Product Showcase",
      "Shopping Experience",
      "Responsive Design",
      "Product Detail",
    ],
    challenge:
      "Membuat produk teh buah terlihat menarik dan premium secara digital — sehingga pengunjung dapat merasakan kesegaran produk hanya melalui layar.",
    approach: [
      "E-Commerce Strategy",
      "Product Photography Direction",
      "UI/UX Design",
      "Frontend Development",
      "Launch",
    ],
    featured: false,
    industry: "E-Commerce / FMCG",
  },
  {
    slug: "magangpulse",
    title: "MagangPulse",
    shortTitle: "MagangPulse",
    category: ["applications", "education"],
    categoryLabel: "Web Application",
    description:
      "Platform digital untuk pengelolaan dan monitoring aktivitas magang secara terstruktur dan efisien.",
    fullDescription:
      "MagangPulse adalah web application yang kami bangun untuk membantu institusi dan mahasiswa mengelola proses magang secara digital — dari monitoring tugas, absensi, hingga pelaporan progress yang terintegrasi dalam satu platform.",
    image: "/projects/magangpulse.png",
    url: "https://magangpulse-xiuf.vercel.app/",
    year: "2025",
    technologies: ["React", "Node.js", "MongoDB", "Vercel"],
    highlights: [
      "Web Application",
      "Internship Management",
      "Dashboard",
      "Task Tracking",
      "Attendance",
      "Digital Workflow",
    ],
    challenge:
      "Mengubah proses monitoring magang yang sebelumnya manual dan tidak terstruktur menjadi alur kerja digital yang mudah digunakan oleh mahasiswa, supervisor, dan administrator.",
    approach: [
      "User Research",
      "Workflow Mapping",
      "UI/UX Design",
      "Full-Stack Development",
      "Testing",
      "Launch",
    ],
    featured: false,
    industry: "Education / HR Tech",
  },
  {
    slug: "sman11-library",
    title: "SMAN 11 Jakarta Library",
    shortTitle: "SMAN 11 Library",
    category: ["education", "applications"],
    categoryLabel: "Digital Library",
    description:
      "Website digital library untuk mendukung akses informasi dan pengalaman pengguna dalam lingkungan pendidikan.",
    fullDescription:
      "Digital Library SMAN 11 Jakarta adalah platform web yang kami kembangkan untuk memberikan akses digital terhadap koleksi buku dan sumber belajar sekolah. Platform ini mempermudah siswa menemukan, mencari, dan mengakses informasi perpustakaan secara online.",
    image: "/projects/sman11-library.png",
    url: "https://glistening-alpaca-247d61.netlify.app/",
    year: "2024",
    technologies: ["React", "CSS", "JavaScript", "Netlify"],
    highlights: [
      "Digital Library",
      "Education",
      "Book Discovery",
      "Search Experience",
      "Responsive Interface",
      "Information System",
    ],
    challenge:
      "Membangun pengalaman perpustakaan digital yang intuitif bagi siswa yang terbiasa dengan platform modern seperti Google dan Netflix — tanpa kehilangan fungsi perpustakaan yang sesungguhnya.",
    approach: [
      "User Experience Research",
      "Information Architecture",
      "UI Design",
      "Frontend Development",
      "Launch",
    ],
    featured: false,
    industry: "Education",
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "websites", label: "Websites" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "applications", label: "Applications" },
  { value: "business-systems", label: "Business Systems" },
  { value: "education", label: "Education" },
  { value: "government", label: "Government" },
] as const;
