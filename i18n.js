(function(){
'use strict';
const data={
  "ui": {
    "en": {
      "works": "Photography",
      "contact": "Contact",
      "all": "All collections",
      "scroll": "SCROLL TO EXPLORE",
      "worksHeading": "Beauty, a promise of happiness.",
      "worksQuote": "Beauty is only the promise of happiness.",
      "worksCredit": "Stendhal · On Love · 17, note",
      "storyTitle": "Laughter,\nand good humour.",
      "storyQuote": "Nothing in the world is so irresistibly contagious as laughter and good humour.",
      "storyCredit": "Charles Dickens · A Christmas Carol · Stave III",
      "storyLink": "Explore these shared moments",
      "contactTitle": "A time\nfor everything.",
      "contactQuote": "To every thing there is a season, and a time to every purpose under the heaven.",
      "contactCredit": "Ecclesiastes 3:1 · KJV excerpt",
      "inquire": "Plan your session",
      "emailMe": "Email me",
      "base": "Based in Lubbock, Texas",
      "travel": "Available across the United States by arrangement. Travel expenses are quoted separately.",
      "serviceLine": "Lubbock · Texas · New Jersey · Across the US",
      "pricing": "Request a quote",
      "pricingDescription": "Share your preferred date, location and ideas. Session fees and travel expenses are agreed before booking.",
      "details": "SESSION DETAILS",
      "sessionTitle": "Live,\nand be happy.",
      "sessionQuote": "Live, then, and be happy.",
      "sessionCredit": "Alexandre Dumas · The Count of Monte Cristo · 117",
      "nextCollection": "NEXT COLLECTION",
      "backAll": "← All collections",
      "photoCount": "{n} photographs",
      "photoMeta": "Select a photograph to view it larger",
      "photoAlt": "{label} · photograph {n}",
      "posterPrevious": "Previous poster",
      "posterNext": "Next poster",
      "posterPause": "Pause slideshow",
      "posterPlay": "Play slideshow",
      "posterView": "View poster {n}",
      "photoPrevious": "Previous photograph",
      "photoNext": "Next photograph",
      "close": "Close",
      "readingLink": "Words & sources",
      "backTop": "Back to the top ↑",
      "readingTitle": "Between photographs,\nthe words we remember.",
      "readingIntro": "These excerpts are selected from the listed works. Chinese, Spanish, Korean and Japanese passages are our translations or abridgements of the originals or early English translations. Headings may be shortened or adapted for the page. Author, book and source links are listed below.",
      "readingCheck": "Read the source",
      "backWorks": "← Back to photography",
      "language": "Website language",
      "name": "Your name",
      "email": "Your email",
      "style": "Photography style",
      "date": "Preferred date (optional)",
      "location": "City / location",
      "message": "Tell me what you have in mind",
      "send": "Send inquiry",
      "privacy": "Your details are used to respond about your photography inquiry.",
      "formHint": "Tell me about your plans, or email me directly.",
      "formUnavailable": "Online inquiries are being prepared. Please email me directly for now.",
      "formSuccess": "Your inquiry has been submitted. Thank you — I will reply by email.",
      "formSending": "Sending your inquiry…",
      "formChallenge": "Please complete the verification, then try again.",
      "formError": "Your inquiry could not be sent. Please try again or email me directly.",
      "formInvalid": "Please check your name, email and message.",
      "subject": "Photography inquiry",
      "sourceLabel": "Excerpt / translation"
    },
    "es": {
      "works": "Fotografía",
      "contact": "Contacto",
      "all": "Todas las colecciones",
      "scroll": "DESLIZA PARA EXPLORAR",
      "worksHeading": "La belleza, una promesa de felicidad.",
      "worksQuote": "La belleza no es sino la promesa de la felicidad.",
      "worksCredit": "Stendhal · Del amor · 17, nota",
      "storyTitle": "La risa\ny el buen humor.",
      "storyQuote": "Nada en el mundo se contagia de manera tan irresistible como la risa y el buen humor.",
      "storyCredit": "Charles Dickens · Cuento de Navidad · III",
      "storyLink": "Descubrir estos encuentros",
      "contactTitle": "Todo tiene\nsu momento.",
      "contactQuote": "Todo tiene su estación, y cada propósito bajo el cielo tiene su momento.",
      "contactCredit": "Eclesiastés 3:1 · Traducción de KJV",
      "inquire": "Planear tu sesión",
      "emailMe": "Escríbeme",
      "base": "Con base en Lubbock, Texas",
      "travel": "Sesiones en todo Estados Unidos, previa coordinación. Los gastos de viaje se cotizan por separado.",
      "serviceLine": "Lubbock · Texas · Nueva Jersey · Todo EE. UU.",
      "pricing": "Solicitar presupuesto",
      "pricingDescription": "Cuéntame la fecha, el lugar y tus ideas. El precio y los gastos de viaje se acuerdan antes de reservar.",
      "details": "DETALLES DE LA SESIÓN",
      "sessionTitle": "Vive\ny sé feliz.",
      "sessionQuote": "Vive, pues, y sé feliz.",
      "sessionCredit": "Alexandre Dumas · El conde de Montecristo · 117",
      "nextCollection": "SIGUIENTE COLECCIÓN",
      "backAll": "← Todas las colecciones",
      "photoCount": "{n} fotografías",
      "photoMeta": "Selecciona una fotografía para ampliarla",
      "photoAlt": "{label} · fotografía {n}",
      "posterPrevious": "Cartel anterior",
      "posterNext": "Cartel siguiente",
      "posterPause": "Pausar presentación",
      "posterPlay": "Reanudar presentación",
      "posterView": "Ver cartel {n}",
      "photoPrevious": "Fotografía anterior",
      "photoNext": "Fotografía siguiente",
      "close": "Cerrar",
      "readingLink": "Citas y fuentes",
      "backTop": "Volver arriba ↑",
      "readingTitle": "Entre fotografías,\nlas palabras que recordamos.",
      "readingIntro": "Los fragmentos proceden de las obras indicadas. Las versiones en chino, español, coreano y japonés son traducciones o selecciones propias a partir de los originales o de antiguas traducciones al inglés. Los títulos pueden abreviarse o adaptarse a la página. Aquí figuran autores, obras y enlaces de consulta.",
      "readingCheck": "Consultar la fuente",
      "backWorks": "← Volver a fotografía",
      "language": "Idioma del sitio",
      "name": "Tu nombre",
      "email": "Tu correo electrónico",
      "style": "Estilo de fotografía",
      "date": "Fecha preferida (opcional)",
      "location": "Ciudad / lugar",
      "message": "Cuéntame tu idea",
      "send": "Enviar consulta",
      "privacy": "Usaremos tus datos para responder a tu consulta fotográfica.",
      "formHint": "Cuéntame tus planes o escríbeme directamente por correo.",
      "formUnavailable": "Estamos preparando las consultas en línea. Por ahora, escríbeme directamente por correo.",
      "formSuccess": "Tu consulta se ha enviado. Gracias; te responderé por correo.",
      "formSending": "Enviando tu consulta…",
      "formChallenge": "Completa la verificación y vuelve a intentarlo.",
      "formError": "No se pudo enviar la consulta. Inténtalo de nuevo o escríbeme directamente.",
      "formInvalid": "Revisa tu nombre, correo y mensaje.",
      "subject": "Consulta de fotografía",
      "sourceLabel": "Fragmento / traducción"
    },
    "zh": {
      "works": "摄影作品",
      "contact": "联系",
      "all": "全部作品",
      "scroll": "向下翻阅",
      "worksHeading": "美，是幸福的许诺。",
      "worksQuote": "美不过是幸福的许诺。",
      "worksCredit": "司汤达《论爱情》第17章注 · 节译",
      "storyTitle": "笑声，\n与好心情。",
      "storyQuote": "世上没有什么，比笑声和好心情更能使人不由自主地受到感染。",
      "storyCredit": "狄更斯《圣诞颂歌》第三节 · 节译",
      "storyLink": "翻开相聚的影像",
      "contactTitle": "万事，\n各有时节。",
      "contactQuote": "万事各有时节，天下每件事都有它的时辰。",
      "contactCredit": "《圣经·传道书》3:1 · 据KJV节译",
      "inquire": "约定拍摄时刻",
      "emailMe": "给我发邮件",
      "base": "常驻 Lubbock，Texas",
      "travel": "可协商前往全美拍摄，差旅费用另行确认。",
      "serviceLine": "Lubbock · Texas · New Jersey · 全美拍摄",
      "pricing": "联系询价",
      "pricingDescription": "告诉我拍摄日期、地点和想法，拍摄费用及差旅费会在预约前沟通确认。",
      "details": "拍摄方案",
      "sessionTitle": "活下去，\n并且幸福吧。",
      "sessionQuote": "那么，活下去，并且幸福吧。",
      "sessionCredit": "大仲马《基督山伯爵》第117章 · 节选自译",
      "nextCollection": "下一组作品",
      "backAll": "← 全部作品",
      "photoCount": "{n} 张作品",
      "photoMeta": "点击照片放大查看",
      "photoAlt": "{label} · 第{n}张照片",
      "posterPrevious": "上一张海报",
      "posterNext": "下一张海报",
      "posterPause": "暂停海报轮播",
      "posterPlay": "开始海报轮播",
      "posterView": "查看第{n}张海报",
      "photoPrevious": "上一张照片",
      "photoNext": "下一张照片",
      "close": "关闭",
      "readingLink": "引文与出处",
      "backTop": "回到页首 ↑",
      "readingTitle": "影像之间，\n读过的句子。",
      "readingIntro": "本版引文从所列作品中选取。中文、西班牙语、韩文和日文由本站据原文或早期英译本节译，标题可作节取、改写和排版断行。下面列出作者、作品和核对链接。",
      "readingCheck": "核对文本",
      "backWorks": "← 返回摄影作品",
      "language": "网站语言",
      "name": "你的称呼",
      "email": "你的邮箱",
      "style": "拍摄风格",
      "date": "希望日期（选填）",
      "location": "城市 / 地点",
      "message": "说说你的拍摄想法",
      "send": "发送留言",
      "privacy": "填写的信息仅用于回复本次摄影咨询。",
      "formHint": "可以在这里留下拍摄想法，也可以直接给我发邮件。",
      "formUnavailable": "站内留言正在准备中，请先直接通过邮箱联系我。",
      "formSuccess": "留言已提交，谢谢。我会通过邮件回复你。",
      "formSending": "正在发送留言…",
      "formChallenge": "请完成验证后重试。",
      "formError": "留言未能发送，请重试或直接通过邮箱联系。",
      "formInvalid": "请检查称呼、邮箱和留言内容。",
      "subject": "摄影咨询",
      "sourceLabel": "节选 / 自译"
    },
    "ko": {
      "works": "포트폴리오",
      "contact": "문의",
      "all": "전체 컬렉션",
      "scroll": "아래로 둘러보기",
      "worksHeading": "아름다움은 행복의 약속.",
      "worksQuote": "아름다움은 행복의 약속일 뿐이다.",
      "worksCredit": "스탕달 · 연애론 · 17장 주석",
      "storyTitle": "웃음,\n그리고 유쾌함.",
      "storyQuote": "이 세상에 웃음과 유쾌함만큼 거스를 수 없이 전염되는 것은 없다.",
      "storyCredit": "찰스 디킨스 · 크리스마스 캐럴 · 제3장",
      "storyLink": "함께한 순간 보기",
      "contactTitle": "모든 일에는\n때가 있습니다.",
      "contactQuote": "모든 것에는 계절이 있고, 하늘 아래 모든 일에는 때가 있다.",
      "contactCredit": "전도서 3:1 · KJV에서 번역",
      "inquire": "촬영 문의하기",
      "emailMe": "이메일 보내기",
      "base": "미국 텍사스주 러벅을 기반으로 활동합니다",
      "travel": "협의 후 미국 전역에서 촬영할 수 있습니다. 출장 경비는 별도로 안내합니다.",
      "serviceLine": "러벅 · 텍사스 · 뉴저지 · 미국 전역",
      "pricing": "견적 문의",
      "pricingDescription": "희망 날짜와 장소, 촬영 아이디어를 알려 주세요. 촬영비와 출장 경비는 예약 전에 협의합니다.",
      "details": "촬영 안내",
      "sessionTitle": "살아가세요,\n그리고 행복하세요.",
      "sessionQuote": "그러니 살아가고, 행복하세요.",
      "sessionCredit": "알렉상드르 뒤마 · 몬테크리스토 백작 · 117장",
      "nextCollection": "다음 컬렉션",
      "backAll": "← 전체 컬렉션",
      "photoCount": "사진 {n}장",
      "photoMeta": "사진을 선택하면 크게 볼 수 있습니다",
      "photoAlt": "{label} · 사진 {n}",
      "posterPrevious": "이전 포스터",
      "posterNext": "다음 포스터",
      "posterPause": "슬라이드 쇼 일시 정지",
      "posterPlay": "슬라이드 쇼 재생",
      "posterView": "포스터 {n} 보기",
      "photoPrevious": "이전 사진",
      "photoNext": "다음 사진",
      "close": "닫기",
      "readingLink": "인용문과 출처",
      "backTop": "맨 위로 ↑",
      "readingTitle": "사진 사이,\n기억에 남은 문장들.",
      "readingIntro": "인용문은 아래 작품에서 골랐습니다. 중국어·스페인어·한국어·일본어 문장은 원문이나 초기 영어 번역본을 바탕으로 직접 번역하거나 발췌했습니다. 제목은 화면에 맞게 줄이거나 바꿀 수 있습니다. 작가와 작품, 확인 링크를 함께 적었습니다.",
      "readingCheck": "원문 확인",
      "backWorks": "← 포트폴리오로 돌아가기",
      "language": "사이트 언어",
      "name": "이름",
      "email": "이메일",
      "style": "촬영 스타일",
      "date": "희망 날짜 (선택)",
      "location": "도시 / 장소",
      "message": "어떤 촬영을 원하시나요?",
      "send": "문의 보내기",
      "privacy": "입력한 정보는 이번 촬영 문의에 답변하는 데 사용합니다.",
      "formHint": "촬영 계획을 남겨 주시거나 이메일로 직접 연락해 주세요.",
      "formUnavailable": "온라인 문의를 준비하고 있습니다. 지금은 이메일로 직접 연락해 주세요.",
      "formSuccess": "문의가 접수되었습니다. 감사합니다. 이메일로 답변드리겠습니다.",
      "formSending": "문의 전송 중…",
      "formChallenge": "인증을 완료한 후 다시 시도해 주세요.",
      "formError": "문의를 전송하지 못했습니다. 다시 시도하거나 이메일로 연락해 주세요.",
      "formInvalid": "이름과 이메일, 문의 내용을 확인해 주세요.",
      "subject": "촬영 문의",
      "sourceLabel": "발췌 / 번역"
    },
    "ja": {
      "works": "作品",
      "contact": "連絡",
      "all": "すべての作品",
      "scroll": "下へスクロール",
      "worksHeading": "美しさは、幸福の約束。",
      "worksQuote": "美しさとは、幸福の約束にほかならない。",
      "worksCredit": "スタンダール · 恋愛論 · 第17章注",
      "storyTitle": "笑い、\nそして上機嫌。",
      "storyQuote": "この世で、笑いと上機嫌ほど抗いがたく人に伝わるものはない。",
      "storyCredit": "チャールズ・ディケンズ · クリスマス・キャロル · 第3節",
      "storyLink": "集いの瞬間を見る",
      "contactTitle": "すべてに、\nふさわしい時がある。",
      "contactQuote": "すべてには季節があり、天の下のあらゆる営みには時がある。",
      "contactCredit": "伝道の書 3:1 · KJVから翻訳",
      "inquire": "撮影を相談する",
      "emailMe": "メールを送る",
      "base": "テキサス州ラボックを拠点に活動しています",
      "travel": "ご相談のうえ米国全域で撮影可能です。交通費・宿泊費などは別途お見積もりします。",
      "serviceLine": "ラボック · テキサス · ニュージャージー · 米国全域",
      "pricing": "お見積もりのご相談",
      "pricingDescription": "ご希望の日程、場所、撮影のイメージをお知らせください。撮影料金と出張費はご予約前にご相談します。",
      "details": "撮影プラン",
      "sessionTitle": "生きて、\n幸せになってください。",
      "sessionQuote": "では、生きて、幸せになってください。",
      "sessionCredit": "アレクサンドル・デュマ · モンテ・クリスト伯 · 第117章",
      "nextCollection": "次の作品集",
      "backAll": "← すべての作品",
      "photoCount": "写真 {n} 枚",
      "photoMeta": "写真を選ぶと大きく表示できます",
      "photoAlt": "{label} · 写真 {n}",
      "posterPrevious": "前のポスター",
      "posterNext": "次のポスター",
      "posterPause": "スライドショーを一時停止",
      "posterPlay": "スライドショーを再生",
      "posterView": "ポスター {n} を見る",
      "photoPrevious": "前の写真",
      "photoNext": "次の写真",
      "close": "閉じる",
      "readingLink": "引用と出典",
      "backTop": "ページの先頭へ ↑",
      "readingTitle": "写真のあいだに、\n心に残る言葉を。",
      "readingIntro": "引用文は以下の作品から選びました。中国語、スペイン語、韓国語、日本語は原文または初期の英訳をもとに訳出・抜粋しています。見出しはページに合わせて短縮・改変することがあります。著者、作品名、確認用リンクを記載しています。",
      "readingCheck": "原文を確認",
      "backWorks": "← 作品に戻る",
      "language": "サイトの言語",
      "name": "お名前",
      "email": "メールアドレス",
      "style": "撮影スタイル",
      "date": "ご希望の日程（任意）",
      "location": "都市 / 場所",
      "message": "撮影のイメージをお聞かせください",
      "send": "問い合わせを送信",
      "privacy": "入力内容は今回の撮影のお問い合わせへの返信に使用します。",
      "formHint": "撮影のご希望をご記入いただくか、メールで直接ご連絡ください。",
      "formUnavailable": "オンラインのお問い合わせを準備中です。現在はメールで直接ご連絡ください。",
      "formSuccess": "お問い合わせを送信しました。ありがとうございます。メールでご返信します。",
      "formSending": "送信しています…",
      "formChallenge": "認証を完了してから、もう一度お試しください。",
      "formError": "送信できませんでした。もう一度お試しいただくか、メールでご連絡ください。",
      "formInvalid": "お名前、メールアドレス、メッセージをご確認ください。",
      "subject": "撮影のお問い合わせ",
      "sourceLabel": "抜粋 / 翻訳"
    }
  },
  "albums": {
    "en": {
      "retro": {
        "label": "Street portraits",
        "title": "The city is singing",
        "lead": "By day, Paris is the city speaking; by night, it is the city breathing.",
        "description": "And in this moment, it is the city singing.",
        "tag": "Streets / props / easy moments",
        "en": "Victor Hugo · Notre-Dame de Paris · III.2"
      },
      "graduation": {
        "label": "Graduation",
        "title": "Wait and hope",
        "lead": "Until the day when God shall deign to reveal the future to man, all human wisdom is summed up in these two words:",
        "description": "Wait and hope.",
        "tag": "Graduation / campus / shared milestones",
        "en": "Alexandre Dumas · The Count of Monte Cristo · 117"
      },
      "event": {
        "label": "Events",
        "title": "Laughter and good humour",
        "lead": "There is nothing in the world so irresistibly contagious as laughter and good-humour.",
        "description": "And their assembled friends being not a bit behindhand, roared out lustily.",
        "tag": "Gatherings / dance / atmosphere",
        "en": "Charles Dickens · A Christmas Carol · III"
      },
      "individual": {
        "label": "Personal portraits",
        "title": "Beauty, a promise of happiness",
        "lead": "Beauty is only the promise of happiness.",
        "description": "In a word, it is enough to think of a perfection in order to see it in that which you love.",
        "tag": "City / music / individuality",
        "en": "Stendhal · On Love · 17, note; 2"
      },
      "family": {
        "label": "Families",
        "title": "To know we are loved",
        "lead": "The supreme happiness of life consists in the conviction that one is loved; loved for one’s own sake—",
        "description": "let us say rather, loved in spite of one’s self.",
        "tag": "Family / autumn / connection",
        "en": "Victor Hugo · Les Misérables"
      },
      "wedding": {
        "label": "Weddings",
        "title": "Love never fails",
        "lead": "Beareth all things, believeth all things, hopeth all things, endureth all things.",
        "description": "Charity never faileth.",
        "tag": "Weddings / loved ones / real moments",
        "en": "1 Corinthians 13:7–8 · KJV"
      },
      "natural": {
        "label": "Natural portraits",
        "title": "How bright the sun",
        "lead": "How gloriously gleameth all nature to me! How bright the sun beameth, how fresh is the lea!",
        "description": "White blossoms are bursting the thickets among, and all the gay greenwood is ringing with song!",
        "tag": "Sunlight / streets / colour",
        "en": "Goethe · May Song"
      },
      "prom": {
        "label": "Prom",
        "title": "She danced, she turned",
        "lead": "She danced, she turned, she whirled rapidly about on an old Persian rug.",
        "description": "Each time that her radiant face passed before you, her great black eyes darted a flash of lightning at you.",
        "tag": "Prom / together / light-filled arcades",
        "en": "Victor Hugo · Notre-Dame de Paris · II.3"
      },
      "youth": {
        "label": "Youth portraits",
        "title": "A time to laugh, a time to dance",
        "lead": "A time to weep, and a time to laugh;",
        "description": "a time to mourn, and a time to dance.",
        "tag": "Tennis / outdoors / personality",
        "en": "Ecclesiastes 3:4 · KJV"
      },
      "atlas": {
        "label": "Portraits in place",
        "title": "Time is the architect",
        "lead": "The individual is effaced in these great masses; human intelligence is there summed up and totalized.",
        "description": "Time is the architect, the nation is the builder.",
        "tag": "Interiors / places / relaxed portraits",
        "en": "Victor Hugo · Notre-Dame de Paris · III.1"
      },
      "brooke": {
        "label": "Career milestones",
        "title": "The hero of my own life",
        "lead": "Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else,",
        "description": "these pages must show.",
        "tag": "A calling / outdoors / a new chapter",
        "en": "Charles Dickens · David Copperfield · 1"
      },
      "climb": {
        "label": "Climbing portraits",
        "title": "Courage, in motion",
        "lead": "@sea",
        "description": "",
        "tag": "Climbing / movement / what you love",
        "en": "Ernest Hemingway · The Old Man and the Sea"
      }
    },
    "es": {
      "retro": {
        "label": "Retratos urbanos",
        "title": "La ciudad está cantando",
        "lead": "De día, París es la ciudad que habla; de noche, es la ciudad que respira.",
        "description": "Y en este instante, es la ciudad que canta.",
        "tag": "Calles / objetos / naturalidad",
        "en": "Victor Hugo · Nuestra Señora de París · III.2"
      },
      "graduation": {
        "label": "Graduación",
        "title": "Esperar y tener esperanza",
        "lead": "Hasta el día en que Dios quiera revelar el porvenir al hombre, toda la sabiduría humana se resume en dos palabras:",
        "description": "esperar y tener esperanza.",
        "tag": "Graduación / campus / recuerdos compartidos",
        "en": "Alexandre Dumas · El conde de Montecristo · 117"
      },
      "event": {
        "label": "Eventos",
        "title": "La risa y el buen humor",
        "lead": "Nada en el mundo se contagia de manera tan irresistible como la risa y el buen humor.",
        "description": "Y sus amigos reunidos, sin quedarse atrás, soltaron grandes carcajadas.",
        "tag": "Encuentros / baile / ambiente",
        "en": "Charles Dickens · Cuento de Navidad · III"
      },
      "individual": {
        "label": "Retratos personales",
        "title": "La belleza, promesa de felicidad",
        "lead": "La belleza no es sino la promesa de la felicidad.",
        "description": "Basta pensar en una perfección para verla en aquello que amamos.",
        "tag": "Ciudad / música / personalidad",
        "en": "Stendhal · Del amor · 17, nota; 2"
      },
      "family": {
        "label": "Familias",
        "title": "Saber que nos aman",
        "lead": "La mayor felicidad de la vida consiste en estar convencidos de que somos amados; por lo que somos…",
        "description": "o, mejor dicho, a pesar de lo que somos.",
        "tag": "Familia / otoño / conexión",
        "en": "Victor Hugo · Los miserables"
      },
      "wedding": {
        "label": "Bodas",
        "title": "El amor no deja de ser",
        "lead": "El amor todo lo soporta, todo lo cree, todo lo espera, todo lo resiste.",
        "description": "El amor nunca falla.",
        "tag": "Bodas / seres queridos / instantes reales",
        "en": "1 Corintios 13:7–8 · KJV"
      },
      "natural": {
        "label": "Retratos naturales",
        "title": "Qué brillante es el sol",
        "lead": "¡Con qué esplendor brilla ante mí la naturaleza! ¡Qué luminoso es el sol, qué fresca la pradera!",
        "description": "Flores blancas brotan entre los arbustos, y el bosque verde resuena de canciones.",
        "tag": "Sol / calles / color",
        "en": "Goethe · Canción de mayo"
      },
      "prom": {
        "label": "Baile de graduación",
        "title": "Bailaba y giraba",
        "lead": "Bailaba, giraba, daba vueltas con rapidez sobre una vieja alfombra persa.",
        "description": "Cada vez que su rostro radiante pasaba ante ti, sus grandes ojos negros lanzaban un relámpago.",
        "tag": "Baile / compañía / galerías de luz",
        "en": "Victor Hugo · Nuestra Señora de París · II.3"
      },
      "youth": {
        "label": "Retratos juveniles",
        "title": "Tiempo de reír y de bailar",
        "lead": "Hay un tiempo para llorar y un tiempo para reír;",
        "description": "un tiempo para el duelo y un tiempo para bailar.",
        "tag": "Tenis / aire libre / identidad",
        "en": "Eclesiastés 3:4 · KJV"
      },
      "atlas": {
        "label": "Retratos y espacios",
        "title": "El tiempo es el arquitecto",
        "lead": "El individuo se borra en estas grandes masas; la inteligencia humana se reúne y se condensa en ellas.",
        "description": "El tiempo es el arquitecto; el pueblo, el constructor.",
        "tag": "Interiores / espacios / retratos relajados",
        "en": "Victor Hugo · Nuestra Señora de París · III.1"
      },
      "brooke": {
        "label": "Retratos profesionales",
        "title": "El protagonista de mi vida",
        "lead": "Si llegaré a ser el protagonista de mi propia vida, o si ese papel lo ocupará otra persona,",
        "description": "estas páginas habrán de mostrarlo.",
        "tag": "Vocación / aire libre / una nueva etapa",
        "en": "Charles Dickens · David Copperfield · 1"
      },
      "climb": {
        "label": "Retratos de escalada",
        "title": "El valor de seguir",
        "lead": "El ser humano no está hecho para la derrota.",
        "description": "",
        "tag": "Escalada / movimiento / pasión",
        "en": "Ernest Hemingway · El viejo y el mar"
      }
    },
    "ko": {
      "retro": {
        "label": "거리 인물 사진",
        "title": "도시가 노래한다",
        "lead": "낮에 파리에서 들려오는 소리는 도시가 말하는 소리이고, 밤에는 도시가 숨 쉬는 소리다.",
        "description": "그리고 지금은 도시가 노래하는 소리다.",
        "tag": "거리 / 소품 / 자연스러운 순간",
        "en": "빅토르 위고 · 노트르담 드 파리 · III.2"
      },
      "graduation": {
        "label": "졸업 사진",
        "title": "기다리고 희망하라",
        "lead": "신이 인간에게 미래를 보여 주는 날이 올 때까지, 인간의 모든 지혜는 두 마디로 모인다.",
        "description": "기다리고, 희망하라.",
        "tag": "졸업 / 캠퍼스 / 함께하는 기념",
        "en": "알렉상드르 뒤마 · 몬테크리스토 백작 · 117"
      },
      "event": {
        "label": "행사 기록",
        "title": "웃음과 유쾌함",
        "lead": "세상에 웃음과 유쾌함만큼 거스를 수 없이 전염되는 것은 없다.",
        "description": "함께 모인 친구들도 뒤질세라 큰 소리로 웃었다.",
        "tag": "모임 / 춤 / 현장의 분위기",
        "en": "찰스 디킨스 · 크리스마스 캐럴 · III"
      },
      "individual": {
        "label": "개인 인물 사진",
        "title": "아름다움은 행복의 약속",
        "lead": "아름다움은 행복의 약속일 뿐이다.",
        "description": "어떤 완벽함을 떠올리는 것만으로도, 사랑하는 대상 안에서 그것을 보게 된다.",
        "tag": "도시 / 음악 / 나다움",
        "en": "스탕달 · 연애론 · 17장 주석; 2장"
      },
      "family": {
        "label": "가족 사진",
        "title": "사랑받는다는 확신",
        "lead": "삶의 가장 큰 행복은 자신이 사랑받는다는 확신이다. 자기 자신이기에 사랑받는다는 것,",
        "description": "아니, 그런 자신임에도 사랑받는다는 것.",
        "tag": "가족 / 가을 / 마음의 연결",
        "en": "빅토르 위고 · 레 미제라블"
      },
      "wedding": {
        "label": "웨딩 사진",
        "title": "사랑은 사라지지 않는다",
        "lead": "사랑은 모든 것을 감싸고, 모든 것을 믿으며, 모든 것을 바라고, 모든 것을 견딘다.",
        "description": "사랑은 결코 사라지지 않는다.",
        "tag": "결혼 / 소중한 사람들 / 진실한 순간",
        "en": "고린도전서 13:7–8 · KJV 번역"
      },
      "natural": {
        "label": "자연광 인물 사진",
        "title": "햇살은 얼마나 밝은가",
        "lead": "내 앞에서 자연은 얼마나 찬란하게 빛나는가! 햇살은 얼마나 밝고, 들판은 얼마나 싱그러운가!",
        "description": "덤불 사이로 흰 꽃이 피어나고, 초록 숲에는 노랫소리가 울린다.",
        "tag": "햇살 / 거리 / 색채",
        "en": "괴테 · 오월의 노래"
      },
      "prom": {
        "label": "프롬 사진",
        "title": "그녀는 춤추고 돌아섰다",
        "lead": "그녀는 춤추고, 돌아서고, 낡은 페르시아 양탄자 위에서 빠르게 빙글빙글 돌았다.",
        "description": "빛나는 얼굴이 눈앞을 스칠 때마다, 커다란 검은 눈에서 번개 같은 빛이 번뜩였다.",
        "tag": "프롬 / 함께 / 빛이 드는 회랑",
        "en": "빅토르 위고 · 노트르담 드 파리 · II.3"
      },
      "youth": {
        "label": "청춘 사진",
        "title": "웃을 때, 춤출 때",
        "lead": "울 때가 있고, 웃을 때가 있다.",
        "description": "슬퍼할 때가 있고, 춤출 때가 있다.",
        "tag": "테니스 / 야외 / 개성",
        "en": "전도서 3:4 · KJV 번역"
      },
      "atlas": {
        "label": "공간 속 인물 사진",
        "title": "시간이 건축가다",
        "lead": "이 거대한 덩어리 속에서 개인은 사라지고, 인간의 지혜가 하나로 모인다.",
        "description": "시간은 건축가이며, 사람들은 건설자다.",
        "tag": "실내 / 공간 / 편안한 인물 사진",
        "en": "빅토르 위고 · 노트르담 드 파리 · III.1"
      },
      "brooke": {
        "label": "직업 기념 사진",
        "title": "내 삶의 주인공",
        "lead": "내가 내 삶의 주인공이 될지, 아니면 그 자리를 다른 누군가가 차지할지는,",
        "description": "이 페이지들이 보여 줄 것이다.",
        "tag": "소명 / 야외 / 새로운 시작",
        "en": "찰스 디킨스 · 데이비드 코퍼필드 · 1"
      },
      "climb": {
        "label": "클라이밍 사진",
        "title": "계속 나아가는 용기",
        "lead": "인간은 패배하도록 만들어지지 않았다.",
        "description": "",
        "tag": "클라이밍 / 움직임 / 좋아하는 것",
        "en": "어니스트 헤밍웨이 · 노인과 바다"
      }
    },
    "ja": {
      "retro": {
        "label": "街のポートレート",
        "title": "街が歌っている",
        "lead": "昼、パリから聞こえる音は街の語り声であり、夜は街の呼吸である。",
        "description": "そして今、それは街の歌声なのだ。",
        "tag": "街並み / 小道具 / 自然な瞬間",
        "en": "ヴィクトル・ユゴー · ノートルダム・ド・パリ · III.2"
      },
      "graduation": {
        "label": "卒業記念",
        "title": "待つこと、希望を持つこと",
        "lead": "神が人に未来を明かすその日まで、人間の知恵はすべて二つの言葉に集約される。",
        "description": "待つこと、そして希望を持つこと。",
        "tag": "卒業 / キャンパス / ともに残す記念",
        "en": "アレクサンドル・デュマ · モンテ・クリスト伯 · 117"
      },
      "event": {
        "label": "イベント記録",
        "title": "笑いと上機嫌",
        "lead": "この世で、笑いと上機嫌ほど抗いがたく人に伝わるものはない。",
        "description": "集まった友人たちも負けじと、声を上げて笑った。",
        "tag": "集い / ダンス / その場の空気",
        "en": "チャールズ・ディケンズ · クリスマス・キャロル · III"
      },
      "individual": {
        "label": "パーソナルポートレート",
        "title": "美しさは幸福の約束",
        "lead": "美しさとは、幸福の約束にほかならない。",
        "description": "ある完全さを思い浮かべるだけで、愛するものの中にそれを見いだすのだ。",
        "tag": "街 / 音楽 / 自分らしさ",
        "en": "スタンダール · 恋愛論 · 第17章注; 第2章"
      },
      "family": {
        "label": "家族写真",
        "title": "愛されているという確信",
        "lead": "人生最大の幸福は、自分が愛されていると確信すること。自分だから愛されること、",
        "description": "いや、こんな自分であっても、なお愛されていること。",
        "tag": "家族 / 秋 / つながり",
        "en": "ヴィクトル・ユゴー · レ・ミゼラブル"
      },
      "wedding": {
        "label": "ウェディング",
        "title": "愛は尽きることがない",
        "lead": "愛はすべてを受け止め、すべてを信じ、すべてを望み、すべてを耐え忍ぶ。",
        "description": "愛は尽きることがない。",
        "tag": "結婚 / 大切な人 / ありのままの瞬間",
        "en": "コリントの信徒への手紙一 13:7–8 · KJVから翻訳"
      },
      "natural": {
        "label": "自然光ポートレート",
        "title": "陽の光はこんなに明るい",
        "lead": "自然は私の前で、なんと輝かしく光ることか。太陽は明るく、草原はみずみずしい。",
        "description": "茂みには白い花がほころび、緑の森は歌声に満ちている。",
        "tag": "陽光 / 街 / 色彩",
        "en": "ゲーテ · 五月の歌"
      },
      "prom": {
        "label": "プロム",
        "title": "彼女は踊り、回っていた",
        "lead": "彼女は踊り、身をひるがえし、古いペルシャ絨毯の上をすばやく回っていた。",
        "description": "輝く顔が目の前をよぎるたび、大きな黒い瞳が稲妻のように光った。",
        "tag": "プロム / ふたり / 光の回廊",
        "en": "ヴィクトル・ユゴー · ノートルダム・ド・パリ · II.3"
      },
      "youth": {
        "label": "青春のポートレート",
        "title": "笑う時、踊る時",
        "lead": "泣く時があり、笑う時がある。",
        "description": "悲しむ時があり、踊る時がある。",
        "tag": "テニス / 屋外 / 個性",
        "en": "伝道の書 3:4 · KJVから翻訳"
      },
      "atlas": {
        "label": "空間とポートレート",
        "title": "時が建築家である",
        "lead": "この大きな塊の中で個人は姿を消し、人間の知恵が一つに集まっている。",
        "description": "時が建築家であり、人々がその造り手なのだ。",
        "tag": "室内 / 空間 / くつろいだ表情",
        "en": "ヴィクトル・ユゴー · ノートルダム・ド・パリ · III.1"
      },
      "brooke": {
        "label": "職業の記念写真",
        "title": "自分の人生の主人公",
        "lead": "私が自分の人生の主人公になるのか、それともその役を誰かほかの人が務めるのか。",
        "description": "それは、このページが明らかにするだろう。",
        "tag": "仕事への思い / 屋外 / 新しい章",
        "en": "チャールズ・ディケンズ · デイヴィッド・コパフィールド · 1"
      },
      "climb": {
        "label": "クライミング",
        "title": "進み続ける勇気",
        "lead": "人間は敗北するために作られたのではない。",
        "description": "",
        "tag": "クライミング / 動き / 好きなこと",
        "en": "アーネスト・ヘミングウェイ · 老人と海"
      }
    },
    "zh": {
      "retro": {
        "label": "复古街拍",
        "title": "城市在歌唱",
        "lead": "白天，巴黎传来的声音，是城市在说话；夜里，是城市在呼吸。",
        "description": "而此刻，是城市在歌唱。",
        "tag": "街头 / 道具 / 轻松随性",
        "en": "雨果《钟楼怪人》· 第三卷第二章 · 节译"
      },
      "graduation": {
        "label": "毕业纪念",
        "title": "等待，并且希望",
        "lead": "在上帝愿意向人揭开未来的那一天到来之前，人类的全部智慧都归结在两个词里：",
        "description": "等待，并且希望。",
        "tag": "毕业 / 校园 / 双人纪念",
        "en": "大仲马《基督山伯爵》· 第117章 · 节译"
      },
      "event": {
        "label": "活动纪实",
        "title": "笑声与好心情",
        "lead": "世上没有什么，比笑声和好心情更能使人不由自主地受到感染。",
        "description": "聚在一起的朋友，也一个不落地放声大笑起来。",
        "tag": "聚会 / 舞蹈 / 现场氛围",
        "en": "狄更斯《圣诞颂歌》· 第三节 · 节译"
      },
      "individual": {
        "label": "个性写真",
        "title": "美，是幸福的许诺",
        "lead": "美不过是幸福的许诺。",
        "description": "只须想到一种完美，便会在所爱的人身上看见它。",
        "tag": "城市 / 音乐 / 个性表达",
        "en": "司汤达《论爱情》· 第17章注与第2章 · 节译"
      },
      "family": {
        "label": "家庭亲子",
        "title": "确信自己被爱着",
        "lead": "人生最大的幸福，是确信自己被爱着；因为自己而被爱——",
        "description": "不如说，尽管如此，仍然被爱着。",
        "tag": "家庭 / 秋日 / 自然互动",
        "en": "雨果《悲惨世界》· 节译"
      },
      "wedding": {
        "label": "婚礼纪实",
        "title": "爱，永不止息",
        "lead": "爱承受一切，相信一切，期望一切，忍耐一切。",
        "description": "爱永不止息。",
        "tag": "婚礼 / 亲友 / 真实瞬间",
        "en": "《圣经·哥林多前书》13:7–8 · 据KJV节译"
      },
      "natural": {
        "label": "自然人像",
        "title": "阳光多么明亮",
        "lead": "大自然在我眼前，闪耀着怎样的光彩！阳光多么明亮，草地多么清新！",
        "description": "白花在灌木丛间绽放，欢欣的绿林，处处响着歌声。",
        "tag": "暖阳 / 街头 / 彩伞",
        "en": "歌德《五月之歌》· 据早期英译本节译"
      },
      "prom": {
        "label": "Prom 舞会",
        "title": "她舞着，她旋转着",
        "lead": "她舞着，转着，在一张旧波斯地毯上飞快地回旋。",
        "description": "每当那明亮的面庞转到眼前，她那双乌黑的大眼睛便闪出一道光。",
        "tag": "礼服 / 双人 / 长廊光影",
        "en": "雨果《钟楼怪人》· 第二卷第三章 · 节译"
      },
      "youth": {
        "label": "青春写真",
        "title": "欢笑有时，起舞有时",
        "lead": "有哭泣的时候，也有欢笑的时候；",
        "description": "有哀悼的时候，也有起舞的时候。",
        "tag": "网球 / 户外 / 个人写真",
        "en": "《圣经·传道书》3:4 · 据KJV节译"
      },
      "atlas": {
        "label": "空间人像",
        "title": "时间，是建筑师",
        "lead": "在这些庞大的建筑中，个人与艺术家的名字隐去了，人类的智慧在这里汇聚。",
        "description": "时间是建筑师，人民是建造者。",
        "tag": "室内 / 空间 / 自然肖像",
        "en": "雨果《钟楼怪人》· 第三卷第一章 · 节译"
      },
      "brooke": {
        "label": "职业主题写真",
        "title": "自己一生的主人公",
        "lead": "我会不会成为自己一生的主人公，还是由别人担任这个角色？",
        "description": "这些篇页自会说明。",
        "tag": "听诊器 / 户外 / 纪念肖像",
        "en": "狄更斯《大卫·科波菲尔》· 第1章 · 节译"
      },
      "climb": {
        "label": "攀岩写真",
        "title": "并非为失败而生",
        "lead": "人并不是为失败而造的。",
        "description": "",
        "tag": "攀岩 / 运动 / 兴趣记录",
        "en": "海明威《老人与海》· 短句自译"
      }
    }
  },
  "posters": {
    "en": {
      "hero-light": {
        "label": "Linger, beautiful moment",
        "title": "Stay awhile,\nso beautiful.",
        "intro": "If ever I say to the moment:\n“Stay awhile, you are so beautiful.”",
        "caption": "Goethe · Faust I · Study · our translation",
        "linkText": "View all photography"
      },
      "hero-prom": {
        "label": "She danced, she turned",
        "title": "She danced.\nShe turned.",
        "intro": "She whirled on an old Persian rug.\nEach time her radiant face passed,\nher dark eyes flashed like lightning.",
        "caption": "Victor Hugo · Notre-Dame de Paris · II.3 · excerpt",
        "linkText": "View Prom portraits"
      },
      "hero-together": {
        "label": "To know we are loved",
        "title": "To know\nwe are loved.",
        "intro": "The supreme happiness of life\nis the conviction that one is loved —\nfor one’s own sake, in spite of oneself.",
        "caption": "Victor Hugo · Les Misérables · excerpt",
        "linkText": "View family portraits"
      },
      "hero-wedding": {
        "label": "Weddings",
        "title": "A time to laugh, a time to dance",
        "intro": "A time to weep, and a time to laugh;\na time to mourn, and a time to dance.",
        "caption": "Ecclesiastes 3:4 · KJV",
        "linkText": "View youth portraits"
      },
      "hero-graduation": {
        "label": "Graduation",
        "title": "Wait\nand hope.",
        "intro": "Until the day when God shall deign to reveal the future to man, all human wisdom is summed up in these two words:",
        "caption": "Alexandre Dumas · The Count of Monte Cristo · 117",
        "linkText": "View graduation portraits"
      }
    },
    "es": {
      "hero-light": {
        "label": "Quédate, bello instante",
        "title": "Detente,\neres tan bello.",
        "intro": "Si alguna vez le digo al instante:\n«Detente, eres tan bello».",
        "caption": "Goethe · Fausto I · Gabinete de estudio · traducción propia",
        "linkText": "Ver todas las fotografías"
      },
      "hero-prom": {
        "label": "Bailaba y giraba",
        "title": "Bailaba.\nGiraba.",
        "intro": "Giraba sobre una vieja alfombra persa.\nCuando su rostro radiante pasaba,\nsus ojos negros lanzaban relámpagos.",
        "caption": "Victor Hugo · Nuestra Señora de París · II.3 · fragmento",
        "linkText": "Ver retratos de baile"
      },
      "hero-together": {
        "label": "Saber que nos aman",
        "title": "Saber\nque nos aman.",
        "intro": "La mayor felicidad de la vida\nes saber que somos amados:\npor lo que somos, a pesar de lo que somos.",
        "caption": "Victor Hugo · Los miserables · fragmento",
        "linkText": "Ver retratos familiares"
      },
      "hero-wedding": {
        "label": "Bodas",
        "title": "Tiempo de reír y de bailar",
        "intro": "Hay un tiempo para llorar y un tiempo para reír;\nun tiempo para el duelo y un tiempo para bailar.",
        "caption": "Eclesiastés 3:4 · KJV",
        "linkText": "Ver retratos juveniles"
      },
      "hero-graduation": {
        "label": "Graduación",
        "title": "Esperar y\ntener esperanza.",
        "intro": "Hasta el día en que Dios quiera revelar el porvenir al hombre, toda la sabiduría humana se resume en dos palabras:",
        "caption": "Alexandre Dumas · El conde de Montecristo · 117",
        "linkText": "Ver retratos de graduación"
      }
    },
    "ko": {
      "hero-light": {
        "label": "머물러 다오, 아름다운 순간",
        "title": "머물러 다오,\n아름다운 순간.",
        "intro": "내가 언젠가 그 순간에게 말한다면:\n“머물러 다오, 너는 그토록 아름다우니.”",
        "caption": "괴테 · 파우스트 I · 서재 · 직접 번역",
        "linkText": "전체 사진 보기"
      },
      "hero-prom": {
        "label": "그녀는 춤추고 돌아섰다",
        "title": "그녀는 춤추고,\n돌아섰다.",
        "intro": "낡은 페르시아 양탄자 위에서 돌아섰다.\n빛나는 얼굴이 스칠 때마다,\n검은 눈동자에서 번개처럼 빛이 났다.",
        "caption": "빅토르 위고 · 노트르담 드 파리 · II.3 · 발췌 번역",
        "linkText": "프롬 사진 보기"
      },
      "hero-together": {
        "label": "사랑받는다는 확신",
        "title": "사랑받는다는\n확신.",
        "intro": "삶의 가장 큰 행복은\n사랑받는다는 확신이다.\n자기 자신이기에, 그런 자신임에도.",
        "caption": "빅토르 위고 · 레 미제라블 · 발췌 번역",
        "linkText": "가족 사진 보기"
      },
      "hero-wedding": {
        "label": "웨딩 사진",
        "title": "웃을 때, 춤출 때",
        "intro": "울 때가 있고, 웃을 때가 있다.\n슬퍼할 때가 있고, 춤출 때가 있다.",
        "caption": "전도서 3:4 · KJV 번역",
        "linkText": "청춘 사진 보기"
      },
      "hero-graduation": {
        "label": "졸업 사진",
        "title": "기다리고\n희망하라.",
        "intro": "신이 인간에게 미래를 보여 주는 날이 올 때까지, 인간의 모든 지혜는 두 마디로 모인다.",
        "caption": "알렉상드르 뒤마 · 몬테크리스토 백작 · 117",
        "linkText": "졸업 사진 보기"
      }
    },
    "ja": {
      "hero-light": {
        "label": "とどまれ、美しい瞬間",
        "title": "とどまれ、\n美しい瞬間よ。",
        "intro": "もし私が、ある瞬間にこう言うなら。\n「とどまれ、お前はこれほど美しい」。",
        "caption": "ゲーテ · ファウスト I · 書斎 · 自訳",
        "linkText": "すべての写真を見る"
      },
      "hero-prom": {
        "label": "彼女は踊り、回っていた",
        "title": "彼女は踊り、\n回っていた。",
        "intro": "古いペルシャ絨毯の上で回っていた。\n輝く顔が目の前をよぎるたび、\n黒い瞳が稲妻のように光った。",
        "caption": "ヴィクトル・ユゴー · ノートルダム・ド・パリ · II.3 · 抜粋訳",
        "linkText": "プロムの写真を見る"
      },
      "hero-together": {
        "label": "愛されているという確信",
        "title": "愛されている\nという確信。",
        "intro": "人生最大の幸福は、\n愛されているという確信。\n自分だから、こんな自分であっても。",
        "caption": "ヴィクトル・ユゴー · レ・ミゼラブル · 抜粋訳",
        "linkText": "家族の写真を見る"
      },
      "hero-wedding": {
        "label": "ウェディング",
        "title": "笑う時、踊る時",
        "intro": "泣く時があり、笑う時がある。\n悲しむ時があり、踊る時がある。",
        "caption": "伝道の書 3:4 · KJVから翻訳",
        "linkText": "青春の写真を見る"
      },
      "hero-graduation": {
        "label": "卒業記念",
        "title": "待つこと、\n希望を持つこと。",
        "intro": "神が人に未来を明かすその日まで、人間の知恵はすべて二つの言葉に集約される。",
        "caption": "アレクサンドル・デュマ · モンテ・クリスト伯 · 117",
        "linkText": "卒業の写真を見る"
      }
    },
    "zh": {
      "hero-light": {
        "label": "停留吧，这一刻",
        "title": "请停留吧，\n你是如此美。",
        "intro": "若有一天，我对那一瞬说：\n“请停留吧，你是如此美。”",
        "caption": "歌德《浮士德》第一部 · 书斋 · 节选自译",
        "linkText": "查看全部摄影作品"
      },
      "hero-prom": {
        "label": "她舞着，她旋转着",
        "title": "她舞着，\n她旋转着。",
        "intro": "她在旧波斯地毯上飞快地回旋。\n明亮的面庞转到眼前，\n那双乌黑的眼睛便闪出一道光。",
        "caption": "雨果《钟楼怪人》第二卷第三章 · 节选自译",
        "linkText": "查看 Prom 舞会作品"
      },
      "hero-together": {
        "label": "确信自己被爱着",
        "title": "确信自己，\n被爱着。",
        "intro": "人生最大的幸福，\n是确信自己被爱着；\n因为自己而被爱，尽管如此仍被爱着。",
        "caption": "雨果《悲惨世界》· 节选自译",
        "linkText": "查看家庭亲子作品"
      },
      "hero-wedding": {
        "label": "婚礼纪实",
        "title": "欢笑有时，\n起舞有时。",
        "intro": "有哭泣的时候，也有欢笑的时候；\n有哀悼的时候，也有起舞的时候。",
        "caption": "《圣经·传道书》3:4 · 据KJV节译",
        "linkText": "查看青春写真"
      },
      "hero-graduation": {
        "label": "毕业纪念",
        "title": "等待，\n并且希望。",
        "intro": "在上帝愿意向人揭开未来的那一天到来之前，人类的全部智慧都归结在两个词里：",
        "caption": "大仲马《基督山伯爵》· 第117章 · 节译",
        "linkText": "查看毕业纪念作品"
      }
    }
  },
  "chapters": {
    "en": [
      [
        "Afternoon light",
        "How bright the sun beameth, how fresh is the lea! — Goethe · May Song"
      ],
      [
        "City streets",
        "By day, the city speaks; by night, it breathes. — Victor Hugo · Notre-Dame de Paris"
      ],
      [
        "A little colour",
        "White blossoms are bursting, and the greenwood is ringing with song. — Goethe · May Song"
      ]
    ],
    "es": [
      [
        "Luz de la tarde",
        "¡Qué luminoso es el sol, qué fresca la pradera! — Goethe · Canción de mayo"
      ],
      [
        "Calles de la ciudad",
        "De día la ciudad habla; de noche respira. — Victor Hugo · Nuestra Señora de París"
      ],
      [
        "Un poco de color",
        "Brotan flores blancas y el bosque resuena de canciones. — Goethe · Canción de mayo"
      ]
    ],
    "ko": [
      [
        "따뜻한 자연광",
        "햇살은 얼마나 밝고, 들판은 얼마나 싱그러운가! — 괴테 · 오월의 노래"
      ],
      [
        "도시의 거리",
        "낮에는 도시가 말하고, 밤에는 도시가 숨 쉰다. — 빅토르 위고 · 노트르담 드 파리"
      ],
      [
        "작은 색채",
        "흰 꽃이 피어나고, 초록 숲에는 노래가 울린다. — 괴테 · 오월의 노래"
      ]
    ],
    "ja": [
      [
        "午後の光",
        "太陽は明るく、草原はみずみずしい。— ゲーテ · 五月の歌"
      ],
      [
        "街の風景",
        "昼は街が語り、夜は街が呼吸する。— ヴィクトル・ユゴー · ノートルダム・ド・パリ"
      ],
      [
        "彩りを添えて",
        "白い花がほころび、緑の森は歌声に満ちる。— ゲーテ · 五月の歌"
      ]
    ]
  },
  "baselineAlbums": {
    "retro": {
      "id": "retro",
      "title": "城市在歌唱",
      "en": "雨果《钟楼怪人》· 第三卷第二章 · 节译",
      "label": "复古街拍",
      "tag": "街头 / 道具 / 轻松随性",
      "lead": "白天，巴黎传来的声音，是城市在说话；夜里，是城市在呼吸。",
      "description": "而此刻，是城市在歌唱。",
      "photos": [
        "retro-3184",
        "retro-3204",
        "retro-3386",
        "retro-3676",
        "retro-3241",
        "retro-3363",
        "retro-3455",
        "retro-3542"
      ],
      "cover": "retro-3184",
      "cardCover": "retro-3184"
    },
    "graduation": {
      "id": "graduation",
      "title": "等待，并且希望",
      "en": "大仲马《基督山伯爵》· 第117章 · 节译",
      "label": "毕业纪念",
      "tag": "毕业 / 校园 / 双人纪念",
      "lead": "在上帝愿意向人揭开未来的那一天到来之前，人类的全部智慧都归结在两个词里：",
      "description": "等待，并且希望。",
      "photos": [
        "graduation-04128",
        "graduation-04476",
        "graduation-04011",
        "graduation-04188",
        "graduation-04025",
        "graduation-04161",
        "graduation-04309",
        "graduation-04412"
      ],
      "cover": "graduation-04128",
      "cardCover": "graduation-04128"
    },
    "event": {
      "id": "event",
      "title": "笑声与好心情",
      "en": "狄更斯《圣诞颂歌》· 第三节 · 节译",
      "label": "活动纪实",
      "tag": "聚会 / 舞蹈 / 现场氛围",
      "lead": "世上没有什么，比笑声和好心情更能使人不由自主地受到感染。",
      "description": "聚在一起的朋友，也一个不落地放声大笑起来。",
      "photos": [
        "event-02355",
        "event-02541",
        "event-02454",
        "event-02228",
        "event-02555",
        "event-02326",
        "event-02442",
        "event-02574"
      ],
      "cover": "event-02355",
      "cardCover": "event-02355"
    },
    "individual": {
      "id": "individual",
      "title": "美，是幸福的许诺",
      "en": "司汤达《论爱情》· 第17章注与第2章 · 节译",
      "label": "个性写真",
      "tag": "城市 / 音乐 / 个性表达",
      "lead": "美不过是幸福的许诺。",
      "description": "只须想到一种完美，便会在所爱的人身上看见它。",
      "photos": [
        "individual-09279",
        "individual-08781",
        "individual-08867",
        "individual-09078",
        "individual-09103",
        "individual-09198",
        "individual-09590",
        "individual-09496"
      ],
      "cover": "individual-09279",
      "cardCover": "individual-09279"
    },
    "family": {
      "id": "family",
      "title": "确信自己被爱着",
      "en": "雨果《悲惨世界》· 节译",
      "label": "家庭亲子",
      "tag": "家庭 / 秋日 / 自然互动",
      "lead": "人生最大的幸福，是确信自己被爱着；因为自己而被爱——",
      "description": "不如说，尽管如此，仍然被爱着。",
      "photos": [
        "family-08189",
        "family-08152",
        "family-08158",
        "family-08166",
        "family-08098",
        "family-08204",
        "family-08090",
        "family-08220"
      ],
      "cover": "family-08189",
      "cardCover": "family-08220"
    },
    "wedding": {
      "id": "wedding",
      "title": "爱，永不止息",
      "en": "《圣经·哥林多前书》13:7–8 · 据KJV节译",
      "label": "婚礼纪实",
      "tag": "婚礼 / 亲友 / 真实瞬间",
      "lead": "爱承受一切，相信一切，期望一切，忍耐一切。",
      "description": "爱永不止息。",
      "photos": [
        "wedding-01546",
        "wedding-01606",
        "wedding-01650",
        "wedding-01576",
        "wedding-01684",
        "wedding-01695",
        "wedding-01705",
        "wedding-01731"
      ],
      "cover": "wedding-01576",
      "cardCover": "wedding-01576"
    },
    "natural": {
      "id": "natural",
      "title": "阳光多么明亮",
      "en": "歌德《五月之歌》· 据早期英译本节译",
      "label": "自然人像",
      "tag": "暖阳 / 街头 / 彩伞",
      "lead": "大自然在我眼前，闪耀着怎样的光彩！阳光多么明亮，草地多么清新！",
      "description": "白花在灌木丛间绽放，欢欣的绿林，处处响着歌声。",
      "photos": [
        "6682",
        "6729",
        "6735",
        "6786",
        "6852",
        "6792",
        "6871",
        "6905",
        "6924"
      ],
      "cover": "6682",
      "cardCover": "6682",
      "chapters": [
        {
          "title": "暖阳自然光",
          "description": "阳光多么明亮，草地多么清新！——歌德《五月之歌》· 节译",
          "start": 0,
          "end": 3
        },
        {
          "title": "城市街头",
          "description": "白天，是城市在说话；夜里，是城市在呼吸。——雨果《钟楼怪人》· 节译",
          "start": 3,
          "end": 6
        },
        {
          "title": "彩伞氛围",
          "description": "白花在灌木丛间绽放，绿林处处响着歌声。——歌德《五月之歌》· 节译",
          "start": 6,
          "end": 9
        }
      ],
      "photoScenes": {
        "6682": 0,
        "6729": 0,
        "6735": 0,
        "6786": 1,
        "6792": 1,
        "6852": 1,
        "6871": 2,
        "6905": 2,
        "6924": 2
      }
    },
    "prom": {
      "id": "prom",
      "title": "她舞着，她旋转着",
      "en": "雨果《钟楼怪人》· 第二卷第三章 · 节译",
      "label": "Prom 舞会",
      "tag": "礼服 / 双人 / 长廊光影",
      "lead": "她舞着，转着，在一张旧波斯地毯上飞快地回旋。",
      "description": "每当那明亮的面庞转到眼前，她那双乌黑的大眼睛便闪出一道光。",
      "photos": [
        "prom-05004",
        "prom-04638",
        "prom-04804",
        "prom-04930",
        "prom-05154",
        "prom-05321",
        "prom-05351",
        "prom-05303"
      ],
      "cover": "prom-05004",
      "cardCover": "prom-05154"
    },
    "youth": {
      "id": "youth",
      "title": "欢笑有时，起舞有时",
      "en": "《圣经·传道书》3:4 · 据KJV节译",
      "label": "青春写真",
      "tag": "网球 / 户外 / 个人写真",
      "lead": "有哭泣的时候，也有欢笑的时候；",
      "description": "有哀悼的时候，也有起舞的时候。",
      "photos": [
        "youth-03869",
        "youth-03956",
        "youth-04195",
        "youth-04111",
        "youth-04262",
        "youth-04321",
        "youth-04464",
        "youth-04533"
      ],
      "cover": "youth-03869",
      "cardCover": "youth-03956"
    },
    "atlas": {
      "id": "atlas",
      "title": "时间，是建筑师",
      "en": "雨果《钟楼怪人》· 第三卷第一章 · 节译",
      "label": "空间人像",
      "tag": "室内 / 空间 / 自然肖像",
      "lead": "在这些庞大的建筑中，个人与艺术家的名字隐去了，人类的智慧在这里汇聚。",
      "description": "时间是建筑师，人民是建造者。",
      "photos": [
        "atlas-0041",
        "atlas-0067",
        "atlas-0052",
        "atlas-0093",
        "atlas-0099"
      ],
      "cover": "atlas-0052",
      "cardCover": "atlas-0067"
    },
    "brooke": {
      "id": "brooke",
      "title": "自己一生的主人公",
      "en": "狄更斯《大卫·科波菲尔》· 第1章 · 节译",
      "label": "职业主题写真",
      "tag": "听诊器 / 户外 / 纪念肖像",
      "lead": "我会不会成为自己一生的主人公，还是由别人担任这个角色？",
      "description": "这些篇页自会说明。",
      "photos": [
        "brooke-0132",
        "brooke-0164",
        "brooke-0190",
        "brooke-0222",
        "brooke-0359",
        "brooke-0398",
        "brooke-0423",
        "brooke-0437"
      ],
      "cover": "brooke-0132",
      "cardCover": "brooke-0190"
    },
    "climb": {
      "id": "climb",
      "title": "并非为失败而生",
      "en": "海明威《老人与海》· 短句自译",
      "label": "攀岩写真",
      "tag": "攀岩 / 运动 / 兴趣记录",
      "lead": "人并不是为失败而造的。",
      "description": "",
      "photos": [
        "climb-1732",
        "climb-1824",
        "climb-1766",
        "climb-1800",
        "climb-1817",
        "climb-1833"
      ],
      "cover": "climb-1766",
      "cardCover": "climb-1766"
    }
  },
  "baselinePosters": {
    "hero-light": {
      "id": "hero-light",
      "photoId": "6682",
      "albumId": "",
      "label": "停留吧，这一刻",
      "eyebrow": "GOETHE / FAUST / THE MOMENT",
      "title": "请停留吧，\n你是如此美。",
      "intro": "若有一天，我对那一瞬说：\n“请停留吧，你是如此美。”",
      "caption": "歌德《浮士德》第一部 · 书斋 · 节选自译",
      "linkText": "查看全部摄影作品",
      "x": 50,
      "y": 50
    },
    "hero-prom": {
      "id": "hero-prom",
      "photoId": "prom-05154",
      "albumId": "prom",
      "label": "她舞着，她旋转着",
      "eyebrow": "VICTOR HUGO / NOTRE-DAME DE PARIS",
      "title": "她舞着，\n她旋转着。",
      "intro": "她在旧波斯地毯上飞快地回旋。\n明亮的面庞转到眼前，\n那双乌黑的眼睛便闪出一道光。",
      "caption": "雨果《钟楼怪人》第二卷第三章 · 节选自译",
      "linkText": "查看 Prom 舞会作品",
      "x": 50,
      "y": 50
    },
    "hero-together": {
      "id": "hero-together",
      "photoId": "family-08220",
      "albumId": "family",
      "label": "确信自己被爱着",
      "eyebrow": "VICTOR HUGO / LES MISÉRABLES",
      "title": "确信自己，\n被爱着。",
      "intro": "人生最大的幸福，\n是确信自己被爱着；\n因为自己而被爱，尽管如此仍被爱着。",
      "caption": "雨果《悲惨世界》· 节选自译",
      "linkText": "查看家庭亲子作品",
      "x": 50,
      "y": 50
    },
    "hero-wedding": {
      "id": "hero-wedding",
      "photoId": "wedding-01546",
      "albumId": "youth",
      "eyebrow": "ECCLESIASTES / YOUTH PORTRAITS",
      "x": 50,
      "y": 12,
      "label": "青春写真",
      "title": "欢笑有时，\n起舞有时。",
      "intro": "有哭泣的时候，也有欢笑的时候；\n有哀悼的时候，也有起舞的时候。",
      "caption": "《圣经·传道书》3:4 · 据KJV节译",
      "linkText": "查看青春写真"
    },
    "hero-graduation": {
      "id": "hero-graduation",
      "photoId": "graduation-04011",
      "albumId": "graduation",
      "eyebrow": "ALEXANDRE DUMAS / GRADUATION STORIES",
      "x": 50,
      "y": 38,
      "label": "毕业纪念",
      "title": "等待，\n并且希望。",
      "intro": "在上帝愿意向人揭开未来的那一天到来之前，人类的全部智慧都归结在两个词里：",
      "caption": "大仲马《基督山伯爵》· 第117章 · 节译",
      "linkText": "查看毕业纪念作品"
    }
  }
};

let notes=[],locale;
const choices=[['en','English'],['es','Español'],['zh','中文'],['ko','한국어'],['ja','日本語']];
const valid=l=>choices.some(c=>c[0]===l);
try{const q=new URL(location.href).searchParams.get('lang');locale=valid(q)?q:localStorage.getItem('photo-site-language')}catch{}
if(!valid(locale))locale='en';
function text(key,args={}){let value=data.ui[locale][key]??data.ui.en[key]??key;return String(value).replace(/\{(\w+)\}/g,(_,k)=>String(args[k]??''))}
function setLocale(value){if(!valid(value))return;locale=value;try{localStorage.setItem('photo-site-language',locale)}catch{};const url=new URL(location.href);url.searchParams.set('lang',locale);history.replaceState(null,'',url);document.documentElement.lang=locale==='zh'?'zh-CN':locale}
function localizedAlbum(a){const out={...a},baseline=data.baselineAlbums[a.id],translated=data.albums[locale]?.[a.id];if(!baseline||!translated)return out;for(const [k,v] of Object.entries(translated)){if(a[k]===baseline[k])out[k]=v==='@sea'?(notes[12]?.original||a[k]):v}if(a.chapters&&locale!=='zh'&&data.chapters[locale])out.chapters=a.chapters.map((c,i)=>{const b=baseline.chapters?.[i],r=data.chapters[locale]?.[i];return b&&r?{...c,title:c.title===b.title?r[0]:c.title,description:c.description===b.description?r[1]:c.description}:c});return out}
function localizedPoster(s){const b=data.baselinePosters[s.id],r=data.posters[locale]?.[s.id],out={...s};if(b&&r)for(const[k,v]of Object.entries(r))if(s[k]===b[k])out[k]=v;return out}
const noteAlbums=[null,'retro','graduation','event','individual','family','wedding','natural','prom','youth','atlas','brooke','climb'];
function localizedNote(n,i){const id=noteAlbums[i],a=id&&data.albums[locale]?.[id];let credit=a?.en||n.credit,translation=n.translation,place=a?.label||n.place;if(locale==='en')translation=i===0?'If ever I say to the moment: “Stay awhile, you are so beautiful.”':n.original.replace(/ \/ /g,'\n');else if(a)translation=[a.lead,a.description].filter(Boolean).join('');else if(i===0){translation=data.posters[locale]['hero-light'].intro;credit=data.posters[locale]['hero-light'].caption;place=data.posters[locale]['hero-light'].label}if(i===13){credit=text('contactCredit');translation=text('contactQuote');place=text('contact')}if(i===14){credit=text('sessionCredit');translation=text('sessionQuote');place=text('details')}if(i===15){credit={en:'John 1:5 · KJV excerpt',es:'Juan 1:5 · Traducción de KJV',zh:'《约翰福音》1:5 · 节译',ko:'요한복음 1:5 · KJV 번역',ja:'ヨハネによる福音書 1:5 · KJVから翻訳'}[locale];translation=footerQuote();place=text('backTop').replace(' ↑','')}if(i===0&&locale==='en'){credit=data.posters.en['hero-light'].caption;place='Homepage poster · Stay awhile'}return {...n,place,credit,translation}}
function footerQuote(){return {en:'And the light shineth in darkness.',es:'Y la luz brilla en la oscuridad.',zh:'光在暗处照耀。',ko:'빛은 어둠 속에서 빛난다.',ja:'光は闇の中に輝いている。'}[locale]}
document.documentElement.lang=locale==='zh'?'zh-CN':locale;
window.PortfolioI18n={get locale(){return locale},choices,text,setLocale,album:localizedAlbum,poster:localizedPoster,note:localizedNote,footerQuote,configureNotes(value){notes=value}};
})();
