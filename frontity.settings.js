const settings = {
  name: "start-frontity",
  state: {
    frontity: {
      url: "https://start-frontity-demo.vercel.app/",
      title: "SEO, Métricas e Links Patrocinados - Lisane Andrade",
      description:
        "Neste blog você encontra artigos e estudos de caso sobre SEO, métricas e links patrocinados.",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://www.lisaneandrade.com.br/wp-json/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
