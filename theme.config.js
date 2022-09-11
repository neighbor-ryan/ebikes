export default {
    project: { link: 'https://github.com/neighbor-ryan/ebikes', }, // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/neighbor-ryan/ebikes', // base URL for the docs repository
    titleSuffix: ' - E-bikes are a Transportation Revolution',
    // defaultMenuCollapsed: true,
    toc: {
        float: true,
    },
    floatTOC: true,
    navigation: {
        next: true,
        prev: true,
    },
    // nextLinks: true,
    // prevLinks: true,
    // search: true,
    // customSearch: null, // customizable, you can use algolia for example
    // darkMode: true,
    // footer: true,
    // footerText: '',  // `MIT ${new Date().getFullYear()} © Shu Ding.`,
    editLink: { text: `Edit this page on GitHub`, },
    logo: (
        <>
            <img src={"favicon.ico"} />
            <span>E-bikes are a Transportation Revolution</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/*<meta name="description" content="" />*/}
            <meta name="og:title" content="E-bikes are a Transportation Revolution" />
        </>
    ),
}
