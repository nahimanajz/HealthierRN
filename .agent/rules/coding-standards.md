---
trigger: always_on
---

# React Native & Expo Coding Standards (v2.2)

## 1. Architectural Overview
- **Pattern:** Service-Oriented Architecture (SOA) + Component-Based UI.
- **Data Fetching:** Use **TanStack Query (React Query)** for all server-state management.
- **Principles:** Strictly follow S.O.L.I.D. principles.
- **Error Handling:** **Strictly avoid `console.log` for debugging.** Instead, throw meaningful errors in Services and handle them in the UI. Users must be notified of issues via UI feedback (Toasts, Alerts, or Error States).

---

## 2. Code Hygiene & Commenting
- **No Messy Comments:** Avoid commented-out code blocks, "TODO" lists, or redundant descriptions of standard logic. 
- **Self-Documenting Code:** Code should be readable enough that comments are only used to explain "why" (business logic context) rather than "what" or "how".
- **Zero Console Policy:** All `console.log`, `console.warn`, and `console.error` must be removed before code completion. Use the application's global error handler for tracking.

---

## 3. TanStack Query & Firebase Integration
- **One-Time Fetches:** Wrap all Firestore `getDoc`/`getDocs` in `useQuery`.
- **Mutations:** Use `useMutation` for writes. Ensure `onSuccess` calls `queryClient.invalidateQueries`.
- **No Manual State:** Rely on `data`, `isLoading`, and `error` from React Query hooks. 
- **Real-time Sync:** If `onSnapshot` is required, sync the listener to the cache via `queryClient.setQueryData`.

---

## 4. Visual Identity (Stitch Design Protocol)
When a screenshot or Stitch design is provided:
- **Style Extraction:** Use the **fonts, colors, typography, and spacing** identified in the image.
- **Iconography:** Match visual styles using `Lucide React Native` or `Expo Vector Icons`.
- **Theming:** Define tokens in `src/constants/Theme.ts` based on the design hex codes.
- **Precision:** Aim for "Pixel Perfect" margins, padding, and border-radii.

---

## 5. Project Directory Structure
All source code resides in `src/`:
- `src/api/`: Firebase/Firestore config and QueryClient provider in separate files though.
- `src/config/`: Firebase/Firestore config and QueryClient provider.
- `src/services/`: Direct firebase store calls/ external api calls.
- `src/hooks/`: Custom hooks wrapping `useQuery` and `useMutation`.
- `src/components/`: UI components (Atoms, Molecules, Organisms).
- `src/components/shared/`: UI components which are shareable to many sub modules.
- `src/navigation/`: Typed navigation stacks.
- `src/types/`: Centralized TypeScript interfaces (Strictly No `any`).
- `src/constants/`: Design Tokens (Colors, Fonts) and App Constants.
- `src/utils/`: Re-usable methods
- `src/screens/`: Parent screesns that import components

---

## 6. TypeScript & Clean Code Rules
- **Strict Typing:** No `any`. Use interfaces for all Query responses and Firebase Data.
- **Naming:** - Hooks: `use[Feature]Query` or `use[Feature]Mutation`.
  - Services: `[Feature]Service.ts`.
- **File Size:** Max 120 lines per file; refactor if exceeded.

---

## 7. AI Agent Interaction Instructions
1. **Analyze Design:** Extract visual tokens (colors, fonts) from the provided Stitch image.
2. **Handle Errors First:** Ensure the Service layer throws errors and the UI is designed to display those errors to the user.
3. **Sequence:** Draft Types -> Create Services -> Create Hooks -> Build UI components.
4. **Final Review:** Audit for `console.log` or messy comments and remove them before outputting.