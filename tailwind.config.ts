import type {Config} from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif'],
        headline: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        crimson: ['"Crimson Text"', 'serif'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        gold: '#c9973a',
        'gold-light': '#e8c06a',
        dark: '#0d0b08',
        'panel-dark': 'rgba(10,8,5,0.72)',
        cream: 'hsl(var(--cream))',
        linkedin: '#0a66c2',
        'eco-green': '#34A853',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      flexGrow: {
        '1.18': '1.18',
        '1.22': '1.22',
        '2.5': '2.5'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
        'overlay-show': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'content-show': {
          from: { opacity: '0', transform: 'translateY(2rem) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'overlay-show': 'overlay-show 0.3s ease-out forwards',
        'content-show': 'content-show 0.4s ease-out forwards',
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-lead': theme('colors.muted.foreground'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.muted.foreground'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.primary'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.muted.foreground'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': theme('colors.muted.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
          },
        },
        invert: {
            css: {
              '--tw-prose-body': theme('colors.foreground'),
              '--tw-prose-headings': theme('colors.primary'),
              '--tw-prose-lead': theme('colors.muted.foreground'),
              '--tw-prose-links': theme('colors.accent'),
              '--tw-prose-bold': theme('colors.foreground'),
              '--tw-prose-counters': theme('colors.muted.foreground'),
              '--tw-prose-bullets': theme('colors.accent'),
              '--tw-prose-hr': theme('colors.border'),
              '--tw-prose-quotes': theme('colors.primary'),
              '--tw-prose-quote-borders': theme('colors.accent'),
              '--tw-prose-captions': theme('colors.muted.foreground'),
              '--tw-prose-code': theme('colors.foreground'),
              '--tw-prose-pre-code': theme('colors.foreground'),
              '--tw-prose-pre-bg': 'rgba(255, 255, 255, 0.05)',
              '--tw-prose-th-borders': theme('colors.border'),
              '--tw-prose-td-borders': theme('colors.border'),
            },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
