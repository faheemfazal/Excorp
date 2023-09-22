


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        'custom-color': '#222627',
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
      spacing: {
        '3px': '520px',
      },
      boxShadow: {
        'left-dark': '-5px 0px 15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       
        'HomeOne' : "url('/assets/image/one.png')",
        'Hometwo':"url('/assets/image/two.jpg')",
        'Homethree':"url('/assets/image/three.jpg')",
        'service':"url('/assets/image/service1.jpg')",
        'Bathroom':"url('/assets/image/bathroom.jpg')",
'Bedrom':"url('/assets/image/bedroom.png')",
'Fayor':"url('/assets/image/foyer.avif')",
'Hallway':"url('/assets/image/steyers.jpeg')",
'Kitchen':"url('/assets/image/kitchen.avif')",
'Living':"url('/assets/image/livingrom.jpeg')",
'Pets':"url('/assets/image/furniture.jpg')",
'Vegnette':"url('/assets/image/vegnette.jpeg')",
'Dining':"url('/assets/image/dyningroom.jpg')",
'Kids':"url('/assets/image/kidsroom.jpeg')",
'OutDoors':"url('/assets/image/outdoo.jpeg')",
'Workspace':"url('/assets/image/workSpace.jpg')",



        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
   
  ],
}
