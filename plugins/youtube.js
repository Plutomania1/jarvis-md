const config = require("../config");
const { System, isPublic, getJson, IronMan, getBuffer, toAudio, AddMp3Meta, extractUrlFromMessage } = require('../lib/');

System({ pattern: 'video ?(.*)', fromMe: isPublic, desc: 'YouTube video downloader', type: 'download' }, async (message, match) => {
const _0x12824e=_0x2454;(function(_0x25b5ac,_0x56de29){const _0x271ecf=_0x2454,_0x67594b=_0x25b5ac();while(!![]){try{const _0x7a86fc=-parseInt(_0x271ecf(0xb3))/(0x9ff+0xec0+-0x18be)+parseInt(_0x271ecf(0xc5))/(-0x572+0x10d2+-0xb5e)*(-parseInt(_0x271ecf(0xbf))/(0x1*0xd83+0x4e2+-0x1262))+-parseInt(_0x271ecf(0xac))/(0x17*-0x185+0x9*-0x2eb+0x3d3a)*(parseInt(_0x271ecf(0xb1))/(0x1d97+0x2499*-0x1+0x707*0x1))+-parseInt(_0x271ecf(0xc3))/(-0x13cd+-0xf7+0x14ca)+-parseInt(_0x271ecf(0xc4))/(0xb8*-0x29+-0x1c1f*-0x1+0x160)+parseInt(_0x271ecf(0xb6))/(-0xa19+-0xf3*0xc+-0x313*-0x7)*(-parseInt(_0x271ecf(0xb5))/(-0x2045*0x1+-0xe*-0x2af+-0x544))+-parseInt(_0x271ecf(0xad))/(0x1370+-0x178c+0x9*0x76)*(-parseInt(_0x271ecf(0xaa))/(-0x1*-0xb02+-0x13*-0x124+-0x5*0x687));if(_0x7a86fc===_0x56de29)break;else _0x67594b['push'](_0x67594b['shift']());}catch(_0x2e98ee){_0x67594b['push'](_0x67594b['shift']());}}}(_0x12e3,0x1b05*-0x5+-0xbf2b+0x2e2b5));try{match=match||message[_0x12824e(0xbb)+_0x12824e(0xb0)][_0x12824e(0xab)];if(!match)return await message[_0x12824e(0xbc)](_0x12824e(0xc2)+_0x12824e(0xb4)+_0x12824e(0xb9));else{const matchurl=extractUrlFromMessage(match),api=IronMan(_0x12824e(0xb7)+_0x12824e(0xc1)+matchurl),{title}=await getJson(''+api),Video=await IronMan(_0x12824e(0xbd)+_0x12824e(0xb2)+matchurl);await message[_0x12824e(0xae)][_0x12824e(0xb8)+'e'](message[_0x12824e(0xaf)],{'video':{'url':Video},'caption':''+title});}}catch(_0x4a279d){console[_0x12824e(0xbe)](_0x12824e(0xc0)+_0x12824e(0xba),_0x4a279d);}function _0x2454(_0x1ce6ee,_0x54732a){const _0x383a37=_0x12e3();return _0x2454=function(_0x2bd156,_0x16c1e4){_0x2bd156=_0x2bd156-(-0xadc+-0x11b9+0x1d3f*0x1);let _0x2aa3b6=_0x383a37[_0x2bd156];return _0x2aa3b6;},_0x2454(_0x1ce6ee,_0x54732a);}function _0x12e3(){const _0x9e94cf=['1202005lwsevJ','6vncVYG','11xoewcN','text','1112gUiCdI','9014130yUENRH','client','chat','age','375ajthZF','deo?url=','151846sjrIwL','uTube\x20vide','252DIgikR','18944fNXjwB','downloader','sendMessag','o\x20Url_','ccurred:','reply_mess','reply','ironman/vi','error','181377fsCSTK','An\x20error\x20o','/ytv?url=','_Give\x20a\x20Yo','1222416VfOput'];_0x12e3=function(){return _0x9e94cf;};return _0x12e3();}
});

