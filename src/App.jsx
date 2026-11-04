import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Header />
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
