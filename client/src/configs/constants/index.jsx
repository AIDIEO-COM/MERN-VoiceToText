import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const ENUM_STATUS = {
    NONE: 'none',
    START: 'start',
    PAUSE: 'pause',
    STOP: 'stop'
}

export const navItems = [
    { id: 1, text: 'Aanpak', href: '#aanpak' },
    { id: 2, text: 'Voordelen', href: '#voordelen' },
    { id: 3, text: 'Ervaringen', href: '#ervaringen' },
    { id: 4, text: 'Q&A', href: '#qa' },
    { id: 5, text: 'Contact', href: '#contact' },
];

export const checkpoints = [
    {
        icon: <IoIosCheckmarkCircleOutline />,
        text: "<strong>Tijdbesparing:</strong> Automatiseer uw intakeproces en bespaar tot 20 minuten per patiënt.",
    },
    {
        icon: <IoIosCheckmarkCircleOutline />,
        text: "<strong>Gebruiksgemak:</strong> Intuïtieve interface voor eenvoudige bediening zonder technische hindernissen.",
    },
    {
        icon: <IoIosCheckmarkCircleOutline />,
        text: "<strong>Volledige Aandacht:</strong> Laat het noteren over aan fysio.ai en voer gesprekken zonder afleiding.",
    },
    {
        icon: <IoIosCheckmarkCircleOutline />,
        text: "<strong>Veiligheid: </strong>Veilige opslag en verwerking van patiëntgesprekken met volledige naleving van privacywetten.",
    },
    {
        icon: <IoIosCheckmarkCircleOutline />,
        text: "<strong>Professioneel en Precies:</strong> Ons AI-model is getraind in fysiotherapeutisch jargon, zodat elke interactie vakkundig en in de juiste terminologie wordt vastgelegd. Daarnaast wordt alleen de relevante informatie uit het gesprek gefilterd.",
    },
];

export const modalData = [
    { title: 'Hulpvraag patiënt (of contactreden)', id: 'feedbackModal1', label: 'feedbackModal1Label' },
    { title: 'Functioneringsproblemen en beloop', id: 'feedbackModal2', label: 'feedbackModal2Label' },
    { title: 'Medische gezondheidsdeterminanten', id: 'feedbackModal3', label: 'feedbackModal3Label' },
    { title: 'Omgevingsdeterminanten', id: 'feedbackModal4', label: 'feedbackModal4Label' },
    { title: 'Persoonlijke determinanten', id: 'feedbackModal5', label: 'feedbackModal5Label' },
];