import{u as n}from"./CQRq9LnR.js";import{b as e,l as i}from"./BNB8KbVC.js";import{c as l}from"./DNLAhual.js";const f=e("translations",()=>{const o=n(),{locale:s}=i(),a=l({});async function r(){try{let t=await o.get(`api/translations/${s.value}`);a.value=t.data}catch(t){console.log(t)}}return{getTranslation:r,translations:a}});export{f as u};
