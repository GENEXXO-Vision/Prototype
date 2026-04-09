const APP_CATEGORIES = ['Tools & Utilities','Training & Education','Data & Analytics','Commerce & Shopping','Booking & Travel','Entertainment'];

/* ────── BRAND DIRECTORY ────── */
const BRAND_DIRECTORY = [
  // SurfXX
  {id:'br-quiksilver',name:'Quiksilver',logo:'Qk',tagline:'Born in the surf since 1969',gateway:'surf',sector:'adventure',tier:'Founding Partner',followers:'22.4K',products:340,color:'#0A1628',zoneKey:'quiksilver',recentPost:'2026 Highline Pro Boardshort — developed with WSL athletes over 18 months'},
  {id:'br-msw',name:'Magic Seaweed',logo:'MS',tagline:'The world\'s most trusted surf forecast since 1999',gateway:'surf',sector:'adventure',tier:'Brand Zone',followers:'89.4K',products:3,color:'#0066CC',zoneKey:'magic-seaweed',recentPost:'SWELL ALERT: Nazare 40-50ft faces forecast this Saturday'},
  // CycleXX
  {id:'br-wahoo',name:'Wahoo',logo:'Wh',tagline:'Smart trainers and cycling computers for watts obsessives',gateway:'cycle',sector:'adventure',tier:'Founding Partner',followers:'31.2K',products:24,color:'#F5C400',zoneKey:'wahoo',recentPost:'KICKR Move — the first smart trainer that moves with you'},
  {id:'br-rapha',name:'Rapha',logo:'Ra',tagline:'Premium cycling apparel for those who ride because they must',gateway:'cycle',sector:'adventure',tier:'Brand Zone',followers:'45.6K',products:180,color:'#CC0000',zoneKey:'rapha',recentPost:'Pro Team Aero Jersey 2026 — worn by six WorldTour teams'},
  // SailXX
  {id:'br-garmin-marine',name:'Garmin Marine',logo:'GM',tagline:'Navigation technology trusted by ocean racers worldwide',gateway:'sail',sector:'adventure',tier:'Founding Partner',followers:'19.8K',products:67,color:'#1B3A6B',zoneKey:'garmin-marine',recentPost:'GPSMAP AI weather routing — tested by the Ocean Race fleet'},
  {id:'br-helly-hansen',name:'Helly Hansen',logo:'HH',tagline:'Protecting ocean workers and racers since 1877',gateway:'sail',sector:'adventure',tier:'Brand Zone',followers:'28.4K',products:240,color:'#C9A84C',zoneKey:'helly-hansen',recentPost:'Aegir Ocean Jacket — zero failures across 25,000 Ocean Race miles'},
  // ClimbXX
  {id:'br-la-sportiva',name:'La Sportiva',logo:'LS',tagline:'Climbing footwear since 1928',gateway:'climb',sector:'adventure',tier:'Founding Partner',followers:'12.4K',products:89,color:'#E84D3A',zoneKey:'la-sportiva',recentPost:'Introducing the Solution Comp — No-Edge 2.0 technology'},
  {id:'br-petzl',name:'Petzl',logo:'Pz',tagline:'Vertical safety equipment',gateway:'climb',sector:'adventure',tier:'Brand Zone',followers:'8.9K',products:124,color:'#3B82F6',zoneKey:'petzl',recentPost:'New Grigri+ with assisted braking update'},
  {id:'br-mountain-project',name:'Mountain Project',logo:'MP',tagline:'Route database & community',gateway:'climb',sector:'adventure',tier:'Brand Zone',followers:'34.2K',products:0,color:'#16A34A',zoneKey:'mountain-project',recentPost:'500,000th route added to the database'},
  // SkiXX
  {id:'br-atomic',name:'Atomic',logo:'At',tagline:'Race & freeride technology',gateway:'ski',sector:'adventure',tier:'Founding Partner',followers:'28.4K',products:140,color:'#EF4444',zoneKey:'atomic',recentPost:'Redster X9S Carbon \u2014 the fastest Atomic ever made'},
  {id:'br-salomon',name:'Salomon',logo:'Sa',tagline:'All-mountain equipment',gateway:'ski',sector:'adventure',tier:'Brand Zone',followers:'41.2K',products:180,color:'#3B82F6',zoneKey:'salomon',recentPost:'QST 106 redesigned \u2014 Chamonix to Verbier tested'},
  // StocksXX
  {id:'br-ig',name:'IG Index',logo:'IG',tagline:'CFD and spread betting platform',gateway:'stocks',sector:'finance',tier:'Platform Partner',followers:'45.6K',products:0,color:'#EF4444',recentPost:'Zero commission on US equities — new for 2026'},
  {id:'br-tradingview',name:'TradingView',logo:'TV',tagline:'Charts and community ideas',gateway:'stocks',sector:'finance',tier:'Platform Partner',followers:'67.8K',products:0,color:'#2563EB',recentPost:'AI pattern recognition now in public beta'},
  // CurrencyXX
  {id:'br-oanda',name:'OANDA',logo:'OA',tagline:'FX and CFD trading',gateway:'currency',sector:'finance',tier:'Platform Partner',followers:'23.4K',products:0,color:'#16A34A',recentPost:'Tight spreads on JPY pairs during BOJ volatility'},
  // GothXX
  {id:'br-killstar',name:'Killstar',logo:'KS',tagline:'Alternative fashion & lifestyle',gateway:'goth',sector:'fashion',tier:'Founding Partner',followers:'18.7K',products:342,color:'#9333EA',recentPost:'New Hex Collection drop — pre-order live now'},
  {id:'br-disturbia',name:'Disturbia',logo:'Db',tagline:'Subculture clothing',gateway:'goth',sector:'fashion',tier:'Brand Zone',followers:'11.2K',products:198,color:'#EC4899',recentPost:'Collaboration with artist Zdzisław Beksiński estate'},
  {id:'br-rick-owens',name:'Rick Owens',logo:'RO',tagline:'Dark luxury fashion',gateway:'goth',sector:'fashion',tier:'Brand Zone',followers:'28.9K',products:87,color:'#666',recentPost:'AW27 — brutal silhouettes, raw leather, Throbbing Gristle soundtrack'},
  // DenimXX
  {id:'br-iron-heart',name:'Iron Heart',logo:'IH',tagline:'Japanese heavyweight selvedge',gateway:'denim',sector:'fashion',tier:'Founding Partner',followers:'9.8K',products:56,color:'#8B4513',recentPost:'634S 21oz extra heavy back in stock — limited run'},
  {id:'br-levis-vintage',name:"Levi's Vintage Clothing",logo:'LV',tagline:'Heritage reproductions',gateway:'denim',sector:'fashion',tier:'Brand Zone',followers:'14.5K',products:34,color:'#1E3A5F',recentPost:'1947 501XX — the jean that built America'},
  {id:'br-3sixteen',name:'3sixteen',logo:'3s',tagline:'New York selvedge',gateway:'denim',sector:'fashion',tier:'Brand Zone',followers:'7.2K',products:28,color:'#444',recentPost:'CT-100xk Kibata — shadow selvedge from Japan'},
  // DietXX
  {id:'br-myfitnesspal',name:'MyFitnessPal',logo:'MF',tagline:'The world\'s most trusted nutrition tracking platform',gateway:'diet',sector:'wellness',tier:'Founding Partner',followers:'178.4K',products:3,color:'#2D7A3A',zoneKey:'myfitnesspal',recentPost:'AI meal planning live \u2014 your week built automatically from your macros and preferences'},
  {id:'br-zoe',name:'Zoe',logo:'Zo',tagline:'Personalised nutrition science \u2014 your body is unique',gateway:'diet',sector:'wellness',tier:'Brand Zone',followers:'45.6K',products:2,color:'#0A1A0A',zoneKey:'zoe',recentPost:'PREDICT study: 1 million microbiome samples analysed \u2014 personalised nutrition is here'},
  // SleepXX
  {id:'br-whoop',name:'Whoop',logo:'Wh',tagline:'The health wearable that tells you how recovered you really are',gateway:'sleep',sector:'wellness',tier:'Founding Partner',followers:'56.8K',products:4,color:'#7C6FF7',zoneKey:'whoop',recentPost:'93.4% sleep staging accuracy validated against clinical polysomnography'},
  {id:'br-calm',name:'Calm',logo:'Ca',tagline:'The world\'s leading app for sleep and meditation',gateway:'sleep',sector:'wellness',tier:'Brand Zone',followers:'234.8K',products:3,color:'#312E81',zoneKey:'calm',recentPost:'Stephen Fry narrates The Midnight Garden \u2014 our most requested Sleep Story'},
  // YogaXX
  {id:'br-lululemon',name:'Lululemon',logo:'Lu',tagline:'Technical apparel designed for the practice',gateway:'yoga',sector:'wellness',tier:'Founding Partner',followers:'89.4K',products:340,color:'#1A0E00',zoneKey:'lululemon',recentPost:'New Align collection \u2014 14 colourways, Nulu fabric, zero distractions'},
  {id:'br-insight-timer',name:'Insight Timer',logo:'IT',tagline:'The world\'s largest free meditation app',gateway:'yoga',sector:'wellness',tier:'Brand Zone',followers:'134.2K',products:3,color:'#C4845A',zoneKey:'insight-timer',recentPost:'6 million people meditated today \u2014 free for ever for the core practice'},
  // DressXX
  {id:'br-asos',name:'ASOS',logo:'AS',tagline:'Fashion for all — thousands of dresses',gateway:'dress',sector:'fashion',tier:'Brand Zone',followers:'67.2K',products:8500,color:'#1A0812',zoneKey:'asos-dress',recentPost:'New season occasion edit — 340 new dresses just dropped'},
  {id:'br-reformation',name:'Reformation',logo:'Rf',tagline:'Making killer clothes that don\'t kill the planet',gateway:'dress',sector:'fashion',tier:'Brand Zone',followers:'42.8K',products:180,color:'#9B2335',zoneKey:'reformation',recentPost:'Winslow Dress back in six new colourways — deadstock fabric'},
  // HandbagXX
  {id:'br-rebag',name:'Rebag',logo:'RB',tagline:'Luxury handbag resale and authentication',gateway:'handbag',sector:'fashion',tier:'Brand Zone',followers:'18.7K',products:2400,color:'#1C1008',zoneKey:'rebag',recentPost:'47 new Herm\u00e8s pieces authenticated and listed this morning'},
  {id:'br-entrupy',name:'Entrupy',logo:'En',tagline:'AI-powered luxury authentication in seconds',gateway:'handbag',sector:'fashion',tier:'Brand Zone',followers:'12.4K',products:3,color:'#B8860B',zoneKey:'entrupy',recentPost:'99.1% accuracy across 1.2 million authenticated pieces'},
  {id:'br-tellason',name:'Tellason',logo:'Te',tagline:'San Francisco-made denim',gateway:'denim',sector:'fashion',tier:'Brand Zone',followers:'5.1K',products:18,color:'#A0522D',recentPost:'Ankara 14.75oz — Cone Mills tribute edition'},
  // SneakerXX
  {id:'br-firebullet',name:'Firebullet',logo:'FB',tagline:'Performance footwear for those who collect and compete',gateway:'sneaker',sector:'fashion',tier:'Founding Partner',followers:'28.4K',products:12,color:'#E84D3A',zoneKey:'firebullet',recentPost:'2026 Edition Trainer — live now. 2,000 pairs. No restocks.'},
  {id:'br-new-balance',name:'New Balance',logo:'NB',tagline:'Made in USA & UK performance footwear',gateway:'sneaker',sector:'fashion',tier:'Brand Zone',followers:'41.2K',products:234,color:'#EF4444',zoneKey:'new-balance',recentPost:'990v6 Made in USA \u2014 six months of wear testing in New England'},
  {id:'br-salehe',name:'Salehe Bembury',logo:'SB',tagline:'Designer and creative director',gateway:'sneaker',sector:'fashion',tier:'Brand Zone',followers:'19.8K',products:8,color:'#6366F1',zoneKey:'salehe-bembury',recentPost:'Q2 collaboration announced \u2014 the brand I have wanted to work with since I was 14'},
];

