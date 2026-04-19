var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;
var G = '#d4af37';
var DARK = '#08091a';
var CB = 'rgba(12,24,54,0.9)';
var BD = 'rgba(212,175,55,0.22)';

var LANGS = [{code:'en',label:'EN'},{code:'fr',label:'FR'},{code:'es',label:'ES'},{code:'pt',label:'PT'},{code:'it',label:'IT'},{code:'de',label:'DE'}];

// ── TEAM DATA PER LANGUAGE ─────────────────────────────────────
var MY_TEAM = {
  en:{team:'England',group:'L',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',color:'rgba(0,36,125,0.4)'},
  fr:{team:'France',group:'I',flag:'🇫🇷',color:'rgba(0,35,149,0.4)'},
  es:{team:'Spain',group:'H',flag:'🇪🇸',color:'rgba(170,0,0,0.4)'},
  pt:{team:'Portugal',group:'K',flag:'🇵🇹',color:'rgba(0,102,0,0.4)'},
  it:{team:'Italy',group:null,flag:'🇮🇹',color:'rgba(0,82,156,0.4)'},
  de:{team:'Germany',group:'E',flag:'🇩🇪',color:'rgba(0,0,0,0.4)'}
};

var GROUPS = {
  A:{teams:['Mexico','South Africa','South Korea','Czech Republic'],host:true,hostName:'Mexico'},
  B:{teams:['Canada','Bosnia','Qatar','Switzerland'],host:true,hostName:'Canada'},
  C:{teams:['Brazil','Morocco','Haiti','Scotland']},
  D:{teams:['USA','Paraguay','Australia','Turkey'],host:true,hostName:'USA'},
  E:{teams:['Germany','Curacao','Ivory Coast','Ecuador']},
  F:{teams:['Netherlands','Japan','Sweden','Tunisia']},
  G:{teams:['Belgium','Egypt','Iran','New Zealand']},
  H:{teams:['Spain','Cape Verde','Saudi Arabia','Uruguay']},
  I:{teams:['France','Senegal','Iraq','Norway']},
  J:{teams:['Argentina','Algeria','Austria','Jordan']},
  K:{teams:['Portugal','DR Congo','Uzbekistan','Colombia']},
  L:{teams:['England','Croatia','Ghana','Panama']}
};

var ALL_TEAMS = Object.values(GROUPS).reduce(function(a,g){return a.concat(g.teams);},[]).sort();

// ── FIXTURES ──────────────────────────────────────────────────
var FIXTURES = [
  {date:'2026-06-11',time:'19:00',home:'Mexico',away:'South Africa',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-12',time:'02:00',home:'South Korea',away:'Czechia',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-12',time:'19:00',home:'Canada',away:'Bosnia',group:'B',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-13',time:'01:00',home:'USA',away:'Paraguay',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-13',time:'19:00',home:'Qatar',away:'Switzerland',group:'B',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-06-13',time:'22:00',home:'Brazil',away:'Morocco',group:'C',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-14',time:'01:00',home:'Haiti',away:'Scotland',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-14',time:'04:00',home:'Australia',away:'Turkey',group:'D',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-14',time:'17:00',home:'Germany',away:'Curacao',group:'E',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-14',time:'20:00',home:'Netherlands',away:'Japan',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-14',time:'23:00',home:'Ivory Coast',away:'Ecuador',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-15',time:'02:00',home:'Sweden',away:'Tunisia',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-15',time:'16:00',home:'Spain',away:'Cape Verde',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-15',time:'19:00',home:'Belgium',away:'Egypt',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-15',time:'22:00',home:'Saudi Arabia',away:'Uruguay',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-16',time:'01:00',home:'Iran',away:'New Zealand',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-16',time:'19:00',home:'France',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-16',time:'22:00',home:'Iraq',away:'Norway',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-17',time:'01:00',home:'Argentina',away:'Algeria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-17',time:'04:00',home:'Austria',away:'Jordan',group:'J',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-06-17',time:'17:00',home:'Portugal',away:'DR Congo',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-17',time:'20:00',home:'England',away:'Croatia',group:'L',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-17',time:'23:00',home:'Ghana',away:'Panama',group:'L',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-18',time:'02:00',home:'Uzbekistan',away:'Colombia',group:'K',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-18',time:'16:00',home:'Czechia',away:'South Africa',group:'A',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-18',time:'19:00',home:'Switzerland',away:'Bosnia',group:'B',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-18',time:'22:00',home:'Canada',away:'Qatar',group:'B',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-19',time:'01:00',home:'Mexico',away:'South Korea',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-19',time:'19:00',home:'USA',away:'Australia',group:'D',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-19',time:'22:00',home:'Scotland',away:'Morocco',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-20',time:'00:30',home:'Brazil',away:'Haiti',group:'C',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-20',time:'03:00',home:'Turkey',away:'Paraguay',group:'D',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-06-20',time:'17:00',home:'Netherlands',away:'Sweden',group:'F',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-20',time:'20:00',home:'Germany',away:'Ivory Coast',group:'E',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-21',time:'00:00',home:'Ecuador',away:'Curacao',group:'E',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-21',time:'04:00',home:'Tunisia',away:'Japan',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-21',time:'16:00',home:'Spain',away:'Saudi Arabia',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-21',time:'19:00',home:'Belgium',away:'Iran',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-21',time:'22:00',home:'Uruguay',away:'Cape Verde',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-22',time:'01:00',home:'New Zealand',away:'Egypt',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-22',time:'17:00',home:'Argentina',away:'Austria',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-22',time:'21:00',home:'France',away:'Iraq',group:'I',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-23',time:'00:00',home:'Norway',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-23',time:'03:00',home:'Jordan',away:'Algeria',group:'J',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-06-23',time:'17:00',home:'Portugal',away:'Uzbekistan',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-23',time:'20:00',home:'England',away:'Ghana',group:'L',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-23',time:'23:00',home:'Panama',away:'Croatia',group:'L',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-24',time:'02:00',home:'Colombia',away:'DR Congo',group:'K',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-24',time:'19:00',home:'Switzerland',away:'Canada',group:'B',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-24',time:'19:00',home:'Bosnia',away:'Qatar',group:'B',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-24',time:'22:00',home:'Scotland',away:'Brazil',group:'C',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-24',time:'22:00',home:'Morocco',away:'Haiti',group:'C',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-25',time:'01:00',home:'Czechia',away:'Mexico',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-25',time:'01:00',home:'South Africa',away:'South Korea',group:'A',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-25',time:'20:00',home:'Curacao',away:'Ivory Coast',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-25',time:'20:00',home:'Ecuador',away:'Germany',group:'E',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-25',time:'23:00',home:'Japan',away:'Sweden',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-25',time:'23:00',home:'Tunisia',away:'Netherlands',group:'F',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-26',time:'02:00',home:'Turkey',away:'USA',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-26',time:'02:00',home:'Paraguay',away:'Australia',group:'D',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-06-26',time:'19:00',home:'Norway',away:'France',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-26',time:'19:00',home:'Senegal',away:'Iraq',group:'I',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-27',time:'00:00',home:'Cape Verde',away:'Saudi Arabia',group:'H',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-27',time:'00:00',home:'Uruguay',away:'Spain',group:'H',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-27',time:'03:00',home:'Egypt',away:'Iran',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-27',time:'03:00',home:'New Zealand',away:'Belgium',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-27',time:'21:00',home:'Panama',away:'England',group:'L',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-27',time:'21:00',home:'Croatia',away:'Ghana',group:'L',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-27',time:'23:30',home:'Colombia',away:'Portugal',group:'K',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-27',time:'23:30',home:'DR Congo',away:'Uzbekistan',group:'K',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-28',time:'02:00',home:'Algeria',away:'Austria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-28',time:'02:00',home:'Jordan',away:'Argentina',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-28',time:'19:00',home:'2nd A',away:'2nd B',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-29',time:'17:00',home:'1st C',away:'2nd F',group:'R32',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-29',time:'20:30',home:'1st E',away:'Best 3rd',group:'R32',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-30',time:'01:00',home:'1st F',away:'2nd C',group:'R32',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-30',time:'17:00',home:'2nd E',away:'2nd I',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-30',time:'21:00',home:'1st I',away:'Best 3rd',group:'R32',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-01',time:'01:00',home:'1st A',away:'Best 3rd',group:'R32',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-01',time:'16:00',home:'1st L',away:'Best 3rd',group:'R32',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-07-01',time:'20:00',home:'1st D',away:'Best 3rd',group:'R32',stadium:'Levis Stadium',city:'SF Bay Area'},
  {date:'2026-07-02',time:'00:00',home:'1st G',away:'Best 3rd',group:'R32',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-07-02',time:'19:00',home:'2nd K',away:'2nd L',group:'R32',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-07-02',time:'20:00',home:'1st H',away:'2nd J',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-03',time:'01:00',home:'1st B',away:'Best 3rd',group:'R32',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-07-03',time:'17:00',home:'2nd D',away:'2nd G',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-03',time:'21:00',home:'1st J',away:'2nd H',group:'R32',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-04',time:'02:30',home:'1st K',away:'Best 3rd',group:'R32',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-07-07',time:'17:00',home:'QF1',away:'QF2',group:'QF',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-07-07',time:'21:00',home:'QF3',away:'QF4',group:'QF',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-08',time:'21:00',home:'QF5',away:'QF6',group:'QF',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-09',time:'01:00',home:'QF7',away:'QF8',group:'QF',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-14',time:'00:00',home:'Semi-Final 1',away:'Semi-Final 2',group:'SF',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-15',time:'23:00',home:'Semi-Final 3',away:'Semi-Final 4',group:'SF',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-18',time:'23:00',home:'3rd Place',away:'3rd Place',group:'3P',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-19',time:'19:00',home:'FINAL',away:'FINAL',group:'FIN',stadium:'MetLife Stadium',city:'New York'}
]

// ── STARS WITH AVATARS ─────────────────────────────────────────
var STARS = [
  {name:'Kylian Mbappe',flag:'🇫🇷',club:'Real Madrid',pos:'FW',age:27,stat:'46 intl goals',rating:96,group:'I',hair:'#1a1a1a',skin:'#c8a882',shirt:'#ffffff'},
  {name:'Erling Haaland',flag:'🇳🇴',club:'Man. City',pos:'FW',age:25,stat:'44 intl goals',rating:95,group:'I',hair:'#f5d78e',skin:'#f5c5a3',shirt:'#6cabdd'},
  {name:'Vinicius Jr.',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:25,stat:'Ballon dOr nominee 2024',rating:94,group:'C',hair:'#1a1a1a',skin:'#8d5524',shirt:'#ffffff'},
  {name:'Pedri',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:23,stat:'Euro 2024 champion',rating:93,group:'H',hair:'#3d2b1f',skin:'#d4a574',shirt:'#a50044'},
  {name:'Jude Bellingham',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'MF',age:22,stat:'Best player Euro 2024',rating:93,group:'L',hair:'#1a1a1a',skin:'#8d5524',shirt:'#ffffff'},
  {name:'Harry Kane',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Bayern Munich',pos:'FW',age:32,stat:'England all-time top scorer',rating:92,group:'L',hair:'#8b7355',skin:'#f5c5a3',shirt:'#ffffff'},
  {name:'Rodri',flag:'🇪🇸',club:'Man. City',pos:'MF',age:29,stat:'Ballon dOr 2024',rating:92,group:'H',hair:'#2c1810',skin:'#c8a882',shirt:'#6cabdd'},
  {name:'Lamine Yamal',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:18,stat:'Euro 2024 champion',rating:91,group:'H',hair:'#1a1a1a',skin:'#c8a882',shirt:'#a50044'},
  {name:'Cristiano Ronaldo',flag:'🇵🇹',club:'Al Nassr',pos:'FW',age:41,stat:'915 career goals',rating:90,group:'K',hair:'#1a1a1a',skin:'#d4a574',shirt:'#006600'},
  {name:'Ruben Dias',flag:'🇵🇹',club:'Man. City',pos:'DF',age:28,stat:'Best defender PL 2021',rating:89,group:'K',hair:'#1a1a1a',skin:'#d4a574',shirt:'#6cabdd'},
  {name:'Bukayo Saka',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'FW',age:24,stat:'PFA Young Player 2024',rating:89,group:'L',hair:'#1a1a1a',skin:'#8d5524',shirt:'#ef0107'},
  {name:'Gavi',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:21,stat:'Euro 2024 champion',rating:88,group:'H',hair:'#3d2b1f',skin:'#d4a574',shirt:'#a50044'},
  {name:'Phil Foden',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Man. City',pos:'MF',age:26,stat:'PFA Player of Year 2024',rating:88,group:'L',hair:'#f5d78e',skin:'#f5c5a3',shirt:'#6cabdd'},
  {name:'Federico Valverde',flag:'🇺🇾',club:'Real Madrid',pos:'MF',age:27,stat:'Copa America 2024',rating:88,group:'H',hair:'#3d2b1f',skin:'#d4a574',shirt:'#ffffff'},
  {name:'Lionel Messi',flag:'🇦🇷',club:'Inter Miami',pos:'FW',age:39,stat:'8x Ballon dOr winner',rating:88,group:'J',hair:'#3d2b1f',skin:'#d4a574',shirt:'#74acdf'},
  {name:'Achraf Hakimi',flag:'🇲🇦',club:'PSG',pos:'DF',age:27,stat:'African Player of Year 2022',rating:87,group:'C',hair:'#1a1a1a',skin:'#8d5524',shirt:'#004170'},
  {name:'Sadio Mane',flag:'🇸🇳',club:'Al Nassr',pos:'FW',age:33,stat:'AFCON winner 2022',rating:85,group:'I',hair:'#1a1a1a',skin:'#4a2800',shirt:'#23a455'},
  {name:'Raphinha',flag:'🇧🇷',club:'FC Barcelona',pos:'FW',age:29,stat:'Champions League 2025',rating:85,group:'C',hair:'#1a1a1a',skin:'#8d5524',shirt:'#a50044'}
];

// ── TRANSLATIONS ───────────────────────────────────────────────
var T = {
  en:{appTitle:'World Cup 2026',appSub:'USA - CANADA - MEXICO',nav:['Home','Groups','Fixtures','Predictions','Quiz','Stars','Polls','Sim'],countdown:'Countdown',timeUnits:['Days','Hours','Min','Sec'],keyInfo:['Host nations','Teams','Matches','Duration'],keyVals:['3 nations','48 teams','104 matches','Jun 11-Jul 19'],format:'Tournament Format',formatLines:['12 groups of 4 teams','1st + 2nd + 8 best 3rds = 32 teams','Round of 32 > 16 > QF > SF > Final','Opening: Estadio Azteca, Mexico City','Final: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GROUPS',hostLabel:'Host',groupLabel:'Group',myTeamLabel:'My Team',pickTeam:'Pick your team',pronoSub:'Who will reach the final?',pronoWinner:'World Champion 2026',pronoFinal:'Runner-up',pronoSemi:'Semi-finalists',pronoSave:'Save',pronoSaved:'Saved!',pronoReset:'Reset',pronoChoose:'Choose...',pronoMyPick:'My pick',quizSub:'Test your knowledge!',quizScore:'Score',quizNext:'Next question',quizFinish:'See result',quizRestart:'Play again',quizPerfect:'PERFECT! You are an expert!',quizGood:'Great job!',quizAvg:'Not bad!',quizBad:'Keep studying!',starsSub:'Players to watch',pollTitle:'Polls',pollTotal:'votes',didYouKnow:'Did you know?',facts:['Italy miss the 2026 World Cup for 2nd time','Azteca hosts its 3rd World Cup','First-ever 48-team World Cup','First edition co-hosted by 3 countries','104 matches vs 64 in 2022','New IFAB rules in effect'],shareApp:'Share',shareCopied:'Link copied!',premiumBanner:'Go PREMIUM - Predictions + Stats + No ads',premiumBtn:'Unlock',manTitle:'Manual Match Simulator',manSim:'⚽ Simulate',manReset:'New Match',manWinner:'wins!',manDraw:'Draw!',simTitle:'AI Match Simulator',simTeam1:'Home Team',simTeam2:'Away Team',simRun:'Simulate with AI',simRunning:'AI Analysing...',simReset:'New Match',simWin:'wins',simDraw:'Draw',simGoals:'Goals',simStats:'Match Stats',simPoss:'Possession',simShots:'Shots',simAttack:'Attack',simDefence:'Defence',simForm:'Current Form',simAITitle:'AI Analysis',fixturesTitle:'FIXTURES & RESULTS',fixturesAll:'All matches',fixturesMy:'My team only',noFixtures:'No fixtures found'},
  fr:{appTitle:'Mundial 2026',appSub:'ETATS-UNIS - CANADA - MEXIQUE',nav:['Accueil','Groupes','Calendrier','Pronostics','Quiz','Stars','Sondages','Sim'],countdown:'Compte a rebours',timeUnits:['Jours','Heures','Min','Sec'],keyInfo:['Pays hotes','Equipes','Matchs','Duree'],keyVals:['3 nations','48 equipes','104 matchs','11 juin-19 juil.'],format:'Format du tournoi',formatLines:['12 groupes de 4 equipes','1er + 2e + 8 meilleurs 3es = 32 equipes','Tour des 32 > 16e > QF > SF > Finale','Ouverture: Estadio Azteca, Mexico','Finale: MetLife Stadium, New York'],groupsTitle:'48 EQUIPES - 12 GROUPES',hostLabel:'Pays hote',groupLabel:'Groupe',myTeamLabel:'Mon Equipe',pickTeam:'Choisir mon equipe',pronoSub:'Qui ira en finale?',pronoWinner:'Champion du Monde 2026',pronoFinal:'Finaliste',pronoSemi:'Demi-finales',pronoSave:'Sauvegarder',pronoSaved:'Sauvegarde!',pronoReset:'Reinitialiser',pronoChoose:'Choisir...',pronoMyPick:'Mon choix',quizSub:'Testez vos connaissances!',quizScore:'Score',quizNext:'Question suivante',quizFinish:'Voir mon resultat',quizRestart:'Rejouer',quizPerfect:'PARFAIT! Tu es un expert!',quizGood:'Tres bien!',quizAvg:'Pas mal!',quizBad:'Continue a reviser!',starsSub:'Les joueurs a suivre',pollTitle:'Sondages',pollTotal:'votes',didYouKnow:'Le saviez-vous?',facts:["L Italie rate le Mondial 2026 pour la 2e fois","L Azteca accueille son 3e Mondial","1er Mondial a 48 equipes","1ere edition co-organisee par 3 pays","104 matchs contre 64 en 2022","Nouvelles regles IFAB effectives"],shareApp:'Partager',shareCopied:'Lien copie!',premiumBanner:'Passez PREMIUM - Pronostics + Stats + Sans pub',premiumBtn:'Debloquer',manTitle:'Simulateur Manuel',manSim:'⚽ Simuler',manReset:'Nouveau Match',manWinner:'gagne!',manDraw:'Match nul!',simTitle:'Simulateur IA',simTeam1:'Equipe Domicile',simTeam2:'Equipe Exterieur',simRun:'Simuler avec IA',simRunning:'IA en cours...',simReset:'Nouveau Match',simWin:'gagne',simDraw:'Nul',simGoals:'Buts',simStats:'Stats du Match',simPoss:'Possession',simShots:'Tirs',simAttack:'Attaque',simDefence:'Defense',simForm:'Forme Actuelle',simAITitle:'Analyse IA',fixturesTitle:'CALENDRIER & RESULTATS',fixturesAll:'Tous les matchs',fixturesMy:'Mon equipe uniquement',noFixtures:'Aucun match trouve'},
  es:{appTitle:'Mundial 2026',appSub:'EE.UU. - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Pronosticos','Quiz','Estrellas','Sondeos','Sim'],countdown:'Cuenta regresiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitriones','Equipos','Partidos','Duracion'],keyVals:['3 naciones','48 equipos','104 partidos','11 jun-19 jul'],format:'Formato del torneo',formatLines:['12 grupos de 4 equipos','1 + 2 + 8 mejores 3eros = 32 equipos','Ronda de 32 > 16avos > QF > SF > Final','Apertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nueva York'],groupsTitle:'48 EQUIPOS - 12 GRUPOS',hostLabel:'Anfitri',groupLabel:'Grupo',myTeamLabel:'Mi Equipo',pickTeam:'Elegir mi equipo',pronoSub:'Quien llegara a la final?',pronoWinner:'Campeon del Mundo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalistas',pronoSave:'Guardar',pronoSaved:'Guardado!',pronoReset:'Reiniciar',pronoChoose:'Elegir...',pronoMyPick:'Mi eleccion',quizSub:'Pon a prueba tus conocimientos!',quizScore:'Puntuacion',quizNext:'Siguiente',quizFinish:'Ver resultado',quizRestart:'Jugar de nuevo',quizPerfect:'Perfecto! Eres un experto!',quizGood:'Muy bien!',quizAvg:'Nada mal!',quizBad:'Sigue estudiando!',starsSub:'Jugadores a seguir',pollTitle:'Sondeos',pollTotal:'votos',didYouKnow:'Sabias que?',facts:['Italia se pierde el Mundial 2026 por 2a vez','El Azteca acoge su 3er Mundial','El primer Mundial con 48 equipos','Primera edicion organizada por 3 paises','104 partidos frente a 64 en 2022','Nuevas reglas del IFAB en vigor'],shareApp:'Compartir',shareCopied:'Enlace copiado!',premiumBanner:'Hazte PREMIUM - Pronosticos + Estadisticas + Sin anuncios',premiumBtn:'Desbloquear',manTitle:'Simulador Manual',manSim:'⚽ Simular',manReset:'Nuevo Partido',manWinner:'gana!',manDraw:'Empate!',manTitle:'Simulador Manual',manSim:'⚽ Simular',manReset:'Nova Partida',manWinner:'vence!',manDraw:'Empate!',simTitle:'Simulador IA',simTeam1:'Equipo Local',simTeam2:'Equipo Visitante',simRun:'Simular con IA',simRunning:'IA analizando...',simReset:'Nuevo Partido',simWin:'gana',simDraw:'Empate',simGoals:'Goles',simStats:'Estadisticas',simPoss:'Posesion',simShots:'Tiros',simAttack:'Ataque',simDefence:'Defensa',simForm:'Forma Actual',simAITitle:'Analisis IA',fixturesTitle:'CALENDARIO Y RESULTADOS',fixturesAll:'Todos los partidos',fixturesMy:'Solo mi equipo',noFixtures:'No se encontraron partidos'},
  pt:{appTitle:'Mundial 2026',appSub:'EUA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Palpites','Quiz','Estrelas','Enquetes','Sim'],countdown:'Contagem regressiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitrioes','Selecoes','Jogos','Duracao'],keyVals:['3 nacoes','48 selecoes','104 jogos','11 jun-19 jul'],format:'Formato do torneio',formatLines:['12 grupos de 4 selecoes','1 + 2 + 8 melhores 3eiros = 32 equipes','Rodada de 32 > 16 > QF > SF > Final','Abertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nova York'],groupsTitle:'48 SELECOES - 12 GRUPOS',hostLabel:'Anfitriao',groupLabel:'Grupo',myTeamLabel:'Meu Time',pickTeam:'Escolher meu time',pronoSub:'Quem vai chegar a final?',pronoWinner:'Campeao do Mundo 2026',pronoFinal:'Vice-campeao',pronoSemi:'Semifinalistas',pronoSave:'Salvar',pronoSaved:'Salvo!',pronoReset:'Reiniciar',pronoChoose:'Escolher...',pronoMyPick:'Minha escolha',quizSub:'Teste seus conhecimentos!',quizScore:'Pontuacao',quizNext:'Proxima',quizFinish:'Ver resultado',quizRestart:'Jogar novamente',quizPerfect:'Perfeito! Voce e um expert!',quizGood:'Muito bem!',quizAvg:'Nada mal!',quizBad:'Continue estudando!',starsSub:'Jogadores para acompanhar',pollTitle:'Enquetes',pollTotal:'votos',didYouKnow:'Voce sabia?',facts:['A Italia perde a Copa 2026 pela 2a vez','O Azteca sedia sua 3a Copa','Primeira Copa com 48 selecoes','Primeira edicao organizada por 3 paises','104 jogos contra 64 em 2022','Novas regras do IFAB em vigor'],shareApp:'Compartilhar',shareCopied:'Link copiado!',premiumBanner:'Seja PREMIUM - Palpites + Estatisticas + Sem anuncios',premiumBtn:'Desbloquear',manTitle:'Simulador Manual',manSim:'⚽ Simular',manReset:'Nuevo Partido',manWinner:'gana!',manDraw:'Empate!',manTitle:'Simulador Manual',manSim:'⚽ Simular',manReset:'Nova Partida',manWinner:'vence!',manDraw:'Empate!',simTitle:'Simulador IA',simTeam1:'Time da Casa',simTeam2:'Time Visitante',simRun:'Simular com IA',simRunning:'IA analisando...',simReset:'Nova Partida',simWin:'vence',simDraw:'Empate',simGoals:'Gols',simStats:'Estatisticas',simPoss:'Posse',simShots:'Chutes',simAttack:'Ataque',simDefence:'Defesa',simForm:'Forma Atual',simAITitle:'Analise IA',fixturesTitle:'CALENDARIO E RESULTADOS',fixturesAll:'Todos os jogos',fixturesMy:'Apenas meu time',noFixtures:'Nenhum jogo encontrado'},
  it:{appTitle:'Mondiale 2026',appSub:'USA - CANADA - MESSICO',nav:['Home','Gruppi','Calendario','Pronostici','Quiz','Stelle','Sondaggi','Sim'],countdown:'Conto alla rovescia',timeUnits:['Giorni','Ore','Min','Sec'],keyInfo:['Paesi ospitanti','Squadre','Partite','Durata'],keyVals:['3 nazioni','48 squadre','104 partite','11 giu-19 lug'],format:'Formato del torneo',formatLines:['12 gironi da 4 squadre','1a + 2a + 8 migliori 3e = 32 squadre','Fase a 32 > 16 > QF > SF > Finale','Apertura: Estadio Azteca, Messico','Finale: MetLife Stadium, New York'],groupsTitle:'48 SQUADRE - 12 GIRONI',hostLabel:'Sede',groupLabel:'Girone',myTeamLabel:'La Mia Squadra',pickTeam:'Scegli la tua squadra',pronoSub:'Chi arrivera in finale?',pronoWinner:'Campione del Mondo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalisti',pronoSave:'Salva',pronoSaved:'Salvato!',pronoReset:'Azzera',pronoChoose:'Scegli...',pronoMyPick:'La mia scelta',quizSub:'Metti alla prova le tue conoscenze!',quizScore:'Punteggio',quizNext:'Domanda successiva',quizFinish:'Vedi risultato',quizRestart:'Gioca ancora',quizPerfect:'Perfetto! Sei un esperto!',quizGood:'Molto bene!',quizAvg:'Niente male!',quizBad:'Continua a studiare!',starsSub:'I giocatori da seguire',pollTitle:'Sondaggi',pollTotal:'voti',didYouKnow:'Lo sapevi?',facts:["L Italia non e al Mondiale 2026 per la 2a volta","L Azteca ospita il suo 3o Mondiale","Primo Mondiale con 48 squadre","Prima edizione co-organizzata da 3 paesi","104 partite contro 64 nel 2022","Nuove regole IFAB in vigore"],shareApp:'Condividi',shareCopied:'Link copiato!',premiumBanner:'Diventa PREMIUM - Pronostici + Statistiche + Senza pub',premiumBtn:'Sblocca',manTitle:'Simulatore Manuale',manSim:'⚽ Simula',manReset:'Nuova Partita',manWinner:'vince!',manDraw:'Pareggio!',simTitle:'Simulatore IA',simTeam1:'Squadra Casa',simTeam2:'Squadra Ospite',simRun:'Simula con IA',simRunning:'IA in analisi...',simReset:'Nuova Partita',simWin:'vince',simDraw:'Pareggio',simGoals:'Gol',simStats:'Statistiche',simPoss:'Possesso',simShots:'Tiri',simAttack:'Attacco',simDefence:'Difesa',simForm:'Forma Attuale',simAITitle:'Analisi IA',fixturesTitle:'CALENDARIO E RISULTATI',fixturesAll:'Tutte le partite',fixturesMy:'Solo la mia squadra',noFixtures:'Nessuna partita trovata'},
  de:{appTitle:'WM 2026',appSub:'USA - KANADA - MEXIKO',nav:['Start','Gruppen','Spielplan','Tipps','Quiz','Stars','Umfragen','Sim'],countdown:'Countdown',timeUnits:['Tage','Stunden','Min','Sek'],keyInfo:['Gastgeberlaender','Teams','Spiele','Dauer'],keyVals:['3 Nationen','48 Teams','104 Spiele','11. Jun-19. Jul'],format:'Turnierformat',formatLines:['12 Gruppen mit je 4 Teams','1. + 2. + 8 beste 3. = 32 Teams','Runde der 32 > 16 > VF > HF > Finale','Eroeffnung: Estadio Azteca, Mexiko','Finale: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GRUPPEN',hostLabel:'Gastgeber',groupLabel:'Gruppe',myTeamLabel:'Mein Team',pickTeam:'Mein Team auswaehlen',pronoSub:'Wer kommt ins Finale?',pronoWinner:'Weltmeister 2026',pronoFinal:'Finalist',pronoSemi:'Halbfinalisten',pronoSave:'Speichern',pronoSaved:'Gespeichert!',pronoReset:'Zuruecksetzen',pronoChoose:'Auswaehlen...',pronoMyPick:'Meine Wahl',quizSub:'Teste dein Wissen!',quizScore:'Punkte',quizNext:'Naechste Frage',quizFinish:'Ergebnis sehen',quizRestart:'Nochmal spielen',quizPerfect:'Perfekt! Du bist ein Experte!',quizGood:'Sehr gut!',quizAvg:'Nicht schlecht!',quizBad:'Weiter lernen!',starsSub:'Spieler zum Beobachten',pollTitle:'Umfragen',pollTotal:'Stimmen',didYouKnow:'Wusstest du?',facts:['Italien verpasst die WM 2026 zum 2. Mal','Das Azteca beherbergt seine 3. WM','Erste WM mit 48 Teams','Erste WM von 3 Laendern gemeinsam ausgerichtet','104 Spiele gegen 64 in 2022','Neue IFAB-Regeln in Kraft'],shareApp:'Teilen',shareCopied:'Link kopiert!',premiumBanner:'PREMIUM werden - Tipps + Statistiken + Werbefrei',premiumBtn:'Freischalten',manTitle:'Manueller Simulator',manSim:'⚽ Simulieren',manReset:'Neues Spiel',manWinner:'gewinnt!',manDraw:'Unentschieden!',simTitle:'KI Match Simulator',simTeam1:'Heimteam',simTeam2:'Gastteam',simRun:'Mit KI simulieren',simRunning:'KI analysiert...',simReset:'Neues Spiel',simWin:'gewinnt',simDraw:'Unentschieden',simGoals:'Tore',simStats:'Spielstatistiken',simPoss:'Ballbesitz',simShots:'Schuesse',simAttack:'Angriff',simDefence:'Abwehr',simForm:'Aktuelle Form',simAITitle:'KI-Analyse',fixturesTitle:'SPIELPLAN & ERGEBNISSE',fixturesAll:'Alle Spiele',fixturesMy:'Nur mein Team',noFixtures:'Keine Spiele gefunden'}
};

var QUIZ = {
  en:[{q:'How many teams in the 2026 World Cup?',opts:['32','40','48','56'],a:2},{q:'Which stadium hosts the Final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Which country is NOT a host?',opts:['USA','Canada','Mexico','Brazil'],a:3},{q:'Which group is ENGLAND in?',opts:['Group A','Group C','Group J','Group L'],a:3},{q:'Who won the 2024 Ballon dOr?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'How many total matches?',opts:['64','80','96','104'],a:3},{q:'Which stadium hosts the opening match?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Which country has won the most World Cups?',opts:['Germany','Italy','Brazil','Argentina'],a:2},{q:'Which country won the 2022 World Cup?',opts:['France','Brazil','Croatia','Argentina'],a:3},{q:'Which Norwegian player is a Group I star?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  fr:[{q:'Combien d equipes au Mondial 2026?',opts:['32','40','48','56'],a:2},{q:'Dans quel stade se joue la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quel pays n est PAS organisateur?',opts:['Etats-Unis','Canada','Mexique','Bresil'],a:3},{q:'Dans quel groupe evolue la FRANCE?',opts:['Groupe A','Groupe C','Groupe G','Groupe I'],a:3},{q:'Qui a remporte le Ballon d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Combien de matchs au total?',opts:['64','80','96','104'],a:3},{q:'Quel stade accueille le match d ouverture?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Qui est le selectionneur de la France?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quel pays a remporte le Mondial 2022?',opts:['France','Bresil','Croatie','Argentine'],a:3},{q:'Quel joueur norvegien est star du groupe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  es:[{q:'Cuantos equipos en el Mundial 2026?',opts:['32','40','48','56'],a:2},{q:'En que estadio se juega la final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Que pais NO es organizador?',opts:['EE.UU.','Canada','Mexico','Brasil'],a:3},{q:'En que grupo esta ESPANA?',opts:['Grupo A','Grupo C','Grupo H','Grupo I'],a:2},{q:'Quien gano el Balon de Oro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Cuantos partidos en total?',opts:['64','80','96','104'],a:3},{q:'Que estadio acoge el partido inaugural?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quien es el seleccionador de Espana?',opts:['Enrique','De la Fuente','Valverde','Ancelotti'],a:1},{q:'Que pais gano el Mundial 2022?',opts:['Francia','Brasil','Croacia','Argentina'],a:3},{q:'Que jugador noruego es estrella del Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  pt:[{q:'Quantas selecoes na Copa 2026?',opts:['32','40','48','56'],a:2},{q:'Em qual estadio e a final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Qual pais NAO e sede?',opts:['EUA','Canada','Mexico','Brasil'],a:3},{q:'Em qual grupo esta PORTUGAL?',opts:['Grupo A','Grupo C','Grupo K','Grupo I'],a:2},{q:'Quem ganhou a Bola de Ouro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quantos jogos no total?',opts:['64','80','96','104'],a:3},{q:'Qual estadio recebe a abertura?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quem e o treinador de Portugal?',opts:['Santos','Martinez','Conceicao','Mourinho'],a:1},{q:'Qual pais ganhou a Copa 2022?',opts:['Franca','Brasil','Croacia','Argentina'],a:3},{q:'Qual jogador noruegues e estrela do Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  it:[{q:'Quante squadre al Mondiale 2026?',opts:['32','40','48','56'],a:2},{q:'In quale stadio si gioca la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quale paese NON e organizzatore?',opts:['USA','Canada','Messico','Brasile'],a:3},{q:'L ITALIA e qualificata al Mondiale 2026?',opts:['Si nel Girone A','Si nel Girone B','No eliminata','Si nel Girone C'],a:2},{q:'Chi ha vinto il Pallone d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quante partite in totale?',opts:['64','80','96','104'],a:3},{q:'Quale stadio ospita la partita inaugurale?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Chi e il ct della Francia?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quale paese ha vinto il Mondiale 2022?',opts:['Francia','Brasile','Croazia','Argentina'],a:3},{q:'Quale giocatore norvegese e stella del Girone I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  de:[{q:'Wie viele Teams nehmen an der WM 2026 teil?',opts:['32','40','48','56'],a:2},{q:'In welchem Stadion findet das Finale statt?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Welches Land ist KEIN Gastgeber?',opts:['USA','Kanada','Mexiko','Brasilien'],a:3},{q:'In welcher Gruppe spielt DEUTSCHLAND?',opts:['Gruppe A','Gruppe C','Gruppe E','Gruppe I'],a:2},{q:'Wer hat den Ballon d Or 2024 gewonnen?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Wie viele Spiele gibt es insgesamt?',opts:['64','80','96','104'],a:3},{q:'Welches Stadion eroffnet das Turnier?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Wer trainiert Deutschland?',opts:['Low','Flick','Nagelsmann','Klopp'],a:2},{q:'Welches Land hat die WM 2022 gewonnen?',opts:['Frankreich','Brasilien','Kroatien','Argentinien'],a:3},{q:'Welcher norwegische Spieler ist ein Star der Gruppe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}]
};

var POLLS = {
  en:[{id:'p1',q:'Who will be World Champion 2026?',opts:['England','Argentina','Spain','Brazil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Who will be the best player?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Will ENGLAND reach the Final?',opts:['Yes champion','Yes finalist','Semi-final','Group stage'],votes:[1200,800,600,150]}],
  fr:[{id:'p1',q:'Qui sera champion du Monde 2026?',opts:['France','Argentine','Espagne','Bresil'],votes:[1240,1580,980,1100]},{id:'p2',q:'Quel sera le meilleur joueur?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'La FRANCE ira-t-elle en finale?',opts:['Oui championne','Oui finaliste','Demi-finale','Phase de groupes'],votes:[1200,800,600,150]}],
  es:[{id:'p1',q:'Quien sera campeon del Mundo 2026?',opts:['Espana','Argentina','Francia','Brasil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Quien sera el mejor jugador?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Llegara ESPANA a la Final?',opts:['Si campeona','Si finalista','Semifinal','Fase de grupos'],votes:[1200,800,600,150]}],
  pt:[{id:'p1',q:'Quem sera campeao do Mundo 2026?',opts:['Portugal','Argentina','Franca','Brasil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Quem sera o melhor jogador?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'PORTUGAL chegara a Final?',opts:['Sim campeao','Sim finalista','Semifinal','Fase de grupos'],votes:[1200,800,600,150]}],
  it:[{id:'p1',q:'Chi sara campione del Mondo 2026?',opts:['Argentina','Francia','Spagna','Brasile'],votes:[1580,1240,980,1100]},{id:'p2',q:'Chi sara il miglior giocatore?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'L ITALIA tornera al Mondiale 2030?',opts:['Certamente','Probabilmente','Forse','No'],votes:[1200,800,600,150]}],
  de:[{id:'p1',q:'Wer wird Weltmeister 2026?',opts:['Deutschland','Argentinien','Spanien','Brasilien'],votes:[1580,1240,980,1100]},{id:'p2',q:'Wer wird der beste Spieler?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Kommt DEUTSCHLAND ins Finale?',opts:['Ja Weltmeister','Ja Finalist','Halbfinale','Gruppenphase'],votes:[1200,800,600,150]}]
};

var AFFILIATES = {
  en:[{name:'Bet365',desc:'Up to 200 GBP',url:'https://www.bet365.com',color:'#027b5b'},{name:'Sky Bet',desc:'30 GBP free bets',url:'https://m.skybet.com',color:'#0077C0'},{name:'William Hill',desc:'30 GBP free bet',url:'https://www.williamhill.com',color:'#7B0000'}],
  fr:[{name:'Winamax',desc:'Jusqu a 200EUR',url:'https://www.winamax.fr',color:'#e8251f'},{name:'Unibet',desc:'Jusqu a 150EUR',url:'https://www.unibet.fr',color:'#009B00'},{name:'PMU',desc:'200EUR de bonus',url:'https://www.pmu.fr',color:'#006AB3'}],
  es:[{name:'Codere',desc:'Hasta 200EUR',url:'https://www.codere.es',color:'#c8002d'},{name:'Bet365',desc:'Bono bienvenida',url:'https://www.bet365.com',color:'#027b5b'},{name:'Betway',desc:'100EUR gratis',url:'https://betway.es',color:'#1a1f71'}],
  pt:[{name:'Bet365',desc:'Bonus boas-vindas',url:'https://www.bet365.com',color:'#027b5b'},{name:'Betclic',desc:'Ate 200EUR',url:'https://www.betclic.pt',color:'#ff6600'},{name:'Betway',desc:'100EUR gratis',url:'https://betway.com/pt',color:'#1a1f71'}],
  it:[{name:'Sisal',desc:'Fino a 25EUR',url:'https://www.sisal.it',color:'#e20025'},{name:'Snai',desc:'Fino a 100EUR',url:'https://www.snai.it',color:'#003580'},{name:'Bet365',desc:'Bonus benvenuto',url:'https://www.bet365.com',color:'#027b5b'}],
  de:[{name:'Tipico',desc:'100EUR Bonus',url:'https://www.tipico.de',color:'#e30613'},{name:'Bet3000',desc:'Bis zu 100EUR',url:'https://www.bet3000.com',color:'#003366'},{name:'Bet365',desc:'Willkommensbonus',url:'https://www.bet365.com',color:'#027b5b'}]
};

var STRIPE_EUR = 'https://buy.stripe.com/REMPLACE_EUR';
var STRIPE_GBP = 'https://buy.stripe.com/REMPLACE_GBP';
function getPrice(lang){return lang==='en'?'1.99 GBP':'1,99 EUR';}
function getStripeLink(lang){return lang==='en'?STRIPE_GBP:STRIPE_EUR;}

// ── FIFA CARD STYLE ── World Cup 2026 ───────────────────────
function PlayerAvatar(props){
  var s=props.star;
  var isGold=s.rating>=96;
  var isSilver=s.rating>=94&&s.rating<96;
  var isBronze=s.rating>=92&&s.rating<94;
  var cardBg=isGold?'linear-gradient(160deg,#f5e06e,#d4af37,#b8963e)':
             isSilver?'linear-gradient(160deg,#e8e8e8,#c0c0c0,#a8a8a8)':
             isBronze?'linear-gradient(160deg,#e8a857,#cd7f32,#a86520)':
             'linear-gradient(160deg,#2a5ab8,#1a3a6b,#0f2040)';
  var textColor=isGold||isSilver||isBronze?'#0a0a1a':'#ffffff';
  var borderColor=isGold?'rgba(255,240,100,0.8)':isSilver?'rgba(255,255,255,0.6)':isBronze?'rgba(255,180,80,0.6)':'rgba(100,150,255,0.3)';
  var cardLabel=isGold?'GOLD WC':isSilver?'SILVER WC':isBronze?'BRONZE WC':'WORLD CUP';
  return e('div',{style:{width:72,height:98,borderRadius:10,background:cardBg,flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center',padding:'5px 4px 4px',boxShadow:'0 6px 20px rgba(0,0,0,0.6)',position:'relative',border:'2px solid '+borderColor}},
    e('div',{style:{fontSize:6,color:textColor,opacity:0.75,letterSpacing:0.5,marginBottom:1,fontWeight:'bold'}},cardLabel),
    e('div',{style:{fontSize:22,fontWeight:'bold',color:textColor,lineHeight:1}},s.rating),
    e('div',{style:{fontSize:8,color:textColor,opacity:0.9,marginBottom:2,fontWeight:'bold'}},s.pos),
    e('div',{style:{fontSize:20,marginBottom:2}},s.flag),
    e('div',{style:{width:'80%',height:1,background:textColor,opacity:0.25,marginBottom:2}}),
    e('div',{style:{fontSize:7,fontWeight:'bold',color:textColor,textAlign:'center',lineHeight:1.3,maxWidth:68,overflow:'hidden'}},s.name.split(' ').slice(-1)[0].toUpperCase()),
    e('div',{style:{fontSize:6,color:textColor,opacity:0.7,marginTop:1}},s.club.substring(0,12)),
    isGold&&e('div',{style:{position:'absolute',top:2,right:3,fontSize:9}},'★')
  );
}


// ── TEAM STRENGTHS FOR SIMULATOR ─────────────────────────────
var TEAM_STRENGTH = {
  'France':92,'England':90,'Spain':91,'Brazil':90,'Argentina':91,
  'Germany':88,'Portugal':87,'Netherlands':86,'Belgium':84,'Uruguay':82,
  'USA':78,'Mexico':79,'Canada':76,'Japan':80,'Morocco':79,
  'South Korea':78,'Senegal':79,'Norway':80,'Croatia':82,'Denmark':82,
  'Switzerland':80,'Austria':77,'Algeria':75,'Colombia':80,'Ecuador':74,
  'Peru':73,'Chile':74,'Bolivia':65,'Paraguay':72,'Australia':74,
  'Tunisia':72,'Egypt':73,'Ivory Coast':77,'Cameroon':73,'Ghana':74,
  'South Africa':68,'Nigeria':75,'DR Congo':70,'Uzbekistan':68,
  'Jordan':65,'Iraq':67,'Saudi Arabia':72,'Iran':73,'Qatar':65,
  'Cape Verde':66,'Haiti':60,'Scotland':76,'Bosnia':70,
  'Czech Republic':76,'Czechia':76,'Turkey':78,'New Zealand':65,
  'Panama':64,'Cuba':58,'Sweden':79,'Finland':72,'Slovakia':74,
  'Slovenia':74,'Albania':68,'Serbia':78,'Poland':77,'Romania':72,
  'Iceland':73,'Ireland':70,'Wales':76,'Northern Ireland':65,
  'Belarus':62,'Kosovo':63
};

function getStrength(team){return TEAM_STRENGTH[team]||70;}

function Card(props){
  return e('div',{style:Object.assign({background:props.gold?'linear-gradient(135deg,rgba(212,175,55,0.14),rgba(184,150,62,0.07))':CB,border:'1px solid '+(props.gold?G:BD),borderRadius:14,padding:16},props.style||{})},props.children);
}

function App(){
  var s1=useState(0);var tab=s1[0];var setTab=s1[1];
  var s2=useState('en');var lang=s2[0];var setLang=s2[1];
  var s3=useState('A');var selGroup=s3[0];var setSelGroup=s3[1];
  var s4=useState(false);var premium=s4[0];var setPremium=s4[1];
  var s5=useState(false);var shareCopied=s5[0];var setShareCopied=s5[1];
  var s6=useState('');var winner=s6[0];var setWinner=s6[1];
  var s7=useState('');var finalist=s7[0];var setFinalist=s7[1];
  var s8=useState('');var semi1=s8[0];var setSemi1=s8[1];
  var s9=useState('');var semi2=s9[0];var setSemi2=s9[1];
  var s10=useState(false);var pronoSaved=s10[0];var setPronoSaved=s10[1];
  var s11=useState(0);var qIdx=s11[0];var setQIdx=s11[1];
  var s12=useState(null);var selected=s12[0];var setSelected=s12[1];
  var s13=useState(0);var score=s13[0];var setScore=s13[1];
  var s14=useState(false);var quizDone=s14[0];var setQuizDone=s14[1];
  var s15=useState(false);var answered=s15[0];var setAnswered=s15[1];
  var s16=useState({});var pollVotes=s16[0];var setPollVotes=s16[1];
  var s17=useState({});var pollCounts=s17[0];var setPollCounts=s17[1];
  var s18=useState({days:0,hours:0,minutes:0,seconds:0});var cd=s18[0];var setCd=s18[1];
  var s19=useState(null);var myTeam=s19[0];var setMyTeam=s19[1];
  var s20=useState(false);var fixtureMyOnly=s20[0];var setFixtureMyOnly=s20[1];
  var s21=useState(false);var showPickTeam=s21[0];var setShowPickTeam=s21[1];
  var s22=useState('');var simTeam1=s22[0];var setSimTeam1=s22[1];
  var s30=useState('');var manTeam1=s30[0];var setManTeam1=s30[1];
  var s31=useState('');var manTeam2=s31[0];var setManTeam2=s31[1];
  var s32=useState(null);var manResult=s32[0];var setManResult=s32[1];
  var s23=useState('');var simTeam2=s23[0];var setSimTeam2=s23[1];
  var s24=useState(null);var simResult=s24[0];var setSimResult=s24[1];
  var s25=useState(false);var simLoading=s25[0];var setSimLoading=s25[1];
  var s26=useState('');var simAIText=s26[0];var setSimAIText=s26[1];
  var s27=useState(null);var tournament=s27[0];var setTournament=s27[1];
  var s28=useState(false);var tournLoading=s28[0];var setTournLoading=s28[1];
  var s29=useState('bracket');var simView=s29[0];var setSimView=s29[1];

  var t=T[lang];
  var questions=QUIZ[lang];
  var polls=POLLS[lang];
  var affiliates=AFFILIATES[lang];
  var defaultTeam=MY_TEAM[lang];

  useEffect(function(){
    function calc(){
      var d=new Date('2026-06-11T20:00:00')-new Date();
      if(d<=0){setCd({days:0,hours:0,minutes:0,seconds:0});return;}
      setCd({days:Math.floor(d/86400000),hours:Math.floor((d%86400000)/3600000),minutes:Math.floor((d%3600000)/60000),seconds:Math.floor((d%60000)/1000)});
    }
    calc();var id=setInterval(calc,1000);return function(){clearInterval(id);};
  },[]);

  useEffect(function(){
    if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js').catch(function(){});}
  },[]);

  function changeLang(code){setLang(code);setQIdx(0);setSelected(null);setScore(0);setQuizDone(false);setAnswered(false);setMyTeam(null);}
  function handleAnswer(i){if(answered)return;setSelected(i);setAnswered(true);if(i===questions[qIdx].a)setScore(function(s){return s+1;});}
  function nextQ(){if(qIdx<questions.length-1){setQIdx(function(q){return q+1;});setSelected(null);setAnswered(false);}else setQuizDone(true);}
  function resetQuiz(){setQIdx(0);setSelected(null);setScore(0);setQuizDone(false);setAnswered(false);}
  function getMsg(sc){if(sc===questions.length)return t.quizPerfect;if(sc>=questions.length*0.7)return t.quizGood;if(sc>=questions.length*0.4)return t.quizAvg;return t.quizBad;}
  function handleVote(pid,oi,votes){if(pollVotes[pid]!==undefined)return;var nc=Object.assign({},pollCounts);nc[pid]=votes.map(function(v,i){return i===oi?v+1:v;});setPollCounts(nc);var nv=Object.assign({},pollVotes);nv[pid]=oi;setPollVotes(nv);}
  function getPV(pid,dv){return pollCounts[pid]||dv;}
  function savePronto(){setPronoSaved(true);setTimeout(function(){setPronoSaved(false);},2000);}
  function handleShare(){if(navigator.share){navigator.share({title:'World Cup 2026',url:window.location.href});}else if(navigator.clipboard){navigator.clipboard.writeText(window.location.href);setShareCopied(true);setTimeout(function(){setShareCopied(false);},2000);}}
  function pad(n){return String(n||0).padStart(2,'0');}

  // ── MANUAL SIMULATOR ─────────────────────────────────────────
  function runManual(){
    if(!manTeam1||!manTeam2)return;
    var s1=getStrength(manTeam1);
    var s2=getStrength(manTeam2);
    function g(str){
      var r=Math.random();
      if(r<0.15)return 0;
      if(r<0.38)return 1;
      if(r<0.62)return 2;
      if(r<0.78)return 3;
      if(r<0.90)return 4;
      return 5;
    }
    var g1=g(s1);var g2=g(s2);
    // slight advantage to stronger team
    var rand=Math.random();
    if(rand<0.22&&Math.abs(g1-g2)===1){if(g1>g2)g2=g1;else g1=g2;}
    var winner=g1>g2?manTeam1:g2>g1?manTeam2:null;
    var poss1=Math.round(40+(s1-s2)*0.35+Math.random()*10);
    poss1=Math.max(35,Math.min(65,poss1));
    setManResult({team1:manTeam1,team2:manTeam2,g1:g1,g2:g2,winner:winner,poss1:poss1,poss2:100-poss1,str1:s1,str2:s2});
  }

  // ── TOURNAMENT SIMULATOR ─────────────────────────────────────
  function simMatch(teamA, teamB){
    var sA=getStrength(teamA);
    var sB=getStrength(teamB);
    var total=sA+sB;
    var rand=Math.random()*total;
    // Add randomness factor (upsets happen!)
    var upset=Math.random()<0.18;
    if(upset){var tmp=sA;sA=sB;sB=tmp;}
    rand=Math.random()*total;
    var winner=rand<sA?teamA:teamB;
    // Generate score
    function g(str){
      var r=Math.random();
      if(r<0.15)return 0;
      if(r<0.38)return 1;
      if(r<0.62)return 2;
      if(r<0.80)return 3;
      if(r<0.92)return 4;
      return 5;
    }
    var gW=g(getStrength(winner));
    var gL=g(getStrength(winner===teamA?teamB:teamA));
    if(gW<=gL)gW=gL+1;
    return {
      home:teamA,away:teamB,
      goalsHome:winner===teamA?gW:gL,
      goalsAway:winner===teamA?gL:gW,
      winner:winner
    };
  }

  function runTournament(){
    setTournLoading(true);
    setTournament(null);

    setTimeout(function(){
      // GROUP STAGE - determine group winners and runners-up
      var groupResults={};
      Object.entries(GROUPS).forEach(function(entry){
        var g=entry[0];var data=entry[1];
        var teams=data.teams.slice();
        var points={};var gd={};
        teams.forEach(function(t){points[t]=0;gd[t]=0;});

        // Play 6 group matches
        var matches=[];
        for(var i=0;i<teams.length;i++){
          for(var j=i+1;j<teams.length;j++){
            var m=simMatch(teams[i],teams[j]);
            matches.push(m);
            var diff=m.goalsHome-m.goalsAway;
            if(diff>0){points[teams[i]]+=3;gd[teams[i]]+=diff;gd[teams[j]]-=diff;}
            else if(diff<0){points[teams[j]]+=3;gd[teams[j]]-=diff;gd[teams[i]]+=diff;}
            else{points[teams[i]]+=1;points[teams[j]]+=1;}
          }
        }

        // Sort by points then GD
        var sorted=teams.slice().sort(function(a,b){
          if(points[b]!==points[a])return points[b]-points[a];
          return gd[b]-gd[a];
        });

        groupResults[g]={
          teams:sorted,
          points:points,
          gd:gd,
          matches:matches,
          winner:sorted[0],
          runnerUp:sorted[1],
          third:sorted[2]
        };
      });

      // Best 8 third-placed teams
      var thirds=Object.values(groupResults).map(function(gr){
        return {team:gr.third,pts:gr.points[gr.third],gd:gr.gd[gr.third]};
      }).sort(function(a,b){
        if(b.pts!==a.pts)return b.pts-a.pts;
        return b.gd-a.gd;
      }).slice(0,8).map(function(x){return x.team;});

      // Round of 32 - 16 matches
      var r32Teams=[
        groupResults['A'].winner,groupResults['B'].runnerUp,
        groupResults['C'].winner,groupResults['D'].runnerUp,
        groupResults['E'].winner,groupResults['F'].runnerUp,
        groupResults['G'].winner,groupResults['H'].runnerUp,
        groupResults['I'].winner,groupResults['J'].runnerUp,
        groupResults['K'].winner,groupResults['L'].runnerUp,
        groupResults['A'].runnerUp,groupResults['B'].winner,
        groupResults['C'].runnerUp,groupResults['D'].winner,
        groupResults['E'].runnerUp,groupResults['F'].winner,
        groupResults['G'].runnerUp,groupResults['H'].winner,
        groupResults['I'].runnerUp,groupResults['J'].winner,
        groupResults['K'].runnerUp,groupResults['L'].winner,
        thirds[0],thirds[1],thirds[2],thirds[3],
        thirds[4],thirds[5],thirds[6],thirds[7]
      ];

      // Ensure we have 32 teams
      while(r32Teams.length<32)r32Teams.push('TBD');
      var r32Matches=[];
      for(var i=0;i<32;i+=2){
        r32Matches.push(simMatch(r32Teams[i],r32Teams[i+1]));
      }
      var r16Teams=r32Matches.map(function(m){return m.winner;});

      // Round of 16
      var r16Matches=[];
      for(var i=0;i<16;i+=2){
        r16Matches.push(simMatch(r16Teams[i],r16Teams[i+1]));
      }
      var qfTeams=r16Matches.map(function(m){return m.winner;});

      // Quarter Finals
      var qfMatches=[];
      for(var i=0;i<8;i+=2){
        qfMatches.push(simMatch(qfTeams[i],qfTeams[i+1]));
      }
      var sfTeams=qfMatches.map(function(m){return m.winner;});
      var sfLosers=qfMatches.map(function(m){return m.home===m.winner?m.away:m.home;});

      // Semi Finals
      var sfMatches=[
        simMatch(sfTeams[0],sfTeams[1]),
        simMatch(sfTeams[2],sfTeams[3])
      ];
      var finalists=sfMatches.map(function(m){return m.winner;});
      var thirdPlaceTeams=[
        sfMatches[0].home===sfMatches[0].winner?sfMatches[0].away:sfMatches[0].home,
        sfMatches[1].home===sfMatches[1].winner?sfMatches[1].away:sfMatches[1].home
      ];

      // 3rd Place + Final
      var thirdMatch=simMatch(thirdPlaceTeams[0],thirdPlaceTeams[1]);
      var finalMatch=simMatch(finalists[0],finalists[1]);

      setTournament({
        groups:groupResults,
        r32:r32Matches,
        r16:r16Matches,
        qf:qfMatches,
        sf:sfMatches,
        thirdPlace:thirdMatch,
        final:finalMatch,
        champion:finalMatch.winner,
        runnerUp:finalMatch.home===finalMatch.winner?finalMatch.away:finalMatch.home,
        third:thirdMatch.winner
      });
      setTournLoading(false);
    }, 800);
  }

  // ── AI MATCH SIMULATOR ───────────────────────────────────────
  function runSimulation(){
    if(!simTeam1||!simTeam2)return;
    setSimLoading(true);
    setSimResult(null);
    setSimAIText('');

    var s1=getStrength(simTeam1);
    var s2=getStrength(simTeam2);

    // Calculate weighted probabilities
    var total=s1+s2;
    var prob1=s1/total;
    var prob2=s2/total;
    var drawProb=0.22;

    // Generate goals based on strength
    function genGoals(str){
      var avg=(str/100)*2.8;
      var r=Math.random();
      if(r<0.15)return 0;
      if(r<0.35)return 1;
      if(r<0.58)return 2;
      if(r<0.75)return 3;
      if(r<0.88)return 4;
      return 5;
    }

    var g1=genGoals(s1);
    var g2=genGoals(s2);

    // Adjust for draw probability
    var rand=Math.random();
    if(rand<drawProb&&Math.abs(g1-g2)<=1){
      if(g1>g2)g2=g1;
      else g1=g2;
    }

    // Possession based on strength
    var poss1=Math.round(40+(s1-s2)*0.4+Math.random()*10);
    poss1=Math.max(35,Math.min(65,poss1));
    var poss2=100-poss1;

    // Shots
    var shots1=Math.round(8+(s1/100)*8+g1*2+Math.random()*4);
    var shots2=Math.round(8+(s2/100)*8+g2*2+Math.random()*4);

    // Attack/Defence ratings
    var atk1=Math.round(s1*0.9+Math.random()*15);
    var atk2=Math.round(s2*0.9+Math.random()*15);
    var def1=Math.round(s1*0.85+Math.random()*12);
    var def2=Math.round(s2*0.85+Math.random()*12);

    // Form (random 5 games)
    function genForm(){
      var f=[];
      for(var i=0;i<5;i++){
        var r2=Math.random();
        f.push(r2<0.45?'W':r2<0.7?'D':'L');
      }
      return f;
    }

    var result={
      team1:simTeam1,team2:simTeam2,
      goals1:g1,goals2:g2,
      poss1:poss1,poss2:poss2,
      shots1:shots1,shots2:shots2,
      atk1:atk1,atk2:atk2,
      def1:def1,def2:def2,
      str1:s1,str2:s2,
      form1:genForm(),form2:genForm()
    };

    // Call Claude AI for analysis
    var langName={'en':'English','fr':'French','es':'Spanish','pt':'Portuguese','it':'Italian','de':'German'};
    var prompt='You are a football expert. Analyze this World Cup 2026 match simulation and give a brief 3-sentence tactical analysis. IMPORTANT: Respond ONLY in '+langName[lang]+'. Match: '+simTeam1+' '+g1+' - '+g2+' '+simTeam2+'. Strengths: '+simTeam1+'='+s1+'/100, '+simTeam2+'='+s2+'/100. Possession: '+poss1+'% vs '+poss2+'%. Shots: '+shots1+' vs '+shots2+'. Be concise and insightful in '+langName[lang]+' only.';

    fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:200,
        messages:[{role:'user',content:prompt}]
      })
    }).then(function(r){return r.json();})
    .then(function(data){
      var text=data.content&&data.content[0]&&data.content[0].text||'Great match analysis!';
      setSimAIText(text);
    }).catch(function(){
      setSimAIText(simTeam1+' '+g1+'-'+g2+' '+simTeam2+' was an exciting encounter. Both teams showed great quality in this World Cup 2026 clash!');
    }).finally(function(){
      setSimResult(result);
      setSimLoading(false);
    });
  }

  var activeTeam=myTeam||defaultTeam;

  var filteredFixtures=fixtureMyOnly?FIXTURES.filter(function(f){return f.home===activeTeam.team||f.away===activeTeam.team;}):FIXTURES;

  function formatDate(d){var dt=new Date(d);return dt.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});}

  return e('div',{style:{minHeight:'100vh',background:'linear-gradient(160deg,'+DARK+',#0c1e44 50%,'+DARK+')',fontFamily:"'Open Sans',sans-serif",color:'#eee8d5'}},

    e('header',{style:{background:'linear-gradient(90deg,#060f24,#122860,#060f24)',borderBottom:'2px solid '+G,padding:'10px 14px'}},
      e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
        e('div',{style:{display:'flex',gap:4}},
          LANGS.map(function(l){return e('button',{key:l.code,onClick:function(){changeLang(l.code);},style:{background:lang===l.code?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:lang===l.code?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:7,padding:'3px 8px',cursor:'pointer',color:lang===l.code?'#0a0a1a':'#9bb0c8',fontSize:11,fontWeight:lang===l.code?'bold':'normal'}},l.label);})
        ),
        e('div',{style:{display:'flex',gap:6,alignItems:'center'}},
          e('button',{onClick:handleShare,style:{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(212,175,55,0.28)',borderRadius:7,padding:'3px 10px',cursor:'pointer',color:'#9bb0c8',fontSize:11}},shareCopied?t.shareCopied:t.shareApp),
          !premium&&e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:7,padding:'4px 10px',cursor:'pointer',color:'#0a0a1a',fontSize:11,fontWeight:'bold',textDecoration:'none',display:'inline-block'}},'PRO - '+getPrice(lang)),
          premium&&e('span',{style:{fontSize:11,color:G,fontWeight:'bold'}},'PRO')
        )
      ),
      e('div',{style:{textAlign:'center'}},
        e('div',{style:{fontSize:24}},'⚽'),
        e('div',{style:{fontSize:18,fontWeight:'bold',letterSpacing:3,textTransform:'uppercase',background:'linear-gradient(90deg,'+G+',#fff8e0,'+G+')',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}},t.appTitle),
        e('div',{style:{fontSize:10,color:'#7a96b0',letterSpacing:4,marginTop:2}},t.appSub)
      )
    ),

    !premium&&e('div',{style:{background:'linear-gradient(90deg,#1a1000,#3a2800,#1a1000)',borderBottom:'1px solid rgba(212,175,55,0.3)',padding:'7px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}},
      e('span',{style:{fontSize:11,color:G,flexShrink:1}},t.premiumBanner),
      e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:8,padding:'5px 11px',fontSize:11,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',whiteSpace:'nowrap',textDecoration:'none',display:'inline-block'}},t.premiumBtn+' - '+getPrice(lang))
    ),

    e('nav',{style:{position:'sticky',top:0,zIndex:20,display:'flex',justifyContent:'center',flexWrap:'wrap',gap:3,background:'rgba(6,9,26,0.97)',backdropFilter:'blur(14px)',padding:'7px 10px',borderBottom:'1px solid rgba(212,175,55,0.16)'}},
      t.nav.map(function(label,i){return e('button',{key:i,onClick:function(){setTab(i);},style:{background:tab===i?'linear-gradient(135deg,'+G+',#b8963e)':'transparent',color:tab===i?'#0a0a1a':'#7a96b0',border:tab===i?'none':'1px solid rgba(212,175,55,0.25)',borderRadius:18,padding:'5px 11px',fontSize:11,cursor:'pointer',fontWeight:tab===i?'bold':'normal'}},label);})
    ),

    e('main',{style:{padding:'16px 13px',maxWidth:740,margin:'0 auto'}},

      // ── HOME ──
      tab===0&&e('div',null,
        // Pick your team banner
        e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(184,150,62,0.08))',border:'1px solid '+G,borderRadius:14,padding:'12px 16px',marginBottom:13,display:'flex',justifyContent:'space-between',alignItems:'center'}},
          e('div',null,
            e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:3}},t.myTeamLabel),
            e('div',{style:{fontSize:16,fontWeight:'bold'}},activeTeam.flag,' ',activeTeam.team,activeTeam.group&&e('span',{style:{fontSize:11,color:G,marginLeft:8}},'Groupe ',activeTeam.group))
          ),
          e('button',{onClick:function(){setShowPickTeam(function(v){return !v;});},style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},t.pickTeam)
        ),

        // Pick team modal
        showPickTeam&&e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:14,padding:14,marginBottom:13}},
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:10}},'🌍 '+t.pickTeam),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,maxHeight:200,overflowY:'auto'}},
            ALL_TEAMS.map(function(team){
              var grp=null;
              Object.entries(GROUPS).forEach(function(entry){if(entry[1].teams.indexOf(team)>=0)grp=entry[0];});
              return e('button',{key:team,onClick:function(){setMyTeam({team:team,group:grp,flag:'⚽',color:'rgba(212,175,55,0.2)'});setShowPickTeam(false);},style:{background:activeTeam.team===team?'rgba(212,175,55,0.2)':CB,border:'1px solid '+(activeTeam.team===team?G:BD),borderRadius:9,padding:'7px 10px',fontSize:11,color:'#eee8d5',cursor:'pointer',textAlign:'left'}},
                team,grp&&e('span',{style:{fontSize:9,color:G,marginLeft:4}},'('+grp+')')
              );
            })
          )
        ),

        // Countdown
        e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'1.5px solid '+G,borderRadius:18,padding:'20px 16px',textAlign:'center',marginBottom:15}},
          e('div',{style:{fontSize:10,color:G,letterSpacing:3,marginBottom:12,textTransform:'uppercase'}},t.countdown),
          e('div',{style:{display:'flex',justifyContent:'center',gap:10}},
            [cd.days,cd.hours,cd.minutes,cd.seconds].map(function(v,i){return e('div',{key:i,style:{textAlign:'center'}},e('div',{style:{background:'linear-gradient(160deg,'+G+',#b8963e)',borderRadius:10,padding:'9px 11px',fontSize:22,fontWeight:'bold',color:'#0a0a1a',minWidth:44}},pad(v)),e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:4}},t.timeUnits[i]));})
          )
        ),

        // Key stats
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:9,marginBottom:13}},
          t.keyInfo.map(function(label,i){return e(Card,{key:i,style:{textAlign:'center',padding:13}},e('div',{style:{fontSize:18}},['🌍','🏅','⚽','📅'][i]),e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:3}},label),e('div',{style:{fontSize:13,fontWeight:'bold',color:G,marginTop:2}},t.keyVals[i]));})
        ),

        // My team group
        activeTeam.group&&e('div',{style:{background:'linear-gradient(135deg,'+activeTeam.color+',rgba(212,175,55,0.1))',border:'1.5px solid rgba(255,255,255,0.16)',borderRadius:14,padding:16,marginBottom:13}},
          e('div',{style:{fontSize:12,color:'#fff',fontWeight:'bold',marginBottom:9}},activeTeam.flag,' ',activeTeam.team,' - ',t.groupLabel,' ',activeTeam.group),
          GROUPS[activeTeam.group]&&GROUPS[activeTeam.group].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            return e('div',{key:team,style:{display:'flex',alignItems:'center',gap:9,background:isMyTeam?'rgba(212,175,55,0.2)':'rgba(255,255,255,0.04)',borderRadius:8,padding:'8px 11px',marginBottom:6,border:isMyTeam?'1px solid '+G:'none'}},
              e('span',{style:{fontSize:10,color:G,minWidth:16}},i+1,'.'),
              e('span',{style:{fontSize:12,fontWeight:isMyTeam?'bold':'normal'}},team),
              isMyTeam&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G}},'⭐')
            );
          })
        ),

        // Italy special message
        lang==='it'&&e('div',{style:{background:'linear-gradient(135deg,rgba(0,82,156,0.3),rgba(206,43,55,0.3))',border:'1.5px solid rgba(255,255,255,0.2)',borderRadius:14,padding:16,marginBottom:13,textAlign:'center'}},
          e('div',{style:{fontSize:24,marginBottom:8}},'🇮🇹😢'),
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#fff',marginBottom:4}},"L'Italia non e al Mondiale 2026"),
          e('div',{style:{fontSize:11,color:'#aaa'}})
        ),

        // Format
        e(Card,{style:{marginBottom:13}},
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:9}},t.format),
          t.formatLines.map(function(line,i){return e('div',{key:i,style:{fontSize:11,color:'#b0c8d8',marginBottom:5}},line);})
        ),

        // Did you know
        e(Card,null,
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:9}},t.didYouKnow),
          t.facts.map(function(fact,i){return e('div',{key:i,style:{fontSize:11,color:'#a8c0d0',padding:'6px 0',borderBottom:i<t.facts.length-1?'1px solid rgba(212,175,55,0.09)':'none'}},fact);})
        )
      ),

      // ── GROUPS ──
      tab===1&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.groupsTitle),
        e('div',{style:{display:'flex',flexWrap:'wrap',gap:5,justifyContent:'center',marginBottom:15}},
          Object.keys(GROUPS).map(function(g){return e('button',{key:g,onClick:function(){setSelGroup(g);},style:{width:32,height:32,borderRadius:7,background:selGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:selGroup===g?'none':'1px solid rgba(212,175,55,0.24)',color:selGroup===g?'#0a0a1a':G,fontSize:12,fontWeight:'bold',cursor:'pointer'}},g);})
        ),
        e(Card,{style:{marginBottom:14,border:'1px solid '+G}},
          e('div',{style:{fontSize:15,fontWeight:'bold',color:G,marginBottom:11,textAlign:'center'}},t.groupLabel,' ',selGroup,GROUPS[selGroup].host&&e('span',{style:{fontSize:9,color:'#6a86a0',marginLeft:8}},'(',t.hostLabel,': ',GROUPS[selGroup].hostName,')')),
          GROUPS[selGroup].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            return e('div',{key:team,style:{display:'flex',alignItems:'center',gap:10,background:isMyTeam?'rgba(212,175,55,0.14)':i===0&&GROUPS[selGroup].host?'rgba(212,175,55,0.08)':'rgba(255,255,255,0.04)',border:'1px solid '+(isMyTeam?G:'rgba(212,175,55,0.1)'),borderRadius:9,padding:'10px 13px',marginBottom:7}},
              e('div',{style:{width:22,height:22,borderRadius:5,flexShrink:0,background:isMyTeam?G:i===0&&GROUPS[selGroup].host?G:'rgba(212,175,55,0.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:'bold',color:isMyTeam||i===0&&GROUPS[selGroup].host?'#0a0a1a':G}},i+1),
              e('span',{style:{fontSize:13,fontWeight:isMyTeam?'bold':'normal'}},team),
              isMyTeam&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 7px',borderRadius:8}},'⭐ '+t.myTeamLabel),
              !isMyTeam&&i===0&&GROUPS[selGroup].host&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G,background:'rgba(212,175,55,0.12)',padding:'2px 7px',borderRadius:8}},t.hostLabel)
            );
          })
        ),
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}},
          Object.entries(GROUPS).map(function(entry){var g=entry[0];var data=entry[1];var hasMyTeam=data.teams.indexOf(activeTeam.team)>=0;return e('div',{key:g,onClick:function(){setSelGroup(g);},style:{background:hasMyTeam?'rgba(212,175,55,0.12)':g===selGroup?'rgba(212,175,55,0.09)':'rgba(10,20,50,0.8)',border:'1px solid '+(hasMyTeam?G:g===selGroup?G:BD),borderRadius:10,padding:10,cursor:'pointer'}},e('div',{style:{fontSize:10,fontWeight:'bold',color:G,marginBottom:5}},t.groupLabel,' ',g,hasMyTeam&&' ⭐'),data.teams.map(function(team){return e('div',{key:team,style:{fontSize:9,color:team===activeTeam.team?G:'#90aabf',marginBottom:2,fontWeight:team===activeTeam.team?'bold':'normal'}},team);}));})
        )
      ),

      // ── FIXTURES ──
      tab===2&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.fixturesTitle),
        e('div',{style:{display:'flex',gap:8,marginBottom:14,justifyContent:'center'}},
          e('button',{onClick:function(){setFixtureMyOnly(false);},style:{background:!fixtureMyOnly?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:!fixtureMyOnly?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:!fixtureMyOnly?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},t.fixturesAll),
          e('button',{onClick:function(){setFixtureMyOnly(true);},style:{background:fixtureMyOnly?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:fixtureMyOnly?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:fixtureMyOnly?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},activeTeam.flag+' '+t.fixturesMy)
        ),
        filteredFixtures.length===0&&e('div',{style:{textAlign:'center',color:'#6a86a0',padding:30}},t.noFixtures),
        e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
          filteredFixtures.map(function(f,i){
            var isMyMatch=f.home===activeTeam.team||f.away===activeTeam.team;
            return e(Card,{key:i,style:{padding:'12px 14px',border:'1px solid '+(isMyMatch?G:BD),background:isMyMatch?'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(184,150,62,0.05))':CB}},
              e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}},
                e('div',{style:{fontSize:9,color:isMyMatch?G:'#6a86a0'}},formatDate(f.date),' ',f.time,' UTC',f.group&&' - '+t.groupLabel+' '+f.group),
                isMyMatch&&e('span',{style:{fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 6px',borderRadius:6}},'⭐ '+t.myTeamLabel)
              ),
              e('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'}},
                e('div',{style:{flex:1,textAlign:'left',fontSize:13,fontWeight:f.home===activeTeam.team?'bold':'normal',color:f.home===activeTeam.team?G:'#eee8d5'}},f.home),
                e('div',{style:{padding:'4px 12px',background:'rgba(212,175,55,0.15)',borderRadius:8,fontSize:12,fontWeight:'bold',color:G,margin:'0 8px'}},'VS'),
                e('div',{style:{flex:1,textAlign:'right',fontSize:13,fontWeight:f.away===activeTeam.team?'bold':'normal',color:f.away===activeTeam.team?G:'#eee8d5'}},f.away)
              ),
              f.stadium&&e('div',{style:{fontSize:9,color:'#5a7090',marginTop:6}},f.stadium,' - ',f.city)
            );
          })
        )
      ),

      // ── PREDICTIONS ──
      tab===3&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.pronoSub),
        e(Card,{gold:true,style:{marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:G,marginBottom:10}},'🏆 ',t.pronoWinner),
          e('select',{value:winner,onChange:function(ev){setWinner(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})),
          winner&&e('div',{style:{marginTop:8,fontSize:11,color:G}},t.pronoMyPick,': ',e('strong',null,winner))
        ),
        e(Card,{style:{marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#c0c0c0',marginBottom:10}},'🥈 ',t.pronoFinal),
          e('select',{value:finalist,onChange:function(ev){setFinalist(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(192,192,192,0.3)',borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);}))
        ),
        e(Card,{style:{marginBottom:14}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#cd7f32',marginBottom:10}},'🥉 ',t.pronoSemi),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}},
            [[semi1,setSemi1],[semi2,setSemi2]].map(function(pair,i){return e('select',{key:i,value:pair[0],onChange:function(ev){pair[1](ev.target.value);},style:{background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(205,127,50,0.3)',borderRadius:9,padding:'8px 10px',fontSize:12}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);}));})
          )
        ),
        e('div',{style:{display:'flex',gap:10}},
          e('button',{onClick:savePronto,style:{flex:2,background:pronoSaved?'linear-gradient(135deg,#2d7a2d,#3a9e3a)':'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:pronoSaved?'#fff':'#0a0a1a',cursor:'pointer'}},pronoSaved?t.pronoSaved:t.pronoSave),
          e('button',{onClick:function(){setWinner('');setFinalist('');setSemi1('');setSemi2('');},style:{flex:1,background:'rgba(255,60,60,0.12)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:10,padding:'12px 0',fontSize:12,color:'#ff6b6b',cursor:'pointer'}},t.pronoReset)
        )
      ),

      // ── QUIZ ──
      tab===4&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.quizSub),
        !quizDone?e('div',null,
          e('div',{style:{marginBottom:14}},
            e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:10,color:'#6a86a0',marginBottom:6}},e('span',null,qIdx+1,' / ',questions.length),e('span',null,t.quizScore,': ',score)),
            e('div',{style:{height:4,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}},e('div',{style:{width:(qIdx/questions.length*100)+'%',height:'100%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:2,transition:'width 0.4s'}}))
          ),
          e(Card,{style:{marginBottom:13,padding:20,textAlign:'center'}},e('div',{style:{fontSize:14,fontWeight:'bold',lineHeight:1.5,color:'#fff'}},questions[qIdx].q)),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:14}},
            questions[qIdx].opts.map(function(opt,i){
              var bg=CB,brd=BD,col='#eee8d5';
              if(answered){if(i===questions[qIdx].a){bg='rgba(40,160,40,0.25)';brd='rgba(40,200,40,0.6)';col='#90ee90';}else if(i===selected){bg='rgba(200,40,40,0.25)';brd='rgba(200,60,60,0.6)';col='#ff8888';}}
              return e('button',{key:i,onClick:function(){handleAnswer(i);},style:{background:bg,border:'1px solid '+brd,borderRadius:10,padding:'12px 10px',fontSize:12,color:col,cursor:answered?'default':'pointer',textAlign:'center',fontWeight:answered&&i===questions[qIdx].a?'bold':'normal'}},answered&&i===questions[qIdx].a?'OK ':answered&&i===selected&&i!==questions[qIdx].a?'X ':'',opt);
            })
          ),
          answered&&e('button',{onClick:nextQ,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},qIdx<questions.length-1?t.quizNext:t.quizFinish)
        ):e('div',{style:{textAlign:'center'}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.18),rgba(184,150,62,0.08))',border:'1.5px solid '+G,borderRadius:18,padding:28,marginBottom:16}},
            e('div',{style:{fontSize:40,marginBottom:12}},score===questions.length?'🏆':score>=questions.length*0.7?'⭐':score>=questions.length*0.4?'👍':'📚'),
            e('div',{style:{fontSize:22,fontWeight:'bold',color:G}},score,'/',questions.length),
            e('div',{style:{fontSize:13,color:'#eee',marginTop:8}},getMsg(score))
          ),
          e('button',{onClick:resetQuiz,style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'13px 40px',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},t.quizRestart)
        )
      ),

      // ── STARS with AVATARS ──
      tab===5&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center',letterSpacing:2}},t.starsSub),
        e('div',{style:{display:'flex',flexDirection:'column',gap:10}},
          STARS.map(function(s,i){
            return e(Card,{key:s.name,gold:i<3,style:{display:'flex',gap:14,alignItems:'center'}},
              e(PlayerAvatar,{star:s}),
              e('div',{style:{flex:1,minWidth:0}},
                e('div',{style:{display:'flex',alignItems:'center',gap:7,marginBottom:2}},
                  e('span',{style:{fontSize:13,fontWeight:'bold'}},s.name),
                  e('span',null,s.flag),
                  e('span',{style:{fontSize:9,padding:'2px 6px',borderRadius:8,background:'rgba(212,175,55,0.15)',color:G,fontWeight:'bold'}},s.pos)
                ),
                e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:4}},s.club,' - Gr.',s.group,' - ',s.age,'y'),
                e('div',{style:{fontSize:10,color:'#a0b8cc',marginBottom:6}},s.stat),
                e('div',{style:{display:'flex',alignItems:'center',gap:6}},
                  e('div',{style:{flex:1,height:4,background:'rgba(255,255,255,0.1)',borderRadius:2,overflow:'hidden'}},e('div',{style:{width:((s.rating-85)/15*100)+'%',height:'100%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:2}})),
                  e('span',{style:{fontSize:11,color:G,fontWeight:'bold',minWidth:24}},s.rating)
                )
              ),
              i===0&&e('div',{style:{position:'absolute',right:12,top:12,fontSize:16}},'🏆')
            );
          })
        )
      ),

      // ── POLLS ──
      tab===6&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.pollTitle),
        e('div',{style:{display:'flex',flexDirection:'column',gap:14}},
          polls.map(function(poll){
            var voted=pollVotes[poll.id]!==undefined;
            var cv=getPV(poll.id,poll.votes);
            var total=cv.reduce(function(a,b){return a+b;},0);
            return e(Card,{key:poll.id,style:{padding:18}},
              e('div',{style:{fontSize:13,fontWeight:'bold',color:'#fff',marginBottom:13}},poll.q),
              !voted?e('div',{style:{display:'flex',flexDirection:'column',gap:8}},poll.opts.map(function(opt,i){return e('button',{key:i,onClick:function(){handleVote(poll.id,i,poll.votes);},style:{background:CB,border:'1px solid '+BD,borderRadius:9,padding:'10px 14px',fontSize:12,color:'#eee8d5',cursor:'pointer',textAlign:'left'}},opt);})):
              e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
                poll.opts.map(function(opt,i){
                  var pct=Math.round(cv[i]/total*100);
                  var isMe=pollVotes[poll.id]===i;
                  var isWin=cv[i]===Math.max.apply(null,cv);
                  return e('div',{key:i},
                    e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},e('span',{style:{color:isMe?G:'#c0d0dc'}},isMe?'> ':'',opt),e('span',{style:{color:isWin?G:'#6a86a0',fontWeight:isWin?'bold':'normal'}},pct,'%')),
                    e('div',{style:{height:7,background:'rgba(255,255,255,0.07)',borderRadius:4,overflow:'hidden'}},e('div',{style:{width:pct+'%',height:'100%',background:isMe?'linear-gradient(90deg,'+G+',#ff9900)':isWin?'rgba(212,175,55,0.5)':'rgba(100,150,200,0.4)',borderRadius:4,transition:'width 0.6s'}}))
                  );
                }),
                e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:4}},total.toLocaleString(),' ',t.pollTotal)
              )
            );
          })
        )
      )
    ),

      // ── AI SIMULATOR TAB ──
      tab===7&&e('div',null,
        // ── MANUAL SIMULATOR ──────────────────────────────────────
        e('div',{style:{fontSize:12,color:G,fontWeight:'bold',textAlign:'center',marginBottom:12,letterSpacing:2}},'⚽ '+t.manTitle),
        e(Card,{style:{marginBottom:6}},
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:8,alignItems:'center',marginBottom:10}},
            e('div',null,
              e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:4}},t.simTeam1),
              e('select',{value:manTeam1,onChange:function(ev){setManTeam1(ev.target.value);setManResult(null);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'8px 6px',fontSize:11}},
                e('option',{value:''},'--'),
                ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})
              )
            ),
            e('div',{style:{fontSize:16,fontWeight:'bold',color:G}},'VS'),
            e('div',null,
              e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:4}},t.simTeam2),
              e('select',{value:manTeam2,onChange:function(ev){setManTeam2(ev.target.value);setManResult(null);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'8px 6px',fontSize:11}},
                e('option',{value:''},'--'),
                ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})
              )
            )
          ),
          e('button',{onClick:runManual,disabled:!manTeam1||!manTeam2,style:{width:'100%',background:(!manTeam1||!manTeam2)?'rgba(100,100,100,0.3)':'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'11px 0',fontSize:13,fontWeight:'bold',color:(!manTeam1||!manTeam2)?'#666':'#0a0a1a',cursor:(!manTeam1||!manTeam2)?'not-allowed':'pointer'}},t.manSim)
        ),

        manResult&&e(Card,{gold:manResult.winner!==null,style:{marginBottom:14,textAlign:'center',padding:'14px 12px'}},
          e('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}},
            e('div',{style:{flex:1,textAlign:'center'}},
              e('div',{style:{fontSize:12,fontWeight:'bold',color:manResult.winner===manResult.team1?G:'#eee'}},manResult.team1),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'Str: ',manResult.str1)
            ),
            e('div',{style:{padding:'8px 16px',background:'rgba(0,0,0,0.3)',borderRadius:10,border:'1px solid '+G}},
              e('div',{style:{fontSize:36,fontWeight:'bold',color:G,lineHeight:1}},manResult.g1,' - ',manResult.g2),
              e('div',{style:{fontSize:10,fontWeight:'bold',marginTop:4,color:manResult.winner?'#90ee90':'#d4af37'}},
                manResult.winner?manResult.winner+' '+t.manWinner:t.manDraw
              )
            ),
            e('div',{style:{flex:1,textAlign:'center'}},
              e('div',{style:{fontSize:12,fontWeight:'bold',color:manResult.winner===manResult.team2?G:'#eee'}},manResult.team2),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'Str: ',manResult.str2)
            )
          ),
          e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:10,color:'#6a86a0',marginTop:6}},
            e('span',null,t.simPoss,': ',manResult.poss1,'%'),
            e('span',null,manResult.poss2,'%')
          ),
          e('div',{style:{display:'flex',gap:2,height:5,borderRadius:3,overflow:'hidden',marginTop:4}},
            e('div',{style:{flex:manResult.poss1,background:'linear-gradient(90deg,'+G+',#ff9900)'}}),
            e('div',{style:{flex:manResult.poss2,background:'rgba(100,150,200,0.4)'}})
          ),
          e('button',{onClick:function(){setManResult(null);setManTeam1('');setManTeam2('');},style:{marginTop:10,background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:8,padding:'6px 16px',fontSize:11,color:G,cursor:'pointer'}},t.manReset)
        ),

        e('div',{style:{height:1,background:'rgba(212,175,55,0.2)',margin:'14px 0'}}),

        e('div',{style:{fontSize:12,color:G,fontWeight:'bold',textAlign:'center',marginBottom:12,letterSpacing:2}},'🤖 '+t.simTitle),
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center',letterSpacing:2}},t.simTitle),

        // Team selectors
        e(Card,{style:{marginBottom:14}},
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:10,alignItems:'center',marginBottom:14}},
            e('div',null,
              e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:6}},t.simTeam1),
              e('select',{value:simTeam1,onChange:function(ev){setSimTeam1(ev.target.value);setSimResult(null);setSimAIText('');},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'9px 8px',fontSize:12}},
                e('option',{value:''},'-- Select --'),
                ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})
              )
            ),
            e('div',{style:{fontSize:20,fontWeight:'bold',color:G,textAlign:'center'}},'VS'),
            e('div',null,
              e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:6}},t.simTeam2),
              e('select',{value:simTeam2,onChange:function(ev){setSimTeam2(ev.target.value);setSimResult(null);setSimAIText('');},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'9px 8px',fontSize:12}},
                e('option',{value:''},'-- Select --'),
                ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})
              )
            )
          ),
          e('button',{onClick:runSimulation,disabled:!simTeam1||!simTeam2||simLoading,style:{width:'100%',background:(!simTeam1||!simTeam2||simLoading)?'rgba(100,100,100,0.3)':'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:10,padding:'13px 0',fontSize:14,fontWeight:'bold',color:(!simTeam1||!simTeam2||simLoading)?'#666':'#0a0a1a',cursor:(!simTeam1||!simTeam2||simLoading)?'not-allowed':'pointer'}},
            simLoading?t.simRunning:'🤖 '+t.simRun
          )
        ),

        // Loading animation
        simLoading&&e('div',{style:{textAlign:'center',padding:30}},
          e('div',{style:{fontSize:40,animation:'spin 1s linear infinite',display:'inline-block'}},'⚽'),
          e('div',{style:{fontSize:12,color:G,marginTop:12,letterSpacing:2}},'AI ANALYSING...')
        ),

        // Result
        simResult&&e('div',null,
          // Score board
          e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'2px solid '+G,borderRadius:18,padding:'20px 16px',textAlign:'center',marginBottom:14}},
            e('div',{style:{fontSize:10,color:G,letterSpacing:3,marginBottom:12}},'⚽ FINAL SCORE'),
            e('div',{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:16}},
              e('div',{style:{flex:1,textAlign:'center'}},
                e('div',{style:{fontSize:13,fontWeight:'bold',color:'#eee',marginBottom:6}},simResult.team1),
                e('div',{style:{fontSize:11,color:'#6a86a0'}},'Str: ',simResult.str1,'/100')
              ),
              e('div',{style:{background:'rgba(212,175,55,0.15)',borderRadius:12,padding:'10px 20px',border:'1px solid '+G}},
                e('div',{style:{fontSize:42,fontWeight:'bold',color:G,lineHeight:1}},simResult.goals1,' - ',simResult.goals2),
                e('div',{style:{fontSize:10,color:simResult.goals1>simResult.goals2?'#90ee90':simResult.goals2>simResult.goals1?'#ff8888':'#d4af37',marginTop:4,fontWeight:'bold'}},
                  simResult.goals1>simResult.goals2?simResult.team1+' '+t.simWin:simResult.goals2>simResult.goals1?simResult.team2+' '+t.simWin:t.simDraw
                )
              ),
              e('div',{style:{flex:1,textAlign:'center'}},
                e('div',{style:{fontSize:13,fontWeight:'bold',color:'#eee',marginBottom:6}},simResult.team2),
                e('div',{style:{fontSize:11,color:'#6a86a0'}},'Str: ',simResult.str2,'/100')
              )
            )
          ),

          // Form
          e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
            e('div',{style:{fontSize:10,color:G,fontWeight:'bold',marginBottom:10}},t.simForm),
            e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
              e('div',{style:{display:'flex',gap:4}},
                simResult.form1.map(function(f,i){return e('div',{key:i,style:{width:24,height:24,borderRadius:5,background:f==='W'?'#2d7a2d':f==='D'?'#7a6a2d':'#7a2d2d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:'bold',color:'#fff'}},f);})
              ),
              e('div',{style:{fontSize:11,color:'#6a86a0'}},simResult.team1,' vs ',simResult.team2),
              e('div',{style:{display:'flex',gap:4}},
                simResult.form2.map(function(f,i){return e('div',{key:i,style:{width:24,height:24,borderRadius:5,background:f==='W'?'#2d7a2d':f==='D'?'#7a6a2d':'#7a2d2d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:'bold',color:'#fff'}},f);})
              )
            )
          ),

          // Stats grid
          e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
            e('div',{style:{fontSize:10,color:G,fontWeight:'bold',marginBottom:10}},t.simStats),
            e('div',{style:{marginBottom:8}},
              e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.poss1+'%'),
                e('span',{style:{color:'#6a86a0'}},t.simPoss),
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.poss2+'%')
              ),
              e('div',{style:{display:'flex',gap:2,height:6,borderRadius:3,overflow:'hidden'}},
                e('div',{style:{flex:simResult.poss1,background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:'3px 0 0 3px'}}),
                e('div',{style:{flex:simResult.poss2,background:'rgba(100,150,200,0.5)',borderRadius:'0 3px 3px 0'}})
              )
            ),
            e('div',{style:{marginBottom:8}},
              e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.shots1),
                e('span',{style:{color:'#6a86a0'}},t.simShots),
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.shots2)
              ),
              e('div',{style:{display:'flex',gap:2,height:6,borderRadius:3,overflow:'hidden'}},
                e('div',{style:{flex:simResult.shots1,background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:'3px 0 0 3px'}}),
                e('div',{style:{flex:simResult.shots2,background:'rgba(100,150,200,0.5)',borderRadius:'0 3px 3px 0'}})
              )
            ),
            e('div',{style:{marginBottom:8}},
              e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.atk1),
                e('span',{style:{color:'#6a86a0'}},t.simAttack),
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.atk2)
              ),
              e('div',{style:{display:'flex',gap:2,height:6,borderRadius:3,overflow:'hidden'}},
                e('div',{style:{flex:simResult.atk1,background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:'3px 0 0 3px'}}),
                e('div',{style:{flex:simResult.atk2,background:'rgba(100,150,200,0.5)',borderRadius:'0 3px 3px 0'}})
              )
            ),
            e('div',null,
              e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.def1),
                e('span',{style:{color:'#6a86a0'}},t.simDefence),
                e('span',{style:{color:G,fontWeight:'bold'}},simResult.def2)
              ),
              e('div',{style:{display:'flex',gap:2,height:6,borderRadius:3,overflow:'hidden'}},
                e('div',{style:{flex:simResult.def1,background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:'3px 0 0 3px'}}),
                e('div',{style:{flex:simResult.def2,background:'rgba(100,150,200,0.5)',borderRadius:'0 3px 3px 0'}})
              )
            )
          ),

          // AI Analysis
          simAIText&&e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'1px solid rgba(212,175,55,0.4)',borderRadius:14,padding:16,marginBottom:14}},
            e('div',{style:{display:'flex',alignItems:'center',gap:8,marginBottom:10}},
              e('div',{style:{fontSize:20}},'🤖'),
              e('div',{style:{fontSize:12,color:G,fontWeight:'bold',letterSpacing:1}},t.simAITitle)
            ),
            e('div',{style:{fontSize:12,color:'#c0d8e8',lineHeight:1.6}},simAIText)
          ),

          // New match button
          e('button',{onClick:function(){setSimResult(null);setSimAIText('');setSimTeam1('');setSimTeam2('');},style:{width:'100%',background:'rgba(212,175,55,0.12)',border:'1px solid '+G,borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:G,cursor:'pointer'}},'🔄 '+t.simReset)
        ),

        // ── TOURNAMENT SIMULATOR ──────────────────────────────
        e('div',{style:{marginTop:20}},
          e('div',{style:{height:1,background:'rgba(212,175,55,0.2)',marginBottom:20}}),
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',textAlign:'center',marginBottom:14,letterSpacing:2}},'🏆 WORLD CUP 2026 TOURNAMENT SIMULATOR'),
          e('button',{onClick:runTournament,disabled:tournLoading,style:{width:'100%',background:tournLoading?'rgba(100,100,100,0.3)':'linear-gradient(135deg,#1a3a8a,#2a5ab8)',border:'1px solid rgba(100,150,255,0.4)',borderRadius:12,padding:'14px 0',fontSize:14,fontWeight:'bold',color:tournLoading?'#666':'#fff',cursor:tournLoading?'not-allowed':'pointer',marginBottom:14}},
            tournLoading?'⚽ Simulating entire tournament...':'🏆 Simulate Full Tournament'
          ),

          tournLoading&&e('div',{style:{textAlign:'center',padding:20}},
            e('div',{style:{fontSize:12,color:G,letterSpacing:1}},'Simulating 104 matches...'),
            e('div',{style:{marginTop:8,height:4,background:'rgba(255,255,255,0.1)',borderRadius:2}},
              e('div',{style:{height:'100%',width:'60%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:2,animation:'shimmer 1s infinite'}})
            )
          ),

          tournament&&e('div',null,

            // 🏆 CHAMPION PODIUM
            e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.25),rgba(184,150,62,0.15))',border:'2px solid '+G,borderRadius:18,padding:'20px 16px',textAlign:'center',marginBottom:16}},
              e('div',{style:{fontSize:10,color:G,letterSpacing:3,marginBottom:8}},'🏆 WORLD CUP 2026 CHAMPION'),
              e('div',{style:{fontSize:32,marginBottom:4}},'🥇'),
              e('div',{style:{fontSize:22,fontWeight:'bold',color:G,marginBottom:4}},tournament.champion),
              e('div',{style:{fontSize:13,color:'#eee',marginBottom:16}},'WORLD CHAMPION 2026'),
              e('div',{style:{display:'flex',justifyContent:'center',gap:20}},
                e('div',{style:{textAlign:'center'}},
                  e('div',{style:{fontSize:16}},'🥈'),
                  e('div',{style:{fontSize:11,color:'#c0c0c0',marginTop:2}},tournament.runnerUp),
                  e('div',{style:{fontSize:9,color:'#6a86a0'}},'Runner-up')
                ),
                e('div',{style:{textAlign:'center'}},
                  e('div',{style:{fontSize:16}},'🥉'),
                  e('div',{style:{fontSize:11,color:'#cd7f32',marginTop:2}},tournament.third),
                  e('div',{style:{fontSize:9,color:'#6a86a0'}},'3rd Place')
                )
              )
            ),

            // View toggle
            e('div',{style:{display:'flex',gap:8,marginBottom:14}},
              ['bracket','groups'].map(function(view){
                return e('button',{key:view,onClick:function(){setSimView(view);},style:{flex:1,background:simView===view?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:simView===view?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'8px 0',fontSize:11,fontWeight:'bold',color:simView===view?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},
                  view==='bracket'?'🏆 Bracket':'📊 Groups'
                );
              })
            ),

            // BRACKET VIEW
            simView==='bracket'&&e('div',null,

              // Final
              e(Card,{gold:true,style:{marginBottom:10,padding:'12px 14px'}},
                e('div',{style:{fontSize:10,color:G,fontWeight:'bold',marginBottom:8,letterSpacing:1}},'🏆 FINAL - 19 July'),
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',{style:{fontSize:13,fontWeight:'bold',color:tournament.final.winner===tournament.final.home?G:'#eee'}},tournament.final.home),
                  e('div',{style:{fontSize:18,fontWeight:'bold',color:G,padding:'4px 12px',background:'rgba(212,175,55,0.15)',borderRadius:8}},tournament.final.goalsHome,' - ',tournament.final.goalsAway),
                  e('div',{style:{fontSize:13,fontWeight:'bold',color:tournament.final.winner===tournament.final.away?G:'#eee'}},tournament.final.away)
                )
              ),

              // 3rd place
              e(Card,{style:{marginBottom:10,padding:'12px 14px'}}  ,
                e('div',{style:{fontSize:10,color:'#cd7f32',fontWeight:'bold',marginBottom:8}},'🥉 3RD PLACE'),
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',{style:{fontSize:12}},tournament.thirdPlace.home),
                  e('div',{style:{fontSize:16,fontWeight:'bold',color:'#cd7f32',padding:'4px 10px',background:'rgba(205,127,50,0.15)',borderRadius:8}},tournament.thirdPlace.goalsHome,' - ',tournament.thirdPlace.goalsAway),
                  e('div',{style:{fontSize:12}},tournament.thirdPlace.away)
                )
              ),

              // Semi Finals
              e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
                e('div',{style:{fontSize:10,color:'#9bb0c8',fontWeight:'bold',marginBottom:8}},'SEMI FINALS'),
                tournament.sf.map(function(m,i){
                  return e('div',{key:i,style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:i<tournament.sf.length-1?8:0,padding:'6px 0',borderBottom:i<tournament.sf.length-1?'1px solid rgba(212,175,55,0.1)':'none'}},
                    e('div',{style:{fontSize:11,fontWeight:m.winner===m.home?'bold':'normal',color:m.winner===m.home?G:'#eee'}},m.home),
                    e('div',{style:{fontSize:13,fontWeight:'bold',color:'#9bb0c8',padding:'2px 8px'}},m.goalsHome,' - ',m.goalsAway),
                    e('div',{style:{fontSize:11,fontWeight:m.winner===m.away?'bold':'normal',color:m.winner===m.away?G:'#eee'}},m.away)
                  );
                })
              ),

              // Quarter Finals
              e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
                e('div',{style:{fontSize:10,color:'#9bb0c8',fontWeight:'bold',marginBottom:8}},'QUARTER FINALS'),
                tournament.qf.map(function(m,i){
                  return e('div',{key:i,style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:i<tournament.qf.length-1?6:0,padding:'5px 0',borderBottom:i<tournament.qf.length-1?'1px solid rgba(212,175,55,0.08)':'none'}},
                    e('div',{style:{fontSize:11,fontWeight:m.winner===m.home?'bold':'normal',color:m.winner===m.home?G:'#aaa',flex:1}},m.home),
                    e('div',{style:{fontSize:12,fontWeight:'bold',color:'#9bb0c8',padding:'2px 6px',minWidth:40,textAlign:'center'}},m.goalsHome,'-',m.goalsAway),
                    e('div',{style:{fontSize:11,fontWeight:m.winner===m.away?'bold':'normal',color:m.winner===m.away?G:'#aaa',flex:1,textAlign:'right'}},m.away)
                  );
                })
              ),

              // Round of 16
              e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
                e('div',{style:{fontSize:10,color:'#9bb0c8',fontWeight:'bold',marginBottom:8}},'ROUND OF 16'),
                tournament.r16.map(function(m,i){
                  return e('div',{key:i,style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:i<tournament.r16.length-1?5:0,padding:'4px 0',borderBottom:i<tournament.r16.length-1?'1px solid rgba(212,175,55,0.07)':'none'}},
                    e('div',{style:{fontSize:10,fontWeight:m.winner===m.home?'bold':'normal',color:m.winner===m.home?G:'#888',flex:1}},m.home),
                    e('div',{style:{fontSize:11,fontWeight:'bold',color:'#7a96b0',padding:'2px 6px',minWidth:36,textAlign:'center'}},m.goalsHome,'-',m.goalsAway),
                    e('div',{style:{fontSize:10,fontWeight:m.winner===m.away?'bold':'normal',color:m.winner===m.away?G:'#888',flex:1,textAlign:'right'}},m.away)
                  );
                })
              ),

              // Round of 32
              e(Card,{style:{marginBottom:14,padding:'12px 14px'}},
                e('div',{style:{fontSize:10,color:'#9bb0c8',fontWeight:'bold',marginBottom:8}},'ROUND OF 32'),
                tournament.r32.map(function(m,i){
                  return e('div',{key:i,style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:i<tournament.r32.length-1?4:0,padding:'3px 0',borderBottom:i<tournament.r32.length-1?'1px solid rgba(212,175,55,0.06)':'none'}},
                    e('div',{style:{fontSize:9,fontWeight:m.winner===m.home?'bold':'normal',color:m.winner===m.home?G:'#777',flex:1}},m.home),
                    e('div',{style:{fontSize:10,fontWeight:'bold',color:'#6a86a0',padding:'1px 4px',minWidth:30,textAlign:'center'}},m.goalsHome,'-',m.goalsAway),
                    e('div',{style:{fontSize:9,fontWeight:m.winner===m.away?'bold':'normal',color:m.winner===m.away?G:'#777',flex:1,textAlign:'right'}},m.away)
                  );
                })
              )
            ),

            // GROUPS VIEW
            simView==='groups'&&e('div',null,
              Object.entries(tournament.groups).map(function(entry){
                var g=entry[0];var gr=entry[1];
                return e(Card,{key:g,style:{marginBottom:10,padding:'12px 14px'}},
                  e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:8}},'GROUP ',g),
                  gr.teams.map(function(team,i){
                    return e('div',{key:team,style:{display:'flex',alignItems:'center',gap:8,padding:'5px 0',borderBottom:i<3?'1px solid rgba(212,175,55,0.08)':'none'}},
                      e('div',{style:{width:18,height:18,borderRadius:4,background:i<2?G:i===2?'rgba(212,175,55,0.3)':'rgba(100,100,100,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:'bold',color:i<2?'#0a0a1a':G}},i+1),
                      e('div',{style:{flex:1,fontSize:11,fontWeight:i===0?'bold':'normal',color:i<2?'#eee':'#888'}},team),
                      e('div',{style:{fontSize:10,color:G,fontWeight:'bold',minWidth:16,textAlign:'center'}},gr.points[team],'pts'),
                      e('div',{style:{fontSize:9,color:'#6a86a0',minWidth:24,textAlign:'right'}},(gr.gd[team]>0?'+':'')+gr.gd[team])
                    );
                  })
                );
              })
            ),

            // Simulate again
            e('button',{onClick:runTournament,style:{width:'100%',background:'linear-gradient(135deg,#1a3a8a,#2a5ab8)',border:'1px solid rgba(100,150,255,0.4)',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#fff',cursor:'pointer',marginBottom:8}},'🔄 Simulate Again'),
            e('div',{style:{fontSize:9,color:'#3a5070',textAlign:'center'}},'Each simulation is different — upsets can happen!')
          )
        )
      ),

        !premium&&e('div',{style:{background:'rgba(2,5,15,0.95)',borderTop:'1px solid rgba(212,175,55,0.15)',padding:'8px 14px',textAlign:'center'}},
      e('div',{style:{fontSize:8,color:'#3a5070',marginBottom:4}},'ADVERTISEMENT'),
      e('div',{style:{display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:8}},
        affiliates.map(function(a){return e('a',{key:a.name,href:a.url,target:'_blank',rel:'noopener sponsored',style:{background:a.color,borderRadius:8,padding:'6px 12px',textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center',minWidth:80}},e('div',{style:{fontSize:11,fontWeight:'bold',color:'#fff'}},a.name),e('div',{style:{fontSize:9,color:'rgba(255,255,255,0.85)',marginTop:2}},a.desc));})
      )
    ),

    e('footer',{style:{textAlign:'center',padding:'10px',fontSize:9,color:'#2e4460',borderTop:'1px solid rgba(212,175,55,0.08)',marginTop:4}},'World Cup 2026 Fan App - ',premium?'PRO':'Free')
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
