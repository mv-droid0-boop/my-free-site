(function(){'use strict';
const validId=s=>typeof s==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,80}$/.test(s)&&!['constructor','prototype','__proto__'].includes(s);
const text=(value,max)=>String(value??'').slice(0,max);
const clamp=(n,min,max,fallback)=>Number.isFinite(Number(n))?Math.max(min,Math.min(max,Number(n))):fallback;
function defaultHome(albums){
 const first=albums.find(a=>a.id==='natural')||albums[0],prom=albums.find(a=>a.id==='prom'),family=albums.find(a=>a.id==='family');
 const slides=[];
 slides.push({...{"id": "hero-light", "label": "停留吧，这一刻", "eyebrow": "GOETHE / FAUST / THE MOMENT", "title": "请停留吧，\n你是如此美。", "intro": "若有一天，我对那一瞬说：\n“请停留吧，你是如此美。”", "caption": "歌德《浮士德》第一部 · 书斋 · 节选自译", "linkText": "翻开摄影作品", "x": 50, "y": 50},photoId:first.cover||first.photos[0],albumId:""});
 if(prom)slides.push({...{"id": "hero-prom", "label": "她舞着，她旋转着", "eyebrow": "VICTOR HUGO / NOTRE-DAME DE PARIS", "title": "她舞着，\n她旋转着。", "intro": "她在旧波斯地毯上飞快地回旋。\n明亮的面庞转到眼前，\n那双乌黑的眼睛便闪出一道光。", "caption": "雨果《钟楼怪人》第二卷第三章 · 节选自译", "linkText": "翻开这组影像", "x": 50, "y": 50},photoId:prom.cardCover||prom.cover,albumId:prom.id});
 if(family)slides.push({...{"id": "hero-together", "label": "确信自己被爱着", "eyebrow": "VICTOR HUGO / LES MISÉRABLES", "title": "确信自己，\n被爱着。", "intro": "人生最大的幸福，\n是确信自己被爱着；\n因为自己而被爱，尽管如此仍被爱着。", "caption": "雨果《悲惨世界》· 节选自译", "linkText": "翻开这组影像", "x": 50, "y": 50},photoId:family.cardCover||family.cover,albumId:family.id});
 return {autoplay:true,interval:5,slides};
}
function normalizeHome(input,albums){
 if(!input||!Array.isArray(input.slides)||!input.slides.length)return defaultHome(albums);
 const known=new Set(albums.map(a=>a.id)),ids=new Set();
 const slides=input.slides.slice(0,30).map((s,i)=>{if(!s||!validId(s.photoId))throw Error('海报照片编号无效');let id=validId(s.id)?s.id:'hero-'+i;if(ids.has(id))id+='-'+i;ids.add(id);return {id,photoId:s.photoId,albumId:known.has(s.albumId)?s.albumId:'',label:text(s.label||'海报 '+(i+1),80),eyebrow:text(s.eyebrow,200),title:text(s.title,160),intro:text(s.intro,1000),caption:text(s.caption,240),linkText:text(s.linkText||'探索摄影作品',80),x:clamp(s.x,0,100,50),y:clamp(s.y,0,100,50)}});
 return {autoplay:input.autoplay!==false,interval:clamp(input.interval,3,60,5),slides};
}
function photoIds(albums,home){return [...new Set([...albums.flatMap(a=>[...a.photos,a.cover,a.cardCover]),...(home?.slides||[]).map(s=>s.photoId)].filter(Boolean))]}
window.PhotoSite={validId,defaultHome,normalizeHome,photoIds};
})();
