(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))o(A);new MutationObserver(A=>{for(const h of A)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(A){const h={};return A.integrity&&(h.integrity=A.integrity),A.referrerPolicy&&(h.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?h.credentials="include":A.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(A){if(A.ep)return;A.ep=!0;const h=i(A);fetch(A.href,h)}})();let f=localStorage.getItem("theme");const m=document.querySelector("#theme");document.documentElement.getAttribute("theme");m.addEventListener("click",()=>{m.checked?Q():u()});function D(){f==="dark"?Q():u()}function Q(){m.checked=!0,localStorage.setItem("theme","dark"),document.documentElement.setAttribute("theme","dark")}function u(){m.checked=!1,localStorage.setItem("theme","light"),document.documentElement.setAttribute("theme","ligth")}D();const L=document.querySelector(".nav-menu");let H=window.location.href;const d=L.getElementsByTagName("a");function B(){for(let e=0;e<d.length;e++)d[e].href===H&&d[e].classList.add("current")}B();const c=document.querySelector(".btn-close"),n=document.querySelector(".btn-menu"),s=document.querySelector(".menu-section"),T=document.querySelector(".nav-shopping"),w=document.querySelector(".nav-link");n.addEventListener("click",l);c.addEventListener("click",C);function C(){s.classList.remove("is-open"),s.classList.add("hidden"),n.classList.remove("hidden"),c.classList.add("hidden")}function l(){s.classList.add("is-open"),s.classList.remove("hidden"),n.classList.add("hidden"),c.classList.remove("hidden")}function I(){T.href===H&&(c.classList.add("hidden"),s.classList.add("hidden"),n.classList.remove("hidden"),n.addEventListener("click",l)),w.href===H&&(c.classList.add("hidden"),s.classList.add("hidden"),n.classList.remove("hidden"),n.addEventListener("click",l))}I();const g="shoppingList";function S(e){const t=a();return!!(t!=null&&t.some(i=>i._id===e))}function b(e){const t=[],i=a();if(i)i.push(e),localStorage.setItem(g,JSON.stringify(i));else{t.push(e);const o=JSON.stringify(t);localStorage.setItem(g,o)}}function k(e){const i=a().filter(o=>o._id!==e);localStorage.setItem(g,JSON.stringify(i))}function a(){const e=localStorage.getItem(g);try{return JSON.parse(e)}catch{return e}}const j="data:image/png;base64,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",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAMAAABwIXKiAAAC5VBMVEVHcEwAAADlkwD/gQAAAAAAAAAAAAAAAAAAAAAiEAAYDAAAAAAAAADpaBZqLgj3mwQAAAAAAAD//wCdVgYAAACdUgYAAAAAAAAAAAAAAADzgw4AAAD3mwQAAABoMAj9mwQODgA4HAAcDgAmJgAMAABcLgDzgQ4SAAAoFABUVAAAAAD1iwoMDABgLgidUgoSDACfWgb1iQz/AADzhwyrVAD9nQTzhQwMDAAQAAD1jQilXgadTgydTAybTAz/nQT1lwTfiwBCHgoiEgDLWhL9mQb3mQSdTgrzoQDzfBDjahTzehLzfhD3chjnZhbzeBL7chj7dhb3cBj7nQTfZBj5chjpahbzeBLtcBTdZhSvUBCVUgDzdBLfZhTvcBSJRAiNRAi/dgDDWhLFWhLbZBTNiQDdiQDhhwTXYhTjhwT7mwTxdBKzUBC/bAC1bASZTg6xZgSvZAizaAiRVACdTg5eLghaKApUKApUJghuMghqMghaJghiLgjljQD3lQT3mQTzkQb1jwj1kwbtjwbvjwbliQC/gQCBgQD3jwj1lQT1jwj1lwL/mQb3lwL1kQj9mQb////7chj/nQT9lwj7eBb9mQb/mwb7dBb7dhb7ehT//f37fBT//fv9kQr/mwT9lQj7hyb9hxD9yZn9kwr9y6X9jwz/+/f7gRL9jQz///39y5n9iQ77fBb7fhL9hRD/+fH9iwz7gxD7fBL9kwj7gRT9zZf7mUr7fBr9zZn9oyj9v43//fn9jw7/79n7gRz9lQr9nRz/9/H7gyD/xXb9nSD9x5n/7d/9mRT9lw79kTT7fiD9kQz/v3D/9/P9iRD/z5f/8+n9t1r7fhT9jQ7/9+v9iw7/58v/05v/47//483//ff/7+P7iSr/0ZP/+/X7eBr9lTT9mxL9kzT9mRL9lQz9mTT7gSb9hxL9mzL7hy79nSL9ozT9hRL7eBT7jzb7gxL7hRL7gxT/z5H9z5f9y5f9lzT7jTb/zZEz1Y1jAAAAj3RSTlMABBwEIhomAgweKhgIuzyzCiQCTB5MFCAGENkOsRI69SQSJAwoCtkcGAYc2Sg4TChM2QLZBufZJh7ZSExMTP1mGDIceuurTBLZp9nZ7bXX/f3pQqH1u9nDm2Ae05vDQkIccHCTDg5ik2J+02AcNEo0QkIeSjYyMjY8PDY2HI2Bv9G/oaEcBATXj9eT/ZPR/bDrA1UAAALdSURBVHgBldRnTBtXAMBx3No+07tWsgFbwjUbDDKIPYTE3stsQfuhLWpLVbr3LlV3kQotrdqeTVle6GzLCxCYdYCBAELsIcCJQhIpiRKQQsLnHA539wyXD/l/uHt3+uk9vQ/veQAJBE+DCQQejP38WuZTYJmv/3TBxAkKqjJa8p4Hy2vJqCoQxLm5hB/fTEz/83zpid9+nQAy1tvf+P/PlP+vr7BoBiGNuX8zl9uIQLQL/r61nbnWH4JpF/Fh82NYe3vzixHUdKHvfWe1ds4dDE1t7a9MjHeOT6zsb00NHcx1Wq2/vxNKTsgKfP+3Xmvv7MkornGub09fm95ed2rw0ZPZXqv1lw8Cz3YCIeGpso6OjkXcjvahqHPz1qYTJUZ2fJH4K0sNP9sJxMuOkanVC/1KtO20vtt9rjeqvLegVstisnmk8/SK1elGSNd2/dELVfaP6HSxXp6AizeZ1hjcmskU7+aSMGzjmHT3SXe8gWFJoPPxxbAlyl2h3BKG+fq4OaOxu4d0V0nX0200ursws/GIcpcod2Q0hoEuv8RsPnSQ7i7lDs3mknzQFWq1NofSFdr2gCCuHDatthB0acUGg81h1yzP7OJKwinx3Zlljd1hMxiK00Ant1hWh3cGurq69lT4TVy1R4wGdoZXLRY56N6VKxSKMb2eeComVTdUk6cDvX6MeMo/AtxLTf9RDc5fnh+kP5tepp3007q/gO6AH3WfSCnHCSiq+Je5iqIADuVgdkPpP8yVNrBh0iFC0cf1NX8wVVP/lUhInjiWGA764o3K8guqvPLVz4NgMXmCIUTinfzZCznVZbXP0tWWVee89WWyt4Q+wCwxh83lRmdF+T1H5xeVFc3lsjnUdK6diNh8fkjkM2CRIVw+X0Tu4mxhWJpCSK5bfHaKFAaWJRZGeGIJMad7Ilgi5iHAPUTMCLEQsRDmgMFCMcKCIOjcVUlInnuniunihS7k8cQ9BGnxygrFA9cGAAAAAElFTkSuQmCC",p="/project-g7/assets/icons-ed77f212.svg";export{j as a,z as b,b as c,k as d,S as i,a as l,p as s};
//# sourceMappingURL=icons-5e53df93.js.map