const langBtn=document.getElementById("langBtn");
let lang="zh";
function setLang(next){
  lang=next;
  document.querySelectorAll("[data-zh]").forEach(el=>{
    const v=el.getAttribute("data-"+lang);
    if(v) el.innerHTML=v;
  });
  langBtn.textContent=lang==="zh"?"EN":"中";
  document.documentElement.lang=lang==="zh"?"zh-CN":"en";
}
langBtn.addEventListener("click",()=>setLang(lang==="zh"?"en":"zh"));

document.getElementById("leadForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const body=[
    `姓名：${f.get("name")}`,
    `联系方式：${f.get("contact")}`,
    `文件类型：${f.get("type")}`,
    `使用国家：${f.get("country")||""}`,
    `截止日期：${f.get("deadline")||""}`,
    `说明：${f.get("message")||""}`,
    "",
    "（如需发送文件，请在邮件客户端中附上文件。）"
  ].join("\n");
  location.href=`mailto:jiezhang9980@gmail.com?subject=${encodeURIComponent("公证/海牙认证咨询")}&body=${encodeURIComponent(body)}`;
});