/* ────── ALL SECTORS (for sidebar and Hub) ────── */
const ALL_SECTORS = [
    {key:'adventure',name:'Adventure',icon:'\u26A1',tag:'Sports & Adventure',g:'linear-gradient(135deg,#E85D3A,#FF8C42)'},
    {key:'fashion',name:'Fashion',icon:'\u2726',tag:'Style & Editorial',g:'linear-gradient(135deg,#1a1a2e,#333)'},
    {key:'wellness',name:'Wellness',icon:'\uD83E\uDDD8',tag:'Mind & Body',g:'linear-gradient(135deg,#0D5C63,#1A8A7A)'},
    {key:'finance',name:'Finance',icon:'\uD83D\uDCCA',tag:'Markets & Intelligence',g:'linear-gradient(135deg,#0F172A,#1E3A5F)'},
    {key:'education',name:'Education',icon:'\uD83C\uDF93',tag:'Learning & Development',g:'linear-gradient(135deg,#1D4ED8,#60A5FA)'},
    {key:'career',name:'Career',icon:'\uD83D\uDCBC',tag:'Professional & Growth',g:'linear-gradient(135deg,#1E40AF,#3B82F6)'},
    {key:'health',name:'Health',icon:'\uD83D\uDC8A',tag:'Conditions & Science',g:'linear-gradient(135deg,#0891B2,#67E8F9)'},
    {key:'hobby',name:'Hobby',icon:'\uD83C\uDFB5',tag:'Passions & Pastimes',g:'linear-gradient(135deg,#B45309,#D97706)'},
    {key:'travel',name:'Travel',icon:'\u2708\uFE0F',tag:'Destinations & Adventure',g:'linear-gradient(135deg,#0EA5E9,#38BDF8)'},
    {key:'business',name:'Business',icon:'\uD83C\uDFE2',tag:'Enterprise & Strategy',g:'linear-gradient(135deg,#334155,#64748B)'},
    {key:'law',name:'Law',icon:'\u2696\uFE0F',tag:'Legal & Justice',g:'linear-gradient(135deg,#1E3A5F,#334155)'},
    {key:'media',name:'Media',icon:'\uD83C\uDFA5',tag:'Content & Broadcast',g:'linear-gradient(135deg,#7C3AED,#A78BFA)'},
    {key:'nonprofit',name:'Nonprofit',icon:'\uD83D\uDC9A',tag:'Charity & Giving',g:'linear-gradient(135deg,#15803D,#4ADE80)'},
    {key:'issues',name:'Issues',icon:'\uD83D\uDCE2',tag:'Society & Policy',g:'linear-gradient(135deg,#DC2626,#F87171)'},
    {key:'environment',name:'Environment',icon:'\uD83C\uDF0D',tag:'Planet & Sustainability',g:'linear-gradient(135deg,#15803D,#16A34A)'},
    {key:'construction',name:'Construction',icon:'\uD83C\uDFD7\uFE0F',tag:'Building & Infrastructure',g:'linear-gradient(135deg,#92400E,#B45309)'},
    {key:'machinery',name:'Machinery',icon:'\u2699\uFE0F',tag:'Industrial & Automation',g:'linear-gradient(135deg,#475569,#64748B)'},
    {key:'materials',name:'Materials',icon:'\uD83E\uDEA8',tag:'Metals & Resources',g:'linear-gradient(135deg,#78716C,#A8A29E)'},
    {key:'chemical',name:'Chemical',icon:'\uD83E\uDDEA',tag:'Compounds & Processing',g:'linear-gradient(135deg,#0891B2,#06B6D4)'},
    {key:'automotive',name:'Automotive',icon:'\uD83C\uDFCE\uFE0F',tag:'Vehicles & Motorsport',g:'linear-gradient(135deg,#DC2626,#991B1B)'},
    {key:'logistics',name:'Logistics',icon:'\uD83D\uDE9A',tag:'Supply Chain & Transport',g:'linear-gradient(135deg,#1E40AF,#2563EB)'},
    {key:'aerospace',name:'Aerospace',icon:'\uD83D\uDE80',tag:'Flight & Exploration',g:'linear-gradient(135deg,#0F172A,#312E81)'},
    {key:'agriculture',name:'Agriculture',icon:'\uD83C\uDF3E',tag:'Farming & Production',g:'linear-gradient(135deg,#166534,#4ADE80)'},
    {key:'energy',name:'Energy',icon:'\uD83D\uDD0B',tag:'Power & Sustainability',g:'linear-gradient(135deg,#CA8A04,#FACC15)'},
    {key:'beauty',name:'Beauty',icon:'\uD83D\uDC84',tag:'Skincare & Cosmetics',g:'linear-gradient(135deg,#DB2777,#F472B6)'},
    {key:'gift',name:'Gift',icon:'\uD83C\uDF81',tag:'Giving & Celebration',g:'linear-gradient(135deg,#E11D48,#F43F5E)'},
    {key:'celebration',name:'Celebration',icon:'\uD83C\uDF89',tag:'Festivals & Occasions',g:'linear-gradient(135deg,#D946EF,#E879F9)'},
    {key:'sports',name:'Sports',icon:'\u26BD',tag:'Team Sports & Fans',g:'linear-gradient(135deg,#15803D,#22C55E)'},
    {key:'tech',name:'Tech',icon:'\uD83D\uDCBB',tag:'Innovation & AI',g:'linear-gradient(135deg,#7C3AED,#A78BFA)'},
    {key:'gadget',name:'Gadget',icon:'\uD83D\uDCF1',tag:'Devices & Hardware',g:'linear-gradient(135deg,#475569,#94A3B8)'},
    {key:'food',name:'Food',icon:'\uD83C\uDF5D',tag:'Cuisine & Culture',g:'linear-gradient(135deg,#16A34A,#4ADE80)'},
    {key:'drink',name:'Drink',icon:'\uD83C\uDF77',tag:'Beverages & Tasting',g:'linear-gradient(135deg,#7F1D1D,#B91C1C)'},
    {key:'country',name:'Country',icon:'\uD83C\uDF0D',tag:'Nations & Culture',g:'linear-gradient(135deg,#1E3A5F,#2563EB)'},
    {key:'city',name:'City',icon:'\uD83C\uDFD9\uFE0F',tag:'Urban & Metropolitan',g:'linear-gradient(135deg,#334155,#475569)'},
    {key:'gaming',name:'Gaming',icon:'\uD83C\uDFB0',tag:'Play & Strategy',g:'linear-gradient(135deg,#15803D,#14532D)'},
    {key:'living',name:'Living',icon:'\uD83D\uDECB\uFE0F',tag:'Home & Interiors',g:'linear-gradient(135deg,#78716C,#A8A29E)'},
    {key:'pet',name:'Pet',icon:'\uD83D\uDC3E',tag:'Animals & Care',g:'linear-gradient(135deg,#92400E,#D97706)'},
    {key:'parenting',name:'Parenting',icon:'\uD83D\uDC76',tag:'Family & Childcare',g:'linear-gradient(135deg,#2563EB,#60A5FA)'},
    {key:'boutique',name:'Boutique',icon:'\uD83C\uDFAD',tag:'Subculture & Niche',g:'linear-gradient(135deg,#9333EA,#C084FC)'},
    {key:'spirituality',name:'Spirituality',icon:'\u2728',tag:'Mind & Consciousness',g:'linear-gradient(135deg,#6D28D9,#8B5CF6)'},
    {key:'leisure',name:'Leisure',icon:'\uD83C\uDF7E',tag:'Social & Entertainment',g:'linear-gradient(135deg,#B45309,#F59E0B)'},
    {key:'consumer',name:'Consumer',icon:'\uD83D\uDED2',tag:'Shopping & Deals',g:'linear-gradient(135deg,#0EA5E9,#38BDF8)'},
    {key:'realestate',name:'Real Estate',icon:'\uD83C\uDFE2',tag:'Property & Development',g:'linear-gradient(135deg,#0D9488,#2DD4BF)'},
];

