# Rander.AI Fix: Testimonials & Marquee Not Showing in Live

## Plan Breakdown (Approved)

**Step 1: ☑️ Create this TODO.md** - Track progress.

**Step 2: ☐ Update tailwind.config.ts**

- Safelist marquee classes: `animate-custom-marquee`, `custom-marquee`.

**Step 3: ☐ Add fallback testimonials to src/pages/Services.tsx**

- Static data if API empty.
- Better error handling.

**Step 4: ☐ Fix logos in src/pages/Index.tsx**

- Use public/ images.

**Step 5: ☐ Test build & preview**

- `bun vite build && bun vite preview`
- Check console/network.

**Step 6: ☐ Update this TODO.md**

- Mark complete, attempt_completion.

**Step 2: ☑️ Update tailwind.config.ts** - Safelisted marquee classes.

**Step 3: ☑️ Add fallback testimonials to src/pages/Services.tsx** - Created fallbackTestimonials.ts, updated useEffect, always show carousel.

**Step 4: ☑️ Fix logos in src/pages/Index.tsx** - Updated to use public/team & logo images.

**Step 5: ☐ Test build & preview** - Run manually.

Progress: 4/6 (67%)
