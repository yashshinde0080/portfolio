
import anime from 'animejs/lib/anime.es.js';

// --- Global Timing System (Golden Ratio) ---
const PHI = 1.618;
const BASE_DURATION = 150;

export const DURATIONS = {
  micro: 150,                // Base
  small: Math.round(150 * PHI),         // ~242ms
  medium: Math.round(150 * PHI * PHI),  // ~392ms
  large: Math.round(150 * Math.pow(PHI, 3)), // ~635ms
  hero: 1000,                // Fixed cap for Hero
};

export const EASINGS = {
  standard: 'easeOutCubic',
  hero: 'easeOutExpo',
  state: 'linear',  // For opacity/color relationships
};

// --- Reduced Motion & Prefs ---
const getPrefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// --- Animation Categories ---

/**
 * 1. Page / Section Entry
 * Establish hierarchy. Fade + translateY only.
 * @param {string|HTMLElement} targets 
 * @param {number} delay 
 */
export const animateSectionEntry = (targets, delay = 0) => {
    const isReduced = getPrefersReducedMotion();
    
    // Normalize targets to array
    const elements = Array.isArray(targets) ? targets : [targets];

    elements.forEach(el => {
        if (!el) return;
        
        // Initial state set immediately to prevent flash
        el.style.opacity = '0';
        if (!isReduced) el.style.transform = 'translateY(24px)';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: el,
                        opacity: [0, 1],
                        translateY: isReduced ? [0, 0] : [24, 0],
                        duration: isReduced ? DURATIONS.medium / 2 : DURATIONS.medium,
                        easing: EASINGS.standard,
                        delay,
                    });
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(el);
    });
};

/**
 * 2. Hero 3D Scene Animation
 * Create depth without distraction.
 * Animate Z before rotation. 
 * @param {string|HTMLElement} containerRef 
 * @param {string|HTMLElement} objectRef 
 */
export const animateHero3D = (containerRef, objectRef) => {
    if (getPrefersReducedMotion()) return;

    // Initial Appearance
    anime({
        targets: objectRef,
        translateZ: [-200, 0], // Move from back to front
        opacity: [0, 1],
        duration: DURATIONS.hero,
        easing: EASINGS.hero,
    });

    // Subtle Continuous Mouse interaction (Pseudo-3D)
    // We attach a listener to the container to tilt the object
    const container = typeof containerRef === 'string' ? document.querySelector(containerRef) : containerRef;
    const object = typeof objectRef === 'string' ? document.querySelector(objectRef) : objectRef;

    if (!container || !object) return;

    const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Normalize -1 to 1
        const nX = (x / rect.width) * 2 - 1;
        const nY = (y / rect.height) * 2 - 1;

        // Max rotation 15deg
        const rX = -nY * 15; 
        const rY = nX * 15;

        // Direct update for performance (anime.js primarily for tweening, requestAnimationFrame for mouse feeling)
        // But the constraint asks for anime.js to animate values. 
        // We will use anime.set or simple style updates for mouse move to ensure responsiveness, 
        // OR use anime to tween to the new mouse position for "smoothness". 
        // "Camera moves slower than objects" -> Use smooth tweening.
        
        anime({
            targets: object,
            rotateX: rX,
            rotateY: rY,
            duration: DURATIONS.large, // Slow follow
            easing: 'easeOutCubic',
            update: (anim) => {
                 // Explicit render if needed, but anime.js handles DOM transforms
            }
        });
    };
    
    // Reset on leave
    const handleMouseLeave = () => {
         anime({
            targets: object,
            rotateX: 0,
            rotateY: 0,
            duration: DURATIONS.medium,
            easing: EASINGS.standard
        });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup function to be called by useEffect
    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

/**
 * 3. Card Hover (Projects, Skills)
 * Affordance + depth. Elevation > color.
 * @param {string|HTMLElement} target 
 * @param {boolean} isHovered 
 */
export const animateCardHover = (target, isHovered) => {
    const isReduced = getPrefersReducedMotion();

    anime({
        targets: target,
        translateY: isHovered && !isReduced ? -4 : 0,
        // We might want to animate shadow opacity here too if accessible via JS style, 
        // but typically CSS classes handle shadow. If we must use anime.js for everything:
        // boxShadow is complex to tween, usually better to toggle classes or use CSS variables if strict.
        // We'll stick to Transform here as per "Elevation > color".
        duration: DURATIONS.small,
        easing: EASINGS.standard,
    });
};

/**
 * 4. Skill ↔ Project Highlight
 * Relationship visualization.
 * @param {string|HTMLElement} target 
 * @param {boolean} isActive (part of the relationship)
 * @param {boolean} isDimmed (should be faded out)
 */
export const animateRelationship = (target, isActive, isDimmed) => {
    // isActive = matches search/hover
    // isDimmed = something else is hovered, and this doesn't match
    // Default = nothing hovered = opacity 1
    
    let targetOpacity = 1;
    if (isDimmed) targetOpacity = 0.4;
    
    anime({
        targets: target,
        opacity: targetOpacity,
        duration: DURATIONS.micro,
        easing: EASINGS.state,
    });
};

/**
 * 5. Button Interaction
 * Feedback. No scale bounce.
 */
export const animateButtonPress = (target) => {
    if (getPrefersReducedMotion()) return;
    
    // "background shift" and "subtle shadow change" typically imply 
    // visual feedback. Since we shouldn't click-jack or delay, 
    // active state is usually CSS. 
    // However, if we need JS:
    anime({
        targets: target,
        // Rules: No scale bounce.
        // Spec: background shift, subtle shadow change.
        // We assume background is handled by CSS (hover/active classes are robust).
        // We add a subtle shadow press (inset or reduced shadow).
        boxShadow: [
            { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', duration: DURATIONS.micro / 2 }, // Press down
            { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', duration: DURATIONS.micro / 2 } // Release back
        ], 
        duration: DURATIONS.micro,
        easing: EASINGS.standard,
    });
};
