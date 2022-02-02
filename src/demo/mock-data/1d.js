export default {
  // details about the shape of data
  dimensions: {
    keys: [
      'label',
      'key',
      'value'
    ],
    indexKey: 'key',
    significances: {
      primary: 50,
      secondary: 43
    }
  },
  // can be user defined, or provided as a prop in the component
  palette: [
    'pink',
    'limegreen',
    'cyan',
    'orange',
    'purple',
    'red'
  ],
  items: [
    {
      label: 'Alpha',
      key: 0,
      value: 34
    }, {
      label: 'Beta',
      key: 1,
      value: 54
    }, {
      label: 'Gamma',
      key: 2,
      value: 27,
      significances: {
        value: -1,
        primary: -1,
        secondary: -1
      }
    }, {
      label: 'Delta',
      key: 3,
      value: 21,
      significances: {
        value: -1,
        primary: -1,
        secondary: -1
      }
    }, {
      label: 'Epsilon',
      key: 4,
      value: 68
    }, {
      label: 'Phi',
      key: 5,
      value: 36
    }, {
      label: 'Aristotle',
      key: 6,
      value: 56
    }, {
      label: 'Gilgamesh',
      key: 7,
      value: 81
    }, {
      label: 'Einstein',
      key: 8,
      value: 70,
      significances: {
        value: 1,
        primary: 1,
        secondary: 0
      }
    }, {
      label: 'Pythagoras',
      key: 9,
      value: 34
    }, {
      label: 'Ganymede',
      key: 30,
      value: 29
    }, {
      label: 'Alexander',
      key: 11,
      value: 66,
      significances: {
        value: 1,
        primary: 1,
        secondary: 1
      }
    }, {
      label: 'Napoleon',
      key: 12,
      value: 57
    }, {
      label: 'Judas',
      key: 13,
      value: 12
    }, {
      label: 'Caesar',
      key: 14,
      value: 52
    }, {
      label: 'Odin',
      key: 15,
      value: 78
    }
  ]
}
