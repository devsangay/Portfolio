import dev from '../assets/images/developer.jpg';
import { 
    BiHome, 
    BiBriefcase, 
    BiUser, 
    BiEnvelope, 
    BiLogoFacebook, 
    BiLogoInstagram, 
    BiLogoLinkedin, 
    BiLogoTwitter  } from 'react-icons/bi';

export const PROJECTS = [
    {
        name: 'project 1',
        image: dev,
        description: 'this is the first project'
    },
    {
        name: 'project 2',
        image: dev,
        description: 'this is the second project'
    },
    {
        name: 'project 3',
        image: dev,
        description: 'this is the third project'
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