/* ────── SECTOR GATEWAY LOOKUP ────── */
const SECTOR_GATEWAYS = {
  wellness:['YogaXX','DietXX','SleepXX','StressXX','VitaminXX','WellnessXX'],
  adventure:['ClimbXX','SkiXX','SurfXX','CycleXX','SailXX','SwimXX','RunXX','TriXX'],
  finance:['StocksXX','CurrencyXX','CryptoXX','LoanXX','MortgageXX','PensionXX'],
  fashion:['GothXX','DenimXX','HandbagXX','SneakerXX','DressXX','LingerieXX'],
  education:['EnglishXX','HistoryXX','MathXX','MedicineXX','RoboticsXX','ScienceXX'],
  career:['AccountantXX','ChefXX','DoctorXX','JournalistXX','LawyerXX','PlumberXX'],
  health:['ArthritisXX','BloodXX','CholesterolXX','DiabetesXX','DrugXX','HealthXX'],
  wellness:['DietXX','SleepXX','StressXX','VitaminXX','WellnessXX','YogaXX'],
  hobby:['BakeXX','ChessXX','CraftXX','DanceXX','HobbyXX','MusicXX'],
  travel:['BeachXX','CruiseXX','FlightXX','HoneymoonXX','HotelXX','TravelXX'],
  business:['BusinessXX','ConsultingXX','FranchiseXX','MarketingXX','RecruitmentXX','ResearchXX'],
  law:['CopyrightXX','LawXX','LegalXX','PatentXX','PolicyXX','TrademarkXX'],
  media:['BlogXX','FilmXX','MediaXX','PodcastXX','SocialXX','StreamXX'],
  nonprofit:['CauseXX','CharityXX','CrowdfundXX','DonateXX','NonprofitXX','PhilanthropyXX'],
  issues:['CrimeXX','DiseaseXX','EconomyXX','EmploymentXX','EqualityXX','LiteracyXX'],
  environment:['ClimateXX','ConservationXX','EnvironmentXX','OceanXX','RecycleXX','WasteXX'],
  construction:['AggregatesXX','BuildingXX','CementXX','ConstructionXX','RoadXX','TunnelXX'],
  machinery:['AutomationXX','EngineXX','FactoryXX','GeneratorXX','MachineryXX','SemiconductorXX'],
  materials:['CopperXX','GlassXX','GoldXX','PaperXX','RubberXX','SteelXX'],
  chemical:['AdditiveXX','ChemicalXX','DyeXX','FertilizerXX','PharmaceuticalXX','PlasticXX'],
  automotive:['AutoXX','ElectricXX','HybridXX','ScooterXX','TireXX','TruckXX'],
  logistics:['DeliveryXX','FreightXX','LogisticsXX','RailXX','StorageXX','TransportXX'],
  aerospace:['AerospaceXX','DroneXX','JetXX','RocketXX','SatelliteXX','SpaceXX'],
  agriculture:['AgricultureXX','CottonXX','FarmingXX','ForestryXX','SugarXX','WheatXX'],
  energy:['CarbonXX','EnergyXX','GasXX','NuclearXX','OilXX','SolarXX'],
  beauty:['BeautyXX','LipstickXX','PerfumeXX','ShaveXX','SkinXX','SpaXX'],
  gift:['ArtXX','CandyXX','ChocolateXX','GiftXX','JewelryXX','ToyXX'],
  celebration:['ChristmasXX','DiwaliXX','EidXX','HanukkahXX','ValentinesXX','WeddingXX'],
  sports:['BaseballXX','BasketballXX','FootballXX','GolfXX','SoccerXX','TennisXX'],
  tech:['BlockchainXX','DataXX','EmailXX','MetaverseXX','NFTXX','TechXX'],
  gadget:['ComputeXX','GadgetXX','LaptopXX','PhoneXX','TabletXX','TelevisionXX'],
  food:['BurgerXX','CakeXX','PastaXX','PizzaXX','SushiXX','VeganXX'],
  drink:['BeerXX','CoffeeXX','GinXX','TequilaXX','VodkaXX','WhiskeyXX'],
  country:['AustraliaXX','BrazilXX','ItalyXX','SaudiXX','ThailandXX','UsaXX'],
  city:['BeijingXX','DubaiXX','LondonXX','RiyadhXX','RomeXX','VegasXX'],
  gaming:['BingoXX','CasinoXX','EsportsXX','FantasyXX','LotteryXX','SlotsXX'],
  living:['BathXX','BedXX','GardenXX','KitchenXX','RugXX','SofaXX'],
  pet:['CatXX','DogsXX','HorseXX','PetXX','ReptileXX','SnakeXX'],
  parenting:['BabyXX','FamilyXX','MaternityXX','NurseryXX','ParentXX','PregnancyXX'],
  boutique:['BoutiqueXX','BratXX','CosplayXX','CrushXX','PunkXX','VintageXX'],
  spirituality:['AwakeningXX','ConsciousnessXX','CrystalXX','ManifestationXX','SpiritualityXX','TarotXX'],
  leisure:['BarXX','FestivalXX','GalleryXX','LeisureXX','RestaurantXX','TheaterXX'],
  consumer:['ClaimXX','CouponXX','DiscountXX','RentXX','SearchXX','SellXX'],
  realestate:['ApartmentXX','HousingXX','OfficeXX','PropertyXX','TimeshareXX','WarehouseXX'],
};

/* ═══════════════════════════════════════════════════════════
   ██████  STATE  ██████
   ═══════════════════════════════════════════════════════════ */
let state = { view:'hub', sector:null, gateway:null, brandZone:null, gwTab:'Feed', selectedDest:'Méribel', tradePlatform:0, appStoreScope:'hub', appStoreContext:null, appDetail:null, hubTab:'home', sectorFilter:null, brandStoreScope:'hub', brandStoreContext:null, navOrigin:null, showProfile:false, profileTab:'posts', favourites:['climb'] };
let wallet = { ski:['Ski Pass','Piste Map','Snow Report'], stocks:['IG Index','TradingView'] };
let purchaseState = 'buy'; // buy | confirm
