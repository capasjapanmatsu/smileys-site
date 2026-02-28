import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SamoyedBreederSite } from './components/SamoyedBreederSite';
import { APP_ROUTE_PATHS } from './routePaths';

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
const FaqPage = lazy(() =>
  import('./pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);

export default function App() {
  return (
    <Routes>
      <Route path={APP_ROUTE_PATHS.home} element={<SamoyedBreederSite />} />
      <Route
        path={APP_ROUTE_PATHS.samoyed}
        element={
          <Suspense fallback={null}>
            <SamoyedCharacterPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.samoyedLegacy}
        element={
          <Suspense fallback={null}>
            <SamoyedCharacterPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.bloodline}
        element={
          <Suspense fallback={null}>
            <BloodlinePage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.policyLegacy}
        element={
          <Suspense fallback={null}>
            <BreedingPolicyPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.policy}
        element={
          <Suspense fallback={null}>
            <BreedingPolicyPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.breedingSchedule}
        element={
          <Suspense fallback={null}>
            <BreedingSchedulePage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.contact}
        element={
          <Suspense fallback={null}>
            <ContactPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.faq}
        element={
          <Suspense fallback={null}>
            <FaqPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
