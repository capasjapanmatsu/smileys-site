import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SamoyedBreederSite } from './components/SamoyedBreederSite';

const SamoyedCharacterPage = lazy(() =>
  import('./pages/SamoyedCharacterPage').then((m) => ({ default: m.SamoyedCharacterPage }))
);
const BloodlinePage = lazy(() =>
  import('./pages/BloodlinePage').then((m) => ({ default: m.BloodlinePage }))
);
const BreedingPolicyPage = lazy(() =>
  import('./pages/BreedingPolicyPage').then((m) => ({ default: m.BreedingPolicyPage }))
);
const BreedingSchedulePage = lazy(() =>
  import('./pages/BreedingSchedulePage').then((m) => ({ default: m.BreedingSchedulePage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SamoyedBreederSite />} />
      <Route
        path="/samoyed"
        element={
          <Suspense fallback={null}>
            <SamoyedCharacterPage />
          </Suspense>
        }
      />
      <Route
        path="/samoyed-character"
        element={
          <Suspense fallback={null}>
            <SamoyedCharacterPage />
          </Suspense>
        }
      />
      <Route
        path="/bloodline"
        element={
          <Suspense fallback={null}>
            <BloodlinePage />
          </Suspense>
        }
      />
      <Route
        path="/breeding-policy"
        element={
          <Suspense fallback={null}>
            <BreedingPolicyPage />
          </Suspense>
        }
      />
      <Route
        path="/breeding-schedule"
        element={
          <Suspense fallback={null}>
            <BreedingSchedulePage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={null}>
            <ContactPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
