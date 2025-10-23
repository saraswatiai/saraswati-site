# Saraswati Design System

## Overview
Saraswati is an open-source knowledge management platform with a modern, dark-themed design that emphasizes transparency, trust, and community. The design system is built around the concept of "knowledge as light" with glass morphism effects and gradient accents.

## Brand Identity

### Logo & Branding
- **Logo**: Lotus flower icon representing knowledge and wisdom
- **Brand Name**: "Saraswati" (Goddess of knowledge in Hindu mythology)
- **Tagline**: "Open Source Knowledge Tools"
- **Mission**: Build transparent, trustworthy knowledge systems

### Brand Values
- **Transparency**: Open source, auditable code
- **Trust**: Proper source attribution and provenance
- **Community**: Built by and for the community
- **Wisdom**: Knowledge grows when shared freely

## Color Palette

### Primary Colors
```css
/* Primary Blue */
--primary-50: #f0f9ff
--primary-100: #e0f2fe
--primary-200: #bae6fd
--primary-300: #7dd3fc
--primary-400: #38bdf8
--primary-500: #0ea5e9  /* Main brand color */
--primary-600: #0284c7
--primary-700: #0369a1
--primary-800: #075985
--primary-900: #0c4a6e

/* Accent Purple */
--purple-500: #8b5cf6
--purple-600: #7c3aed

/* Background */
--dark-bg: #0a0a0a  /* Main background */
```

### Semantic Colors
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

### Text Colors
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#d1d5db` (Gray-300)
- **Muted Text**: `#9ca3af` (Gray-400)
- **Disabled Text**: `#6b7280` (Gray-500)

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Scale
```css
/* Headings */
--text-7xl: 4.5rem    /* 72px - Hero titles */
--text-6xl: 3.75rem   /* 60px - Section titles */
--text-5xl: 3rem       /* 48px - Large headings */
--text-4xl: 2.25rem    /* 36px - Medium headings */
--text-3xl: 1.875rem   /* 30px - Small headings */
--text-2xl: 1.5rem     /* 24px - Card titles */

/* Body Text */
--text-xl: 1.25rem     /* 20px - Large body */
--text-lg: 1.125rem    /* 18px - Body text */
--text-base: 1rem      /* 16px - Default */
--text-sm: 0.875rem    /* 14px - Small text */
--text-xs: 0.75rem      /* 12px - Captions */
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800
- **Black**: 900

## Spacing System

### Base Unit: 4px (0.25rem)

```css
/* Spacing Scale */
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */
```

### Layout Spacing
- **Section Padding**: `py-24` (6rem top/bottom)
- **Container Padding**: `px-4 sm:px-6 lg:px-8`
- **Component Spacing**: `space-y-4`, `space-y-6`, `space-y-8`

## Layout System

### Container Sizes
- **Max Width**: `max-w-7xl` (80rem / 1280px)
- **Content Width**: `max-w-4xl` (56rem / 896px)
- **Narrow Content**: `max-w-2xl` (42rem / 672px)

### Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns (`md:grid-cols-2`)
- **Desktop**: 3-4 columns (`lg:grid-cols-3`, `lg:grid-cols-4`)

### Breakpoints
```css
/* Tailwind Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large */
2xl: 1536px  /* 2X large */
```

## Visual Effects

### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradients
```css
/* Primary Gradient */
.gradient-text {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Background Gradients */
.bg-gradient-primary: linear-gradient(135deg, #0ea5e9, #8b5cf6);
.bg-gradient-glow: radial-gradient(ellipse at center, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
```

### Shadows
```css
/* Primary Shadow */
.shadow-primary: 0 10px 15px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05);

/* Glass Shadow */
.shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
```

## Animation System

### Transitions
```css
/* Standard Transitions */
.transition-standard: transition-all duration-200 ease-in-out;
.transition-slow: transition-all duration-300 ease-in-out;
.transition-fast: transition-all duration-150 ease-in-out;
```

### Keyframe Animations
```css
/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-20px) translateX(10px); }
  66% { transform: translateY(10px) translateX(-10px); }
}

