/**
 * @typedef {{ heading: string; body: string; bullets?: string[] }} ProjectSection
 * @typedef {{ src: string; alt?: string; fit?: 'contain' | 'cover' }} ProjectImage
 * @typedef {{ title: string; sections: ProjectSection[]; imageSrc?: string; imageAlt?: string; images?: ProjectImage[] }} ProjectDetail
 */

const PROJECTS = {
    'hw_dual': {
        title: 'DUAL DAUGHTER BOARD',
        images: [
            { src: 'images/hardware/dual.png', alt: 'Dual Daughter QFN Board', fit: 'cover' },
            { src: 'images/hardware/dual_real.jpg', alt: 'Soldered Board', fit: 'cover' },
            { src: 'images/hardware/dual_sch.png', alt: 'Schematic', fit: 'cover' }
        ],
        sections: [{
            heading: 'V2 Dual Daughter QFN Board',
            body: 'Testing in progress...\nA board housing the team’s Analog (SAR ADC) and Digital 2025 tapeouts (QFN package), allowing for communication between the two.\nIncludes a multi-stage amplifier and fully differential amplifier for analog input signals.',
            bullets: ['Link: https://github.com/joannec34/pcbs', 'Skills: Altium, LTspice, Soldering',]
        }]
    },
    'hw_tiny': {
        title: 'TEENY TPU TINY TAPEOUT SKY26a',
        images: [
            { src: 'images/hardware/teenytpu.png', alt: 'Teeny TPU Tiny Tapeout SKY26a', fit: 'cover' }
        ],
        sections: [{
            heading: 'Teeny TPU Tiny Tapeout SKY26a',
            body: '2x2 INT8 systolic array TPU with SPI memory interface.',
            bullets: ['Link: https://github.com/joannec34/teenytpu', 'Skills: Verilog, Git, OpenLane, HLS'],
        }]
    },
    'hw_stm32': {
        title: 'STM32 BOARD',
        images: [
            { src: 'images/hardware/kicad.png', alt: 'KiCad Tutorial Layout', fit: 'cover' },
            { src: 'images/hardware/kicad_2d.png', alt: 'STM32 Board PCB', fit: 'cover' },
            { src: 'images/hardware/kicad_sch.png', alt: 'STM32 Schematic', fit: 'cover' }
        ],
        sections: [{
            heading: 'STM32 Board',
            body: 'Completed (December 2024).\nInitial onboarding board for learning PCB design.\nFollowed a tutorial by Phil’s Lab to create a functional STM32-based board.',
            bullets: ['Skills: KiCad']
        }]
    },
    'art_crush': {
        title: 'CRUSH THE HERO',
        images: [{ src: 'images/art/crush_card.png', alt: 'Crush the Hero Card Art', fit: 'cover' }],
        sections: [{
            heading: 'Crush the Hero',
            body: 'Ongoing.\nCurrently in development (Coming soon!).'
        }]
    },
    'art_duke': {
        title: 'DUKE VS. THE GANG',
        images: [
            { src: 'images/art/mirage_idle.gif', alt: 'Mirage Idle Animation', fit: 'cover' },
            { src: 'images/art/mirage_attack.gif', alt: 'Mirage Attack Animation', fit: 'cover' },
            { src: 'images/art/mirage_poof.gif', alt: 'Mirage Poof Animation', fit: 'cover' },
            { src: 'images/art/dvg_props.png', alt: 'Duke vs. The Gang Environmental Assets', fit: 'cover' }
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
            { src: 'images/art/dj_cover.png', alt: 'DJ Da Capo Cover Art', fit: 'cover' },
            { src: 'images/art/dj_idle.gif', alt: 'DJ Da Capo Idle Animation', fit: 'cover' },
            { src: 'images/art/dj_walk.gif', alt: 'DJ Da Capo Walk Animation', fit: 'cover' },
            { src: 'images/art/dj_jump.gif', alt: 'DJ Da Capo Jump Animation', fit: 'cover' },
            { src: 'images/art/dj_jam.gif', alt: 'DJ Da Capo Jam Animation', fit: 'cover' }
        ],
        sections: [{
            heading: 'DJ Da Capo',
            body: 'A music-creation 2D platformer developed during the BigRed//Hacks 2025 hackathon.\nDesigned all game assets and managed game logic to integrate animations.',
        }]
    }
};
