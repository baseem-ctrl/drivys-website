module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          white: "var(--text-white)",
          'white-muted': "var(--text-white-muted)"
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          dark: "var(--bg-dark)",
          darker: "var(--bg-darker)",
          'darker-transparent': "var(--bg-darker-transparent)",
          gray: "var(--bg-gray)",
          secondary: "var(--bg-secondary)",
          accent: "var(--bg-accent)",
          white: "var(--bg-white)",
          'white-transparent': "var(--bg-white-transparent)"
        },
        // Border Colors
        border: {
          gray: "var(--border-gray)",
          accent: "var(--border-accent)",
          white: "var(--border-white)"
        },
        // Component-specific Colors
        header: {
          background: "var(--header-bg)",
          border: "var(--header-border)"
        },
        button: {
          'bg-primary': "var(--button-bg-primary)",
          'text-primary': "var(--button-text-primary)",
          'border-primary': "var(--button-border-primary)",
          'border-secondary': "var(--button-border-secondary)"
        },
        line: {
          'bg-primary': "var(--line-bg-primary)",
          'bg-accent': "var(--line-bg-accent)",
          'bg-transparent': "var(--line-bg-transparent)",
          border: "var(--line-border)"
        },
        footer: {
          background: "var(--footer-bg)",
          text: "var(--footer-text)"
        },
        link: {
          text: "var(--link-text)"
        }
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        '9xl': 'var(--font-size-9xl)',
        '10xl': 'var(--font-size-10xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
        'extrabold': 'var(--font-weight-extrabold)',
        'black': 'var(--font-weight-black)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
        '12xl': 'var(--spacing-12xl)'
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'century': ['Century Gothic', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive']
      }
    }
  },
  plugins: []
};