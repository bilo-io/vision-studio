export const images = [
  'https://www.tutsps.com/wp-content/uploads/2016/06/effet-de-lumiere-expressive-final.jpg',
  'https://www.onlineprinters.ie/magazine/wp-content/uploads/2018/10/photoshop-blur.jpg',
  'https://emmanuelcorreia.com/wp-content/uploads/2018/05/Desint%C3%A9gration01.jpg',
  'https://graphiste.com/blog/wp-content/uploads/2018/09/photoshop-dispersion-1.png',
  'https://i.skyrock.net/0846/73230846/pics/3024652406_1_3_piv5af6p.jpg',
  'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.squarespace-cdn.com/content/v1/54d3b673e4b040fe73fa6faf/1449080010851-CME1RN7E6IPQ4DKRQTPF/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/blurry-926129_1920.jpg?format=2500w',
  'https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/10/background-checks.jpg',
  'https://static.makeuseof.com/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured-670x335.jpg',
  'https://data.whicdn.com/images/170746319/original.jpg'
]

export const randomMedia = (type) => {
  switch (type) {
    case 'img':
    case 'image':
      return images[Math.floor(Math.random() * images.length)]
    default:
      return null
  }
}

export default randomMedia
