import{c8 as t,T as n,c9 as e,ca as a,cb as o,cc as i,cd as l,ce as s,cf as r,A as m,cg as h,ch as d,B as g,aq as c,ar as u,t as p,c0 as f,Q as y,u as b,ci as T,cj as S,bx as R,by as C,L as E,bF as w,bI as D,bK as P,bD as v,bJ as A,bt as O,d as W,a6 as G,a as B,ao as I,a$ as F,al as H,K as N,ap as U}from"./detailed_results-6c7ee111.chunk.js";import{i as k,j as M,c as j,b as x,a as z,k as J,l as K,B as _,I as q,n as L,o as V,p as Q,q as $,r as X,s as Y,T as Z,t as tt}from"./individual_sim_ui-eea6a887.chunk.js";const nt=k({fieldName:"unholyFrenzyTarget",label:"Self Unholy Frenzy",labelTooltip:"Cast Unholy Frenzy on yourself.",extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().unholyFrenzyTarget?.targetIndex!=c,setValue:(t,n,e)=>{const a=n.getSpecOptions();a.unholyFrenzyTarget=u.create({targetIndex:e?0:c}),n.setSpecOptions(t,a)},showWhen:t=>t.getTalents().hysteria,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),et=M({fieldName:"startingRunicPower",label:"Starting Runic Power",labelTooltip:"Initial RP at the start of each iteration."}),at=M({fieldName:"petUptime",label:"Ghoul Uptime (%)",labelTooltip:"Percent of the fight duration for which your ghoul will be on target.",percent:!0,showWhen:t=>t.getTalents().masterOfGhouls}),ot=k({fieldName:"precastGhoulFrenzy",label:"Pre-Cast Ghoul Frenzy",labelTooltip:"Cast Ghoul Frenzy 10 seconds before combat starts.",showWhen:t=>t.getTalents().summonGargoyle&&t.getTalents().ghoulFrenzy,changeEmitter:t=>n.onAny([t.specOptionsChangeEmitter,t.rotationChangeEmitter,t.talentsChangeEmitter])}),it=k({fieldName:"precastHornOfWinter",label:"Pre-Cast Horn of Winter",labelTooltip:"Precast Horn of Winter for 10 extra runic power before fight."}),lt=k({fieldName:"drwPestiApply",label:"DRW Pestilence Add",labelTooltip:"There is currently an interaction with DRW and pestilence where you can use pestilence to force DRW to apply diseases if they are already applied by the DK. It only works with Glyph of Disease and if there is an off target. This toggle forces the sim to assume there is an off target.",showWhen:t=>!t.getRotation().autoRotation&&0==t.getTalentTree()&&(t.getGlyphs().major1==p.GlyphOfDisease||t.getGlyphs().major2==p.GlyphOfDisease||t.getGlyphs().major3==p.GlyphOfDisease),changeEmitter:t=>n.onAny([t.specOptionsChangeEmitter,t.rotationChangeEmitter,t.talentsChangeEmitter])});j({fieldName:"diseaseRefreshDuration",label:"Disease Refresh Duration",labelTooltip:"Minimum duration for refreshing a disease."});const st=x({fieldName:"useDeathAndDecay",label:"Death and Decay",labelTooltip:"Use Death and Decay based rotation.",showWhen:t=>t.getTalents().summonGargoyle&&t.getTalents().scourgeStrike&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])});z({fieldName:"deathAndDecayPrio",label:"Death and Decay Prio",labelTooltip:"<p>Chose how to prioritize death and decay usage:</p>\t\t<p><b>Max Rune Downtime</b>: Prioritizes spending runes over holding them for death and decay</p>\t\t<p><b>Max Dnd Uptime</b>: Prioritizes dnd uptime and can hold runes for longer then rune grace</p>",values:[{name:"Max Rune Downtime",value:t.MaxRuneDowntime},{name:"Max Dnd Uptime",value:t.MaxDndUptime}],showWhen:t=>t.getTalents().summonGargoyle&&(t.getRotation().useDeathAndDecay||!t.getTalents().scourgeStrike)&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])});const rt=x({fieldName:"useEmpowerRuneWeapon",label:"Empower Rune Weapon",labelTooltip:"Use Empower Rune Weapon in rotation.",showWhen:t=>!t.getRotation().autoRotation&&t.getRotation().frostRotationType!=d.Custom}),mt=x({fieldName:"useGargoyle",label:"Summon Gargoyle",labelTooltip:"Use Summon Gargoyle in rotation.",changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation}),ht=x({fieldName:"holdErwArmy",label:"Hold ERW for AotD",labelTooltip:"Hold Empower Rune Weapon for after Summon Gargoyle to guarantee maximized snapshot for Army of the Dead.",changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>!t.getRotation().autoRotation&&t.getRotation().useEmpowerRuneWeapon&&t.getRotation().armyOfTheDead==o.AsMajorCd&&0!=t.getTalentTree()}),dt=z({fieldName:"blPresence",label:"Bloodlust Presence",labelTooltip:"Presence during bloodlust.",values:[{name:"Blood",value:e.Blood},{name:"Unholy",value:e.Unholy}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),gt=z({fieldName:"gargoylePresence",label:"Gargoyle Presence",labelTooltip:"Presence during Gargoyle.",values:[{name:"Blood",value:e.Blood},{name:"Unholy",value:e.Unholy}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation&&!t.getRotation().preNerfedGargoyle,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),ct=x({fieldName:"btGhoulFrenzy",label:"BT Ghoul Frenzy",labelTooltip:"Use Ghoul Frenzy only with Blood Tap.",showWhen:t=>t.getTalents().ghoulFrenzy&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),ut=z({fieldName:"firstDisease",label:"First Disease",labelTooltip:"Chose which disease to apply first.",values:[{name:"Frost Fever",value:a.FrostFever},{name:"Blood Plague",value:a.BloodPlague}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),pt=z({fieldName:"armyOfTheDead",label:"Army of the Dead",labelTooltip:"Chose how to use Army of the Dead.",values:[{name:"Do not use",value:o.DoNotUse},{name:"Pre pull",value:o.PreCast},{name:"As Major CD",value:o.AsMajorCd}],showWhen:t=>!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),ft=z({fieldName:"startingPresence",label:"Starting Presence",labelTooltip:"Chose the presence you start combat in.",values:[{name:"Blood",value:e.Blood},{name:"Unholy",value:e.Unholy}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),yt=z({fieldName:"presence",label:"Fight Presence",labelTooltip:"Presence to be in during the encounter.",values:[{name:"Blood",value:e.Blood},{name:"Unholy",value:e.Unholy}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),bt=z({fieldName:"bloodRuneFiller",label:"Blood Rune Filler",labelTooltip:"Chose what to spend your free blood runes on.",values:[{name:"Blood Strike",value:i.BloodStrike},{name:"Blood Boil",value:i.BloodBoil}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),Tt=x({fieldName:"preNerfedGargoyle",label:"Pre-Nerfed Gargoyle (haste snapshot)",labelTooltip:"Use old Gargoyle that snapshots haste",showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation&&t.sim.getShowExperimental(),changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),St=z({fieldName:"bloodTap",label:"Blood Tap",labelTooltip:"Chose what to spend your Blood Tap on.",values:[{name:"Ghoul Frenzy",value:l.GhoulFrenzy},{name:"Icy Touch",value:l.IcyTouch},{name:"Blood Strike",value:l.BloodStrikeBT},{name:"Blood Boil",value:l.BloodBoilBT}],showWhen:t=>t.getTalents().summonGargoyle&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),Rt=x({fieldName:"useAms",label:"Use AMS",labelTooltip:"Use AMS around predicted damage for a RP gain.",showWhen:t=>t.getTalents().howlingBlast&&!t.getRotation().autoRotation&&t.getRotation().frostRotationType!=d.Custom,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),Ct=j({fieldName:"avgAmsSuccessRate",label:"Avg AMS Success %",labelTooltip:"Chance for damage to be taken during the 5 second window of AMS.",showWhen:t=>1==t.getRotation().useAms&&!t.getRotation().autoRotation&&t.getTalents().howlingBlast&&t.getRotation().frostRotationType!=d.Custom,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),Et=j({fieldName:"avgAmsHit",label:"Avg AMS Hit",labelTooltip:"How much on average (+-10%) the character is hit for when AMS is successful.",showWhen:t=>1==t.getRotation().useAms&&!t.getRotation().autoRotation&&t.getTalents().howlingBlast&&t.getRotation().frostRotationType!=d.Custom,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),wt=j({fieldName:"oblitDelayDuration",label:"Oblit Delay (ms)",labelTooltip:"How long a FS/HB/HW can delay a Oblit by.",showWhen:t=>t.getTalents().howlingBlast&&!t.getRotation().autoRotation&&t.getRotation().frostRotationType!=d.Custom,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),Dt=x({fieldName:"autoRotation",label:"Automatic Rotation",labelTooltip:"Have sim automatically adjust rotation based on the scenario. This is still in development and currently only works for Unholy.",changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>!t.getTalents().howlingBlast}),Pt=x({fieldName:"desyncRotation",label:"Use Desync Rotation",labelTooltip:"Use the Desync Rotation.",showWhen:t=>t.getTalents().howlingBlast&&!t.getRotation().autoRotation&&t.sim.getShowExperimental(),changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),vt=z({fieldName:"presence",label:"Presence",labelTooltip:"Presence to be in during the encounter.",values:[{name:"Blood",value:e.Blood},{name:"Frost",value:e.Frost},{name:"Unholy",value:e.Unholy}],showWhen:t=>t.getTalents().howlingBlast&&!t.getRotation().autoRotation,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),At=z({fieldName:"drwDiseases",label:"DRW Disease",labelTooltip:"Chose how to apply diseases for Dancing Rune Weapon.",values:[{name:"Do not apply",value:s.DoNotApply},{name:"IT + PS",value:s.Normal},{name:"Pestilence",value:s.Pestilence}],showWhen:t=>!t.getRotation().autoRotation&&0==t.getTalentTree()&&t.getRotation().bloodOpener==r.Standard,changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])});z({fieldName:"bloodOpener",label:"Opener",labelTooltip:"Chose which opener to use.",values:[{name:"Standard",value:r.Standard},{name:"Incan",value:r.Experimental_1}],showWhen:t=>!t.getRotation().autoRotation&&0==t.getTalentTree(),changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])});const Ot=J({fieldName:"frostCustomRotation",numColumns:4,values:[{actionId:m.fromSpellId(49909),value:h.CustomIcyTouch},{actionId:m.fromSpellId(49921),value:h.CustomPlagueStrike},{actionId:m.fromSpellId(50842),value:h.CustomPestilence},{actionId:m.fromSpellId(51425),value:h.CustomObliterate},{actionId:m.fromSpellId(51411),value:h.CustomHowlingBlast},{actionId:m.fromSpellId(59057),value:h.CustomHowlingBlastRime},{actionId:m.fromSpellId(49941),value:h.CustomBloodBoil},{actionId:m.fromSpellId(49930),value:h.CustomBloodStrike},{actionId:m.fromSpellId(49938),value:h.CustomDeathAndDecay},{actionId:m.fromSpellId(57623),value:h.CustomHornOfWinter},{actionId:m.fromSpellId(51271),value:h.CustomUnbreakableArmor},{actionId:m.fromSpellId(45529),value:h.CustomBloodTap},{actionId:m.fromSpellId(47568),value:h.CustomEmpoweredRuneWeapon},{actionId:m.fromSpellId(55268),value:h.CustomFrostStrike}],showWhen:t=>t.getRotation().frostRotationType==d.Custom}),Wt=x({fieldName:"enableWeaponSwap",label:"Enable Weapon Swapping",showWhen:t=>t.getTalents().summonGargoyle&&t.getRotation().useGargoyle}),Gt=K({fieldName:"weaponSwap",values:[g.ItemSlotMainHand,g.ItemSlotOffHand],labelTooltip:"<b>Berserking</b> will be equipped when FC has procced and Berserking is not active.<br><br><b>Black Magic</b> will be prioed to swap during gargoyle or if gargoyle will be on CD for full BM Icd.",showWhen:t=>t.getTalents().summonGargoyle&&t.getRotation().useGargoyle&&t.getRotation().enableWeaponSwap}),Bt={inputs:[z({fieldName:"frostRotationType",label:"Rotation Type",values:[{name:"Single Target",value:d.SingleTarget},{name:"Custom",value:d.Custom}],changeEmitter:t=>n.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getTalents().howlingBlast&&!t.getRotation().autoRotation}),vt,Dt,ct,mt,Wt,Gt,rt,ht,St,pt,At,ut,ft,gt,dt,yt,bt,st,wt,Rt,Ct,Et,Pt,Ot,Tt]},It={name:"Frost BL",data:f.create({talentsString:"23050005-32005350352203012300033101351",glyphs:y.create({major1:p.GlyphOfObliterate,major2:p.GlyphOfFrostStrike,major3:p.GlyphOfDisease,minor1:b.GlyphOfHornOfWinter,minor2:b.GlyphOfPestilence,minor3:b.GlyphOfRaiseDead})})},Ft={name:"Frost UH",data:f.create({talentsString:"01-32002350342203012300033101351-230200305003",glyphs:y.create({major1:p.GlyphOfObliterate,major2:p.GlyphOfFrostStrike,major3:p.GlyphOfDisease,minor1:b.GlyphOfHornOfWinter,minor2:b.GlyphOfPestilence,minor3:b.GlyphOfRaiseDead})})},Ht={name:"Unholy DW",data:f.create({talentsString:"-320043500002-2300303050032152000150013133051",glyphs:y.create({major1:p.GlyphOfTheGhoul,major2:p.GlyphOfDarkDeath,major3:p.GlyphOfDeathAndDecay,minor1:b.GlyphOfHornOfWinter,minor2:b.GlyphOfPestilence,minor3:b.GlyphOfRaiseDead})})},Nt={name:"Unholy 2H",data:f.create({talentsString:"-320050500002-2300303150032152000150013133151",glyphs:y.create({major1:p.GlyphOfTheGhoul,major2:p.GlyphOfDarkDeath,major3:p.GlyphOfIcyTouch,minor1:b.GlyphOfHornOfWinter,minor2:b.GlyphOfPestilence,minor3:b.GlyphOfRaiseDead})})},Ut={name:"Blood DPS",data:f.create({talentsString:"2305120530003303231023001351--230220305003",glyphs:y.create({major1:p.GlyphOfDancingRuneWeapon,major2:p.GlyphOfDeathStrike,major3:p.GlyphOfDisease,minor1:b.GlyphOfHornOfWinter,minor2:b.GlyphOfPestilence,minor3:b.GlyphOfRaiseDead})})},kt=T.create({useDeathAndDecay:!0,btGhoulFrenzy:!1,refreshHornOfWinter:!1,useGargoyle:!0,useEmpowerRuneWeapon:!0,holdErwArmy:!1,preNerfedGargoyle:!1,armyOfTheDead:o.AsMajorCd,startingPresence:e.Unholy,blPresence:e.Blood,presence:e.Blood,gargoylePresence:e.Unholy,bloodRuneFiller:i.BloodBoil,useAms:!1,oblitDelayDuration:1e3,drwDiseases:s.Pestilence}),Mt=S.create({drwPestiApply:!0,startingRunicPower:0,petUptime:1,precastGhoulFrenzy:!1,precastHornOfWinter:!0,unholyFrenzyTarget:u.create({targetIndex:c})}),jt=T.create({useDeathAndDecay:!1,btGhoulFrenzy:!1,refreshHornOfWinter:!1,useEmpowerRuneWeapon:!0,preNerfedGargoyle:!1,startingPresence:e.Blood,presence:e.Blood,bloodRuneFiller:i.BloodBoil,useAms:!1,avgAmsSuccessRate:1,avgAmsHit:1e4,oblitDelayDuration:1e3,drwDiseases:s.Pestilence,frostRotationType:d.SingleTarget,frostCustomRotation:R.create({spells:[C.create({spell:h.CustomDeathAndDecay}),C.create({spell:h.CustomIcyTouch}),C.create({spell:h.CustomPlagueStrike}),C.create({spell:h.CustomPestilence}),C.create({spell:h.CustomHowlingBlastRime}),C.create({spell:h.CustomHowlingBlast}),C.create({spell:h.CustomBloodBoil}),C.create({spell:h.CustomObliterate}),C.create({spell:h.CustomFrostStrike})]})}),xt=S.create({drwPestiApply:!0,startingRunicPower:0,petUptime:1,precastHornOfWinter:!0,unholyFrenzyTarget:u.create({targetIndex:c})}),zt=T.create({refreshHornOfWinter:!1,useEmpowerRuneWeapon:!0,preNerfedGargoyle:!1,startingPresence:e.Blood,bloodRuneFiller:i.BloodStrike,armyOfTheDead:o.PreCast,holdErwArmy:!1,useAms:!1,drwDiseases:s.Pestilence}),Jt=S.create({drwPestiApply:!0,startingRunicPower:0,petUptime:1,precastHornOfWinter:!0,unholyFrenzyTarget:u.create({targetIndex:c})}),Kt={},_t=E.create({flask:w.FlaskOfEndlessRage,food:D.FoodDragonfinFilet,defaultPotion:P.PotionOfSpeed,petFood:v.PetFoodSpicedMammothTreats,prepopPotion:P.PotionOfSpeed,thermalSapper:!0,fillerExplosive:A.ExplosiveSaroniteBomb}),qt={name:"P1 Blood",tooltip:_,enableWhen:t=>0==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  42702\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40557,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3831\n\t\t  },\n\t\t  {\n\t\t\t"id": 40550,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40552,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40556,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  40037\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t  },\n\t\t  {\n\t\t\t"id": 40075\n\t\t  },\n\t\t  {\n\t\t\t"id": 39401\n\t\t  },\n\t\t  {\n\t\t\t"id": 40256\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3368\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 40207\n\t\t  }\n  ]}')},Lt={name:"P2 Blood",tooltip:_,enableWhen:t=>0==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 46115,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  42702\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45459,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46117,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3831,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46111,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45663,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46113,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45241,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  45862,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45134,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45599,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45534,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46048,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 45931\n\t\t  },\n\t\t  {\n\t\t\t"id": 45516,\n\t\t\t"enchant": 3368,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 45254\n\t\t  }\n  ]}')},Vt={name:"Pre-Raid 2H Unholy",toolbar:_,enableWhen:t=>2==t.getTalentTree()&&0==t.getTalents().nervesOfColdSteel,gear:O.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41400,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37397\n\t\t},\n\t\t{\n\t\t\t"id": 37627,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 39617,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41355,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39618,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40688,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37193,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44306,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 44935\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 41257,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40867\n\t\t}\n  ]}')},Qt={name:"P1 2H Unholy",toolbar:_,enableWhen:t=>2==t.getTalentTree()&&0==t.getTalents().nervesOfColdSteel,gear:O.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41400,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40557,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 40550,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40552,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40038,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40556,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 39401\n\t\t},\n\t\t{\n\t\t\t"id": 40075\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40207\n\t\t}\n  ]}')},$t={name:"Pre-Raid DW Unholy",toolbar:_,enableWhen:t=>2==t.getTalentTree()&&t.getTalents().nervesOfColdSteel>0,gear:O.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41400,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37397\n\t\t},\n\t\t{\n\t\t\t"id": 37627,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 39617,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41355,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39618,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40688,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37193,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44306,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 44935\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 41383,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40703,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40867\n\t\t}\n  ]}')},Xt={name:"P1 DW Unholy",toolbar:_,enableWhen:t=>2==t.getTalentTree()&&t.getTalents().nervesOfColdSteel>0,gear:O.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39421\n\t\t},\n\t\t{\n\t\t\t"id": 40557,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 40550,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40347,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40294,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 39706,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39401\n\t\t},\n\t\t{\n\t\t\t"id": 40075\n\t\t},\n\t\t{\n\t\t\t"id": 37390\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40402,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40491,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 42620\n\t\t}\n  ]}')},Yt={name:"P2 DW Unholy",toolbar:_,enableWhen:t=>2==t.getTalentTree()&&t.getTalents().nervesOfColdSteel>0,gear:O.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 45472,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40041\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46040,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46117,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45588,\n\t\t\t"enchant": 3831,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46111,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45663,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45481,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45241,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  45862,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45134,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  40041,\n\t\t\t  39996,\n\t\t\t  40022\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45599,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45534,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45250\n\t\t  },\n\t\t  {\n\t\t\t"id": 45609\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 46097,\n\t\t\t"enchant": 3368,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46036,\n\t\t\t"enchant": 3368,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45254\n\t\t  }\n  ]}')},Zt={name:"Pre-Raid Frost",tooltip:_,enableWhen:t=>1==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42645,\n\t\t\t"gems": [\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 34388,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 39617,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41355,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39618,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37171,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37193,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44306,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 42642,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44935\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 41383,\n\t\t\t"enchant": 3370\n\t\t},\n\t\t{\n\t\t\t"id": 43611,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40715\n\t\t}\n  ]}')},tn={name:"P1 Frost",tooltip:_,enableWhen:t=>1==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40557,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 40550,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40552,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40556,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 39401\n\t\t},\n\t\t{\n\t\t\t"id": 40075\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40189,\n\t\t\t"enchant": 3370\n\t\t},\n\t\t{\n\t\t\t"id": 40189,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40207\n\t\t}\n  ]}')},nn={name:"P2 Frost",tooltip:_,enableWhen:t=>1==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 46115,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  42702\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45459,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46117,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3831,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46111,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45663,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46113,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45241,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  45862,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45134,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45599,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45534,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45931\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 46097,\n\t\t\t"enchant": 3370,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46097,\n\t\t\t"enchant": 3368,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40207\n\t\t  }\n  ]}')},en={name:"P1 Frost Sub Unh",tooltip:_,enableWhen:t=>1==t.getTalentTree(),gear:O.fromJsonString('{   "items": [\n\t\t{\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t40003\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40557,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40003\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3831\n\t\t},\n\t\t{\n\t\t\t"id": 40550,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t40003\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40552,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40058,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40556,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 39401\n\t\t},\n\t\t{\n\t\t\t"id": 40075\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40189,\n\t\t\t"enchant": 3370\n\t\t},\n\t\t{\n\t\t\t"id": 40189,\n\t\t\t"enchant": 3368\n\t\t},\n\t\t{\n\t\t\t"id": 40207\n\t\t}\n  ]}')};class an extends q{constructor(t,n){super(t,n,{cssClass:"deathknight-sim-ui",cssScheme:"death-knight",knownIssues:[],epStats:[W.StatStrength,W.StatArmor,W.StatAgility,W.StatAttackPower,W.StatExpertise,W.StatMeleeHit,W.StatMeleeCrit,W.StatMeleeHaste,W.StatArmorPenetration,W.StatSpellHit,W.StatSpellCrit,W.StatSpellHaste],epPseudoStats:[G.PseudoStatMainHandDps,G.PseudoStatOffHandDps],epReferenceStat:W.StatAttackPower,displayStats:[W.StatHealth,W.StatArmor,W.StatStrength,W.StatAgility,W.StatSpellHit,W.StatSpellCrit,W.StatAttackPower,W.StatMeleeHit,W.StatMeleeCrit,W.StatMeleeHaste,W.StatArmorPenetration,W.StatExpertise],defaults:{gear:Yt.gear,epWeights:B.fromMap({[W.StatStrength]:3.22,[W.StatAgility]:.62,[W.StatArmor]:.01,[W.StatAttackPower]:1,[W.StatExpertise]:1.13,[W.StatMeleeHaste]:1.85,[W.StatMeleeHit]:1.92,[W.StatMeleeCrit]:.76,[W.StatArmorPenetration]:.77,[W.StatSpellHit]:.8,[W.StatSpellCrit]:.34},{[G.PseudoStatMainHandDps]:3.1,[G.PseudoStatOffHandDps]:1.79}),consumes:_t,rotation:kt,talents:Ht.data,specOptions:Mt,raidBuffs:I.create({giftOfTheWild:F.TristateEffectImproved,swiftRetribution:!0,strengthOfEarthTotem:F.TristateEffectImproved,icyTalons:!0,abominationsMight:!0,leaderOfThePack:F.TristateEffectRegular,sanctifiedRetribution:!0,bloodlust:!0,devotionAura:F.TristateEffectImproved,stoneskinTotem:F.TristateEffectImproved,moonkinAura:F.TristateEffectRegular,wrathOfAirTotem:!0,powerWordFortitude:F.TristateEffectImproved}),partyBuffs:H.create({heroicPresence:!1}),individualBuffs:N.create({blessingOfKings:!0,blessingOfMight:F.TristateEffectImproved}),debuffs:U.create({bloodFrenzy:!0,faerieFire:F.TristateEffectImproved,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,heartOfTheCrusader:!0,shadowMastery:!0})},playerIconInputs:[],rotationInputs:Bt,petConsumeInputs:[L],includeBuffDebuffInputs:[V,Q],excludeBuffDebuffInputs:[$,X,Y],otherInputs:{inputs:[lt,nt,et,at,ot,it,Z,tt]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[Ut,It,Ft,Ht,Nt],gear:[qt,Lt,Zt,tn,en,nn,$t,Vt,Xt,Qt,Yt]}})}}export{Ut as B,an as D,It as F,Kt as O,qt as P,Ht as U,zt as a,Jt as b,_t as c,Lt as d,jt as e,xt as f,tn as g,nn as h,kt as i,Mt as j,Xt as k,Yt as l};
//# sourceMappingURL=sim-958e0346.chunk.js.map
