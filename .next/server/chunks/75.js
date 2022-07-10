"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);





const MainFooter = ()=>{
    // 4 columns footer
    const footerColumns = [
        {
            title: 'About',
            links: [
                {
                    title: 'About',
                    href: '/about'
                },
                {
                    title: 'Contact',
                    href: '/contact'
                },
                {
                    title: 'Careers',
                    href: '/careers'
                },
                {
                    title: 'Privacy Policy',
                    href: '/privacy-policy'
                },
                {
                    title: 'Terms of Use',
                    href: '/terms-of-use'
                }, 
            ]
        },
        {
            title: 'Shop',
            links: [
                {
                    title: 'Shop',
                    href: '/shop'
                },
                {
                    title: 'Collections',
                    href: '/collections'
                },
                {
                    title: 'Blog',
                    href: '/blog'
                }, 
            ]
        },
        {
            title: 'Support',
            links: [
                {
                    title: 'Support',
                    href: '/support'
                },
                {
                    title: 'FAQ',
                    href: '/faq'
                }, 
            ]
        },
        {
            title: 'Social',
            links: [
                {
                    title: 'Facebook',
                    href: 'https://www.facebook.com/'
                },
                {
                    title: 'Twitter',
                    href: 'https://twitter.com/'
                },
                {
                    title: 'Instagram',
                    href: 'https://www.instagram.com/'
                },
                {
                    title: 'Pinterest',
                    href: 'https://www.pinterest.com/'
                }, 
            ]
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
        fixed: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                my: 8
            },
            "data-testid": "footer",
            children: footerColumns.map((column)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                fontSize: 12,
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                color: 'black',
                                textDecoration: 'none',
                                mb: 2
                            },
                            children: column.title
                        }),
                        column.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        textTransform: 'Capitalize',
                                        mb: 1
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: link.href,
                                        sx: {
                                            color: 'gray',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                color: 'silver'
                                            }
                                        },
                                        children: link.title
                                    })
                                })
                            }, link.title)
                        )
                    ]
                }, column.title)
            )
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainFooter);


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);




const Header = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
            variant: "h4",
            component: "div",
            sx: {
                textAlign: 'center',
                py: 8,
                textTransform: 'uppercase'
            },
            children: "Torywatch.com"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_navigation_MainNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./utils/NavLinks.tsx
const navLinks = [
    {
        id: '1',
        name: 'Home',
        path: '/'
    },
    {
        id: '2',
        name: 'About Us',
        path: '/about'
    },
    {
        id: '3',
        name: 'Services',
        path: '/services'
    },
    {
        id: '4',
        name: 'Blog',
        path: '/blog'
    },
    {
        id: '5',
        name: 'Contact Us',
        path: '#contact'
    }, 
];

;// CONCATENATED MODULE: ./components/main-navigation/MainNavigation.tsx





const MainNavigation = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            textAlign: 'center'
        },
        children: navLinks.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: item.path,
                variant: "body1",
                sx: {
                    p: 4,
                    color: 'gray',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'silver'
                    }
                },
                children: item.name
            }, item.id)
        )
    }));
};
/* harmony default export */ const main_navigation_MainNavigation = (MainNavigation);


/***/ })

};
;