/* Fade In Animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

### Scroll Animations
- **Trigger**: Intersection Observer API
- **Class**: `.scroll-animate`
- **Active Class**: `.animate-fade-in`
- **Threshold**: 0.1 (10% visible)

## Component Library

### Button Component
```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### Button Variants
- **Primary**: Gradient background with shadow
- **Outline**: Border with hover background

#### Button Sizes
- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base`
- **Large**: `px-8 py-4 text-lg`

### Card Component
```typescript
interface CardProps {
  children: React.ReactNode;
}
```

#### Card Features
- Glass morphism background
- Rounded corners (`rounded-xl`)
- Hover effects with border and shadow
- Padding: `p-6`

### Navigation Component
- Fixed positioning with scroll effects
- Responsive mobile menu
- Logo and brand name
- GitHub link integration

### Footer Component
- Multi-column layout
- Social media links
- Copyright information
- Organized link sections

## Icon System

### Icon Library
- **Primary**: Heroicons (Outline style)
- **Size**: `w-5 h-5`, `w-6 h-6`
- **Color**: Inherit from parent or `text-primary-400`

### Common Icons
- **GitHub**: Custom SVG
- **Twitter**: Custom SVG
- **Check**: Heroicons check-circle
- **Arrow**: Heroicons arrow-right
- **Menu**: Heroicons menu (hamburger)

## Accessibility Guidelines

### Color Contrast
- **AA Standard**: 4.5:1 for normal text
- **AAA Standard**: 7:1 for large text
- **Focus States**: Visible focus indicators

### Keyboard Navigation
- **Tab Order**: Logical flow
- **Focus Management**: Mobile menu, modals
- **Skip Links**: For screen readers

### Screen Reader Support
- **Alt Text**: All images
- **ARIA Labels**: Interactive elements
- **Semantic HTML**: Proper heading hierarchy

## Responsive Design

### Mobile First Approach
1. **Mobile** (< 640px): Single column, stacked layout
2. **Tablet** (640px - 1024px): Two column grids
3. **Desktop** (> 1024px): Multi-column layouts

### Touch Targets
- **Minimum Size**: 44px × 44px
- **Spacing**: 8px minimum between targets
- **Button Padding**: Adequate for finger interaction

## Content Guidelines

### Voice & Tone
- **Professional**: Technical but approachable
- **Inclusive**: Community-focused language
- **Transparent**: Open about processes and decisions
- **Empowering**: Encouraging contribution and learning

### Writing Style
- **Headlines**: Clear, benefit-focused
- **Body Text**: Scannable, concise
- **CTAs**: Action-oriented, specific
- **Technical**: Precise, well-documented

## Implementation Notes

### CSS Framework
- **Primary**: Tailwind CSS
- **Custom**: Additional utility classes
- **CDN**: Tailwind via CDN for rapid development

### Component Architecture
- **React**: Functional components with TypeScript
- **Props**: Well-defined interfaces
- **Styling**: Tailwind classes with custom CSS
- **State**: React hooks for interactivity

### Performance Considerations
- **Images**: Optimized formats (WebP, AVIF)
- **Fonts**: Google Fonts with display=swap
- **Animations**: CSS transforms and opacity
- **Bundle**: Tree-shaking for unused code

---

## Usage Examples

### Creating a New Component
```typescript
import React from 'react';

interface NewComponentProps {
  variant?: 'default' | 'special';
  children: React.ReactNode;
}

export default function NewComponent({ 
  variant = 'default', 
  children 
}: NewComponentProps) {
  const baseClasses = 'base-styles';
  const variantClasses = {
    default: 'default-styles',
    special: 'special-styles'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  );
}
```

### Using the Design System
```jsx
// Button usage
<Button variant="primary" size="lg" href="#solutions">
  Explore Solutions
</Button>

// Card usage
<Card>
  <h3>Solution Title</h3>
  <p>Solution description...</p>
</Card>
```

This design system ensures consistency across the Saraswati platform while maintaining the modern, trustworthy aesthetic that reflects the project's mission of transparent knowledge management.
