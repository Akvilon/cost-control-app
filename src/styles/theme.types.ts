

export type ThemeColors = {
    wrapperBackground: string,
    background: string,
}

export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}