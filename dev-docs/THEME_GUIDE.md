## Theme Variables Setup Guide

This project uses SCSS with centralized theme variables for consistent styling throughout the application.

### Structure

```
src/styles/
├── index.scss                 # Main entry point (imports all styles)
├── themes/
│   └── _variables.scss        # All theme variables (colors, spacing, typography, etc.)
├── mixins/
│   └── _mixins.scss          # Reusable SCSS mixins
└── index.css                 # (Legacy - can be removed)
```

### Available Theme Variables

#### Colors
Access colors using the `color()` function:

```scss
// Usage in components
.component {
  color: color('primary');
  background-color: color('secondary');
  border: 1px solid color('gray-300');
}

// Available color names:
// Primary: 'primary', 'primary-light', 'primary-dark'
// Secondary: 'secondary', 'secondary-light', 'secondary-dark'
// Neutral: 'white', 'black'
// Gray Scale: 'gray-50' through 'gray-900'
// Status: 'success', 'warning', 'error', 'info'
```

#### Typography

```scss
// Font Families
$font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-heading: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

// Font Sizes (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
// ... and more

// Font Weights
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Line Heights
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
$line-height-loose: 2;
```

#### Spacing

```scss
// Values from xs to 6xl (4px to 80px)
$spacing-xs: 0.25rem;      // 4px
$spacing-sm: 0.5rem;       // 8px
$spacing-md: 1rem;         // 16px
$spacing-lg: 1.5rem;       // 24px
$spacing-xl: 2rem;         // 32px
// ... and more
```

#### Border Radius

```scss
$border-radius-none: 0;
$border-radius-sm: 0.375rem;  // 6px
$border-radius-md: 0.5rem;    // 8px
$border-radius-lg: 0.75rem;   // 12px
$border-radius-xl: 1rem;      // 16px
$border-radius-2xl: 1.5rem;   // 24px
$border-radius-full: 9999px;
```

#### Shadows

```scss
$shadow-xs, $shadow-sm, $shadow-md, $shadow-lg, $shadow-xl, $shadow-2xl
```

#### Transitions

```scss
$transition-duration-fast: 150ms;
$transition-duration-base: 300ms;
$transition-duration-slow: 500ms;

$transition-timing-linear: linear;
$transition-timing-ease: ease;
$transition-timing-ease-in: ease-in;
// ... and more
```

#### Breakpoints

```scss
$breakpoint-xs: 0;
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

### Using Mixins

#### Responsive Design

```scss
.component {
  font-size: $font-size-base;

  @include respond-to('md') {
    font-size: $font-size-lg;
  }

  @include respond-to('lg') {
    font-size: $font-size-xl;
  }
}
```

#### Flexbox Helpers

```scss
.flex-container {
  @include flex-center;        // Centers items
}

.flex-between {
  @include flex-between;       // Space-between layout
}

.flex-column {
  @include flex-column;        // Column direction
}
```

#### Button Styles

```scss
.btn-primary {
  @include btn-primary;
}

.btn-secondary {
  @include btn-secondary;
}
```

#### Typography

```scss
h1 {
  @include h1-style;
}

h2 {
  @include h2-style;
}

.heading-3 {
  @include h3-style;
}

.body-text {
  @include body-text;
}
```

#### Text Utilities

```scss
.truncate-text {
  @include truncate;  // Single line ellipsis
}

.clamp-3-lines {
  @include line-clamp(3);  // Multi-line clamp
}
```

#### Positioning

```scss
.modal-backdrop {
  @include fixed-cover;  // Cover entire viewport
}

.modal-content {
  @include absolute-center;  // Center absolutely
}
```

#### Transitions

```scss
.element {
  @include transition(color, opacity);
  @include transition-all;  // All properties
}
```

#### Shadows

```scss
.card {
  @include shadow;      // Default shadow-md
  @include shadow-hover;  // Hover effect with larger shadow
}
```

#### Form Controls

```scss
input,
textarea,
select {
  @include form-control;
}
```

#### Container

```scss
.main-container {
  @include container-custom;
}

.section {
  @include section-padding;
}
```

### Component SCSS File Example

```scss
// Import at the top if needed (already imported in main styles)
// @import '../../styles/themes/variables';
// @import '../../styles/mixins/mixins';

.header {
  @include container-custom;
  @include flex-between;
  padding: $spacing-lg 0;
  background-color: color('white');
  box-shadow: $shadow-sm;

  .logo {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: color('primary');
    @include transition;

    &:hover {
      color: color('secondary');
    }
  }

  .nav-links {
    display: flex;
    gap: $spacing-xl;

    @include respond-to('md') {
      gap: $spacing-2xl;
    }

    a {
      color: color('gray-700');
      @include transition;

      &:hover {
        color: color('secondary');
      }
    }
  }

  .cta-button {
    @include btn-primary;
    padding: $spacing-md $spacing-lg;
  }
}

.hero {
  @include section-padding;
  background: linear-gradient(135deg, color('primary') 0%, color('primary-dark') 100%);
  color: color('white');

  h1 {
    @include h1-style;
    color: color('white');
    margin-bottom: $spacing-lg;
  }

  p {
    font-size: $font-size-lg;
    margin-bottom: $spacing-2xl;
    color: color('gray-100');
  }
}

.card {
  @include shadow;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  @include transition;

  &:hover {
    @include shadow-lg;
    transform: translateY(-4px);
  }

  .card-title {
    @include h3-style;
    margin-bottom: $spacing-md;
    color: color('primary');
  }

  .card-content {
    color: color('gray-700');
    line-height: $line-height-relaxed;
  }
}
```

### Color Variable Map Access

```scss
// Direct map access (if needed)
.element {
  color: map-get($colors, 'primary');
}

// Recommended: Use the color() function
.element {
  color: color('primary');
}
```

### Customize Theme Variables

To customize the theme:

1. Open `src/styles/themes/_variables.scss`
2. Modify the variables:

```scss
// Change primary color
$colors: (
  'primary': #yourcolor,
  // ...
);

// Change spacing
$spacing-md: 1.25rem;  // was 1rem

// Change breakpoints
$breakpoint-md: 800px;  // was 768px
```

### Best Practices

1. **Always use variables** - Never hardcode values like colors, spacing, or fonts
2. **Use mixins** - Leverage provided mixins for consistent patterns
3. **Use semantic names** - Use `color('primary')` instead of `color('red')`
4. **Group related styles** - Keep component styles organized and modular
5. **Responsive first** - Use `@include respond-to()` for responsive design
6. **Maintain consistency** - Use the same spacing/shadow values throughout

### Using SCSS in Components

Create component-specific SCSS files:

```tsx
// src/components/Button/Button.jsx
import './Button.scss'

export function Button({ children, variant = 'primary' }) {
  return <button className={`btn btn-${variant}`}>{children}</button>
}
```

```scss
// src/components/Button/Button.scss
@import '../../styles/themes/variables';
@import '../../styles/mixins/mixins';

.btn {
  @include btn-base;
  padding: $spacing-md $spacing-lg;

  &.btn-primary {
    @include btn-primary;
  }

  &.btn-secondary {
    @include btn-secondary;
  }
}
```

### Converting CSS to SCSS

If you have existing CSS components, convert them:

```css
/* Old CSS */
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

```scss
/* New SCSS */
@import '../../styles/themes/variables';
@import '../../styles/mixins/mixins';

.card {
  background-color: color('white');
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  @include shadow;
}
```

This centralized approach ensures consistency, makes maintenance easier, and allows for easy theme switching in the future.
