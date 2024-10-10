export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            // Chat bubble color combinations for different themes
            'bubble-user': {
              light: '#3b82f6', // bg-primary
              dark: '#1d4ed8', // bg-accent
              cupcake: '#f472b6', // bg-pink-300
              bumblebee: '#fbbf24', // bg-yellow-400
              emerald: '#34d399', // bg-green-500
              corporate: '#1e3a8a', // bg-blue-800
              synthwave: '#9d4ed0', // bg-purple-600
              retro: '#fbbf24', // bg-yellow-400
              cyberpunk: '#a855f7', // bg-purple-600
              valentine: '#ef4444', // bg-red-400
              halloween: '#a855f7', // bg-purple-600
              garden: '#86efac', // bg-green-300
              forest: '#4ade80', // bg-green-600
              aqua: '#22d3ee', // bg-cyan-400
              lofi: '#e5e7eb', // bg-neutral
              pastel: '#f0abfc', // bg-pink-300
              fantasy: '#fbbf24', // bg-yellow-300
              wireframe: '#e5e7eb', // bg-gray-200
              black: '#374151', // bg-gray-800
              luxury: '#fbbf24', // bg-yellow-400
              dracula: '#4f46e5', // bg-indigo-600
              cmyk: '#6ee7b7', // bg-green-300
              autumn: '#7e22ce', // bg-purple-800
              business: '#2563eb', // bg-blue-600
              acid: '#d4f1f4', // bg-teal-200
              lemonade: '#f59e0b', // bg-orange-400
              night: '#3b82f6', // bg-blue-500
              coffee: '#3e3e3e', // bg-gray-700
              winter: '#6366f1', // bg-indigo-600
            },
            'bubble-friend': {
              light: '#4ade80', // bg-secondary
              dark: '#e5e7eb', // bg-base-200
              cupcake: '#fbbf24', // bg-yellow-300
              bumblebee: '#fbbf24', // bg-yellow-400
              emerald: '#34d399', // bg-green-500
              corporate: '#1e3a8a', // bg-blue-800
              synthwave: '#f472b6', // bg-pink-300
              retro: '#4ade80', // bg-green-400
              cyberpunk: '#22c55e', // bg-green-600
              valentine: '#f472b6', // bg-pink-400
              halloween: '#ef4444', // bg-red-400
              garden: '#86efac', // bg-green-300
              forest: '#65a30d', // bg-green-700
              aqua: '#3b82f6', // bg-blue-400
              lofi: '#374151', // bg-base-300
              pastel: '#f0abfc', // bg-pink-300
              fantasy: '#fbbf24', // bg-yellow-300
              wireframe: '#e5e7eb', // bg-gray-200
              black: '#f9fafb', // bg-gray-100
              luxury: '#fbbf24', // bg-yellow-400
              dracula: '#e4d9f2', // bg-purple-200
              cmyk: '#3b82f6', // bg-blue-500
              autumn: '#d97706', // bg-orange-600
              business: '#fbbf24', // bg-yellow-400
              acid: '#d4f1f4', // bg-teal-200
              lemonade: '#fbbf24', // bg-yellow-400
              night: '#1d4ed8', // bg-accent
              coffee: '#4b5563', // bg-gray-600
              winter: '#d9f99d', // bg-green-200
            }
          },
        },
      },
    plugins: [require('daisyui'),require('tailwind-scrollbar-hide')],
    daisyui: {
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ],
    },
  }