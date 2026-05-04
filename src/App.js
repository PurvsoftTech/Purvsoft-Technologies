import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Contexts
import { AuthProvider } from "./Admin-Panel/contexts/AuthContext";
import { ThemeProvider } from "./Admin-Panel/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "./component/NotFound";

import "./Admin-Panel/styles/admin-global.css";
import AdminLayout from "./Admin-Panel/Admin-components/AdminLayout";
import Dashboard from "./Admin-Panel/Admin-components/Dashboard";
import UploadBlog from "./Admin-Panel/Admin-components/UploadBlog";
import ManageBlogs from "./Admin-Panel/Admin-components/ManageBlogs";
import AccountCenter from "./Admin-Panel/Admin-components/AccountCenter";
import ProtectedRoute from "./Admin-Panel/Admin-components/ProtectedRoute";
import AdminLogin from "./Admin-Panel/Admin-components/AdminLogin";

// Layout Components (important → no lazy)
import Header from "./page/Header";
import Footer from "./page/Footer";
import ScrollToTop from "./component/ScrollToTop";

// 🔥 Lazy Loaded Pages
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/subcomponent/About"));
const ContactPage = lazy(() => import("./component/subcomponent/ContactPage"));
const Career = lazy(() => import("./component/subcomponent/Career"));
const HireResource = lazy(() => import("./component/subcomponent/HireResource"));

const Web = lazy(() => import("./component/subcomponent/Web"));
const DigitalMarketing = lazy(() => import("./component/subcomponent/Digitalmarketing"));
const Seo = lazy(() => import("./component/subcomponent/Seo"));
const CustomSoftwareDevelopment = lazy(() => import("./component/subcomponent/CustomSoftwareDevelopment"));
const ContentManagement = lazy(() => import("./component/subcomponent/ContentManagement"));
const MobileAppDevelopment = lazy(() => import("./component/subcomponent/MobileAppDevelopment"));
const EcommerceDevelopment = lazy(() => import("./component/subcomponent/EcommerceDevelopment"));

const ReactIntroduction = lazy(() => import("./component/subcomponent/ReactIntroduction"));
const NextJSSolutions = lazy(() => import("./component/subcomponent/NextJSSolutions"));
const AngularIntroduction = lazy(() => import("./component/subcomponent/AngularIntroduction"));
const ShopifyBusiness = lazy(() => import("./component/subcomponent/ShopifyBusiness"));
const FlutterDevelopment = lazy(() => import("./component/subcomponent/FlutterDevelopment"));
const LaravelDevelopment = lazy(() => import("./component/subcomponent/LaravelDevelopment"));

const Portfolio = lazy(() => import("./component/subcomponent/Portfolio"));
const BlogStandard = lazy(() => import("./component/subcomponent/BlogStandard"));
const BlogDetail = lazy(() => import("./component/subcomponent/BlogDetail"));

const YouTubeAds = lazy(() => import("./component/subcomponent/YouTubeAds"));
const MetaAds = lazy(() => import("./component/subcomponent/MetaAds"));
const GoogleAds = lazy(() => import("./component/subcomponent/GoogleAds"));
const OurChallenges = lazy(() => import("./component/OurChallenges"));
const NodeJSDevelopment = lazy(() => import("./component/subcomponent/NodeJSDevelopment"));
const Product = lazy(() => import("./component/Product"));
const AIAutomation = lazy(() => import("./component/subcomponent/AIAutomation"));

// ✅ Layout component using Outlet — the correct React Router v6 pattern.
// This replaces the nested <Routes> inside <Route path="/*"> which was
// breaking all routing because RRv6 strips the parent prefix before
// matching the inner <Routes>, so "/hire-resource" never matched.
const WebsiteLayout = () => (
  <>
    <Header />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </>
);

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>PurvSoft Technologies</div>}>
              <Routes>

                {/* ✅ ADMIN ROUTES */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="/admin/dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="upload-blog" element={<UploadBlog />} />
                  <Route path="manage-blogs" element={<ManageBlogs />} />
                  <Route path="account" element={<AccountCenter />} />
                </Route>

                {/* ✅ WEBSITE ROUTES — all share Header + Footer via WebsiteLayout */}
                <Route element={<WebsiteLayout />}>

                  {/* MAIN PAGES */}
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<About />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/hire-resource" element={<HireResource />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<BlogStandard />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/product" element={<Product />} />

                  {/* CORE SERVICES */}
                  <Route path="/services/website-development" element={<Web />} />
                  <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/services/seo" element={<Seo />} />
                  <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
                  <Route path="/services/content-management" element={<ContentManagement />} />
                  <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
                  <Route path="/services/e-commerce-development" element={<EcommerceDevelopment />} />
                  <Route path="/services/ai-automation" element={<AIAutomation />} />

                  {/* FRONTEND / FRAMEWORKS */}
                  <Route path="/services/reactjs-development" element={<ReactIntroduction />} />
                  <Route path="/services/nextjs-development" element={<NextJSSolutions />} />
                  <Route path="/services/angular-development" element={<AngularIntroduction />} />
                  <Route path="/services/shopify-development" element={<ShopifyBusiness />} />
                  <Route path="/services/flutter-development" element={<FlutterDevelopment />} />
                  <Route path="/services/laravel-development" element={<LaravelDevelopment />} />
                  <Route path="/services/nodejs-development" element={<NodeJSDevelopment />} />

                  {/* DIGITAL MARKETING */}
                  <Route path="/services/youtube-marketing" element={<YouTubeAds />} />
                  <Route path="/services/meta-ads" element={<MetaAds />} />
                  <Route path="/services/google-ads" element={<GoogleAds />} />
                  <Route path="/services/our-challenges" element={<OurChallenges />} />

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />

                </Route>

              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}