const url="http://connectivitycheck.platform.hicloud.com/generate_204";function http(){return new Promise((t=>{let e=Date.now();$httpClient.get(url,(()=>{let n=Date.now();t(n-e);console.log(n-e)}))}))}function saK(t){const e=(new Date).getTime();const n=$persistentStore.read("KEYCNM");const o=n?JSON.parse(n):{};o[e]=t.join(",");const s=Object.keys(o);if(s.length>7){const t=s.sort()[0];delete o[t]}const r=$persistentStore.write(JSON.stringify(o),"KEYCNM");const c=$persistentStore.read("KEYCNM");const l=c?JSON.parse(c):{};const i=Object.values(l).join(",").split(",").map((t=>parseInt(t)));console.log(i);return i}function ptoG(t){const e=10;let n=Math.max(...t);let o=n;if(n<50){o+=50}else if(n<100){o+=60}else if(n<300){o+=20}else if(n>300){o=300}const s=t.map((t=>{let n=(t-e)/(o-e);if(n>1){n=1}const s=Math.floor(n*6)+9601;if(s>9607){return"▇"}else if(s<9601){return"▁"}else{return String.fromCharCode(s)}})).join("");console.log(s);return s}(async()=>{let t=[];for(let e=0;e<2;e++){const e=await http(url);const n=parseFloat(e);t.push(n)}const e=saK(t);const n=ptoG(e);let o=Math.round(e.reduce(((t,e)=>t+e),0)/e.length);let s=`CN: ${o.toString().padEnd(5," ")} ms\t➟     Ping: ${t}`;$done({title:s,content:n})})();