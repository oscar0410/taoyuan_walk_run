(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9973:function(e,t,s){Promise.resolve().then(s.bind(s,3110))},5342:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var a=s(3827),i=s(6100),l=s(8467),n=s(5875),r=s(5002),c=s(6689),d=s(7915),m=s(1510),o=s(2470),x=s(1347);function u(e){let t=t=>{let{column:s}=t;return(0,a.jsxs)("div",{className:"relative flex items-center gap-2",children:[(0,a.jsx)(n.e,{content:"檢視",children:(0,a.jsx)("span",{className:"text-lg text-default-400 cursor-pointer active:opacity-50",onClick:()=>e.view(s),children:(0,a.jsx)(i.Z,{})})}),(0,a.jsx)(n.e,{content:"編輯",children:(0,a.jsx)("span",{className:"text-lg text-default-400 cursor-pointer active:opacity-50",onClick:()=>e.edit(s),children:(0,a.jsx)(l.Z,{})})})]})};return(0,a.jsxs)(r.b,{"aria-label":"Example static collection table",isStriped:!0,children:[(0,a.jsx)(c.J,{children:e.headers.map(e=>(0,a.jsx)(d.j,{className:"".concat(["第一場","第二場","第三場","數量合計"].includes(e)&&"text-center"," ").concat(["項次","示範點名稱"].includes(e)&&"text-sm"),children:e},e))}),e.isAction?(0,a.jsx)(m.y,{children:e.columns.map((e,s)=>(0,a.jsxs)(o.g,{children:[Object.keys(e).map(t=>(0,a.jsx)(x.X,{className:"".concat(["firstNumber","secondaryNumber","thirdNumber","totalNumber"].includes(t)&&"text-center"," ").concat(["name","item"].includes(t)&&"whitespace-nowrap"),children:e[t]},t)),(0,a.jsx)(x.X,{children:(0,a.jsx)(t,{column:e})},"action")]},s))}):(0,a.jsx)(m.y,{children:e.columns.map((e,t)=>(0,a.jsx)(o.g,{children:Object.keys(e).map(t=>(0,a.jsx)(x.X,{className:"".concat(["firstNumber","secondaryNumber","thirdNumber","totalNumber"].includes(t)&&"text-center"," ").concat(["name","item"].includes(t)&&"whitespace-nowrap"),children:e[t]},t))},t))})]})}},3110:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var a=s(3827),i=s(4090),l=s(4232),n=s(7908),r=s(3019),c=s(703),d=s(4178),m=s(1527),o=s(2561),x=s(7725),u=s(2646);let p=()=>{let[e,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{let e=()=>{t(window.innerWidth>=1024?"pc":window.innerWidth>=768?"tablet":"mobile")};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e};function h(e){let t=p();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.R,{isOpen:e.isOpen,size:"mobile"===t?"xs":"2xl",placement:"mobile"===t?"top":"center",scrollBehavior:"inside",onOpenChange:e.onOpenChange,children:(0,a.jsx)(m.A,{children:t=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.k,{className:"flex flex-col gap-1",children:e.title}),(0,a.jsx)(x.I,{children:(0,a.jsx)("p",{className:"whitespace-pre-line",children:e.content})}),(0,a.jsx)(u.R,{})]})})},e.title)})}var g=s(5342),j=s(132),f=s(7269),b=s(5994),N=s(5187);let v=Object.freeze([{label:"第一場活動",date:"04 月 06 日",time:"14:00-17:00",location:"中壢光明公園",image:"/images/activity-1.png",alt:"中壢光明公園",content:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{label:"第二場活動",date:"04 月 13 日",time:"14:00-17:00",location:"桃園三民運動公園",image:"/images/activity-2.png",alt:"桃園三民運動公園",content:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{label:"第三場活動",date:"04 月 20 日",time:"14:00-17:00",location:"八德大湳森林公園",image:"/images/activity-3.png",alt:"八德大湳森林公園",content:"Lorem ipsum dolor sit amet, consectetur adipiscing"}]),w=Object.freeze("超酷的平台讓你運動起來更有樂趣！結合了最新的數位走跑科技，還有互動感測裝置！想不到吧？還有更棒的消息！我們在桃園市設立了20個試辦點，並且要和你一起在三民運動公園、光明公園和八德大湳森林公園舉辦三場超狂實體互動活動！完成各項任務即可獲得抽獎券(有機會抽到Garmin智慧手錶、電子體重計和其他運動用品)。參加實體活動可獲得運動毛巾、運動襪和運動飲料等等小驚喜！"),y=Object.freeze([{time:"13:00-13:30",name:"活動預告",content:"宣告今天活動場地"},{time:"13:50-14:00",name:"活動說明",content:"主持人進行今日活動主題與內容的講解"},{time:"14:00-14:20",name:"活動帶動",content:"邀請啦啦隊女孩開場表演帶動跳"},{time:"14:20-14:30",name:"啦啦隊女孩起步走",content:"宣達今日任務活動並預告開始健走活動"},{time:"14:30-15:50",name:"走跑活動",content:"-"},{time:"16:00",name:"活動摸彩",content:"-"}]),k=Object.freeze([{name:"頭獎",gift:"GARMIN Forerunner 55 GPS智慧心率跑錶",firstNumber:1,secondaryNumber:1,thirdNumber:1,totalNumber:3},{name:"貳獎",gift:"電子體重體脂計",firstNumber:1,secondaryNumber:1,thirdNumber:1,totalNumber:3},{name:"參獎",gift:"護頸枕",firstNumber:10,secondaryNumber:10,thirdNumber:10,totalNumber:30},{name:"肆獎",gift:"護腰",firstNumber:20,secondaryNumber:20,thirdNumber:20,totalNumber:60},{name:"伍獎",gift:"運動水壺",firstNumber:20,secondaryNumber:20,thirdNumber:20,totalNumber:60}]),D=Object.freeze([{item:"打卡送",name:"獎品一",gift:"運動飲料",redemptionMethod:"於活動現場打卡即可兌換",totalNumber:1500},{item:"累積里程",name:"獎品二",gift:"運動襪",redemptionMethod:"於活動現場累計達到5,000步即可兌換",totalNumber:800},{item:"累積里程",name:"獎品三",gift:"運動毛巾",redemptionMethod:"於活動現場累計達到10,000步即可兌換",totalNumber:800}]),O=Object.freeze(["2024/4/6、4/13、4/20於三場實體體驗活動現場，16:00進行抽獎，現場公告中獎名單，民眾可同步檢視Walkii App是否中獎。","中獎者請持 Walkii App 中獎畫面，於4/6中壢光明公園、4/13桃園三民運動公園、4/20八德大湳森林公園 17:00前至大會服務台兌換，逾時不候。","本活動抽獎時間、公告時間及領獎時間如上述所示，中獎序號遺失或逾期領獎視同放棄。","活動獎項數量有限，兌完為止，兌換完畢將於現場公告不另行通知。","兌換獎品以現場實物為準，圖文僅供參考。","獎品恕不接受折抵現金或轉讓他人，並不得要求更換規格配備或其他贈品。","抽獎獎品以實物為準，恕不得接受指定顏色與款式，亦不得要求折換現金或兌換等值商品，亦不得退換貨，瑕疵品除外。","主辦單位保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於活動網站，恕不另行通知。"]),z=Object.freeze([{header:"指導單位",label:["教育部體育署"]},{header:"主辦單位",label:["桃園市政府體育局"]},{header:"承辦單位",label:["騰創數析股份有限公司","若林創意股份有限公司","傳晞國際傳媒有限公司"]},{header:"聯絡電話",label:["02-2517-7576"]},{header:"聯絡人",label:["康先生"]},{header:"聯絡信箱",label:["leo.kang@datarget.com"]}]),C=Object.freeze([{depiction:"前往20處體驗站點",image:"/images/map.png",alt:"map"},{depiction:"開啟「Walkii線上運動會」App",image:"/images/walkii.png",alt:"walkii"},{depiction:"參與「來迄桃園走透透」任務",image:"/images/running.png",alt:"running"},{depiction:"上傳數據",image:"/images/record.png",alt:"record"}]),Z=Object.freeze([{publishDateTime:"113年 3月 11日",name:"桃園市體育局打造運動科技城市，將於4/6在光明公園、4/13在三民運動公園、4/20在八德大湳森林公園舉辦實體互動體驗活動",content:"愛運動的朋友們！桃園市體育局又有大動作啦！最新推出的運動平台應用，讓你輕鬆鍛鍊身心，還能搶先享受多元化運動資訊和服務！\n\n\uD83D\uDCF1超酷的平台讓你運動起來更有樂趣\uD83E\uDD29結合了最新的數位走跑科技，還有互動感測裝置！想不到吧？還有更棒的消息！我們在桃園市設立了20個試辦點，並且要和你一起在三民運動公園、光明公園和八德大湳森林公園舉辦三場超狂實體互動活動！\n\n｜活動資訊｜\n\uD83D\uDC49光明公園：113年4月6日（星期六）14:00-17:00\n\uD83D\uDC49三民運動公園：113年4月13日（星期六）14:00-17:00\n\uD83D\uDC49八德大湳森林公園：113年4月20日（星期六）14:00-17:00\n\n\uD83C\uDF81活動當天除了有運動毛巾、運動襪和運動飲料等等小驚喜外，還有機會抽到Garmin智慧手錶、電子體重計和其他運動用品！這麼豐富的禮物誰能抵擋？快來參加，和我們一起享受運動的樂趣吧！不見不散哦！\uD83D\uDCAA\uD83C\uDF89",img:""}]),E=Object.freeze([{district:"桃園區",location:["桃林鐵馬道（成功陸橋段）","虎頭山公園","桃園市立田徑場","桃園藝文廣場","三民運動公園"]},{district:"中壢區",location:["青塘園","光明公園","新街溪河濱公園","新勢公園-老街溪河濱步道"]},{district:"平鎮區",location:["石門大圳過嶺支渠休憩步道"]},{district:"龍潭區",location:["龍潭大池"]},{district:"大溪區",location:["石門水庫南苑公園","大溪埔頂公園"]},{district:"八德區",location:["八德大湳森林公園","茄苳里埤塘公園"]},{district:"蘆竹區",location:["光明河濱公園"]},{district:"龜山區",location:["龜山運動公園"]},{district:"楊梅區",location:["富岡運動公園"]},{district:"觀音區",location:["桃園大圳觀音學校埤"]},{district:"大園區",location:["橫山書法公園"]}]),S=[{key:"participants",label:"參與人數 (人)",value:"-"},{key:"accumulateMiles",label:"累積里程(km)",value:"-"},{key:"accumulateSteps",label:"累積步數(步)",value:"-"},{key:"accumulateHours",label:"累積時數(hr)",value:"-"}];function A(){let e=p(),{isOpen:t,onOpen:d,onOpenChange:m}=(0,b.q)(),[o,x]=(0,i.useState)({title:"",content:""}),u=(0,l.default)(()=>Promise.all([s.e(212),s.e(345),s.e(631)]).then(s.bind(s,8345)),{loadableGenerated:{webpack:()=>[8345]},ssr:!1}),[A,_]=(0,i.useState)([]),F=()=>{n.Z.get("/api/route/getAll").then(e=>{_(e.data.data.map(e=>{var t;return{...e,district:(null===(t=E.find(t=>t.location.includes(e.route_name)))||void 0===t?void 0:t.district)||"-"}}))})};(0,i.useEffect)(()=>{F()},[]);let L=(0,i.useMemo)(()=>A.map(e=>({area:e.district,no:e.id,location:e.route_name})),[A]),M=()=>{n.Z.post("/api/visitor/add")};(0,i.useEffect)(()=>{M()},[]);let[G,W]=(0,i.useState)("---"),P=()=>{n.Z.get("/api/visitor").then(e=>{W(e.data.data)})};return(0,i.useEffect)(()=>{P()},[]),(0,a.jsxs)("main",{className:"overflow-hidden",children:[(0,a.jsx)("div",{id:"home",className:"bg-primary/10 sm:p-6",children:(0,a.jsx)(c.default,{className:"mx-auto w-[800px] md:w-[1200px] h-auto sm:rounded-xl sm:shadow-lg",src:"pc"===e?"/images/banner-lg.png":"tablet"===e?"/images/banner-md.png":"/images/banner-sm.png",alt:"Banner",width:0,height:0,sizes:"100vw",priority:!0})}),(0,a.jsxs)("div",{id:"news",className:"bg-primary/10 py-8 px-4 sm:py-12 lg:px-6",children:[(0,a.jsx)("div",{className:"flex flex-col items-center justify-center text-xl text-center text-underline",children:"最新消息"}),(0,a.jsx)("div",{className:"max-w-[1280px] mx-auto mt-12",children:Z.map((e,t)=>(0,a.jsxs)("div",{className:"relative cursor-pointer hover:text-secondary",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",onClick:()=>{d(),x({title:e.name,content:e.content})},children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:e.publishDateTime}),(0,a.jsx)("span",{children:e.name})]}),(0,a.jsx)(f.Z,{className:"hover:text-secondary"})]}),Z.length-1!==t&&(0,a.jsx)(N.j,{className:"my-5"})]},e.name))})]}),(0,a.jsx)("div",{id:"participate",className:"mt-8 px-4 sm:mt-12",children:(0,a.jsxs)("div",{className:"max-w-[1280px] mx-auto ",children:[(0,a.jsx)("div",{className:"subtitle",children:"體驗活動流程說明"}),(0,a.jsx)("div",{className:"relative w-full flex flex-col gap-0 items-center pt-3 sm:justify-around md:flex-row md:gap-0 md:justify-center lg:items-start xl:gap-8",children:C.map((e,t)=>(0,a.jsxs)("div",{className:"w-full flex items-center justify-center md:justify-stretch md:w-auto",children:[(0,a.jsxs)("div",{className:"w-[240px] flex flex-col items-center gap-2 md:w-auto md:gap-0",children:[(0,a.jsxs)("div",{className:"self-center pb-3 text-[#FFC001]",children:[(0,a.jsx)("span",{className:"text-2xl pr-1 font-mono",children:"Step."}),(0,a.jsx)("span",{className:"text-5xl font-sans",children:t+1})]}),(0,a.jsx)("div",{className:"w-full bg-gray-400 py-3 px-4 text-white text-center rounded-2xl md:whitespace-nowrap md:py-6 md:px-2 md:text-sm lg:px-9 lg:text-base",children:e.depiction}),(0,a.jsx)("div",{className:"relative w-[140px] h-[180px] mt-6 md:w-[160px] lg:w-[190px] md:h-[260px] lg:mt-2",children:(0,a.jsx)(c.default,{className:"w-full h-full object-contain",src:e.image,alt:e.alt,width:0,height:0,sizes:"100vw"})}),t!==C.length-1&&(0,a.jsx)(N.j,{className:"md:hidden my-4"})]}),t!==C.length-1&&!r.tq&&(0,a.jsx)(j.Z,{fontSize:"large",className:"hidden text-secondary ml-0 self-start md:block xl:ml-8 mt-[80px]"})]},t))}),(0,a.jsx)("div",{className:"subtitle cursor-pointer text-secondary/80 hover:text-secondary",children:(0,a.jsx)("a",{href:"/info",target:"_blank",children:"點此查看玩法攻略"})})]})}),(0,a.jsx)("div",{id:"activity",className:"bg-primary/10 py-8 px-4 mt-8 sm:mt-12 sm:py-12",children:(0,a.jsxs)("div",{className:"max-w-[1280px] mx-auto flex flex-col gap-7",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:" 20處體驗站點導覽"}),(0,a.jsxs)("div",{className:"max-w-[1280px] mx-auto flex flex-col gap-7 lg:flex-row",children:[(0,a.jsx)(g.Z,{headers:["區別","項次","設置地點"],columns:L}),(0,a.jsx)(u,{data:A})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"活動說明"}),(0,a.jsx)("p",{children:w})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"流程規劃表"}),(0,a.jsx)(g.Z,{headers:["時間","活動名稱","活動內容"],columns:y})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"抽獎獎項"}),(0,a.jsx)(g.Z,{headers:["獎項","獎項內容","第一場","第二場","第三場","數量合計"],columns:k})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"兑獎獎項"}),(0,a.jsx)(g.Z,{headers:["項目","獎項","獎項內容","兌換方式","數量合計"],columns:D})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"注意事項"}),(0,a.jsx)("ul",{className:"list-decimal pl-5",children:O.map(e=>(0,a.jsx)("li",{children:e},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"subtitle",children:"活動資訊"}),(0,a.jsx)("div",{className:"w-fit mx-auto pt-3 grid gap-10 grid-cols-1 md:grid-cols-3 lg:gap-14",children:v.map((e,t)=>(0,a.jsxs)("div",{className:"relative w-auto lg:w-[300px] xl:w-[340px] after:hidden after:content-[''] ".concat(t!==v.length-1?"after:absolute after:top-0 after:-right-5 after:w-[1px] after:bg-gray-300 after:h-[340px] lg:after:h-[416px] md:after:block lg:after:-right-7":""),children:[(0,a.jsx)("div",{className:"relative w-full h-[200px] md:h-[178px] lg:h-[240px]",children:(0,a.jsx)(c.default,{className:"w-full h-full object-cover rounded-lg shadow-md",src:e.image,alt:e.alt,width:0,height:0,sizes:"100vw",priority:!0})}),(0,a.jsx)("div",{className:"mt-5 bg-secondary py-3 text-center text-white text-lg rounded-2xl lg:py-4",children:e.label}),(0,a.jsxs)("ul",{className:"mt-3 pl-7 list-disc",children:[(0,a.jsxs)("li",{children:["活動日期：",e.date]}),(0,a.jsxs)("li",{children:["活動時間：",e.time]}),(0,a.jsxs)("li",{children:["活動地點：",e.location]})]})]},e.label))})]})]})}),(0,a.jsx)("div",{id:"live",className:"my-8 px-4 sm:my-12 lg:px-6",children:(0,a.jsx)("div",{className:"grid gap-5 justify-center grid-cols-2 mx-auto w-fit mt-5 md:grid-cols-4 md:gap-6 lg:gap-10 xl:gap-20 xl:mt-10",children:S.map(e=>(0,a.jsxs)("div",{className:"flex flex-col items-center border-2 border-secondary rounded-3xl p-3 md:p-4 lg:px-6",children:[(0,a.jsx)("span",{className:"text-secondary font-bold text-[24px] lg:text-[30px] xl:text-[38px]",children:e.value}),(0,a.jsx)("div",{className:"text-black rounded-md text-sm lg:text-base",children:e.label})]},e.key))})}),(0,a.jsxs)("div",{id:"contact",className:"bg-primary/10 py-8 sm:py-12 sm:px-4 lg:px-6",children:[(0,a.jsx)("div",{className:"flex flex-col items-center justify-center text-xl text-center text-underline",children:"聯絡我們"}),(0,a.jsx)("div",{className:"w-auto grid grid-rows-1 gap-y-4 justify-center gap-x-20 mt-6 sm:mt-12 sm:grid-rows-3 sm:grid-flow-col md:gap-x-40 lg:gap-x-80",children:z.map(e=>(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"w-20 text-left pr-4",children:e.header}),(0,a.jsx)("div",{className:"flex flex-col",children:e.label.map(e=>(0,a.jsx)("span",{children:e},e))})]},e.header))}),(0,a.jsxs)("div",{className:"max-w-[1280px] mx-auto mt-8 text-center text-sm sm:mt-12",children:["造訪人數：",G.toLocaleString()]})]}),(0,a.jsx)(h,{title:o.title,content:o.content,isOpen:t,onOpenChange:m})]})}}},function(e){e.O(0,[833,310,300,19,787,971,69,744],function(){return e(e.s=9973)}),_N_E=e.O()}]);