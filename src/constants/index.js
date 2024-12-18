import homeSmile from "/assets/home-smile.svg";
import file02 from "/assets/file-02.svg";
import searchMd from "/assets/search-md.svg";
import plusSquare from "/assets/plus-square.svg";
import data_icon from "/assets/icon/1.png";
import ai_icon from "/assets/icon/2.png";
import infrastructor_icon from "/assets/icon/3.png";

import r1 from "/assets/illustration2/1r.png";
import r2 from "/assets/illustration2/2r.png";
import r3 from "/assets/illustration2/3r.png";
import r4 from "/assets/illustration2/14r.png";
import r5 from "/assets/illustration2/5r.png";
import r6 from "/assets/illustration2/6r.png";
import r7 from "/assets/illustration2/7r.png";
import r8 from "/assets/illustration2/8r.png";
import r9 from "/assets/illustration2/18r.png";
import r10 from "/assets/illustration2/10r.png";
import r11 from "/assets/illustration2/11r.png"
import r13 from "/assets/illustration2/13r.png"

import card_1 from "/assets/icon/card-1.svg"
import card_2 from "/assets/icon/card-2.svg"
import card_3 from "/assets/icon/card-3.svg"

export const navigation = [
    {
        id: "0",
        title: "Home",
        "url": "/",
        isLoggedIn: false,
        requiresAuth: false,
        dropdownItems: []
    },
    {
        id: "1",
        title: "Research",
        "url": "/research",
        isLoggedIn: false,
        requiresAuth: false,
        dropdownItems: []
    },
    {
        id: "2",
        title: "Data",
        "url": "/datalab",
        isLoggedIn: false,
        requiresAuth: false,
        dropdownItems: []
    },
    {
        id: "3",
        title: "Tools",
        "url": "#tools",
        isLoggedIn: false,
        requiresAuth: false,
        hasDropdown: true,
        dropdownItems: [
            {
                id: "0",
                title: "GPT",
                "url": "/gpt",
            },
            {
                id: "1",
                title: "Edu Selector",
                "url": "/edu-selector",
            }
        ]
    },
    {
        id: "4",
        title: "Company",
        "url": "#company",
        isLoggedIn: false,
        requiresAuth: false,
        hasDropdown: true,
        dropdownItems: [
            {
                id: "0",
                title: "What We Do",
                "url": "/what-we-do",
            },
            {
                id: "1",
                title: "Team",
                "url": "/team",
            },
            {
                id: "2",
                title: "Join Us",
                "url": "/join-us",
            }
        ]
    },
    {
        id: "5",
        title: "Resources",
        "url": "#resources",
        isLoggedIn: false,
        requiresAuth: false,
        hasDropdown: true,
        dropdownItems: [
            {
                id: '0',
                title: 'Publications',
                "url": "/publications",
            },
            {
                id: "1",
                title: "Blog",
                "url": "/blog",
            },

        ]
    },
  ]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const aboutUs = [
    {
        id: "0",
        title: "Data",
        description: "In the modern world, data is an invaluable asset. But collecting, processing, and deriving actionable insights from it can be a daunting task. Datawise Africa is here to help. Our expertise in data services ensures that your business not only collects relevant data but also processes and uses it to drive decisions. We specialise in creating robust data pipelines that stand the test of time.",
        imageUrl: data_icon,
        backgroundUrl: card_1,
        light: true,
    },
    {
        id: "1",
        title: "AI",
        description: "Artificial Intelligence (AI) is reshaping the way businesses operate. At Datawise Africa, we are at the forefront of this change. We assist companies in tapping into the vast potential of AI, creating solutions tailored to their unique needs. From predictive analytics to chatbots, our AI solutions are designed to give your business a competitive edge.We are also actively in the development of AI models such as recommender systems , computer vision models and language models.",
        imageUrl: ai_icon,
        backgroundUrl: card_2,
    },
    {
        id: "2",
        title: "Infrastructure",
        description: "The right infrastructure is the backbone of any data-driven organisation. Whether it's hardware or software, our infrastructure services ensure that your business is equipped with the latest technology, optimised for performance and scalability. We provide the solid foundation your company needs to thrive in the digital age.With our vast experience in infrastructure, we help companies acquire and set up AI and data infrastructure. We are experienced in the procurement process and well connected with both hardware and software vendors in Data and AI.",
        imageUrl: infrastructor_icon,
        backgroundUrl: card_3,
        light: true,
    },
]

