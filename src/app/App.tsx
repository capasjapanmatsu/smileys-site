import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SamoyedBreederSite } from './components/SamoyedBreederSite';
import { APP_ROUTE_PATHS } from './routePaths';

const SamoyedCharacterPage = lazy(() =>
  import('./pages/SamoyedCharacterPage').then((m) => ({ default: m.SamoyedCharacterPage }))
);
const SamoyedLifePage = lazy(() =>
  import('./pages/SamoyedLifePage').then((m) => ({ default: m.SamoyedLifePage }))
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
const KubitkaPage = lazy(() =>
  import('./pages/KubitkaPage').then((m) => ({ default: m.KubitkaPage }))
);
const LegalNoticePage = lazy(() =>
  import('./pages/LegalNoticePage').then((m) => ({ default: m.LegalNoticePage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
);
const BlogPage = lazy(() =>
  import('./pages/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const BlogPostPage = lazy(() =>
  import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage }))
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
        path={APP_ROUTE_PATHS.samoyedLife}
        element={
          <Suspense fallback={null}>
            <SamoyedLifePage />
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
        path={APP_ROUTE_PATHS.kubitka}
        element={
          <Suspense fallback={null}>
            <KubitkaPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.legal}
        element={
          <Suspense fallback={null}>
            <LegalNoticePage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.privacy}
        element={
          <Suspense fallback={null}>
            <PrivacyPolicyPage />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTE_PATHS.blog}
        element={
          <Suspense fallback={null}>
            <BlogPage />
          </Suspense>
        }
      />
      <Route
        path={`${APP_ROUTE_PATHS.blog}/:slug`}
        element={
          <Suspense fallback={null}>
            <BlogPostPage />
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
