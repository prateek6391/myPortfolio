import {
    mobile,
    backend,
    creator,
    web,
    java,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    sql,
    tailwind,
    nodejs,
    android,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Android Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "android",
      icon: android,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    /*
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
        */
    {
      title: "B.Tech in Computer Science & Engineering",
      company_name: "VIT University, Bhopal",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2019-2023",
    },
    {
      title: "XIIth",
      company_name: "Lucknow Public College, Lucknow",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2017-2018",
    },
    {
      title: "Xth",
      company_name: "Sharada Public School, Balrampur",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2015-2016",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Lung Disease Prediction and Prevention System",
      description:
        "Web-based platform that employs deep learning models to predict lung conditions in X-ray images, using TensorFlow, Keras, and Scikit Learn. The project also offers a learning section for individuals to self-educate on lung-related diseases, making it accessible to those in areas with limited medical services.",
      tags: [
        {
          name: "Html/Css, JS",
          color: "blue-text-gradient",
        },
        {
          name: "Python, Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "pink-text-gradient",
        },
        {
          name: "ML, CNN",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/prateek6391/EPICS-Lung-Disease-Prediction.git",
    },
    {
      name: "FlyBuy",
      description:
        "Web application with a broad range of products that allows customers to easily select and purchase items via a shopping cart.Using Django, the site provides a user-friendly interface with added security features such as login IDs and passwords.",
      tags: [
        {
          name: "Html/Css",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "gsap",
          color: "pink-text-gradient",
        },
        {
          name: "Django",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/prateek6391/FlyBuy.git",
    },
    {
      name: "PK News API App",
      description:
        "A news App that allows users to curates news articles from multiple sources into a single platform, with personalized news feeds based on user preferences. It  allowing them to stay informed about breaking news and important events efficiently.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/prateek6391/pkNews.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };