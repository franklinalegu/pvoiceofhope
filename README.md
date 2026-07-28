# PVOICE OF HOPE Website — Bold Modern Bento Layout

This version applies a completely different layout system across the full website: a bold, youthful, modern bento-grid architecture while preserving the PVOICE OF HOPE mission, content structure, stories, blog posts, and conversion pathways.

## What changed in this layout refresh

- Replaced the previous luxury-minimal layout with a more dynamic **bento-style visual system**.
- Applied the new layout across the full site.
- Kept **Stories removed from the primary/top navigation** as requested.
- Kept Stories accessible contextually through homepage links, footer, story CTAs, and sidebars.
- Retained all blog posts and story pages.
- Added a bolder visual rhythm with cards, color blocks, image tiles, stat tiles, and high-contrast CTA panels.
- Continued using the movement architecture inspired by strong nonprofit funnels:
  - Identity
  - Transformation model
  - Six pathways
  - Flagship initiative
  - Impact proof
  - Stories
  - Featured projects
  - Resources
  - Action

## Key homepage sections

- Hero bento layout
- How Hope Becomes Transformation
- Six Pathways to Hope, Purpose, and Belonging
- The Hope & Purpose Pathway flagship initiative
- Impact metrics
- Featured story
- Featured impact projects
- Resources for Your Journey
- Final CTA: Find your place in hope, purpose, and belonging

## Pages included

- `index.html` — Home
- `about.html` — About Us
- `programs.html` — Programs / Six Pathways
- `events.html` — Events
- `blog.html` — Blog listing / articles and resources
- `resources.html` — Resources for Your Journey
- `support.html` — Support Us
- `volunteer.html` — Volunteer With Us
- `partner.html` — Partner With Us
- `contact.html` — Contact Us
- `team.html` — Team & Leadership structure
- `safeguarding.html` — Safeguarding & Youth Protection framework
- `stories.html` — Stories of Hope index page
- `privacy.html` — Starter Privacy Policy

## Blog articles retained

- `blog/finding-your-place-in-a-new-community.html`
- `blog/why-black-youth-need-strong-communities.html`
- `blog/building-confidence-through-faith.html`
- `blog/five-ways-to-overcome-social-isolation.html`
- `blog/discovering-your-purpose-one-step-at-a-time.html`

## Story pages retained

- `stories/i-found-confidence-and-belonging.html`
- `stories/from-isolation-to-community.html`
- `stories/the-mentor-who-believed-in-me.html`
- `stories/learning-to-lead-with-purpose.html`
- `stories/serving-helped-me-heal.html`
- `stories/faith-gave-me-courage.html`

## Main technical files

- `assets/css/pvoice-bento.css` — new bento design system
- `assets/js/pvoice-bento.js` — reveal animations, slider, FAQ, back-to-top, form behavior
- `favicon.svg`
- `site.webmanifest`
- `sitemap.xml`
- `robots.txt`
- `docs/brand-kit.md`
- `docs/launch-readiness.md`

## Generated brand images included

- `assets/img/pvoice-hero-community.webp`
- `assets/img/pvoice-mentorship.webp`
- `assets/img/pvoice-leadership.webp`
- `assets/img/pvoice-volunteer.webp`
- `assets/img/pvoice-faith-community.webp`
- `assets/img/pvoice-partnership.webp`
- `assets/img/pvoice-events.webp`
- `assets/img/pvoice-support.webp`
- `assets/img/pvoice-testimonial.webp`


## Latest recommendation fixes

Implemented the items that can be safely fixed without inventing unconfirmed organizational details:

- Added phone number across the site: `+43 728 69515` with `tel:+4372869515`.
- Added WhatsApp action on the Contact page.
- Removed inactive social links until official social URLs are available.
- Removed sample event dates and replaced them with interest-list event language.
- Replaced the donation amount mockup with a support-interest form.
- Added a clear leadership/care model page.
- Added documentation for grey areas that should be confirmed later:
  - `docs/pending-items.md`
  - `docs/integrations-plan.md`

These changes avoid presenting uncertain information as final while keeping the site structured and launch-prepared.

## QA status

Verified after rebuild:

- No broken internal links/assets
- Stories is not in the primary navigation
- Images have width/height attributes
- Blog posts are retained
- Story pages are retained
- Placeholder social links removed
- Sample event dates removed
- Fake donation buttons removed

## Forms

Forms are preview-ready using `mailto:` behavior and include static-host form attributes such as `method="post"` and `data-netlify="true"`. For launch, connect them to a real backend such as WordPress forms, Webflow Forms, Netlify Forms, Formspree, Airtable, HubSpot, Mailchimp/Brevo, GiveWP, Stripe, PayPal, Donorbox, or CanadaHelps.


## Sitewide polish pass

- Added consistent hover transitions for buttons, cards, navigation links, story cards, forms, and footer links.
- Added better focus states for keyboard accessibility.
- Added image zoom/saturation effects where appropriate.
- Added page-specific canonical URLs.
- Re-ran internal link and asset checks.


## Content and SEO improvements

- Added practical “How to begin” section on the homepage.
- Added homepage FAQ with FAQ schema.
- Added Program Details section to clarify who programs are for, how to start, youth considerations, and access/cost language.
- Added Contact page next-step guidance.
- Expanded blog posts with SEO-friendly headings, practical next steps, FAQs, and internal links.
- Added article FAQ schema to blog posts.

## Deployment

This repository is a static website. It can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting provider. Use `index.html` as the entry point.
