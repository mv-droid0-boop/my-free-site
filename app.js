'use strict';
let albums=JSON.parse(document.getElementById('collections-data').textContent);
const app=document.getElementById('app'),$=id=>document.getElementById(id);
const localPhotoURLs=new Map();
const imagePath=(id,small=false)=>localPhotoURLs.get(id+(small?'-small':''))||'./assets/'+id+(small?'-small':'')+'.jpg';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const readingNotes=[{"place": "首页海报 · 请停留吧", "credit": "歌德《浮士德》第一部·书斋", "original": "Werd’ ich zum Augenblicke sagen: Verweile doch! du bist so schön!", "translation": "若有一天，我对那一瞬说：请停留吧，你是如此美。", "url": "https://www.gutenberg.org/files/2229/2229-h/2229-h.htm"}, {"place": "复古街拍", "credit": "雨果《钟楼怪人》第三卷第二章", "original": "Ordinarily, the noise which escapes from Paris by day is the city speaking; by night, it is the city breathing; in this case, it is the city singing.", "translation": "白天，巴黎传来的声音，是城市在说话；夜里，是城市在呼吸。而此刻，是城市在歌唱。", "url": "https://www.gutenberg.org/files/2610/2610-h/2610-h.htm"}, {"place": "毕业纪念", "credit": "大仲马《基督山伯爵》第117章", "original": "until the day when God shall deign to reveal the future to man, all human wisdom is summed up in these two words,—‘Wait and hope.’", "translation": "在上帝愿意向人揭开未来的那一天到来之前，人类的全部智慧都归结在两个词里：等待，并且希望。", "url": "https://www.gutenberg.org/files/1184/1184-h/1184-h.htm"}, {"place": "活动纪实／首页相聚区", "credit": "狄更斯《圣诞颂歌》第三节", "original": "there is nothing in the world so irresistibly contagious as laughter and good-humour. / And their assembled friends being not a bit behindhand, roared out lustily.", "translation": "世上没有什么，比笑声和好心情更能使人不由自主地受到感染。聚在一起的朋友，也一个不落地放声大笑起来。", "url": "https://www.gutenberg.org/files/46/46-h/46-h.htm"}, {"place": "个性写真／首页作品区", "credit": "司汤达《论爱情》第17章注、第2章", "original": "Beauty is only the promise of happiness. / In a word, it is enough to think of a perfection in order to see it in that which you love.", "translation": "美不过是幸福的许诺。只须想到一种完美，便会在所爱的人身上看见它。", "url": "https://www.gutenberg.org/files/53720/53720-h/53720-h.htm"}, {"place": "家庭亲子／首页第三张海报", "credit": "雨果《悲惨世界》", "original": "The supreme happiness of life consists in the conviction that one is loved; loved for one’s own sake—let us say rather, loved in spite of one’s self;", "translation": "人生最大的幸福，是确信自己被爱着；因为自己而被爱——不如说，尽管如此，仍然被爱着。", "url": "https://www.gutenberg.org/files/135/135-h/135-h.htm"}, {"place": "婚礼纪实", "credit": "《圣经·哥林多前书》13:7–8（KJV）", "original": "Beareth all things, believeth all things, hopeth all things, endureth all things. Charity never faileth:", "translation": "爱承受一切，相信一切，期望一切，忍耐一切。爱永不止息。", "url": "https://www.gutenberg.org/cache/epub/10/pg10-images.html"}, {"place": "自然人像", "credit": "歌德《五月之歌》", "original": "How gloriously gleameth / All nature to me! / How bright the sun beameth, / How fresh is the lea! / White blossoms are bursting / The thickets among, / And all the gay greenwood / Is ringing with song!", "translation": "大自然在我眼前，闪耀着怎样的光彩！阳光多么明亮，草地多么清新！白花在灌木丛间绽放，欢欣的绿林，处处响着歌声。", "url": "https://en.wikisource.org/wiki/The_Works_of_J._W._von_Goethe/Volume_9/May_Song_(%22How_gloriously_gleameth_all_nature_to_me!%22)"}, {"place": "Prom舞会／首页第二张海报", "credit": "雨果《钟楼怪人》第二卷第三章", "original": "She danced, she turned, she whirled rapidly about on an old Persian rug, spread negligently under her feet; and each time that her radiant face passed before you, as she whirled, her great black eyes darted a flash of lightning at you.", "translation": "她舞着，转着，在一张旧波斯地毯上飞快地回旋。每当那明亮的面庞转到眼前，她那双乌黑的大眼睛便闪出一道光。", "url": "https://www.gutenberg.org/files/2610/2610-h/2610-h.htm"}, {"place": "青春写真", "credit": "《圣经·传道书》3:4（KJV）", "original": "A time to weep, and a time to laugh; a time to mourn, and a time to dance;", "translation": "有哭泣的时候，也有欢笑的时候；有哀悼的时候，也有起舞的时候。", "url": "https://www.gutenberg.org/cache/epub/10/pg10-images.html"}, {"place": "空间人像", "credit": "雨果《钟楼怪人》第三卷第一章", "original": "The man, the artist, the individual, is effaced in these great masses, which lack the name of their author; human intelligence is there summed up and totalized. Time is the architect, the nation is the builder.", "translation": "在这些庞大的建筑中，个人与艺术家的名字隐去了，人类的智慧在这里汇聚。时间是建筑师，人民是建造者。", "url": "https://www.gutenberg.org/files/2610/2610-h/2610-h.htm"}, {"place": "职业主题写真", "credit": "狄更斯《大卫·科波菲尔》第1章", "original": "Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.", "translation": "我会不会成为自己一生的主人公，还是由别人担任这个角色？这些篇页自会说明。", "url": "https://www.gutenberg.org/files/766/766-h/766-h.htm"}, {"place": "攀岩写真", "credit": "海明威《老人与海》", "original": "But man is not made for defeat.", "translation": "人并不是为失败而造的。", "url": "https://www.fadedpage.com/books/20141070/html.php"}, {"place": "联系区", "credit": "《圣经·传道书》3:1（KJV）", "original": "To every thing there is a season, and a time to every purpose under the heaven:", "translation": "万事各有时节，天下每件事都有它的时辰。", "url": "https://www.gutenberg.org/cache/epub/10/pg10-images.html"}, {"place": "各作品集拍摄咨询区", "credit": "大仲马《基督山伯爵》第117章", "original": "Live, then, and be happy, beloved children of my heart,", "translation": "那么，活下去，并且幸福吧。", "url": "https://www.gutenberg.org/files/1184/1184-h/1184-h.htm"}, {"place": "页脚", "credit": "《圣经·约翰福音》1:5前半句（KJV）", "original": "And the light shineth in darkness;", "translation": "光在暗处照耀。", "url": "https://www.gutenberg.org/cache/epub/10/pg10-images.html"}];
const I18n=window.PortfolioI18n,siteConfig=window.PhotoSiteConfig;
I18n.configureNotes(readingNotes);
const t=(key,args)=>I18n.text(key,args),lines=value=>esc(value).replaceAll('\n','<br>');
const brand=()=>I18n.locale==='zh'?siteConfig.brand.zh:siteConfig.brand.en;
function applyHeader(){
 document.documentElement.lang=I18n.locale==='zh'?'zh-CN':I18n.locale;
 document.querySelector('.logo-title').textContent=brand();
 document.querySelector('.logo-sub').textContent=I18n.locale==='zh'?'LIGHT & STORIES':siteConfig.brand.zh;
 document.querySelector('.logo').setAttribute('aria-label',brand());
 document.querySelector('.nav-work').textContent=t('works');
 document.querySelector('.nav-contact').textContent=t('contact')+' ↗';
 document.querySelector('.nav').setAttribute('aria-label',({en:'Main navigation',es:'Navegación principal',zh:'主导航',ko:'주 메뉴',ja:'メインナビゲーション'})[I18n.locale]);
 document.querySelector('.language-picker .visually-hidden').textContent=t('language');
 const picker=$('site-language');picker.value=I18n.locale;picker.setAttribute('aria-label',t('language'));
 const manager=$('manage-link');if(manager){manager.querySelector('.manage-full').textContent=I18n.locale==='zh'?'管理照片':'Manage photos';manager.querySelector('.manage-short').textContent=I18n.locale==='zh'?'管理':'Edit'}
 $('previous').textContent='← '+t('photoPrevious');$('previous').setAttribute('aria-label',t('photoPrevious'));
 $('next').textContent=t('photoNext')+' →';$('next').setAttribute('aria-label',t('photoNext'));
 $('close-lightbox').textContent=t('close')+' ×';
 document.querySelector('meta[name="description"]').content=brand()+' · '+t('base')+'. '+t('travel');
}
$('site-language').onchange=e=>{const y=scrollY;I18n.setLocale(e.target.value);if(['#works','#contact'].includes(location.hash))home();route();requestAnimationFrame(()=>window.scrollTo({top:y,behavior:'instant'}))};
const prefersStill=matchMedia('(prefers-reduced-motion: reduce)').matches;
let observer,activeAlbum=albums[0],activeSlide=0,heroTick=false,filter='all';
function image(id,alt,cls='',eager=false){return '<img src="'+imagePath(id)+'" srcset="'+imagePath(id,true)+' 800w, '+imagePath(id)+' 2200w" sizes="'+(cls==='album-hero'?'100vw':'(max-width: 620px) 100vw, 60vw')+'" alt="'+esc(alt)+'" '+(eager?'fetchpriority="high"':'loading="lazy"')+' decoding="async" '+(cls?'class="'+cls+'"':'')+'>'}
let homeSettings=PhotoSite.normalizeHome(JSON.parse(document.getElementById('home-data')?.textContent||'null'),albums),heroCarousel=null;
function heroMarkup(activeIndex){
 const slides=homeSettings.slides.map(s=>I18n.poster(s));
 const panels=slides.map((s,i)=>{
  const active=i===activeIndex;
  const fullPhoto=s.fit==='contain';
  const mainImage=image(s.photoId,s.label,'hero-slide-image',active);
  const visual=fullPhoto
   ? mainImage
   : mainImage.replace('<img ','<img style="object-position:'+s.x+'% '+s.y+'%" ');
  return `<div data-hero-id="${s.id}" class="hero-slide ${active?'is-active':''}" role="group" aria-roledescription="slide" aria-label="${i+1} / ${slides.length} · ${esc(s.label)}" aria-hidden="${!active}" ${active?'':'inert'}><div class="hero-copy"><span class="eyebrow">${esc(s.eyebrow)}</span><h1>${lines(s.title)}</h1><p class="intro">${lines(s.intro)}</p><p class="hero-photo-credit${fullPhoto?'':' hero-photo-credit--portrait'}">${esc(s.caption)}</p><a class="text-link" href="${s.albumId?'#album/'+s.albumId:'#works'}">${esc(s.linkText)} <span class="arrow">↗</span></a></div><div class="hero-visual${fullPhoto?' hero-visual--contain':''}">${visual}${fullPhoto?'':'<div class="hero-caption">'+esc(s.caption)+'</div>'}</div></div>`;
 });
 return `<section class="hero hero-carousel" aria-label="${esc(t('works'))}" aria-roledescription="carousel"><div class="hero-deck">${panels.join('')}</div><a href="#works" class="scroll-cue">${esc(t('scroll'))}</a>${slides.length>1?`<div class="hero-controls"><button type="button" id="hero-previous" aria-label="${esc(t('posterPrevious'))}">←</button><span id="hero-count">${pad(activeIndex+1)} / ${pad(slides.length)}</span><button type="button" id="hero-next" aria-label="${esc(t('posterNext'))}">→</button><button type="button" id="hero-play" aria-label="${esc(t('posterPause'))}">Ⅱ</button></div><div class="hero-dots" aria-label="${esc(t('works'))}">${slides.map((s,i)=>'<button data-hero-index="'+i+'" aria-label="'+esc(t('posterView',{n:i+1}))+'" aria-pressed="'+(i===activeIndex)+'"></button>').join('')}</div>`:''}</section>`;
}
function clearHeroCarousel(){
 if(!heroCarousel)return;
 clearTimeout(heroCarousel.timer);
 clearTimeout(heroCarousel.settleTimer);
 cancelAnimationFrame(heroCarousel.scrollFrame);
 heroCarousel.controller.abort();
 heroCarousel.observer?.disconnect();
 heroCarousel.clones.forEach(clone=>clone.remove());
 heroCarousel=null;
}
function initHeroCarousel(){
 clearHeroCarousel();
 const root=document.querySelector('.hero-carousel');
 if(!root)return;
 const slides=[...root.querySelectorAll('.hero-slide')],deck=root.querySelector('.hero-deck');
 if(slides.length<2)return;
 const c=heroCarousel={
  index:slides.findIndex(slide=>slide.classList.contains('is-active')),
  timer:0,settleTimer:0,scrollFrame:0,drag:null,destination:null,pending:0,clones:[],
  paused:!homeSettings.autoplay||prefersStill,hover:false,focus:false,visible:true,
  controller:new AbortController()
 };
 const opts={signal:c.controller.signal};
 const wrap=index=>(index+slides.length)%slides.length;
 function cloneSlide(slide){
  const clone=slide.cloneNode(true);
  clone.dataset.heroClone='true';
  clone.classList.remove('is-active');
  clone.inert=true;
  clone.setAttribute('aria-hidden','true');
  c.clones.push(clone);
  return clone;
 }
 deck.prepend(cloneSlide(slides[slides.length-1]));
 deck.append(cloneSlide(slides[0]));
 function updateControls(){
  root.dataset.heroFit=homeSettings.slides[c.index].fit||'cover';
  root.querySelector('#hero-count').textContent=pad(c.index+1)+' / '+pad(slides.length);
  root.querySelectorAll('[data-hero-index]').forEach((button,index)=>button.setAttribute('aria-pressed',String(index===c.index)));
  const play=root.querySelector('#hero-play');
  play.textContent=c.paused?'▶':'Ⅱ';
  play.setAttribute('aria-label',t(c.paused?'posterPlay':'posterPause'));
  slides.forEach((slide,index)=>{
   slide.classList.toggle('is-active',index===c.index);
   slide.inert=index!==c.index;
   slide.setAttribute('aria-hidden',String(index!==c.index));
  });
 }
 function schedule(){
  clearTimeout(c.timer);
  if(!c.paused&&!c.hover&&!c.focus&&!c.drag&&c.destination===null&&c.visible&&!document.hidden){
   c.timer=setTimeout(()=>move(1),homeSettings.interval*1000);
  }
 }
 function readPosition(){
  const position=Math.round(deck.scrollLeft/deck.clientWidth);
  c.index=wrap(position-1);
  updateControls();
  return position;
 }
 function settle(){
  clearTimeout(c.settleTimer);
  if(heroCarousel!==c||c.drag)return;
  const position=readPosition();
  if(position===0||position===slides.length+1){
   deck.style.scrollSnapType='none';
   deck.scrollLeft=(c.index+1)*deck.clientWidth;
  }
  deck.style.scrollSnapType='';
  c.destination=null;
  updateHero();
  const pending=c.pending;
  c.pending=0;
  if(pending)move(pending);
  else schedule();
 }
 function scrollTo(position){
  clearTimeout(c.timer);
  clearTimeout(c.settleTimer);
  c.destination=position;
  deck.scrollTo({left:position*deck.clientWidth,behavior:prefersStill?'instant':'smooth'});
  // Also complete requests which already match the current scroll position.
  c.settleTimer=setTimeout(settle,180);
 }
 function move(step){
  let position=c.destination??Math.round(deck.scrollLeft/deck.clientWidth);
  const next=position+step;
  if(next<0||next>slides.length+1){
   if(c.destination!==null){c.pending+=step;return}
   position=c.index+1;
   deck.style.scrollSnapType='none';
   deck.scrollLeft=position*deck.clientWidth;
   deck.style.scrollSnapType='';
  }
  const target=position+step;
  scrollTo(target>=0&&target<=slides.length+1?target:wrap(c.index+step)+1);
 }
 deck.addEventListener('scroll',()=>{
  clearTimeout(c.timer);
  clearTimeout(c.settleTimer);
  if(!c.scrollFrame)c.scrollFrame=requestAnimationFrame(()=>{
   c.scrollFrame=0;
   if(heroCarousel===c)readPosition();
  });
  c.settleTimer=setTimeout(settle,180);
 },{...opts,passive:true});
 deck.addEventListener('scrollend',settle,opts);
 root.querySelector('#hero-next').onclick=()=>move(1);
 root.querySelector('#hero-previous').onclick=()=>move(-1);
 root.querySelector('#hero-play').onclick=()=>{c.paused=!c.paused;updateControls();schedule()};
 root.querySelectorAll('[data-hero-index]').forEach(button=>button.onclick=()=>scrollTo(Number(button.dataset.heroIndex)+1));
 deck.addEventListener('dragstart',event=>event.preventDefault(),opts);
 deck.addEventListener('pointerdown',event=>{
  if(!event.isPrimary||event.button!==0)return;
  clearTimeout(c.timer);
  clearTimeout(c.settleTimer);
  c.pending=0;
  c.destination=null;
  deck.scrollTo({left:deck.scrollLeft,behavior:'instant'});
  if(event.pointerType!=='mouse'||!event.target.closest('.hero-visual'))return;
  c.drag={pointer:event.pointerId,x:event.clientX,y:event.clientY,origin:deck.scrollLeft,lastX:event.clientX,time:event.timeStamp,velocity:0,started:false};
 },opts);
 deck.addEventListener('pointermove',event=>{
  const drag=c.drag;
  if(!drag||event.pointerId!==drag.pointer)return;
  const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
  if(!drag.started){
   if(Math.max(Math.abs(dx),Math.abs(dy))<8)return;
   if(Math.abs(dy)>Math.abs(dx)){c.drag=null;schedule();return}
   drag.started=true;
   deck.style.scrollSnapType='none';
   deck.setPointerCapture(event.pointerId);
   root.classList.add('is-dragging');
  }
  event.preventDefault();
  drag.velocity=(event.clientX-drag.lastX)/Math.max(1,event.timeStamp-drag.time);
  drag.lastX=event.clientX;
  drag.time=event.timeStamp;
  deck.scrollLeft=drag.origin-dx;
 },opts);
 function releaseDrag(event){
  const drag=c.drag;
  if(!drag||event.pointerId!==drag.pointer)return;
  c.drag=null;
  root.classList.remove('is-dragging');
  if(deck.hasPointerCapture(event.pointerId))deck.releasePointerCapture(event.pointerId);
  if(!drag.started){settle();return}
  const width=deck.clientWidth;
  const distance=deck.scrollLeft-drag.origin;
  const recent=event.timeStamp-drag.time<100;
  let target=Math.round(deck.scrollLeft/width);
  const origin=Math.round(drag.origin/width);
  const intentional=event.type==='pointerup'&&(Math.abs(distance)>Math.min(80,width*.12)||(recent&&Math.abs(drag.velocity)>.3&&Math.abs(distance)>16));
  if(target===origin&&intentional)target+=distance>0?1:-1;
  scrollTo(Math.max(0,Math.min(slides.length+1,target)));
 }
 deck.addEventListener('pointerup',releaseDrag,opts);
 deck.addEventListener('pointercancel',releaseDrag,opts);
 deck.addEventListener('lostpointercapture',releaseDrag,opts);
 deck.addEventListener('wheel',event=>{
  if(Math.abs(event.deltaX)<=Math.abs(event.deltaY))return;
  clearTimeout(c.timer);
  c.destination=null;
  c.pending=0;
 },{...opts,passive:true});
 root.addEventListener('mouseenter',()=>{c.hover=true;schedule()},opts);
 root.addEventListener('mouseleave',()=>{c.hover=false;schedule()},opts);
 root.addEventListener('focusin',()=>{c.focus=true;schedule()},opts);
 root.addEventListener('focusout',()=>requestAnimationFrame(()=>{
  if(heroCarousel===c){c.focus=root.contains(document.activeElement);schedule()}
 }),opts);
 document.addEventListener('visibilitychange',schedule,opts);
 if('IntersectionObserver'in window){
  c.observer=new IntersectionObserver(entries=>{c.visible=entries[0].isIntersecting;schedule()},{threshold:.1});
  c.observer.observe(root);
 }
 window.addEventListener('resize',()=>{
  c.destination=null;
  c.pending=0;
  deck.scrollLeft=(c.index+1)*deck.clientWidth;
  settle();
 },opts);
 deck.scrollLeft=(c.index+1)*deck.clientWidth;
 updateControls();
 schedule();
}

