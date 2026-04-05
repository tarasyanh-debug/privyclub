

## Plan: Add Invite Popup Modal

Create a reusable modal component with an iframe to `https://privyclub.tilda.ws/invite`, then wire it to all "Подать заявку" and "Подходит ли мой дом?" buttons.

### Implementation

1. **Create `src/components/InviteModal.tsx`** — a simple modal using the existing `Dialog` component from shadcn/ui:
   - Uses `DialogContent` with an iframe inside
   - iframe: `src="https://privyclub.tilda.ws/invite"`, width 100%, height 600px
   - Closes on overlay click (built-in Dialog behavior) and via the X button (also built-in)

2. **Update `src/components/HeroSection.tsx`** — wrap the "Подходит ли мой дом?" button with Dialog trigger, add InviteModal state

3. **Update `src/components/Navbar.tsx`** — wrap both desktop and mobile "Подать заявку" buttons with Dialog trigger

4. **Update `src/components/CTASection.tsx`** — wrap "Подать заявку" button with Dialog trigger

Each component will manage its own `open` state via `useState`, and the modal will be rendered inline using the `Dialog` primitive with `open`/`onOpenChange` props.

