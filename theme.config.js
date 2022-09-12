export default {
    project: { link: 'https://github.com/neighbor-ryan/ebikes', }, // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/neighbor-ryan/ebikes', // base URL for the docs repository
    titleSuffix: ' - E-bikes are a Transportation Revolution',
    toc: {
        float: false,
    },
    navigation: {
        next: true,
        prev: true,
    },
    unstable_flexsearch: {
        codeblocks: true,
    },
    search: { placeholder: "Search pages", },
    // darkMode: true,
    footer: { text: "", },
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
