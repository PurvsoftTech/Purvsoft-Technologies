import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Contexts
import { AuthProvider } from './Admin-Panel/contexts/AuthContext';

// Admin Components
import './Admin-Panel/styles/admin-global.css'; 
import AdminLayout from './Admin-Panel/Admin-components/AdminLayout';
import Dashboard from './Admin-Panel/Admin-components/Dashboard';
import UploadBlog from './Admin-Panel/Admin-components/UploadBlog';
import ManageBlogs from './Admin-Panel/Admin-components/ManageBlogs';
import AccountCenter from './Admin-Panel/Admin-components/AccountCenter';
import ProtectedRoute from './Admin-Panel/Admin-components/ProtectedRoute';
import AdminLogin from './Admin-Panel/Admin-components/AdminLogin';

// Website Components
import Home from './component/Home';
import About from './component/subcomponent/About';
import Header from './page/Header';
import Footer from './page/Footer';
import ContactPage from './component/subcomponent/ContactPage';
import Career from './component/subcomponent/Career';
import HireResource from './component/subcomponent/HireResource';
import Web from './component/subcomponent/Web';
import DigitalMarketing from './component/subcomponent/Digitalmarketing';
import Seo from './component/subcomponent/Seo';
import CustomSoftwareDevelopment from './component/subcomponent/CustomSoftwareDevelopment';
import ContentManagement from './component/subcomponent/ContentManagement';
import MobileAppDevelopment from './component/subcomponent/MobileAppDevelopment';
import EcommerceDevelopment from './component/subcomponent/EcommerceDevelopment';
import ReactIntroduction from './component/subcomponent/ReactIntroduction';
import NextJSSolutions from './component/subcomponent/NextJSSolutions';
import AngularIntroduction from './component/subcomponent/AngularIntroduction';
import ShopifyBusiness from './component/subcomponent/ShopifyBusiness';
import FlutterDevelopment from './component/subcomponent/FlutterDevelopment';
import LaravelDevelopment from './component/subcomponent/LaravelDevelopment';
import Portfolio from './component/subcomponent/Portfolio';
import BlogStandard from './component/subcomponent/BlogStandard';
import YouTubeAds from './component/subcomponent/YouTubeAds';
import MetaAds from './component/subcomponent/MetaAds';
import GoogleAds from './component/subcomponent/GoogleAds';
import OurChallenges from './component/OurChallenges';
import NodeJSDevelopment from './component/subcomponent/NodeJSDevelopment';
import ScrollToTop from './component/ScrollToTop';
import {HelmetProvider } from 'react-helmet-async';
import Product from './component/Product';
import BlogDetail from './component/subcomponent/BlogDetail';
export default function App() {
  return (
    <HelmetProvider>
    <AuthProvider>
      <BrowserRouter>
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

          {/* ✅ WEBSITE ROUTES */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<About />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/hire-resource" element={<HireResource />} />

                  <Route path="/services/website-development" element={<Web />} />
                  <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/services/seo" element={<Seo />} />
                  <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
                  <Route path="/services/content-management" element={<ContentManagement />} />
                  <Route path="/service/mobile-app-development" element={<MobileAppDevelopment />} />
                  <Route path="/services/e-commerce-development" element={<EcommerceDevelopment />} />
                  <Route path="/services/reactjs" element={<ReactIntroduction />} />
                  <Route path="/services/nextjs" element={<NextJSSolutions />} />
                  <Route path="/services/angular" element={<AngularIntroduction />} />
                  <Route path="/services/shopify" element={<ShopifyBusiness />} />
                  <Route path="/services/flutter" element={<FlutterDevelopment />} />
                  <Route path="/services/laravel" element={<LaravelDevelopment />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path='/blog' element={<BlogStandard/>}/>
                   <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path='/services/youtube-marketing' element={<YouTubeAds/>}/>
                  <Route path='/services/meta-ads' element={<MetaAds/>}/>
                  <Route path='/services/google-ads' element={<GoogleAds/>}/>
                  <Route path='/services/our-challenges' element={<OurChallenges/>}/>
                  <Route path='/services/nodejs' element={<NodeJSDevelopment/>}/>
                  <Route path='/product' element={<Product/>}/>
                </Routes>

                <Footer />
              </>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </HelmetProvider>
  );
}