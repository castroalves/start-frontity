const settings = {
  "name": "start-frontity",
  "state": {
    "frontity": {
      "url": "https://start-frontity.vercel.app/",
      "title": "Start Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://blastmkt.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
