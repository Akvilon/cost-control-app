import { ThemeColors } from "./theme.types";

export const lightThemeColors: ThemeColors = {
    wrapperBackground: `background: #1D4350;
                        background: -webkit-linear-gradient(to right, #A43931, #1D4350);
                        background: linear-gradient(to right, #A43931, #1D4350);`,
    background: '#ffffff',
    reverseBackground: '#1D4350',
    dangerBackground: '#A43931',
    fontColor: '#1D4350',
    reverseFontColor: '#ffffff'
}

export const darkThemeColors: ThemeColors = {
    wrapperBackground: `background: #1D4350;
                        background: -webkit-linear-gradient(to right, #A43931, #1D4350);
                        background: linear-gradient(to right, #A43931, #1D4350);`,
    background: '#1f1c1c',
    reverseBackground: '#ffffff',
    dangerBackground: '#A43931',
    fontColor: '#ffffff',
    reverseFontColor: '#1D4350'
}

