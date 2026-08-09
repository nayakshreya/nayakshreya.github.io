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
    androidstudio,
    dice,
    profile,
    sales,
    restaurant,
    game,
    robot,
    security,
    circuit   
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
        iconUrl: dice,
        theme: 'btn-back-yellow',
        name: 'AI Waiter Chatbot',
        description: 'Developed an AI waiter chatbot in Flowise using OpenAI LLMs, OpenAI embeddings, Pinecone vector search with a restaurant menu knowledge base built from Excel and Word documents to answer questions about menu items, prices, ingredients, and availability.',
        link: 'https://cloud.flowiseai.com/chatbot/48c342f9-e874-43a1-8012-7aa0bd7a6423',
    },{
        iconUrl: dice,
        theme: 'btn-back-green',
        name: 'RAG-Based Course Assistant Chatbot',
        description: 'Built a RAG-based course assistant chatbot in Flowise using OpenAI LLMs, vector document storage, retriever tools, buffer memory, and a tool-calling agent workflow. The chatbot retrieves information from uploaded course materials and provides grounded, context-aware answers to user questions.',
        link: 'https://cloud.flowiseai.com/chatbot/c78d0381-4ada-45f5-b41a-4d4fb21faeaa',
    },{
        iconUrl: dice,
        theme: 'btn-back-grey',
        name: 'Multimodal Restaurant Menu Extraction Pipeline',
        description: 'Created a multimodal restaurant menu extraction pipeline in Google Colab using the OpenAI Responses API, base64-encoded image inputs, structured parsing, Pydantic schemas, pandas, and Excel export. The pipeline converts menu images into structured data containing category, subcategory, item name, description, and price.',
        link: '',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-purple',
        name: 'Tenzies Game',
        description: 'Developed a React-based web game where players roll dice to match all dice to the same number. Players can freeze dice between rolls and continue until all dice align. Features include confetti animation upon winning and a restart option for continuous play.',
        link: 'https://github.com/nayakshreya/tenzies-game',
    },
    {
        iconUrl: profile,
        theme: 'btn-back-green',
        name: 'Personal Portfolio Website',
        description: 'Created a 3D interactive portfolio website to showcase projects and skills, featuring smooth navigation, engaging animations, and unique interactive elements like a floating island and a fox that responds to typing, offering a fun and immersive user experience.',
        link: 'https://github.com/nayakshreya/nayakshreya.github.io',
    },
    {
        iconUrl: sales,
        theme: 'btn-back-blue',
        name: 'Sales App',
        description: 'Built a mobile app to list all the deals from a marketplace providing access to search, navigate, and get more information about the deals by directing it to bakesaleforgood.com .',
        link: 'https://github.com/nayakshreya/bakesale-app',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-pink',
        name: 'Restaurant Finder App',
        description: 'Implemented a mobile app to find restaurants based on the user price range by using the Axios library making search requests to display a variety of restaurants with details and implement error handling when the search request does not meet the user requirements.',
        link: 'https://github.com/nayakshreya/restaurant-app',
    },
    {
        iconUrl: game,
        theme: 'btn-back-black',
        name: 'Find the Target Sum',
        description: 'Designed a gaming app where the user needs to find the target number from a set of randomly generated numbers summing up to the target number within 10 seconds to win.',
        link: 'https://github.com/nayakshreya/game-app',
    },
    {
        iconUrl: robot,
        theme: 'btn-back-yellow',
        name: 'Robot Control Software',
        description: 'Worked on simulated autonomous navigation control software as part of coursework to understand motion kinematics and dynamics, simulation testing, and sensor integration.',
    },
    {
        iconUrl: security,
        theme: 'btn-back-red',
        name: 'Computer Security',
        description: 'Gained first-hand experience writing programs and performing security attacks on secret-key encryption, buffer-overflow vulnerability, return-to-libc attack, and SQL injection attack by considering security mechanisms.',
    },
    {
        iconUrl: circuit,
        theme: 'btn-back-green',
        name: 'Circuit Breaker Controlling and Monitoring System',
        description: 'Modeled an internet of things-based monitoring and diagnosis system to keep a count of the number of voltage fluctuations and the   highest voltage level attained across the circuit breaker.',
    }
];
