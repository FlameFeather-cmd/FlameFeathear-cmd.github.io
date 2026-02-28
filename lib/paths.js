//! Gagal
// const pathName = window.location.pathname;
// const folder = ["/page/", "/detail/", "/loop/", "components"]
// let basePrefix = ""

// for (let i = 0;  i < folder.length; i++) {
//     const isPageFolder = pathName.includes(folder[i])
//     basePrefix += isPageFolder ? "../" : ""
//     console.log("checking " + i)
// }

// console.log(basePrefix)

const ZISAM_PATHS = {
    database: {
        config: `./../database/config.json`,
        dynamic: `./../database/dynamic.json`,
        supported: `./../database/media/supported.json`,
        team: `./../database/team.json`
    },
    templates: {
        supported: `./../components/loop/supported-item.html`,
        team_index: `./../components/loop/team-index-item.html`,
        panitia_zisam: `./../components/loop/panitia-zisam-item.html`
    }
};

console.log(ZISAM_PATHS)
window.ZISAM_PATHS = ZISAM_PATHS;
