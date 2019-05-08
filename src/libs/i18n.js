import moment from 'moment'

var i18n

load()

var DEFAULT
var PASSWORD
var CURRENT_PASSWORD
var REPEAT_PASSWORD
var UPDATE

function load(lang) {
  lang = lang || moment.locale()

  i18n = lang === 'es' ?
    import('../lang/es') :
    import('../lang/en')

  DEFAULT = DEFAULT_LOADER()
  PASSWORD = PASSWORD_LOADER()
  CURRENT_PASSWORD = CURRENT_PASSWORD_LOADER()
  REPEAT_PASSWORD = REPEAT_PASSWORD_LOADER()
  UPDATE = UPDATE_LOADER()
}

async function DEFAULT_LOADER() {
  return await i18n
}

async function PASSWORD_LOADER() {
  return ( await i18n ).PASSWORD
}

async function CURRENT_PASSWORD_LOADER() {
  return ( await i18n ).CURRENT_PASSWORD
}

async function REPEAT_PASSWORD_LOADER() {
  return ( await i18n ).REPEAT_PASSWORD
}

async function UPDATE_LOADER() {
  return ( await i18n ).UPDATE
}

export { PASSWORD, CURRENT_PASSWORD, REPEAT_PASSWORD, UPDATE, load }

export default DEFAULT
