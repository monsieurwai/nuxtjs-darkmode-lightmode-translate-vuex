const lang = require('../lang/lang.json');

export const state = () => ({
  themeMode: "lightMode",
  langMode: lang.FR_fr
})

export const mutations = {
  changeTheme (state) {
    state.themeMode === "lightMode" ? state.themeMode = "darkMode" : state.themeMode = "lightMode"
  },
  changeLang (state) {
    state.langMode.id === "FR_fr" ? state.langMode = lang.EN_us : state.langMode = lang.FR_fr
  }
}
