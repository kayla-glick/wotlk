import{A as t,aq as e,ar as n,cB as a,T as i,cC as s,c0 as r,Q as o,D as l,e as d,cD as m,cE as c,L as g,bF as p,bI as h,bK as f,bt as u,d as b,a6 as S,a as T,ao as w,a$ as y,al as R,K as v,ap as P}from"./detailed_results-6c7ee111.chunk.js";import{m as W,j as O,i as k,b as A,a as M,c as B,B as E,I as N,K as F,F as C,L as I,T as x,t as H}from"./individual_sim_ui-eea6a887.chunk.js";W({fieldName:"innervateTarget",id:t.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().innervateTarget?.targetIndex!=e,setValue:(t,a,i)=>{const s=a.getSpecOptions();s.innervateTarget=n.create({targetIndex:i?0:e}),a.setSpecOptions(t,s)}});const D=O({fieldName:"latencyMs",label:"Latency",labelTooltip:"Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."}),j=k({fieldName:"prepopOoc",label:"Pre-pop Clearcasting",labelTooltip:"Start fight with clearcasting active",showWhen:t=>t.getTalents().omenOfClarity,changeEmitter:t=>i.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),U=k({fieldName:"prePopBerserk",label:"Pre-pop Berserk",labelTooltip:"Pre pop berserk 1 sec before fight",showWhen:t=>t.getTalents().berserk,changeEmitter:t=>i.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),G=k({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]}),L={inputs:[A({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"Use Faerie Fire whenever it is not active on the target."}),M({fieldName:"bearWeaveType",label:"Bearweaving",values:[{name:"None",value:a.None},{name:"Mangle",value:a.Mangle},{name:"Lacerate",value:a.Lacerate}]}),A({fieldName:"snekWeave",label:"Snek Weave",labelTooltip:"Reset swing timer using albino snek, when going from bear to cat",showWhen:t=>t.getRotation().bearWeaveType!=a.None}),A({fieldName:"flowerWeave",label:"Flower Weave",labelTooltip:"Fish for clearcasting during rotation with gotw",showWhen:t=>t.getRotation().bearWeaveType==a.None}),B({fieldName:"raidTargets",label:"GotW Raid Targets",labelTooltip:"Raid size to assume for clearcast proc chance (can include pets as well, so 25 man raid potentically can be ~30)",showWhen:t=>t.getRotation().bearWeaveType==a.None&&1==t.getRotation().flowerWeave}),A({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults"}),B({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:t=>t.getRotation().manualParams}),A({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:t=>t.getRotation().manualParams}),A({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:t=>t.getRotation().manualParams}),B({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:t=>t.getRotation().manualParams&&1==t.getRotation().useBite&&t.getRotation().biteModeType==s.Emperical}),B({fieldName:"hotUptime",label:"Revitalize Hot Uptime",labelTooltip:"Hot uptime percentage to assume when theorizing energy gains",percent:!0,showWhen:t=>1==t.getRotation().useBite&&t.getRotation().biteModeType==s.Analytical})]},z={name:"Standard",data:r.create({talentsString:"-503202132322010053120230310511-205503012",glyphs:o.create({major1:l.GlyphOfRip,major2:l.GlyphOfSavageRoar,major3:l.GlyphOfShred,minor1:d.GlyphOfDash,minor2:d.GlyphOfTheWild,minor3:d.GlyphOfUnburdenedRebirth})})},K=m.create({bearWeaveType:a.Lacerate,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:s.Emperical,biteTime:10,berserkBiteThresh:30,powerbear:!1,minRoarOffset:14,maintainFaerieFire:!0,hotUptime:0,snekWeave:!1,flowerWeave:!1,raidTargets:30}),J=c.create({latencyMs:100,prepopOoc:!0,assumeBleedActive:!1}),_=g.create({flask:p.FlaskOfEndlessRage,food:h.FoodDragonfinFilet,defaultPotion:f.PotionOfSpeed}),q={name:"PreRaid",tooltip:E,gear:u.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42550,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 37139,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37840,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 37219,\n\t\t\t"enchant": 3832\n\t\t},\n\t\t{\n\t\t\t"id": 44203,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37409,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40694,\n\t\t\t"gems": [\n\t\t\t\t49110,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37644,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 44297,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 37624\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37166\n\t\t},\n\t\t{\n\t\t\t"id": 37883,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40713\n\t\t}\n  ]}')},V={name:"P1 Preset",tooltip:E,gear:u.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40473,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40494,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40539,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39765,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40205,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44011,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40243,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 40717\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 40388,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 39757\n\t\t}\n\t]}')},Q={name:"P2 Preset",tooltip:E,gear:u.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 46161,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45245,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40058\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45473,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45869,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46158,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45564,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46048,\n\t\t\t"gems": [\n\t\t\t\t45862\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45931\n\t\t},\n\t\t{\n\t\t\t"id": 45609\n\t\t},\n\t\t{\n\t\t\t"id": 45613,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40713\n\t\t}\n\t]}')};class $ extends N{constructor(t,e){super(t,e,{cssClass:"feral-druid-sim-ui",cssScheme:"druid",knownIssues:[],warnings:[],epStats:[b.StatStrength,b.StatAgility,b.StatAttackPower,b.StatMeleeHit,b.StatMeleeCrit,b.StatMeleeHaste,b.StatArmorPenetration,b.StatExpertise],epPseudoStats:[S.PseudoStatMainHandDps],epReferenceStat:b.StatAttackPower,displayStats:[b.StatHealth,b.StatStrength,b.StatAgility,b.StatAttackPower,b.StatMeleeHit,b.StatMeleeCrit,b.StatMeleeHaste,b.StatArmorPenetration,b.StatExpertise,b.StatMana],defaults:{gear:Q.gear,epWeights:T.fromMap({[b.StatStrength]:2.4,[b.StatAgility]:2.39,[b.StatAttackPower]:1,[b.StatMeleeHit]:2.51,[b.StatMeleeCrit]:2.23,[b.StatMeleeHaste]:1.83,[b.StatArmorPenetration]:2.08,[b.StatExpertise]:2.44},{[S.PseudoStatMainHandDps]:16.5}),consumes:_,rotation:K,talents:z.data,specOptions:J,raidBuffs:w.create({arcaneBrilliance:!0,giftOfTheWild:y.TristateEffectImproved,bloodlust:!0,manaSpringTotem:y.TristateEffectRegular,strengthOfEarthTotem:y.TristateEffectImproved,battleShout:y.TristateEffectImproved,unleashedRage:!0,icyTalons:!0,swiftRetribution:!0,sanctifiedRetribution:!0}),partyBuffs:R.create({}),individualBuffs:v.create({blessingOfKings:!0,blessingOfMight:y.TristateEffectImproved}),debuffs:P.create({judgementOfWisdom:!0,bloodFrenzy:!0,giftOfArthas:!0,exposeArmor:!0,faerieFire:y.TristateEffectImproved,sunderArmor:!0,curseOfWeakness:y.TristateEffectRegular,heartOfTheCrusader:!0})},playerIconInputs:[],rotationInputs:L,includeBuffDebuffInputs:[F,C,I],excludeBuffDebuffInputs:[],otherInputs:{inputs:[D,j,U,G,x,H]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[z],gear:[q,V,Q]}})}}export{K as D,$ as F,V as P,z as S,J as a,_ as b,Q as c};
//# sourceMappingURL=sim-3b25ed72.chunk.js.map