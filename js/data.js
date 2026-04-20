/**
 * @typedef {{ heading: string; body: string; bullets?: string[] }} ProjectSection
 * @typedef {{ src: string; alt?: string; fit?: 'contain' | 'cover' }} ProjectImage
 * @typedef {{ title: string; sections: ProjectSection[]; imageSrc?: string; imageAlt?: string; images?: ProjectImage[] }} ProjectDetail
 */

const PROJECTS = {
    'hw_dual': {
        title: 'DUAL DAUGHTER BOARD',
        images: [
            { src: 'images/dual_daughter2.png', alt: 'Dual Daughter QFN Board Front', fit: 'cover' },
            { src: 'images/dual_daughter_soldered.jpg', alt: 'Soldered Board', fit: 'cover' },
            { src: 'images/dual_daughter2_schematic.png', alt: 'Schematic', fit: 'cover' }
        ],
        sections: [{
            heading: 'V2 Dual Daughter QFN Board',
            body: 'In progress...\nA board housing the team’s Analog (SAR ADC) and Digital 2025 tapeouts (QFN package), allowing for communication between the two.\nIncludes a multi-stage amplifier and fully differential amplifier for analog input signals.',
            bullets: ['Tools: Altium, LTspice, Soldering',]
        }]
    },
    'hw_stm32': {
        title: 'STM32 BOARD',
        images: [
            { src: 'images/kicad_tutorial_cropped.png', alt: 'KiCad Tutorial Layout', fit: 'cover' },
            { src: 'images/kicad_pcb_cropped.png', alt: 'STM32 Board PCB', fit: 'cover' },
            { src: 'images/kicad_schematic_cropped.png', alt: 'STM32 Schematic', fit: 'cover' }
        ],
        sections: [{
            heading: 'STM32 Board',
            body: 'Completed (December 2024).\nInitial onboarding board for learning PCB design.\nFollowed a tutorial by Phil’s Lab to create a functional STM32-based board.',
            bullets: ['Tools: KiCad']
        }]
    },
    'art_crush': {
        title: 'CRUSH THE HERO',
        images: [{ src: 'images/cth_card.png', alt: 'Crush the Hero Card Art', fit: 'cover' }],
        sections: [{
            heading: 'Crush the Hero',
            body: 'Ongoing.\nCurrently in development (Coming soon!).'
        }]
    },
    'art_duke': {
        title: 'DUKE VS. THE GANG',
        images: [
            { src: 'images/mirage_idle.gif', alt: 'Mirage Idle Animation', fit: 'cover' },
            { src: 'images/mirage_attack.gif', alt: 'Mirage Attack Animation', fit: 'cover' },
            { src: 'images/mirage_poof.gif', alt: 'Mirage Poof Animation', fit: 'cover' },
            { src: 'images/dvg_props.png', alt: 'Duke vs. The Gang Environmental Assets', fit: 'cover' }
        ],
        sections: [{
            heading: 'Duke vs. the Gang',
            body: 'A Wild West-themed bullet hell game where players fight to save a bartending business.\nDesigned and animated the character Mirage and created environmental assets for the saloon interior.',
            bullets: ['Link: dgacornell.itch.io/duke-vs-the-gang']
        }]
    },
    'art_dj': {
        title: 'DJ DA CAPO',
        images: [
            { src: 'images/dj_cover.png', alt: 'DJ Da Capo Cover Art', fit: 'cover' },
            { src: 'images/dj_idle.gif', alt: 'DJ Da Capo Idle Animation', fit: 'cover' },
            { src: 'images/dj_walk.gif', alt: 'DJ Da Capo Walk Animation', fit: 'cover' },
            { src: 'images/dj_jump.png', alt: 'DJ Da Capo Jump Animation', fit: 'cover' },
            { src: 'images/dj_jam.png', alt: 'DJ Da Capo Jam Animation', fit: 'cover' }
        ],
        sections: [{
            heading: 'DJ Da Capo',
            body: 'A music-creation 2D platformer developed during the BigRed//Hacks 2025 hackathon.\nDesigned all game assets and managed game logic to integrate animations.',
        }]
    }
};