System({ pattern: 'yta ?(.*)', fromMe: isPublic, desc: 'YouTube audio downloader', type: 'download' }, async (message, match) => {
function _0x1ff7(){const _0x3f34b4=['audio/mpeg','1tGkoBh','split','age','o\x20Url_','579096TYIcts','text','reply_mess','deo?url=','sendMessag','ironman/vi','ccurred:','322776IwgUEI','4119wSqkHs','860545trFeaS','uTube\x20vide','916vrlcac','error','AUDIO_DATA','299035ZesSGE','40XbtmjX','An\x20error\x20o','mp4','jid','reply','client','21125LcCdtE','8oOvHIC','_Give\x20a\x20Yo','591148zZNCXY','252wpApJY','18TQDPXl'];_0x1ff7=function(){return _0x3f34b4;};return _0x1ff7();}const _0x36a2c1=_0x47f8;(function(_0x68c892,_0x33caae){const _0x175863=_0x47f8,_0x8a2efa=_0x68c892();while(!![]){try{const _0x49f3e2=parseInt(_0x175863(0x205))/(-0x1a8f*0x1+-0x866+-0x117b*-0x2)*(parseInt(_0x175863(0x201))/(-0x18b9*0x1+0x1b87+-0x1*0x2cc))+-parseInt(_0x175863(0x1f1))/(-0x4d5*0x6+-0x269e*0x1+-0x1*-0x439f)*(-parseInt(_0x175863(0x1f4))/(0x124*-0xb+0x21be+-0x152e))+-parseInt(_0x175863(0x1f2))/(-0x16*0x1b4+0x1d72+0x80b)+-parseInt(_0x175863(0x203))/(0x26db+-0x1e5*0x7+-0x443*0x6)*(-parseInt(_0x175863(0x209))/(0x327+-0xa9a+0x77a))+-parseInt(_0x175863(0x1ff))/(-0x359*-0x2+0x1*0xd91+-0x143b)*(parseInt(_0x175863(0x1f0))/(-0x11fd*-0x1+-0x12e*0x4+-0xd3c))+-parseInt(_0x175863(0x1f8))/(0x1fc*-0x8+0x2302+-0x1318)*(parseInt(_0x175863(0x1f7))/(-0x1*-0xa52+-0x2107+0x16c0))+parseInt(_0x175863(0x202))/(-0x1d*0x1a+0x13*0x5+0x1*0x29f)*(-parseInt(_0x175863(0x1fe))/(0x7*0x4eb+-0x811+-0x1a4f));if(_0x49f3e2===_0x33caae)break;else _0x8a2efa['push'](_0x8a2efa['shift']());}catch(_0x5afb35){_0x8a2efa['push'](_0x8a2efa['shift']());}}}(_0x1ff7,0xd3f3b+0xa7adf+0xffc51*-0x1));function _0x47f8(_0x53218d,_0x499829){const _0x5db203=_0x1ff7();return _0x47f8=function(_0x3322fc,_0x177962){_0x3322fc=_0x3322fc-(-0x157d+0xa*-0x2a9+0x3204);let _0x11320c=_0x5db203[_0x3322fc];return _0x11320c;},_0x47f8(_0x53218d,_0x499829);}try{match=match||message[_0x36a2c1(0x20b)+_0x36a2c1(0x207)][_0x36a2c1(0x20a)];if(!match)return await message[_0x36a2c1(0x1fc)](_0x36a2c1(0x200)+_0x36a2c1(0x1f3)+_0x36a2c1(0x208));else{const xmatchurl=extractUrlFromMessage(match),Audio=await IronMan(_0x36a2c1(0x1ee)+_0x36a2c1(0x20c)+xmatchurl),buff=await getBuffer(Audio);var media=await toAudio(buff,_0x36a2c1(0x1fa));const data=config[_0x36a2c1(0x1f6)][_0x36a2c1(0x206)](';'),name=data[0x213a+-0x1b86+0x2*-0x2da],author=data[0x1*-0x43f+-0x1acc+0x1f0c],image=data[-0x2e8+0x21c8+-0x1ede*0x1],img=await getBuffer(image),aud=await AddMp3Meta(media,img,{'title':name,'body':author});await message[_0x36a2c1(0x1fd)][_0x36a2c1(0x1ed)+'e'](message[_0x36a2c1(0x1fb)],{'audio':aud,'mimetype':_0x36a2c1(0x204)});}}catch(_0xd53d49){console[_0x36a2c1(0x1f5)](_0x36a2c1(0x1f9)+_0x36a2c1(0x1ef),_0xd53d49);}
});

