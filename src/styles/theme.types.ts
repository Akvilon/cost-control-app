

export type ThemeColors = {
    wrapperBackground: string,
    background: string,
    reverseBackground: string,
    dangerBackground: string,
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