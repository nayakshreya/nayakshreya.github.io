import { mit, carlin, unm, insuresoft, visint } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,       
    flask,  
    ruby,
    sql,
    gitlab,     
    aws,         
    azure,       
    vscode,      
    docker,      
    bootstrap,   
    jquery,
    swift,
    androidstudio    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "jQuery",
        type: "Frontend",
    }, 
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend Framework",
    },
    {
        imageUrl: ruby,
        name: "Ruby on Rails",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: vscode,
        name: "Visual Studio Code",
        type: "Development Tool",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Development Tool",
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control / CI/CD",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Platform",
    },
    {
        imageUrl: azure,
        name: "Azure (TFS)",
        type: "Cloud Platform",
    },
    {
        imageUrl: swift,
        name: "Swift",
        type: "Mobile Development",
    },
    {
        imageUrl: androidstudio,
        name: "AndroidStudio",
        type: "Mobile Development",
    }
];

export const experiences = [
    {
        title: "Software Engineer II",
        company_name: "University of New Mexico Hospital",
        icon: unm,
        iconBg: "#FFFFFF",
        date: "October 2023 - Present",
        bottomBg: "#057985",
        points: [
            "Streamlined document tracking processes, significantly improving workflow efficiency and saving valuable staff time.",
            "Designed a management system to optimize scheduling, patient assignments, and compliance audits, resulting in substantial time savings.",
            "Enhanced an internal website, improving user experience, boosting employee satisfaction, and reducing support queries.",
            "Implemented robust data security measures to ensure compliance with regulatory standards and maintain organizational integrity.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Insuresoft",
        icon: insuresoft,
        iconBg: "#FFFFFF",
        date: "June 2021 - September 2023",
        bottomBg: "#BF2230",
        points: [
            "Optimized the Claims Configuration process to improve operational efficiency, streamline transaction processing, and provide a competitive edge to clients.",
            "Enhanced insurance customer platforms, integrating reinsurance workflows and reducing claims errors, improving transparency and speeding up claim resolutions.",
            "Improved data access and application performance by optimizing critical data operations and enhancing query execution.",
            "Mentored junior developers, collaborated with teams on sprint planning, and created resources that reduced support tickets and boosted team efficiency.",
        ],
    },
    {
        title: "Software Engineer Graduate Intern",
        company_name: "Carlin Fit LLC",
        icon: carlin,
        iconBg: "#47479F",
        date: "May 2020 - August 2020",
        bottomBg: "#47479F",
        points: [
            "Redesigned mobile applications to introduce monetized weight loss challenges, enhancing user engagement and retention.",
            "Transformed features to support team collaboration and developed scalable database schemas, improving user participation.",
            "Deployed mobile apps with performance optimizations and ensured compatibility across multiple devices, enhancing user experience.",
            "Conducted user research to identify pain points, resulting in increased revenue and user retention through targeted feature updates.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Manipal Institute of Technology",
        icon: mit,
        iconBg: "#FFFFFF",
        date: "December 2018 - May 2019",
        bottomBg: "#ED641E",
        points: [
            "Developed a web application to visualize medical terminology, improving accessibility and efficiency for medical professionals.",
            "Collaborated with backend developers and domain experts to enhance task alignment and streamline the development cycle.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "VISINT Health Care Pvt Ltd.",
        icon: visint,
        iconBg: "#FBF9FA",
        date: "July 2018 - October 2018",
        bottomBg: "#1E90FF",
        points: [
            "Led the development of a web application for seamless retinal image processing, improving workflow for medical professionals.",
            "Built and integrated image processing algorithms and REST APIs, optimizing real-time communication and data handling.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nayakshreya',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shreyasnayak/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];