export const coreServices = [
    {
        id: "0",
        title: "Data",
        description: "We are creating the largest repository of high quality datasets in relevant domains such as languages, agriculture and healthcare in the continent, ethically.",
        imageUrl: data_icon,
        backgroundUrl: r2,
        cardUrl: "/assets/icon/card-1.svg",
        light: true,
    },
    {
        id: "1",
        title: "Artificial Intelligence",
        description: "We are actively developing AI models such as recommender systems , computer vision models and language models for communities. We focus on smaller and highly specific models to solve different problems within our ecosystem.",
        imageUrl: ai_icon,
        backgroundUrl: r1,
        cardUrl: "/assets/icon/card-2.svg",
    },
    {
        id: "2",
        title: "Infrastructure",
        description: "The right infrastructure is the backbone of a data wise continent. We conduct research in sustainable and affordable compute infrastructure as well as partnering with hardware vendors to explore prototype systems.",
        imageUrl: infrastructor_icon,
        backgroundUrl: r3,
        light: true,
        cardUrl: "/assets/icon/card-1.svg",
    },
]

export const ourServices = [
    {
        id: "0",
        title: "Data Quality",
        description: "",
        imageUrl: r2,
    },
    {
        id: "1",
        title: "Data Governance and Compliance",
        description: "We help businesses establish policies and procedures to ensure their data is used ethically and complies with regulations, especially with increasing concerns about data privacy",
        imageUrl: r1,
    },
    {
        id: "2",
        title: "Predictive Analytics",
        description: "Using historical data to predict future trends, helping businesses stay ahead of the curve",
        imageUrl: r3,
    },
    {
        id: "3",
        title: "Data Storage Solutions",
        description: "Providing secure and scalable data storage solutions tailored to the needs of businesses",
        imageUrl: r4,
    },
    {
        id: "4",
        title: "Chatbots and Virtual Assistants Development",
        description: "We Design and deploy AI-powered chatbots for customer service, sales, or internal operations",
        imageUrl: r5,
    },
    {
        id: "5",
        title: "Recommendation Systems",
        description: "Implementing AI-driven recommendation engines for e-commerce sites, content providers, and other businesses that can benefit from personalised user experiences",
        imageUrl: r6,
    },
    {
        id: "6",
        title: "Natural Language Processing (NLP) Solutions",
        description: "Offering services related to text analysis, sentiment analysis, and chatbot training using NLP",
        imageUrl: r7,
    },
    {
        id: "7",
        title: "Cloud Integration and Migration",
        description: "Helping businesses transition to cloud platforms for better scalability and flexibility",
        imageUrl: r8,
    },
    {
        id: "8",
        title: "Data Audit and Quality Assurance",
        description: "Evaluating the current state of a company's data and ensuring it is of high quality and free from inconsistencies",
        imageUrl: r9,
    },
    {
        id: "9",
        title: "Business Intelligence (BI) Solutions",
        description: "Implementing BI tools to help businesses gain insights from their data and make informed decisions.",
        imageUrl: r10,
    },
    {
        id: "10",
        title: "R&D (Research and Development) in AI",
        description: "Collaborating with businesses on cutting-edge research projects in the field of AI and data science",
        imageUrl: r11,
    },
    {
        id: "11",
        title: "Training and Workshops",
        description: "We offer training sessions and workshops on data literacy, AI basics, and advanced topics that can help businesses understand and leverage these technologies better",
        imageUrl: r13,
    },
]

export const serviceText = "Elevate your data-driven journey with our specialized services. We excel in Data Science solutions, offering predictive modeling, machine learning, and strategic insights tailored to empower your business in the data-driven landscape."

