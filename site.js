(function(){
  const path=(window.location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=(a.getAttribute('href')||'').toLowerCase();
    if(href===path || (path==='' && href==='index.html')) a.classList.add('active');
  });
})();
