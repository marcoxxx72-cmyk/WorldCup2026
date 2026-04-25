var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;
var G = '#d4af37';
var DARK = '#08091a';
var CB = 'rgba(12,24,54,0.9)';
var BD = 'rgba(212,175,55,0.22)';

var LANGS = [{code:'en',label:'EN'},{code:'fr',label:'FR'},{code:'es',label:'ES'},{code:'pt',label:'PT'},{code:'it',label:'IT'},{code:'de',label:'DE'}];

// - TEAM DATA PER LANGUAGE -
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


// - TEAM NAME TRANSLATIONS -
var TEAM_NAMES = {
  en:{
    'Mexico':'Mexico','South Africa':'South Africa','South Korea':'South Korea',
    'Czechia':'Czechia','Canada':'Canada','Bosnia':'Bosnia & Herzegovina',
    'Qatar':'Qatar','Switzerland':'Switzerland','Brazil':'Brazil','Morocco':'Morocco',
    'Haiti':'Haiti','Scotland':'Scotland','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turkey','Germany':'Germany','Curacao':'Curacao',
    'Ivory Coast':'Ivory Coast','Ecuador':'Ecuador','Netherlands':'Netherlands',
    'Japan':'Japan','Sweden':'Sweden','Tunisia':'Tunisia','Belgium':'Belgium',
    'Egypt':'Egypt','Iran':'Iran','New Zealand':'New Zealand','Spain':'Spain',
    'Cape Verde':'Cape Verde','Saudi Arabia':'Saudi Arabia','Uruguay':'Uruguay',
    'France':'France','Senegal':'Senegal','Iraq':'Iraq','Norway':'Norway',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Jordan',
    'Portugal':'Portugal','DR Congo':'DR Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'England','Croatia':'Croatia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  fr:{
    'Mexico':'Mexique','South Africa':'Afrique du Sud','South Korea':'Coree du Sud',
    'Czechia':'Republique Tcheque','Canada':'Canada','Bosnia':'Bosnie-Herzegovine',
    'Qatar':'Qatar','Switzerland':'Suisse','Brazil':'Bresil','Morocco':'Maroc',
    'Haiti':'Haiti','Scotland':'Ecosse','USA':'Etats-Unis','Paraguay':'Paraguay',
    'Australia':'Australie','Turkey':'Turquie','Germany':'Allemagne','Curacao':'Curacao',
    'Ivory Coast':'Cote d Ivoire','Ecuador':'Equateur','Netherlands':'Pays-Bas',
    'Japan':'Japon','Sweden':'Suede','Tunisia':'Tunisie','Belgium':'Belgique',
    'Egypt':'Egypte','Iran':'Iran','New Zealand':'Nouvelle-Zelande','Spain':'Espagne',
    'Cape Verde':'Cap-Vert','Saudi Arabia':'Arabie Saoudite','Uruguay':'Uruguay',
    'France':'France','Senegal':'Senegal','Iraq':'Irak','Norway':'Norvege',
    'Argentina':'Argentine','Algeria':'Algerie','Austria':'Autriche','Jordan':'Jordanie',
    'Portugal':'Portugal','DR Congo':'RD Congo','Uzbekistan':'Ouzbekistan',
    'Colombia':'Colombie','England':'Angleterre','Croatia':'Croatie','Ghana':'Ghana',
    'Panama':'Panama'
  },
  es:{
    'Mexico':'Mexico','South Africa':'Sudafrica','South Korea':'Corea del Sur',
    'Czechia':'Republica Checa','Canada':'Canada','Bosnia':'Bosnia y Herzegovina',
    'Qatar':'Qatar','Switzerland':'Suiza','Brazil':'Brasil','Morocco':'Marruecos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'EE.UU.','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turquia','Germany':'Alemania','Curacao':'Curacao',
    'Ivory Coast':'Costa de Marfil','Ecuador':'Ecuador','Netherlands':'Paises Bajos',
    'Japan':'Japon','Sweden':'Suecia','Tunisia':'Tunez','Belgium':'Belgica',
    'Egypt':'Egipto','Iran':'Iran','New Zealand':'Nueva Zelanda','Spain':'Espana',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguay',
    'France':'Francia','Senegal':'Senegal','Iraq':'Irak','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Argelia','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  pt:{
    'Mexico':'Mexico','South Africa':'Africa do Sul','South Korea':'Coreia do Sul',
    'Czechia':'Republica Tcheca','Canada':'Canada','Bosnia':'Bosnia e Herzegovina',
    'Qatar':'Catar','Switzerland':'Suica','Brazil':'Brasil','Morocco':'Marrocos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'EUA','Paraguay':'Paraguai',
    'Australia':'Australia','Turkey':'Turquia','Germany':'Alemanha','Curacao':'Curacao',
    'Ivory Coast':'Costa do Marfim','Ecuador':'Equador','Netherlands':'Paises Baixos',
    'Japan':'Japao','Sweden':'Suecia','Tunisia':'Tunisia','Belgium':'Belgica',
    'Egypt':'Egito','Iran':'Ira','New Zealand':'Nova Zelandia','Spain':'Espanha',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguai',
    'France':'Franca','Senegal':'Senegal','Iraq':'Iraque','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbequistao',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Gana',
    'Panama':'Panama'
  },
  it:{
    'Mexico':'Messico','South Africa':'Sudafrica','South Korea':'Corea del Sud',
    'Czechia':'Repubblica Ceca','Canada':'Canada','Bosnia':'Bosnia ed Erzegovina',
    'Qatar':'Qatar','Switzerland':'Svizzera','Brazil':'Brasile','Morocco':'Marocco',
    'Haiti':'Haiti','Scotland':'Scozia','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turchia','Germany':'Germania','Curacao':'Curacao',
    'Ivory Coast':'Costa d Avorio','Ecuador':'Ecuador','Netherlands':'Paesi Bassi',
    'Japan':'Giappone','Sweden':'Svezia','Tunisia':'Tunisia','Belgium':'Belgio',
    'Egypt':'Egitto','Iran':'Iran','New Zealand':'Nuova Zelanda','Spain':'Spagna',
    'Cape Verde':'Capo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguay',
    'France':'Francia','Senegal':'Senegal','Iraq':'Iraq','Norway':'Norvegia',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Giordania',
    'Portugal':'Portogallo','DR Congo':'R.D. Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'Inghilterra','Croatia':'Croazia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  de:{
    'Mexico':'Mexiko','South Africa':'Sudafrika','South Korea':'Sudkorea',
    'Czechia':'Tschechien','Canada':'Kanada','Bosnia':'Bosnien-Herzegowina',
    'Qatar':'Katar','Switzerland':'Schweiz','Brazil':'Brasilien','Morocco':'Marokko',
    'Haiti':'Haiti','Scotland':'Schottland','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australien','Turkey':'Turkei','Germany':'Deutschland','Curacao':'Curacao',
    'Ivory Coast':'Elfenbeinkuste','Ecuador':'Ecuador','Netherlands':'Niederlande',
    'Japan':'Japan','Sweden':'Schweden','Tunisia':'Tunesien','Belgium':'Belgien',
    'Egypt':'Agypten','Iran':'Iran','New Zealand':'Neuseeland','Spain':'Spanien',
    'Cape Verde':'Kap Verde','Saudi Arabia':'Saudi-Arabien','Uruguay':'Uruguay',
    'France':'Frankreich','Senegal':'Senegal','Iraq':'Irak','Norway':'Norwegen',
    'Argentina':'Argentinien','Algeria':'Algerien','Austria':'Osterreich','Jordan':'Jordanien',
    'Portugal':'Portugal','DR Congo':'DR Kongo','Uzbekistan':'Usbekistan',
    'Colombia':'Kolumbien','England':'England','Croatia':'Kroatien','Ghana':'Ghana',
    'Panama':'Panama'
  }
};

function tn(team, lang){ return (TEAM_NAMES[lang]&&TEAM_NAMES[lang][team])||team; }

var ALL_TEAMS = Object.values(GROUPS).reduce(function(a,g){return a.concat(g.teams);},[]).sort();

// - FIXTURES -
var FIXTURES = [
  // - JUNE 11 -
  {date:'2026-06-11',time:'15:00',home:'Mexico',away:'South Africa',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-11',time:'22:00',home:'South Korea',away:'Czechia',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  // - JUNE 12 -
  {date:'2026-06-12',time:'15:00',home:'Canada',away:'Bosnia',group:'B',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-12',time:'21:00',home:'USA',away:'Paraguay',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  // - JUNE 13 -
  {date:'2026-06-13',time:'15:00',home:'Qatar',away:'Switzerland',group:'B',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-13',time:'18:00',home:'Brazil',away:'Morocco',group:'C',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-13',time:'21:00',home:'Haiti',away:'Scotland',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-14',time:'00:00',home:'Australia',away:'Turkey',group:'D',stadium:'BC Place',city:'Vancouver'},
  // - JUNE 14 -
  {date:'2026-06-14',time:'15:00',home:'Germany',away:'Curacao',group:'E',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-14',time:'18:00',home:'Netherlands',away:'Japan',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-14',time:'21:00',home:'Ivory Coast',away:'Ecuador',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  // - JUNE 15 -
  {date:'2026-06-15',time:'00:00',home:'Sweden',away:'Tunisia',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-15',time:'15:00',home:'Spain',away:'Cape Verde',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-15',time:'18:00',home:'Belgium',away:'Egypt',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-15',time:'21:00',home:'Saudi Arabia',away:'Uruguay',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  // - JUNE 16 -
  {date:'2026-06-16',time:'00:00',home:'Iran',away:'New Zealand',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-16',time:'15:00',home:'France',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-16',time:'18:00',home:'Iraq',away:'Norway',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-16',time:'21:00',home:'Argentina',away:'Algeria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 17 -
  {date:'2026-06-17',time:'00:00',home:'Austria',away:'Jordan',group:'J',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-17',time:'15:00',home:'Portugal',away:'DR Congo',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-17',time:'18:00',home:'England',away:'Croatia',group:'L',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-17',time:'21:00',home:'Ghana',away:'Panama',group:'L',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 18 -
  {date:'2026-06-18',time:'00:00',home:'Uzbekistan',away:'Colombia',group:'K',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-18',time:'15:00',home:'Czechia',away:'South Africa',group:'A',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-18',time:'18:00',home:'Switzerland',away:'Bosnia',group:'B',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-18',time:'21:00',home:'Canada',away:'Qatar',group:'B',stadium:'BC Place',city:'Vancouver'},
  // - JUNE 19 -
  {date:'2026-06-19',time:'00:00',home:'Mexico',away:'South Korea',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-19',time:'15:00',home:'USA',away:'Australia',group:'D',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-19',time:'18:00',home:'Scotland',away:'Morocco',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-19',time:'21:00',home:'Brazil',away:'Haiti',group:'C',stadium:'Lincoln Financial',city:'Philadelphia'},
  // - JUNE 20 -
  {date:'2026-06-20',time:'00:00',home:'Turkey',away:'Paraguay',group:'D',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-20',time:'15:00',home:'Netherlands',away:'Sweden',group:'F',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-20',time:'18:00',home:'Germany',away:'Ivory Coast',group:'E',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-20',time:'21:00',home:'Ecuador',away:'Curacao',group:'E',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 21 -
  {date:'2026-06-21',time:'00:00',home:'Tunisia',away:'Japan',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-21',time:'15:00',home:'Spain',away:'Saudi Arabia',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-21',time:'18:00',home:'Belgium',away:'Iran',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-21',time:'21:00',home:'Uruguay',away:'Cape Verde',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  // - JUNE 22 -
  {date:'2026-06-22',time:'00:00',home:'New Zealand',away:'Egypt',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-22',time:'15:00',home:'Argentina',away:'Austria',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-22',time:'18:00',home:'France',away:'Iraq',group:'I',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-22',time:'21:00',home:'Norway',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  // - JUNE 23 -
  {date:'2026-06-23',time:'00:00',home:'Jordan',away:'Algeria',group:'J',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-23',time:'15:00',home:'Portugal',away:'Uzbekistan',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-23',time:'18:00',home:'England',away:'Ghana',group:'L',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-23',time:'21:00',home:'Panama',away:'Croatia',group:'L',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 24 -
  {date:'2026-06-24',time:'00:00',home:'Colombia',away:'DR Congo',group:'K',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-24',time:'18:00',home:'Switzerland',away:'Canada',group:'B',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-24',time:'18:00',home:'Bosnia',away:'Qatar',group:'B',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-24',time:'21:00',home:'Scotland',away:'Brazil',group:'C',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-24',time:'21:00',home:'Morocco',away:'Haiti',group:'C',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  // - JUNE 25 -
  {date:'2026-06-25',time:'00:00',home:'Czechia',away:'Mexico',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-25',time:'00:00',home:'South Africa',away:'South Korea',group:'A',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-25',time:'18:00',home:'Curacao',away:'Ivory Coast',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-25',time:'18:00',home:'Ecuador',away:'Germany',group:'E',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-25',time:'21:00',home:'Japan',away:'Sweden',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-25',time:'21:00',home:'Tunisia',away:'Netherlands',group:'F',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 26 -
  {date:'2026-06-26',time:'00:00',home:'Turkey',away:'USA',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-26',time:'00:00',home:'Paraguay',away:'Australia',group:'D',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-26',time:'18:00',home:'Norway',away:'France',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-26',time:'18:00',home:'Senegal',away:'Iraq',group:'I',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 27 -
  {date:'2026-06-27',time:'00:00',home:'Cape Verde',away:'Saudi Arabia',group:'H',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-27',time:'00:00',home:'Uruguay',away:'Spain',group:'H',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-27',time:'03:00',home:'Egypt',away:'Iran',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-27',time:'03:00',home:'New Zealand',away:'Belgium',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-27',time:'18:00',home:'Panama',away:'England',group:'L',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-27',time:'18:00',home:'Croatia',away:'Ghana',group:'L',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-27',time:'21:00',home:'Colombia',away:'Portugal',group:'K',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-27',time:'21:00',home:'DR Congo',away:'Uzbekistan',group:'K',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  // - JUNE 28 -
  {date:'2026-06-28',time:'00:00',home:'Algeria',away:'Austria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-28',time:'00:00',home:'Jordan',away:'Argentina',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  // - ROUND OF 32 (June 28 - July 1) -
  {date:'2026-06-28',time:'15:00',home:'2nd A',away:'2nd B',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-29',time:'13:00',home:'1st C',away:'2nd F',group:'R32',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-29',time:'16:30',home:'1st E',away:'Best 3rd',group:'R32',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-29',time:'21:00',home:'1st F',away:'2nd C',group:'R32',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-30',time:'13:00',home:'2nd E',away:'2nd I',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-30',time:'17:00',home:'1st I',away:'Best 3rd',group:'R32',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-30',time:'21:00',home:'1st A',away:'Best 3rd',group:'R32',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-01',time:'12:00',home:'1st L',away:'Best 3rd',group:'R32',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-07-01',time:'16:00',home:'1st G',away:'Best 3rd',group:'R32',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-07-01',time:'17:00',home:'1st D',away:'Best 3rd',group:'R32',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-07-02',time:'12:00',home:'2nd K',away:'2nd L',group:'R32',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-07-02',time:'14:00',home:'1st H',away:'2nd J',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-03',time:'13:00',home:'1st B',away:'Best 3rd',group:'R32',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-07-03',time:'15:00',home:'2nd D',away:'2nd G',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-03',time:'18:00',home:'1st J',away:'2nd H',group:'R32',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-04',time:'09:30',home:'1st K',away:'Best 3rd',group:'R32',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - ROUND OF 16 (July 4-7) -
  {date:'2026-07-04',time:'13:00',home:'R16 Match 1',away:'R16 Match 1',group:'R16',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-07-04',time:'17:00',home:'R16 Match 2',away:'R16 Match 2',group:'R16',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-07-05',time:'16:00',home:'R16 Match 3',away:'R16 Match 3',group:'R16',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-05',time:'20:00',home:'R16 Match 4',away:'R16 Match 4',group:'R16',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-06',time:'15:00',home:'R16 Match 5',away:'R16 Match 5',group:'R16',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-06',time:'17:00',home:'R16 Match 6',away:'R16 Match 6',group:'R16',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-07-07',time:'12:00',home:'R16 Match 7',away:'R16 Match 7',group:'R16',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-07-07',time:'16:00',home:'R16 Match 8',away:'R16 Match 8',group:'R16',stadium:'BC Place',city:'Vancouver'},
  // - QUARTER FINALS (July 9-10) -
  {date:'2026-07-09',time:'16:00',home:'QF1',away:'QF2',group:'QF',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-07-10',time:'15:00',home:'QF3',away:'QF4',group:'QF',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-10',time:'19:00',home:'QF5',away:'QF6',group:'QF',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-07-11',time:'01:00',home:'QF7',away:'QF8',group:'QF',stadium:'AT&T Stadium',city:'Dallas'},
  // - SEMI FINALS (July 13-14) -
  {date:'2026-07-14',time:'19:00',home:'Semi-Final 1',away:'Semi-Final 2',group:'SF',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-15',time:'19:00',home:'Semi-Final 3',away:'Semi-Final 4',group:'SF',stadium:'AT&T Stadium',city:'Dallas'},
  // - 3RD PLACE + FINAL -
  {date:'2026-07-18',time:'19:00',home:'3rd Place',away:'3rd Place',group:'3P',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-19',time:'19:00',home:'FINAL',away:'FINAL',group:'FIN',stadium:'MetLife Stadium',city:'New York / New Jersey'}
]

// - TRANSLATIONS -
var T = {
  en:{appTitle:'World Cup 2026',appSub:'USA - CANADA - MEXICO',nav:['Home','Groups','Fixtures','Predictions','Quiz','Players','Polls','Sim'],countdown:'Countdown',timeUnits:['Days','Hours','Min','Sec'],keyInfo:['Host nations','Teams','Matches','Duration'],keyVals:['3 nations','48 teams','104 matches','Jun 11-Jul 19'],format:'Tournament Format',formatLines:['12 groups of 4 teams','1st + 2nd + 8 best 3rds = 32 teams','Round of 32 > 16 > QF > SF > Final','Opening: Estadio Azteca, Mexico City','Final: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GROUPS',hostLabel:'Host',groupLabel:'Group',myTeamLabel:'My Team',pickTeam:'Pick your team',pronoSub:'Who will reach the final?',pronoWinner:'World Champion 2026',pronoFinal:'Runner-up',pronoSemi:'Semi-finalists',pronoSave:'Save',pronoSaved:'Saved!',pronoReset:'Reset',pronoChoose:'Choose...',pronoMyPick:'My pick',quizSub:'Test your knowledge!',quizScore:'Score',quizNext:'Next question',quizFinish:'See result',quizRestart:'Play again',quizPerfect:'PERFECT! You are an expert!',quizGood:'Great job!',quizAvg:'Not bad!',quizBad:'Keep studying!',starsSub:'Players',pollTitle:'Polls',pollTotal:'votes',didYouKnow:'Did you know?',facts:['Italy miss the 2026 World Cup for 2nd time','Azteca hosts its 3rd World Cup','First-ever 48-team World Cup','First edition co-hosted by 3 countries','104 matches vs 64 in 2022','New IFAB rules in effect'],shareApp:'Share',shareCopied:'Link copied!',premiumBanner:'Go PREMIUM - Predictions + Stats + No ads',premiumBtn:'Unlock',fixturesTitle:'FIXTURES & RESULTS',fixturesAll:'All matches',fixturesMy:'My team only',noFixtures:'No fixtures found'},
  fr:{appTitle:'Mundial 2026',appSub:'ETATS-UNIS - CANADA - MEXIQUE',nav:['Accueil','Groupes','Calendrier','Pronostics','Quiz','Joueurs','Sondages','Sim'],countdown:'Compte a rebours',timeUnits:['Jours','Heures','Min','Sec'],keyInfo:['Pays hotes','Equipes','Matchs','Duree'],keyVals:['3 nations','48 equipes','104 matchs','11 juin-19 juil.'],format:'Format du tournoi',formatLines:['12 groupes de 4 equipes','1er + 2e + 8 meilleurs 3es = 32 equipes','Tour des 32 > 16e > QF > SF > Finale','Ouverture: Estadio Azteca, Mexico','Finale: MetLife Stadium, New York'],groupsTitle:'48 EQUIPES - 12 GROUPES',hostLabel:'Pays hote',groupLabel:'Groupe',myTeamLabel:'Mon Equipe',pickTeam:'Choisir mon equipe',pronoSub:'Qui ira en finale?',pronoWinner:'Champion du Monde 2026',pronoFinal:'Finaliste',pronoSemi:'Demi-finales',pronoSave:'Sauvegarder',pronoSaved:'Sauvegarde!',pronoReset:'Reinitialiser',pronoChoose:'Choisir...',pronoMyPick:'Mon choix',quizSub:'Testez vos connaissances!',quizScore:'Score',quizNext:'Question suivante',quizFinish:'Voir mon resultat',quizRestart:'Rejouer',quizPerfect:'PARFAIT! Tu es un expert!',quizGood:'Tres bien!',quizAvg:'Pas mal!',quizBad:'Continue a reviser!',starsSub:'Joueurs',pollTitle:'Sondages',pollTotal:'votes',didYouKnow:'Le saviez-vous?',facts:["L Italie rate le Mondial 2026 pour la 2e fois","L Azteca accueille son 3e Mondial","1er Mondial a 48 equipes","1ere edition co-organisee par 3 pays","104 matchs contre 64 en 2022","Nouvelles regles IFAB effectives"],shareApp:'Partager',shareCopied:'Lien copie!',premiumBanner:'Passez PREMIUM - Pronostics + Stats + Sans pub',premiumBtn:'Debloquer',fixturesTitle:'CALENDRIER & RESULTATS',fixturesAll:'Tous les matchs',fixturesMy:'Mon equipe uniquement',noFixtures:'Aucun match trouve'},
  es:{appTitle:'Mundial 2026',appSub:'EE.UU. - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Pronosticos','Quiz','Jugadores','Sondeos','Sim'],countdown:'Cuenta regresiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitriones','Equipos','Partidos','Duracion'],keyVals:['3 naciones','48 equipos','104 partidos','11 jun-19 jul'],format:'Formato del torneo',formatLines:['12 grupos de 4 equipos','1 + 2 + 8 mejores 3eros = 32 equipos','Ronda de 32 > 16avos > QF > SF > Final','Apertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nueva York'],groupsTitle:'48 EQUIPOS - 12 GRUPOS',hostLabel:'Anfitri',groupLabel:'Grupo',myTeamLabel:'Mi Equipo',pickTeam:'Elegir mi equipo',pronoSub:'Quien llegara a la final?',pronoWinner:'Campeon del Mundo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalistas',pronoSave:'Guardar',pronoSaved:'Guardado!',pronoReset:'Reiniciar',pronoChoose:'Elegir...',pronoMyPick:'Mi eleccion',quizSub:'Pon a prueba tus conocimientos!',quizScore:'Puntuacion',quizNext:'Siguiente',quizFinish:'Ver resultado',quizRestart:'Jugar de nuevo',quizPerfect:'Perfecto! Eres un experto!',quizGood:'Muy bien!',quizAvg:'Nada mal!',quizBad:'Sigue estudiando!',starsSub:'Jugadores',pollTitle:'Sondeos',pollTotal:'votos',didYouKnow:'Sabias que?',facts:['Italia se pierde el Mundial 2026 por 2a vez','El Azteca acoge su 3er Mundial','El primer Mundial con 48 equipos','Primera edicion organizada por 3 paises','104 partidos frente a 64 en 2022','Nuevas reglas del IFAB en vigor'],shareApp:'Compartir',shareCopied:'Enlace copiado!',premiumBanner:'Hazte PREMIUM - Pronosticos + Estadisticas + Sin anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO Y RESULTADOS',fixturesAll:'Todos los partidos',fixturesMy:'Solo mi equipo',noFixtures:'No se encontraron partidos'},
  pt:{appTitle:'Mundial 2026',appSub:'EUA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Palpites','Quiz','Jogadores','Enquetes','Sim'],countdown:'Contagem regressiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitrioes','Selecoes','Jogos','Duracao'],keyVals:['3 nacoes','48 selecoes','104 jogos','11 jun-19 jul'],format:'Formato do torneio',formatLines:['12 grupos de 4 selecoes','1 + 2 + 8 melhores 3eiros = 32 equipes','Rodada de 32 > 16 > QF > SF > Final','Abertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nova York'],groupsTitle:'48 SELECOES - 12 GRUPOS',hostLabel:'Anfitriao',groupLabel:'Grupo',myTeamLabel:'Meu Time',pickTeam:'Escolher meu time',pronoSub:'Quem vai chegar a final?',pronoWinner:'Campeao do Mundo 2026',pronoFinal:'Vice-campeao',pronoSemi:'Semifinalistas',pronoSave:'Salvar',pronoSaved:'Salvo!',pronoReset:'Reiniciar',pronoChoose:'Escolher...',pronoMyPick:'Minha escolha',quizSub:'Teste seus conhecimentos!',quizScore:'Pontuacao',quizNext:'Proxima',quizFinish:'Ver resultado',quizRestart:'Jogar novamente',quizPerfect:'Perfeito! Voce e um expert!',quizGood:'Muito bem!',quizAvg:'Nada mal!',quizBad:'Continue estudando!',starsSub:'Jogadores',pollTitle:'Enquetes',pollTotal:'votos',didYouKnow:'Voce sabia?',facts:['A Italia perde a Copa 2026 pela 2a vez','O Azteca sedia sua 3a Copa','Primeira Copa com 48 selecoes','Primeira edicao organizada por 3 paises','104 jogos contra 64 em 2022','Novas regras do IFAB em vigor'],shareApp:'Compartilhar',shareCopied:'Link copiado!',premiumBanner:'Seja PREMIUM - Palpites + Estatisticas + Sem anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO E RESULTADOS',fixturesAll:'Todos os jogos',fixturesMy:'Apenas meu time',noFixtures:'Nenhum jogo encontrado'},
  it:{appTitle:'Mondiale 2026',appSub:'USA - CANADA - MESSICO',nav:['Home','Gruppi','Calendario','Pronostici','Quiz','Giocatori','Sondaggi','Sim'],countdown:'Conto alla rovescia',timeUnits:['Giorni','Ore','Min','Sec'],keyInfo:['Paesi ospitanti','Squadre','Partite','Durata'],keyVals:['3 nazioni','48 squadre','104 partite','11 giu-19 lug'],format:'Formato del torneo',formatLines:['12 gironi da 4 squadre','1a + 2a + 8 migliori 3e = 32 squadre','Fase a 32 > 16 > QF > SF > Finale','Apertura: Estadio Azteca, Messico','Finale: MetLife Stadium, New York'],groupsTitle:'48 SQUADRE - 12 GIRONI',hostLabel:'Sede',groupLabel:'Girone',myTeamLabel:'La Mia Squadra',pickTeam:'Scegli la tua squadra',pronoSub:'Chi arrivera in finale?',pronoWinner:'Campione del Mondo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalisti',pronoSave:'Salva',pronoSaved:'Salvato!',pronoReset:'Azzera',pronoChoose:'Scegli...',pronoMyPick:'La mia scelta',quizSub:'Metti alla prova le tue conoscenze!',quizScore:'Punteggio',quizNext:'Domanda successiva',quizFinish:'Vedi risultato',quizRestart:'Gioca ancora',quizPerfect:'Perfetto! Sei un esperto!',quizGood:'Molto bene!',quizAvg:'Niente male!',quizBad:'Continua a studiare!',starsSub:'Giocatori',pollTitle:'Sondaggi',pollTotal:'voti',didYouKnow:'Lo sapevi?',facts:["L Italia non e al Mondiale 2026 per la 2a volta","L Azteca ospita il suo 3o Mondiale","Primo Mondiale con 48 squadre","Prima edizione co-organizzata da 3 paesi","104 partite contro 64 nel 2022","Nuove regole IFAB in vigore"],shareApp:'Condividi',shareCopied:'Link copiato!',premiumBanner:'Diventa PREMIUM - Pronostici + Statistiche + Senza pub',premiumBtn:'Sblocca',fixturesTitle:'CALENDARIO E RISULTATI',fixturesAll:'Tutte le partite',fixturesMy:'Solo la mia squadra',noFixtures:'Nessuna partita trovata'},
  de:{appTitle:'WM 2026',appSub:'USA - KANADA - MEXIKO',nav:['Start','Gruppen','Spielplan','Tipps','Quiz','Spieler','Umfragen','Sim'],countdown:'Countdown',timeUnits:['Tage','Stunden','Min','Sek'],keyInfo:['Gastgeberlaender','Teams','Spiele','Dauer'],keyVals:['3 Nationen','48 Teams','104 Spiele','11. Jun-19. Jul'],format:'Turnierformat',formatLines:['12 Gruppen mit je 4 Teams','1. + 2. + 8 beste 3. = 32 Teams','Runde der 32 > 16 > VF > HF > Finale','Eroeffnung: Estadio Azteca, Mexiko','Finale: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GRUPPEN',hostLabel:'Gastgeber',groupLabel:'Gruppe',myTeamLabel:'Mein Team',pickTeam:'Mein Team auswaehlen',pronoSub:'Wer kommt ins Finale?',pronoWinner:'Weltmeister 2026',pronoFinal:'Finalist',pronoSemi:'Halbfinalisten',pronoSave:'Speichern',pronoSaved:'Gespeichert!',pronoReset:'Zuruecksetzen',pronoChoose:'Auswaehlen...',pronoMyPick:'Meine Wahl',quizSub:'Teste dein Wissen!',quizScore:'Punkte',quizNext:'Naechste Frage',quizFinish:'Ergebnis sehen',quizRestart:'Nochmal spielen',quizPerfect:'Perfekt! Du bist ein Experte!',quizGood:'Sehr gut!',quizAvg:'Nicht schlecht!',quizBad:'Weiter lernen!',starsSub:'Spieler',pollTitle:'Umfragen',pollTotal:'Stimmen',didYouKnow:'Wusstest du?',facts:['Italien verpasst die WM 2026 zum 2. Mal','Das Azteca beherbergt seine 3. WM','Erste WM mit 48 Teams','Erste WM von 3 Laendern gemeinsam ausgerichtet','104 Spiele gegen 64 in 2022','Neue IFAB-Regeln in Kraft'],shareApp:'Teilen',shareCopied:'Link kopiert!',premiumBanner:'PREMIUM werden - Tipps + Statistiken + Werbefrei',premiumBtn:'Freischalten',fixturesTitle:'SPIELPLAN & ERGEBNISSE',fixturesAll:'Alle Spiele',fixturesMy:'Nur mein Team',noFixtures:'Keine Spiele gefunden'}
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
  en:[
    {id:'p1',q:'Who will be World Champion 2026?',opts:['England','France','Spain','Brazil','Argentina','Germany','Portugal'],votes:[1580,1240,980,1100,1420,760,890]},
    {id:'p2',q:'Who will be the best player?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[2100,1300,980,1150,760,620,540]},
    {id:'p3',q:'Will ENGLAND reach the Final?',opts:['Yes champion','Yes finalist','Semi-final','Group stage'],votes:[1200,800,600,150]},
    {id:'p4',q:'Who will top-score in 2026?',opts:['Kane','Mbappe','Haaland','Vinicius','Ronaldo'],votes:[980,1400,1100,760,540]}
  ],
  fr:[
    {id:'p1',q:'Qui sera champion du Monde 2026?',opts:['France','Argentine','Espagne','Bresil','Angleterre','Allemagne','Portugal'],votes:[1580,1420,980,1100,760,680,890]},
    {id:'p2',q:'Quel sera le meilleur joueur?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[2400,1300,760,890,820,620,540]},
    {id:'p3',q:'La FRANCE ira-t-elle en finale?',opts:['Oui championne','Oui finaliste','Demi-finale','Phase de groupes'],votes:[1600,900,500,120]},
    {id:'p4',q:'Qui sera meilleur buteur 2026?',opts:['Mbappe','Kane','Haaland','Vinicius','Ronaldo'],votes:[1800,890,1100,760,540]}
  ],
  es:[
    {id:'p1',q:'Quien sera campeon del Mundo 2026?',opts:['Espana','Argentina','Francia','Brasil','Inglaterra','Alemania','Portugal'],votes:[1800,1420,980,1100,760,680,890]},
    {id:'p2',q:'Quien sera el mejor jugador?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1300,760,890,820,1200,980]},
    {id:'p3',q:'Llegara ESPANA a la Final?',opts:['Si campeona','Si finalista','Semifinal','Fase de grupos'],votes:[1600,900,500,120]},
    {id:'p4',q:'Quien sera el Pichichi del Mundial?',opts:['Yamal','Mbappe','Haaland','Vinicius','Kane'],votes:[980,1400,1100,760,890]}
  ],
  pt:[
    {id:'p1',q:'Quem sera campeao do Mundo 2026?',opts:['Portugal','Argentina','Franca','Brasil','Espanha','Alemanha','Inglaterra'],votes:[1800,1420,980,1350,880,680,760]},
    {id:'p2',q:'Quem sera o melhor jogador?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Ronaldo','Rodri'],votes:[1800,1300,760,890,820,1100,620]},
    {id:'p3',q:'PORTUGAL chegara a Final?',opts:['Sim campeao','Sim finalista','Semifinal','Fase de grupos'],votes:[1600,900,500,120]},
    {id:'p4',q:'Quem sera artilheiro da Copa?',opts:['Ronaldo','Mbappe','Haaland','Vinicius','Kane'],votes:[1200,1400,1100,760,890]}
  ],
  it:[
    {id:'p1',q:'Chi sara campione del Mondo 2026?',opts:['Francia','Argentina','Spagna','Brasile','Inghilterra','Germania','Portogallo'],votes:[1240,1420,980,1100,760,680,890]},
    {id:'p2',q:'Chi sara il miglior giocatore?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1300,760,890,820,620,540]},
    {id:'p3',q:'L ITALIA tornera al Mondiale 2030?',opts:['Certamente','Probabilmente','Forse','No'],votes:[1200,800,600,150]},
    {id:'p4',q:'Chi sara capocannoniere 2026?',opts:['Mbappe','Haaland','Kane','Vinicius','Ronaldo'],votes:[1400,1100,890,760,540]}
  ],
  de:[
    {id:'p1',q:'Wer wird Weltmeister 2026?',opts:['Deutschland','Argentinien','Spanien','Brasilien','England','Frankreich','Portugal'],votes:[1800,1420,980,1100,760,1240,890]},
    {id:'p2',q:'Wer wird der beste Spieler?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1500,760,890,820,620,540]},
    {id:'p3',q:'Kommt DEUTSCHLAND ins Finale?',opts:['Ja Weltmeister','Ja Finalist','Halbfinale','Gruppenphase'],votes:[1600,900,500,120]},
    {id:'p4',q:'Wer wird Torschutzkoenig 2026?',opts:['Haaland','Mbappe','Kane','Vinicius','Muller'],votes:[1600,1400,890,760,540]}
  ]
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


var STARS = [
  {name:'Kylian Mbappe',flag:'🇫🇷',club:'Real Madrid',pos:'FW',age:27,stat:'46 intl goals',rating:96,group:'I'},
  {name:'Erling Haaland',flag:'🇳🇴',club:'Man. City',pos:'FW',age:25,stat:'44 intl goals',rating:95,group:'I'},
  {name:'Vinicius Jr.',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:25,stat:'Ballon dOr nominee 2024',rating:94,group:'C'},
  {name:'Pedri',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:23,stat:'Euro 2024 champion',rating:93,group:'H'},
  {name:'Jude Bellingham',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'MF',age:22,stat:'Best player Euro 2024',rating:93,group:'L'},
  {name:'Harry Kane',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Bayern Munich',pos:'FW',age:32,stat:'England all-time top scorer',rating:92,group:'L'},
  {name:'Rodri',flag:'🇪🇸',club:'Man. City',pos:'MF',age:29,stat:'Ballon dOr 2024',rating:92,group:'H'},
  {name:'Lamine Yamal',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:18,stat:'Euro 2024 champion',rating:91,group:'H'},
  {name:'Cristiano Ronaldo',flag:'🇵🇹',club:'Al Nassr',pos:'FW',age:41,stat:'915 career goals',rating:90,group:'K'},
  {name:'Ruben Dias',flag:'🇵🇹',club:'Man. City',pos:'DF',age:28,stat:'Best defender PL 2021',rating:89,group:'K'},
  {name:'Bukayo Saka',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'FW',age:24,stat:'PFA Young Player 2024',rating:89,group:'L'},
  {name:'Gavi',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:21,stat:'Euro 2024 champion',rating:88,group:'H'},
  {name:'Phil Foden',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Man. City',pos:'MF',age:26,stat:'PFA Player of Year 2024',rating:88,group:'L'},
  {name:'Federico Valverde',flag:'🇺🇾',club:'Real Madrid',pos:'MF',age:27,stat:'Copa America 2024',rating:88,group:'H'},
  {name:'Lionel Messi',flag:'🇦🇷',club:'Inter Miami',pos:'FW',age:39,stat:'8x Ballon dOr winner',rating:88,group:'J'},
  {name:'Achraf Hakimi',flag:'🇲🇦',club:'PSG',pos:'DF',age:27,stat:'African Player of Year 2022',rating:87,group:'C'},
  {name:'Marcus Thuram',flag:'🇫🇷',club:'Inter Milan',pos:'FW',age:27,stat:'Serie A champion 2024',rating:87,group:'I'},
  {name:'Sadio Mane',flag:'🇸🇳',club:'Al Nassr',pos:'FW',age:33,stat:'AFCON winner 2022',rating:85,group:'I'},
  {name:'Raphinha',flag:'🇧🇷',club:'FC Barcelona',pos:'FW',age:29,stat:'Champions League 2025',rating:85,group:'C'}
];

// - FIFA CARD STYLE - World Cup 2026 -
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


// - TEAM STRENGTHS FOR SIMULATOR -

// - TEAM NAME TRANSLATIONS -
var TEAM_NAMES = {
  en:{
    'South Africa':'South Africa','Bosnia':'Bosnia & Herzegovina',
    'South Korea':'South Korea','Czechia':'Czech Republic',
    'Ivory Coast':'Ivory Coast','DR Congo':'DR Congo',
    'Saudi Arabia':'Saudi Arabia','Cape Verde':'Cape Verde',
    'New Zealand':'New Zealand','Scotland':'Scotland',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Croatia',
    'Norway':'Norway','Senegal':'Senegal','Algeria':'Algeria',
    'Austria':'Austria','Jordan':'Jordan','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','Morocco':'Morocco','Haiti':'Haiti',
    'Paraguay':'Paraguay','Australia':'Australia','Turkey':'Turkey',
    'Ecuador':'Ecuador','Curacao':'Curacao','Tunisia':'Tunisia',
    'Japan':'Japan','Sweden':'Sweden','Belgium':'Belgium',
    'Egypt':'Egypt','Iran':'Iran','Uruguay':'Uruguay',
    'Argentina':'Argentina','Portugal':'Portugal','England':'England',
    'France':'France','Germany':'Germany','Spain':'Spain',
    'Brazil':'Brazil','Netherlands':'Netherlands','Mexico':'Mexico',
    'USA':'USA','Canada':'Canada','Qatar':'Qatar',
    'Switzerland':'Switzerland','China PR':'China PR'
  },
  fr:{
    'South Africa':'Afrique du Sud','Bosnia':'Bosnie-Herzegovine',
    'South Korea':'Coree du Sud','Czechia':'Republique Tcheque',
    'Ivory Coast':'Cote d Ivoire','DR Congo':'RD Congo',
    'Saudi Arabia':'Arabie Saoudite','Cape Verde':'Cap-Vert',
    'New Zealand':'Nouvelle-Zelande','Scotland':'Ecosse',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Croatie',
    'Norway':'Norvege','Senegal':'Senegal','Algeria':'Algerie',
    'Austria':'Autriche','Jordan':'Jordanie','Uzbekistan':'Ouzbekistan',
    'Colombia':'Colombie','Morocco':'Maroc','Haiti':'Haiti',
    'Paraguay':'Paraguay','Australia':'Australie','Turkey':'Turquie',
    'Ecuador':'Equateur','Curacao':'Curacao','Tunisia':'Tunisie',
    'Japan':'Japon','Sweden':'Suede','Belgium':'Belgique',
    'Egypt':'Egypte','Iran':'Iran','Uruguay':'Uruguay',
    'Argentina':'Argentine','Portugal':'Portugal','England':'Angleterre',
    'France':'France','Germany':'Allemagne','Spain':'Espagne',
    'Brazil':'Bresil','Netherlands':'Pays-Bas','Mexico':'Mexique',
    'USA':'Etats-Unis','Canada':'Canada','Qatar':'Qatar',
    'Switzerland':'Suisse','China PR':'Chine'
  },
  es:{
    'South Africa':'Sudafrica','Bosnia':'Bosnia y Herzegovina',
    'South Korea':'Corea del Sur','Czechia':'Republica Checa',
    'Ivory Coast':'Costa de Marfil','DR Congo':'RD Congo',
    'Saudi Arabia':'Arabia Saudita','Cape Verde':'Cabo Verde',
    'New Zealand':'Nueva Zelanda','Scotland':'Escocia',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Croacia',
    'Norway':'Noruega','Senegal':'Senegal','Algeria':'Argelia',
    'Austria':'Austria','Jordan':'Jordania','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','Morocco':'Marruecos','Haiti':'Haiti',
    'Paraguay':'Paraguay','Australia':'Australia','Turkey':'Turquia',
    'Ecuador':'Ecuador','Curacao':'Curacao','Tunisia':'Tunez',
    'Japan':'Japon','Sweden':'Suecia','Belgium':'Belgica',
    'Egypt':'Egipto','Iran':'Iran','Uruguay':'Uruguay',
    'Argentina':'Argentina','Portugal':'Portugal','England':'Inglaterra',
    'France':'Francia','Germany':'Alemania','Spain':'Espana',
    'Brazil':'Brasil','Netherlands':'Paises Bajos','Mexico':'Mexico',
    'USA':'EE.UU.','Canada':'Canada','Qatar':'Qatar',
    'Switzerland':'Suiza','China PR':'China'
  },
  pt:{
    'South Africa':'Africa do Sul','Bosnia':'Bosnia e Herzegovina',
    'South Korea':'Coreia do Sul','Czechia':'Republica Tcheca',
    'Ivory Coast':'Costa do Marfim','DR Congo':'RD Congo',
    'Saudi Arabia':'Arabia Saudita','Cape Verde':'Cabo Verde',
    'New Zealand':'Nova Zelandia','Scotland':'Escocia',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Croacia',
    'Norway':'Noruega','Senegal':'Senegal','Algeria':'Algeria',
    'Austria':'Austria','Jordan':'Jordania','Uzbekistan':'Uzbequistao',
    'Colombia':'Colombia','Morocco':'Marrocos','Haiti':'Haiti',
    'Paraguay':'Paraguai','Australia':'Australia','Turkey':'Turquia',
    'Ecuador':'Equador','Curacao':'Curacao','Tunisia':'Tunisia',
    'Japan':'Japao','Sweden':'Suecia','Belgium':'Belgica',
    'Egypt':'Egito','Iran':'Ira','Uruguay':'Uruguai',
    'Argentina':'Argentina','Portugal':'Portugal','England':'Inglaterra',
    'France':'Franca','Germany':'Alemanha','Spain':'Espanha',
    'Brazil':'Brasil','Netherlands':'Paises Baixos','Mexico':'Mexico',
    'USA':'EUA','Canada':'Canada','Qatar':'Qatar',
    'Switzerland':'Suica','China PR':'China'
  },
  it:{
    'South Africa':'Sudafrica','Bosnia':'Bosnia ed Erzegovina',
    'South Korea':'Corea del Sud','Czechia':'Repubblica Ceca',
    'Ivory Coast':'Costa d Avorio','DR Congo':'RD Congo',
    'Saudi Arabia':'Arabia Saudita','Cape Verde':'Capo Verde',
    'New Zealand':'Nuova Zelanda','Scotland':'Scozia',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Croazia',
    'Norway':'Norvegia','Senegal':'Senegal','Algeria':'Algeria',
    'Austria':'Austria','Jordan':'Giordania','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','Morocco':'Marocco','Haiti':'Haiti',
    'Paraguay':'Paraguay','Australia':'Australia','Turkey':'Turchia',
    'Ecuador':'Ecuador','Curacao':'Curacao','Tunisia':'Tunisia',
    'Japan':'Giappone','Sweden':'Svezia','Belgium':'Belgio',
    'Egypt':'Egitto','Iran':'Iran','Uruguay':'Uruguay',
    'Argentina':'Argentina','Portugal':'Portogallo','England':'Inghilterra',
    'France':'Francia','Germany':'Germania','Spain':'Spagna',
    'Brazil':'Brasile','Netherlands':'Paesi Bassi','Mexico':'Messico',
    'USA':'USA','Canada':'Canada','Qatar':'Qatar',
    'Switzerland':'Svizzera','China PR':'Cina'
  },
  de:{
    'South Africa':'Sudafrika','Bosnia':'Bosnien u. Herzegowina',
    'South Korea':'Sudkorea','Czechia':'Tschechische Republik',
    'Ivory Coast':'Elfenbeinkuste','DR Congo':'DR Kongo',
    'Saudi Arabia':'Saudi-Arabien','Cape Verde':'Kap Verde',
    'New Zealand':'Neuseeland','Scotland':'Schottland',
    'Panama':'Panama','Ghana':'Ghana','Croatia':'Kroatien',
    'Norway':'Norwegen','Senegal':'Senegal','Algeria':'Algerien',
    'Austria':'Osterreich','Jordan':'Jordanien','Uzbekistan':'Usbekistan',
    'Colombia':'Kolumbien','Morocco':'Marokko','Haiti':'Haiti',
    'Paraguay':'Paraguay','Australia':'Australien','Turkey':'Turkei',
    'Ecuador':'Ecuador','Curacao':'Curacao','Tunisia':'Tunesien',
    'Japan':'Japan','Sweden':'Schweden','Belgium':'Belgien',
    'Egypt':'Agypten','Iran':'Iran','Uruguay':'Uruguay',
    'Argentina':'Argentinien','Portugal':'Portugal','England':'England',
    'France':'Frankreich','Germany':'Deutschland','Spain':'Spanien',
    'Brazil':'Brasilien','Netherlands':'Niederlande','Mexico':'Mexiko',
    'USA':'USA','Canada':'Kanada','Qatar':'Katar',
    'Switzerland':'Schweiz','China PR':'China'
  }
};

// Helper to translate team name
function tn(team, lang){
  if(!team)return team;
  return (TEAM_NAMES[lang]&&TEAM_NAMES[lang][team])||team;
}

// Phase labels per language
var PHASE_LABELS = {
  en:{group:'Group',R32:'Round of 32',R16:'Round of 16',QF:'Quarter-Final',SF:'Semi-Final','3P':'3rd Place',FIN:'Final'},
  fr:{group:'Groupe',R32:'Tour des 32',R16:'Huitiemes',QF:'Quart de Finale',SF:'Demi-Finale','3P':'3eme Place',FIN:'Finale'},
  es:{group:'Grupo',R32:'Ronda de 32',R16:'Octavos',QF:'Cuarto de Final',SF:'Semifinal','3P':'3er Puesto',FIN:'Final'},
  pt:{group:'Grupo',R32:'Rodada de 32',R16:'Oitavas',QF:'Quarta de Final',SF:'Semifinal','3P':'3o Lugar',FIN:'Final'},
  it:{group:'Girone',R32:'Turno dei 32',R16:'Ottavi',QF:'Quarto di Finale',SF:'Semifinale','3P':'3o Posto',FIN:'Finale'},
  de:{group:'Gruppe',R32:'Runde der 32',R16:'Achtelfinale',QF:'Viertelfinale',SF:'Halbfinale','3P':'Platz 3',FIN:'Finale'}
};

function phaseLabel(phase, lang){
  return (PHASE_LABELS[lang]&&PHASE_LABELS[lang][phase])||phase;
}


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

// - TV CHANNELS PER COUNTRY -
var TV_CHANNELS = {
  en:['ITV1','BBC One','ITV4','BBC iPlayer'],
  fr:['TF1','M6','beIN Sports','France 2'],
  es:['TVE La 1','Telecinco','DAZN','Gol'],
  pt:['RTP1','Sport TV','SIC','Eleven Sports'],
  it:['RAI 1','Mediaset','Sky Sport','DAZN'],
  de:['ARD','ZDF','MagentaTV','RTL']
};

// Match-specific TV - which channel shows which match per country
var MATCH_TV = {
  'France':   {en:'ITV1',    fr:'TF1',    es:'TVE La 1', pt:'Sport TV', it:'RAI 1',    de:'ZDF'},
  'England':  {en:'ITV1',    fr:'beIN',   es:'DAZN',     pt:'Sport TV', it:'Sky Sport', de:'MagentaTV'},
  'Spain':    {en:'BBC One', fr:'M6',     es:'TVE La 1', pt:'RTP1',     it:'RAI 1',    de:'ARD'},
  'Germany':  {en:'BBC One', fr:'M6',     es:'TVE La 1', pt:'Sport TV', it:'DAZN',     de:'ARD'},
  'Portugal': {en:'ITV1',    fr:'beIN',   es:'DAZN',     pt:'RTP1',     it:'Sky Sport', de:'MagentaTV'},
  'Brazil':   {en:'BBC One', fr:'TF1',    es:'Gol',      pt:'SIC',      it:'RAI 1',    de:'ZDF'},
  'Argentina':{en:'ITV1',    fr:'TF1',    es:'TVE La 1', pt:'Sport TV', it:'RAI 1',    de:'ARD'},
  'Mexico':   {en:'BBC One', fr:'beIN',   es:'Telecinco', pt:'Eleven',  it:'DAZN',     de:'MagentaTV'},
  'USA':      {en:'ITV4',    fr:'M6',     es:'DAZN',     pt:'Sport TV', it:'Sky Sport', de:'ZDF'},
  'default':  {en:'ITV/BBC', fr:'TF1/M6', es:'TVE/DAZN', pt:'RTP/Sport TV', it:'RAI/Sky', de:'ARD/ZDF'}
};

function getTV(team, lang){
  var ch=MATCH_TV[team]||MATCH_TV['default'];
  return ch[lang]||ch['en']||'';
}

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

  var sA=useState('');var manTeam1=sA[0];var setManTeam1=sA[1];
  var sB=useState('');var manTeam2=sB[0];var setManTeam2=sB[1];
  var sC=useState(null);var manResult=sC[0];var setManResult=sC[1];
  var s27=useState(null);var tournament=s27[0];var setTournament=s27[1];
  // Interactive tournament state
  var s30=useState('idle');var iPhase=s30[0];var setIPhase=s30[1]; // idle|groups|r32|r16|qf|sf|final|done
  var s31=useState({});var iGroupStandings=s31[0];var setIGroupStandings=s31[1];
  var s32=useState([]);var iMatches=s32[0];var setIMatches=s32[1];
  var s33=useState(null);var iChampion=s33[0];var setIChampion=s33[1];
  var s34=useState('A');var iSelGroup=s34[0];var setISelGroup=s34[1];
  var s28=useState(false);var tournLoading=s28[0];var setTournLoading=s28[1];
  var s29=useState('bracket');var simView=s29[0];var setSimView=s29[1];

  var t=T[lang];
  var defaultTeam=MY_TEAM[lang];
  var activeTeam=myTeam||defaultTeam;
  var filteredFixtures=fixtureMyOnly?FIXTURES.filter(function(f){return f.home===activeTeam.team||f.away===activeTeam.team;}):FIXTURES;
  var questions=QUIZ[lang];
  var polls=POLLS[lang];
  var affiliates=AFFILIATES[lang];

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

  function formatFullDate(dateStr,langCode){
    if(!dateStr)return '';
    var dt=new Date(dateStr+'T12:00:00');
    var days={
      en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      fr:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
      es:['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
      pt:['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
      it:['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
      de:['So','Mo','Di','Mi','Do','Fr','Sa']
    };
    var months={
      en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      fr:['Jan','Fev','Mar','Avr','Mai','Juin','Juil','Aout','Sep','Oct','Nov','Dec'],
      es:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      pt:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
      it:['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
      de:['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']
    };
    var d=days[langCode]||days['en'];
    var m=months[langCode]||months['en'];
    return d[dt.getDay()]+' '+dt.getDate()+' '+m[dt.getMonth()];
  }

  // - MANUAL SIMULATOR -
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

  // - INTERACTIVE TOURNAMENT -
  function initInteractive(){
    // Build all group matches
    var matches=[];
    Object.entries(GROUPS).forEach(function(entry){
      var g=entry[0];var data=entry[1];var teams=data.teams;
      for(var i=0;i<teams.length;i++){
        for(var j=i+1;j<teams.length;j++){
          matches.push({id:g+i+j,phase:'group',group:g,home:teams[i],away:teams[j],goalsHome:null,goalsAway:null,played:false});
        }
      }
    });
    setIMatches(matches);
    setIGroupStandings({});
    setIPhase('groups');
    setIChampion(null);
    setISelGroup('A');
  }

  function setMatchScore(matchId, gh, ga){
    setIMatches(function(prev){
      var updated=prev.map(function(m){
        if(m.id!==matchId)return m;
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
      // Recalculate group standings from played matches
      var standings={};
      Object.keys(GROUPS).forEach(function(g){
        var pts={};var gd={};var gf={};
        GROUPS[g].teams.forEach(function(t){pts[t]=0;gd[t]=0;gf[t]=0;});
        updated.filter(function(m){return m.group===g&&m.played;}).forEach(function(m){
          var diff=m.goalsHome-m.goalsAway;
          gf[m.home]+=m.goalsHome;gf[m.away]+=m.goalsAway;
          gd[m.home]+=diff;gd[m.away]-=diff;
          if(diff>0){pts[m.home]+=3;}
          else if(diff<0){pts[m.away]+=3;}
          else{pts[m.home]+=1;pts[m.away]+=1;}
        });
        var sorted=GROUPS[g].teams.slice().sort(function(a,b){
          if(pts[b]!==pts[a])return pts[b]-pts[a];
          if(gd[b]!==gd[a])return gd[b]-gd[a];
          return gf[b]-gf[a];
        });
        standings[g]={teams:sorted,pts:pts,gd:gd,gf:gf};
      });
      setIGroupStandings(standings);
      return updated;
    });
  }

  function quickSimGroup(g){
    setIMatches(function(prev){
      var updated=prev.map(function(m){
        if(m.group!==g||m.played)return m;
        var s1=getStrength(m.home);var s2=getStrength(m.away);
        function rg(s){var r=Math.random();if(r<0.18)return 0;if(r<0.42)return 1;if(r<0.65)return 2;if(r<0.82)return 3;if(r<0.93)return 4;return 5;}
        var gh=rg(s1);var ga=rg(s2);
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
      // Recalc standings
      var standings={};
      Object.keys(GROUPS).forEach(function(g2){
        var pts={};var gd={};var gf={};
        GROUPS[g2].teams.forEach(function(t){pts[t]=0;gd[t]=0;gf[t]=0;});
        updated.filter(function(m){return m.group===g2&&m.played;}).forEach(function(m){
          var diff=m.goalsHome-m.goalsAway;
          gf[m.home]+=m.goalsHome;gf[m.away]+=m.goalsAway;
          gd[m.home]+=diff;gd[m.away]-=diff;
          if(diff>0)pts[m.home]+=3;
          else if(diff<0)pts[m.away]+=3;
          else{pts[m.home]+=1;pts[m.away]+=1;}
        });
        var sorted=GROUPS[g2].teams.slice().sort(function(a,b){
          if(pts[b]!==pts[a])return pts[b]-pts[a];
          return gd[b]-gd[a];
        });
        standings[g2]={teams:sorted,pts:pts,gd:gd,gf:gf};
      });
      setIGroupStandings(standings);
      return updated;
    });
  }

  function allGroupsComplete(matches){
    return Object.keys(GROUPS).every(function(g){
      return matches.filter(function(m){return m.group===g;}).every(function(m){return m.played;});
    });
  }

  function buildKnockout(standings, phase){
    if(phase!=='r32')return [];
    // - OFFICIAL FIFA 2026 ROUND OF 32 BRACKET -
    // Source: ESPN / FIFA official schedule
    // Best 8 third-place teams - ranked by pts, gd, gf
    var allThirds=Object.entries(standings).map(function(e){
      var g=e[0];var s=e[1];var t=s.teams[2];
      return {team:t,group:g,pts:s.pts[t]||0,gd:s.gd[t]||0,gf:s.gf[t]||0};
    }).sort(function(a,b){
      if(b.pts!==a.pts)return b.pts-a.pts;
      if(b.gd!==a.gd)return b.gd-a.gd;
      return b.gf-a.gf;
    });
    var best8thirds=allThirds.slice(0,8).map(function(x){return x.team;});
    function w(g){return standings[g]?standings[g].teams[0]:'TBD';}
    function ru(g){return standings[g]?standings[g].teams[1]:'TBD';}
    function t3(i){return best8thirds[i]||'TBD';}

    // Official R32 matchups per FIFA/ESPN:
    var pairs=[
      // Match 73: 2nd A vs 2nd B
      {home:ru('A'),away:ru('B'),label:'2nd A vs 2nd B'},
      // Match 74: 1st E vs Best 3rd (A/B/C/D/F)
      {home:w('E'),away:t3(0),label:'1st E vs Best 3rd'},
      // Match 75: 1st F vs 2nd C
      {home:w('F'),away:ru('C'),label:'1st F vs 2nd C'},
      // Match 76: 1st C vs 2nd F
      {home:w('C'),away:ru('F'),label:'1st C vs 2nd F'},
      // Match 77: 1st I vs Best 3rd (C/D/F/G/H)
      {home:w('I'),away:t3(1),label:'1st I vs Best 3rd'},
      // Match 78: 2nd E vs 2nd I
      {home:ru('E'),away:ru('I'),label:'2nd E vs 2nd I'},
      // Match 79: 1st A vs Best 3rd (C/E/F/H/I)
      {home:w('A'),away:t3(2),label:'1st A vs Best 3rd'},
      // Match 80: 1st L vs Best 3rd (E/H/I/J/K)
      {home:w('L'),away:t3(3),label:'1st L vs Best 3rd'},
      // Match 81: 1st D vs Best 3rd (B/E/F/I/J)
      {home:w('D'),away:t3(4),label:'1st D vs Best 3rd'},
      // Match 82: 1st G vs Best 3rd (A/E/H/I/J)
      {home:w('G'),away:t3(5),label:'1st G vs Best 3rd'},
      // Match 83: 2nd K vs 2nd L
      {home:ru('K'),away:ru('L'),label:'2nd K vs 2nd L'},
      // Match 84: 1st H vs 2nd J
      {home:w('H'),away:ru('J'),label:'1st H vs 2nd J'},
      // Match 85: 1st B vs Best 3rd (E/F/G/I/J)
      {home:w('B'),away:t3(6),label:'1st B vs Best 3rd'},
      // Match 86: 1st J vs 2nd H
      {home:w('J'),away:ru('H'),label:'1st J vs 2nd H'},
      // Match 87: 1st K vs Best 3rd (D/E/I/J/L)
      {home:w('K'),away:t3(7),label:'1st K vs Best 3rd'},
      // Match 88: 2nd D vs 2nd G
      {home:ru('D'),away:ru('G'),label:'2nd D vs 2nd G'},
    ];
    return pairs.map(function(p,i){
      return {id:'r32_'+i,phase:'r32',home:p.home,away:p.away,label:p.label,played:false,goalsHome:null,goalsAway:null};
    });
  }

  function progressToNextPhase(currentMatches, nextPhase){
    var winners=currentMatches.filter(function(m){return m.played;}).map(function(m){
      if(m.goalsHome>m.goalsAway)return m.home;
      if(m.goalsAway>m.goalsHome)return m.away;
      // Draw - penalty shootout simulation
      return Math.random()>0.5?m.home:m.away;
    });
    var newMatches=[];
    for(var i=0;i<winners.length;i+=2){
      if(winners[i]&&winners[i+1]){
        newMatches.push({id:nextPhase+i,phase:nextPhase,home:winners[i],away:winners[i+1],played:false,goalsHome:null,goalsAway:null});
      }
    }
    return newMatches;
  }

  function advancePhase(){
    if(iPhase==='groups'){
      // Build R32 from group standings
      var r32=buildKnockout(iGroupStandings,'r32');
      setIMatches(r32);
      setIPhase('r32');
    } else {
      var phases={'r32':'r16','r16':'qf','qf':'sf','sf':'final'};
      var next=phases[iPhase];
      if(next==='final'){
        var sf=iMatches.filter(function(m){return m.phase==='sf';});
        var finalists=sf.map(function(m){return m.goalsHome>=m.goalsAway?m.home:m.away;});
        if(finalists.length>=2){
          setIMatches([{id:'final0',phase:'final',home:finalists[0],away:finalists[1],played:false,goalsHome:null,goalsAway:null}]);
          setIPhase('final');
        }
      } else if(next){
        var newM=progressToNextPhase(iMatches,next);
        setIMatches(newM);
        setIPhase(next);
      } else if(iPhase==='final'){
        var fin=iMatches[0];
        var champ=fin.goalsHome>=fin.goalsAway?fin.home:fin.away;
        setIChampion(champ);
        setIPhase('done');
      }
    }
  }

  function quickSimPhase(){
    setIMatches(function(prev){
      return prev.map(function(m){
        if(m.played)return m;
        var s1=getStrength(m.home);var s2=getStrength(m.away);
        function rg(){var r=Math.random();if(r<0.2)return 0;if(r<0.45)return 1;if(r<0.68)return 2;if(r<0.84)return 3;return r<0.93?4:5;}
        var gh=rg();var ga=rg();
        if(gh===ga){if(Math.random()<0.5)gh++;else ga++;}
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
    });
  }

  // - TOURNAMENT SIMULATOR -
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

  // - AI MATCH SIMULATOR -

  function formatDate(d){var dt=new Date(d+'T12:00:00');return dt.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});}

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

      // - HOME -
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
                tn(team,lang),grp&&e('span',{style:{fontSize:9,color:G,marginLeft:4}},'('+grp+')')
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
              e('span',{style:{fontSize:12,fontWeight:isMyTeam?'bold':'normal'}},tn(team,lang)),
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

      // - GROUPS -
      tab===1&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.groupsTitle),
        e('div',{style:{display:'flex',flexWrap:'wrap',gap:5,justifyContent:'center',marginBottom:15}},
          Object.keys(GROUPS).map(function(g){return e('button',{key:g,onClick:function(){setSelGroup(g);},style:{width:32,height:32,borderRadius:7,background:selGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:selGroup===g?'none':'1px solid rgba(212,175,55,0.24)',color:selGroup===g?'#0a0a1a':G,fontSize:12,fontWeight:'bold',cursor:'pointer'}},g);})
        ),
        e(Card,{style:{marginBottom:14,border:'1px solid '+G,padding:'12px 8px'}},
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,marginBottom:10,textAlign:'center',letterSpacing:1}},
            t.groupLabel,' ',selGroup,
            GROUPS[selGroup].host&&e('span',{style:{fontSize:9,color:'#6a86a0',marginLeft:8}},'(',t.hostLabel,': ',GROUPS[selGroup].hostName,')')
          ),
          // Table header
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 24px 24px 24px 24px 24px 24px 24px 28px',gap:1,alignItems:'center',padding:'4px 6px',marginBottom:4,borderBottom:'1px solid rgba(212,175,55,0.3)'}},
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold'}},'Team'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'MP'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'W'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'D'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'L'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GF'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GA'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GD'),
            e('div',{style:{fontSize:9,color:G,fontWeight:'bold',textAlign:'center'}},'Pts')
          ),
          // Team rows
          GROUPS[selGroup].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            var isQual=i<2;
            return e('div',{key:team,style:{display:'grid',gridTemplateColumns:'1fr 24px 24px 24px 24px 24px 24px 24px 28px',gap:1,alignItems:'center',padding:'6px 6px',background:isMyTeam?'rgba(212,175,55,0.14)':isQual?'rgba(40,100,40,0.12)':'rgba(255,255,255,0.03)',borderRadius:6,marginBottom:3,border:'1px solid '+(isMyTeam?G:isQual?'rgba(40,200,40,0.2)':'rgba(255,255,255,0.05)')}},
              e('div',{style:{display:'flex',alignItems:'center',gap:5}},
                e('div',{style:{width:16,height:16,borderRadius:3,background:isMyTeam?G:isQual?'rgba(40,200,40,0.5)':'rgba(212,175,55,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:'bold',color:isMyTeam?'#0a0a1a':isQual?'#fff':G,flexShrink:0}},i+1),
                e('div',{style:{fontSize:10,fontWeight:isMyTeam?'bold':'normal',color:isMyTeam?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},team,isMyTeam?' ⭐':'')
              ),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#90ee90',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#aaa',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#ff8888',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,textAlign:'center'}},'0')
            );
          }),
          // Legend
          e('div',{style:{display:'flex',gap:12,marginTop:8,paddingTop:6,borderTop:'1px solid rgba(212,175,55,0.1)'}},
            e('div',{style:{display:'flex',alignItems:'center',gap:4}},
              e('div',{style:{width:10,height:10,borderRadius:2,background:'rgba(40,200,40,0.5)'}}),
              e('span',{style:{fontSize:8,color:'#6a86a0'}},'Qualified')
            ),
            e('div',{style:{fontSize:8,color:'#6a86a0'}},'MP=Played W=Won D=Draw L=Lost GF/GA=Goals GD=Diff')
          )
        ),
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}},
          Object.entries(GROUPS).map(function(entry){var g=entry[0];var data=entry[1];var hasMyTeam=data.teams.indexOf(activeTeam.team)>=0;return e('div',{key:g,onClick:function(){setSelGroup(g);},style:{background:hasMyTeam?'rgba(212,175,55,0.12)':g===selGroup?'rgba(212,175,55,0.09)':'rgba(10,20,50,0.8)',border:'1px solid '+(hasMyTeam?G:g===selGroup?G:BD),borderRadius:10,padding:10,cursor:'pointer'}},e('div',{style:{fontSize:10,fontWeight:'bold',color:G,marginBottom:5}},t.groupLabel,' ',g,hasMyTeam&&' ⭐'),data.teams.map(function(team){return e('div',{key:team,style:{fontSize:9,color:team===activeTeam.team?G:'#90aabf',marginBottom:2,fontWeight:team===activeTeam.team?'bold':'normal'}},tn(team,lang));}));})
        )
      ),

      // - FIXTURES -
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
                e('div',{style:{fontSize:9,color:isMyMatch?G:'#6a86a0'}},formatDate(f.date),' ',f.time,' ET',f.group&&' - '+(['R32','R16','QF','SF','3P','FIN'].indexOf(f.group)>=0?phaseLabel(f.group,lang):t.groupLabel+' '+f.group)),
                isMyMatch&&e('span',{style:{fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 6px',borderRadius:6}},'⭐ '+t.myTeamLabel)
              ),
              e('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'}},
                e('div',{style:{flex:1,textAlign:'left',fontSize:13,fontWeight:f.home===activeTeam.team?'bold':'normal',color:f.home===activeTeam.team?G:'#eee8d5'}},tn(f.home,lang)),
                e('div',{style:{padding:'4px 12px',background:'rgba(212,175,55,0.15)',borderRadius:8,fontSize:12,fontWeight:'bold',color:G,margin:'0 8px'}},'VS'),
                e('div',{style:{flex:1,textAlign:'right',fontSize:13,fontWeight:f.away===activeTeam.team?'bold':'normal',color:f.away===activeTeam.team?G:'#eee8d5'}},tn(f.away,lang))
              ),
              f.stadium&&e('div',{style:{fontSize:9,color:'#5a7090',marginTop:6}},f.stadium,' - ',f.city)
            );
          })
        )
      ),

      // - PREDICTIONS -
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

      // - QUIZ -
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

      // - STARS with AVATARS -
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

      // - POLLS -
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

      // - INTERACTIVE TOURNAMENT TAB -
      tab===7&&e('div',null,
        e('div',{style:{fontSize:12,color:G,fontWeight:'bold',textAlign:'center',marginBottom:12,letterSpacing:2}},'🏆 WORLD CUP 2026 - INTERACTIVE TOURNAMENT'),

        // START screen
        iPhase==='idle'&&e('div',{style:{textAlign:'center',marginBottom:16}},
          e('div',{style:{fontSize:11,color:'#9bb0c8',marginBottom:14,lineHeight:1.6}},'Simulez tout le tournoi match par match ! Entrez les scores et voyez qui se qualifie !'),
          e('button',{onClick:initInteractive,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'14px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},'⚽ START TOURNAMENT')
        ),

        // Active tournament
        iPhase!=='idle'&&iPhase!=='done'&&e('div',null,

          // Phase header + reset
          e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'1px solid '+G,borderRadius:12,padding:'10px 14px',marginBottom:12,display:'flex',justifyContent:'space-between',alignItems:'center'}},
            e('div',{style:{fontSize:12,fontWeight:'bold',color:G}},
              iPhase==='groups'?'📊 '+t.groupLabel+'s':
              iPhase==='r32'?'⚽ '+phaseLabel('R32',lang):
              iPhase==='r16'?'🔥 '+phaseLabel('R16',lang):
              iPhase==='qf'?'🏟️ '+phaseLabel('QF',lang):
              iPhase==='sf'?'🥊 '+phaseLabel('SF',lang):
              '🏆 '+phaseLabel('FIN',lang)
            ),
            e('button',{onClick:function(){setIPhase('idle');setIMatches([]);setIGroupStandings({});setIChampion(null);},style:{background:'rgba(255,60,60,0.15)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:7,padding:'4px 10px',fontSize:10,color:'#ff6b6b',cursor:'pointer'}},'x Reset')
          ),

          // GROUP STAGE
          iPhase==='groups'&&e('div',null,

            // Group selector tabs
            e('div',{style:{display:'flex',flexWrap:'wrap',gap:4,justifyContent:'center',marginBottom:12}},
              Object.keys(GROUPS).map(function(g){
                var gMatches=iMatches.filter(function(m){return m.group===g;});
                var done=gMatches.length>0&&gMatches.every(function(m){return m.played;});
                return e('button',{key:g,onClick:function(){setISelGroup(g);},style:{width:30,height:30,borderRadius:6,background:done?'rgba(40,160,40,0.3)':iSelGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:'1px solid '+(done?'#90ee90':iSelGroup===g?G:BD),color:done?'#90ee90':iSelGroup===g?'#0a0a1a':G,fontSize:11,fontWeight:'bold',cursor:'pointer'}},g);
              })
            ),

            // Matches sorted by date - TABLE FORMAT
            e(Card,{style:{marginBottom:10,padding:'10px 8px'}},
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:10,paddingLeft:4}},t.groupLabel+' '+iSelGroup+' - '+t.fixturesTitle),

              // Table header
              e('div',{style:{display:'grid',gridTemplateColumns:'58px 1fr 30px 10px 30px 1fr',gap:2,padding:'4px 4px 6px',borderBottom:'1px solid rgba(212,175,55,0.3)',marginBottom:4}},
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'DATE'),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'right'}},'HOME'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'-'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'AWAY')
              ),

              // Matches by date
              (function(){
                var gMatches=iMatches.filter(function(m){return m.group===iSelGroup;});
                return gMatches.map(function(m){
                  var fx=FIXTURES.find(function(f){
                    return f.group===iSelGroup&&(
                      (f.home===m.home&&f.away===m.away)||
                      (f.home===m.away&&f.away===m.home)
                    );
                  });
                  return {m:m,date:fx?fx.date:'',time:fx?fx.time:''};
                }).sort(function(a,b){
                  return (a.date+a.time)<(b.date+b.time)?-1:1;
                }).map(function(item){
                  var m=item.m;
                  var dt=item.date?new Date(item.date+'T12:00:00'):null;
                  var dayStr=dt?dt.toLocaleDateString(lang==='fr'?'fr-FR':lang==='de'?'de-DE':lang==='es'?'es-ES':lang==='pt'?'pt-PT':lang==='it'?'it-IT':'en-GB',{weekday:'short',day:'numeric',month:'short'}):'';
                  var homeWin=m.played&&m.goalsHome>m.goalsAway;
                  var awayWin=m.played&&m.goalsAway>m.goalsHome;
                  return e('div',{key:m.id,style:{display:'grid',gridTemplateColumns:'58px 1fr 30px 10px 30px 1fr',gap:2,alignItems:'center',padding:'5px 4px',borderBottom:'1px solid rgba(255,255,255,0.04)',background:m.played?'rgba(40,160,40,0.06)':'transparent'}},
                    e('div',{style:{fontSize:8,color:'#6a86a0',lineHeight:1.3}},dayStr,' ',item.time?item.time:''),
                    e('div',{style:{fontSize:10,fontWeight:homeWin?'bold':'normal',color:homeWin?G:'#eee',textAlign:'right',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.home,lang)),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsHome===null?'':m.goalsHome,
                      onChange:function(ev){setMatchScore(m.id,parseInt(ev.target.value)||0,m.goalsAway===null?0:m.goalsAway);},
                      style:{width:30,height:26,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+(m.played?'rgba(40,200,40,0.5)':G),borderRadius:5,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:9,color:'#6a86a0',textAlign:'center'}},'-'),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsAway===null?'':m.goalsAway,
                      onChange:function(ev){setMatchScore(m.id,m.goalsHome===null?0:m.goalsHome,parseInt(ev.target.value)||0);},
                      style:{width:30,height:26,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+(m.played?'rgba(40,200,40,0.5)':G),borderRadius:5,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:10,fontWeight:awayWin?'bold':'normal',color:awayWin?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.away,lang))
                  );
                });
              })(),

              e('button',{onClick:function(){quickSimGroup(iSelGroup);},style:{width:'100%',background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:8,padding:'7px 0',fontSize:11,color:G,cursor:'pointer',marginTop:8}},'🎲 Auto-sim '+t.groupLabel+' '+iSelGroup)
            ),

            // Standings
            iGroupStandings[iSelGroup]&&e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:8}},t.groupLabel+' '+iSelGroup+' - Classement'),
              e('div',{style:{display:'grid',gridTemplateColumns:'24px 1fr 36px 36px',gap:4,padding:'4px 0',borderBottom:'1px solid rgba(212,175,55,0.2)',marginBottom:4}},
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'#'),
                e('div',{style:{fontSize:8,color:'#6a86a0'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'Pts'),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'GD')
              ),
              iGroupStandings[iSelGroup].teams.map(function(team,i){
                var pts=iGroupStandings[iSelGroup].pts[team];
                var gd=iGroupStandings[iSelGroup].gd[team];
                return e('div',{key:team,style:{display:'grid',gridTemplateColumns:'24px 1fr 36px 36px',gap:4,alignItems:'center',padding:'6px 0',borderBottom:i<3?'1px solid rgba(212,175,55,0.07)':'none',background:i<2?'rgba(212,175,55,0.05)':'transparent'}},
                  e('div',{style:{width:20,height:20,borderRadius:4,background:i<2?G:'rgba(212,175,55,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:'bold',color:i<2?'#0a0a1a':G}},i+1),
                  e('div',{style:{fontSize:11,color:i<2?'#eee':'#888',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(team,lang)),
                  e('div',{style:{fontSize:11,fontWeight:'bold',color:G,textAlign:'center'}},pts),
                  e('div',{style:{fontSize:10,color:'#6a86a0',textAlign:'center'}},(gd>0?'+':'')+gd)
                );
              })
            ),

            // Advance button
            allGroupsComplete(iMatches)&&e('button',{onClick:advancePhase,style:{width:'100%',background:'linear-gradient(135deg,#1a8a3a,#2ab858)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#fff',cursor:'pointer',marginBottom:10}},'OK '+phaseLabel('R32',lang)+' ->')
          ),

          // KNOCKOUT ROUNDS
          iPhase!=='groups'&&e('div',null,
            e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
              iMatches.map(function(m,i){
                var homeWin=m.played&&m.goalsHome>m.goalsAway;
                var awayWin=m.played&&m.goalsAway>m.goalsHome;
                return e('div',{key:m.id,style:{marginBottom:10,padding:'8px 10px',background:'rgba(0,0,0,0.2)',borderRadius:9,border:'1px solid '+(m.played?'rgba(40,200,40,0.3)':BD)}},
                  m.label&&e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:5,textAlign:'center'}},m.label),
                  e('div',{style:{display:'grid',gridTemplateColumns:'1fr 32px 10px 32px 1fr',gap:4,alignItems:'center'}},
                    e('div',{style:{fontSize:11,fontWeight:homeWin?'bold':'normal',color:homeWin?G:'#eee',textAlign:'right',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.home,lang)),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsHome===null?'':m.goalsHome,
                      onChange:function(ev){
                        var gh=parseInt(ev.target.value)||0;
                        setIMatches(function(prev){return prev.map(function(x){return x.id===m.id?Object.assign({},x,{goalsHome:gh,played:x.goalsAway!==null&&x.goalsAway!==undefined}):x;});});
                      },
                      style:{width:32,height:28,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+G,borderRadius:6,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:10,color:'#6a86a0',textAlign:'center'}},'-'),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsAway===null?'':m.goalsAway,
                      onChange:function(ev){
                        var ga=parseInt(ev.target.value)||0;
                        setIMatches(function(prev){return prev.map(function(x){return x.id===m.id?Object.assign({},x,{goalsAway:ga,played:x.goalsHome!==null&&x.goalsHome!==undefined}):x;});});
                      },
                      style:{width:32,height:28,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+G,borderRadius:6,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:11,fontWeight:awayWin?'bold':'normal',color:awayWin?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.away,lang))
                  ),
                  m.played&&m.goalsHome===m.goalsAway&&e('div',{style:{fontSize:9,color:'#ff9900',textAlign:'center',marginTop:3}},'⚠️ Nul -> vainqueur aux penalties')
                );
              })
            ),
            e('button',{onClick:quickSimPhase,style:{width:'100%',background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:9,padding:'9px 0',fontSize:11,color:G,cursor:'pointer',marginBottom:10}},'🎲 Auto-sim ce tour'),
            iMatches.every(function(m){return m.played;})&&e('button',{onClick:advancePhase,style:{width:'100%',background:'linear-gradient(135deg,#1a8a3a,#2ab858)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#fff',cursor:'pointer',marginBottom:10}},
              iPhase==='final'?'🎉 Proclamer le Champion !':
              '>> Tour suivant ->'
            )
          )
        ),

        // CHAMPION screen
        iPhase==='done'&&e('div',{style:{textAlign:'center',marginBottom:16}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.3),rgba(184,150,62,0.15))',border:'2px solid '+G,borderRadius:18,padding:'24px 16px',marginBottom:14}},
            e('div',{style:{fontSize:12,color:G,letterSpacing:3,marginBottom:8}},'🏆 WORLD CUP 2026 CHAMPION'),
            e('div',{style:{fontSize:40,marginBottom:6}},'🥇'),
            e('div',{style:{fontSize:26,fontWeight:'bold',color:G}},tn(iChampion,lang)),
            e('div',{style:{fontSize:12,color:'#eee',marginTop:6}},'WORLD CHAMPION 2026 !')
          ),
          e('button',{onClick:function(){setIPhase('idle');setIMatches([]);setIGroupStandings({});setIChampion(null);},style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'13px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},'🔄 Rejouer')
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
