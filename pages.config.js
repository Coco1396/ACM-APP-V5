{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red15\green112\blue1;\red255\green255\blue254;\red0\green0\blue0;
\red0\green0\blue255;\red14\green110\blue109;\red144\green1\blue18;}
{\*\expandedcolortbl;;\cssrgb\c0\c50196\c0;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c0\c100000;\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /**\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * pages.config.js - Page routing configuration\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Pages are auto-registered when you create files in the ./pages/ folder.\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * THE ONLY EDITABLE VALUE: mainPage\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * This controls which page is the landing page (shown when users visit the app).\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Example file structure:\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import HomePage from './pages/HomePage';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import Dashboard from './pages/Dashboard';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import Settings from './pages/Settings';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   export const PAGES = \{\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       "HomePage": HomePage,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       "Dashboard": Dashboard,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       "Settings": Settings,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \}\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   export const pagesConfig = \{\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       mainPage: "HomePage",\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       Pages: PAGES,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \};\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Example with Layout (wraps all pages):\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import Home from './pages/Home';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import Settings from './pages/Settings';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   import __Layout from './Layout.jsx';\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   export const PAGES = \{\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       "Home": Home,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       "Settings": Settings,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \}\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   export const pagesConfig = \{\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       mainPage: "Home",\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       Pages: PAGES,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *       Layout: __Layout,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   \};\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * To change the main page from HomePage to Dashboard, use find_replace:\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   Old: mainPage: "HomePage",\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *   New: mainPage: "Dashboard",\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  *\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * The mainPage value must match a key in the PAGES object exactly.\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 Home\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/Home'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 Club\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/Club'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 Gallery\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/Gallery'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 Bookings\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/Bookings'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 MemberDashboard\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/MemberDashboard'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \cf6 \strokec6 AdminDashboard\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './pages/AdminDashboard'\cf0 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  __Layout \cf5 \strokec5 from\cf0 \strokec4  \cf7 \strokec7 './Layout.jsx'\cf0 \strokec4 ;\cb1 \
\
\
\cf5 \cb3 \strokec5 export\cf0 \strokec4  \cf5 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 PAGES\cf0 \strokec4  = \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf7 \strokec7 "Home"\cf0 \strokec4 : \cf6 \strokec6 Home\cf0 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 "Club"\cf0 \strokec4 : \cf6 \strokec6 Club\cf0 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 "Gallery"\cf0 \strokec4 : \cf6 \strokec6 Gallery\cf0 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 "Bookings"\cf0 \strokec4 : \cf6 \strokec6 Bookings\cf0 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 "MemberDashboard"\cf0 \strokec4 : \cf6 \strokec6 MemberDashboard\cf0 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 "AdminDashboard"\cf0 \strokec4 : \cf6 \strokec6 AdminDashboard\cf0 \strokec4 ,\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 export\cf0 \strokec4  \cf5 \strokec5 const\cf0 \strokec4  pagesConfig = \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     mainPage: \cf7 \strokec7 "Home"\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 Pages\cf0 \strokec4 : \cf6 \strokec6 PAGES\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 Layout\cf0 \strokec4 : __Layout,\cb1 \
\cb3 \};\cb1 \
}