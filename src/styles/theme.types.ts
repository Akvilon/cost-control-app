

export type ThemeColors = {
    wrapperBackground: string,
    background: string,
    fontColor: string,
    reverseFontColor: string
}

export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}