System({ pattern: 'ytv ?(.*)', fromMe: isPublic, desc: 'YouTube video downloader', type: 'download' }, async (message, match) => {
const _0x98a499=_0x346e;(function(_0x578a46,_0x38ae3a){const _0x10e1b1=_0x346e,_0x49219c=_0x578a46();while(!![]){try{const _0x4c8efb=-parseInt(_0x10e1b1(0x1b8))/(-0x428+0x84*0x3+0x29d*0x1)*(-parseInt(_0x10e1b1(0x1a9))/(-0x918+0x13*0xb9+-0x4a1))+-parseInt(_0x10e1b1(0x1b4))/(0x767*0x2+-0x16fd+0x832)+-parseInt(_0x10e1b1(0x1aa))/(-0x88f*-0x1+-0xf1a+0x68f)+parseInt(_0x10e1b1(0x1b7))/(0x1d06+0x1eb5+-0x3bb6)+parseInt(_0x10e1b1(0x1b2))/(0xd65+-0x1c7f+-0x58*-0x2c)*(parseInt(_0x10e1b1(0x1a6))/(0xc*0x12+0xf2+-0x1c3))+-parseInt(_0x10e1b1(0x1af))/(0x156f+0x450+-0x19b7)*(-parseInt(_0x10e1b1(0x1a3))/(-0x1f4+-0x17e*0x17+0x244f))+-parseInt(_0x10e1b1(0x1ac))/(-0x1*-0x1a0c+-0x148+-0xc5d*0x2)*(parseInt(_0x10e1b1(0x1a0))/(0x630+0x1011+0x2*-0xb1b));if(_0x4c8efb===_0x38ae3a)break;else _0x49219c['push'](_0x49219c['shift']());}catch(_0x3b7ccb){_0x49219c['push'](_0x49219c['shift']());}}}(_0x2bc8,-0x3266f+-0xe1e*0xb+-0x121*-0x59f));try{match=match||message[_0x98a499(0x1ad)+_0x98a499(0x19e)][_0x98a499(0x1a8)];if(!match)return await message[_0x98a499(0x1ae)](_0x98a499(0x1a2)+_0x98a499(0x19f)+_0x98a499(0x1a7));else{const bmatchurl=extractUrlFromMessage(match),api=IronMan(_0x98a499(0x1b9)+_0x98a499(0x1b5)+bmatchurl),{title}=await getJson(''+api),Video=await IronMan(_0x98a499(0x1b0)+_0x98a499(0x1a5)+bmatchurl);await message[_0x98a499(0x1a4)][_0x98a499(0x1a1)+'e'](message[_0x98a499(0x1ab)],{'video':{'url':Video},'caption':''+title});}}catch(_0x229b3f){console[_0x98a499(0x1b6)](_0x98a499(0x1b1)+_0x98a499(0x1b3),_0x229b3f);}function _0x346e(_0x2f09a1,_0x492755){const _0x52caab=_0x2bc8();return _0x346e=function(_0x4988ce,_0x64e74e){_0x4988ce=_0x4988ce-(-0x1dfb+0x1d87*0x1+0x212);let _0x1bfdd1=_0x52caab[_0x4988ce];return _0x1bfdd1;},_0x346e(_0x2f09a1,_0x492755);}function _0x2bc8(){const _0x540947=['client','deo?url=','49pvTBKQ','o\x20Url_','text','4BbWHzP','455180OGtePl','chat','1630ZSIoHN','reply_mess','reply','392ZlqHPR','ironman/vi','An\x20error\x20o','200982SwQPVE','ccurred:','251094VJJsAo','/ytv?url=','error','922150BirUNr','110312pTTxNw','downloader','age','uTube\x20vide','27643NqLeLi','sendMessag','_Give\x20a\x20Yo','25209NAckAT'];_0x2bc8=function(){return _0x540947;};return _0x2bc8();}
});