
import linkBhutan from '../assets/images/linkbhutan.png';

import { 
    BiHome, 
    BiBriefcase, 
    BiUser, 
    BiEnvelope, 
    BiLogoFacebook, 
    BiLogoInstagram, 
    BiLogoLinkedin,
    BiFile,
    BiLogoTwitter  } from 'react-icons/bi';

export const PROJECTS = [
    {
        name: 'Travel Agent Website',
        image: linkBhutan,
        description: 'Discover the magic of Bhutan through unforgettable, curated travel experiences.',
        link: 'https://link-bhutan-1.vercel.app/'
    }
];

export const MENU_ITEMS = [
     {
        label: 'Home',
        id: 'home',
        icon: BiHome
    },
    {
        label: 'About',
        id: 'about',
        icon: BiUser
    },
     {
        label: 'Projects',
        id: 'projects',
        icon: BiBriefcase
    },
    {
        label: 'Contact',
        id: 'contact',
        icon: BiEnvelope
    },
    {
        label: 'CV',
        id: 'cv',
        icon: BiFile
    }
];

export const SOCIAL_MEDIA = [
    { 
        social: BiLogoFacebook,
        link: 'https://www.facebook.com/sangay.wdee/',
        id: 'fb'
    },
    { 
        social: BiLogoInstagram,
        link: 'https://www.instagram.com/sangay_wdee/',
        id: 'ig'
    },
    { 
        social: BiLogoLinkedin,
        link: 'https://linkedin.com/in/sangay-wangdi-27aa06238',
        id: 'li'
    },
    { 
        social: BiLogoTwitter,
        link: 'https://x.com/SangayWdee?t=_ACW8HM6cFkO902Vtls6lw&s=09',
        id: 'tw'
    }
];