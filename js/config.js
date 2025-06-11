// NMKR Launchpage Configuration
// This file is where you configure your launch page

const config = {
    // NMKR API Configuration
    nmkr: {
        apiKey: 'YOUR_NMKR_API_KEY', // Do not touch this! Provide your API Key in the env file
        projectUid: 'YOUR_PROJECT_UID', // Do not touch this! Provide your Project UID in the env file
        baseUrl: 'https://studio-api.nmkr.io' // Do not touch this!
    },

    // Site and Style Configuration
    site: {
        title: 'SLOTH MARKET', // Change the title of your brand
        subtitle: 'The worlds first open marketplace for Gym Memberships & Fitness Services', // Change the subtitle of your brand
        logo: 'https://i.imgur.com/QugPsga_d.png?maxwidth=520&shape=thumb&fidelity=high',
        favicon: 'https://i.imgur.com/TQsa1iC_d.png?maxwidth=520&shape=thumb&fidelity=high', // Add your favicon URL here, recommended size: 32x32
        defaultTheme: 'dark', // Change default theme setting: 'light' or 'dark'
        fonts: {
            primary: 'Inter', // Default font 'Inter', change to your preferred font
            alternatives: [
                'Plus Jakarta Sans',
                'Space Grotesk',
                'Outfit',
                'Sora',
                'VT323' // Matrix-style typewriter font
            ]
        },
        typography: {
            // Font sizes in rem units (1rem = 16px by default)
            sizes: {
                h1: '4rem',      // Change the title size here
                h2: '3rem',      // Change the subtitle size here
                h3: '2.25rem',   // Change the project name size here
                h4: '1.75rem',   // Change the project description size here
                h5: '1.25rem',   
                h6: '1rem',      
                body: '1.125rem', //
                small: '0.875rem', 
                tiny: '0.75rem'   
            },
            // Font weights (400 = normal, 500 = medium, 600 = semibold, 700 = bold)
            weights: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700
            },
            // Line heights
            lineHeights: {
                tight: 1.1,      
                normal: 1.6,     
                relaxed: 1.8     
            },
            // Letter spacing
            letterSpacing: {
                tight: '-0.02em',  
                normal: '0',
                wide: '0.02em',    
                wider: '0.04em'    
            }
        },
        colors: {
            accent: '#ffde59',  // Main accent color
            accentHover: '#ff914d',  // Accent color on hover
            accentText: '#000000',  // Text color on accent backgrounds 
            background: {
                light: '#ffde59',
                dark: '#1E1npm'
            },
            text: {
                light: '#333333',
                dark: '#ffffff'
            },
            card: {
                light: '#f8f8f8',
                dark: '#2A2A2A'
            },
            border: {
                light: '#e0e0e0',
                dark: '#404040'
            }
        },
        banner: {
            image: 'https://placehold.co/1200x400/1E1E1E/11f250?text=1200x400', // Change the banner image here, recommended size: 1200x400
            mobileImage: 'https://placehold.co/800x600/1E1E1E/11f250?text=800x600', // Matching mobile version, recommended size: 800x600
            overlay: {
                enabled: true, //change to false to remove the banner overlay
                title: 'Sloth Elite NFT Edition', //change the title here
                description: 'Discover our latest and most exclusive NFT collection', //change the description here
                cta: {
                    enabled: true, //change to false to remove the button
                    text: 'CTA button', //change the button text here
                    link: '#explore' // change the link here or remove the button
                }
            }
        },
        about: {
            title: 'Fitness is for everyone!',
            content: `
                <p>The Sloth welcomes you! We want to make it as easy and seamless as possible for Gyms, Coaches & Fitness cooperations to offer their service and memberships.</p>
                <p>...</p>
                <p>At the same time, we are empowering individuals to pay with their preffered currencies and (if they choose so) to resell or gift their acquired service</p>
                <p>...</p>
                <p>If you want to list your memberships or services, reach out to info@slothgains.com or via TG @t.me/slothgains </p>

            `
        }
    },

    // Project Information
    // Configure your NFT projects here
    // Add more projects as needed, make sure to also add the project UID to the env file
    projects: [
        {
            name: 'SLOTHTEST', //change the project name here
            description: 'A unique collection of digital art pieces', //change the description here
            image: 'https://placehold.co/400x400/1E1E1E/11f250', //change the image here, recommended size: 400x400
            projectName: 'SLOTHTEST', //change the project name here, must match in the env file (For projectName: 'project1' the env must contain: NMKR_PROJECT_UID_PROJECT1=your_project_UID )
            custom_pricing: false // Set to true to enable custom pricing mode (hides price display on card, allows custom price input in mint modal)
        },
        {
            name: 'Project 2',
            description: 'Exclusive NFT collection with special utilities',
            image: 'https://placehold.co/400x400/1E1E1E/11f250',
            projectName: 'project2',
            custom_pricing: true, // Example: This project uses custom pricing
            minimumCustomPrice: 6.5 // Minimum price for custom pricing (in ADA). Only applies when custom_pricing is true
                                    // For Multisig transactions 4.0 ADA, for regular transactions 6.5 ADA - set up in pricelist settings of NMKR Studio
        },
        {
            name: 'Project 3',
            description: 'Limited edition collectibles with rare attributes',
            image: 'https://placehold.co/400x400/1E1E1E/11f250',
            projectName: 'project3',
            custom_pricing: false
        },
        {
            name: 'Project 4',
            description: 'Limited edition collectibles with rare attributes',
            image: 'https://placehold.co/400x400/1E1E1E/11f250',
            projectName: 'project4',
            custom_pricing: false
        },
        
    ],

    // Subpages Configuration
    subpages: {
        enabled: true, // Master switch for subpages feature
        showInNavbar: true, // Show subpage links in navbar
        pages: [
            {
                name: 'Memberships', // Display name in navbar
                url: 'fitness', // Creates /fitness URL
                enabled: true,
                description: {
                    title: 'Fitness & Gym Memberships',
                    content: `
                        <p>Transform your fitness journey with our exclusive gym membership NFTs!</p>
                        <p>Each NFT represents real gym access and membership benefits that you can use, trade, or gift.</p>
                        <p>Perfect for fitness enthusiasts who want flexibility in their workout routine.</p>
                    `
                },
                projects: [
                    {
                        name: 'SLOTHTEST',
                        description: 'Premium gym access with all amenities included.',
                        image: 'https://placehold.co/400x400/ffde59/000000?text=Gold+Gym',
                        projectName: 'SLOTHTEST', // Needs NMKR_PROJECT_UID_GYM_GOLD in .env
                        custom_pricing: true
                    },
                    {
                        name: 'Basic Gym Access',
                        description: 'Essential gym membership for everyday fitness',
                        image: 'https://placehold.co/400x400/ff914d/000000?text=Basic+Gym',
                        projectName: 'gym_basic', // Needs NMKR_PROJECT_UID_GYM_BASIC in .env
                        custom_pricing: false
                    }
                ]
            },
            {
                name: 'Events / Tickets',
                url: 'training',
                enabled: true,
                description: {
                    title: 'Personal Training Services',
                    content: `
                        <p>Get personalized fitness guidance with our trainer NFT collection!</p>
                        <p>Each NFT grants you access to professional personal training sessions.</p>
                        <p>Choose your commitment level and pay what feels right for your fitness goals.</p>
                    `
                },
                projects: [
                    {
                        name: 'PT Session Package',
                        description: 'Professional one-on-one training sessions',
                        image: 'https://placehold.co/400x400/1E1E1E/ffde59?text=PT+Session',
                        projectName: 'pt_session', // Needs NMKR_PROJECT_UID_PT_SESSION in .env
                        custom_pricing: true,
                        minimumCustomPrice: 50.0
                    }
                ]
            },
            {
                name: 'Coaching / Services',
                url: 'nutrition',
                enabled: true, // Disabled - won't show in navbar
                description: {
                    title: 'Nutrition Coaching Services',
                    content: `
                        <p>Professional nutrition guidance to complement your fitness journey.</p>
                        <p>Get personalized meal plans and dietary advice from certified nutritionists.</p>
                    `
                },
                projects: [
                    {
                        name: 'Nutrition Consultation',
                        description: 'Professional dietary guidance and meal planning',
                        image: 'https://placehold.co/400x400/11f250/000000?text=Nutrition',
                        projectName: 'nutrition_plan', // Needs NMKR_PROJECT_UID_NUTRITION_PLAN in .env
                        custom_pricing: true,
                        minimumCustomPrice: 25.0
                    }
                ]
            },
            {
                name: 'Communities',
                url: 'nutrition',
                enabled: true, // Disabled - won't show in navbar
                description: {
                    title: 'Nutrition Coaching Services',
                    content: `
                        <p>Professional nutrition guidance to complement your fitness journey.</p>
                        <p>Get personalized meal plans and dietary advice from certified nutritionists.</p>
                    `
                },
                projects: [
                    {
                        name: 'Nutrition Consultation',
                        description: 'Professional dietary guidance and meal planning',
                        image: 'https://placehold.co/400x400/11f250/000000?text=Nutrition',
                        projectName: 'nutrition_plan', // Needs NMKR_PROJECT_UID_NUTRITION_PLAN in .env
                        custom_pricing: true,
                        minimumCustomPrice: 25.0
                    }
                ]
            },
            {
                name: 'Art',
                url: 'training',
                enabled: true,
                description: {
                    title: 'Personal Training Services',
                    content: `
                        <p>Get personalized fitness guidance with our trainer NFT collection!</p>
                        <p>Each NFT grants you access to professional personal training sessions.</p>
                        <p>Choose your commitment level and pay what feels right for your fitness goals.</p>
                    `
                },
                projects: [
                    {
                        name: 'PT Session Package',
                        description: 'Professional one-on-one training sessions',
                        image: 'https://placehold.co/400x400/1E1E1E/ffde59?text=PT+Session',
                        projectName: 'pt_session', // Needs NMKR_PROJECT_UID_PT_SESSION in .env
                        custom_pricing: true,
                        minimumCustomPrice: 50.0
                    }
                ]
            }
        ]
    },

    // Social Links
    // Add your project's social media links
    social: {
        twitter: 'https://twitter.com/slothgainz',
        discord: 'https://discord.gg/G3aBKSFnb6',
        telegram: 'https://t.me/slothgainsofficial'
    }
};