export const ourPartners = [
    {
        id: "0",
        logo: "/assets/company-logos/mytichaa-logo-r.png",
    },
    {
        id: "1",
        logo: "/assets/company-logos/the-shack-logo-r.png",
    },
    {
        id: "2",
        logo: "/assets/company-logos/indicator-ventures-logo-r.png",
    },
    {
        id: "3",
        logo: "/assets/company-logos/diversity-logo-r.png",
    },
    {
        id: "4",
        logo: "/assets/company-logos/lacuna-fund-logo-r.png",
    },
    {
        id: "5",
        logo: "/assets/company-logos/eduonix-logo-r.png",
    },
    {
        id: "6",
        logo: "/assets/company-logos/Kaggle-logo-r.png",
    },
    {
        id: "7",
        logo: "/assets/company-logos/kodak-logo-r.png",
    },
]

export const PortfolioItems = [
    {
        id: "0",
        title: "Data quality in resource constrained environments",
        logo: "/assets/data-check.svg",
        backgroundUrl: "/assets/icon/card-1.svg",
        light: true,
    },
    {
        id: "1",
        title: "LLMs for community journalists",
        logo: "/assets/community-llm.svg",
        backgroundUrl: "/assets/icon/card-2.svg",
        light: true,
    },
    {
        id: "2",
        title: "Data collection for Education Domain",
        logo: "/assets/data-collection.svg",
        backgroundUrl: "/assets/icon/card-3.svg",
        light: true,
    },

]

export const portfolioText = "Our portfolio reflects our expertise in delivering data-driven solutions and cutting-edge innovations across various industries."

export const projectText = "Discover our latest projects, showcasing our innovative solutions across industries."

export const teamMembers = [
    {
        id: "0",
        name: "Dr. Albert Kahira",
        title: "Director",
        image: "/assets/team_members/albert-kahira.jpeg",
        description: "Albert Kahira is a research scientist at Julich Supercomputing Center(JSC) where he works on Reconfigurable Computing and Machine Learning. He holds a PhD in Computer Architectures from Universitat Politècnica de Catalunya (BarcelonaTech). Prior to joining JSC, he was a predoctoral researcher at Barcelona Supercomputiing Center where he developed tools to scale Machine Learning in HPC. Besides research, he serves in several HPC and ML conferences and workshop committees.",
        linkedin_url: "https://www.linkedin.com/in/albertkahira",
        twitter_url: "https://x.com/ankahira",
        email: "albert@datawise.africa",
        backgroundUrl: "/assets/icon/card-1.svg",
    },
    {
        id: "1",
        name: "Brian Odhiambo",
        title: "Data Scientist",
        image: "/assets/team_members/brian-odhiambo.jpg",
        description: "Brian is a data scientist at Datawise. He has a BSc in Information Technology from Zetech University (Nairobi, Kenya). Having keen interest in machine learning, Brian has participated in building models for different use cases including but not limited to recommendation systems, computer vision projects and NLP. Brian is also well-versed in software engineering majorly focusing on backend engineering.",
        linkedin_url: "https://www.linkedin.com/in/brian-odhiambo-6b036b181",
        twitter_url: "https://x.com/__Obrian",
        email: "brian@datawise.africa",
        backgroundUrl: "/assets/icon/reactangle-card-1.svg",
    },
    {
        id: "2",
        name: "Dorothy Chepkonga",
        title: "Data Analyst",
        image: "/assets/team_members/dorothy.jpg",
        description: "",
        linkedin_url: "https://linkedin.com/in/dorothychepkonga",
        twitter_url: "",
        email: "dorothy@datawise.africa",
        backgroundUrl: "/assets/icon/reactangle-card-1.svg",
    },
    {
        id: "3",
        name: "Vall de Graff Auma",
        title: "Data Journalist",
        image: "/assets/team_members/vallde.jpg",
        description: "",
        linkedin_url: "https://www.linkedin.com/in/valldegraff2607",
        twitter_url: "https://x.com/vallde_2607",
        email: "vall@datawise.africa",
        backgroundUrl: "/assets/icon/reactangle-card-1.svg",
    },
    
]

export const socials = [
    {
        id: "0",
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/datawise-africa",
    },
    {
        id: "1",
        name: "Github",
        url: "https://github.com/Datawise-Africa",
    },
]

export const frontend_developer_responsibilitie = [
    "Develop user interfaces and components using React and modern frontend technologies.",
    "Collaborate with backend developers to integrate APIs and ensure seamless data flow between the frontend and backend.",
    "Debug and resolve fronted issues to ensure optimal performance and user experience.",
    "Participate in code reviews, providing and receiving constructive feedback.",
    "Maintain and contribute to the project’s codebase on Github, following best practices for version control and collaboration.",
    "Assist in the development of responsive designs that work across various devices and browsers.",
    "Contribute to the design and implementation of new features and functionalities based on the project requirements."
]

export const frontend_developer_skills = [
    "Proficiency in HTML, CSS, JavaScript (ES6+).", 
    "Familiarity with React.js and its core principles.",
    "Basic understanding of state management libraries (e.g., Redux or Context API).",
    "Ability to style and design (use of tailwind or related css frameworks).",
    "Debugging and testing (Use of browser developer tools, testing frameworks and error handling)",
    "Experience working with RESTful APIs and integrating them into frontend applications.",
    "Understanding of responsive design principles and cross-browser compatibility.",
    "Strong problem solving skills and attention to detail.",
    "Ability to work independently and as part of a collaborative team."
]

export const communication_responsibilities = [
    "Create content across our social media channels. Writing and optimizing content for the website,including well-structured blogs and posting consistently to increase engagement and brand awareness.",
    "Ensure consistency in terms of voice, branding, messaging and frequency of posting via digital channels.",
    "Analyze engagement metrics and proposing strategies for improvement.",
    "Conduct market research to identify potential clients and business opportunities.",
    "Assist in developing and implementing business development strategies.",
    "Ensure that all marketing and communications material align with the brand’s standards.",
    "Develop and execute communication strategies and campaigns.",
    "Streamline internal communication by collaborating with team members on projects."
]

export const communication_skills = [
    "Excellent written and verbal communication skills, with the ability to present complex information in a clear and concise manner.", 
    "Basic knowledge of digital marketing tools (Social media platforms, Canva).",
    "Social Media Management: Creating and managing content across our platforms.",
    "Problem solving: Addressing communication challenges with creative solutions.",
    "Presentation skills: Proficiency in tools such as Microsoft PowerPoint and Google slides.",
    "Strong analytical and research skills with a keen eye for detail.",
]

export const what_you_get = [
    "Working in a fast paced environment.",
    "Collaborating with like minded individuals.",
    "Opportunity to build and refine your skills.",
    "Access to resources and tools for learning.",
    "Monthly stipend plus career progression."
]

export const available_positions = [
    // {
    //     id: "0",
    //     title: "Frontend Developer Intern",
    //     overview: "We are seeking a motivated, self-driven and talented young profressional (recent graduate) to join our team as a frontend developer intern. This internship offers a unique opportunity to gain hands-on experience in developing dynamic and responsive web applications using React. The intern will collaborate closely with our development team, contributing to real projects. The intern will be engaged for a period of 4 months starting January 2025, with a possibility of extension based on performance.",
    //     responsibilities: frontend_developer_responsibilitie,
    //     skills: frontend_developer_skills,
    //     work_period: "Full-time",
    //     workmode: "Remote",
    //     position: "Internship",
    //     what_you_get: what_you_get,
    // },
    // {
    //     id: "0",
    //     title: "Communication and Business Development Intern",
    //     overview: "In this role, we are looking for a results-driven young professional (recent graduate) with a background in Journalism, Corporate Communications, Public Relations and other relevant fields in communication. The intern brings a unique blend of creativity and analytical thinking while working in a dynamic team of professionals. The intern will be engaged for a period of 4 months starting January 2025, with a possibility of extension based on performance.",
    //     responsibilities: communication_responsibilities,
    //     skills: communication_skills,
    //     work_period: "Full-time",
    //     workmode: "Remote",
    //     position: "Internship",
    //     what_you_get: what_you_get,
    // }
]

// export const REACT_PUBLIC_API_HOST = "http://localhost:8000"
export const REACT_PUBLIC_API_HOST = "https://backend.datawise.africa"

// {
    //     id: "5",
    //     title: "Logout",
    //     "url": "/logout",
    //     isLoggedIn: true,
    //     dropdownItems: []
    // }


    // {
    //     id: "5",
    //     title: 'Admin Panel',
    //     url: '/dashboard',
    //     isLoggedIn: true,
    //     hasDropdown: false,
    //     dropdownItems: []
    // },p