function contactSection(){
 return `<section class="contact-section" id="contact"><div class="reveal"><span class="eyebrow">ECCLESIASTES / A TIME FOR EVERYTHING</span><h2>${lines(t('contactTitle'))}</h2><p>${esc(t('contactQuote'))}<br><span class="quote-credit">${esc(t('contactCredit'))}</span></p><div class="contact-actions"><button class="solid-button" data-inquiry="">${esc(t('inquire'))} <span>↗</span></button><a class="text-link" href="mailto:${esc(siteConfig.email)}">${esc(t('emailMe'))} <span>↗</span></a></div></div><div class="contact-right reveal"><span class="eyebrow">LUBBOCK / TEXAS / USA</span><h3 class="contact-base">${esc(t('base'))}</h3><p>${esc(t('serviceLine'))}</p><p>${esc(t('travel'))}</p><a class="contact-email" href="mailto:${esc(siteConfig.email)}">${esc(siteConfig.email)}</a>${siteConfig.instagram?'<p><a href="'+esc(siteConfig.instagram)+'" target="_blank" rel="noopener noreferrer">Instagram ↗</a></p>':''}</div></section>`;
}
function footer(){
 const credit={en:'John 1:5 · KJV excerpt',es:'Juan 1:5 · Traducción de KJV',zh:'《约翰福音》1:5 · 节译',ko:'요한복음 1:5 · KJV 번역',ja:'ヨハネによる福音書 1:5 · KJVから翻訳'}[I18n.locale];
 return `<footer><span>${esc(brand())}</span><span>${esc(I18n.footerQuote())}<small>${esc(credit)}</small></span><a href="#reading">${esc(t('readingLink'))} ↗</a><a href="#" class="back-top">${esc(t('backTop'))}</a></footer>`;
}
function home(){
 const previousId=app.querySelector('.hero-slide.is-active')?.dataset.heroId;
 const previousIndex=homeSettings.slides.findIndex(slide=>slide.id===previousId);
 const activeIndex=previousIndex>=0?previousIndex:Math.floor(Math.random()*homeSettings.slides.length);
 document.title=brand()+' · '+t('base');
 app.innerHTML=`${heroMarkup(activeIndex)}<div class="shell"><section id="works"><div class="section-top"><div class="reveal"><span class="eyebrow">SELECTED STORIES / 01—${pad(albums.length)}</span><h2>${esc(t('worksHeading'))}</h2></div><p class="reveal">“${esc(t('worksQuote'))}”<br><span class="quote-credit">${esc(t('worksCredit'))}</span></p></div><div class="filter" role="group" aria-label="${esc(t('works'))}"><button data-filter="all" aria-pressed="true">${esc(t('all'))}</button>${albums.map(raw=>{const a=I18n.album(raw);return '<button data-filter="'+a.id+'" aria-pressed="false">'+esc(a.label)+'</button>'}).join('')}</div><div class="collections">${albums.map(raw=>{const a=I18n.album(raw);return `<a class="collection reveal" data-group="${a.id}" href="#album/${a.id}"><div class="collection-image">${image(a.cardCover||a.cover,a.label)}<span class="round-arrow" aria-hidden="true">↗</span></div><div class="card-heading"><h3>${esc(a.label)}</h3><small>${pad(a.photos.length)}</small></div><div class="card-sub">${esc(a.title)}<span class="card-credit">${esc(a.en)}</span></div></a>`}).join('')}</div></section></div><section class="story">${image((albums.find(a=>a.id==='event')||albums[0]).cover,I18n.album(albums.find(a=>a.id==='event')||albums[0]).label)}<div class="story-copy reveal"><span class="eyebrow">CHARLES DICKENS / A CHRISTMAS CAROL</span><h2>${lines(t('storyTitle'))}</h2><p>${esc(t('storyQuote'))}<br><span class="quote-credit">${esc(t('storyCredit'))}</span></p><a class="text-link" href="#album/event">${esc(t('storyLink'))} <span class="arrow">↗</span></a></div></section><div class="shell">${contactSection()}${footer()}</div>`;
 bindPage();setFilter(filter);
}
function albumPhoto(album,id,index){return '<button class="photo-item reveal" data-photo="'+index+'" aria-label="'+esc(t('photoAlt',{label:album.label,n:index+1}))+'">'+image(id,t('photoAlt',{label:album.label,n:index+1}))+'<small>'+pad(index+1)+' / '+esc(album.en)+'</small></button>'}
function albumGallery(album){
 if(!album.chapters)return '<section class="photo-grid" aria-label="'+esc(album.label)+'">'+album.photos.map((id,i)=>i?albumPhoto(album,id,i):'').join('')+'</section>';
 return album.chapters.map((chapter,n)=>'<section class="album-chapter"><div class="chapter-intro reveal"><small class="eyebrow">SCENE / '+pad(n+1)+'</small><h2>'+esc(chapter.title)+'</h2><p>'+esc(chapter.description)+'</p></div><div class="photo-grid">'+album.photos.map((id,i)=>i>0&&(album.photoScenes?album.photoScenes[id]===n:i>=chapter.start&&i<chapter.end)?albumPhoto(album,id,i):'').join('')+'</div></section>').join('');
}
function albumPage(raw){
 activeAlbum=raw;const album=I18n.album(raw),n=albums.indexOf(raw),next=I18n.album(albums[(n+1)%albums.length]);
 document.title=album.label+' · '+brand();
 app.innerHTML=`<div class="shell"><div class="album-topbar"><a href="#works">${esc(t('backAll'))}</a><span>COLLECTION / ${pad(n+1)}</span></div><section class="album-title"><div class="reveal"><span class="eyebrow">${esc(album.tag)}</span><h1>${esc(album.title)}</h1><div class="album-en">${esc(album.en)}</div></div><div class="reveal"><p>${esc(album.lead)}${album.description?'<br>'+esc(album.description):''}</p><button class="text-link" data-inquiry="${album.id}">${esc(t('inquire'))} <span class="arrow">↗</span></button></div></section><button class="photo-item" data-photo="0" aria-label="${esc(t('photoAlt',{label:album.label,n:1}))}" style="display:block;width:100%">${image(album.photos[0],album.label,'album-hero',true)}</button><div class="album-meta"><span>${esc(t('photoCount',{n:album.photos.length}))} / ${esc(t('photoMeta'))}</span><span>${esc(album.label)} · ${pad(n+1)}</span></div>${albumGallery(album)}<section class="session-info"><div><span class="eyebrow">DUMAS / THE COUNT OF MONTE CRISTO</span><h2>${lines(t('sessionTitle'))}</h2><p>${esc(t('sessionCredit'))}</p></div><div><span class="eyebrow">${esc(t('details'))}</span><h2 class="price">${esc(t('pricing'))}</h2><p>${esc(t('pricingDescription'))}</p><button class="solid-button" data-inquiry="${album.id}">${esc(t('inquire'))} <span>↗</span></button></div></section><a class="next-album" href="#album/${next.id}"><span><small>${esc(t('nextCollection'))}</small>${esc(next.label)} · ${esc(next.title)}</span><span>↗</span></a>${contactSection()}${footer()}</div>`;
 bindPage();
}
function bindPage(){initHeroCarousel();document.querySelectorAll('[data-inquiry]').forEach(b=>b.onclick=()=>showContact(b.dataset.inquiry));document.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>openPhoto(Number(b.dataset.photo)));document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));observer?.disconnect();if('IntersectionObserver'in window&&!prefersStill){document.documentElement.classList.add('motion-ready');observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.documentElement.classList.remove('motion-ready');updateHero()}
function setFilter(id){filter=id;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===id)));document.querySelectorAll('[data-group]').forEach(c=>{c.hidden=id!=='all'&&c.dataset.group!==id;if(!c.hidden)c.classList.add('visible')});document.querySelector('.collections')?.classList.toggle('filtered',id!=='all')}
function readingPage(){
 clearHeroCarousel();document.title=t('readingLink')+' · '+brand();
 app.innerHTML=`<div class="shell reading-page"><div class="album-topbar"><a href="#works">${esc(t('backWorks'))}</a><span>WORDS / SOURCES</span></div><div class="reading-intro"><span class="eyebrow">READING BETWEEN THE IMAGES</span><h1>${lines(t('readingTitle'))}</h1><p>${esc(t('readingIntro'))}</p></div><div class="reading-notes">${readingNotes.map((raw,i)=>{const n=I18n.note(raw,i);return `<article><span class="eyebrow">${pad(i+1)} / ${esc(n.place)}</span><h2>${esc(n.credit)}</h2><blockquote>${lines(n.translation)}</blockquote>${n.translation.replaceAll('\n',' ')===n.original.replaceAll(' / ',' ')?'':'<p class="reading-original">'+esc(n.original)+'</p>'}<a class="text-link" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer">${esc(t('readingCheck'))} <span>↗</span></a></article>`}).join('')}</div>${footer()}</div>`;
 window.scrollTo({top:0,behavior:'instant'});
}
function route(){
 applyHeader();
 if(location.hash==='#reading'){readingPage();return}
 const hash=location.hash,match=hash.match(/^#album\/([a-zA-Z0-9_-]+)$/),album=match&&albums.find(a=>a.id===({sunlight:'natural',street:'natural',umbrella:'natural'}[match[1]]||match[1]));
 if(album){albumPage(album);window.scrollTo({top:0,behavior:'instant'})}
 else if(hash==='#contact'||hash==='#works'){if(!document.querySelector('.hero'))home();requestAnimationFrame(()=>document.querySelector(hash)?.scrollIntoView({behavior:prefersStill?'instant':'smooth'}))}
 else{home();window.scrollTo({top:0,behavior:'instant'})}
}
function updateHero(){heroTick=false;if(prefersStill)return;let img=document.querySelector('.hero-slide.is-active .hero-visual:not(.hero-visual--contain) .hero-slide-image');if(img){let p=Math.min(1,Math.max(0,window.scrollY/(document.querySelector('.hero').offsetHeight||1)));img.style.transform='scale('+(1.035+p*.11)+')';img.style.filter='brightness('+(1-p*.16)+')'}}
window.addEventListener('scroll',()=>{if(!heroTick){heroTick=true;requestAnimationFrame(updateHero)}},{passive:true});window.addEventListener('hashchange',route);
function openPhoto(i){activeSlide=i;updateLightbox();$('lightbox').showModal();document.body.classList.add('modal-open')}
function updateLightbox(){const a=I18n.album(activeAlbum);$('large').src=imagePath(a.photos[activeSlide]);$('large').alt=t('photoAlt',{label:a.label,n:activeSlide+1});$('photo-count').textContent=pad(activeSlide+1)+' / '+pad(a.photos.length)}
function movePhoto(n){activeSlide=(activeSlide+n+activeAlbum.photos.length)%activeAlbum.photos.length;updateLightbox()}
$('previous').onclick=()=>movePhoto(-1);$('next').onclick=()=>movePhoto(1);$('close-lightbox').onclick=()=>$('lightbox').close();$('lightbox').onclose=()=>document.body.classList.remove('modal-open');$('lightbox').addEventListener('keydown',e=>{if(e.key==='ArrowLeft')movePhoto(-1);if(e.key==='ArrowRight')movePhoto(1)});let startX=0;$('large').addEventListener('touchstart',e=>startX=e.changedTouches[0].clientX,{passive:true});$('large').addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)movePhoto(dx<0?1:-1)},{passive:true});
function showContact(albumId){
 document.querySelectorAll('[data-contact-text]').forEach(el=>el.textContent=t(el.dataset.contactText));
 $('contact-title').innerHTML=lines(t('contactTitle'));
 $('inquiry-style').innerHTML='<option value="">'+esc(t('all'))+'</option>'+albums.map(a=>'<option value="'+a.id+'">'+esc(I18n.album(a).label)+'</option>').join('');
 $('inquiry-style').value=albums.some(a=>a.id===albumId)?albumId:'';
 $('contact-email-address').textContent=siteConfig.email;
 $('contact-dialog').showModal();document.body.classList.add('modal-open');
 updateDirectEmail();setupInquiryForm();
}
let inquiryConfig=null,inquiryConfigPromise=null,turnstilePromise=null,turnstileWidget=null,inquiryToken='',inquirySending=false;
const usesFormspree=()=>siteConfig.contactProvider==='formspree';
/* FORMSPREE_TRANSPORT_START */
function formspreeAddress(){
 try{
  const url=new URL(siteConfig.formspreeEndpoint||'');
  return url.protocol==='https:'&&url.hostname==='formspree.io'&&!url.port&&!url.username&&!url.password&&!url.search&&!url.hash&&/^\/f\/[a-z0-9]+$/i.test(url.pathname)?url.href:'';
 }catch{return ''}
}
async function submitFormspree(payload){
 const endpoint=formspreeAddress();if(!endpoint)throw Error('formUnavailable');
 const response=await fetch(endpoint,{
  method:'POST',mode:'cors',credentials:'omit',
  headers:{'Content-Type':'application/json','Accept':'application/json'},
  body:JSON.stringify({name:payload.name,email:payload.email,style:payload.style,date:payload.date,location:payload.location,message:payload.message,locale:payload.locale,subject:'Photography inquiry · '+siteConfig.brand.en,_gotcha:payload.website}),
  signal:AbortSignal.timeout(25000)
 });
 let result;try{result=await response.json()}catch{throw Error('formError')}
 if(!response.ok||result.ok!==true)throw Error(response.status===400||response.status===422?'formInvalid':'formError');
}
/* FORMSPREE_TRANSPORT_END */
function updateDirectEmail(){
 const a=albums.find(a=>a.id===$('inquiry-style').value);
 const fields=[['name','inquiry-name'],['email','inquiry-email'],['date','inquiry-date'],['location','inquiry-location'],['message','inquiry-message']];
 const body=[t('subject')+(a?' · '+I18n.album(a).label:''),'',...fields.map(([key,id])=>t(key)+': '+$(id).value)].join('\n');
 $('direct-email').href='mailto:'+siteConfig.email+'?subject='+encodeURIComponent(t('subject')+' · '+siteConfig.brand.en)+'&body='+encodeURIComponent(body);
}
function loadTurnstile(){
 if(window.turnstile)return Promise.resolve();
 if(!turnstilePromise)turnstilePromise=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;script.onload=resolve;script.onerror=()=>{turnstilePromise=null;script.remove();reject(Error('verification'))};document.head.appendChild(script)});
 return turnstilePromise;
}
async function setupInquiryForm(){
 $('send-inquiry').disabled=true;$('inquiry-status').textContent='';
 if(usesFormspree()){
  inquiryConfig={ready:Boolean(formspreeAddress()),provider:'formspree'};
  $('send-inquiry').disabled=!inquiryConfig.ready||inquirySending;
  if(!inquiryConfig.ready)$('inquiry-status').textContent=t('formUnavailable');
  return;
 }
 try{
  if(!inquiryConfigPromise)inquiryConfigPromise=fetch(siteConfig.contactEndpoint+'/config',{cache:'no-store',signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw Error('config');return r.json()}).catch(()=>({ready:false}));
  inquiryConfig=await inquiryConfigPromise;
  if(!inquiryConfig.ready||!inquiryConfig.siteKey){$('inquiry-status').textContent=t('formUnavailable');return}
  await loadTurnstile();
  if(!$('contact-dialog').open)return;
  if(turnstileWidget!==null)window.turnstile.remove(turnstileWidget);
  inquiryToken='';
  turnstileWidget=window.turnstile.render('#inquiry-verification',{
   sitekey:inquiryConfig.siteKey,action:'photography-inquiry',language:I18n.locale==='zh'?'zh-CN':I18n.locale,
   callback:token=>{inquiryToken=token;$('send-inquiry').disabled=inquirySending},
   'expired-callback':()=>{inquiryToken='';$('send-inquiry').disabled=true},
   'error-callback':()=>{inquiryToken='';$('send-inquiry').disabled=true;$('inquiry-status').textContent=t('formChallenge')}
  });
 }catch{$('inquiry-status').textContent=t('formError')}
}
$('inquiry-form').addEventListener('input',updateDirectEmail);
$('inquiry-style').addEventListener('change',updateDirectEmail);
$('close-contact').onclick=()=>$('contact-dialog').close();
$('contact-dialog').onclose=()=>{document.body.classList.remove('modal-open');if(turnstileWidget!==null&&window.turnstile){window.turnstile.remove(turnstileWidget);turnstileWidget=null}inquiryToken=''};
$('inquiry-form').onsubmit=async event=>{
 event.preventDefault();if(inquirySending)return;
 if(!inquiryConfig?.ready){$('inquiry-status').textContent=t('formUnavailable');return}
 if(!$('inquiry-form').reportValidity())return;
 if(!usesFormspree()&&!inquiryToken){$('inquiry-status').textContent=t('formChallenge');return}
 const a=albums.find(a=>a.id===$('inquiry-style').value);
 const payload={name:$('inquiry-name').value.trim(),email:$('inquiry-email').value.trim(),date:$('inquiry-date').value,location:$('inquiry-location').value.trim(),style:a?I18n.album(a).label:'',message:$('inquiry-message').value.trim(),locale:I18n.locale,website:$('inquiry-website').value,token:inquiryToken};
 inquirySending=true;$('send-inquiry').disabled=true;$('inquiry-status').textContent=t('formSending');$('inquiry-form').setAttribute('aria-busy','true');
 try{
  if(usesFormspree())await submitFormspree(payload);
  else{
  const response=await fetch(siteConfig.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(25000)});
  const result=await response.json();
  if(!response.ok||result.ok!==true){const key=result.error==='NOT_READY'?'formUnavailable':result.error==='TURNSTILE_FAILED'?'formChallenge':result.error==='INVALID_INPUT'?'formInvalid':'formError';throw Error(key)}
  }
  $('inquiry-status').textContent=t('formSuccess');$('inquiry-message').value='';updateDirectEmail();
 }catch(error){$('inquiry-status').textContent=t(['formUnavailable','formChallenge','formInvalid'].includes(error.message)?error.message:'formError')}
 finally{inquirySending=false;$('inquiry-form').removeAttribute('aria-busy');inquiryToken='';if(turnstileWidget!==null&&window.turnstile)window.turnstile.reset(turnstileWidget);$('send-inquiry').disabled=usesFormspree()?!Boolean(formspreeAddress()):true}
};
route();
