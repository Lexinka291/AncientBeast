(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{314:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(113),n=r(27),s=r(43),c=r(11),u=r(3),o=r(114);t.default=function(e){e.abilities[40]=[{trigger:"onUnderAttack",require:function(){return!0},activate:function(t){if(void 0===t)return!1;if(!t.melee)return!1;if(t.isFromTrap)return!1;this.end();var r={alterations:{moveable:!1},deleteTrigger:"onEndPhase",turnLifetime:1,creationTurn:e.turn-1,deleteOnOwnerDeath:!0};this.isUpgraded()&&(r.alterations.reqEnergy=5);var a=new i.a(this.creature,{},1,[new o.a(this.title,this.creature,t.attacker,"",r,e)],e);a.counter=!0,t.attacker.takeDamage(a),t.attacker===e.activeCreature&&t.attacker.queryMove(),e.activeCreature!==this.creature&&this.creature.addEffect(new o.a(this.title,this.creature,this.creature,"",{alterations:{moveable:!1},deleteTrigger:"onStartPhase",turnLifetime:1},e))}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.i),{team:this._targetTeam})},query:function(){var t=this;if(this.isUpgraded()){var r=[this.creature.getHexMap(s.h),this.creature.getHexMap(s.a)];e.grid.queryChoice({fnOnSelect:function(t,r){e.activeCreature.faceHex(r.hex,void 0,!0),r.hex.overlayVisualState("creature selected player"+e.activeCreature.team)},fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,choices:r})}else e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.i)})},activate:function(e,t){if(this.end(),this.isUpgraded()){var r,a=0===t.choiceIndex,i=e.map((function(e){return e.y})),s=Math.min.apply(null,i),c=Math.max.apply(null,i);r=a?t.hex.y!==c:t.hex.y===s,e.sort((function(e,t){return r?e.y-t.y:t.y-e.y}));for(var u=0;u<e.length;u++){var o=e[u].creature;o&&Object(n.b)(this.creature,o,this._targetTeam)&&this._activateOnTarget(o)}}else this._activateOnTarget(e)},_activateOnTarget:function(t){var r=this,a=new o.a("Hammered",this.creature,t,"onStepOut",{effectFn:function(t){t.target.takeDamage(new i.a(t.owner,{pierce:r.damages.pierce},1,[],e)),t.deleteEffect()}},e),n=new i.a(this.creature,this.damages,1,[a],e);t.takeDamage(n)}},{trigger:"onQuery",_directions:[0,1,0,0,1,0],_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this._directions})},query:function(){var t=this,r={fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,requireCreature:!0,id:this.creature.id,sourceCreature:this.creature,x:this.creature.x,y:this.creature.y,directions:this._directions,dashedHexesAfterCreatureStop:!1};if(this.isUpgraded()){r=e.grid.getDirectionChoices(r);for(var a=[],i=function(i){var n=void 0,s=r.choices[i][0].direction,o=0;r.sourceCreature instanceof u.a&&(!r.sourceCreature.player.flipped&&s>2||r.sourceCreature.player.flipped&&s<3)&&(o=-(r.sourceCreature.size-1));var h=e.grid.getHexLine(r.x+o,r.y,s,r.flipped);r.choices[i].forEach((function(e){c.e(h,e)})),c.b(h,!1,!0,r.id),r.hexesDashed=r.hexesDashed.concat(h);var d=e.grid.getHexLine(r.x+o,r.y,s,r.flipped);for(t.creature.hexagons.forEach((function(e){c.c(d,e)&&c.e(d,e)})),n=0;n<d.length;n++)c.c(r.choices[i],d[n])||(c.e(d,d[n]),n--);for(n=0;n<h.length;n++)d.push(h[n]),a.push(d.slice())},n=0;n<r.choices.length;n++)i(n);r.choices=r.choices.concat(a),r.requireCreature=!1,e.grid.queryChoice(r)}else e.grid.queryDirection(r)},activate:function(t,r){var n,s,u,o=this;this.end();var h=[];for(n=0;n<t.length;n++)if(t[n].creature){s=t[n].creature,u=t.slice(0,n),h=t.slice(n);break}var d=a.extend({},this.damages);d.pierce+=u.length;var g=new i.a(this.creature,d,1,[],e);if(u.length>0){var f=c.d(u);4===r.direction&&(f=e.grid.hexes[f.y][f.x+this.creature.size-1]),e.grid.cleanReachable(),this.creature.moveTo(f,{overrideSpeed:100,ignoreMovementPoint:!0,callback:function(){var t=setInterval((function(){e.freezedInput||(clearInterval(t),s.x==f.x-o.creature.size&&s.y===f.y&&(f.creature===o.creature&&s.takeDamage(g),o._pushTarget(s,h,r)||e.activeCreature.queryMove()))}),100)}})}else s.takeDamage(g),o._pushTarget(s,h,r)||e.activeCreature.queryMove()},_pushTarget:function(t,r,a){var i=this,n=this.creature,s=r.slice();if(c.b(s,!1,!1,n.id),c.b(s,!1,!1,t.id),0===s.length)return!1;var u=0,o=setInterval((function(){if(!e.freezedInput)if(u===s.length||n.dead||t.dead||!n.stats.moveable||!t.stats.moveable)clearInterval(o),n.facePlayerDefault(),e.activeCreature.queryMove();else{var c=r[u],h=s[u];4===a.direction&&(c=e.grid.hexes[c.y][c.x+n.size-1],h=e.grid.hexes[h.y][h.x+t.size-1]),i._pushOneHex(t,c,h),u++}}));return!0},_pushOneHex:function(e,t,r){var i={overrideSpeed:100,ignorePath:!0,ignoreMovementPoint:!0,turnAroundOnComplete:!1};e.moveTo(r,a.extend({animation:"push"},i)),this.creature.moveTo(t,i)}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){var e=this;return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.p),{team:this._targetTeam,optTest:function(t){return!!e.isUpgraded()||t.size<=2}})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.p),optTest:function(e){return!!t.isUpgraded()||e.size<=2}})},activate:function(t){var r=this.creature;this.end();var a=new i.a(r,this.damages,1,[],e),n=s.o,c=e.grid.getHexMap(r.x-n.origin[0],r.y-n.origin[1],0,!1,n)[0].creature==t,u=t.x+(c?0:r.size-t.size);r.moveTo(e.grid.hexes[t.y][u],{ignorePath:!0,ignoreMovementPoint:!0,callback:function(){r.updateHex(),r.queryMove()}});var o=r.x+(c?t.size-r.size:0);t.moveTo(e.grid.hexes[r.y][o],{ignorePath:!0,ignoreMovementPoint:!0,callback:function(){t.updateHex(),t.takeDamage(a)}})}}]}}}]);