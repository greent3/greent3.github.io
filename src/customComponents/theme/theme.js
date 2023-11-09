export const customTheme = {
    text: {
        font: {
            default: 'Roboto'
        },
        color: {
            defaultWhite: '#fafafa'
        },
        weight: {
            sectionTitle: 900,
            regularText: 100
        },
        size: {
            sectionTitle: 30,
            sectionSubtitle: 20,
            regularText: 16
        }

    }
}

export const themeByComponent = {
    sectionTitle: {
        font: customTheme.text.font.default,
        color: customTheme.text.color.defaultWhite,
        fontWeight: customTheme.text.weight.sectionTitle,
        fontSize: customTheme.text.size.sectionTitle
    },
    sectionSubtitle: {
        font: customTheme.text.font.default,
        color: customTheme.text.color.defaultWhite,
        fontWeight: customTheme.text.weight.sectionTitle,
        fontSize: customTheme.text.size.sectionSubtitle
    },
    regularText: {
        font: customTheme.text.font.default,
        color: customTheme.text.color.defaultWhite,
        fontWeight: customTheme.text.weight.regularText,
        fontSize: customTheme.text.size.regularText
    }
}



