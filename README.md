# Language List Package

This is a simple package that provides a list of languages in JSON format that can be used in various applications. The package contains a comprehensive list of languages that have been collected from Wikipedia.

## Installation

You can install the package via npm by running the following command:

```console
npm install global-languages-list
```

## Usage

To use the package, you can import it into your project as follows:

```console
const languages=require('global-languages-list');
console.log(languages);
```

The package exports an array of objects, where each object represents a language and contains the following properties:

```console
code: The ISO 639-1 language code
name: The name of the language in English
```

Here's an example of how you can use the language list to create a dropdown menu in a web application:

```console
<select>
  <option disabled selected>Select a language</option>
  {languages.allLanguages.map((language) => (
    <option value={language.code}>{language.name}</option>
  ))}
</select>
```

To get the name of a language by its code, you can use the getLanguageByCode function:

```console
const languages = require('global-languages-list');

const name = languages.getLanguageByCode('en');
console.log(name); // "English"
```

To find a language object by either its code or name or both, you can use the findLanguage function:

```console
const languages = require('global-languages-list');


const lang1 = languages.findLanguage('en');
console.log(lang1); // { code: 'en', name: 'English' }

// Find by name
const lang2 = languages.findLanguage('', 'English');
console.log(lang2); // { code: 'en', name: 'English' }

// Find by code and name
const lang3 = languages.findLanguage('en', 'English');
console.log(lang3); // { code: 'en', name: 'English' }
```

Note that findLanguage throws an error if the language is not found, so it is important to handle it properly.

## License

This package is open source and available under the MIT License. Feel free to use it in your projects, modify it, and redistribute it as needed.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please read the CONTRIBUTING file for more information.

## Issues

If you find a bug or have a feature request, please create an issue on the issue tracker.

## Credits

Secure-pass-generator is developed and maintained byRifatur Rana. Thank you to all our contributors!

## Support

If you need help or have questions about Secure-pass-generator, please contact me at smrifaturrana@gmail.com.
