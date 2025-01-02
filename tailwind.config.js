/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","menu.html","about.html","locat.html"],
  theme: {
    fontFamily:{
      'isi': ['Montserrat'],
      'jdl': ['Lexend Giga'],
    },
    container: {
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        isi:'#09090b',  
        judul:'#6F4E37',
        btnshad:'#603F26',
      }, 
      backgroundImage: {
        'heroback': "url('/src/img/back/heroback.jpg')",
        'heromenu': "url('/src/img/back/heromenu.jpg')",
        'heroabot': "url('/src/img/back/heroabot.jpg')",
        'herocont': "url('/src/img/back/herocont.jpg')",
      }
    },
  },
  plugins: [],
}

