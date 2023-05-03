const languages = require("./languages.json");

export function getLanguageByCode(code) {
  let language= languages.find((language) => language.code === code.toLowerCase());
  return language.name;
}

export function findLanguage(code = "", name = "") {
  if (!code && !name) {
    throw new Error("Please provide either a code or a name or both");
  }

  const language = languages.find((lang) => {
    if (code && name) {
      return lang.code === code && lang.name.toLowerCase() === name.toLowerCase();
    } else if (code) {
      return lang.code === code;
    } else {
      return lang.name.toLowerCase() === name.toLowerCase();
    }
  });

  if (!language) {
    throw new Error("Language not found");
  }

  return language;
}

module.exports = {
  allLanguages: languages,
  getLanguageByCode,
  findLanguage
};
