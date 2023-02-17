import{C as e,x as t,y as o,z as a}from"./individual_sim_ui-eea6a887.chunk.js";import{I as r,cp as s,A as n,co as l,cs as m,cr as i,cq as u}from"./detailed_results-6c7ee111.chunk.js";function c(c,d){let g=new e(c,"totems-settings",{header:{title:"Totems"}}),p=r.newGroupContainer();p.classList.add("totem-dropdowns-container","icon-group");let f=document.createElement("div");f.classList.add("fire-elemental-inputs-container"),g.bodyElement.appendChild(p),g.bodyElement.appendChild(f),new t(p,d.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:s.NoEarthTotem},{actionId:n.fromSpellId(58643),value:s.StrengthOfEarthTotem},{actionId:n.fromSpellId(58753),value:s.StoneskinTotem},{actionId:n.fromSpellId(8143),value:s.TremorTotem}],equals:(e,t)=>e==t,zeroValue:s.NoEarthTotem,changedEvent:e=>e.rotationChangeEmitter,getValue:e=>e.getRotation().totems?.earth||s.NoEarthTotem,setValue:(e,t,o)=>{const a=t.getRotation();a.totems||(a.totems=l.create()),a.totems.earth=o,t.setRotation(e,a)}}),new t(p,d.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:m.NoWaterTotem},{actionId:n.fromSpellId(58774),value:m.ManaSpringTotem}],equals:(e,t)=>e==t,zeroValue:m.NoWaterTotem,changedEvent:e=>e.rotationChangeEmitter,getValue:e=>e.getRotation().totems?.water||m.NoWaterTotem,setValue:(e,t,o)=>{const a=t.getRotation();a.totems||(a.totems=l.create()),a.totems.water=o,t.setRotation(e,a)}}),new t(p,d.player,{extraCssClasses:["fire-totem-picker"],numColumns:1,values:[{color:"#ffb3ba",value:i.NoFireTotem},{actionId:n.fromSpellId(58734),value:i.MagmaTotem},{actionId:n.fromSpellId(58704),value:i.SearingTotem},{actionId:n.fromSpellId(57722),value:i.TotemOfWrath,showWhen:e=>e.getTalents().totemOfWrath},{actionId:n.fromSpellId(58656),value:i.FlametongueTotem}],equals:(e,t)=>e==t,zeroValue:i.NoFireTotem,changedEvent:e=>e.rotationChangeEmitter,getValue:e=>e.getRotation().totems?.fire||i.NoFireTotem,setValue:(e,t,o)=>{const a=t.getRotation();a.totems||(a.totems=l.create()),a.totems.fire=o,t.setRotation(e,a)}}),new t(p,d.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:u.NoAirTotem},{actionId:n.fromSpellId(8512),value:u.WindfuryTotem},{actionId:n.fromSpellId(3738),value:u.WrathOfAirTotem}],equals:(e,t)=>e==t,zeroValue:u.NoAirTotem,changedEvent:e=>e.rotationChangeEmitter,getValue:e=>e.getRotation().totems?.air||u.NoAirTotem,setValue:(e,t,o)=>{const a=t.getRotation();a.totems||(a.totems=l.create()),a.totems.air=o,t.setRotation(e,a)}});const h=o({getModObject:e=>e,getValue:e=>e.getRotation().totems||l.create(),setValue:(e,t,o)=>{const a=t.getRotation();a.totems=o,t.setRotation(e,a)},changeEmitter:e=>e.rotationChangeEmitter},n.fromSpellId(2894),"useFireElemental");return new a(f,d.player,h),g}export{c as T};
//# sourceMappingURL=totem_inputs-4e1f33aa.chunk.js.map