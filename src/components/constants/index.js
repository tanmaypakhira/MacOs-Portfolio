const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Trash", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "JavaScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Nest.js"],
    },
    {
        category: "Database",
        items: ["MongoDB","MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/tanmaypakhira",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://tanmaypakhira.in/",
    },
    {
        id: 3,
        text: "Leetcode",
        icon: "/icons/leetcode.svg",
        bg: "#F5B151",
        link: "https://leetcode.com/tanmay_pakhira",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/tanmay-pakhira-435766215/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/img5.png",
    },
    {
        id: 2,
        img: "/images/img1.png",
    },
    {
        id: 3,
        img: "/images/img6.png",
    },
    {
        id: 4,
        img: "/images/img7.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "CodeEra",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "CodeEra.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "CodeEra is a modern React-based web product built for speed, scalability, and performance.",
                        "It delivers a fully responsive experience across desktop, tablet, and mobile devices.",
                        "Smooth transitions and refined animations create a clean, professional user interface.",
                        "The component-driven architecture ensures easy maintenance and future scalability.",
                        "CodeEra empowers developers to build elegant, high-performance web experiences effortlessly.",
                    ],
                },
                {
                    id: 2,
                    name: "codeEra.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://code-era.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "codeEra.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "ChatBug",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "chatBug",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "ChatBug is a modern real-time chat application built for fast and seamless communication.",
                        "It delivers instant message updates with low latency and smooth user interactions.",
                        "The platform is fully responsive, ensuring consistent performance across all devices.",
                        "A clean and intuitive interface enhances usability and user experience.",
                        "ChatBug is designed with scalability and security in mind for future expansion.",
                    ],
                },
                {
                    id: 2,
                    name: "chatBug.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://chatbug-production.up.railway.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "chatBug.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        // {
        //     id: 7,
        //     name: "Food Delivery App",
        //     icon: "/images/folder.png",
        //     kind: "folder",
        //     position: "top-10 left-80",
        //     windowPosition: "top-[33vh] left-7",
        //     children: [
        //         {
        //             id: 1,
        //             name: "Food Delivery App Project.txt",
        //             icon: "/images/txt.png",
        //             kind: "file",
        //             fileType: "txt",
        //             position: "top-5 left-10",
        //             description: [
        //                 "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
        //                 "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
        //                 "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
        //                 "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
        //             ],
        //         },
        //         {
        //             id: 2,
        //             name: "food-delivery-app.com",
        //             icon: "/images/safari.png",
        //             kind: "file",
        //             fileType: "url",
        //             href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
        //             position: "top-10 right-20",
        //         },
        //         {
        //             id: 4,
        //             name: "food-delivery-app.png",
        //             icon: "/images/image.png",
        //             kind: "file",
        //             fileType: "img",
        //             position: "top-52 right-80",
        //             imageUrl: "/images/project-3.png",
        //         },
        //         {
        //             id: 5,
        //             name: "Design.fig",
        //             icon: "/images/plain.png",
        //             kind: "file",
        //             fileType: "fig",
        //             href: "https://google.com",
        //             position: "top-60 right-20",
        //         },
        //     ],
        // },
        {},
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/tanmay.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/img3.JPG",
        },
        {
            id: 3,
            name: "Events-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/img1.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Where logic meets creativity.",
            image: "/images/tanmay.jpg",
            description: [
                "👨‍💻 I’m Tanmay Pakhira, a Computer Science student with a focus on Cybersecurity and modern web development.",
                "🌐 I build responsive, high-performance web applications using React and modern JavaScript.",
                "⚡ I enjoy working on real-time systems like chat applications and peer-to-peer platforms.",
                "🔐 I have a strong interest in system security, networking, and secure application design.",
                "🚀 I’m passionate about creating scalable, user-centric digital products.",
                "🤖 My long-term goal is to build intelligent automation systems inspired by AI assistants like JARVIS.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };