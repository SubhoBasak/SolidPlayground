import { Link, Route, Routes } from "@solidjs/router";
import { Suspense, lazy } from "solid-js";

function App() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" component={lazy(() => import("@lake/pages/home"))} />
          <Route
            path="/about"
            component={lazy(() => import("@lake/pages/about"))}
          />
          <Route
            path="/contact"
            component={lazy(() => import("@lake/pages/contact"))}
          />
          <Route
            path="/gallery"
            component={lazy(() => import("@lake/pages/gallery"))}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
