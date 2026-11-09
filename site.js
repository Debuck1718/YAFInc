const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const page = document.body.dataset.page || "";
const navItems = [
  ["Our story", "about.html", "about"],
  ["What we do", "programs.html", "programs"],
  ["Our impact", "impact.html", "impact"],
  ["Stories", "stories.html", "stories"],
  ["Get involved", "contact.html", "contact"],
];
if (header) {
  header.innerHTML = `<div class="wrap nav"><a class="brand" href="index.html" aria-label="YAFInc home"><span class="brand-mark">Y</span><span>YAFInc<small>YOUTH & FUTURE INCORPORATED</small></span></a><nav class="nav-links" id="navLinks" aria-label="Main navigation">${navItems.map(([label, url, key]) => `<a href="${url}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}<a class="button" href="contact.html">Be part of the future <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></nav><button class="menu-toggle" id="menuToggle" aria-label="Open navigation" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button></div>`;
}
if (footer) {
  footer.innerHTML = `<div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark">Y</span><span>YAFInc<small>YOUTH & FUTURE INCORPORATED</small></span></a><p>Building transformational leaders. Rooted in Ghana, reaching for a better future for all.</p><div class="socials"><a href="contact.html" aria-label="Instagram">ig</a><a href="contact.html" aria-label="Facebook">f</a><a href="contact.html" aria-label="LinkedIn">in</a></div></div><div class="footer-links"><div class="footer-col"><strong>Explore</strong><a href="about.html">Our story</a><a href="programs.html">Our programs</a><a href="impact.html">Our impact</a><a href="stories.html">Field stories</a></div><div class="footer-col"><strong>Get involved</strong><a href="contact.html">Join the community</a><a href="contact.html#partner">Partner with us</a><a href="contact.html#support">Support our work</a></div><div class="footer-col"><strong>Connect</strong><a href="mailto:hello@yafinc.org">hello@yafinc.org</a><a href="contact.html">Ghana & beyond</a></div></div></div><div class="footer-bottom"><span>© 2026 Youth and Future Incorporated</span><span>Made for the leaders of tomorrow. <a href="https://evantradebuckman.com" target="_blank" rel="noopener noreferrer">Evantra De Buckman Ventures</a></span></div></div>`;
}
const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  links.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }),
  );
}
