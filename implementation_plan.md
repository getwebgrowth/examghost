# Implementation Plan: AI Tutor Revamp for Payment Gateway Compliance

## Goal Description

The current website positions the product as an "undetectable exam solver" (e.g., bypassing proctoring, invisible mode), which violates the acceptable use policies of major payment gateways (Dodo Payments, Stripe, Polar, Creem) as it promotes academic malpractice.

This plan details a complete site revamp to re-position the product as a legitimate **AI Study Companion and Tutor**. The core technology (a Chrome extension that helps with quizzes) remains the same, but the marketing, copy, features, and branding will be shifted towards legitimate learning, test preparation, and educational support. We will also add mandatory legal pages (Privacy Policy, Terms of Service, Contact) required for payment gateway approvals.

## User Review Required

> [!WARNING]
> **Branding & Copy Adjustments**
> The product name is currently "ExamGhost". While we can keep the name, we must change its connotation. We will rebrand the tagline from "100% Invisible Exam Assistant" to "Your Ultimate AI Study Companion." 
> 
> *GhostMode* (currently about hiding from proctors) will be rebranded to **FocusMode** or **TutorMode**, focusing on providing distraction-free, step-by-step explanations rather than direct answers. 
> 
> Please confirm if you approve of this new angle or if you want a complete name change.

## Proposed Changes

### Global Configuration & Metadata
- Modify `src/app/layout.tsx` to update the meta title, description, and keywords to reflect an educational AI tutor.
- Remove any mention of "undetectable", "bypass", or "cheat".

### Landing Page Components (`src/components/`)

#### [MODIFY] `Hero.tsx`
- Change main headline from "Ace your exams invisibly" to "Master your studies with an AI Tutor".
- Update subheadlines, CTAs, and badges. Remove "100% Undetectable".

#### [MODIFY] `Features.tsx` & `GhostMode.tsx`
- Rebrand *GhostMode.tsx* to *TutorMode* or *StudyMode*. Change the narrative from "hiding from Canvas" to "seamlessly integrating with your study flow to provide hints and explanations".
- Update feature cards in `Features.tsx` to focus on:
  - Step-by-step explanations
  - Concept breakdowns
  - Multi-platform support (Canvas, Blackboard) for *learning*, not *cheating*.

#### [MODIFY] `QuestionExamples.tsx` & `Integrations.tsx`
- Ensure the examples show the AI acting as a tutor (e.g., "Here is how to solve this equation..." instead of just outputting "Answer: A").

#### [MODIFY] `Reviews.tsx`
- Update testimonials to emphasize improved grades through better understanding, rather than saving time by cheating.

#### [MODIFY] `FAQ.tsx`
- Remove any FAQs about "getting caught".
- Add FAQs about how it helps students learn, whether it's compliant with school policies (positioning it as a study aid).

#### [MODIFY] `Pricing.tsx` & `Footer.tsx`
- Ensure Pricing descriptions sound like an educational subscription.
- Update `Footer.tsx` to include links to the new legal pages.

### Comparison Pages (`src/app/*-vs-examghost/page.tsx`)
- Review and rewrite all 6 comparison pages (CheatMate, Classlogy, Mindko, Quizard, TestBro, Quietly) to position ExamGhost as the superior *learning* tool, not just the best *cheating* tool.

### New Legal Pages

#### [NEW] `src/app/privacy/page.tsx`
- Create a standard, compliant Privacy Policy page.

#### [NEW] `src/app/terms/page.tsx`
- Create a standard Terms of Service / Acceptable Use Policy (explicitly stating the tool is for educational purposes).

#### [NEW] `src/app/contact/page.tsx`
- Create a Contact Us page (required by gateways for customer support).

## Verification Plan

### Automated Tests
- The site will be built successfully using `npm run build` to ensure no component errors.

### Manual Verification
- We will launch the site locally using `npm run dev`.
- Visually verify that all instances of "cheat", "invisible", and "undetectable" have been replaced.
- Ensure the Footer links correctly route to the new `/privacy`, `/terms`, and `/contact` pages.
- Verify the site looks professional and legitimate enough to pass a manual compliance review by a payment gateway underwriter.
