export default [
  {
    type: 'category',
    name: 'Multimedia'
  },
  {
    type: 'widget:upload',
    name: 'Upload',
    meta: {

      icon: 'upload',
      banner: '#48CFAD',
      iconUrl: 'https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Arrow-upload-2-icon.png',
      description: 'A widget with which to import data into the presentation',
      version: 'discovery',
      tags: [
        'upload',
        'data',
        'file',
        'media',
        'image',
        'video',
        'audio',
        'sound',
        'excel',
        'csv',
        'png',
        'jpg',
        'mp3',
        'mp4',
        'mov',
        'ogg',
        'wav',
        'xlsx'
      ]
    }
  },
  // {
  //     type: 'widget:canvas',
  //     name: 'Canvas',
  //     iconUrl: 'https://pngimage.net/wp-content/uploads/2018/06/palette-icon-png-2.png',
  //     banner: '#2a5a66',
  //     description: 'Create basic graphics on a single canvas',
  //     version: 'discovery',
  //     tags: ['canvas', 'art', 'creative', 'design', 'media']
  // },
  {
    type: 'widget:media:audio',
    name: 'Audio',
    version: 'pre-alpha',
    meta: {
      icon: 'music',
      banner: '#273b47',
      iconUrl: 'https://image.flaticon.com/icons/png/512/178/178140.png',
      description: 'A widget to load and play sound files.',
      tags: ['audio', 'media', 'mp3', 'music', 'sound', 'wav'],
      category: 'Multimedia'
    }
  }, {
    type: 'widget:media:video',
    name: 'Video',
    meta: {
      icon: 'video',
      banner: '#297c68',
      iconUrl: 'https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Film-icon.png',
      description: 'A widget to load and play sound files.',
      version: 'pre-alpha',
      tags: ['media', 'mov', 'mp4', 'video'],
      category: 'Multimedia'
    }
  }, {
    type: 'widget:media:image',
    version: 'pre-alpha',
    name: 'Image',
    meta: {
      icon: 'image',
      iconUrl: 'https://image.flaticon.com/icons/svg/1590/1590898.svg',
      banner: '#dd6611',
      description: 'Attach images to slideshows',
      tags: [
        'data',
        'media',
        'file',
        'photo',
        'image',
        'png',
        'jpg'
      ],
      category: 'Multimedia'
    }
  },
  {
    name: 'Text',
    type: 'widget:media:text',
    version: 'alpha',
    meta: {
      icon: 'font',
      iconUrl: 'https://www.shareicon.net/data/2016/08/18/815854_document_512x512.png',
      banner: '#3399dd',
      description: 'Add for your slideshows',
      tags: ['text', 'media', 'presentation'],
      category: 'Multimedia'
    }
  },
  {
    name: 'Multimedia',
    type: 'widget:media:master',
    meta: {
      iconUrl: 'https://socialhackettes.com/wp-content/uploads/2019/12/digital-campaign.png',
      banner: '#333',
      description: 'Attach media of multiple types',
      version: 'discovery',
      tags: [
        'file',
        'media',
        'image',
        'video',
        'audio',
        'sound',
        'png',
        'jpg',
        'mp3',
        'mp4',
        'mov',
        'ogg',
        'wav'
      ]
    }
  },
  // ---------------------------------
  {
    type: 'category',
    name: 'Social Media'
  },
  {
    name: 'Instagram',
    type: 'widget:instagram',
    version: 'alpha',
    meta: {
      icon: 'photo',
      banner: '#731F52',
      iconUrl: 'https://cdn.clipart.email/0d7cafa4e01d9067fabd9998e1cc3860_instagram-logo-circle-transparent-png-clipart-free-download-ywd_512-512.png',
      description: 'Show feeds of intstagram accounts or #hastags',
      tags: ['photo', 'image', 'gallery', 'video', 'sound', 'social', 'media'],
      category: 'Social Media'
    },
    api: {

    }
  }, {
    name: 'Sound Cloud',
    type: 'widget:soundcloud',
    version: 'beta',
    meta: {
      iconUrl: 'https://i.ya-webdesign.com/images/soundcloud-icon-png-11.png',
      banner: '#bf2600',
      description: 'Easily integrate Sound Cloud songs and playlists',
      tags: ['music', 'sound', 'audio', 'social'],
      category: 'Social Media'
    },
    api: {

    }
  }, {
    name: 'Vimeo',
    type: 'widget:vimeo',
    version: 'discovery',
    meta: {
      icon: 'video',
      banner: '#1984aa',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/vimeo-512.png',
      description: 'Embed any vimeo clip, by providing the url',
      tags: ['music', 'video', 'sound', 'audio', 'social'],
      category: 'Social Media'
    }
  }, {
    name: 'Youtube',
    type: 'widget:youtube',
    version: 'alpha',
    meta: {
      banner: '#991621',
      iconUrl: 'https://i.ya-webdesign.com/images/youtube-video-play-icon-png-3.png',
      description: 'Easily embed Youtube videos in your slideshows',
      tags: ['music', 'video', 'sound', 'audio', 'social'],
      category: 'Social Media'
    },
    api: {
      apiUrl: '',
      apiDocsUrl: 'https://developers.google.com/youtube/v3/getting-started',
      apiKeysUrl: '',
      accountUrl: 'https://www.google.com/accounts/NewAccount',
      convertUrl: '',
      auth: {
        clientId: true,
        clientSecret: true,
        apiKey: false,
        apiToken: false
      }
    }
  }, {
    name: 'Spotify',
    type: 'widget:spotify',
    version: 'alpha',
    meta: {
      banner: '#444',
      iconUrl: 'https://i.ya-webdesign.com/images/spotify-icon-png.png',
      description: 'Easily embed Spotify Tracks and playlists in your slideshows',
      tags: ['music', 'video', 'sound', 'audio', 'social'],
      category: 'Social Media'
    },
    api: {
      apiUrl: '',
      accountUrl: 'https://www.spotify.com/signup',
      appKeysUrl: 'https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app'
    }
  },
  {
    type: 'widget:twitter',
    name: 'Twitter',
    meta: {
      iconUrl: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
      banner: '#3675a5',
      description: 'A widget with which to import data into the presentation',
      version: 'discovery',
      tags: ['social', 'post', 'tweet']
    }
  }, {
    type: 'widget:pinterest',
    name: 'Pinterest',
    meta: {
      iconUrl: 'https://i.ya-webdesign.com/images/pinterest-icon-png-transparent-background-3.png',
      banner: '#99191E',
      description: 'View pinterest walls from desired sources',
      version: 'discover',
      tags: ['photo', 'image', 'gallery', 'social', 'media', 'art']
    }
  },
  // ---------------------------------
  {
    type: 'category',
    name: 'Misc'
  },
  // {
  //     type: 'widget:dropbox',
  //     name: 'Dropbox',
  //     banner: '#137cc1',
  //     iconUrl: 'https://icons-for-free.com/iconfiles/png/512/data+documents+dropbox+files+logo+storage+icon-1320168601865985118.png',
  //     description: 'Link your Dropbox files to your slideshows.',
  //     tags: [ 'cloud', 'storage', 'media', 'file', 'sync'],
  //     meta: { category: 'Misc' }
  // },
  {
    type: 'widget:news',
    name: 'News',
    meta: {
      icon: 'globe',
      banner: '#aa3131',
      iconUrl: 'https://i.ya-webdesign.com/images/png-news-icon-5.png',
      description: 'Display current news, specific to regions and categories',
      version: 'beta',
      tags: ['news', 'media', 'bbc', 'cnn']
    }
  },
  // {
  //     type: 'widget:embed',
  //     name: 'Embed',
  //     icon: 'code',
  //     banner: '#bc1a3d',
  //     iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/code-280-460136.png',
  //     description: 'A widget to display any public url',
  //     version: 'discovery',
  //     tags: ['web', 'embed', 'site', 'page']
  // },
  // {
  //     type: 'widget:map',
  //     name: 'Points of Interest',
  //     icon: 'map',
  //     banner: 'lightgrey',
  //     iconUrl: 'https://pngimg.com/uploads/gps/gps_PNG56.png',
  //     description: 'Show points of interest on a map',
  //     version: 'beta',
  //     tags: ['map', 'location', 'geo']
  // },
  // ---------------------------------
  {
    type: 'category',
    name: 'Google'
  },
  {
    type: 'widget:google:docs',
    name: 'Google Docs',
    version: 'beta',
    meta: {
      iconUrl: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png',
      banner: '#366ec9',
      description: 'Easily craft presentations with Google Slides to display on screens',
      tags: [
        'google',
        'productivity',
        'slides',
        'document',
        'word',
        'docx'
      ]
    }
  }, {
    type: 'widget:google:sheets',
    name: 'Google Sheets',
    version: 'beta',
    meta: {
      iconUrl: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Sheets-icon.png',
      banner: '#1b8451',
      description: 'Easily craft presentations with Google Slides to display on screens',
      tags: [
        'google',
        'productivity',
        'sheets',
        'spreadsheet',
        'presentation',
        'powerpoint',
        'pptx',
        'data'
      ]
    }
  },
  {
    type: 'widget:google:slides',
    name: 'Google Slides',
    meta: {

      iconUrl: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Slides-icon.png',
      banner: '#FBC02D',
      description: 'Easily craft presentations with Google Slides to display on screens',
      version: 'beta',
      tags: [
        'google',
        'productivity',
        'slides',
        'presentation',
        'powerpoint',
        'pptx'
      ]
    }
  },
  // ---------------------------------
  {
    type: 'category',
    name: 'Data & Visualisation'
  },
  {
    type: 'data:upload',
    name: 'Data',
    meta: {

      iconUrl: 'https://image.flaticon.com/icons/svg/1486/1486288.svg',
      description: 'A tile that loads various data files into the presentation.',
      version: 'alpha',
      tags: [
        'data',
        'csv',
        'json',
        'sheets',
        'xlsx',
        'excel'
      ]
    }
  }, {
    type: 'data:functions',
    name: 'Functions',
    meta: {

      iconUrl: 'https://pngimage.net/wp-content/uploads/2018/06/fungsi-png-4.png',
      description: 'A set of functions that take an input and return a certain output',
      version: 'alpha',
      tags: [
        'data',
        'csv',
        'json',
        'sheets',
        'xlsx',
        'excel'
      ]
    }
  }, {
    type: 'data:models',
    name: 'Models',
    meta: {

      iconUrl: 'https://www.pngrepo.com/png/129503/170/blueprint.png',
      description: 'A set of models, each a set of functions, to run over a dataset',
      version: 'alpha',
      tags: [
        'data',
        'csv',
        'json',
        'sheets',
        'xlsx',
        'excel',
        'model'
      ]
    }
  }, {
    type: 'data:charts',
    name: 'Charts',
    meta: {
      iconUrl: 'https://getdrawings.com/free-icon/data-icon-png-61.png',
      description: 'A tile that allows visualization of data using charts.',
      version: 'alpha',
      tags: [
        'data',
        'csv',
        'json',
        'sheets',
        'xlsx',
        'excel',
        'viz',
        'charts',
        'visualisation'
      ]
    }
  }, {
    type: 'data:chart:bar',
    name: 'Bar Chart',
    meta: {
      // iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/bar-graph-2119073-1790556.png',
      iconUrl: 'https://icons-for-free.com/iconfiles/png/512/bar+chart+charts+graph+icon-1320166526348775561.png',
      description: 'Visualize numerical table data which is flat or nested by 1 level, i.e. grouped.'
    }
  }, {
    type: 'data:chart:line',
    name: 'Line Chart',
    meta: {
      iconUrl: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trends-512.png',
      description: 'Visualize numerical table data which is flat or nested by 1 level, i.e. grouped.'
    }
  }, {
    type: 'data:chart:pie',
    name: 'Pie Chart',
    meta: {
      iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/pie-chart-1430973-1208737.png'
      // iconUrl: 'https://img.icons8.com/plasticine/2x/pie-chart.png'
    }
  },
  // ---------------------------------
  {
    type: 'category',
    name: 'Productivity'
  },
  {
    type: 'widget:calendar',
    name: 'Calendar',
    version: 'alpha',
    meta: {
      icon: 'calendar',
      banner: '#e06e2c',
      iconUrl: 'https://icons.iconarchive.com/icons/fps.hu/free-christmas-flat-circle/512/calendar-icon.png',
      description: 'A simple calendar to display the current date',
      tags: ['calendar', 'productivity', 'date', 'time', 'schedule'],
      category: 'Productivity'
    }
  },
  {
    name: 'Clock',
    type: 'widget:clock',
    version: 'alpha',
    meta: {
      icon: 'clock',
      banner: '#e06e2c',
      iconUrl: 'https://i.pinimg.com/originals/67/19/0b/67190b2076ccdf40951b613878e6bdf8.png',
      description: 'Show feeds of intstagram accounts or #hastags',
      tags: ['productivity', 'time', 'date', 'count', 'schedule', 'world'],
      category: 'Productivity'
    }
  },
  {
    type: 'widget:countdown',
    name: 'Countdown',
    version: 'alpha',
    meta: {

      icon: 'stopwatch',
      banner: '#e06e2c',
      iconUrl: 'https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/timer-icon.png',
      description: 'Show feeds of intstagram accounts or #hastags',
      tags: ['productivity', 'time', 'date', 'count']
    }
  }, {
    type: 'widget:exchanges',
    name: 'Exchanges',
    meta: {
      icon: 'money-check-alt',
      banner: '#668A9F',
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/dollar-exchange-512.png',
      description: 'View realtime exchanges rates for selected currencies',
      version: 'pre-alpha',
      tags: ['money', 'forex', 'cash', 'exchange', 'currency', 'finance']
    }
  },
  {
    name: 'Weather',
    type: 'widget:weather',
    version: 'pre-alpha',
    meta: {
      icon: 'cloud-sun-rain',
      iconUrl: 'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png',
      banner: '#00588c',
      description: 'Show weather for a given location',
      tags: ['data', 'weather', 'api', 'climate', 'schedule'],
      category: 'Productivity'
    }
  }
]
