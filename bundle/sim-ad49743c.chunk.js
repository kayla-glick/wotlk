import{A as t,aq as n,ar as e,cH as a,cI as i,T as s,c0 as r,Q as l,k as d,l as o,cJ as c,bx as m,by as g,cK as h,L as p,bF as f,bI as u,bK as S,ao as I,a$ as P,K as y,ap as O,bt as T,d as b,a as w,al as v}from"./detailed_results-6c7ee111.chunk.js";import{m as M,j as H,a as C,k as W,B as F,I as G}from"./individual_sim_ui-eea6a887.chunk.js";const R=M({fieldName:"powerInfusionTarget",id:t.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().powerInfusionTarget?.targetIndex!=n,setValue:(t,a,i)=>{const s=a.getSpecOptions();s.powerInfusionTarget=e.create({targetIndex:i?0:n}),a.setSpecOptions(t,s)}}),E=M({fieldName:"useInnerFire",id:t.fromSpellId(48168)}),j=M({fieldName:"useShadowfiend",id:t.fromSpellId(34433)}),k=H({fieldName:"rapturesPerMinute",label:"Raptures / Min",labelTooltip:"Number of times to proc Rapture each minute (due to a PWS being fully absorbed).",showWhen:t=>t.getTalents().rapture>0,changeEmitter:t=>s.onAny([t.specOptionsChangeEmitter,t.talentsChangeEmitter])}),x={inputs:[C({fieldName:"type",label:"Type",values:[{name:"Cycle",value:a.Cycle},{name:"Custom",value:a.Custom}]}),W({fieldName:"customRotation",numColumns:2,showCastsPerMinute:!0,values:[{actionId:t.fromSpellId(48063),value:i.GreaterHeal},{actionId:t.fromSpellId(48071),value:i.FlashHeal},{actionId:t.fromSpellId(48068),value:i.Renew},{actionId:t.fromSpellId(48066),value:i.PowerWordShield},{actionId:t.fromSpellId(48089),value:i.CircleOfHealing},{actionId:t.fromSpellId(48072),value:i.PrayerOfHealing},{actionId:t.fromSpellId(48113),value:i.PrayerOfMending},{actionId:t.fromSpellId(53007),value:i.Penance},{actionId:t.fromSpellId(48120),value:i.BindingHeal}],showWhen:t=>t.getRotation().type==a.Custom})]},B={name:"Disc",data:r.create({talentsString:"0503203130300512301313231251-2351010303",glyphs:l.create({major1:d.GlyphOfPowerWordShield,major2:d.GlyphOfFlashHeal,major3:d.GlyphOfPenance,minor1:o.GlyphOfFortitude,minor2:o.GlyphOfShadowfiend,minor3:o.GlyphOfFading})})},D={name:"Holy",data:r.create({talentsString:"05032031103-234051032002152530004311051",glyphs:l.create({major1:d.GlyphOfPrayerOfHealing,major2:d.GlyphOfRenew,major3:d.GlyphOfCircleOfHealing,minor1:o.GlyphOfFortitude,minor2:o.GlyphOfShadowfiend,minor3:o.GlyphOfFading})})},J=c.create({type:a.Cycle,customRotation:m.create({spells:[g.create({spell:i.PowerWordShield,castsPerMinute:18}),g.create({spell:i.Penance,castsPerMinute:4}),g.create({spell:i.PrayerOfMending,castsPerMinute:2}),g.create({spell:i.GreaterHeal,castsPerMinute:1})]})}),N=c.create({type:a.Cycle,customRotation:m.create({spells:[g.create({spell:i.GreaterHeal,castsPerMinute:10}),g.create({spell:i.CircleOfHealing,castsPerMinute:5}),g.create({spell:i.Renew,castsPerMinute:10}),g.create({spell:i.PrayerOfMending,castsPerMinute:2})]})}),A=h.create({useInnerFire:!0,useShadowfiend:!0,rapturesPerMinute:5,powerInfusionTarget:e.create({targetIndex:n})}),K=p.create({flask:f.FlaskOfTheFrostWyrm,food:u.FoodFishFeast,defaultPotion:S.RunicManaInjector,prepopPotion:S.PotionOfWildMagic}),_=I.create({giftOfTheWild:P.TristateEffectImproved,powerWordFortitude:P.TristateEffectImproved,strengthOfEarthTotem:P.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,trueshotAura:!0,leaderOfThePack:P.TristateEffectImproved,icyTalons:!0,totemOfWrath:!0,moonkinAura:P.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0}),V=y.create({blessingOfKings:!0,blessingOfWisdom:P.TristateEffectImproved,vampiricTouch:!0}),q=O.create({}),L={name:"Disc Preraid Preset",tooltip:F,enableWhen:t=>0==t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 37294,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40681\n\t\t},\n\t\t{\n\t\t\t"id": 37691,\n\t\t\t"enchant": 3809\n\t\t},\n\t\t{\n\t\t\t"id": 37630,\n\t\t\t"enchant": 3859\n\t\t},\n\t\t{\n\t\t\t"id": 39515,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37361,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39519,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40697,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37622,\n\t\t\t"enchant": 3719\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40027\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44283\n\t\t},\n\t\t{\n\t\t\t"id": 37195\n\t\t},\n\t\t{\n\t\t\t"id": 37660\n\t\t},\n\t\t{\n\t\t\t"id": 42413,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37360,\n\t\t\t"enchant": 3854\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37238\n\t\t}\n\t]}')},Q={name:"Disc P1 Preset",tooltip:F,enableWhen:t=>0==t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40456,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44657,\n\t\t\t"gems": [\n\t\t\t\t40047\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40450,\n\t\t\t"enchant": 3809,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40724,\n\t\t\t"enchant": 3859\n\t\t},\n\t\t{\n\t\t\t"id": 40194,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40741,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40445,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40271,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40027,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40398,\n\t\t\t"enchant": 3719,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40236,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 40108\n\t\t},\n\t\t{\n\t\t\t"id": 40433\n\t\t},\n\t\t{\n\t\t\t"id": 37835\n\t\t},\n\t\t{\n\t\t\t"id": 40258\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40350\n\t\t},\n\t\t{\n\t\t\t"id": 40245\n\t\t}\n\t]}')},$={name:"Holy Preraid Preset",tooltip:F,enableWhen:t=>0!=t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42553,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t42148\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40681\n\t\t},\n\t\t{\n\t\t\t"id": 37655,\n\t\t\t"enchant": 3809\n\t\t},\n\t\t{\n\t\t\t"id": 37291,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 39515,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37361,\n\t\t\t"enchant": 1119,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39519,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40697,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t42148,\n\t\t\t\t42148\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37189,\n\t\t\t"enchant": 3719,\n\t\t\t"gems": [\n\t\t\t\t40047,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40092\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44283\n\t\t},\n\t\t{\n\t\t\t"id": 37694\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 42413,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37360,\n\t\t\t"enchant": 3854\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37619\n\t\t}\n\t]}')},z={name:"Holy P1 Preset",tooltip:F,enableWhen:t=>0!=t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40447,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44657,\n\t\t\t"gems": [\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40450,\n\t\t\t"enchant": 3809,\n\t\t\t"gems": [\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40723,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 40381,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40741,\n\t\t\t"enchant": 1119,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40454,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40271,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40398,\n\t\t\t"enchant": 3719,\n\t\t\t"gems": [\n\t\t\t\t42148,\n\t\t\t\t42148\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40326,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t42148\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40719\n\t\t},\n\t\t{\n\t\t\t"id": 40375\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 42413,\n\t\t\t"gems": [\n\t\t\t\t40012,\n\t\t\t\t40012\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40350\n\t\t},\n\t\t{\n\t\t\t"id": 40245\n\t\t}\n\t]}')},U={name:"Disc P2 Preset",tooltip:F,enableWhen:t=>0==t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 46197,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t45883\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45933,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45390,\n\t\t\t"enchant": 3809,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45486,\n\t\t\t"enchant": 3859,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46193,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45146,\n\t\t\t"enchant": 3758,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45520,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45558,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t40047,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45388,\n\t\t\t"enchant": 3721,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46050,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45946,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46096,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40432\n\t\t},\n\t\t{\n\t\t\t"id": 45535\n\t\t},\n\t\t{\n\t\t\t"id": 45612,\n\t\t\t"enchant": 3834,\n\t\t\t"gems": [\n\t\t\t\t40027\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45314\n\t\t},\n\t\t{\n\t\t\t"id": 45294,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t}\n\t]}')},X={name:"Holy P2 Preset",tooltip:F,enableWhen:t=>0!=t.getTalentTree(),gear:T.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 46197,\n\t\t\t"enchant": 3819,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t45883\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45447,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45390,\n\t\t\t"enchant": 3809,\n\t\t\t"gems": [\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45486,\n\t\t\t"enchant": 3859,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46193,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44008,\n\t\t\t"enchant": 3758,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45520,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t40017,\n\t\t\t\t40017,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45558,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t40017,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45388,\n\t\t\t"enchant": 3721,\n\t\t\t"gems": [\n\t\t\t\t40026,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46050,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40026,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45946,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46323,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46051\n\t\t},\n\t\t{\n\t\t\t"id": 45535\n\t\t},\n\t\t{\n\t\t\t"id": 46035,\n\t\t\t"enchant": 3834,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45271\n\t\t},\n\t\t{\n\t\t\t"id": 45511\n\t\t}\n\t]}')};class Y extends G{constructor(t,n){super(t,n,{cssClass:"healing-priest-sim-ui",cssScheme:"priest",knownIssues:['Talents that apply to, "friendly targets at or below 50% health" are not implemented.',"Prayer of Mending always bounces the maximum number of times."],epStats:[b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],epReferenceStat:b.StatSpellPower,displayStats:[b.StatHealth,b.StatMana,b.StatStamina,b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],defaults:{gear:Q.gear,epWeights:w.fromMap({[b.StatIntellect]:2.73,[b.StatSpirit]:1.63,[b.StatSpellPower]:1,[b.StatSpellCrit]:.75,[b.StatSpellHaste]:.28,[b.StatMP5]:2.05}),consumes:K,rotation:J,talents:B.data,specOptions:A,raidBuffs:_,partyBuffs:v.create({}),individualBuffs:V,debuffs:q},playerIconInputs:[R,E,j],rotationInputs:x,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[k]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[B,D],gear:[L,Q,U,$,z,X]}})}}export{J as D,Y as H,B as a,A as b,K as c,Q as d,U as e,N as f,D as g,z as h,X as i};
//# sourceMappingURL=sim-ad49743c.chunk.js.map
