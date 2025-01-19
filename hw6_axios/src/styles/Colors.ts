import {ColorsKeys, IColorsValues} from '../modules/theme/ThemeTypes.ts';

export const Colors: Record<ColorsKeys, IColorsValues> = {
    overlay: {
        light: '#21212114',
        dark: '#FFFFFF14',
        custom: 'rgba(255, 245, 224, 0.7)',
        system: 'white',
    },
    backgroundPrimary: {
        light: '#F7F7F7',
        dark: '#121212',
        custom: '#F5F5DC',
        system: 'white',
    },
    backgroundSecondary: {
        light: '#F7F7F7',
        dark: '#444444',
        custom: '#F5F5DC',
        system: 'white',
    },
    accentDefault: {
        light: '#1B58F1',
        dark: '#1491c7',
        custom: '#D2B48C',
        system: 'white',
    },
    textPrimary: {
        light: '#141C24',
        dark: '#FFFFFFF0',
        custom: '#8B4513',
        system: 'white',
    },
    textSecondary: {
        light: '#637083',
        dark: '#FFFFFF99',
        custom: '#A89F91',
        system: 'white',
    },
};
