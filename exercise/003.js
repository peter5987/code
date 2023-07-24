const data = [
    {
      bootCamps: [
        {
          name: 'tecky',
          regions: [
            {
              name: 'HK',
              campus: [
                { name: 'TW', cohorts: [26, 27] },
                { name: 'KB', cohorts: [27] },
                { name: 'SW', cohorts: [26] },
              ],
            },
            { name: 'UK' },
          ],
        },
      ],
      name: 'Hong Kong',
      topLevelDomain: ['.hk'],
      alpha2Code: 'HK',
      alpha3Code: 'HKG',
      callingCodes: ['852'],
      capital: 'City of Victoria',
      altSpellings: ['HK', '香港'],
      region: 'Asia',
      subregion: 'Eastern Asia',
      population: 7324300,
      latlng: [22.25, 114.16666666],
      demonym: 'Chinese',
      area: 1104.0,
      gini: 53.3,
      timezones: ['UTC+08:00'],
      borders: ['CHN'],
      nativeName: '香港',
      numericCode: '344',
      currencies: [
        {
          code: 'HKD',
          name: 'Hong Kong dollar',
          symbol: '$',
        },
      ],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
        {
          iso639_1: 'zh',
          iso639_2: 'zho',
          name: 'Chinese',
          nativeName: '中文 (Zhōngwén)',
        },
      ],
      translations: {
        de: 'Hong Kong',
        es: 'Hong Kong',
        fr: 'Hong Kong',
        ja: '香港',
        it: 'Hong Kong',
        br: 'Hong Kong',
        pt: 'Hong Kong',
        nl: 'Hongkong',
        hr: 'Hong Kong',
        fa: 'هنگ‌کنگ',
      },
      flag: 'https://flagcdn.com/hk.svg',
      regionalBlocs: [],
      cioc: 'HKG',
    },
  ]
  
  function capitalize(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1)
  }
  
  function composeTitle(prefix, key) {
    if (prefix) {
      return prefix + '_' + capitalize(key)
    } else {
      return capitalize(key)
    }
  }
  
  function printObject(prefix, object) {
    for (let key in object) {
      let title = composeTitle(prefix, key)
      let value = object[key]
      if (Array.isArray(value)) {
        printArray(title, value)
      } else {
        let message = `${title}: ${value}`
        console.log(message)
      }
    }
  }
  
  function printArray_plain(title, array) {
    for (let element of array) {
      if (typeof element === 'object') {
        printObject(title, element)
      } else {
        console.log(title + ': ' + element)
      }
    }
  }
  
  function printArray_indexed(prefix, array) {
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      if (typeof element === 'object') {
        let title = composeTitle(prefix, `[${i}]`)
        printObject(title, element)
      } else {
        console.log(prefix + ': ' + element)
      }
    }
  }
  
  let printArray = printArray_indexed
  
  printArray('', data)