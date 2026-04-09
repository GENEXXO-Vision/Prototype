const BRAND_ZONES = {
  'asos-dress': {
    gateway:'dress', name:'ASOS', tagline:'Fashion for all \u2014 thousands of dresses for every occasion and budget',
    color:'#1A0812', gradient:'linear-gradient(135deg,#1A0812,#2D0F1E)', logo:'AS',
    stats:{ followers:'67.2K', content:'2,400+', products:'8,500+' },
    products:[
      {name:'Satin Cowl Midi',desc:'Blush satin \u00B7 Cowl neck \u00B7 Occasion ready',price:'\u00A375.00',emoji:'\uD83D\uDC57'},
      {name:'Wrap Maxi Dress',desc:'Floral print \u00B7 Tiered skirt \u00B7 Sizes 4-26',price:'\u00A365.00',emoji:'\uD83D\uDC57'},
      {name:'Velvet Slip Dress',desc:'Midnight blue \u00B7 Adjustable straps \u00B7 Lined',price:'\u00A355.00',emoji:'\uD83D\uDC57'},
    ],
    feed:[
      {author:'ASOS',authorSub:'Official \u00B7 Just now',text:'New season occasion edit just dropped. 340 new dresses from mini to maxi, across every budget. Free next-day delivery for ASOS Premier members. Returns always free.',img:{fit:true,bg:'linear-gradient(135deg,#1A0812,#2D0F1E)',url:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 8.4K|\uD83D\uDCAC 1.1K|\u2197 567'},
      {author:'ASOS',authorSub:'Style Edit \u00B7 3h ago',text:'The wedding guest dress formula: one size up from your usual. Midi length. Nothing too body-con. Avoid white, ivory and anything that photographs the same as the bride. Our edit makes it simple.',engagement:'\u2661 12.1K|\uD83D\uDCAC 1.8K|\u2197 890'},
      {author:'ASOS',authorSub:'Inclusive Sizing \u00B7 1d ago',text:'Sizes 4 to 26 on every single style in our DressXX range. Not as an afterthought \u2014 every dress designed and fitted across the full size range. Fashion for all means all.',img:{fit:true,bg:'linear-gradient(135deg,#2D0F1E,#1A0812)',url:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 24.6K|\uD83D\uDCAC 3.2K|\u2197 1.8K'},
    ],
    communityPost:{author:'@rental_queen_rae',time:'5h ago',avatar:'linear-gradient(135deg,#7C3AED,#6D28D9)',text:'ASOS for the day-after event. Wedding on Saturday, brunch on Sunday \u2014 wore the ASOS satin midi for both. \u00A375 for a dress I will genuinely wear again. That is how it should work.',reply:{text:'That\u2019s exactly the brief we\u2019re designing to \u2014 dresses that work across occasions, not just one moment. Glad the satin midi delivered! Tag us in your next wear. \uD83D\uDC57',time:'4h ago'}},
    agent:{greeting:"Hi! I'm ASOS's style assistant on DressXX. I can help you find the perfect dress for any occasion, sort sizing, or check delivery options."},
  },

  'reformation': {
    gateway:'dress', name:'Reformation', tagline:'Making killer clothes that don\u2019t kill the planet \u2014 Brand Zone Partner on DressXX',
    color:'#9B2335', gradient:'linear-gradient(135deg,#9B2335,#C4384F,#7A1A28)', logo:'Rf',
    stats:{ followers:'42.8K', content:'1,100+', products:'180+' },
    products:[
      {name:'Winslow Dress',desc:'Deadstock fabric \u00B7 Midi length \u00B7 Six colourways',price:'\u00A3248.00',emoji:'\uD83D\uDC57'},
      {name:'Christie Midi',desc:'Linen blend \u00B7 Wrap style \u00B7 Carbon neutral shipping',price:'\u00A3218.00',emoji:'\uD83D\uDC57'},
      {name:'Remy Mini',desc:'Sustainable viscose \u00B7 Ruched detail \u00B7 Lined',price:'\u00A3188.00',emoji:'\uD83D\uDC57'},
    ],
    feed:[
      {author:'Reformation',authorSub:'Official \u00B7 2h ago',text:'The Winslow is back. Six new colourways including clay, forest, and our first ever print. Made from deadstock fabric in our LA facility. Carbon neutral. Every single one.',img:{fit:true,bg:'linear-gradient(135deg,#7A1A28,#9B2335)',url:'https://images.unsplash.com/photo-1566479179817-c0b5c4b5a98e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.8K|\uD83D\uDCAC 1.2K|\u2197 678'},
      {author:'Reformation',authorSub:'Sustainability \u00B7 4h ago',text:'Our 2026 sustainability report is live. 34% deadstock fabric. 89% renewable energy in production. Full supplier transparency for every garment. We\u2019re not perfect but we\u2019re honest about the journey.',engagement:'\u2661 15.4K|\uD83D\uDCAC 2.1K|\u2197 1.1K'},
      {author:'Reformation',authorSub:'New Arrival \u00B7 1d ago',text:'The Christie Midi in linen. Our most requested fabrication. Breathable, drapes beautifully, gets better with every wash. Natural dye. Zero synthetic fibre. Ships in our compostable packaging.',img:{fit:true,bg:'linear-gradient(135deg,#2D1A0F,#9B2335)',url:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 7.2K|\uD83D\uDCAC 890|\u2197 445'},
    ],
    communityPost:{author:'@sustainable_sofia',time:'3h ago',avatar:'linear-gradient(135deg,#16A34A,#15803D)',text:'Wearing my third Reformation dress this season. The Winslow in forest arrived yesterday. The quality per pound is genuinely the best in sustainable fashion. The fit is flawless every time.',reply:{text:'The Winslow in forest is one of our favourites too \u2014 the deadstock wool-blend holds its shape beautifully. Thank you for choosing to wear it differently. That\u2019s what we\u2019re here for. \u267B\uFE0F',time:'2h ago'}},
    agent:{greeting:"Hi! I'm Reformation's assistant on DressXX. I can help with sizing, fabric questions, sustainability queries, or finding the perfect dress for your next occasion."},
  },

  'new-balance': {
    gateway:'sneaker', name:'New Balance', tagline:'Made in USA & UK since 1906 \u2014 performance footwear for those who run the world',
    color:'#EF4444', gradient:'linear-gradient(135deg,#991B1B,#EF4444,#F87171)', logo:'NB',
    stats:{ followers:'41.2K', content:'1,800+', products:'234+' },
    products:[
      {name:'990v6 Made in USA',desc:'Premium USA construction \u00B7 ENCAP midsole \u00B7 Pigskin suede',price:'\u00A3249.00',emoji:'\uD83D\uDC5F'},
      {name:'2002R Protection Pack',desc:'N2 Foam \u00B7 ABZORB cushioning \u00B7 Weather-treated upper',price:'\u00A3149.00',emoji:'\uD83D\uDC5F'},
      {name:'1906R Sea Salt',desc:'Metallic upper \u00B7 ABZORB SBS \u00B7 Reflective details',price:'\u00A3139.00',emoji:'\uD83D\uDC5F'},
    ],
    feed:[
      {author:'New Balance',authorSub:'Official \u00B7 Just now',text:'The 990v6. Six months of wear testing in New England. Every upper panel refined. The ENCAP midsole updated for 2026. Made in our Flimby, UK and Lawrence, USA factories by craftspeople who have been building these shoes for decades. Worth every penny and every wait.',img:{fit:true,bg:'linear-gradient(135deg,#991B1B,#EF4444)',url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 18.4K|\uD83D\uDCAC 2.4K|\u2197 1.2K'},
      {author:'New Balance',authorSub:'Made in USA \u00B7 3h ago',text:'Inside the Lawrence, Massachusetts factory. The 990 has been made in this building since 1982. 43 years. Same craftspeople, same attention, same standard. In an industry that offshored everything, we stayed. That is not a marketing decision. It is a values decision.',engagement:'\u2661 24.6K|\uD83D\uDCAC 3.8K|\u2197 2.1K'},
      {author:'New Balance',authorSub:'Collaboration \u00B7 1d ago',text:'New Balance x Salehe Bembury 2002R dropping next month. Hand-textured suede upper, custom ENCAP colour blocking, and a story about texture and nature that only Salehe could tell. Follow the Salehe Brand Zone for early access.',img:{fit:true,bg:'linear-gradient(135deg,#EF4444,#991B1B)',url:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 31.2K|\uD83D\uDCAC 4.6K|\u2197 2.8K'},
    ],
    communityPost:{author:'@sole_archive',time:'3h ago',avatar:'linear-gradient(135deg,#F59E0B,#D97706)',text:'990v6 Made in USA arrived. Box quality alone tells you something different is happening here. The suede is exceptional, the ENCAP is firm but responsive, and the fit out of the box is perfect. This is what a \u00A3249 sneaker should feel like.',reply:{text:'The Flimby factory team will be glad to hear that \u2014 they spend weeks getting each season\u2019s 990 right before a single pair ships. The suede is hand-selected. Thank you for the trust. \uD83D\uDC5F',time:'2h ago'}},
    agent:{greeting:"Hi! I'm New Balance's AI on SneakerXX. I can help with sizing across the range, tell you about our Made in USA and UK factories, or find the right colourway for you."},
  },

  'salehe-bembury': {
    gateway:'sneaker', name:'Salehe Bembury', tagline:'Designer, creative director, and the most distinctive collab voice in footwear',
    color:'#6366F1', gradient:'linear-gradient(135deg,#4338CA,#6366F1,#818CF8)', logo:'SB',
    stats:{ followers:'19.8K', content:'234+', products:'8' },
    products:[
      {name:'NB 2002R Collab',desc:'Hand-textured suede \u00B7 Custom ENCAP \u00B7 Limited',price:'\u00A3189.00',emoji:'\uD83D\uDC5F'},
      {name:'Crocs Pollex Clog',desc:'Salehe x Crocs \u00B7 Sculpted form \u00B7 Four colourways',price:'\u00A3115.00',emoji:'\uD83E\uDDB4'},
      {name:'Versace Chain Reaction',desc:'Salehe x Versace \u00B7 Luxury collab \u00B7 Limited run',price:'\u00A3890.00',emoji:'\uD83D\uDC5F'},
    ],
    feed:[
      {author:'Salehe Bembury',authorSub:'Official \u00B7 Just now',text:'Q2 collaboration announcement: I cannot say who yet. But I can say it is the brand I have wanted to work with since I was 14 years old. The story we are telling with this shoe is unlike anything I have done before. Follow for the drop.',img:{fit:true,bg:'linear-gradient(135deg,#4338CA,#6366F1)',url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 34.2K|\uD83D\uDCAC 6.8K|\u2197 3.4K'},
      {author:'Salehe Bembury',authorSub:'Process \u00B7 3h ago',text:'Every collab I do starts with a question: what does this material want to be? The 2002R upper is a suede story. Suede has memory \u2014 it records where it has been. That is the concept. Texture is biography.',engagement:'\u2661 18.9K|\uD83D\uDCAC 2.8K|\u2197 1.4K'},
      {author:'Salehe Bembury',authorSub:'Design \u00B7 1d ago',text:'The Pollex Clog with Crocs is five years old this month. At the time, luxury sneaker people told me it was career suicide. It became the most discussed collab of 2021. Design is not about what the market expects. It is about what you believe.',img:{fit:true,bg:'linear-gradient(135deg,#6366F1,#4338CA)',url:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 22.4K|\uD83D\uDCAC 3.6K|\u2197 1.8K'},
    ],
    communityPost:{author:'@drop_culture_kai',time:'2h ago',avatar:'linear-gradient(135deg,#6366F1,#4338CA)',text:'Every Salehe collab tells a story that the shoe then carries forward. The Pollex Clog is not just a clog. The 2002R is not just a sneaker. You wear the concept not just the shoe. That is why these hold value.',reply:{text:'That is exactly the idea \u2014 if the concept is strong enough, the object carries it forward indefinitely. The shoe becomes a vessel for the story. Thank you for understanding that. It means everything. \uD83D\uDC5F',time:'1h ago'}},
    agent:{greeting:"Hi! I'm Salehe Bembury's AI on SneakerXX. I can tell you about upcoming collaborations, explain the concept behind each collab, or help you find and secure limited drops through our Brand Zone."},
  },

  'atomic': {
    gateway:'ski', name:'Atomic', tagline:'Race and freeride technology engineered at the limit \u2014 Founding Partner on SkiXX',
    color:'#EF4444', gradient:'linear-gradient(135deg,#EF4444,#DC2626,#B91C1C)', logo:'At',
    stats:{ followers:'28.4K', content:'1,100+', products:'140+' },
    products:[
      {name:'Redster X9S Carbon',desc:'World Cup race ski \u00B7 Full carbon \u00B7 Titanal frame',price:'\u00A3899.00',emoji:'\u26F7\uFE0F'},
      {name:'Bent 100',desc:'All-mountain freeride \u00B7 100mm waist \u00B7 Poplar core',price:'\u00A3649.00',emoji:'\u26F7\uFE0F'},
      {name:'Hawx Ultra 130',desc:'Race boot \u00B7 130 flex \u00B7 Full Tilt technology',price:'\u00A3549.00',emoji:'\uD83D\uDC5F'},
    ],
    feed:[
      {author:'Atomic',authorSub:'Official \u00B7 Just now',text:'The Redster X9S Carbon. Developed with Marcel Hirscher\u2019s Van Deer team and validated on the World Cup circuit. Full carbon cap construction, Titanal reinforcement, race-tuned geometry. The fastest Atomic we have ever made.',img:{fit:true,bg:'linear-gradient(135deg,#B91C1C,#DC2626)',url:'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.8K|\u2197 890'},
      {author:'Atomic',authorSub:'Technology \u00B7 3h ago',text:'AI ski tuning launched on SkiXX. Tell us your height, weight, boot sole length, skiing style and target terrain. Our algorithm builds your exact binding setup and edge angle recommendation. No more guessing at the service bench.',engagement:'\u2661 8.9K|\uD83D\uDCAC 1.2K|\u2197 567'},
      {author:'Atomic',authorSub:'Athlete Feature \u00B7 1d ago',text:'Mikaela Shiffrin on the Redster: \u201cI\u2019ve been on Atomic since I was 16. The X9S Carbon is the most responsive ski I\u2019ve ever raced on. The edge grip in soft conditions is unlike anything at this flex.\u201d 98 World Cup wins. One ski brand.',img:{fit:true,bg:'linear-gradient(135deg,#DC2626,#B91C1C)',url:'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 24.6K|\uD83D\uDCAC 3.4K|\u2197 1.8K'},
    ],
    communityPost:{author:'@race_day_rob',time:'4h ago',avatar:'linear-gradient(135deg,#EF4444,#DC2626)',text:'Atomic Redster GS on a groomed race course. Edge hold in firm morning snow is extraordinary. These skis do not forgive mistakes but they reward commitment. Exactly what a race ski should do.',reply:{text:'That\u2019s the Titanal frame doing its job \u2014 energy return is instant on firm conditions. Commit to the edge and the ski does the rest. See you on the podium. \u26F7\uFE0F',time:'3h ago'}},
    agent:{greeting:"Hi! I'm Atomic's AI on SkiXX. I can help with ski selection for your level and terrain, binding setup, boot fitting advice, or finding the right Atomic for your next season."},
  },

  'salomon': {
    gateway:'ski', name:'Salomon', tagline:'All-mountain equipment trusted from first run to last light \u2014 Brand Zone Partner on SkiXX',
    color:'#3B82F6', gradient:'linear-gradient(135deg,#1D4ED8,#3B82F6,#60A5FA)', logo:'Sa',
    stats:{ followers:'41.2K', content:'1,400+', products:'180+' },
    products:[
      {name:'QST 106',desc:'All-mountain freeride \u00B7 106mm waist \u00B7 Lightweight poplar',price:'\u00A3699.00',emoji:'\u26F7\uFE0F'},
      {name:'Stance 96',desc:'Versatile all-rounder \u00B7 96mm waist \u00B7 Carbon fibre reinforced',price:'\u00A3599.00',emoji:'\u26F7\uFE0F'},
      {name:'S/Pro Alpha 120',desc:'High-performance boot \u00B7 120 flex \u00B7 Customisable liner',price:'\u00A3499.00',emoji:'\uD83D\uDC5F'},
    ],
    feed:[
      {author:'Salomon',authorSub:'Official \u00B7 Just now',text:'The QST 106 for 2026. Redesigned tip rocker for better float in variable snow. Poplar-paulownia core for weight reduction without sacrificing torsional rigidity. Tested from Chamonix Vall\u00E9e Blanche to Verbier off-piste. This is what all-mountain means.',img:{fit:true,bg:'linear-gradient(135deg,#1D4ED8,#3B82F6)',url:'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.8K|\uD83D\uDCAC 1.3K|\u2197 678'},
      {author:'Salomon',authorSub:'Innovation \u00B7 3h ago',text:'Salomon Shift binding redesign for 2027: new alpine/touring mode switch is 40% faster. Pre-release safety redesigned with input from 200 professional guides. The safest Shift binding we have ever built.',engagement:'\u2661 7.2K|\uD83D\uDCAC 934|\u2197 445'},
      {author:'Salomon',authorSub:'Community \u00B7 1d ago',text:'Salomon Trail crew in Chamonix. Six ski patrollers on QST 106 for a full season. Zero safety incidents. 847 patrol days. The reliability data from professional users is the most honest feedback we get.',img:{fit:true,bg:'linear-gradient(135deg,#3B82F6,#1D4ED8)',url:'https://images.unsplash.com/photo-1519592022154-ba4af44dd799?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 5.6K|\uD83D\uDCAC 678|\u2197 289'},
    ],
    communityPost:{author:'@verbier_vince',time:'5h ago',avatar:'linear-gradient(135deg,#60A5FA,#3B82F6)',text:'Salomon QST 106 for my third Verbier season. Lifts opens to last run, every snow type. Deep pow, windboard, crud, hardpack. There is not a condition this ski cannot handle confidently. It is the one ski I would take if I could only take one.',reply:{text:'The Verbier terrain is exactly what we build the QST for \u2014 the variable snow conditions there test every aspect of an all-mountain ski. Three seasons is a serious endorsement. Thank you for the trust. \u26F7\uFE0F',time:'4h ago'}},
    agent:{greeting:"Hi! I'm Salomon's AI on SkiXX. I can help you find the right ski for your terrain and ability, understand binding compatibility, or get boot fitting advice for the S/Pro range."},
  },

  'quiksilver': {
    gateway:'surf', name:'Quiksilver', tagline:'Born in the surf \u2014 outfitting ocean athletes since 1969',
    color:'#0A1628', gradient:'linear-gradient(135deg,#0A1628,#001A3D,#0066CC)', logo:'Qk',
    stats:{ followers:'22.4K', content:'678', products:'340+' },
    products:[
      {name:'Highline Pro 19\u201d Boardshort',desc:'Recycled stretch fabric \u00B7 Competition fit \u00B7 5 colourways',price:'\u00A385.00',emoji:'\uD83C\uDFC4'},
      {name:'Syncro 4/3 Wetsuit',desc:'FluidFlex neoprene \u00B7 Chest zip \u00B7 Thermal lining',price:'\u00A3320.00',emoji:'\uD83C\uDF0A'},
      {name:'Radical Surf Cap',desc:'UPF 50+ \u00B7 Quick dry \u00B7 Adjustable fit',price:'\u00A328.00',emoji:'\uD83E\uDDE2'},
    ],
    feed:[
      {author:'Quiksilver',authorSub:'Official \u00B7 Just now',text:'The 2026 Highline Pro is here. Developed with our WSL athletes over 18 months of testing from Pipeline to Teahupoo. Recycled four-way stretch, bonded seams, competition cut. The best boardshort we have ever made.',img:{fit:true,bg:'linear-gradient(135deg,#0A1628,#001A3D)',url:'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 7.8K|\uD83D\uDCAC 934|\u2197 445'},
      {author:'Quiksilver',authorSub:'Athlete Feature \u00B7 3h ago',text:'Kelly Slater on the Highline Pro: \u201cI\u2019ve worn Quiksilver for 35 years. This is the first boardshort where I genuinely forgot I was wearing one.\u201d The greatest of all time. Still going.',engagement:'\u2661 18.4K|\uD83D\uDCAC 2.3K|\u2197 1.2K'},
      {author:'Quiksilver',authorSub:'Sustainability \u00B7 1d ago',text:'78% of our 2026 range made from recycled ocean plastic. The boardshort you wear might once have been the wave you rode. Full materials breakdown in the Brand Zone.',img:{fit:true,bg:'linear-gradient(135deg,#001A3D,#0A1628)',url:'https://images.unsplash.com/photo-1516092553335-4b6e4e1e4b98?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.2K|\uD83D\uDCAC 1.1K|\u2197 567'},
    ],
    communityPost:{author:'@tube_time_tommy',time:'4h ago',avatar:'linear-gradient(135deg,#0066CC,#0088FF)',text:'Quiksilver Syncro wetsuit for a full Irish winter season. Atlantic water, 8 degrees, no complaints. The thermal lining keeps you in for two hours without thinking about the cold. Worth every penny.',reply:{text:'Irish cold water surfing is the real test for any wetsuit \u2014 glad the Syncro delivered. Check out our new 5/4 Syncro for the really brutal sessions this winter. \uD83C\uDF0A',time:'3h ago'}},
    agent:{greeting:"Hi! I'm Quiksilver's AI on SurfXX. I can help with sizing, wetsuit selection for your water temperature, or finding the right boardshort for your style."},
  },

  'magic-seaweed': {
    gateway:'surf', name:'Magic Seaweed', tagline:'The world\u2019s most trusted surf forecast \u2014 since 1999',
    color:'#0066CC', gradient:'linear-gradient(135deg,#0066CC,#0088FF,#004499)', logo:'MS',
    stats:{ followers:'89.4K', content:'2,400+', products:'3' },
    products:[
      {name:'MSW Pro Forecast',desc:'7-day HD forecast \u00B7 Swell period breakdown \u00B7 Wind mapping',price:'\u00A39.99/mo',emoji:'\uD83C\uDF0A'},
      {name:'Annual Pro Pass',desc:'Full year access \u00B7 All features \u00B7 Best value',price:'\u00A379.99/yr',emoji:'\u2B50'},
      {name:'API Access',desc:'Integrate MSW data into your platform or app',price:'Custom',emoji:'\uD83D\uDD27'},
    ],
    feed:[
      {author:'Magic Seaweed',authorSub:'Official \u00B7 Just now',text:'SWELL ALERT: North Atlantic generating exceptional energy. Nazare north canyon showing 40-50ft wave faces by Saturday. Hossegor 10-12ft Friday through Sunday. Cornwall 6-8ft weekend. Full break-by-break detail in the Brand Zone.',img:{fit:true,bg:'linear-gradient(135deg,#004499,#0066CC)',url:'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 34.2K|\uD83D\uDCAC 4.8K|\u2197 2.4K'},
      {author:'Magic Seaweed',authorSub:'Forecast Tech \u00B7 3h ago',text:'How our AI surf model works: 16 global weather models, 2,400 breaks with unique bathymetric profiles, local wind adjustments from our network of 340 surf meteorologists. Your break, your forecast.',engagement:'\u2661 8.9K|\uD83D\uDCAC 1.2K|\u2197 567'},
      {author:'Magic Seaweed',authorSub:'Community \u00B7 1d ago',text:'25 years of surf forecasting. We\u2019ve come a long way from the original 5-day model. Now running AI-enhanced 16-day forecasts with swell period, energy, and crowd prediction. Still free for basic access. Always will be.',img:{fit:true,bg:'linear-gradient(135deg,#0088FF,#0066CC)',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.8K|\u2197 934'},
    ],
    communityPost:{author:'@ocean_anna',time:'6h ago',avatar:'linear-gradient(135deg,#16A34A,#15803D)',text:'MSW Pro absolutely essential for the Bali trip. Predicted the Uluwatu 6ft dawn swell 5 days out, accuracy was within half a foot. I have used every surf forecasting app and nothing comes close.',reply:{text:'Bali is one of our most complex forecasting environments \u2014 the way Indian Ocean swells interact with the reef bathymetry is fascinating to model. Glad it delivered your best sessions! \uD83C\uDFC4',time:'5h ago'}},
    agent:{greeting:"Hi! I'm Magic Seaweed's AI on SurfXX. I can give you the latest forecast for any break, explain swell conditions, or help you plan a surf trip around the best windows."},
  },

  'wahoo': {
    gateway:'cycle', name:'Wahoo', tagline:'Smart trainers and cycling computers for those obsessed with watts',
    color:'#F5C400', gradient:'linear-gradient(135deg,#F5C400,#FFD700,#D4A800)', logo:'Wh',
    stats:{ followers:'31.2K', content:'890+', products:'24' },
    products:[
      {name:'KICKR Core Smart Trainer',desc:'1500w resistance \u00B7 ±1% power accuracy \u00B7 ERG mode',price:'\u00A3699.00',emoji:'\uD83D\uDEB4'},
      {name:'ELEMNT Roam 2 GPS',desc:'3.5\u201d colour display \u00B7 17hr battery \u00B7 Climb pro',price:'\u00A3349.00',emoji:'\uD83D\uDCF1'},
      {name:'TICKR X Heart Rate',desc:'Running dynamics \u00B7 ANT+ & Bluetooth \u00B7 Built-in memory',price:'\u00A379.00',emoji:'\u2764\uFE0F'},
    ],
    feed:[
      {author:'Wahoo',authorSub:'Official \u00B7 Just now',text:'KICKR Move is here. The first smart trainer that moves with you \u2014 10 degrees of fore/aft and lateral motion. Your indoor rides now engage the same stabilising muscles as outdoor cycling. Game changing.',img:{fit:true,bg:'linear-gradient(135deg,#1a1a00,#0F0F0F)',url:'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.8K|\u2197 890'},
      {author:'Wahoo',authorSub:'Training Science \u00B7 3h ago',text:'New research with Team Visma confirms: 12 weeks on the KICKR with structured ERG workouts produces the same FTP gains as 16 weeks of outdoor training. The control environment makes the difference.',engagement:'\u2661 8.9K|\uD83D\uDCAC 1.1K|\u2197 567'},
      {author:'Wahoo',authorSub:'Product \u00B7 1d ago',text:'ELEMNT Roam 2 firmware update live: AI-powered route recalculation based on your real-time power output and fatigue index. Never bonk on a long ride again.',img:{fit:true,bg:'linear-gradient(135deg,#0F0F0F,#1a1a00)',url:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 6.8K|\uD83D\uDCAC 890|\u2197 389'},
    ],
    communityPost:{author:'@watts_wizard_will',time:'2h ago',avatar:'linear-gradient(135deg,#F5C400,#FFD700)',text:'KICKR + ELEMNT Roam combo for six months. FTP from 267 to 312w. The ERG mode accuracy is unlike anything I have trained on. If you are serious about watts, this is the ecosystem.',reply:{text:'Those numbers are exceptional \u2014 16.9% FTP improvement is genuinely elite level. The ERG precision is what makes structured training work. Keep going \u2014 share your six-month update with the community! \uD83D\uDEB4',time:'1h ago'}},
    agent:{greeting:"Hi! I'm Wahoo's AI on CycleXX. I can help with trainer setup, training plan advice, ELEMNT configuration, or finding the right Wahoo product for your goals."},
  },

  'rapha': {
    gateway:'cycle', name:'Rapha', tagline:'Premium cycling apparel for those who ride because they must',
    color:'#CC0000', gradient:'linear-gradient(135deg,#CC0000,#991A1A,#7A0000)', logo:'Ra',
    stats:{ followers:'45.6K', content:'1,200+', products:'180+' },
    products:[
      {name:'Pro Team Aero Jersey',desc:'Wind tunnel tested \u00B7 UCI legal \u00B7 GORE-TEX SHAKEDRY',price:'\u00A3260.00',emoji:'\uD83D\uDEB4'},
      {name:'Classic Bib Short II',desc:'Elastic Interface pad \u00B7 4-way stretch \u00B7 6 panel',price:'\u00A3220.00',emoji:'\uD83D\uDEB4'},
      {name:'Core Rain Jacket',desc:'100% recycled \u00B7 Packable \u00B7 Taped seams',price:'\u00A3145.00',emoji:'\uD83E\uDDE5'},
    ],
    feed:[
      {author:'Rapha',authorSub:'Official \u00B7 Just now',text:'The Pro Team Aero Jersey for 2026. Six WorldTour teams. Wind tunnel at TotalEnergies. Every gram of fabric validated against performance data. Available only through Rapha Brand Zones. This is what racing looks like.',img:{fit:true,bg:'linear-gradient(135deg,#7A0000,#CC0000)',url:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 11.2K|\uD83D\uDCAC 1.6K|\u2197 778'},
      {author:'Rapha',authorSub:'Community \u00B7 3h ago',text:'Rapha Cycling Club new rides announced. 180 cities. Every Saturday. Every level. Coffee at the end is non-negotiable. Find your local chapter in the Brand Zone.',engagement:'\u2661 9.4K|\uD83D\uDCAC 1.2K|\u2197 567'},
      {author:'Rapha',authorSub:'Craft \u00B7 1d ago',text:'How we build the Classic Bib Short II: six panels, four-way stretch, Elastic Interface chamois developed over four years with 500 test riders. The most important 28cm of any cycling kit.',img:{fit:true,bg:'linear-gradient(135deg,#991A1A,#CC0000)',url:'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 7.8K|\uD83D\uDCAC 934|\u2197 445'},
    ],
    communityPost:{author:'@gravel_grace',time:'4h ago',avatar:'linear-gradient(135deg,#D97706,#B45309)',text:'Rapha Core kit for 8 days of Pyrenees bikepacking. Washed it every other night in a hostel sink. Dried overnight. Performed as well on day 8 as day 1. That is what premium means in cycling kit.',reply:{text:'The Pyrenees in the Core kit \u2014 that\u2019s exactly the use case we design for. The quick-dry finish was specifically engineered for multi-day adventures. See you on the road. \uD83D\uDEB4',time:'3h ago'}},
    agent:{greeting:"Hi! I'm Rapha's AI on CycleXX. I can help with sizing, finding the right kit for your riding style, or locating your nearest Rapha Cycling Club chapter."},
  },

  'garmin-marine': {
    gateway:'sail', name:'Garmin Marine', tagline:'Navigation technology trusted by ocean racers and weekend sailors alike',
    color:'#1B3A6B', gradient:'linear-gradient(135deg,#0A1628,#1B3A6B,#2A4A8B)', logo:'GM',
    stats:{ followers:'19.8K', content:'456', products:'67' },
    products:[
      {name:'GPSMAP 923xsv',desc:'9\u201d chartplotter \u00B7 Built-in sonar \u00B7 BlueChart g3',price:'\u00A31,299.00',emoji:'\uD83D\uDDFA\uFE0F'},
      {name:'Quatix 7 Sapphire',desc:'Marine smartwatch \u00B7 Auto-tack \u00B7 Sailing analytics',price:'\u00A3799.00',emoji:'\u231A'},
      {name:'VHF 315i Radio',desc:'Built-in GPS \u00B7 DSC distress \u00B7 Floating design',price:'\u00A3299.00',emoji:'\uD83D\uDCE1'},
    ],
    feed:[
      {author:'Garmin Marine',authorSub:'Official \u00B7 Just now',text:'GPSMAP 923xsv firmware update: new AI weather routing integrates GRIB files directly into the chartplotter. Route around developing systems without leaving the helm. Tested by the Ocean Race fleet.',img:{fit:true,bg:'linear-gradient(135deg,#0A1628,#1B3A6B)',url:'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 4.2K|\uD83D\uDCAC 523|\u2197 189'},
      {author:'Garmin Marine',authorSub:'Ocean Racing \u00B7 3h ago',text:'Eleven Vendee Globe boats running Garmin Marine chartplotters. Charlie Dalin\u2019s record-breaking run was navigated on the GPSMAP 1243xsv. When the Southern Ocean demands perfection, this is the standard.',engagement:'\u2661 8.9K|\uD83D\uDCAC 1.2K|\u2197 567'},
      {author:'Garmin Marine',authorSub:'Product \u00B7 1d ago',text:'Quatix 7 Sapphire now integrates with ActiveCaptain for real-time marina availability and tidal gate planning. Anchor alarm, auto-tack, race timer \u2014 everything your wrist needs at the helm.',img:{fit:true,bg:'linear-gradient(135deg,#1B3A6B,#2A4A8B)',url:'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 3.6K|\uD83D\uDCAC 412|\u2197 156'},
    ],
    communityPost:{author:'@nav_nadia',time:'2h ago',avatar:'linear-gradient(135deg,#0066CC,#0044AA)',text:'Garmin GPSMAP routed us around a North Sea low that could have been genuinely dangerous. The AI routing update is not a gimmick \u2014 it is the most important safety feature added to chartplotters in years.',reply:{text:'Navigation safety is our first priority \u2014 the routing AI was two years in development with professional weather routing partners. Glad it delivered when it mattered. Stay safe out there. \u26F5',time:'1h ago'}},
    agent:{greeting:"Hi! I'm Garmin Marine's AI on SailXX. I can help with product selection, chartplotter setup, routing queries, or finding the right Garmin solution for your vessel."},
  },

  'helly-hansen': {
    gateway:'sail', name:'Helly Hansen', tagline:'Protecting those who work, race and play in the harshest ocean conditions since 1877',
    color:'#C9A84C', gradient:'linear-gradient(135deg,#C9A84C,#B8963A,#8B6914)', logo:'HH',
    stats:{ followers:'28.4K', content:'890+', products:'240+' },
    products:[
      {name:'Aegir Ocean Jacket',desc:'20,000mm waterproofing \u00B7 Sealed seams \u00B7 Harness compatible',price:'\u00A3649.00',emoji:'\uD83E\uDDE5'},
      {name:'Foil Pro Bib Trouser',desc:'Racing cut \u00B7 4-way stretch \u00B7 Reinforced seat',price:'\u00A3349.00',emoji:'\uD83E\uDDE5'},
      {name:'Lifa Active Base Layer',desc:'Moisture transport \u00B7 Anti-odour \u00B7 Quick dry',price:'\u00A389.00',emoji:'\uD83E\uDDE5'},
    ],
    feed:[
      {author:'Helly Hansen',authorSub:'Official \u00B7 Just now',text:'The Aegir Ocean Jacket \u2014 born in the Southern Ocean, refined by 12 Ocean Race campaigns. 20,000mm hydrostatic head. Double-sealed seams. Integrated harness compatibility. When conditions turn critical, this is what stands between you and the sea.',img:{fit:true,bg:'linear-gradient(135deg,#0A1628,#1B3A6B)',url:'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 6.8K|\uD83D\uDCAC 789|\u2197 334'},
      {author:'Helly Hansen',authorSub:'Ocean Race \u00B7 3h ago',text:'Our Ocean Race sailing team wore the Aegir jacket for 25,000 nautical miles. Through the Southern Ocean, around Cape Horn, into the North Atlantic storm. Zero failures. That is the standard we hold ourselves to.',engagement:'\u2661 9.2K|\uD83D\uDCAC 1.1K|\u2197 567'},
      {author:'Helly Hansen',authorSub:'Heritage \u00B7 1d ago',text:'1877: Captain Helly Hansen began waterproofing canvas with linseed oil to protect Norwegian fishermen. 149 years later, the mission is identical. Keep the people who work on the water safe, warm and dry.',img:{fit:true,bg:'linear-gradient(135deg,#B8963A,#C9A84C)',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.6K|\u2197 789'},
    ],
    communityPost:{author:'@blue_water_ben',time:'3h ago',avatar:'linear-gradient(135deg,#C9A84C,#B8963A)',text:'Atlantic crossing in the Aegir jacket. 21 days. Three squalls including one genuine gale. Jacket stayed completely dry inside. At 21 degrees in the tropics the venting worked perfectly. This is the one.',reply:{text:'An Atlantic crossing is the ultimate test \u2014 three squalls and a gale is exactly the conditions the Aegir was built for. Congratulations on your crossing. The ocean gives nothing for free. \u26F5',time:'2h ago'}},
    agent:{greeting:"Hi! I'm Helly Hansen's AI on SailXX. I can help with gear selection for your sailing conditions, sizing, or finding the right protection for offshore or inshore sailing."},
  },

  'myfitnesspal': {
    gateway:'diet', name:'MyFitnessPal', tagline:'The world\u2019s most trusted nutrition tracking platform \u2014 14 million foods',
    color:'#2D7A3A', gradient:'linear-gradient(135deg,#2D7A3A,#4CAF50,#1A5C28)', logo:'MF',
    stats:{ followers:'178.4K', content:'3,200+', products:'3' },
    products:[
      {name:'Premium Annual',desc:'AI meal planning \u00B7 Advanced analytics \u00B7 No ads',price:'\u00A379.99/yr',emoji:'\uD83E\uDD57'},
      {name:'Premium Monthly',desc:'Full premium access \u00B7 Cancel anytime',price:'\u00A39.99/mo',emoji:'\uD83D\uDCCA'},
      {name:'Family Plan',desc:'Up to 6 accounts \u00B7 Shared meal planning \u00B7 Best value',price:'\u00A3119.99/yr',emoji:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'},
    ],
    feed:[
      {author:'MyFitnessPal',authorSub:'Official \u00B7 Just now',text:'AI meal planning is live for Premium members. Input your macros, your food preferences, your schedule \u2014 your week is built automatically. 14 million foods. Barcode scanning. Restaurant menus. Nutrition has never been this effortless.',img:{fit:true,bg:'linear-gradient(135deg,#0A1A0A,#2D7A3A)',url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 22.4K|\uD83D\uDCAC 3.1K|\u2197 1.6K'},
      {author:'MyFitnessPal',authorSub:'Research \u00B7 3h ago',text:'Our analysis of 6 million user journeys: people who log consistently for 21 days are 89% more likely to reach their nutrition goals. The habit of tracking is more powerful than any specific diet. Consistency beats perfection.',engagement:'\u2661 14.8K|\uD83D\uDCAC 2.1K|\u2197 934'},
      {author:'MyFitnessPal',authorSub:'Feature \u00B7 1d ago',text:'New restaurant integration: 340,000 restaurant menus now searchable in the app. Scan the QR code at your table, tap your meal, macros logged. Eating out no longer means losing track.',img:{fit:true,bg:'linear-gradient(135deg,#1A3A1A,#2D7A3A)',url:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.8K|\uD83D\uDCAC 1.4K|\u2197 678'},
    ],
    communityPost:{author:'@macro_marco',time:'2h ago',avatar:'linear-gradient(135deg,#2D7A3A,#4CAF50)',text:'Six months on MyFitnessPal Premium. Lost 8kg, gained measurable muscle. The AI meal planning removed all decision fatigue. I just log. It just works. This is the one tool I genuinely could not do without.',reply:{text:'Eight months and 8kg is exceptional \u2014 that kind of consistency is exactly what the research predicts. The AI planner learns your preferences over time, so it only gets better. Thank you for being part of the MFP community \uD83E\uDD57',time:'1h ago'}},
    agent:{greeting:"Hi! I'm MyFitnessPal's AI on DietXX. I can help with macro targets, meal planning, food logging, or finding the right Premium plan for your goals."},
  },

  'zoe': {
    gateway:'diet', name:'Zoe', tagline:'Personalised nutrition science \u2014 your body is unique, your diet should be too',
    color:'#0A1A0A', gradient:'linear-gradient(135deg,#0A1A0A,#1A3A1A,#2D7A3A)', logo:'Zo',
    stats:{ followers:'45.6K', content:'890+', products:'2' },
    products:[
      {name:'Full Nutrition Test',desc:'Gut microbiome \u00B7 Blood sugar \u00B7 Blood fat \u00B7 Personalised scores',price:'\u00A3299.00',emoji:'\uD83E\uDDA0'},
      {name:'Zoe Membership',desc:'12 months personalised guidance \u00B7 App \u00B7 Expert support',price:'\u00A324.99/mo',emoji:'\uD83D\uDCF1'},
    ],
    feed:[
      {author:'Zoe',authorSub:'Official \u00B7 Just now',text:'PREDICT study update: we have now analysed over 1 million gut microbiome samples. The variation in how individuals respond to identical foods is more dramatic than we initially found. The era of personalised nutrition is not coming. It is here.',img:{fit:true,bg:'linear-gradient(135deg,#0A1A0A,#1A3A1A)',url:'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 31.2K|\uD83D\uDCAC 4.8K|\u2197 2.4K'},
      {author:'Zoe',authorSub:'Science \u00B7 3h ago',text:'The gut-brain axis: new data from the Zoe PREDICT 3 cohort shows that microbiome diversity score predicts mood stability with 73% accuracy. What you eat affects how you feel in ways the science is only beginning to map.',engagement:'\u2661 18.9K|\uD83D\uDCAC 2.8K|\u2197 1.3K'},
      {author:'Zoe',authorSub:'Education \u00B7 1d ago',text:'Why the glycaemic index is nearly useless: your personal blood sugar response to the same food can be 40% different from the person next to you. GI was measured on averages. Your body is not average.',img:{fit:true,bg:'linear-gradient(135deg,#1A3A1A,#0A1A0A)',url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 22.4K|\uD83D\uDCAC 3.4K|\u2197 1.6K'},
    ],
    communityPost:{author:'@gut_first_grace',time:'3h ago',avatar:'linear-gradient(135deg,#8B6914,#D4A843)',text:'Zoe test results in. Microbiome diversity 87th percentile. My blood sugar response to white rice is catastrophic. To sweet potato: perfect. Same calories, completely different metabolic outcome. Worth every penny of the test.',reply:{text:'An 87th percentile microbiome diversity is genuinely exceptional \u2014 the research strongly links this to long-term metabolic health. The sweet potato vs white rice finding is one of the most common and striking individual responses we see. Trust the data. \uD83E\uDDA0',time:'2h ago'}},
    agent:{greeting:"Hi! I'm Zoe's AI on DietXX. I can explain your test results, help you understand your personal nutrition scores, or guide you through optimising your diet for your unique biology."},
  },

  'whoop': {
    gateway:'sleep', name:'Whoop', tagline:'The health and fitness wearable that tells you how recovered you really are',
    color:'#7C6FF7', gradient:'linear-gradient(135deg,#7C6FF7,#A89BFF,#312E81)', logo:'Wh',
    stats:{ followers:'56.8K', content:'1,200+', products:'4' },
    products:[
      {name:'Whoop 4.0 Band',desc:'Continuous monitoring \u00B7 5-day battery \u00B7 Waterproof',price:'\u00A3239.00',emoji:'\u231A'},
      {name:'Monthly Membership',desc:'Full data access \u00B7 AI coaching \u00B7 Community',price:'\u00A330.00/mo',emoji:'\uD83D\uDCCA'},
      {name:'Annual Membership',desc:'12 months \u00B7 Best value \u00B7 Includes device',price:'\u00A3239.00/yr',emoji:'\u2B50'},
    ],
    feed:[
      {author:'Whoop',authorSub:'Official \u00B7 Just now',text:'Whoop 4.0 sleep staging accuracy: 93.4% validated against polysomnography in our latest clinical study. REM, light, deep and awake \u2014 all tracked without a sleep lab. Your recovery score is built on data your doctor would trust.',img:{fit:true,bg:'linear-gradient(135deg,#312E81,#7C6FF7)',url:'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.8K|\u2197 890'},
      {author:'Whoop',authorSub:'Research \u00B7 3h ago',text:'Analysis of 1.2 million Whoop users: the single strongest predictor of next-day performance is sleep consistency, not sleep duration. Going to bed at the same time every night outperforms sleeping longer but inconsistently. Anchor your schedule.',engagement:'\u2661 18.9K|\uD83D\uDCAC 2.6K|\u2197 1.2K'},
      {author:'Whoop',authorSub:'Feature \u00B7 1d ago',text:'New: Whoop Coach powered by GPT-4. Ask it why your recovery dropped. Ask it what changed last week. Ask it to compare your sleep data before and after cutting alcohol. Your data, finally with an interpreter.',img:{fit:true,bg:'linear-gradient(135deg,#7C6FF7,#A89BFF)',url:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.8K|\uD83D\uDCAC 1.4K|\u2197 678'},
    ],
    communityPost:{author:'@whoop_wendy',time:'2h ago',avatar:'linear-gradient(135deg,#7C6FF7,#A89BFF)',text:'Three months of Whoop data. Every suspicion I had about alcohol and late meals confirmed in the numbers. My best sleep scores happen on the nights I would have predicted. Whoop just made the implicit explicit.',reply:{text:'This is exactly what we built Whoop for \u2014 not to tell you what to do, but to show you what your own body is already telling you. The data is yours. The choices are yours. We just make the connection visible. \uD83D\uDCCA',time:'1h ago'}},
    agent:{greeting:"Hi! I'm Whoop's AI on SleepXX. I can help you interpret your recovery scores, understand your sleep staging data, or optimise your training load based on your Whoop metrics."},
  },

  'calm': {
    gateway:'sleep', name:'Calm', tagline:'The world\u2019s leading app for sleep and meditation \u2014 100 million downloads',
    color:'#312E81', gradient:'linear-gradient(135deg,#312E81,#4338CA,#6366F1)', logo:'Ca',
    stats:{ followers:'234.8K', content:'2,800+', products:'3' },
    products:[
      {name:'Calm Premium Annual',desc:'Full library \u00B7 New content daily \u00B7 Offline access',price:'\u00A354.99/yr',emoji:'\uD83C\uDF19'},
      {name:'Calm Family Plan',desc:'Up to 6 accounts \u00B7 Family Sleep Stories \u00B7 Kids content',price:'\u00A399.99/yr',emoji:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'},
      {name:'Calm for Teams',desc:'Employee wellbeing \u00B7 Analytics \u00B7 Group licences',price:'Custom',emoji:'\uD83C\uDFE2'},
    ],
    feed:[
      {author:'Calm',authorSub:'Official \u00B7 Just now',text:'New: Stephen Fry narrates \u2018The Midnight Garden\u2019 \u2014 our most requested Sleep Story of all time, finally recorded. 38 minutes. Beautifully written, perfectly narrated. Your best night\u2019s sleep starts here.',img:{fit:true,bg:'linear-gradient(135deg,#312E81,#4338CA)',url:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 45.2K|\uD83D\uDCAC 6.8K|\u2197 3.4K'},
      {author:'Calm',authorSub:'Science \u00B7 3h ago',text:'New seven-part Sleep Masterclass with Dr. Matthew Walker live in the app. Module one: why sleep is the foundation of physical and mental health, not just a nice-to-have. Free preview for all users.',engagement:'\u2661 28.9K|\uD83D\uDCAC 4.1K|\u2197 2.1K'},
      {author:'Calm',authorSub:'Community \u00B7 1d ago',text:'100 million downloads. We started with a breathing exercise and a meditation. Now we have 700 Sleep Stories, 2,800 meditations, masterclasses from the world\u2019s leading experts. The mission stays the same: a calmer world.',img:{fit:true,bg:'linear-gradient(135deg,#4338CA,#312E81)',url:'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 67.8K|\uD83D\uDCAC 9.4K|\u2197 4.8K'},
    ],
    communityPost:{author:'@insomnia_ivan',time:'7h ago',avatar:'linear-gradient(135deg,#EF4444,#DC2626)',text:'Calm Sleep Stories broke the anxiety spiral that kept me awake for 11 years. Not because they\u2019re magical \u2014 because they give the mind something to follow instead of its own catastrophising. Stephen Fry\u2019s voice is genuinely therapeutic.',reply:{text:'What you\u2019ve described \u2014 giving the anxious mind a track to follow \u2014 is exactly the mechanism we designed Sleep Stories around. The research on narrative-based sleep intervention is compelling. We\u2019re genuinely glad it helped. You deserve good sleep. \uD83C\uDF19',time:'6h ago'}},
    agent:{greeting:"Hi! I'm Calm's AI on SleepXX. I can recommend Sleep Stories for your mood, suggest the right meditation for tonight, or help you find the Masterclass content most relevant to your sleep challenges."},
  },

  'lululemon': {
    gateway:'yoga', name:'Lululemon', tagline:'Technical apparel designed for the practice \u2014 Founding Partner on YogaXX',
    color:'#1A0E00', gradient:'linear-gradient(135deg,#1A0E00,#2C1A00,#3D2800)', logo:'Lu',
    stats:{ followers:'89.4K', content:'1,400+', products:'340+' },
    products:[
      {name:'Align Pant 28\u201d',desc:'Nulu fabric \u00B7 Buttery soft \u00B7 14 colourways',price:'\u00A3128.00',emoji:'\uD83E\uDDD8'},
      {name:'Swiftly Tech Long Sleeve',desc:'Swiftly fabric \u00B7 Anti-odour \u00B7 Four-way stretch',price:'\u00A368.00',emoji:'\uD83E\uDDD8'},
      {name:'Flow Y Nulu Bra',desc:'Light support \u00B7 Buttery soft \u00B7 Adjustable straps',price:'\u00A358.00',emoji:'\uD83E\uDDD8'},
    ],
    feed:[
      {author:'Lululemon',authorSub:'Official \u00B7 Just now',text:'The new Align collection. Fourteen colourways, same Nulu fabric you already love. Designed for your deepest forward fold, your longest hold, your most ambitious inversion. Zero distractions. Pure practice.',img:{fit:true,bg:'linear-gradient(135deg,#1A0E00,#2C1A00)',url:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 18.4K|\uD83D\uDCAC 2.1K|\u2197 1.2K'},
      {author:'Lululemon',authorSub:'Science of Feel \u00B7 3h ago',text:'How we developed Nulu: three years of fabric testing, 12,000 practice sessions, 340 teachers consulted. The result is a fabric so soft it disappears. That\u2019s exactly what we were aiming for.',engagement:'\u2661 9.2K|\uD83D\uDCAC 1.1K|\u2197 567'},
      {author:'Lululemon',authorSub:'Community \u00B7 1d ago',text:'Lululemon Ambassador Programme is open on YogaXX. If you teach, if you practice, if you live the values \u2014 we want to hear from you. Benefits, product, and a community of 2,400 ambassadors worldwide.',img:{fit:true,bg:'linear-gradient(135deg,#2C1A00,#1A0E00)',url:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.6K|\u2197 789'},
    ],
    communityPost:{author:'@mat_scientist_mo',time:'4h ago',avatar:'linear-gradient(135deg,#7C3AED,#6D28D9)',text:'Lululemon Align pants for Kapotasana training. Six months, three times a week. Zero seam issues, zero pilling, zero colour fade. This is what premium means in yoga apparel.',reply:{text:'Kapotasana in the Align is the ultimate test \u2014 we\u2019re glad they delivered. The four-way Nulu stretch is specifically engineered for that depth of backbend. Keep us posted on the progress! \uD83E\uDDD8',time:'3h ago'}},
    agent:{greeting:"Hi! I'm Lululemon's AI on YogaXX. I can help with sizing, fabric recommendations for your practice style, or finding the right gear for any yoga discipline."},
  },

  'insight-timer': {
    gateway:'yoga', name:'Insight Timer', tagline:'The world\u2019s largest free meditation app \u2014 6 million practitioners daily',
    color:'#C4845A', gradient:'linear-gradient(135deg,#C4845A,#8B5E3C,#6B4428)', logo:'IT',
    stats:{ followers:'134.2K', content:'180,000+', products:'3' },
    products:[
      {name:'Insight Timer Pro',desc:'Unlimited courses \u00B7 Offline access \u00B7 Advanced sleep tools',price:'\u00A359.99/yr',emoji:'\uD83E\uDDD0'},
      {name:'Teacher Pro',desc:'Publish courses \u00B7 Analytics \u00B7 Revenue sharing',price:'\u00A389.99/yr',emoji:'\uD83E\uDDD8'},
      {name:'Groups Premium',desc:'Private studio communities \u00B7 Live sessions \u00B7 Member management',price:'\u00A3149.99/yr',emoji:'\uD83D\uDC65'},
    ],
    feed:[
      {author:'Insight Timer',authorSub:'Official \u00B7 Just now',text:'6 million people meditated on Insight Timer today. 180,000 guided sessions available. 10,000 teachers from 190 countries. Free for ever for the core practice. Because access to a calm mind should not depend on income.',img:{fit:true,bg:'linear-gradient(135deg,#6B4428,#8B5E3C)',url:'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 34.2K|\uD83D\uDCAC 4.8K|\u2197 2.4K'},
      {author:'Insight Timer',authorSub:'Research \u00B7 3h ago',text:'New study with Stanford: 12 weeks of daily meditation on Insight Timer produced measurable changes in amygdala volume and cortisol response. 8 minutes a day. The neuroscience is clear. The only question is whether you start.',engagement:'\u2661 18.9K|\uD83D\uDCAC 2.3K|\u2197 1.1K'},
      {author:'Insight Timer',authorSub:'Teachers \u00B7 1d ago',text:'Our top teacher earned \u00A3340,000 last year from courses on Insight Timer. The platform has paid out \u00A312 million to teachers in 2025. If you teach yoga or meditation, this is where your students are.',img:{fit:true,bg:'linear-gradient(135deg,#8B5E3C,#C4845A)',url:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 9.8K|\uD83D\uDCAC 1.4K|\u2197 678'},
    ],
    communityPost:{author:'@insight_iris',time:'6h ago',avatar:'linear-gradient(135deg,#C4845A,#A06840)',text:'365 consecutive days on Insight Timer. Started with 5 minutes. Now 45. The compound effect of consistency is the most underrated thing in wellness. Day 1 feels impossible. Day 365 feels like breathing.',reply:{text:'365 days \u2014 you are in the top 0.1% of consistent practitioners globally. The neuroscience tells us exactly what has happened to your prefrontal cortex and amygdala over that year. Keep going. The next 365 will surprise you even more. \uD83E\uDDD8',time:'5h ago'}},
    agent:{greeting:"Hi! I'm Insight Timer's AI on YogaXX. I can recommend meditations and courses for your specific needs, help with teacher features, or suggest a personalised daily practice schedule."},
  },

  'rebag': {
    gateway:'handbag', name:'Rebag', tagline:"The world's leading luxury handbag resale platform \u2014 Brand Zone Partner on HandbagXX",
    color:'#1C1008', gradient:'linear-gradient(135deg,#1C1008,#2A1A08,#3D2B1F)', logo:'RB',
    stats:{ followers:'18.7K', content:'892', products:'2,400+' },
    products:[
      {name:'Herm\u00E8s Birkin 25 Togo',desc:'Gold hardware \u00B7 Authenticated \u00B7 Grade A condition',price:'\u00A318,500',emoji:'\uD83D\uDC5C'},
      {name:'Chanel Classic Flap M',desc:'Black caviar \u00B7 Silver HW \u00B7 Full set \u00B7 Authenticated',price:'\u00A36,200',emoji:'\uD83D\uDC5C'},
      {name:'Louis Vuitton Neverfull MM',desc:'Damier ebene \u00B7 Like new \u00B7 Authenticated',price:'\u00A31,850',emoji:'\uD83D\uDC5C'},
    ],
    feed:[
      {author:'Rebag',authorSub:'Official \u00B7 Just now',text:'47 new Herm\u00E8s pieces authenticated and listed this morning. Birkin 25, 30 and 35 across togo and epsom. Every piece carries Rebag certification, full provenance documentation, and a 14-day return window.',img:{fit:true,bg:'linear-gradient(135deg,#1C1008,#2A1A08)',url:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 6.2K|\uD83D\uDCAC 789|\u2197 334'},
      {author:'Rebag',authorSub:'Market Intelligence \u00B7 2h ago',text:'Rebag Clair Index update: Herm\u00E8s togo leather up 3.2% this quarter. Chanel caviar steady. LV Damier Ebene holding strong. The data tells you where to buy and when to sell.',engagement:'\u2661 4.1K|\uD83D\uDCAC 567|\u2197 189'},
      {author:'Rebag',authorSub:'Education \u00B7 1d ago',text:'How we authenticate: 100-point inspection cross-referenced against our database of 2.4 million verified pieces. Hardware, stitching, date codes, leather grain, lining \u2014 nothing is missed.',img:{fit:true,bg:'linear-gradient(135deg,#2A1A08,#3D2B1F)',url:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 8.9K|\uD83D\uDCAC 1.1K|\u2197 445'},
    ],
    communityPost:{author:'@investment_iris',time:'3h ago',avatar:'linear-gradient(135deg,#9333EA,#7C3AED)',text:'Just sold my Chanel through Rebag. Quote in 24 hours, pickup arranged, payment within 48 hours. Got 15% more than any other platform offered.',reply:{text:'Thank you \u2014 we work hard to ensure sellers get full market value. Your Chanel went to a new home within 6 hours of listing. Enjoy the next acquisition! \uD83D\uDC5C',time:'2h ago'}},
    agent:{greeting:"Hi! I'm Rebag's AI on HandbagXX. I can help with valuations, authentication queries, finding specific pieces, or understanding our certification process."},
  },

  'entrupy': {
    gateway:'handbag', name:'Entrupy', tagline:'AI-powered luxury authentication \u2014 verified in seconds',
    color:'#B8860B', gradient:'linear-gradient(135deg,#B8860B,#D4A843,#8B6914)', logo:'En',
    stats:{ followers:'12.4K', content:'445', products:'3' },
    products:[
      {name:'Authentication Certificate',desc:'Single item AI authentication with certificate',price:'\u00A325.00',emoji:'\uD83D\uDD0D'},
      {name:'Pro Subscription',desc:'Unlimited authentications + priority processing',price:'\u00A389/mo',emoji:'\u2B50'},
      {name:'API Access',desc:'Integrate Entrupy authentication into your platform',price:'Custom',emoji:'\uD83D\uDD27'},
    ],
    feed:[
      {author:'Entrupy',authorSub:'Official \u00B7 1h ago',text:'99.1% accuracy across 1.2 million authenticated pieces. Herm\u00E8s, Chanel, Louis Vuitton, Gucci, Prada, Bottega Veneta \u2014 our AI is trained on microscopic material analysis that no counterfeit can replicate.',img:{fit:true,bg:'linear-gradient(135deg,#8B6914,#B8860B)',url:'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 5.4K|\uD83D\uDCAC 678|\u2197 289'},
      {author:'Entrupy',authorSub:'Technology \u00B7 4h ago',text:'How our microscopic fingerprinting works: every luxury material has a unique microstructure. Our camera captures images at 260x magnification, compared against 1.2 million verified reference points. Counterfeiters cannot replicate what they cannot see.',engagement:'\u2661 9.2K|\uD83D\uDCAC 1.3K|\u2197 567'},
      {author:'Entrupy',authorSub:'Industry \u00B7 1d ago',text:'The global luxury counterfeit market is worth $4.5 trillion annually. Entrupy has blocked over \u00A3890 million in fraudulent transactions on partner platforms. Authentication is not optional \u2014 it is the baseline.',img:{fit:true,bg:'linear-gradient(135deg,#2A1A08,#B8860B)',url:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 7.8K|\uD83D\uDCAC 934|\u2197 412'},
    ],
    communityPost:{author:'@auth_queen_aria',time:'2h ago',avatar:'linear-gradient(135deg,#B8860B,#D4A843)',text:'Used Entrupy on a Birkin I was about to buy privately. Came back counterfeit in 43 seconds. Saved me \u00A319,000. This service should be mandatory for every pre-loved luxury purchase.',reply:{text:"This is exactly why we built Entrupy \u2014 to give buyers the power that only experts used to have. We're glad we could protect you. Share your experience \u2014 awareness saves others too. \uD83D\uDD0D",time:'1h ago'}},
    agent:{greeting:"Hi! I'm Entrupy's AI on HandbagXX. I can help you understand our authentication process, check coverage for specific brands, or guide you through getting a certificate."},
  },

  'firebullet': {
    gateway:'sneaker', name:'Firebullet', tagline:'Performance footwear for those who collect and compete — Founding Partner on SneakerXX',
    color:'#E84D3A', gradient:'linear-gradient(135deg,#E84D3A,#C4371F,#8B1A0A)', logo:'FB',
    stats:{ followers:'28.4K', content:'156', products:'12' },
    products:[
      {name:'2026 Edition Trainer',desc:'Carbon plate · Recycled Primeknit · Hand-finished sole · Limited 2,000',price:'£185.00',emoji:'👟'},
      {name:'Core Runner v3',desc:'Daily performance trainer · Responsive foam · Wide fit available',price:'£135.00',emoji:'👟'},
      {name:'Slide 001',desc:'Post-run recovery slide · Contoured footbed · Two colourways',price:'£85.00',emoji:'🩴'},
    ],
    feed:[
      {author:'Firebullet',authorSub:'Official \u00B7 Just now',text:'The 2026 Edition Trainer is live. Fourteen months of development. Carbon fibre plate for propulsion. Recycled Primeknit upper constructed without waste. Hand-finished vulcanised sole. 2,000 pairs. No restocks. Ever.',img:{bg:'linear-gradient(135deg,#0D0D0D,#1a0505)',emoji:'\uD83D\uDC5F',url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 12.4K|\uD83D\uDCAC 1.8K|\u2197 945'},
      {author:'Firebullet',authorSub:'Design Story \u00B7 2h ago',text:'The carbon fibre plate in the 2026 Edition is milled from aerospace-grade material. It took 11 prototypes to get the flex profile right. Our lead designer talks through the process.',img:{bg:'linear-gradient(135deg,#1a0505,#2D0808)',emoji:'\u2699\uFE0F',url:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 5.6K|\uD83D\uDCAC 678|\u2197 289'},
      {author:'Firebullet',authorSub:'Athlete Feature \u00B7 1d ago',text:'"I wear them for speed sessions and wear them out at night. There\u2019s no other shoe in my rotation that does both." \u2014 Maya Chen, 5000m record holder.',engagement:'\u2661 8.9K|\uD83D\uDCAC 1.1K|\u2197 445'},
    ],
    communityPost:{author:'@sole_archive',time:'1h ago',avatar:'linear-gradient(135deg,#F59E0B,#D97706)',text:'Got my 2026 pair. Carbon plate is immediately noticeable on first wear \u2014 the energy return is unlike anything at this price point. These are the real deal. Sean, you made the right call tracking these.',reply:{text:'Glad you love them. The plate geometry took 11 prototypes to perfect \u2014 we knew it had to work for everyday wear, not just competition. More colourways coming Q3. 🔥',time:'45m ago'}},
    agent:{greeting:'Hi! I\'m Firebullet\'s AI on SneakerXX. I can help with sizing, the 2026 Edition drop, restocks (spoiler: there aren\'t any), or anything about our range.'},
  },

  'la-sportiva': {
    gateway:'climb', name:'La Sportiva', tagline:'Climbing footwear since 1928 — Founding Partner on ClimbXX',
    color:'#E84D3A', gradient:'linear-gradient(135deg,#E84D3A,#C4371F)', logo:'LS',
    stats:{ followers:'12.4K', content:'342', products:'89' },
    products:[
      {name:'Solution Comp',desc:'Competition climbing shoe — No-Edge 2.0',price:'£165.00',emoji:'🥾'},
      {name:'Skwama',desc:'All-round performance shoe',price:'£145.00',emoji:'👟'},
    ],
    feed:[
      {author:'La Sportiva',authorSub:'Official \u00B7 3h ago',text:'Introducing the Solution Comp \u2014 our most advanced competition shoe. AI-analysed foot data from 10,000 climbers, No-Edge 2.0 technology.',img:{bg:'linear-gradient(135deg,#3D2B1F,#2A1F18,#4A3728)',emoji:'\uD83E\uDD7E',url:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 3.1K|\uD83D\uDCAC 234|\u2197 156'},
      {author:'La Sportiva',authorSub:'Athlete Feature · 1d ago',text:'Adam Ondra on the Solution Comp: "The sensitivity is unlike anything I\'ve climbed in. On comp-style volumes, the difference is measurable."',engagement:'♡ 5.2K|💬 412|↗ 289'},
    ],
    communityPost:{author:'@sendhard_pete',time:'8h ago',avatar:'linear-gradient(135deg,#F59E0B,#D97706)',text:'Just got my Solution Comps. Sizing question — half size down from Skwama, snug but not painful. Do they stretch?',reply:{text:'Great question! The P3 Platform means minimal stretch — maybe 5% over the first few sessions. Half size down from Skwama is perfect for performance fit. Enjoy the sends! 🧗',time:'6h ago'}},
    agent:{greeting:'Hi! I\'m La Sportiva\'s AI assistant on ClimbXX. I can help with sizing, product recommendations, care instructions, or warranty queries.'},
  },

  'petzl': {
    gateway:'climb', name:'Petzl', tagline:'Vertical safety equipment since 1975 — Brand Zone Partner on ClimbXX',
    color:'#3B82F6', gradient:'linear-gradient(135deg,#1D4ED8,#3B82F6)', logo:'Pz',
    stats:{ followers:'8.9K', content:'218', products:'124' },
    products:[
      {name:'Grigri+',desc:'Assisted braking belay device with anti-panic handle',price:'£89.00',emoji:'⚙️'},
      {name:'Reverso 4',desc:'Versatile tube-style belay and rappel device',price:'£24.00',emoji:'🔧'},
      {name:'Actik Core',desc:'Rechargeable headlamp — 450 lumens',price:'£59.00',emoji:'🔦'},
    ],
    feed:[
      {author:'Petzl',authorSub:'Official \u00B7 2h ago',text:'Introducing Grigri+ with anti-panic technology. When panic gripping occurs, the braking cam engages automatically. Eight years of development with professional guides and rescue teams.',img:{bg:'linear-gradient(135deg,#1E3A8A,#1D4ED8)',emoji:'\u2699\uFE0F',url:'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 4.2K|\uD83D\uDCAC 389|\u2197 198'},
      {author:'Petzl',authorSub:'Safety Feature · 6h ago',text:'How to inspect your harness before every session. Most gear failures are preventable. Our safety team walks through the five-point check that every climber should know.',engagement:'\u2661 6.8K|\uD83D\uDCAC 712|\u2197 445'},
      {author:'Petzl',authorSub:'New Arrival · 1d ago',text:'Actik Core rechargeable headlamp. 450 lumens. USB-C charging. Red lighting mode for night vision preservation. Everything you need for alpine starts and cave climbing.',img:{bg:'linear-gradient(135deg,#0F172A,#1E3A8A)',emoji:'\uD83D\uDD26',url:'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 2.1K|\uD83D\uDCAC 167|\u2197 89'},
    ],
    communityPost:{author:'@trad_tomasz',time:'4h ago',avatar:'linear-gradient(135deg,#8B6914,#A0841A)',text:'Question for Petzl — heading to the Dolomites for 14 days trad climbing. Grigri+ or Reverso for the rack? Mostly multi-pitch with occasional single pitch.',reply:{text:'For 14 days multi-pitch trad, the Reverso 4 is your friend — lighter, guides mode for bringing up a second, and no mechanical parts to worry about in alpine conditions. Save the Grigri+ for single pitch sport. Have an incredible trip! 🏔️',time:'3h ago'}},
    agent:{greeting:'Hi! I\'m Petzl\'s AI assistant on ClimbXX. I can help with gear selection, safety checks, product compatibility, or technical questions about vertical equipment.'},
  },

  'mountain-project': {
    gateway:'climb', name:'Mountain Project', tagline:'The climber\'s route database — 500,000+ routes worldwide',
    color:'#16A34A', gradient:'linear-gradient(135deg,#15803D,#16A34A)', logo:'MP',
    stats:{ followers:'34.2K', content:'1,200+', products:'0' },
    products:[
      {name:'Pro Membership',desc:'Offline maps, route downloads, and ad-free experience',price:'£29.00/yr',emoji:'⭐'},
      {name:'Guide Books',desc:'Curated regional PDF guidebooks from local experts',price:'£9.00',emoji:'📖'},
    ],
    feed:[
      {author:'Mountain Project',authorSub:'Official \u00B7 1h ago',text:'500,000th route just added to the database \u2014 a new 7b+ sport line in the Costa Blanca submitted by @rock_ramona. Every route matters. Thank you to our 2.4 million contributors worldwide.',img:{bg:'linear-gradient(135deg,#14532D,#15803D)',emoji:'\uD83C\uDFD4\uFE0F',url:'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 18.4K|\uD83D\uDCAC 2.1K|\u2197 1.4K'},
      {author:'Mountain Project',authorSub:'Feature · 4h ago',text:'New: AI-powered route conditions. Our model analyses recent trip reports, weather data, and seasonal patterns to give you a real-time conditions score for any route in the database. Now in beta for ClimbXX members.',engagement:'\u2661 9.2K|\uD83D\uDCAC 1.3K|\u2197 678'},
      {author:'Mountain Project',authorSub:'Community · 8h ago',text:'Kalymnos has just crossed 2,400 routes in the database. The most comprehensively documented limestone destination on earth. Full topo coverage now available offline with Pro.',img:{bg:'linear-gradient(135deg,#1a3320,#15803D)',emoji:'\uD83C\uDDEC\uD83C\uDDF7',url:'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=400&fit=crop&q=80'},engagement:'\u2661 5.6K|\uD83D\uDCAC 567|\u2197 312'},
    ],
    communityPost:{author:'@sendit_sarah',time:'2h ago',avatar:'linear-gradient(135deg,#F59E0B,#D97706)',text:'Mountain Project just saved my Kalymnos trip. Downloaded the offline topos before the ferry, had full route info even with no signal on the cliff. 2,400 routes and every single one accurate. This is the tool.',reply:{text:'That\'s exactly what we built it for \u2014 no signal, no problem. We\'re adding 50 new Kalymnos routes this month from our local contributors. Glad it delivered! See you on the rock. 🧗',time:'1h ago'}},
    agent:{greeting:'Hi! I\'m Mountain Project\'s AI on ClimbXX. I can help you find routes, check conditions, plan trips, or navigate the database. Where are you climbing next?'},
  },
};

/* ────── APP CATALOGUE ────── */
const APP_CATALOGUE = [
  // SurfXX apps
  {id:'app-wave-tracker',name:'Wave Tracker',icon:'\uD83C\uDF0A',desc:'Real-time wave height, period and direction for 2,400 breaks worldwide',developer:'SurfXX',gateway:'surf',sector:'adventure',category:'Data & Analytics',rating:4.8,installs:'134K',isPartner:false,isFeatured:true},
  {id:'app-msw-pro',name:'MSW Pro Forecast',icon:'\uD83D\uDCF1',desc:'Magic Seaweed\u2019s full 16-day HD forecast with swell period and crowd prediction',developer:'Magic Seaweed',gateway:'surf',sector:'adventure',category:'Data & Analytics',rating:4.9,installs:'289K',isPartner:true,isFeatured:true},
  {id:'app-surf-log',name:'Surf Logger',icon:'\uD83D\uDCCB',desc:'Log every session with conditions, board used, and personal ratings',developer:'SurfXX',gateway:'surf',sector:'adventure',category:'Tools & Utilities',rating:4.6,installs:'67K',isPartner:false,isFeatured:false},
  {id:'app-tide-tables',name:'Tide Tables Pro',icon:'\uD83C\uDF0D',desc:'Offline tide predictions for 40,000 locations worldwide',developer:'SurfXX',gateway:'surf',sector:'adventure',category:'Tools & Utilities',rating:4.7,installs:'89K',isPartner:false,isFeatured:true},
  // CycleXX apps
  {id:'app-power-analyser',name:'Power Analyser',icon:'\uD83D\uDCCA',desc:'Advanced power data analysis with FTP tracking, training stress and form modelling',developer:'CycleXX',gateway:'cycle',sector:'adventure',category:'Data & Analytics',rating:4.8,installs:'156K',isPartner:false,isFeatured:true},
  {id:'app-wahoo-fitness',name:'Wahoo Fitness',icon:'\uD83D\uDEB4',desc:'Control your KICKR, follow structured workouts, sync with every major training platform',developer:'Wahoo',gateway:'cycle',sector:'adventure',category:'Tools & Utilities',rating:4.9,installs:'312K',isPartner:true,isFeatured:true},
  {id:'app-route-builder',name:'Route Builder',icon:'\uD83D\uDDFA\uFE0F',desc:'Build, discover and share cycling routes with elevation profiles and surface data',developer:'CycleXX',gateway:'cycle',sector:'adventure',category:'Tools & Utilities',rating:4.7,installs:'198K',isPartner:false,isFeatured:true},
  {id:'app-race-calendar',name:'Race Calendar',icon:'\uD83D\uDCC5',desc:'Every UCI and local cycling event worldwide with entry links and route previews',developer:'CycleXX',gateway:'cycle',sector:'adventure',category:'Data & Analytics',rating:4.5,installs:'78K',isPartner:false,isFeatured:false},
  // SailXX apps
  {id:'app-weather-router',name:'Weather Router Pro',icon:'\uD83C\uDFDA\uFE0F',desc:'Professional GRIB-based weather routing for offshore passages and ocean racing',developer:'SailXX',gateway:'sail',sector:'adventure',category:'Data & Analytics',rating:4.9,installs:'34K',isPartner:false,isFeatured:true},
  {id:'app-garmin-active',name:'ActiveCaptain',icon:'\uD83D\uDDFA\uFE0F',desc:'Marina guides, tidal planning, anchor alarms and chartplotter integration',developer:'Garmin Marine',gateway:'sail',sector:'adventure',category:'Tools & Utilities',rating:4.8,installs:'89K',isPartner:true,isFeatured:true},
  {id:'app-logbook-pro',name:'Logbook Pro',icon:'\uD83D\uDCD3',desc:'Digital ship\'s log with GPS tracking, weather recording and passage statistics',developer:'SailXX',gateway:'sail',sector:'adventure',category:'Tools & Utilities',rating:4.6,installs:'23K',isPartner:false,isFeatured:false},
  {id:'app-tide-current',name:'Tide & Current',icon:'\uD83C\uDF0A',desc:'Precise tidal predictions and current data for 45,000 nautical locations worldwide',developer:'SailXX',gateway:'sail',sector:'adventure',category:'Data & Analytics',rating:4.7,installs:'56K',isPartner:false,isFeatured:true},
  // ClimbXX apps
  {id:'app-route-db',name:'Route Database',icon:'🗺️',desc:'Search 500K+ routes worldwide with topos, grades, and conditions',developer:'ClimbXX',gateway:'climb',sector:'adventure',category:'Tools & Utilities',rating:4.8,installs:'124K',isPartner:false,isFeatured:true},
  {id:'app-crimpd',name:'Crimpd Training',icon:'💪',desc:'AI-powered climbing training plans adapted to your grade and goals',developer:'Lattice Training',gateway:'climb',sector:'adventure',category:'Training & Education',rating:4.9,installs:'89K',isPartner:true,isFeatured:true},
  {id:'app-crag-wx',name:'Crag Weather',icon:'🌤️',desc:'Hyper-local weather for climbing areas with drying forecasts',developer:'SkiXX Labs',gateway:'climb',sector:'adventure',category:'Tools & Utilities',rating:4.6,installs:'67K',isPartner:false,isFeatured:false},
  {id:'app-ls-fit',name:'Shoe Fit AI',icon:'👟',desc:'Find your perfect climbing shoe size using foot scan technology',developer:'La Sportiva',gateway:'climb',sector:'adventure',category:'Commerce & Shopping',rating:4.7,installs:'45K',isPartner:true,isFeatured:true},
  {id:'app-climb-log',name:'Send Logger',icon:'📋',desc:'Log your sends, track progression, share with the community',developer:'ClimbXX',gateway:'climb',sector:'adventure',category:'Tools & Utilities',rating:4.5,installs:'78K',isPartner:false,isFeatured:false},
  {id:'app-belay-calc',name:'Belay Calculator',icon:'⚙️',desc:'Weight difference calculations and belay device recommendations',developer:'Petzl',gateway:'climb',sector:'adventure',category:'Tools & Utilities',rating:4.4,installs:'34K',isPartner:true,isFeatured:false},
  // SkiXX apps
  {id:'app-snow-rpt',name:'Snow Report Pro',icon:'🌨️',desc:'Real-time snow conditions and avalanche risk for 2,000+ resorts',developer:'SkiXX',gateway:'ski',sector:'adventure',category:'Data & Analytics',rating:4.8,installs:'156K',isPartner:false,isFeatured:true},
  {id:'app-ski-track',name:'Ski Tracker',icon:'📍',desc:'GPS tracking, speed, vertical, and season stats',developer:'SkiXX',gateway:'ski',sector:'adventure',category:'Tools & Utilities',rating:4.7,installs:'198K',isPartner:false,isFeatured:true},
  {id:'app-avy-safe',name:'Avalanche Safety',icon:'⚠️',desc:'Decision-making tools for backcountry — risk assessment and group management',developer:'Mountain Safety Council',gateway:'ski',sector:'adventure',category:'Training & Education',rating:4.9,installs:'67K',isPartner:true,isFeatured:true},
  {id:'app-resort-book',name:'Resort Booker',icon:'🏨',desc:'Ski-in ski-out accommodation and lift pass bundles',developer:'Ski.com',gateway:'ski',sector:'adventure',category:'Booking & Travel',rating:4.5,installs:'89K',isPartner:true,isFeatured:false},
  // DietXX apps
  {id:'app-myfitnesspal',name:'MyFitnessPal',icon:'\uD83E\uDD57',desc:'Track macros and nutrition with 14 million foods, AI meal planning and barcode scanning',developer:'MyFitnessPal',gateway:'diet',sector:'wellness',category:'Tools & Utilities',rating:4.8,installs:'200M',isPartner:true,isFeatured:true},
  {id:'app-zoe',name:'Zoe',icon:'\uD83E\uDDA0',desc:'Personalised nutrition based on your gut microbiome, blood sugar and blood fat responses',developer:'Zoe',gateway:'diet',sector:'wellness',category:'Data & Analytics',rating:4.9,installs:'2.1M',isPartner:true,isFeatured:true},
  {id:'app-macro-tracker',name:'Macro Tracker Pro',icon:'\uD83D\uDCCA',desc:'Advanced macro tracking with custom targets, meal templates and progress visualisation',developer:'DietXX',gateway:'diet',sector:'wellness',category:'Tools & Utilities',rating:4.7,installs:'890K',isPartner:false,isFeatured:true},
  {id:'app-recipe-builder',name:'Recipe Builder',icon:'\uD83D\uDC68\u200D\uD83C\uDF73',desc:'Build macro-balanced recipes and meal plans from your preferred ingredients',developer:'DietXX',gateway:'diet',sector:'wellness',category:'Tools & Utilities',rating:4.6,installs:'340K',isPartner:false,isFeatured:false},
  // SleepXX apps
  {id:'app-calm',name:'Calm',icon:'\uD83C\uDF19',desc:'Sleep Stories, guided meditations and masterclasses \u2014 100 million downloads worldwide',developer:'Calm',gateway:'sleep',sector:'wellness',category:'Training & Education',rating:4.9,installs:'100M',isPartner:true,isFeatured:true},
  {id:'app-whoop',name:'Whoop',icon:'\u231A',desc:'Continuous health monitoring, sleep staging and recovery scoring for peak performance',developer:'Whoop',gateway:'sleep',sector:'wellness',category:'Data & Analytics',rating:4.8,installs:'4.2M',isPartner:true,isFeatured:true},
  {id:'app-sleep-score',name:'Sleep Score',icon:'\uD83D\uDE34',desc:'AI-powered sleep analysis and personalised recommendations to improve your rest',developer:'SleepXX',gateway:'sleep',sector:'wellness',category:'Data & Analytics',rating:4.7,installs:'1.2M',isPartner:false,isFeatured:true},
  {id:'app-circadian',name:'Circadian Planner',icon:'\u2600\uFE0F',desc:'Optimise your daily schedule around your chronotype for better energy, focus and sleep',developer:'SleepXX',gateway:'sleep',sector:'wellness',category:'Tools & Utilities',rating:4.6,installs:'456K',isPartner:false,isFeatured:false},
  // YogaXX apps
  {id:'app-insight-timer',name:'Insight Timer',icon:'\uD83E\uDDD8',desc:'6 million daily practitioners \u2014 180,000 guided meditations and yoga sessions, free for ever',developer:'Insight Timer',gateway:'yoga',sector:'wellness',category:'Training & Education',rating:4.9,installs:'2.1M',isPartner:true,isFeatured:true},
  {id:'app-practice-tracker',name:'Practice Tracker',icon:'\uD83D\uDCCB',desc:'Log every session, track streaks, visualise your consistency and growth over time',developer:'YogaXX',gateway:'yoga',sector:'wellness',category:'Tools & Utilities',rating:4.7,installs:'234K',isPartner:false,isFeatured:true},
  {id:'app-retreat-finder',name:'Retreat Finder',icon:'\uD83C\uDFF5\uFE0F',desc:'Discover and book yoga and wellness retreats worldwide \u2014 2,400 vetted destinations',developer:'YogaXX',gateway:'yoga',sector:'wellness',category:'Booking & Travel',rating:4.8,installs:'89K',isPartner:false,isFeatured:true},
  {id:'app-yoga-anatomy',name:'Yoga Anatomy Guide',icon:'\uD83E\uDDB4',desc:'3D muscle and joint visualisation for every asana \u2014 essential for teachers and serious practitioners',developer:'YogaXX',gateway:'yoga',sector:'wellness',category:'Training & Education',rating:4.6,installs:'67K',isPartner:false,isFeatured:false},
  {id:'app-lululemon-studio',name:'Lululemon Studio',icon:'\uD83D\uDCF1',desc:'Live and on-demand classes from world-class instructors \u2014 yoga, meditation, Pilates and more',developer:'Lululemon',gateway:'yoga',sector:'wellness',category:'Training & Education',rating:4.8,installs:'456K',isPartner:true,isFeatured:true},
  // DressXX apps
  {id:'app-occasion-finder',name:'Occasion Finder',icon:'\uD83D\uDC57',desc:'Tell us the event, we find the perfect dress \u2014 filtered by dress code, budget, and your style profile',developer:'DressXX',gateway:'dress',sector:'fashion',category:'Tools & Utilities',rating:4.8,installs:'78K',isPartner:false,isFeatured:true},
  {id:'app-outfit-planner',name:'Outfit Planner',icon:'\uD83D\uDDBC\uFE0F',desc:'Plan and visualise complete outfits including accessories, shoes and bag for any occasion',developer:'DressXX',gateway:'dress',sector:'fashion',category:'Tools & Utilities',rating:4.7,installs:'56K',isPartner:false,isFeatured:true},
  {id:'app-size-ai',name:'Size Guide AI',icon:'\uD83E\uDDD0',desc:'Accurate sizing across 3,400 brands \u2014 never buy the wrong size again',developer:'DressXX',gateway:'dress',sector:'fashion',category:'Tools & Utilities',rating:4.9,installs:'134K',isPartner:false,isFeatured:true},
  {id:'app-dress-rental',name:'Rent the Runway',icon:'\u2728',desc:'Designer dress rental for every occasion \u2014 from \u00A345 per event',developer:'Rent the Runway',gateway:'dress',sector:'fashion',category:'Commerce & Shopping',rating:4.6,installs:'89K',isPartner:true,isFeatured:true},
  // HandbagXX apps
  {id:'app-authscan',name:'AuthScan by Entrupy',icon:'\uD83D\uDD0D',desc:'AI-powered luxury authentication \u2014 photograph your piece, get certified results in seconds',developer:'Entrupy',gateway:'handbag',sector:'fashion',category:'Tools & Utilities',rating:4.9,installs:'89K',isPartner:true,isFeatured:true},
  {id:'app-resaleiq',name:'ResaleIQ',icon:'\uD83D\uDCCA',desc:'Live resale price tracking across Rebag, Vestiaire, The RealReal and 5 more platforms',developer:'HandbagXX',gateway:'handbag',sector:'fashion',category:'Data & Analytics',rating:4.7,installs:'56K',isPartner:false,isFeatured:true},
  {id:'app-bagcare',name:'Bag Care Pro',icon:'\u2728',desc:'Personalised care routines, conditioning reminders, and restoration guides for every major brand',developer:'HandbagXX',gateway:'handbag',sector:'fashion',category:'Training & Education',rating:4.6,installs:'34K',isPartner:false,isFeatured:false},
  {id:'app-rebag-shop',name:'Rebag',icon:'\uD83D\uDC5C',desc:'Shop 10,000+ authenticated luxury handbags with Rebag certification and free returns',developer:'Rebag',gateway:'handbag',sector:'fashion',category:'Commerce & Shopping',rating:4.8,installs:'124K',isPartner:true,isFeatured:true},
  // StocksXX apps
  {id:'app-ig-trade',name:'IG Trading',icon:'📊',desc:'Full-featured CFD and spread betting platform',developer:'IG Index',gateway:'stocks',sector:'finance',category:'Tools & Utilities',rating:4.6,installs:'234K',isPartner:true,isFeatured:true},
  {id:'app-tv-charts',name:'TradingView Charts',icon:'📈',desc:'Professional charting with 100+ indicators and community ideas',developer:'TradingView',gateway:'stocks',sector:'finance',category:'Data & Analytics',rating:4.9,installs:'312K',isPartner:true,isFeatured:true},
  {id:'app-earn-cal',name:'Earnings Calendar',icon:'📅',desc:'Upcoming earnings dates, estimates, and historical surprises',developer:'StocksXX',gateway:'stocks',sector:'finance',category:'Data & Analytics',rating:4.5,installs:'145K',isPartner:false,isFeatured:false},
  {id:'app-screener',name:'Stock Screener',icon:'🔍',desc:'Filter stocks by fundamentals, technicals, and custom criteria',developer:'StocksXX',gateway:'stocks',sector:'finance',category:'Data & Analytics',rating:4.7,installs:'98K',isPartner:false,isFeatured:true},
  {id:'app-port-track',name:'Portfolio Tracker',icon:'💼',desc:'Track your holdings across brokers with real-time P&L',developer:'StocksXX',gateway:'stocks',sector:'finance',category:'Tools & Utilities',rating:4.4,installs:'167K',isPartner:false,isFeatured:false},
  // CurrencyXX apps
  {id:'app-oanda',name:'OANDA Trading',icon:'💱',desc:'FX and CFD trading with tight spreads and fast execution',developer:'OANDA',gateway:'currency',sector:'finance',category:'Tools & Utilities',rating:4.5,installs:'178K',isPartner:true,isFeatured:true},
  {id:'app-fx-cal',name:'Economic Calendar',icon:'📅',desc:'Central bank decisions, data releases, and market-moving events',developer:'CurrencyXX',gateway:'currency',sector:'finance',category:'Data & Analytics',rating:4.6,installs:'112K',isPartner:false,isFeatured:true},
  {id:'app-pair-anal',name:'Pair Analyser',icon:'📊',desc:'Correlation matrices, carry trade calculator, and pair comparisons',developer:'CurrencyXX',gateway:'currency',sector:'finance',category:'Data & Analytics',rating:4.3,installs:'56K',isPartner:false,isFeatured:false},
  // GothXX apps
  {id:'app-goth-events',name:'Dark Events',icon:'🦇',desc:'Goth nights, festivals, and alternative events worldwide',developer:'GothXX',gateway:'goth',sector:'fashion',category:'Entertainment',rating:4.7,installs:'34K',isPartner:false,isFeatured:true},
  {id:'app-style-arch',name:'Style Archive',icon:'📸',desc:'Browse and save dark fashion inspiration from the community',developer:'GothXX',gateway:'goth',sector:'fashion',category:'Tools & Utilities',rating:4.5,installs:'28K',isPartner:false,isFeatured:true},
  {id:'app-killstar',name:'Killstar Store',icon:'🖤',desc:'Browse and shop the full Killstar collection',developer:'Killstar',gateway:'goth',sector:'fashion',category:'Commerce & Shopping',rating:4.4,installs:'41K',isPartner:true,isFeatured:true},
  // DenimXX apps
  {id:'app-fade-track',name:'Fade Tracker',icon:'👖',desc:'Document your raw denim journey — photos, wear count, wash log, and community sharing',developer:'DenimXX',gateway:'denim',sector:'fashion',category:'Tools & Utilities',rating:4.8,installs:'23K',isPartner:false,isFeatured:true},
  {id:'app-denim-guide',name:'Denim Heritage Guide',icon:'📖',desc:'Encyclopedia of American and Japanese mills, selvedge weaves, and brand histories',developer:'DenimXX',gateway:'denim',sector:'fashion',category:'Training & Education',rating:4.6,installs:'18K',isPartner:false,isFeatured:true},
  {id:'app-iron-heart',name:'Iron Heart Store',icon:'🔨',desc:'Browse the full Iron Heart collection with sizing guides and fade galleries',developer:'Iron Heart',gateway:'denim',sector:'fashion',category:'Commerce & Shopping',rating:4.7,installs:'15K',isPartner:true,isFeatured:false},
];

