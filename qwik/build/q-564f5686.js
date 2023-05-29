import{c as t}from"./q-71956c83.js";const r="theme-preference",c=()=>{const e=`
        document.firstElementChild
            .setAttribute('data-theme',
                localStorage.getItem('${r}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            )`;return t("script",{dangerouslySetInnerHTML:e},null,null,3,"XY_0")};export{c as T,r as t};
