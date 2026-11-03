(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  $("name").textContent = S.name;
  $("tagline").textContent = S.tagline;
  $("location").textContent = S.location ? "📍 " + S.location : "";
  $("year").textContent = new Date().getFullYear();
  $("all-repos").href = "https://github.com/" + S.github + "?tab=repositories";

  S.links.forEach(function (l) {
    $("links").appendChild(el("a", { href: l.url, rel: "me noopener", text: l.label }));
  });

  function itemCard(w) {
    var kids = [
      el("h3", { text: w.title }),
      el("p", { text: w.blurb }),
      el("div", { class: "meta" }, [el("span", { class: "tag", text: w.where })]),
    ];
    var card = el("a", { class: "card", href: w.url, rel: "noopener" }, kids);
    if (w.image) {
      card.classList.add("with-cover");
      card.insertBefore(el("img", { class: "cover", src: w.image, alt: w.alt || "", loading: "lazy", width: "400", height: "600" }), card.firstChild);
      var body = el("div", { class: "body" }, kids);
      card.appendChild(body);
    }
    if (!w.extra) return card;
    var wrap = el("div", { class: "card-group" }, [card]);
    var row = el("div", { class: "chips" });
    w.extra.forEach(function (x) {
      row.appendChild(el("a", { href: x.url, rel: "noopener", text: x.label }));
    });
    wrap.appendChild(row);
    return wrap;
  }
  S.games.forEach(function (g) { $("games").appendChild(itemCard(g)); });
  S.writing.forEach(function (w) { $("writing").appendChild(itemCard(w)); });

  function repoCard(r) {
    var meta = el("div", { class: "meta" });
    if (r.language) meta.appendChild(el("span", { text: r.language }));
    if (r.stargazers_count) meta.appendChild(el("span", { text: "★ " + r.stargazers_count }));
    var card = el("a", { class: "card", href: r.html_url, rel: "noopener" }, [
      el("h3", { text: r.name }),
      el("p", { text: r.description || "" }),
      meta,
    ]);
    var im = (S.projectImages || {})[r.name];
    if (im) {
      var thumb;
      if (im.video) {
        thumb = el("video", { class: "thumb", src: im.video, poster: im.src, muted: "", loop: "", autoplay: "", playsinline: "", preload: "none", "aria-label": im.alt || "" });
        thumb.muted = true;
      } else {
        thumb = el("img", { class: "thumb", src: im.src, alt: im.alt || "", loading: "lazy", width: "800", height: "400" });
      }
      card.classList.add("with-thumb");
      card.insertBefore(thumb, card.firstChild);
    }
    return card;
  }

  var box = $("projects");
  fetch("https://api.github.com/users/" + S.github + "/repos?per_page=100&sort=pushed")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (repos) {
      var byName = {};
      repos.forEach(function (r) { byName[r.name] = r; });
      var picked = S.featured.map(function (n) { return byName[n]; }).filter(Boolean);
      var rest = repos.filter(function (r) {
        return !r.fork && !r.archived && r.name !== S.github + "-bio" && picked.indexOf(r) < 0;
      });
      var list = picked.concat(rest).slice(0, S.maxRepos);
      box.textContent = "";
      list.forEach(function (r) { box.appendChild(repoCard(r)); });
    })
    .catch(function () {
      box.textContent = "";
      box.appendChild(el("p", { class: "muted", text: "Couldn't load projects, see them on GitHub instead." }));
    });
})();
