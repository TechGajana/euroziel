# Hero Section & Scroll Animations Guide

## Overview

The EuroZiel website has been transformed with immersive scroll-triggered animations powered by GSAP (GreenSock Animation Platform) and Three.js visualization.

## Key Features

### 🎬 Hero Section Animation

The hero section features an interactive 3D scene with:

#### **Components**

1. **HeroScene.tsx** - Main 3D scene component
   - Displays German university building in the background
   - Graduating student in cap and gown positioned in foreground
   - Parallax camera effects on scroll
   - Student appears to approach the university as user scrolls
   - Smooth fade-out transition to next section

2. **HeroAnimatedSky.tsx** - Weather & atmosphere layer
   - Animated sun with pulsing glow effect
   - Multiple animated clouds with parallax depth
   - Creates realistic weather ambiance over the scene
   - Smooth horizontal drift animation for clouds

#### **How It Works**

```
User Scrolls Down
    ↓
ScrollTrigger detects page position
    ↓
GSAP Timeline animates:
  • Student moves up & scales larger (appears closer)
  • University parallaxes slightly (appears smaller/farther)
  • Opacity transitions for smooth fade
    ↓
Student seemingly walks toward/into the university
```

### 📊 Scroll Timeline

- **Start**: Student at bottom, far from university
- **Middle**: Student scales up, moves toward university center
- **End**: Student fully approaches, fades as next section appears

### ☀️ Weather Elements

- **Sun**: Radiates with glowing yellow light, subtle pulse animation
- **Clouds**: Drift horizontally at different speeds (parallax effect)
- **Atmosphere**: Multi-layered depth creates realistic 3D perception

## Section Animations

All major sections include scroll-triggered reveal animations:

### Enhanced Sections

1. **Why EuroZiel** (Feature Cards)
   - Cards fade in and slide up on scroll
   - Staggered animation creates wave effect
   - Hover effect adds left border highlight

2. **Process Steps**
   - Timeline circles animate in sequence
   - Connecting line already present
   - Labels fade in with staggered timing

3. **Testimonials**
   - Cards scale in smoothly
   - Star ratings and quotes animate together
   - Increased hover lift effect for better interactivity

4. **Statistics Section**
   - Numbers appear with fade-up animation
   - Staggered by column for visual rhythm

## Technical Stack

### Libraries Used

```json
{
  "gsap": "^3.x.x",
  "three": "^r128+",
  "@react-three/fiber": "^8.x",
  "@react-three/drei": "^9.x"
}
```

### File Structure

```
components/
├── HeroScene.tsx              // 3D scene with student & university
├── HeroAnimatedSky.tsx        // Sun, clouds, atmosphere
├── ScrollAnimatedSection.tsx   // Wrapper for section animations
└── ...other components

lib/
├── hero-animations.ts         // GSAP utility functions
└── ...other utilities

hooks/
├── useScrollTriggerAnimation.ts // Scroll trigger hook
└── useScrollReveal.ts          // Existing reveal hook

app/
└── globals.css                // Animation keyframes & styles
```

## Animation Configuration

### Hero Scene Scroll Trigger

Located in `components/HeroScene.tsx`:

```typescript
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom center',
    scrub: 1.2,  // Smooth scrubbing linked to scroll speed
  },
});
```

**Parameters:**
- `trigger`: Element that activates animation
- `start`: When animation begins relative to viewport
- `end`: When animation ends
- `scrub`: Links animation to scroll position (1.2 = smooth delay)

### Section Animations

Located in `components/ScrollAnimatedSection.tsx`:

```typescript
scrollTrigger: {
  trigger: ref.current,
  start: 'top 80%',      // Trigger when section top reaches 80% of viewport
  end: 'top 20%',        // Complete when section top reaches 20%
  toggleActions: 'play none none reverse',  // Play on enter, reverse on exit
}
```

## Customization

### Adjust Hero Animation Speed

In `HeroScene.tsx`, modify the `scrub` value:

```typescript
scrub: 2.0  // Slower, more delayed response
scrub: 0.5  // Faster, more direct response
```

### Change Student Movement Distance

Modify the animation values:

```typescript
timeline.to(studentRef.current, {
  y: -150,      // Change vertical movement (was -100)
  scale: 1.6,   // Change scale (was 1.4)
  opacity: 0.95,
});
```

### Adjust Cloud Speed

In `HeroAnimatedSky.tsx`:

```typescript
const duration = 25 + index * 5;  // Change cloud drift duration
const yOffset = -40 + index * 15;  // Change vertical position offset
```

### Modify Section Animation Stagger

In `ScrollAnimatedSection.tsx`:

```typescript
<ScrollAnimatedSection stagger={0.12}>  {/* Default: 0.08 */}
  {children}
</ScrollAnimatedSection>
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile: ✅ Optimized (reduced motion respect)

## Performance Optimization

### Current Optimizations

1. **ScrollTrigger Cleanup**: All triggers properly killed on unmount
2. **Lazy Loading**: Images use Next.js Image optimization
3. **Reduce Motion**: Can be implemented via `prefers-reduced-motion` media query
4. **LOD (Level of Detail)**: GSAP handles efficient DOM updates

### Tips for Better Performance

```css
/* Add to globals.css for motion-sensitive users */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Debugging

### Enable ScrollTrigger Markers

In `HeroScene.tsx`, uncomment:

```typescript
ScrollTrigger: {
  // ... other config
  markers: true,  // Shows visual debugging markers
}
```

### Console Logging

The hero animation logs progress to console:

```typescript
onUpdate: (self) => {
  console.log('[v0] scroll progress:', self.progress);
}
```

## Common Issues & Solutions

### Animation Not Triggering?
- Check that ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger);`
- Verify trigger element exists in DOM
- Check console for errors

### Jittery Movement?
- Reduce `scrub` value for tighter binding
- Check for conflicting animations
- Verify GPU acceleration is enabled

### Images Not Loading?
- Ensure image paths are correct: `/images/filename.jpg`
- Check that images exist in `public/images/`
- Use Next.js Image optimization

## Future Enhancements

Potential improvements for the animation system:

1. **Mobile-Specific Animations**: Simpler animations for touch devices
2. **Section Transition Effects**: Smooth morphing between sections
3. **Parallax Depth**: More complex Z-axis animations
4. **Custom Easing**: Bezier curves for unique motion feel
5. **Intersection Observer**: Auto-play/pause for performance

## Resources

- **GSAP Docs**: https://greensock.com/docs/
- **ScrollTrigger Docs**: https://greensock.com/scrolltrigger/
- **Three.js Docs**: https://threejs.org/docs/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/

## Credits

Animations built with:
- GSAP for timeline & scroll control
- Three.js + React Three Fiber for 3D rendering
- Tailwind CSS for styling
- Next.js Image optimization

---

**Last Updated**: May 2026
**Version**: 1.0
