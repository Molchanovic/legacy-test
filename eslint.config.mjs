import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'linebreak-style': ['error', 'unix'], // стиль разрыва строки linebreak-style: ["error", "unix || windows"]
      'no-console': 'error', // без console.log
      'no-debugger': 'error', // без debugger
      'arrow-parens': ['error', 'as-needed'], // скобки в стрелочной функции
      'no-plusplus': 'off', // запрещает унарные операторы ++и --
      'constructor-super': 'off', // конструкторы производных классов должны вызывать super(). Конструкторы не производных классов не должны вызывать super().
      'no-mixed-operators': [ // Заключение сложных выражений в круглые скобки проясняет замысел разработчика
        'error',
        {
          groups: [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        },
      ],
      'import/extensions': 'off', // обеспечить согласованное использование расширения файла в пути импорта
      'import/prefer-default-export': 'off', // ESLint предпочитает экспорт по умолчанию импорт/предпочитает экспорт по умолчанию
      'no-unused-expressions': 'error', // нет неиспользуемых выражений
      'no-param-reassign': 'off', // без переназначения параметров
      'prefer-destructuring': ['error', { // требуется деструктуризация массивов и/или объектов.
        array: true,
        object: true,
      }, {
        enforceForRenamedProperties: false,
      },
      ],
      'no-bitwise': ['error', { allow: ['~'] }], // запрещает побитовые операторы.
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // запрещает неиспользуемые переменные.
      'max-len': ['error', { code: 120 }], // обеспечивает максимальную длину строки.
      'object-curly-newline': ['error', {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      }], // применяет согласованные разрывы строк после открытия и перед закрытием фигурных скобок.
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // требует или запрещает пустую строку между членами класса.
    },

  },

)
