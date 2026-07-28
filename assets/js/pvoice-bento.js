(function(){
  function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    var back=document.querySelector('.backtop');
    function onScroll(){ if(back) back.classList.toggle('visible', window.scrollY>520); }
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
    if(back) back.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

    document.querySelectorAll('.faq-q').forEach(function(btn){
      btn.addEventListener('click',function(){
        var item=btn.closest('.faq-item'), ans=item&&item.querySelector('.faq-a'); if(!item||!ans) return;
        var open=item.classList.contains('open');
        item.parentElement.querySelectorAll('.faq-item.open').forEach(function(other){
          if(other===item) return; other.classList.remove('open'); var a=other.querySelector('.faq-a'); if(a) a.style.maxHeight='0px'; var b=other.querySelector('.faq-q'); if(b) b.setAttribute('aria-expanded','false');
        });
        item.classList.toggle('open',!open); btn.setAttribute('aria-expanded',!open?'true':'false'); ans.style.maxHeight=!open?ans.scrollHeight+'px':'0px';
      });
    });

    document.querySelectorAll('.amount').forEach(function(btn){btn.addEventListener('click',function(){document.querySelectorAll('.amount').forEach(function(b){b.classList.remove('active')});btn.classList.add('active')})});

    document.querySelectorAll('form[data-static-form]').forEach(function(form){
      form.addEventListener('submit',function(e){
        e.preventDefault();
        var note=form.querySelector('.form-note'); var mail=form.getAttribute('data-mailto'); var subject=form.getAttribute('data-subject')||'Website inquiry'; var rows=[];
        form.querySelectorAll('input,select,textarea').forEach(function(field){
          if(!field.name||field.type==='hidden'||field.type==='submit'||field.type==='button') return;
          if((field.type==='checkbox'||field.type==='radio')&&!field.checked) return;
          var label=field.closest('.field')?field.closest('.field').querySelector('label'):null; var key=label?label.textContent.trim():field.name;
          rows.push(key+': '+(field.value||'Yes'));
        });
        if(mail&&rows.length){ window.location.href='mailto:'+encodeURIComponent(mail)+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(rows.join('\n')); }
        if(note){ note.textContent=mail?'Opening your email app. For launch, connect this form to your CRM/form provider.':'Thanks — this preview form is ready to connect.'; }
      });
    });

    document.querySelectorAll('.story-slider').forEach(function(slider){
      var slides=Array.from(slider.querySelectorAll('.story-slide')); var dots=Array.from(document.querySelectorAll('[data-slide-dot]')); var prev=document.querySelector('[data-slide-prev]'); var next=document.querySelector('[data-slide-next]'); if(!slides.length) return;
      var i=0,timer; function show(n){i=(n+slides.length)%slides.length; slides.forEach(function(s,idx){s.classList.toggle('active',idx===i); s.setAttribute('aria-hidden',idx===i?'false':'true')}); dots.forEach(function(d,idx){d.classList.toggle('active',idx===i); d.setAttribute('aria-current',idx===i?'true':'false')})}
      function start(){stop(); timer=setInterval(function(){show(i+1)},6500)} function stop(){if(timer) clearInterval(timer)}
      dots.forEach(function(d,idx){d.addEventListener('click',function(){show(idx);start()})}); if(prev) prev.addEventListener('click',function(){show(i-1);start()}); if(next) next.addEventListener('click',function(){show(i+1);start()}); slider.addEventListener('mouseenter',stop); slider.addEventListener('mouseleave',start); show(0); start();
    });

    var reveals=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window){var obs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('in');obs.unobserve(entry.target)}})},{threshold:.13,rootMargin:'0px 0px -60px 0px'}); reveals.forEach(function(el){obs.observe(el)})} else {reveals.forEach(function(el){el.classList.add('in')})}
  });
})();
