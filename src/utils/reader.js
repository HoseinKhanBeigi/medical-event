(window.KSR_webpackjsonp = window.KSR_webpackjsonp || []).push([
  [64],
  {
    "+DSo": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return s;
        });
      var r = { zero: [0], one: [1], two: [2], few: [3], many: [], other: [] },
        a = /\{\{\{\s*(\w+)\s*\}\}\}/g,
        o = /\{\{\s*(\w+)\s*\}\}/g,
        i = function(e, t) {
          return e.split(".").reduce(function(e, t) {
            var n = typeof e;
            return "function" === n || ("object" === n && !!e) ? e[t] : e;
          }, t);
        },
        c = function(e) {
          var t = e.split(".");
          return t[t.length - 1]
            .replace(/_/g, " ")
            .replace(/(\w+)/g, function(e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            });
        },
        u = function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a = e.locale,
            o = e.defaultLocale,
            c = e.translations || {},
            u = i(t, c[a]) || n.default;
          return (
            void 0 === u && (u = i(t, c[o])),
            "object" == typeof u &&
              (u = (function(e, t) {
                var n,
                  a = parseInt(t.count, 10);
                return (
                  "number" != typeof a ||
                    isNaN(a) ||
                    (0 ===
                      (n = Object.keys(r).filter(function(e) {
                        if (-1 !== r[e].indexOf(a)) return e;
                      })).length &&
                      (n = "other")),
                  e[n]
                );
              })(u, n)),
            u
          );
        },
        s = function(e) {
          return !!u(window.I18n, e);
        };
    },
    "/AD1": function(e, t, n) {
      "use strict";
      var r = n("60hy"),
        a = Object(r.b)(window.current_project);
      (window.current_project = a), (t.a = a);
    },
    "/IHD": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return c;
        });
      var r = n("xk4V"),
        a = n.n(r),
        o = function() {
          var e;
          return (e = []).concat
            .apply(e, arguments)
            .filter(Boolean)
            .join(" ");
        },
        i = function() {
          return a()()
            .split("-")
            .join("");
        },
        c = function(e, t) {
          return (e || []).concat(t);
        };
    },
    "0RKZ": function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "a", function() {
          return r;
        });
        var r = function(t) {
          if (t)
            return window.btoa ? window.btoa(t) : e.from(t).toString("base64");
        };
      }.call(this, n("tjlA").Buffer));
    },
    "0VSk": function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("XM0S"),
        a =
          "undefined" != typeof window ? (window.I18n = window.I18n || {}) : {},
        o = !1;
      try {
        o = 1 === parseInt(localStorage.getItem("i18n_debug"), 10);
      } catch (e) {}
      (a.t = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return r.a.apply(
          void 0,
          [
            {
              translations: a.translations,
              locale: a.locale,
              defaultLocale: a.default_locale,
              debug: o
            }
          ].concat(t)
        );
      }),
        (t.default = a);
    },
    "1OuE": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return j;
      }),
        n.d(t, "a", function() {
          return E;
        }),
        n.d(t, "b", function() {
          return k;
        });
      var r = n("cPJV"),
        a = n.n(r),
        o = n("2hq0"),
        i = n("bgw5"),
        c = n.n(i),
        u = n("Us+F"),
        s = n.n(u),
        l = n("/S0t"),
        d = n.n(l),
        p = n("LKA2"),
        f = n.n(p),
        m = n("uAXs"),
        h = n.n(m),
        b = n("hmb4"),
        g = n.n(b),
        v = n("QPlQ"),
        y = n.n(v),
        w = { de: c.a, en: s.a, es: d.a, fr: f.a, ja: h.a, it: g.a, zh: y.a },
        _ = {
          "MMM YYYY": {
            de: "MMM YYYY",
            en: "MMM YYYY",
            es: "MMM YYYY",
            fr: "MMM YYYY",
            it: "MMM YYYY",
            ja: "YYYY年 MMM",
            zh: "MMM YYYY"
          },
          LTS: {
            de: "HH:mm:ss",
            en: "h:mm:ss A",
            es: "H:mm:ss",
            fr: "HH:mm:ss",
            it: "HH:mm:ss",
            ja: "HH:mm:ss",
            zh: "h:mm:ss aa"
          },
          LT: {
            de: "HH:mm",
            en: "h:mm A",
            es: "H:mm",
            fr: "HH:mm",
            it: "HH:mm",
            ja: "HH:mm",
            zh: "h:mm aa"
          },
          L: {
            de: "DD.MM.YYYY",
            en: "MM/DD/YYYY",
            es: "DD/MM/YYYY",
            fr: "DD/MM/YYYY",
            it: "DD/MM/YYYY",
            ja: "YYYY/MM/DD",
            zh: "MM/DD/YYYY"
          },
          l: {
            de: "D.M.YYYY",
            en: "M/D/YYYY",
            es: "D/M/YYYY",
            fr: "D/M/YYYY",
            it: "D/M/YYYY",
            ja: "YYYY/MM/DD",
            zh: "MM/DD/YYYY"
          },
          "l LT": {
            de: "D.M.YYYY HH:mm",
            en: "M/D/YYYY h:mm A",
            es: "D/M/YYYY HH:mm",
            fr: "D/M/YYYY HH:mm",
            it: "D/M/YYYY HH:mm",
            ja: "YYYY/MM/DD HH:mm",
            zh: "MM/DD/YYYY h:mm aa"
          },
          LL: {
            de: "D. MMMM YYYY",
            en: "MMMM D, YYYY",
            es: "D [de] MMMM [de] YYYY",
            fr: "D MMMM YYYY",
            it: "D MMMM YYYY",
            ja: "YYYY年M月D日",
            zh: "MMMM D YYYY"
          },
          ll: {
            de: "D. MMM YYYY",
            en: "MMM D YYYY",
            es: "D [de] MMM [de] YYYY",
            fr: "D MMM YYYY",
            it: "D MMM YYYY",
            ja: "YYYY年M月D日",
            zh: "MMM D YYYY"
          },
          LLL: {
            de: "D. MMMM YYYY HH:mm",
            en: "MMMM D, YYYY h:mm A",
            es: "D [de] MMMM [de] YYYY H:mm",
            fr: "D MMMM YYYY HH:mm",
            it: "D MMMM YYYY HH:mm",
            ja: "YYYY年M月D日 のHH:mm",
            zh: "MMMM D YYYY h:mm aa"
          },
          lll: {
            de: "D. MMM YYYY HH:mm",
            en: "MMM D, YYYY h:mm A",
            es: "D [de] MMM [de] YYYY H:mm",
            fr: "D MMM YYYY HH:mm",
            it: "D MMM YYYY HH:mm",
            ja: "YYYY年M月D日 のHH:mm",
            zh: "MMM D, YYYY h:mm A"
          },
          LLLL: {
            de: "dddd, D. MMMM YYYY HH:mm",
            en: "dddd, MMMM D YYYY h:mm A",
            es: "dddd, D [de] MMMM [de] YYYY H:mm",
            fr: "dddd D MMMM YYYY HH:mm",
            it: "dddd D MMMM YYYY HH:mm",
            ja: "YYYY年M月D日 (dddd) のHH:mm",
            zh: "dddd, MMMM D YYYY h:mm aa"
          },
          llll: {
            de: "ddd, D. MMMM YYYY HH:mm",
            en: "ddd, MMMM D YYYY h:mm A",
            es: "ddd, D [de] MMMM [de] YYYY H:mm",
            fr: "ddd D MMMM YYYY HH:mm",
            it: "ddd D MMMM YYYY HH:mm",
            ja: "YYYY年M月D日 (ddd) のHH:mm",
            zh: "ddd, MMMM D YYYY h:mm A"
          }
        },
        O = Object.keys(_).map(function(e) {
          return "".concat(e, " z");
        }),
        j = function(e, t, n) {
          return (function(e, t, n) {
            if (O.indexOf(t) >= 0) {
              var r = _[t.replace(/ z$/, "")][e],
                i = a()(n, r, { locale: w[e] });
              return "".concat(i, " ").concat(Object(o.a)(n));
            }
            return a()(n, t, { locale: w[e] });
          })(
            e,
            (function(e, t) {
              return Object.keys(_).indexOf(t) >= 0 ? _[t][e] : t;
            })(e, t),
            n
          );
        },
        E = function(e, t) {
          return j(window.I18n.locale || window.I18n.default_locale, e, t);
        },
        k = function(e, t) {
          return E(e, 1e3 * t);
        };
    },
    "2UXI": function(e, t, n) {
      "use strict";
      var r = n("rePB"),
        a = n("vpQ4"),
        o = n("+2Rf"),
        i = n.n(o),
        c = n("S1QU"),
        u = n("CjI4"),
        s = n("/AD1"),
        l = n("WjF9"),
        d = n("0VSk"),
        p = window.device_attributes || {},
        f = n("aNAf");
      n("jX8l");
      "true" === KSR.store.getItem("koala_debug") && (window.koala_debug = !0);
      var m = function() {
          var e,
            t,
            n,
            o = navigator.userAgent,
            i = { is_ua_bot: p.isBot },
            c = ((e = {
              $os: p.osName,
              os_version: p.osVersion,
              $browser: p.browserName,
              browser_version: p.browserVersion,
              $referrer: document.referrer,
              $referring_domain: ((t = document.referrer),
              (n = t.split("/")),
              n.length >= 3 ? n[2] : ""),
              $device: p.deviceName,
              user_agent: o
            }),
            Object.keys(e).reduce(function(t, n) {
              var o = e[n];
              return "string" == typeof o && 0 != o.length
                ? Object(a.a)({}, t, Object(r.a)({}, n, o))
                : t;
            }, {})),
            u = { $screen_height: screen.height, $screen_width: screen.width };
          return Object(a.a)({}, c, u, i);
        },
        h = function(e, t) {
          var n = {
              event: e,
              properties: Object(a.a)(
                {},
                m(),
                { distinct_id: Object(f.a)() },
                t
              )
            },
            r = JSON.stringify(n);
          return (
            window.koala_debug &&
              (window.console.log("KOALA REQUEST:"), window.console.log(n)),
            i.a.ajax({
              type: "POST",
              url: koala_endpoint,
              data: r,
              contentType: "text/plain; charset=UTF-8"
            })
          );
        },
        b = h,
        g = function(e, t, n) {
          i()(e).click(function(e) {
            var r,
              a = this.href,
              o =
                2 === e.which ||
                e.metaKey ||
                e.ctrlKey ||
                "_blank" === this.target;
            r = "function" == typeof n ? n(this) : n;
            var i = new Promise(function(e) {
              window.setTimeout(e, 300), h(t, r).then(e);
            });
            o ||
              (i.then(function() {
                window.location = a;
              }),
              e.preventDefault());
          });
        },
        v = n("MgNI"),
        y = n("o3IG"),
        w = n("yQm5"),
        _ = n.n(w),
        O = n("c6/r");
      n.d(t, "b", function() {
        return D;
      }),
        n.d(t, "c", function() {
          return A;
        }),
        n.d(t, "d", function() {
          return x;
        }),
        n.d(t, "a", function() {
          return R;
        });
      var j = function(e) {
          return 1e3 * e.valueOf();
        },
        E = function(e) {
          return e / 36e5;
        },
        k = function(e) {
          if (e && "function" == typeof e.get) {
            var t = Object(y.b)("ref_" + e.get("id"));
            if (t) return Object(O.a)(t).split("?")[0];
          }
          return !1;
        },
        S = v.maybe
          .fromNullable(Object(y.b)("user_analytics_properties"))
          .map(JSON.parse)
          .getOrElse({}),
        C = function(e) {
          var t = e.user,
            n = e.referrerCredit,
            r = e.ip,
            o = e.ipDatacenter,
            c = e.iosAppUUID,
            u = e.enabledFeatures,
            s = e.windowAndScreenData;
          return Object(a.a)(
            {},
            s,
            {
              referrer_credit: n,
              client_type: i()("body.native-app-request").length
                ? "native"
                : "web",
              client_platform: i()("body.ios").length
                ? "ios"
                : i()("body.android").length
                ? "android"
                : void 0,
              device_format: i()("body.phone").length
                ? "phone"
                : i()("body.tablet").length
                ? "tablet"
                : "desktop",
              apple_pay_capable: i()("body.apple-pay-capable").length > 0,
              android_pay_capable: i()("body.android-pay-capable").length > 0,
              ip_address: r || null,
              ip_datacenter: o || null,
              user_logged_in: void 0 !== t,
              user_chosen_currency: t ? t.data.chosen_currency : null,
              user_uid: t && "function" == typeof t.get ? t.get("id") : null,
              iphone_uuid: c || void 0,
              enabled_features: Object.keys(u || {}),
              browser_language: d.default.browser_language,
              chosen_language: d.default.chosen_language,
              calculated_language: d.default.calculated_language,
              display_language: d.default.display_language
            },
            S,
            { mp_lib: "js" }
          );
        },
        Y = function() {
          return {
            window_inner_width: window.innerWidth,
            window_inner_height: window.innerHeight,
            screen_width: screen.width,
            screen_height: screen.height,
            screen_avail_width: screen.availWidth,
            screen_avail_height: screen.availHeight
          };
        },
        D = function(e, t) {
          return t
            ? Object.keys(t).reduce(function(n, o) {
                return Object(
                  a.a
                )({}, n, Object(r.a)({}, "".concat(e, "_").concat(o), t[o]));
              }, {})
            : {};
        },
        I = function(e) {
          var t = e.user,
            n = e.project,
            r = e.currentTime,
            o = void 0 === r ? new Date() : r;
          if (!n || "string" == typeof n) return {};
          var i,
            c = "function" == typeof n.get ? n.get() : n,
            u = v.maybe
              .fromNullable(c.deadline)
              .map(j)
              .getOrElse(void 0),
            s = E(u - o) > 0 ? E(u - o) : 0,
            l = c.pledged / c.goal,
            d = {
              backers_count: c.backers_count,
              country: c.country,
              currency: c.currency,
              deadline: c.deadline,
              goal: c.goal,
              last_update_published_at: c.last_update_published_at,
              launched_at: c.launched_at,
              name: c.name,
              pid: c.id,
              pledged: c.pledged,
              profile_state: c.profile.state,
              state: c.state,
              updates_count: c.updates_count,
              hours_remaining: s,
              percent_raised: l,
              has_video: null !== c.video,
              duration: ((i =
                v.maybe
                  .fromNullable(c.launched_at)
                  .map(j)
                  .getOrElse(0) -
                v.maybe
                  .fromNullable(c.launched_at)
                  .map(j)
                  .getOrElse(0)),
              E(i) / 24),
              rewards_count: c.rewards ? c.rewards.count : void 0,
              location: c.location ? c.location.name : void 0,
              category_name: c.category ? c.category.name : void 0,
              parent_category: v.maybe
                .fromNullable(c.category)
                .map(function(e) {
                  return e.parent ? e.parent.name : e.name;
                })
                .getOrElse(void 0)
            },
            p = D("project", d),
            f = {
              user_is_backer: c.is_backing,
              user_has_starred: c.is_starred,
              user_is_project_creator:
                t && "function" == typeof t.get && t.get("id") === c.creator.id
            },
            m = {
              display_currency: c.current_currency,
              display_exchange_rate: c.fx_rate
            };
          return Object(a.a)({}, p, f, m);
        },
        A = function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = i()("body").attr("id"),
            o = _()().query(!0).ref,
            d = document.URL,
            p = l.a || window.current_user,
            f = c.a,
            m = u.a,
            h = window.current_ip,
            g = window.current_ip_datacenter,
            v = window.ios_app_uuid,
            y = window.enabled_features,
            w = n.withoutCurrentProject ? null : s.a,
            O =
              window.current_variants &&
              "string" != typeof window.current_variants
                ? { current_variants: window.current_variants }
                : {},
            j = k(w),
            E = Object(a.a)(
              { page_id: r, ref_tag: o, landing_page_url: d },
              I({ user: p, project: w, currentTime: n.currentTime }),
              (function(e) {
                if (
                  !e ||
                  "string" == typeof e ||
                  ("function" == typeof e.get &&
                    (!e.get("amount") || !e.get("reward")))
                )
                  return {};
                var t = "function" == typeof e.get ? e.get() : e,
                  n = {
                    amount: t.amount,
                    shipping_amount: t.shipping_amount,
                    location_id: t.location_id
                  },
                  r = t.reward,
                  o = r.estimated_delivery_on,
                  i = r.id,
                  c = r.minimum,
                  u = r.reward,
                  s = r.shipping_preference,
                  l = r.shipping_enabled,
                  d = D("reward", {
                    estimated_delivery_on: o,
                    id: i,
                    minimum: c,
                    reward: u,
                    shipping_preference: s,
                    shipping_enabled: l
                  }),
                  p = Object(a.a)({}, n, d);
                return D("checkout", p);
              })(f),
              O,
              C({
                user: p,
                location: m,
                referrerCredit: j,
                ip: h,
                ipDatacenter: g,
                iosAppUUID: v,
                enabledFeatures: y,
                windowAndScreenData: Y()
              }),
              t
            );
          b(e, E);
        },
        x = function(e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o = l.a,
            c = r.withoutCurrentProject ? null : s.a,
            d = u.a,
            p = window.current_ip,
            f = window.current_ip_datacenter,
            m = window.ios_app_uuid,
            h = window.enabled_features,
            b = k(c);
          window.setTimeout(function() {
            g(e, t, function(e) {
              var t = i()(e);
              return Object(
                a.a
              )({ selected_link: t.attr("data-original_text") ? t.data("original_text") : i.a.trim(t.text()), page_id: i()("body").attr("id") }, I({ user: o, project: c }), C({ user: o, location: d, referrerCredit: b, ip: p, ipDatacenter: f, iosAppUUID: m, enabledFeatures: h, windowAndScreenData: Y() }), n);
            });
          }, 1);
        },
        R = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return new Promise(function(e) {
            setTimeout(function() {
              A.apply(void 0, t), e();
            }, 300);
          });
        };
      window && (window.track = A);
    },
    "2hq0": function(e, t, n) {
      "use strict";
      var r = n("cPJV"),
        a = n.n(r),
        o = n("OBTA"),
        i = n.n(o),
        c = n("fupu"),
        u = n.n(c),
        s = function(e) {
          return parseInt(a()(e, "ZZ"), 10);
        };
      n.d(t, "a", function() {
        return p;
      });
      var l = {
          "+02:00T": "CEST",
          "+01:00F": "CET",
          "+01:00T": "BST",
          "-00:00F": "GMT",
          "-03:00T": "ADT",
          "-04:00F": "AST",
          "-04:00T": "EDT",
          "-05:00F": "EST",
          "-05:00T": "CDT",
          "-06:00F": "CST",
          "-06:00T": "MDT",
          "-07:00F": "MST",
          "-07:00T": "PDT",
          "-08:00F": "PST",
          "-08:00T": "AKDT",
          "-09:00F": "AKST",
          "-09:00T": "HADT",
          "-10:00F": "HAST",
          "+11:00T": "AEDT",
          "+10:00F": "AEST",
          "+10:30T": "ACDT",
          "+09:30F": "ACST",
          "+09:00T": "AWDT",
          "+08:00F": "AWST"
        },
        d = function(e) {
          var t =
            a()(e, "Z") +
            ((function(e) {
              if (!u()(new Date(e))) throw "input is invalid";
              var t = s(e),
                n = s(i()(new Date(e), 0)),
                r = s(i()(new Date(e), 5));
              return t > n || t > r;
            })(e)
              ? "T"
              : "F");
          if (void 0 !== l[t]) return l[t];
        },
        p = function(e) {
          return (
            (function(e) {
              var t = e.toString().match(/\(([a-z]{3,4})\)/i);
              if (t) return t[1].toUpperCase();
            })(e) ||
            d(e) ||
            a()(e, "UTC Z")
          );
        };
    },
    "2n5v": function(e, t, n) {
      "use strict";
      var r = n("Wp1a");
      n.d(t, "a", function() {
        return r.a;
      });
      n("cDWt");
      var a = n("IVac");
      n.d(t, "d", function() {
        return a.d;
      }),
        n.d(t, "c", function() {
          return a.c;
        }),
        n.d(t, "e", function() {
          return a.h;
        }),
        n.d(t, "f", function() {
          return a.j;
        }),
        n.d(t, "i", function() {
          return a.n;
        });
      var o = n("w/TO");
      n.d(t, "b", function() {
        return o.a;
      }),
        n.d(t, "g", function() {
          return o.b;
        }),
        n.d(t, "h", function() {
          return o.c;
        });
    },
    "4+Ta": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return s;
        });
      var r = n("Ff2n"),
        a = n("vpQ4"),
        o = n("9jZ4"),
        i = n("/IHD"),
        c = function(e) {
          return function(t) {
            return function() {
              var n = t.apply(void 0, arguments);
              return Object(a.a)({}, n, { namespace: e });
            };
          };
        },
        u = function(e) {
          return function(t) {
            return Object(o.e)(c(e), t);
          };
        },
        s = function(e, t, n) {
          return function() {
            var o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Object(i.c)(),
              c =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              s = c.Component,
              l = void 0 === s ? e : s,
              d = c.reducer,
              p = void 0 === d ? t : d,
              f = c.actions,
              m = void 0 === f ? n : f,
              h = (function(e) {
                return function(t, n) {
                  return function(r, a) {
                    var o = void 0 === r;
                    return (a && a.namespace) === e || o ? t(r, a, n) : r;
                  };
                };
              })(o),
              b = (function(e) {
                return function(t) {
                  return function(n) {
                    return t(Object(a.a)({}, n, { namespace: e }));
                  };
                };
              })(o),
              g = u(o)(m);
            return {
              namespace: o,
              actions: g,
              reducer: h(p, g),
              Component: function(e, t) {
                var n = e.dispatch,
                  o = Object(r.a)(e, ["dispatch"]);
                return l(Object(a.a)({ dispatch: b(n) }, o), t);
              }
            };
          };
        };
    },
    "4LGs": function(e, t, n) {
      "use strict";
      function r(e, t) {
        var n = "(?:".concat(Object.keys(e).join("|"), ")"),
          r = RegExp(n),
          a = RegExp(n, "g");
        return r.test(t)
          ? t.replace(a, function(t) {
              return e[t];
            })
          : t;
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "4fOl": function(e, t, n) {
      "use strict";
      var r = n("wx14"),
        a = n("KQm4"),
        o = n("Ff2n"),
        i = n("q1tI"),
        c = n.n(i),
        u = n("/IHD"),
        s = n("I8yn"),
        l = n("9jZ4"),
        d = n("SmhT"),
        p = n("LtMG"),
        f = n("l9zw"),
        m = n("94td"),
        h = n("Qm2c"),
        b = n("4+Ta"),
        g = n("bWEs"),
        v = n("vpQ4"),
        y = n("0fse"),
        w = n("udTa"),
        _ = n("2UXI"),
        O = n("Tge+"),
        j = Object(w.a)(0, function() {
          return Promise.resolve();
        }),
        E = function(e) {
          Object(_.c)("Opened Select", { context: e });
        },
        k = function(e) {
          Object(_.c)("Closed Select", { context: e });
        },
        S = function(e, t) {
          Object(_.c)("Selected Item", { context: e, id: t });
        };
      n.d(t, "b", function() {
        return Y;
      }),
        n.d(t, "a", function() {
          return D;
        });
      var C = function() {},
        Y = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Object(u.c)(),
            t = Object(b.b)(e)(g);
          return {
            namespace: e,
            actions: t,
            reducer: (function(e, t) {
              return function(n) {
                return function(r, a) {
                  if (a.namespace && a.namespace !== e) return r;
                  switch (a.type) {
                    case "TOGGLE_SELECT":
                      var o = r.isOpen ? k : E;
                      return Object(y.f)(
                        Object(v.a)({}, r, {
                          isOpen: !r.isOpen,
                          highlightedIndex: r.currentIndex
                        }),
                        y.a.run(o, { args: [n] })
                      );
                    case "CLOSE_SELECT":
                      return Object(y.f)(
                        Object(v.a)({}, r, {
                          isOpen: !1,
                          isKeySelectionEngaged: !1
                        }),
                        y.a.run(k, { args: [n] })
                      );
                    case "ON_BLUR":
                      return Object(y.f)(
                        Object(v.a)({}, r, { isKeySelectionEngaged: !1 }),
                        y.a.run(j, { successActionCreator: t.closeSelect })
                      );
                    case "CHANGE_SELECTED_INDEX":
                      var i = Object(O.b)(r, a.newSelectedIndex),
                        c =
                          i.currentIndex !== r.currentIndex
                            ? y.a.run(S, { args: [n, a.trackingId] })
                            : y.a.none;
                      return Object(y.f)(i, c);
                    case "ON_KEYDOWN":
                      return Object(O.c)(r, a.keyCode, a.options);
                    case "ON_LIST_SCROLL":
                      return Object(v.a)({}, r, { isKeySelectionEngaged: !1 });
                    case "CHANGE_HIGHLIGHTED_INDEX":
                      return Object(v.a)({}, r, {
                        highlightedIndex: a.newHighlightedIndex
                      });
                    case "NOOP":
                    default:
                      return r;
                  }
                };
              };
            })(e, t),
            Component: A(t)
          };
        },
        D = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.selectedIndex,
            n = void 0 === t ? null : t,
            r = e.isOpen,
            a = void 0 !== r && r,
            o = e.isKeySelectionEngaged;
          return {
            isOpen: a,
            isKeySelectionEngaged: void 0 !== o && o,
            currentIndex: n,
            highlightedIndex: n
          };
        },
        I = {
          "x-small": {
            heightSize: "h5",
            typeSize: "body-100",
            yPaddingClass: "py1",
            xPaddingClass: "px2 px3-sm",
            labelClasses: { atoms: ["pb1", "atomic-text-label"] }
          },
          small: {
            heightSize: "h7",
            typeSize: "body-100",
            yPaddingClass: "py1",
            xPaddingClass: "px2 px3-sm",
            labelClasses: {
              atoms: ["mb2"],
              size: "body-100",
              weight: "medium",
              color: "soft-black"
            }
          },
          medium: {
            heightSize: "h9",
            typeSize: "subhead-300",
            yPaddingClass: "py2",
            xPaddingClass: "px3",
            labelClasses: {
              atoms: ["mb2"],
              size: "body-100",
              weight: "medium",
              color: "soft-black"
            }
          }
        },
        A = function(e) {
          return function(t) {
            var n = t.state,
              r = t.dispatch,
              i = Object(o.a)(t, ["state", "dispatch"]);
            return c.a.createElement(x, {
              state: n,
              onOptionSelect: function(t, n, a, o) {
                o.stopPropagation(),
                  r(e.changeSelectedIndex(t, a)),
                  r(e.selectedValueUpdated(n));
              },
              onOptionHover: function(t) {
                r(e.changeHighlightedIndex(t));
              },
              onBlur: function(t) {
                setTimeout(
                  function(t, n, r) {
                    n.contains(r.activeElement) || t(e.onBlur());
                  }.bind(null, r, t.currentTarget, document),
                  0
                );
              },
              onDropdownContainerClick: function(t) {
                t.stopPropagation(), r(e.toggleSelect());
              },
              onKeyDown: function(t, n, o) {
                var i = o.which,
                  c = [d.c, d.l, d.d, d.b, d.n].concat(Object(a.a)(d.h));
                ((i === d.m && t) || c.includes(i)) &&
                  (o.preventDefault(), r(e.onKeyDown(i, n)));
              },
              onListScroll: function() {
                r(e.onListScroll());
              },
              hasErrors: i.hasErrors,
              options: i.options,
              titleString: i.titleString,
              placeholder: i.placeholder,
              size: i.size,
              toLabel: i.toLabel,
              toValue: i.toValue,
              theme: i.theme,
              atoms: i.atoms
            });
          };
        },
        x = function(e) {
          var t = e.state,
            n = e.onOptionSelect,
            r = e.onOptionHover,
            a = e.onBlur,
            o = e.onDropdownContainerClick,
            i = e.onKeyDown,
            d = e.onListScroll,
            p = e.hasErrors,
            m = void 0 !== p && p,
            b = e.options,
            g = void 0 === b ? [] : b,
            v = e.titleString,
            y = void 0 === v ? "" : v,
            w = e.placeholder,
            _ = void 0 === w ? "" : w,
            O = e.theme,
            j = void 0 === O ? h.a : O,
            E = e.toLabel,
            k = void 0 === E ? Object(l.h)("label") : E,
            S = e.toValue,
            C = void 0 === S ? Object(l.h)("value") : S,
            Y = e.size,
            D = void 0 === Y ? "medium" : Y,
            A = e.atoms,
            x = void 0 === A ? [] : A,
            N = t.isOpen,
            P = t.currentIndex,
            L = I[D],
            T = L.heightSize,
            H = L.labelClasses,
            F = L.typeSize,
            K = L.yPaddingClass,
            U = L.xPaddingClass,
            z = Object(u.a)(
              "absolute",
              "w100p",
              "border",
              "p1",
              "bg-white",
              "mt1",
              "mb10",
              "rounded",
              "z-dropdown-3",
              "scroll-y",
              "max-h25",
              F,
              x,
              "border-".concat(j["primary-light"]),
              !N && "visually-hide"
            ),
            B = null !== P ? g[P] : null;
          return c.a.createElement(
            "div",
            { className: "soft-black" },
            y &&
              c.a.createElement(
                f.c,
                {
                  type: H.size,
                  weight: H.weight,
                  color: H.color,
                  atoms: H.atoms,
                  "aria-hidden": "true"
                },
                y
              ),
            c.a.createElement(
              "div",
              {
                role: "listbox",
                "aria-labelledby": "custom-select-heading-label",
                onBlur: a,
                onKeyDown: Object(s.a)(i, N, g),
                className: "relative w100p pointer input-keyboard-focusable-".concat(
                  j["primary-light"]
                )
              },
              c.a.createElement(R, {
                onDropdownContainerClick: o,
                label: B ? k(B) : _,
                color: B ? "soft-black" : "dark-grey-500",
                hasErrors: m,
                heightSize: T,
                typeSize: F,
                yPaddingClass: K,
                xPaddingClasses: U,
                theme: j
              }),
              c.a.createElement(
                "ul",
                { onScroll: d, className: z, role: "presentation" },
                M({
                  state: t,
                  options: g,
                  isOpen: N,
                  onOptionSelect: n,
                  onOptionHover: r,
                  toValue: C,
                  toLabel: k,
                  theme: j,
                  typeSize: F,
                  yPaddingClass: K
                })
              )
            )
          );
        },
        R = function(e) {
          var t = e.color,
            n = e.hasErrors,
            r = e.heightSize,
            a = e.label,
            o = e.onDropdownContainerClick,
            i = e.theme,
            s = e.typeSize,
            l = e.yPaddingClass,
            d = e.xPaddingClasses,
            h = Object(u.a)([
              "border",
              n ? "border-red-400" : "border-grey-500",
              "hover-border-".concat(i["primary-light"]),
              "transition-all",
              "rounded",
              l,
              d,
              "bg-white flex",
              "items-center",
              r,
              "input-keyboard-focusable-".concat(i["primary-light"])
            ]);
          return c.a.createElement(
            "div",
            {
              className: h,
              onClick: o,
              "aria-hidden": "true",
              "aria-label": Object(m.b)(
                "components.custom_select.select_an_option"
              ),
              tabIndex: "0"
            },
            c.a.createElement(
              f.e,
              {
                id: "custom-select-heading-label",
                type: s,
                atoms: ["grow-1", "text-truncate", "pr1", "book", t]
              },
              a
            ),
            c.a.createElement(p.f, {
              name: "delta-down",
              size: "small",
              atoms: ["flex-noshrink"]
            })
          );
        },
        M = function(e) {
          var t = e.state,
            n = e.options,
            a = e.onOptionSelect,
            o = e.onOptionHover,
            i = e.toValue,
            u = e.toLabel,
            l = e.theme,
            d = e.typeSize,
            p = e.yPaddingClass,
            f = e.isOpen;
          return n.map(function(e, n) {
            var m = t.currentIndex === n,
              h = t.highlightedIndex === n;
            return c.a.createElement(
              N,
              Object(r.a)(
                {
                  onOptionSelect: Object(s.a)(a, n, e, i(e)),
                  onOptionHover: Object(s.a)(o, n),
                  isKeySelectionEngaged: t.isKeySelectionEngaged,
                  key: n
                },
                {
                  option: e,
                  isCurrent: m,
                  isHighlighted: h,
                  isOpen: f,
                  toLabel: u,
                  theme: l,
                  typeSize: d,
                  yPaddingClass: p
                }
              )
            );
          });
        },
        N = function(e) {
          var t = e.option,
            n = e.onOptionSelect,
            r = e.onOptionHover,
            a = e.isKeySelectionEngaged,
            o = e.isCurrent,
            i = e.isHighlighted,
            s = e.isOpen,
            l = e.toLabel,
            d = e.theme,
            m = e.typeSize,
            h = e.yPaddingClass,
            b = Object(u.a)(
              ["px2 flex items-center transition-all lh3 soft-black"],
              i ? ["bg-grey-400"] : [],
              h
            );
          return c.a.createElement(
            "li",
            {
              role: "option",
              tabIndex: s ? "0" : "-1",
              "aria-selected": o,
              onClick: n,
              onMouseEnter: r,
              className: b,
              onKeyDown: C,
              onFocus: C,
              ref: function(e) {
                e &&
                  e.parentElement &&
                  i &&
                  a &&
                  (e.parentElement.scrollTop =
                    e.offsetTop +
                    e.offsetHeight -
                    e.parentElement.offsetHeight);
              }
            },
            c.a.createElement(
              f.e,
              { id: "custom-select-heading-label", type: m, atoms: ["mr2"] },
              l(t)
            ),
            o &&
              c.a.createElement(
                "span",
                {
                  className: "circle flex-noshrink h3 w3 bg-".concat(
                    d["primary-accent"],
                    " inline-flex justify-center items-center"
                  )
                },
                c.a.createElement(p.f, {
                  name: "check",
                  size: "9",
                  atoms: ["relative", "fill-white"]
                })
              )
          );
        };
    },
    "5igC": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return u;
        });
      var r = n("wx14"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("HU7/"),
        c = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            r = e.children,
            a = e.color,
            i = void 0 === a ? "blue" : a,
            c = e.disabled,
            s = e.href,
            l = e.onClick,
            d = e.onMouseDown,
            p = e.target,
            f = e.type,
            m = e.tooltip,
            h = e.tabIndex,
            b = e.hover,
            g = void 0 === b || b,
            v = n
              .concat(i && g ? ["link-".concat(i)] : [i])
              .concat(s ? [] : ["p0"]);
          return o.a.createElement(u, {
            tabIndex: h,
            atoms: v,
            children: r,
            color: i,
            disabled: c,
            href: s,
            onClick: l,
            onMouseDown: d,
            target: p,
            type: f,
            tooltip: m,
            hover: g
          });
        },
        u = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            a = e.children,
            c = e.disabled,
            u = void 0 !== c && c,
            s = e.href,
            l = e.onClick,
            d = e.onFocus,
            p = e.onMouseDown,
            f = e.target,
            m = e.type,
            h = void 0 === m ? "button" : m,
            b = e.tooltip,
            g = e.tabIndex;
          return o.a.createElement(i.b, null, function(e) {
            return (function(e) {
              var t = { onClick: l, onFocus: d, onMouseDown: p, tabIndex: g };
              return s
                ? o.a.createElement(
                    "a",
                    Object(r.a)(
                      {
                        target: f,
                        href: s,
                        className: n.concat(e.link.atoms).join(" "),
                        "data-tooltip": b
                      },
                      t
                    ),
                    a
                  )
                : o.a.createElement(
                    "button",
                    Object(r.a)(
                      {
                        disabled: u,
                        type: h,
                        className: n.concat(e.form.atoms).join(" "),
                        "data-tooltip": b
                      },
                      t
                    ),
                    a
                  );
            })(e);
          });
        };
    },
    "60hy": function(e, t, n) {
      "use strict";
      var r = n("MgNI"),
        a = n("K+Nk"),
        o = function(e, t) {
          return ((n = t),
          "string" == typeof n ? r.result.Ok(n) : r.result.Error(n))
            .chain(function(e) {
              return r.result.try(function() {
                return Object(a.a)(e);
              });
            })
            .map(e)
            .getOrElse(t);
          var n;
        },
        i = n("qcI4");
      n.d(t, "c", function() {
        return l;
      }),
        n.d(t, "b", function() {
          return d;
        }),
        n.d(t, "a", function() {
          return p;
        });
      var c = function(e) {
          return new i.c(e);
        },
        u = function(e) {
          return new i.e(e);
        },
        s = function(e) {
          return new i.f(e);
        },
        l = function(e) {
          return o(s, e);
        },
        d = function(e) {
          return o(u, e);
        },
        p = function(e) {
          return o(c, e);
        };
    },
    62: function(e, t, n) {
      n("bZMm"), n("55Il"), n("3Siy"), n("Wr5T"), (e.exports = n("NjHa"));
    },
    "6k9Z": function(e, t, n) {
      "use strict";
      var r = n("rePB"),
        a = n("wx14"),
        o = n("Ff2n"),
        i = n("q1tI"),
        c = n.n(i),
        u = n("4fOl"),
        s = n("o2X6"),
        l = n("4+Ta"),
        d = n("KQm4"),
        p = n("vpQ4"),
        f = n("pj8f"),
        m = n("0fse"),
        h = n("eEls"),
        b = n("udTa"),
        g = n("SOj7"),
        v = function(e, t, n) {
          return function(r, a) {
            if (a.namespace && a.namespace !== t) return r;
            switch (a.type) {
              case "ASYNC_LOAD_INIT":
                return y(r, {
                  populationQuery: n,
                  queryArgs: a.queryArgs,
                  namespace: a.namespace,
                  startTimer: e.startFetchTimer,
                  onLoadSuccess: e.onLoadSuccess,
                  onLoadFailure: e.onLoadFailure
                });
              case "ASYNC_LOAD_SUCCESS":
                return w(r);
              case "ASYNC_LOAD_FAIL":
                return _(r);
              case "ASYNC_START_TIMER":
                return E(r, a.namespace, a.queryArgs, e.timerExpired);
              case "ASYNC_TIMER_EXPIRED":
                return k(r, e.loadAsync, n, a.queryArgs);
              default:
                return r;
            }
          };
        },
        y = function(e, t) {
          var n = t.populationQuery,
            r = t.queryArgs,
            a = t.namespace,
            o = t.startTimer,
            i = t.onLoadSuccess,
            c = t.onLoadFailure;
          return Object(m.f)(
            Object(p.a)({}, e, { loadStatus: g.a }),
            m.a.list(
              [
                m.a.run(O, {
                  args: [
                    {
                      populationQuery: n,
                      queryArgs: r,
                      onLoadSuccess: i,
                      onLoadFailure: c
                    }
                  ],
                  successActionCreator: h.c,
                  failActionCreator: h.c
                }),
                m.a.action(o(a, r))
              ],
              { batch: !0 }
            )
          );
        },
        w = function(e) {
          return Object(p.a)({}, e, { loadStatus: g.b });
        },
        _ = function(e) {
          return Object(p.a)({}, e, { loadStatus: g.c });
        },
        O = function(e) {
          var t = e.populationQuery,
            n = e.queryArgs,
            r = e.onLoadSuccess,
            a = e.onLoadFailure;
          return t
            .apply(void 0, Object(d.a)(n))
            .then(function(e) {
              return e.errors && Promise.reject(e.errors), r(e.data);
            })
            .catch(function(e) {
              return (
                e.map(function(e) {
                  return f.a.notify(e);
                }),
                a(n)
              );
            });
        },
        j = function(e, t, n, r) {
          return Object(b.a)(r, function() {
            return e(t, n);
          })(t, n);
        },
        E = function(e, t, n, r) {
          return Object(m.f)(
            e,
            m.a.run(j, { args: [r, t, n, e.fetchTimeout] })
          );
        },
        k = function(e, t, n, r) {
          var a = e.loadStatus,
            o = e.currentFetchRetries + 1,
            i = e.maxFetchRetries < o;
          return a === g.b || i
            ? e
            : Object(m.f)(
                Object(p.a)({}, e, { currentFetchRetries: o }),
                m.a.action(t(n, r))
              );
        };
      n.d(t, "a", function() {
        return S;
      });
      var S = function(e) {
        return function(t) {
          var n,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "".concat(t, "_asyncSelect"),
            d = Object(u.b)(t),
            p = d.Component,
            f = d.reducer,
            m = Object(l.b)(t)(s);
          return {
            Component: function(e) {
              var t = e.state,
                n = e.dispatch,
                r = Object(o.a)(e, ["state", "dispatch"]);
              return c.a.createElement(
                p,
                Object(a.a)({ state: t, dispatch: n, size: "x-small" }, r)
              );
            },
            reducers: ((n = {}),
            Object(r.a)(n, "".concat(t, "-select"), f(i)),
            Object(r.a)(n, "".concat(t, "-async"), v(m, t, e)),
            n),
            actions: m,
            namespace: t
          };
        };
      };
    },
    "88ec": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        });
      var r = function(e) {
          return /^\/projects\/.+pledge\/new$/.test(e)
            ? "Reward Selection"
            : /^\/checkouts\/.+payments\/new$/.test(e)
            ? "Payments Page"
            : /^\/projects\/[^\/pledge|\/payments]/.test(e)
            ? "Project Page"
            : null;
        },
        a = function(e, t) {
          try {
            var n = e.responseJSON.data.errors,
              r = [];
            for (var a in n) r.push(n[a][0]);
            return r[0];
          } catch (e) {
            return t;
          }
        };
    },
    "94td": function(e, t, n) {
      "use strict";
      var r = n("XM0S"),
        a = n("vpQ4"),
        o = n("KQm4"),
        i = n("Ff2n"),
        c = n("1OyB"),
        u = n("vuIU"),
        s = n("md7G"),
        l = n("foSv"),
        d = n("Ji7U"),
        p = n("9jZ4"),
        f = n("q1tI"),
        m = n.n(f),
        h = n("+DSo"),
        b = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(u.a)(t, [
              {
                key: "shouldComponentUpdate",
                value: function(e) {
                  return !Object(p.i)(e, this.props);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.i18nKey,
                    n = e.i18nTag,
                    r = void 0 === n ? "span" : n,
                    c = Object(i.a)(e, ["i18nKey", "i18nTag"]),
                    u = this.props.atoms || [],
                    s = Object(h.c)(window.I18n, t, c);
                  void 0 === s &&
                    ((s = Object(h.d)(t)),
                    (u = u.concat(["translation_missing"])),
                    c.debug && window.console.log("I18n key is missing: ", t));
                  var l = s.split(h.b).reduce(function(e, t, n) {
                      var r = n % 2 == 0 ? t : c[t];
                      return e.concat([r]);
                    }, []),
                    d = u.length > 0 ? { className: u.join(" ") } : {};
                  return m.a.createElement.apply(
                    m.a,
                    [r, Object(a.a)({}, d)].concat(Object(o.a)(l))
                  );
                }
              }
            ]),
            t
          );
        })(m.a.Component);
      n.d(t, "c", function() {
        return g;
      }),
        n.d(t, "b", function() {
          return v;
        }),
        n.d(t, "a", function() {
          return b;
        }),
        n.d(t, "d", function() {
          return h.e;
        });
      var g = window.I18n.locale,
        v = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return r.a.apply(void 0, [window.I18n].concat(t));
        };
    },
    "9L3A": function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return c;
      }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return l;
        });
      var r = n("94td"),
        a = n("yWeZ"),
        o = n("SOj7"),
        i = n("4fOl"),
        c = {
          selectedReward: {
            id: null,
            totalCost: null,
            pledgeCost: null,
            projectMin: 0,
            shippingCost: 0,
            shippingLocation: void 0,
            shippingRequired: !1,
            truncated: null,
            doNotPin: !1
          },
          pledgeData: {
            currencySymbol: "$",
            defaultPledge: { amount: 100, min: 10 },
            isRight: !1,
            isSymbolic: !1
          },
          validation: {
            touched: {},
            errors: {},
            fields: [a.g, a.h, a.i],
            serverErrors: []
          }
        },
        u = {
          id: "",
          backsThis: !1,
          conversionEstimate: "",
          title: "",
          description: "",
          unavailable: !1,
          backersCount: "",
          campaignSuccessful: !1,
          campaignLive: !1,
          managePath: "",
          maxPledge: !1,
          minPledge: { amount: "", symbol: "", formatted: "" },
          items: [],
          deliveryDate: "",
          shippingSummary: "",
          endsAt: "",
          limitExists: !1,
          limit: "",
          offsetHeight: null,
          remainingItems: "",
          shippingRulesStatus: o.c,
          memoizedShippingOption: {}
        },
        s = Object(i.a)(),
        l = {
          titleString: Object(r.b)("project_page.reward.Shipping_destination"),
          placeholder: Object(r.b)("project_page.reward.Select_a_country"),
          options: []
        };
    },
    "9UUk": function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return i;
      }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "h", function() {
          return l;
        }),
        n.d(t, "a", function() {
          return d;
        }),
        n.d(t, "b", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return f;
        });
      var r,
        a = n("riAN"),
        o = n("MgNI"),
        i = function(e) {
          return "number" == typeof e || /^\d+$/.test(e);
        },
        c = function(e) {
          return /^[\d\s-]+$/g.test(e);
        },
        u = function(e) {
          if (!i(e)) {
            return o.maybe
              .fromNullable(e.toString().match(/(\d)+/g))
              .map(function(e) {
                return e.join("");
              })
              .getOrElse("");
          }
          return e;
        },
        s = function(e) {
          if ("number" != typeof (t = e) && !/^(\d|\.)+$/.test(t)) {
            return o.maybe
              .fromNullable(e.toString().match(/(\d|\.)+/g))
              .map(function(e) {
                return e.join("");
              })
              .getOrElse("");
          }
          var t;
          return e;
        },
        l = function(e, t) {
          return "string" != typeof e ? e : e > t ? e.slice(0, t) : e;
        },
        d = ((r = a.i),
        function(e) {
          var t = function(t) {
              return e.slice(0, t.length) === t;
            },
            n = r.filter(function(e) {
              return e.patterns.some(t);
            });
          return n.length ? n[0] : a.b;
        }),
        p = (function(e) {
          return function(t) {
            var n = e.filter(function(e) {
              return t === e.type;
            });
            return n.length ? n[0] : a.b;
          };
        })(a.i),
        f = function(e) {
          var t = d(e);
          return t && t.type;
        };
    },
    "9jZ4": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      }),
        n.d(t, "b", function() {
          return s;
        }),
        n.d(t, "e", function() {
          return l;
        }),
        n.d(t, "d", function() {
          return d;
        }),
        n.d(t, "f", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return f;
        }),
        n.d(t, "h", function() {
          return m;
        }),
        n.d(t, "g", function() {
          return h;
        }),
        n.d(t, "i", function() {
          return b;
        });
      var r = n("KQm4"),
        a = n("wx14"),
        o = n("ODXe"),
        i = n("rePB"),
        c = n("vpQ4"),
        u = function(e, t) {
          return Object.keys(t).reduce(function(n, r) {
            return e(r, t[r])
              ? Object(c.a)({}, n, Object(i.a)({}, r, t[r]))
              : n;
          }, {});
        },
        s = function(e) {
          return e.reduce(function(e, t) {
            var n = Object(o.a)(t, 2),
              r = n[0],
              a = n[1];
            return Object(c.a)({}, e, Object(i.a)({}, r, a));
          }, {});
        },
        l = function(e, t) {
          return Object.keys(t).reduce(function(n, r) {
            return Object(c.a)({}, n, Object(i.a)({}, r, e(t[r])));
          }, {});
        },
        d = function(e, t) {
          return Object.keys(t).reduce(function(n, r) {
            return Object(c.a)({}, n, Object(i.a)({}, e(r), t[r]));
          }, {});
        },
        p = function(e, t) {
          return a.a.apply(
            void 0,
            [{}].concat(
              Object(r.a)(
                Object.keys(t).map(function(n) {
                  return e.includes(n) ? null : Object(i.a)({}, n, t[n]);
                })
              )
            )
          );
        },
        f = function(e) {
          for (var t in e) return !1;
          return !0;
        },
        m = function(e) {
          return function(t) {
            return t[e];
          };
        },
        h = function(e) {
          return function(t) {
            return e.reduce(function(e, t) {
              return e[t];
            }, t);
          };
        },
        b = function(e, t) {
          if (Object.is(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === t ||
            "object" != typeof e ||
            null === t
          )
            return !1;
          if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (var a = 0, o = n; a < o.length; a++) {
            var i = o[a];
            if (
              !Object.prototype.hasOwnProperty.call(t, i) ||
              !Object.is(e[i], t[i])
            )
              return !1;
          }
          return !0;
        };
    },
    CMmH: function(e, t, n) {
      "use strict";
      var r = n("2UXI"),
        a = n("0fse");
      t.a = function(e, t) {
        switch (t.type) {
          case "TRACKING_TRACK_EVENT":
            var n = t.name,
              o = t.properties,
              i = t.options;
            return Object(a.f)(e, a.a.run(r.c, { args: [n, o, i] }));
          case "BULK_TRACKING_TRACK_EVENT":
            var c = (t.actions || []).map(function(e) {
              var t = e.name,
                n = e.properties,
                o = e.options;
              return a.a.run(r.c, { args: [t, n, o] });
            });
            return Object(a.f)(e, a.a.list(c, { batch: !0 }));
        }
      };
    },
    CPM0: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = n("1w3K");
      t.a = function(e) {
        var t = e.enter,
          n = void 0 === t ? "fade-in" : t,
          r = e.leave,
          i = void 0 === r ? "fade-out" : r,
          c = e.appear,
          u = e.open,
          s = void 0 === u || u,
          l = e.duration,
          d = void 0 === l ? 300 : l,
          p = e.durationLeave,
          f = e.durationAppear,
          m = e.component,
          h = void 0 === m ? "div" : m,
          b = e.mountOnEnter,
          g = void 0 === b || b,
          v = e.unmountOnExit,
          y = void 0 === v || v,
          w = e.children,
          _ = h || a.a.Fragment;
        return a.a.createElement(
          o.CSSTransition,
          {
            in: s,
            appear: !!c,
            timeout: { enter: d, exit: p || d, appear: f || d },
            classNames: {
              appear: "animation-".concat(f || d),
              appearActive: "animation-".concat(c || n),
              enter: "animation-".concat(d),
              enterActive: "animation-".concat(n),
              exit: "animation-".concat(p || d),
              exitActive: "animation-".concat(i)
            },
            mountOnEnter: g,
            unmountOnExit: y
          },
          a.a.createElement(_, null, w)
        );
      };
    },
    CjI4: function(e, t, n) {
      "use strict";
      var r = n("60hy"),
        a = Object(r.b)(window.current_location);
      (window.current_location = a), (t.a = a);
    },
    FCah: function(e, t, n) {
      "use strict";
      var r = n("rePB"),
        a = n("vpQ4"),
        o = n("wx14"),
        i = n("q1tI"),
        c = n.n(i),
        u = n("94td"),
        s = n("9UUk"),
        l = n("eEls"),
        d = n("/IHD"),
        p = n("6k9Z"),
        f = n("gN63"),
        m = function(e) {
          return Object(f.e)(
            "\n  query($rewardId: ID!) {\n    reward: node (id: $rewardId) {\n      ... on Reward {\n        shippingRulesExpanded {\n          nodes {\n            id\n            cost {\n              amount\n              symbol\n            }\n            location {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n",
            { rewardId: e }
          );
        },
        h = n("J61U"),
        b = n("9L3A"),
        g = n("vqAB"),
        v = n("S4fH");
      n.d(t, "a", function() {
        return O;
      }),
        n.d(t, "b", function() {
          return j;
        });
      var y = Object(h.s)(function(e) {
          var t,
            n,
            r,
            a = e.pledgeData,
            o = e.idForKey;
          return c.a.createElement(
            "div",
            { key: o, className: "new-form__currency-box" },
            c.a.createElement(
              "span",
              { className: "new-form__currency-box__text" },
              ((n = (t = a).currencySymbol),
              (r = t.usdSymbol),
              "$" === n && "international" === r ? "US$" : n)
            )
          );
        }),
        w = Object(h.o)(function(e) {
          var t = e.convert,
            n = e.conversionAtoms,
            r = e.idForKey,
            a = e.pledgeData,
            o = e.value,
            i = Math.floor(+o * a.currentFxRate),
            u = "".concat(a.currentCurrencySymbol).concat(i);
          return (
            !!t &&
            c.a.createElement(v.c, {
              key: "currency-".concat(r),
              amount: u,
              atoms: n
            })
          );
        }),
        _ = Object(l.a)(h.q, y, w, h.n)(h.h),
        O = function(e) {
          var t = e.convert,
            n = e.errors,
            r = e.idForField,
            a = e.idForKey,
            o = e.label,
            i = e.minPledge,
            l = e.onBlurField,
            p = e.onChange,
            f = e.onClick,
            m = e.onSelect,
            h = e.pledgeData,
            b = e.value,
            g = void 0 === b ? i.amount : b,
            v = Object(d.a)(
              "new-form__amount",
              h.isRight && "new-form__amount--right",
              h.isSymbolic && "new-form__amount--symbol"
            ),
            y = o
              ? Object(u.b)("project_page.reward_form.Pledge_amount")
              : null;
          return c.a.createElement(_, {
            "aria-invalid": !!n,
            "aria-required": "true",
            convert: t,
            conversionAtoms: ["block text-uppercase type-10 track-loose pt2"],
            errors: n,
            headerLabel: y,
            id: r,
            idForKey: a,
            inputAtoms: ["new-form__input--numbers"],
            name: "name",
            onBlur: l,
            onChange: p,
            onClick: f,
            onSelect: m,
            pledgeData: h,
            value: Object(s.e)(g),
            wrapperAtoms: v
          });
        },
        j = function(e) {
          if (!Array.isArray(e))
            return {
              shippingDropdowns: {},
              shippingReducers: {},
              shippingStates: {}
            };
          return e.reduce(
            function(e, t) {
              var n,
                i = t.id,
                c = (function(e) {
                  return Object(p.a)(m)(e);
                })(i),
                u = c.reducers,
                s = c.Component;
              return (
                (e.shippingDropdowns[i] = s),
                (e.shippingReducers = Object(o.a)(
                  {},
                  e.shippingReducers,
                  Object(a.a)({}, u)
                )),
                (e.shippingStates = Object(o.a)(
                  {},
                  e.shippingStates,
                  ((n = {}),
                  Object(r.a)(n, "".concat(i, "-async"), g.a),
                  Object(r.a)(n, "".concat(i, "-select"), b.c),
                  n)
                )),
                e
              );
            },
            { shippingDropdowns: {}, shippingReducers: {}, shippingStates: {} }
          );
        };
    },
    Fkal: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      });
      var r = n("q1tI"),
        a = n.n(r),
        o = n("5igC"),
        i = n("LtMG"),
        c = function(e) {
          var t = e.onClick,
            n = e.onFocus,
            r = e.onMouseDown,
            c = e.href,
            u = e.type,
            s = void 0 === u ? "button" : u,
            l = e.atoms,
            d = void 0 === l ? [] : l,
            p = e.size,
            f = void 0 === p ? "medium" : p,
            m = e.color,
            h = void 0 === m ? "green" : m,
            b = e.theme,
            g = e.shadow,
            v = void 0 !== g && g,
            y = e.disabled,
            w = void 0 !== y && y,
            _ = e.loading,
            O = void 0 !== _ && _,
            j = e.children,
            E = e.target,
            k = e.tooltip,
            S = ["bttn"]
              .concat(
                (function(e) {
                  switch (e) {
                    case "xlarge":
                      return ["bttn-xlarge"];
                    case "large":
                      return ["bttn-large"];
                    case "medium":
                      return ["bttn-medium"];
                    case "small":
                      return ["bttn-small"];
                    case "xsmall":
                      return ["bttn-xsmall"];
                    default:
                      throw "invalid size class";
                  }
                })(f)
              )
              .concat(
                (function(e, t) {
                  if (t) return ["bttn-".concat(t.name)];
                  switch (e) {
                    case "black":
                      return ["bttn-black"];
                    case "cobalt":
                      return ["bttn-cobalt"];
                    case "blue":
                      return ["bttn-blue"];
                    case "conferences-blue":
                      return ["bttn-conferences-blue"];
                    case "dark-green":
                      return ["bttn-dark-green"];
                    case "green":
                      return ["bttn-green"];
                    case "grey":
                      return ["bttn-grey"];
                    case "icon":
                      return ["bttn-icon"];
                    case "red":
                      return ["bttn-red"];
                    case "white":
                      return ["bttn-white"];
                    case "drip":
                      return ["bttn-drip"];
                    case "facebook":
                      return ["bttn-facebook"];
                    case "twitter":
                      return ["bttn-twitter"];
                    default:
                      throw "invalid button color";
                  }
                })(h, b)
              )
              .concat(
                b
                  ? ["keyboard-focusable-".concat(b["primary-dark"])]
                  : ["keyboard-focusable"]
              )
              .concat(v ? ["shadow-button"] : [])
              .concat(d);
          return a.a.createElement(
            o.b,
            {
              onFocus: n,
              atoms: S,
              disabled: w,
              href: c,
              onClick: t,
              onMouseDown: r,
              target: E,
              type: s,
              tooltip: k
            },
            O
              ? a.a.createElement(i.f, {
                  name: "icon--circle-loader",
                  size: "medium"
                })
              : j
          );
        };
    },
    "HU7/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return i;
        }),
        n.d(t, "f", function() {
          return c;
        }),
        n.d(t, "b", function() {
          return s;
        }),
        n.d(t, "c", function() {
          return l;
        });
      var r = n("q1tI"),
        a = {
          header: { atoms: [] },
          body: { atoms: [] },
          form: { atoms: [] },
          link: { atoms: [] }
        },
        o = {
          header: { atoms: ["maison-book"] },
          body: { atoms: ["cooper-light"] },
          form: { atoms: ["maison-book"] },
          link: { atoms: ["maison-book"] }
        },
        i = {
          header: { atoms: ["cooper-light"] },
          body: { atoms: ["cooper-light"] },
          form: { atoms: ["maison-book"] },
          link: { atoms: ["maison-book"] }
        },
        c = {
          header: { atoms: ["effra-heavy"] },
          body: { atoms: ["maison-book"] },
          form: { atoms: ["maison-book"] },
          link: { atoms: ["maison-book"] }
        },
        u = n.n(r).a.createContext(a),
        s = u.Consumer,
        l = u.Provider;
    },
    I8yn: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e.bind.apply(e, [null].concat(n));
      };
    },
    IVR7: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n("vpQ4"),
        a = n("q1tI"),
        o = n.n(a),
        i = function(e) {
          var t = e.size,
            n = e.atoms,
            a = void 0 === n ? [] : n,
            i = e.imageUrl,
            c = e.alt,
            u = void 0 === c ? "user avatar" : c,
            s = e.borderColor,
            l = void 0 === s ? "grey-500" : s,
            d = e.style,
            p = void 0 === d ? {} : d,
            f = t ? ["w".concat(t), "h".concat(t)] : [],
            m = l ? ["border", "border-".concat(l)] : [],
            h = ["avatar", "inline-block", "align-middle", "circle"]
              .concat(f)
              .concat(m)
              .concat(a)
              .join(" "),
            b = Object(r.a)({}, p, {
              textIndent: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden"
            });
          return o.a.createElement("img", {
            className: h,
            style: b,
            src: i,
            alt: u
          });
        };
    },
    IVac: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return p;
      }),
        n.d(t, "a", function() {
          return f;
        }),
        n.d(t, "d", function() {
          return m;
        }),
        n.d(t, "c", function() {
          return h;
        }),
        n.d(t, "f", function() {
          return b;
        }),
        n.d(t, "h", function() {
          return g;
        }),
        n.d(t, "i", function() {
          return v;
        }),
        n.d(t, "j", function() {
          return y;
        }),
        n.d(t, "l", function() {
          return w;
        }),
        n.d(t, "k", function() {
          return _;
        }),
        n.d(t, "m", function() {
          return O;
        }),
        n.d(t, "g", function() {
          return j;
        }),
        n.d(t, "b", function() {
          return E;
        }),
        n.d(t, "n", function() {
          return k;
        });
      var r = n("1OyB"),
        a = n("vuIU"),
        o = n("vpQ4"),
        i = n("rePB"),
        c = n("KQm4"),
        u = n("wx14"),
        s = n("w/TO"),
        l = n("cDWt"),
        d = n("0fse"),
        p = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { touched: {}, errors: {} },
            t = arguments.length > 1 ? arguments[1] : void 0;
          return e.touched[t] && !!e.errors[t];
        },
        f = function(e) {
          return u.a.apply(
            void 0,
            [{}].concat(
              Object(c.a)(
                e.map(function(e) {
                  return Object(i.a)({}, e, !0);
                })
              )
            )
          );
        },
        m = function(e, t, n, r) {
          var a,
            c = Object(s.a)(n);
          return (
            (a = r
              ? function(t) {
                  return t.forEach(function(t) {
                    return r(e, t);
                  });
                }
              : function(e) {
                  return e;
                }),
            Object(d.f)(
              Object(o.a)({}, e, {
                touched: Object(o.a)({}, e.touched, Object(i.a)({}, t, !0)),
                errors: c
              }),
              c[t] ? d.a.run(a, { args: [c[t]] }) : d.a.none
            )
          );
        },
        h = function(e, t, n) {
          var r = Object(s.a)(t);
          return Object(d.f)(
            Object(o.a)({}, e, {
              touched: Object(o.a)({}, f(e.fields)),
              errors: r
            }),
            n ? d.a.run(n, { args: [e, r] }) : d.a.none
          );
        },
        b = function(e, t) {
          return e.length === t;
        },
        g = function(e) {
          return e && e.match(/^.+@.+\..{2,}$/);
        },
        v = function(e) {
          return !isNaN(e);
        },
        y = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" == typeof e
            ? e.trim().length > 0
            : null != e && e.length > 0;
        },
        w = function(e, t) {
          return (arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { caseSensitive: !1 }
          ).caseSensitive
            ? -1 === t.indexOf(e)
            : -1 ===
                t
                  .map(function(e) {
                    return e.toLowerCase();
                  })
                  .indexOf(e.toLowerCase());
        },
        _ = function(e) {
          return !!e && v(e) && b(e, 4);
        },
        O = function(e) {
          return !!e && v(e) && b(e, 5);
        },
        j = function(e) {
          return !!e && /^[0-9]{2}-[0-9]{7}$/.test(e);
        },
        E = function(e) {
          return !!e && /^(?:[^0-9]*[0-9]){5,16}[^0-9]*$/.test(e);
        },
        k = function(e, t, n) {
          return n()
            ? Object(l.b)()
            : Object(l.a)(new S(Object(i.a)({}, e, new C([t]))));
        },
        S = (function() {
          function e(t) {
            Object(r.a)(this, e), (this.errors = t);
          }
          return (
            Object(a.a)(e, [
              {
                key: "concat",
                value: function(t) {
                  var n = this,
                    r = Object.keys(this.errors).concat(Object.keys(t.errors));
                  return new e(
                    r
                      .filter(function(e, t) {
                        return t === r.indexOf(e);
                      })
                      .reduce(function(e, r) {
                        var a = n.errors[r],
                          c = t.errors[r],
                          u = a && c ? a.concat(c) : a || c;
                        return Object(o.a)({}, e, Object(i.a)({}, r, u));
                      }, {})
                  );
                }
              }
            ]),
            e
          );
        })(),
        C = (function() {
          function e(t) {
            Object(r.a)(this, e), (this.value = t);
          }
          return (
            Object(a.a)(e, [
              {
                key: "concat",
                value: function(t) {
                  return new e(this.value || t.value);
                }
              }
            ]),
            e
          );
        })();
    },
    J61U: function(e, t, n) {
      "use strict";
      n.d(t, "g", function() {
        return O;
      }),
        n.d(t, "l", function() {
          return E;
        }),
        n.d(t, "e", function() {
          return k;
        }),
        n.d(t, "m", function() {
          return S;
        }),
        n.d(t, "c", function() {
          return C;
        }),
        n.d(t, "i", function() {
          return Y;
        }),
        n.d(t, "h", function() {
          return D;
        }),
        n.d(t, "p", function() {
          return I;
        }),
        n.d(t, "s", function() {
          return A;
        }),
        n.d(t, "o", function() {
          return x;
        }),
        n.d(t, "f", function() {
          return R;
        }),
        n.d(t, "q", function() {
          return M;
        }),
        n.d(t, "t", function() {
          return N;
        }),
        n.d(t, "d", function() {
          return P;
        }),
        n.d(t, "n", function() {
          return L;
        }),
        n.d(t, "r", function() {
          return H;
        }),
        n.d(t, "a", function() {
          return F;
        }),
        n.d(t, "b", function() {
          return K;
        }),
        n.d(t, "j", function() {
          return U;
        }),
        n.d(t, "k", function() {
          return z;
        });
      var r = n("1OyB"),
        a = n("vuIU"),
        o = n("md7G"),
        i = n("foSv"),
        c = n("Ji7U"),
        u = n("KQm4"),
        s = n("wx14"),
        l = n("Ff2n"),
        d = n("q1tI"),
        p = n.n(d),
        f = n("/IHD"),
        m = n("LtMG"),
        h = n("l9zw"),
        b = n("Qm2c"),
        g = n("SmhT"),
        v = function(e) {
          return function(t) {
            var n = t.atoms,
              r = void 0 === n ? [] : n,
              a = t.autoFocus,
              o = t.checked,
              i = t.disabled,
              c = void 0 !== i && i,
              u = t.errors,
              s = void 0 === u ? [] : u,
              l = t.id,
              d = t.name,
              m = t.onBlur,
              h = t.onChange,
              b = t.onClick,
              g = t.onFocus,
              v = t.onKeyDown,
              y = t.onKeyUp,
              w = t.onKeyPress,
              _ = t.onSelect,
              O = t.placeholder,
              j = t.required,
              E = void 0 !== j && j,
              k = t.style,
              S = t.value,
              C = s && s.length > 0,
              Y = Object(f.a)(
                "atomic-text-input",
                C && "atomic-form-v1-error",
                r
              );
            return p.a.createElement("input", {
              "aria-invalid": C,
              "aria-required": E,
              "aria-describedby": "".concat(l, "-error"),
              autoFocus: a,
              checked: o,
              className: Y,
              disabled: c,
              id: l,
              name: d,
              onBlur: m,
              onChange: h,
              onClick: b,
              onFocus: g,
              onKeyDown: v,
              onKeyUp: y,
              onKeyPress: w,
              onSelect: _,
              placeholder: O,
              style: k,
              type: e,
              value: S
            });
          };
        },
        y = v("text"),
        w = v("email"),
        _ = v("password"),
        O = v("number"),
        j = v("checkbox"),
        E = v("radio"),
        k = function(e) {
          return function(t) {
            var n = t.wrapperAtoms,
              r = void 0 === n ? [] : n,
              a = t.wrapperStyle,
              o = t.footer,
              i = t.header,
              c = t.inputAtoms,
              d = void 0 === c ? [] : c,
              f = t.siblings,
              m = Object(l.a)(t, [
                "wrapperAtoms",
                "wrapperStyle",
                "footer",
                "header",
                "inputAtoms",
                "siblings"
              ]),
              h = function(e) {
                return e && e.find(Boolean);
              };
            return p.a.createElement(
              "div",
              { style: a, className: ["relative"].concat(r).join(" ") },
              h(i) &&
                p.a.createElement(
                  "div",
                  { className: "relative flex items-center mb1" },
                  i
                ),
              p.a.createElement(
                "div",
                { className: "relative" },
                p.a.createElement(e, Object(s.a)({ atoms: d }, m)),
                h(f) && Object(u.a)(f)
              ),
              h(o) &&
                p.a.createElement(
                  "div",
                  { className: "relative flex items-center flex-wrap" },
                  o
                )
            );
          };
        },
        S = k(y),
        C = k(w),
        Y = k(_),
        D = k(O),
        I = (k(E),
        function(e) {
          return function(t) {
            return function(n) {
              var r = n.header,
                a = void 0 === r ? [] : r,
                o = Object(l.a)(n, ["header"]);
              return p.a.createElement(
                t,
                Object(s.a)({}, o, { header: a.concat(e(o)) })
              );
            };
          };
        }),
        A = function(e) {
          return function(t) {
            return function(n) {
              var r = n.siblings,
                a = void 0 === r ? [] : r,
                o = Object(l.a)(n, ["siblings"]);
              return p.a.createElement(
                t,
                Object(s.a)({}, o, { siblings: a.concat(e(o)) })
              );
            };
          };
        },
        x = function(e) {
          return function(t) {
            return function(n) {
              var r = n.footer,
                a = void 0 === r ? [] : r,
                o = Object(l.a)(n, ["footer"]);
              return p.a.createElement(
                t,
                Object(s.a)({}, o, { footer: a.concat(e(o)) })
              );
            };
          };
        },
        R = function(e) {
          var t = e.label,
            n = e.id,
            r = e.errors,
            a = e.atoms,
            o = Object(f.a)(
              "atomic-text-label",
              r && r.length > 0 && "atomic-text-label--errored",
              a
            );
          return p.a.createElement("label", { htmlFor: n, className: o }, t);
        },
        M = I(function(e) {
          var t = e.errors,
            n = void 0 === t ? [] : t,
            r = e.headerLabel,
            a = e.headerLabelAtoms,
            o = void 0 === a ? [] : a,
            i = e.id;
          return p.a.createElement(R, {
            atoms: o,
            errors: n,
            id: i,
            key: "key-".concat(i),
            label: r
          });
        }),
        N = (I(function(e) {
          var t = e.headerLabelIcon,
            n = e.headerLabelIconSize,
            r = void 0 === n ? "12" : n,
            a = e.headerLabelIconColor,
            o = e.headerLabelIconAtoms,
            i = void 0 === o ? ["ml1", "inline-block"] : o,
            c = Object(f.a)(i, "fill-".concat(a));
          return p.a.createElement(m.f, {
            name: t,
            size: r,
            atoms: c,
            key: "key-".concat(t)
          });
        }),
        I(function(e) {
          var t = e.tooltipText,
            n = e.tooltipIcon,
            r = e.tooltipIconSize,
            a = void 0 === r ? "12" : r,
            o = e.tooltipIconColor,
            i = e.tooltipIconAtoms,
            c = void 0 === i ? ["ml1", "inline-block"] : i,
            u = Object(f.a)(c, "fill-".concat(o));
          return p.a.createElement(
            "a",
            {
              className: "ksr-tooltip ksr-tooltip--large lh0",
              "data-tooltip": t
            },
            p.a.createElement(m.f, { name: n, size: a, atoms: u })
          );
        })),
        P = (A(function(e) {
          var t = e.id,
            n = e.innerLabel,
            r = e.innerLabelAtoms,
            a = void 0 === r ? [] : r;
          return p.a.createElement(R, {
            label: n,
            id: t,
            atoms: a.concat(["atomic-text-label-fixed", "l0"]),
            key: "key-".concat(t)
          });
        }),
        A(function(e) {
          var t = e.id,
            n = e.inlineLabel,
            r = e.inlineLabelAtoms,
            a = void 0 === r ? [] : r;
          return p.a.createElement(R, {
            label: n,
            id: t,
            atoms: a.concat(["atomic-text-label-fixed"]),
            key: "key-".concat(t)
          });
        }),
        function(e) {
          var t = e.errors,
            n = e.id;
          return t && 0 !== t.length
            ? p.a.createElement(
                "ul",
                { className: "red-500 mt1" },
                t.map(function(e, t) {
                  return p.a.createElement(
                    "li",
                    {
                      key: "error-".concat(t),
                      id: n ? "".concat(n, "-error") : ""
                    },
                    e
                  );
                })
              )
            : null;
        }),
        L = x(function(e) {
          var t = e.errors,
            n = e.name,
            r = e.id;
          return p.a.createElement(P, {
            errors: t,
            name: n,
            id: r,
            key: "key-".concat(n, "-").concat(t)
          });
        }),
        T = function(e) {
          var t = e.icon,
            n = e.size,
            r = e.atoms,
            a = void 0 === r ? [] : r,
            o = e.color;
          return p.a.createElement(
            "div",
            { className: Object(f.a)(a) },
            p.a.createElement(m.f, {
              name: t,
              size: n,
              atoms: ["fill-".concat(o)]
            })
          );
        },
        H = A(function(e) {
          var t = e.innerIcon,
            n = e.innerIconSize,
            r = void 0 === n ? "12" : n,
            a = e.innerIconColor,
            o = void 0 === a ? "dark-grey-400" : a;
          return p.a.createElement(T, {
            key: "key-".concat(t),
            icon: t,
            size: r,
            color: o,
            atoms: [
              "h100p",
              "flex",
              "items-center",
              "justify-center",
              "absolute",
              "t0",
              "r2"
            ]
          });
        }),
        F = function(e) {
          var t = e.id,
            n = e.label,
            r = e.large,
            a = void 0 !== r && r,
            o = e.atoms,
            i = void 0 === o ? [] : o,
            c = e.tag,
            u = void 0 === c ? "div" : c,
            d = e.disabled,
            h = void 0 !== d && d,
            b = Object(l.a)(e, [
              "id",
              "label",
              "large",
              "atoms",
              "tag",
              "disabled"
            ]);
          if (!n) throw new Error("A label is required");
          var g = !0 === a ? "12" : "9",
            v = Object(f.a)(
              "form-checkbox",
              !0 === a ? "form-checkbox--large" : "form-checkbox--small",
              i
            ),
            y = Object(f.a)("input-state-indicator", h ? "o20p" : ""),
            w = u;
          return p.a.createElement(
            w,
            { className: v },
            p.a.createElement(j, Object(s.a)({ id: t }, b, { disabled: h })),
            p.a.createElement(
              "label",
              { className: "input-label pointer", htmlFor: t },
              p.a.createElement(
                "span",
                { className: y },
                p.a.createElement(m.f, {
                  name: "check",
                  size: g,
                  atoms: ["fill-white"]
                })
              ),
              p.a.createElement("span", { className: "input-label__text" }, n)
            )
          );
        },
        K = function(e) {
          var t = e.id,
            n = e.name,
            r = e.option,
            a = e.isSelected,
            o = e.onChange,
            i = e.onKeyDown,
            c = e.theme,
            u = void 0 === c ? b.a : c,
            s = r.expandedComponent,
            l = r.label,
            d = r.value,
            m = r.subheader;
          return p.a.createElement(
            "div",
            {
              className: Object(f.a)(
                "border border-grey-400 hover-border-ksr-green-500 border-focused-ksr-green-500 no-outline",
                "transition-300 mb1 rounded"
              ),
              "aria-checked": a,
              tabIndex: a ? "0" : "-1",
              role: "radio",
              onKeyDown: i
            },
            p.a.createElement(
              "label",
              { htmlFor: t, className: "flex p3 pointer" },
              p.a.createElement(
                "div",
                null,
                p.a.createElement("input", {
                  type: "radio",
                  name: n,
                  id: t,
                  value: d,
                  className: "super-hide",
                  onChange: o,
                  checked: a
                }),
                p.a.createElement(
                  "div",
                  { className: "mt3px" },
                  p.a.createElement(z, { isSelected: a, theme: u })
                )
              ),
              p.a.createElement(
                "div",
                { className: "grow-1" },
                p.a.createElement(
                  h.e,
                  {
                    type: "body-100",
                    color: "soft-black",
                    atoms: ["block"],
                    weight: "regular"
                  },
                  l
                ),
                m &&
                  p.a.createElement(
                    h.e,
                    {
                      type: "caption-200",
                      color: "dark-grey-500",
                      weight: "regular"
                    },
                    m
                  )
              )
            ),
            a &&
              s &&
              p.a.createElement(
                "div",
                { className: "border-grey-400 border-top p3" },
                s
              )
          );
        },
        U = (function(e) {
          function t(e) {
            var n;
            return (
              Object(r.a)(this, t),
              ((n = Object(o.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).wrapperRef = null),
              n
            );
          }
          return (
            Object(c.a)(t, e),
            Object(a.a)(t, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.selectedIndex !== e.selectedIndex,
                    n = this.wrapperRef.contains(document.activeElement);
                  if (t && n) {
                    var r = this.wrapperRef.children[this.props.selectedIndex];
                    r && r.focus();
                  }
                }
              },
              {
                key: "handleKeyDown",
                value: function(e, t) {
                  var n = this.props,
                    r = n.onChange,
                    a = n.radioGroupOptions;
                  if (e.target === e.currentTarget) {
                    e.preventDefault();
                    var o = a.length - 1;
                    switch (e.keyCode) {
                      case g.g:
                      case g.n:
                        var i = t - 1 > -1 ? t - 1 : o;
                        return void r(a[i], i);
                      case g.k:
                      case g.b:
                        var c = t + 1 <= o ? t + 1 : 0;
                        return void r(a[c], c);
                      case g.l:
                        return void r(a[t], t);
                    }
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.id,
                    r = t.radioGroupOptions,
                    a = t.selectedIndex,
                    o = t.onChange,
                    i = t.theme,
                    c = void 0 === i ? b.a : i,
                    u = t.RadioButton,
                    s = void 0 === u ? K : u,
                    l = r.map(function(t, r) {
                      var i = a === r,
                        u = "".concat(n, "-radio-option-").concat(r);
                      return p.a.createElement(s, {
                        isSelected: i,
                        onChange: function() {
                          return o(t, r);
                        },
                        onKeyDown: function(t) {
                          return e.handleKeyDown(t, r);
                        },
                        option: t,
                        key: u,
                        id: u,
                        name: n,
                        theme: c
                      });
                    });
                  return p.a.createElement(
                    "div",
                    {
                      id: n,
                      role: "radiogroup",
                      ref: function(t) {
                        return (e.wrapperRef = t);
                      }
                    },
                    l
                  );
                }
              }
            ]),
            t
          );
        })(p.a.Component),
        z = function(e) {
          var t = e.theme,
            n = void 0 === t ? b.a : t,
            r = e.isSelected,
            a = [
              "block",
              "circle",
              "h3",
              "mr1",
              "mr3-md",
              "w3",
              r ? "bg-".concat(n["primary-light"]) : "bg-white"
            ].join(" "),
            o = [
              "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
              "inset 0 0 0 1px rgba(0, 0, 0, 0.2)"
            ].join(", ");
          return p.a.createElement(
            "div",
            { className: a, style: { boxShadow: o } },
            r &&
              p.a.createElement("div", {
                className: "bg-white h1 w1 circle inline-block m1"
              })
          );
        };
    },
    "K+Nk": function(e, t, n) {
      "use strict";
      var r = n("eEls"),
        a = n("c6/r"),
        o = Object(r.a)(JSON.parse, a.a);
      (t.a = o), (window.parseEscapedJSON = o);
    },
    KZo6: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("/AD1"),
        a = n("WjF9");
      function o() {
        return {
          user_id: a.a && a.a.get ? a.a.get("id") : null,
          project_id: r.a && r.a.get ? r.a.get("id") : null
        };
      }
    },
    LtMG: function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return l;
      }),
        n.d(t, "c", function() {
          return d;
        }),
        n.d(t, "h", function() {
          return p;
        }),
        n.d(t, "e", function() {
          return f;
        }),
        n.d(t, "i", function() {
          return m;
        }),
        n.d(t, "d", function() {
          return b;
        });
      var r = n("vpQ4"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("IVR7");
      n.d(t, "a", function() {
        return i.a;
      });
      var c = n("Fkal");
      n.d(t, "b", function() {
        return c.a;
      });
      var u = n("5igC");
      n.d(t, "g", function() {
        return u.a;
      });
      var s = n("/IHD"),
        l = function(e) {
          var t = e.name,
            n = e.label,
            r = e.size,
            a = void 0 === r ? "small" : r,
            i = e.atoms,
            c = void 0 === i ? [] : i,
            u = ["svg-icon__".concat(t)]
              .concat(
                (function(e) {
                  switch (e) {
                    case "9":
                      return ["icon-9"];
                    case "10":
                      return ["icon-10"];
                    case "12":
                      return ["icon-12"];
                    case "14":
                      return ["icon-14"];
                    case "15":
                      return ["icon-15"];
                    case "16":
                      return ["icon-16"];
                    case "20":
                      return ["icon-20"];
                    case "36":
                      return ["icon-36"];
                    case "48":
                      return ["icon-48"];
                    case "small":
                      return ["icon-small"];
                    case "medium":
                      return ["icon-medium"];
                    case "large":
                      return ["icon-large"];
                    default:
                      throw "invalid size class";
                  }
                })(a)
              )
              .concat(c)
              .join(" ");
          return o.a.createElement(
            "svg",
            { className: u, "aria-hidden": !n, "aria-label": n },
            o.a.createElement("use", { xlinkHref: "#".concat(t) })
          );
        },
        d = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            r = e.children,
            a = e.size,
            i = void 0 === a ? 4 : a,
            c = e.backgroundColor,
            u = e.borderColor,
            s = e.hoverBorderColor,
            l = e.shadow,
            d = void 0 !== l && l,
            p = [
              "circle",
              "h".concat(i),
              "w".concat(i),
              "flex",
              "items-center",
              "justify-center",
              "inline-flex",
              "bg-".concat(c),
              "border",
              "border-".concat(u || c)
            ]
              .concat(s ? ["hover-border-" + s] : [])
              .concat(d ? ["shadow-avatar"] : [])
              .concat(n)
              .join(" ");
          return o.a.createElement("div", { className: p }, r);
        },
        p = function(e) {
          var t = e.defaultColor,
            n = void 0 === t ? "grey-500" : t,
            a = e.percentage,
            i = void 0 === a ? 0 : a,
            c = e.locked,
            u = void 0 !== c && c,
            s = e.error,
            l = void 0 !== s && s,
            d = e.size,
            p = void 0 === d ? 8 : d,
            f = e.atoms,
            m = void 0 === f ? [] : f,
            h = e.defaultStrokeColor,
            b = void 0 === h ? "ksr-green-700" : h,
            g = e.defaultIcon,
            v = void 0 === g ? "icon--check" : g,
            y = ["w".concat(p), "h".concat(p)].concat(m).join(" "),
            w = Math.round(2 * Math.PI * 18),
            _ = Math.round((i * w) / 100),
            O = {
              status: "not-started",
              strokeColor: n,
              checkFillColor: n,
              circleFillColor: "white"
            },
            j = Object(r.a)({}, O, {
              status: "error",
              strokeColor: "red-500",
              checkFillColor: "red-500"
            }),
            E = Object(r.a)({}, O, { status: "locked" }),
            k = Object(r.a)({}, O, {
              status: "complete",
              checkFillColor: "white",
              circleFillColor: "ksr-green-700",
              strokeColor: "ksr-green-700"
            }),
            S = Object(r.a)({}, O, { status: "incomplete", strokeColor: b }),
            C = l ? j : u ? E : _ >= 100 ? k : 0 != _ ? S : O,
            Y = C.status,
            D = C.strokeColor,
            I = C.checkFillColor,
            A = C.circleFillColor;
          return o.a.createElement(
            "svg",
            {
              className: y,
              width: "100%",
              height: "100%",
              viewBox: "82 630 48 48",
              xmlns: "http://www.w3.org/2000/svg"
            },
            o.a.createElement(
              "defs",
              null,
              o.a.createElement("circle", {
                id: "progress-circle-outer",
                cx: 18,
                cy: 18,
                r: 18
              }),
              o.a.createElement(
                "filter",
                {
                  x: "-50%",
                  y: "-50%",
                  width: "200%",
                  height: "200%",
                  filterUnits: "objectBoundingBox",
                  id: "progress-circle-shadow-1"
                },
                o.a.createElement("feMorphology", {
                  radius: "2",
                  operator: "dilate",
                  in: "SourceAlpha",
                  result: "shadowSpreadOuter1"
                }),
                o.a.createElement("feOffset", {
                  dy: "2",
                  in: "shadowSpreadOuter1",
                  result: "shadowOffsetOuter1"
                }),
                o.a.createElement("feMorphology", {
                  radius: "2",
                  in: "SourceAlpha",
                  result: "shadowInner"
                }),
                o.a.createElement("feOffset", {
                  dy: "2",
                  in: "shadowInner",
                  result: "shadowInner"
                }),
                o.a.createElement("feComposite", {
                  in: "shadowOffsetOuter1",
                  in2: "shadowInner",
                  operator: "out",
                  result: "shadowOffsetOuter1"
                }),
                o.a.createElement("feGaussianBlur", {
                  stdDeviation: "2",
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1"
                }),
                o.a.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                  in: "shadowBlurOuter1"
                })
              ),
              o.a.createElement(
                "filter",
                {
                  x: "-50%",
                  y: "-50%",
                  width: "200%",
                  height: "200%",
                  filterUnits: "objectBoundingBox",
                  id: "progress-circle-shadow-2"
                },
                o.a.createElement("feOffset", {
                  dy: "2",
                  in: "SourceAlpha",
                  result: "shadowOffsetOuter1"
                }),
                o.a.createElement("feGaussianBlur", {
                  stdDeviation: "2",
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1"
                }),
                o.a.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                  in: "shadowBlurOuter1"
                })
              )
            ),
            o.a.createElement(
              "g",
              { fill: "none", fillRule: "evenodd" },
              o.a.createElement(
                "g",
                { transform: "translate(88 634)" },
                "error" === Y || "incomplete" === Y
                  ? o.a.createElement(
                      "g",
                      null,
                      o.a.createElement("use", {
                        fill: "#000",
                        filter: "url(#progress-circle-shadow-1)",
                        xlinkHref: "#progress-circle-outer"
                      }),
                      o.a.createElement("use", {
                        fill: "#000",
                        filter: "url(#progress-circle-shadow-2)",
                        xlinkHref: "#progress-circle-outer"
                      })
                    )
                  : null,
                "incomplete" === Y || "error" === Y
                  ? o.a.createElement("use", {
                      className: "stroke-".concat(D),
                      transform: "rotate(-90 ".concat(18, " ").concat(18, ")"),
                      strokeWidth: "3",
                      strokeDasharray: "".concat(_, " ").concat(w),
                      xlinkHref: "#progress-circle-outer"
                    })
                  : o.a.createElement("use", {
                      className: "stroke-".concat(D),
                      strokeWidth: "3",
                      xlinkHref: "#progress-circle-outer"
                    }),
                o.a.createElement("use", {
                  className: "fill-".concat(A),
                  xlinkHref: "#progress-circle-outer"
                }),
                "locked" === Y
                  ? o.a.createElement("use", {
                      className: "fill-".concat(I),
                      xlinkHref: "#icon--lock",
                      width: "22",
                      height: "22",
                      x: "7",
                      y: "6"
                    })
                  : o.a.createElement("use", {
                      className: "fill-".concat(I),
                      xlinkHref: "#".concat(v),
                      width: "22",
                      height: "22",
                      x: "7",
                      y: "6"
                    })
              )
            )
          );
        },
        f = function(e) {
          var t = e.children,
            n = e.atoms,
            r = void 0 === n ? [] : n,
            a = e.full,
            i = [void 0 !== a && a ? "grid-container-full" : "grid-container"]
              .concat(r)
              .join(" ");
          return o.a.createElement("div", { className: i }, t);
        },
        m = function(e) {
          var t = e.children,
            n = e.atoms,
            r = ["grid-row"].concat(void 0 === n ? [] : n).join(" ");
          return o.a.createElement("div", { className: r }, t);
        },
        h = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = ["", "-sm", "-md", "-lg"],
            r = t ? "grid-col-offset-" : "grid-col-",
            a = [];
          return (
            e.forEach(function(e, t) {
              void 0 !== e &&
                a.push(
                  ""
                    .concat(r)
                    .concat(e)
                    .concat(n[t])
                );
            }),
            a
          );
        },
        b = function(e) {
          var t = e.children,
            n = e.atoms,
            r = void 0 === n ? [] : n,
            a = e.width,
            i = void 0 === a ? 12 : a,
            c = e.smWidth,
            u = e.mdWidth,
            l = e.lgWidth,
            d = e.offset,
            p = e.smOffset,
            f = e.mdOffset,
            m = e.lgOffset,
            b = e.center,
            g = void 0 !== b && b,
            v = e.style,
            y = h([i, c, u, l]),
            w = h([d, p, f, m], !0),
            _ = Object(s.a)(y, w, r, g ? "grid-col-center" : "");
          return o.a.createElement("div", { className: _, style: v }, t);
        };
    },
    NSfo: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return a;
        });
      n("vpQ4"), n("SmhT");
      var r = function(e, t, n) {
          return {
            type: "TRACKING_TRACK_EVENT",
            name: e,
            properties: t,
            options: n
          };
        },
        a = function(e) {
          return { type: "BULK_TRACKING_TRACK_EVENT", actions: e };
        };
    },
    NjHa: function(e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a,
        o,
        i = n("wx14"),
        c = n("q1tI"),
        u = n.n(c),
        s = n("i8i4"),
        l = n.n(s),
        d = n("z+X6"),
        p = n("0fse"),
        f = n("vpQ4"),
        m = n("MgNI"),
        h = n("n+nq"),
        b = n("9L3A"),
        g = n("FCah"),
        v = function(e, t, n) {
          if (!Array.isArray(n))
            return { rewardsList: {}, rewardsListOrder: [] };
          return {
            rewardsList: n.reduce(function(n, r) {
              return (n[r.id] = Object(f.a)({}, e, r, { shippingRules: t })), n;
            }, {}),
            rewardsListOrder: n
              .sort(function(e, t) {
                return +e.minPledge.amount - t.minPledge.amount;
              })
              .map(function(e) {
                return e.id;
              })
          };
        },
        y = n("rePB"),
        w = n("pj8f"),
        _ = n("NSfo"),
        O = n("gN63"),
        j = n("eEls"),
        E = n("I8yn"),
        k = n("9UUk"),
        S = n("SOj7"),
        C = n("yWeZ"),
        Y = function(e) {
          return Object(O.e)(
            "\n  mutation ($projectId: ID!, $amount: String!, $locationId: String, $rewardId: ID) {\n    createCheckout(input: {\n        projectId: $projectId,\n        amount: $amount,\n        locationId: $locationId,\n        rewardId: $rewardId}) {\n          checkout {\n            id\n          }\n    }\n  }\n",
            Object(f.a)({}, e)
          );
        },
        D = n("bWEs"),
        I = n("4+Ta"),
        A = n("2n5v"),
        x = function(e, t) {
          return Object(f.a)(
            { type: "ADD_MEMOIZED_SHIPPING_TO_SELECTED_REWARD" },
            e,
            { namespace: t }
          );
        },
        R = function(e) {
          return { type: "REWARD_TOUCH_FIELD", fieldName: e };
        },
        M = n("94td"),
        N = function(e) {
          return {
            shipping_country_presence: Object(M.b)(
              "project_page.reward_errors.Please_select_a_shipping_country"
            ),
            pledge_value_presence: Object(M.b)(
              "project_page.reward_errors.Please_enter_a_pledge_amount"
            ),
            pledge_value_sufficient: Object(M.b)(
              "project_page.reward_errors.Please_enter_a_pledge_amount_of_at_least",
              { amount: e }
            )
          };
        },
        P = function(e) {
          return [
            Object(A.i)(C.g, "pledge_value_presence", function() {
              return e.id === C.f || (e.totalCost && +e.totalCost > 0);
            }),
            Object(A.i)(C.g, "pledge_value_sufficient", function() {
              return (
                e.id === C.f ||
                (e.totalCost && +e.totalCost >= +e.pledgeCost + e.shippingCost)
              );
            }),
            Object(A.i)(C.h, "pledge_value_presence", function() {
              return e.id !== C.f || (e.totalCost && +e.totalCost > 0);
            }),
            Object(A.i)(C.h, "pledge_value_sufficient", function() {
              return e.totalCost && +e.totalCost >= +e.projectMin;
            }),
            Object(A.i)(C.i, "shipping_country_presence", function() {
              return !e.shippingRequired || !!e.shippingLocation;
            })
          ];
        },
        L = function(e) {
          return { type: "APPLE_PAY_VENDOR_ERROR", err: e };
        },
        T = n("dIzW"),
        H = function() {
          document &&
            (document.body.classList.remove("not-apple-pay-capable"),
            document.body.classList.add("apple-pay-capable"));
        },
        F = function(e, t) {
          var n;
          try {
            n = (function(e) {
              var t,
                n,
                r = e.selectedReward.id,
                a =
                  r === C.f
                    ? "".concat(e.projectName, ": No reward")
                    : e.rewardsList[r].title,
                o = ((t = e.selectedReward.totalCost),
                (n = t.toString()).includes(".") ? n : n.concat(".00"));
              return {
                countryCode: e.pledgeData.projectCountry,
                currencyCode: e.pledgeData.projectCurrency,
                lineItems: [
                  { label: "".concat("" === a ? e.projectName : a), amount: o }
                ],
                total: {
                  label: "Kickstarter, PBC. (".concat(
                    Object(M.b)("onloads.views.applepay.if_funded"),
                    ")"
                  ),
                  amount: o
                }
              };
            })(e);
          } catch (e) {
            t(
              (function(e) {
                return { type: "APPLE_PAY_REQ_FAILURE", err: e };
              })(e)
            );
          }
          return n;
        },
        K = function(e, t, n) {
          return function(r, a) {
            try {
              Object(T.h)();
            } catch (e) {
              t(
                (function(e) {
                  return { type: "APPLE_PAY_TRACKING_ERROR", err: e };
                })(e)
              );
            }
            (function(e, t) {
              var n = e.selectedReward,
                r = n.id,
                a = n.shippingLocation,
                o = n.totalCost,
                i = a ? Object(O.a)(a) : void 0;
              return t({
                projectId: e.projectId,
                amount: o.toString(),
                rewardId: r,
                locationId: i
              }).then(function(e) {
                if (e.errors) return Promise.reject(e.errors);
                var t = Object(O.a)(e.data.createCheckout.checkout.id);
                return {
                  data: { checkoutURL: "/checkouts/".concat(t, "/payments") }
                };
              });
            })(e, n)
              .then(function(t) {
                return (function(e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : fetch,
                    a = {
                      token: e,
                      payment_type: "apple_pay",
                      apple_pay_capable: "1",
                      authenticity_token: n
                    },
                    o = {
                      method: "POST",
                      body: JSON.stringify(a),
                      credentials: "same-origin",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      }
                    };
                  return r(t.data.checkoutURL, o).then(function(e) {
                    return e.json();
                  });
                })(r.token.id, t, e.currentUser.authToken);
              })
              .then(function(e) {
                !(function(e, t) {
                  if (200 !== e.status) return Promise.reject(e.data.message);
                  t(ApplePaySession.STATUS_SUCCESS),
                    (window.location.pathname = "".concat(
                      e.data.thankyou_url.replace(/\?.*$/, "")
                    ));
                })(e, a);
              })
              .catch(function(e) {
                t(
                  (function(e) {
                    return { type: "APPLE_PAY_CHECKOUT_FAILURE", err: e };
                  })(e)
                ),
                  a(ApplePaySession.STATUS_FAILURE);
              });
          };
        },
        U = function(e, t) {
          ((r = Stripe.applePay.buildSession(
            F(e, t),
            K(e, t, Y),
            Object(E.a)(function(e, t) {
              return e(L(t));
            }, t)
          )).oncancel = T.a),
            Object(T.g)(),
            r.begin();
        },
        z = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "APPLE_PAY_CHECKOUT_FAILURE":
            case "APPLE_PAY_REQ_FAILURE":
            case "APPLE_PAY_VENDOR_ERROR":
            case "APPLE_PAY_TRACKING_ERROR":
              return B(e, t.err);
            default:
              return e;
          }
        },
        B = function(e, t) {
          return Object(p.f)(e, p.a.run(W, { args: [t] }));
        },
        W = function(e) {
          Array.isArray(e)
            ? e.forEach(function(e) {
                return w.a.notify(e);
              })
            : w.a.notify(e);
        },
        G = function(e, t) {
          switch (t.type) {
            case "ASYNC_LOAD_SUCCESS":
              return J(e, t.data);
            case "SELECT_ON_VALUE_UPDATE":
              return oe(e, t);
            case "ON_BLUR":
              return re(e, t);
            case "APPLE_PAY_CHECKOUT_FAILURE":
            case "APPLE_PAY_REQ_FAILURE":
            case "APPLE_PAY_VENDOR_ERROR":
              return X(e);
            case "ADD_MEMOIZED_SHIPPING_TO_SELECTED_REWARD":
              return $(e, t);
            case "REWARD_APPLE_PAY":
              return ee(e, t.dispatch, Object(E.a)(P, e.selectedReward));
            case "REWARD_CHECKOUT_FAILURE":
              return q(e, t.err);
            case "REWARD_CONTINUE":
              return te(e, Object(E.a)(P, e.selectedReward));
            case "REWARD_REQUEST_REDIRECT":
              return ne(e, t.path);
            case "REWARD_NEW_PLEDGE_VALUE":
              return Object(f.a)({}, e, {
                selectedReward: Object(f.a)({}, e.selectedReward, {
                  totalCost: t.newValue
                })
              });
            case "REWARD_SAVE_OFFSET":
              return Object(f.a)({}, e, {
                rewardsList: Object(f.a)(
                  {},
                  e.rewardsList,
                  Object(y.a)(
                    {},
                    t.rewardId,
                    Object(f.a)({}, e.rewardsList[t.rewardId], {
                      offsetHeight: t.offsetHeight
                    })
                  )
                )
              });
            case "REWARD_SET_SELECTED_REWARD":
              return ae(e, t.rewardFacts);
            case "REWARD_TOUCH_FIELD":
              return Object(f.a)({}, e, {
                validation: Object(p.c)(
                  Object(A.d)(
                    e.validation,
                    t.fieldName,
                    Object(E.a)(P, e.selectedReward)
                  )
                )
              });
            case "REWARD_TRUNCATE_DESCRIPTION":
              return Object(f.a)({}, e, {
                selectedReward: Object(f.a)({}, e.selectedReward, {
                  truncated: C.d
                })
              });
            case "REWARD_TRUNCATION_TOGGLE":
              var n = e.selectedReward.truncated === C.d ? C.e : C.d;
              return Object(f.a)({}, e, {
                selectedReward: Object(f.a)({}, e.selectedReward, {
                  truncated: n
                })
              });
            case "REWARD_UPDATE_APPLE_PAY":
              return Z(e, t);
            case "REWARD_FREEZE_PIN":
              return Object(f.a)({}, e, {
                selectedReward: Object(f.a)({}, e.selectedReward, {
                  doNotPin: !0
                })
              });
            case "NOOP":
            default:
              return e;
          }
        },
        q = function(e, t) {
          return Object(f.a)({}, e, {
            validation: Object(f.a)({}, e.validation, { serverErrors: t })
          });
        },
        V = function(e, t) {
          return (+Object(k.d)(e) || 0) + (+Object(k.d)(t) || 0);
        },
        Q = function(e) {
          window.location.href = window.location.pathname.replace(
            location.pathname,
            e
          );
        },
        $ = function(e, t) {
          var n = Object(p.c)(oe(e, t)),
            r = Object(I.a)(t.namespace)(D.changeSelectedIndex)(
              t.userLocationIndex,
              "Selected from user location"
            );
          return Object(p.f)(
            n,
            p.a.list([p.a.action(R(C.i)), p.a.action(r)], { batch: !0 })
          );
        },
        X = function(e) {
          return q(e, [
            {
              message:
                "We're sorry. Something went wrong with Apple Pay. Please try another payment option or try again."
            }
          ]);
        },
        Z = function(e, t) {
          var n = Object(f.a)({}, e, {
            pledgeData: Object(f.a)({}, e.pledgeData, {
              applePayCapable: t.newValue
            })
          });
          return t.newValue ? Object(p.f)(n, p.a.run(H)) : n;
        },
        J = function(e, t) {
          var n = t.reward.shippingRulesExpanded.nodes.map(function(t) {
              var n = t.cost.symbol || e.pledgeData.currencySymbol,
                r =
                  +t.cost.amount > 0
                    ? "(+ ".concat(n).concat(Math.round(+t.cost.amount), ")")
                    : "";
              return {
                label: "".concat(t.location.name, " ").concat(r),
                value: +t.cost.amount,
                shippingLocation: t.location.id
              };
            }),
            r = e.selectedReward.id,
            a = Object(f.a)({}, e, {
              rewardsList: Object(f.a)(
                {},
                e.rewardsList,
                Object(y.a)(
                  {},
                  r,
                  Object(f.a)({}, e.rewardsList[r], {
                    shippingRulesStatus: S.b,
                    shippingRules: Object(f.a)(
                      {},
                      e.rewardsList[r].shippingRules,
                      { options: n }
                    )
                  })
                )
              )
            }),
            o = n.findIndex(function(t) {
              return Object(O.a)(t.shippingLocation) == e.currentUser.location;
            });
          if (o > -1) {
            var i = n[o].value,
              c = V(e.selectedReward.pledgeCost, i);
            a = Object(f.a)({}, a, {
              selectedReward: Object(f.a)({}, a.selectedReward, {
                shippingLocation: n[o].shippingLocation,
                shippingCost: i,
                totalCost: c
              }),
              rewardsList: Object(f.a)(
                {},
                a.rewardsList,
                Object(y.a)(
                  {},
                  r,
                  Object(f.a)({}, a.rewardsList[r], {
                    memoizedShippingOption: {
                      value: n[o],
                      userLocationIndex: o
                    }
                  })
                )
              )
            });
          }
          var u = Object(I.a)(r)(D.changeSelectedIndex)(
            o,
            "Selected from user location"
          );
          return Object(p.f)(a, p.a.action(u));
        },
        ee = function(e, t, n) {
          return Object(A.g)(n)
            ? Object(p.f)(
                e,
                p.a.run(U, {
                  args: [e, t],
                  successActionCreator: j.c,
                  failActionCreator: function(e) {
                    return L(e);
                  }
                })
              )
            : Object(f.a)({}, e, {
                validation: Object(p.c)(Object(A.c)(e.validation, n))
              });
        },
        te = function(e, t) {
          return Object(A.g)(t)
            ? Object(p.f)(
                e,
                p.a.list(
                  [
                    p.a.run(ie, {
                      args: [e],
                      successActionCreator: j.c,
                      failActionCreator: j.c
                    }),
                    p.a.action(Object(_.b)("Checkout Reward Continue Click"))
                  ],
                  { batch: !0 }
                )
              )
            : Object(f.a)({}, e, {
                validation: Object(p.c)(Object(A.c)(e.validation, t))
              });
        },
        ne = function(e, t) {
          return Object(p.f)(e, p.a.run(Q, { args: [t] }));
        },
        re = function(e, t) {
          return t.namespace && t.namespace === e.selectedReward.id
            ? Object(p.f)(e, p.a.action(R(C.i)))
            : e;
        },
        ae = function(e, t) {
          var n = t.minPledge,
            r = t.id,
            a = t.shippingEnabled;
          if (r === e.selectedReward.id) return e;
          var o = a,
            i = n.amount,
            c = V(i, 0),
            u = Object(f.a)({}, e, {
              selectedReward: Object(f.a)({}, e.selectedReward, {
                id: r,
                pledgeCost: i,
                shippingRequired: o,
                totalCost: c,
                shippingCost: 0,
                shippingLocation: null,
                truncated: null,
                doNotPin: !1
              }),
              validation: Object(f.a)({}, e.validation, {
                touched: {},
                errors: {},
                serverErrors: []
              })
            }),
            s = e.rewardsList[r] ? e.rewardsList[r].shippingRulesStatus : null,
            l = e.rewardsList[r]
              ? e.rewardsList[r].memoizedShippingOption
              : null,
            d =
              o && s === S.b
                ? p.a.list(
                    [
                      p.a.action(Object(_.b)("Checkout Reward Click")),
                      p.a.action(x(l, r))
                    ],
                    { batch: !0 }
                  )
                : p.a.action(Object(_.b)("Checkout Reward Click"));
          return Object(p.f)(u, d);
        },
        oe = function(e, t) {
          var n = e.selectedReward,
            r = n.id,
            a = n.pledgeCost,
            o = n.totalCost,
            i = t.namespace,
            c = t.value,
            u = c.shippingLocation,
            s = c.value;
          if (i !== r) return e;
          var l = V(a, s),
            d = l > o ? l : o;
          return Object(p.f)(
            Object(f.a)({}, e, {
              selectedReward: Object(f.a)({}, e.selectedReward, {
                shippingCost: s,
                totalCost: d,
                shippingLocation: u
              })
            }),
            p.a.action(R(C.i))
          );
        },
        ie = function(e) {
          var t = e.selectedReward,
            n = t.id,
            r = t.shippingLocation,
            a = t.totalCost,
            o = r ? Object(O.a)(r) : void 0,
            i = e.projectId,
            c = a.toString();
          return Y({ projectId: i, amount: c, rewardId: n, locationId: o })
            .then(function(t) {
              if (t.errors) return Promise.reject(t.errors);
              var n = Object(O.a)(t.data.createCheckout.checkout.id),
                r = e.currentUser
                  ? "/checkouts/".concat(n, "/payments/new?clicked_reward=true")
                  : "/checkouts/".concat(n, "/guest?clicked_reward=true");
              return Q(r), { type: "NOOP" };
            })
            .catch(function(e) {
              return (
                e.forEach(function(e) {
                  return w.a.notify(e);
                }),
                (function(e) {
                  return { type: "REWARD_CHECKOUT_FAILURE", err: e };
                })(e)
              );
            });
        },
        ce = n("CMmH"),
        ue = n("/IHD"),
        se = n("SmhT"),
        le = n("o2X6"),
        de = n("CPM0"),
        pe = n("l9zw"),
        fe = function(e) {
          var t,
            n = e.active,
            r = e.children,
            a = e.dispatch,
            o = e.doNotPin,
            i = e.savedOffset,
            c = e.rewardId,
            s = e.type,
            l = e.onClick,
            d = void 0 === l ? function() {} : l,
            p = e.onKeyPress,
            f = void 0 === p ? function() {} : p,
            m = ((t = {}),
            Object(y.a)(t, C.a, {
              text: Object(M.b)("project_page.reward.Select_this_reward"),
              classes: "pledge--available"
            }),
            Object(y.a)(t, C.b, {
              text: Object(M.b)("project_page.reward.Manage_your_pledge"),
              classes: "pledge--backed"
            }),
            Object(y.a)(t, C.c, {
              text: Object(M.b)("project_page.reward.View_your_pledge"),
              classes: "pledge--backed js-view_your_pledge"
            }),
            t);
          return u.a.createElement(
            "div",
            {
              role: "button",
              ref: function(e) {
                if (e && s === C.a && !i && e.offsetTop > 0)
                  setTimeout(function() {
                    return a(
                      (function(e, t) {
                        return {
                          type: "REWARD_SAVE_OFFSET",
                          offsetHeight: t,
                          rewardId: e
                        };
                      })(c, e.offsetTop)
                    );
                  }, 0);
                else if (window && e && n && !o) {
                  var t = document.getElementById("global-header"),
                    r = t && t.classList.contains("stick") ? t.offsetHeight : 0,
                    u = document.getElementById("react-project-header"),
                    l = u ? u.offsetHeight : 820;
                  window.scrollTo(0, i + l - (r + 20)),
                    a({ type: "REWARD_FREEZE_PIN" });
                }
              },
              className: "".concat(
                m[s].classes,
                " hover-group mb3 pointer block text-left"
              ),
              tabIndex: "0",
              onClick: d,
              onKeyPress: f
            },
            !n &&
              u.a.createElement(
                "div",
                { className: "pledge__hover hover-zoomout" },
                u.a.createElement(
                  "div",
                  { className: "pledge__hover-content" },
                  u.a.createElement(pe.d, { type: "body-200" }, m[s].text)
                )
              ),
            r
          );
        },
        me = function(e, t, n, r) {
          !n &&
            r &&
            t &&
            r.clientHeight > 80 &&
            e({ type: "REWARD_TRUNCATE_DESCRIPTION" });
        },
        he = n("S4fH"),
        be = n("w/TO"),
        ge = function(e) {
          return (
            (!e.which || e.which === se.c || e.which === se.l) &&
            (e.which == se.l && e.preventDefault(), !0)
          );
        },
        ve = "relative px3 pt3 pb6 border",
        ye = function(e) {
          var t,
            n,
            r,
            a = e.state,
            o = e.dispatch,
            i = e.dropdowns,
            c = function(e, t) {
              var n = e.id,
                r = e.minPledge,
                a = e.shippingEnabled,
                i = e.shippingRulesStatus;
              if (ge(t)) {
                if (a && i === S.c) {
                  var c = Object(I.a)(n)(le.loadAsync);
                  o(c(Object(O.b)("Reward", n)));
                }
                o({
                  type: "REWARD_SET_SELECTED_REWARD",
                  rewardFacts: { id: n, minPledge: r, shippingEnabled: a }
                });
              }
            },
            s = function(e) {
              return o(
                (function(e) {
                  return { type: "REWARD_CONTINUE", rewardId: e };
                })(e)
              );
            },
            l = function(e) {
              return o(
                (function(e) {
                  return { type: "REWARD_REQUEST_REDIRECT", path: e };
                })(e)
              );
            },
            d = function(e) {
              return o(R(e));
            },
            p = Object(E.a)(function(e, t) {
              return e(
                (function(e, t) {
                  return { type: "REWARD_APPLE_PAY", dispatch: e, rewardId: t };
                })(e, t)
              );
            }, o),
            f = ((t = d),
            (n = 750),
            function() {
              var e = this,
                a = arguments;
              clearTimeout(r),
                (r = setTimeout(function() {
                  t.apply(e, a);
                }, n));
            }),
            m = function(e, t) {
              o({ type: "REWARD_NEW_PLEDGE_VALUE", newValue: t.target.value }),
                f(e);
            },
            h = a.reward.rewardsList[a.reward.rewardsListOrder[0]],
            b =
              !h ||
              h.isCreator ||
              h.campaignSuccessful ||
              !h.campaignLive ||
              a.reward.backedReward.length > 0,
            g = !!a.reward.backedReward.length,
            v = !!a.reward.unavailableRewardsListOrder.length;
          return u.a.createElement(
            "div",
            null,
            u.a.createElement(
              pe.b,
              { atoms: ["normal mb3 mb7-sm mobile-hide"] },
              Object(M.b)("project_page.reward.Support")
            ),
            g &&
              u.a.createElement(_e, {
                state: a.reward,
                backedRewardArray: a.reward.backedReward,
                onRedirectClick: l
              }),
            !b &&
              u.a.createElement(je, {
                state: a.reward,
                onApplePayClick: p,
                onContinueClick: s,
                onPledgeValueChange: m,
                onRewardSelect: c,
                onValidateField: d
              }),
            b && u.a.createElement(Oe, { state: a, onRedirectClick: l }),
            !b &&
              u.a.createElement(we, {
                state: a,
                dispatch: o,
                dropdowns: i,
                onApplePayClick: p,
                onContinueClick: s,
                onPledgeValueChange: m,
                onRewardSelect: c,
                onValidateField: d
              }),
            v && u.a.createElement(Ee, { state: a })
          );
        },
        we = function(e) {
          var t = e.state,
            n = e.dispatch,
            r = e.dropdowns,
            a = e.onApplePayClick,
            o = e.onContinueClick,
            i = e.onPledgeValueChange,
            c = e.onRewardSelect,
            s = e.onValidateField;
          return t.reward.rewardsListOrder.map(function(e) {
            var l = t.reward.rewardsList[e],
              d = e == t.reward.selectedReward.id,
              p = d ? "border-dark-grey-400" : "border-grey-400",
              f = d && t.reward.selectedReward.truncated;
            return u.a.createElement(
              fe,
              {
                active: d,
                dispatch: n,
                doNotPin: t.reward.selectedReward.doNotPin,
                savedOffset: l.offsetHeight,
                rewardId: e,
                type: C.a,
                onClick: Object(E.a)(c, l),
                onKeyPress: Object(E.a)(c, l),
                key: "hover-".concat(e)
              },
              u.a.createElement(ke, {
                key: e,
                reward: l,
                dispatch: n,
                state: t.reward,
                activeReward: d,
                atoms: Object(ue.a)(ve, "pointer", p),
                onApplePayClick: a,
                onBlurField: Object(E.a)(s, C.g),
                onContinueClick: o,
                onPledgeValueChange: Object(E.a)(i, C.g),
                onTruncateClick: function() {
                  return n({ type: "REWARD_TRUNCATION_TOGGLE" });
                },
                ShippingCountryDropdown: r[e],
                selectState: t.shippingSelects["".concat(e, "-select")],
                truncationStatus: f
              })
            );
          });
        },
        _e = function(e) {
          var t = e.state,
            n = e.backedRewardArray,
            r = e.onRedirectClick;
          return n.map(function(e) {
            var n = function(e, t) {
                ge(t) && !e.campaignSuccessful && r(e.managePath);
              },
              a = e.campaignSuccessful ? C.c : C.b;
            return e.id === C.f
              ? u.a.createElement(
                  fe,
                  {
                    type: a,
                    onClick: Object(E.a)(n, e),
                    onKeyPress: Object(E.a)(n, e),
                    key: "hover-".concat(e.id)
                  },
                  u.a.createElement(je, {
                    state: t,
                    backed: !0,
                    backingAmount: e.backingAmount
                  })
                )
              : u.a.createElement(
                  fe,
                  {
                    type: a,
                    onClick: Object(E.a)(n, e),
                    onKeyPress: Object(E.a)(n, e),
                    key: "hover-".concat(e.id)
                  },
                  u.a.createElement(Se, {
                    key: e.id,
                    reward: e,
                    atoms: Object(ue.a)(ve, "pointer border-blue-500")
                  })
                );
          });
        },
        Oe = function(e) {
          var t = e.state,
            n = e.onRedirectClick;
          return t.reward.rewardsListOrder.map(function(e) {
            var r = t.reward.rewardsList[e];
            return u.a.createElement(Ce, {
              key: e,
              atoms: Object(ue.a)(ve, "border-grey-400 mb3"),
              reward: r,
              backerReportClick: Object(E.a)(n, r.reportPath)
            });
          });
        },
        je = function(e) {
          var t = e.backed,
            n = e.backingAmount,
            r = e.state,
            a = e.onApplePayClick,
            o = void 0 === a ? function() {} : a,
            i = e.onContinueClick,
            c = void 0 === i ? function() {} : i,
            s = e.onPledgeValueChange,
            l = void 0 === s ? function() {} : s,
            d = e.onRewardSelect,
            p = void 0 === d ? function() {} : d,
            f = e.onValidateField,
            m = void 0 === f ? function() {} : f,
            h = "\n    "
              .concat(r.pledgeData.currencySymbol, "\n    ")
              .concat(r.pledgeData.defaultPledge.min);
          return u.a.createElement(he.g, {
            atoms: Object(ue.a)(ve),
            backed: t,
            backingAmount: n,
            continueClick: c,
            currentTotalCost: r.selectedReward.totalCost,
            errors: Object(be.c)(N(h))({ fields: [C.h], state: r.validation }),
            onBlurField: Object(E.a)(m, C.h),
            onApplePayClick: o,
            onPledgeValueChange: Object(E.a)(l, C.h),
            onRewardClick: p,
            onRewardKeyPress: p,
            pledgeData: r.pledgeData,
            selected: r.selectedReward.id === C.f,
            serverErrors: r.validation.serverErrors
          });
        },
        Ee = function(e) {
          var t = e.state;
          return u.a.createElement(
            "div",
            null,
            u.a.createElement(
              pe.b,
              { weight: "normal" },
              Object(M.b)("projects.rewards_list_experiment.All_gone")
            ),
            t.reward.unavailableRewardsListOrder.map(function(e) {
              var n = t.reward.unavailableRewardsList[e];
              return u.a.createElement(Ye, {
                key: e,
                reward: n,
                atoms: Object(ue.a)("bg-grey-100 border-grey-400 mb3", ve)
              });
            })
          );
        },
        ke = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            r = e.reward,
            a = e.dispatch,
            o = e.activeReward,
            i = e.truncationStatus,
            c = e.ShippingCountryDropdown,
            s = e.selectState,
            l = e.state,
            d = e.onApplePayClick,
            p = e.onBlurField,
            f = e.onContinueClick,
            m = e.onPledgeValueChange,
            h = e.onTruncateClick,
            b = o,
            g = b && r.shippingEnabled,
            v = "\n    "
              .concat(r.minPledge.symbol, "\n    ")
              .concat(
                +l.selectedReward.pledgeCost + l.selectedReward.shippingCost,
                "\n  "
              ),
            y = Object(be.c)(N(v)),
            w = Object(E.a)(me, a, b, i);
          return u.a.createElement(
            "div",
            { className: Object(ue.a)(n) },
            u.a.createElement(he.h, {
              active: b,
              onTruncateClick: h,
              reward: r,
              truncateReward: w,
              truncationStatus: i
            }),
            u.a.createElement(he.b, { reward: r }),
            u.a.createElement(
              de.a,
              {
                enter: "slide-down",
                leave: "slide-up",
                durationLeave: 150,
                durationAppear: 300,
                open: b
              },
              b &&
                u.a.createElement(he.i, {
                  consts: { DISPLAY_SHIPPING: g },
                  reward: r,
                  selectState: s,
                  dispatch: a,
                  currentTotalCost: l.selectedReward.totalCost,
                  onApplePayClick: Object(E.a)(d, r.id),
                  onBlurField: p,
                  onClick: Object(E.a)(f, r.id),
                  onPledgeValueChange: m,
                  pledgeData: l.pledgeData,
                  ShippingCountryDropdown: c,
                  validator: y,
                  validation: l.validation
                })
            )
          );
        },
        Se = function(e) {
          var t = e.atoms,
            n = e.reward,
            r = n.campaignSuccessful,
            a = n.unavailable;
          return u.a.createElement(
            "div",
            { className: Object(ue.a)(t) },
            u.a.createElement(he.a, null),
            u.a.createElement(he.h, { reward: n }),
            a && u.a.createElement(he.k, null),
            u.a.createElement(he.b, { reward: n }),
            r && u.a.createElement(he.j, { surveys: n.surveys })
          );
        },
        Ce = function(e) {
          var t = e.atoms,
            n = e.backerReportClick,
            r = e.reward,
            a = r.campaignSuccessful,
            o = r.isCreator,
            i = +r.backersCount > 0;
          return u.a.createElement(
            "div",
            { className: Object(ue.a)("default-cursor", t) },
            u.a.createElement(he.h, { reward: r }),
            u.a.createElement(he.b, { reward: r }),
            a &&
              o &&
              i &&
              u.a.createElement(he.d, {
                surveys: r.creatorSurveyData,
                onClick: n
              })
          );
        },
        Ye = function(e) {
          var t = e.atoms,
            n = e.reward;
          return u.a.createElement(
            "div",
            { className: Object(ue.a)(t) },
            u.a.createElement(he.h, { reward: n }),
            u.a.createElement(he.k, null),
            u.a.createElement(he.b, { reward: n, unavailable: !0 })
          );
        };
      n.d(t, "backerRewardsInit", function() {
        return xe;
      });
      var De = function(e) {
          var t = e.state,
            n = e.dispatch,
            r = e.dropdowns;
          return u.a.createElement(ye, { state: t, dispatch: n, dropdowns: r });
        },
        Ie = function(e, t) {
          if (
            void 0 === e.reward.pledgeData.applePayCapable &&
            "undefined" != typeof Stripe
          ) {
            var n = void 0 !== window.STRIPE_PUBLISHABLE_KEY,
              r = (function(e, t) {
                return !!(
                  e &&
                  t &&
                  void 0 !== e.current_user &&
                  void 0 !== e.current_project &&
                  void 0 !== e.apple_pay_countries &&
                  "live" === e.current_project.get("state") &&
                  !/\/retry$/.test(e.location.pathname) &&
                  "pledges_edit" !== document.body.id &&
                  e.apple_pay_countries.indexOf(
                    e.current_project.get("country")
                  ) >= 0
                );
              })(window, n);
            (a = function(e) {
              return t({ type: "REWARD_UPDATE_APPLE_PAY", newValue: e });
            }),
              r && "undefined" != typeof Stripe
                ? (Stripe.setPublishableKey(window.STRIPE_PUBLISHABLE_KEY),
                  Stripe.applePay.checkAvailability(
                    (function(e, t) {
                      return function(n) {
                        return n ? e() : t();
                      };
                    })(
                      function() {
                        return a(!0);
                      },
                      function() {
                        return a(!1);
                      }
                    )
                  ))
                : a(!1);
          }
          var a;
        },
        Ae = function() {
          var e = document.getElementById("react-backer-rewards"),
            t = (o =
              o ||
              (function(e) {
                var t,
                  n = JSON.parse(e.availableRewards),
                  r = JSON.parse(e.unavailableRewards),
                  a = JSON.parse(e.backedReward),
                  o = JSON.parse(e.pledgeData),
                  i = Object(g.b)(n),
                  c = i.shippingReducers,
                  u = i.shippingDropdowns,
                  s = i.shippingStates,
                  l = v(b.a, b.b, n),
                  d = l.rewardsList,
                  p = l.rewardsListOrder,
                  y = v(b.a, b.b, r),
                  w = y.rewardsList,
                  _ = y.rewardsListOrder;
                return {
                  hydratedState: {
                    reward: Object(f.a)({}, b.d, {
                      backedReward: a,
                      rewardsList: d,
                      rewardsListOrder: p,
                      unavailableRewardsList: w,
                      unavailableRewardsListOrder: _,
                      currentUser: window.current_checkout
                        ? {
                            location: m.maybe
                              .fromNullable(
                                window.current_checkout.data.location_id
                              )
                              .getOrElse(null),
                            authToken: Object(h.b)(document)
                          }
                        : null,
                      projectName: window.current_project
                        ? m.maybe
                            .fromNullable(window.current_project.data.name)
                            .getOrElse(null)
                        : null,
                      projectId: ((t = document.getElementById(
                        "watch-project-modal"
                      )),
                      m.maybe.fromNullable(t).chain(function(e) {
                        return JSON.parse(e.dataset.watch_project);
                      }).project_id),
                      pledgeData: o,
                      selectedReward: Object(f.a)({}, b.d.selectedReward, {
                        projectMin: o.defaultPledge.min
                      })
                    }),
                    shippingSelects: s
                  },
                  shippingReducers: c,
                  shippingDropdowns: u
                };
              })(e.dataset)),
            n = t.hydratedState,
            r = t.shippingReducers,
            c = t.shippingDropdowns,
            s = Object(p.b)({
              applePay: z,
              reward: G,
              shippingSelects: Object(p.b)(Object(i.a)({}, r)),
              tracking: ce.a
            });
          (a = a || Object(d.a)(s, n)),
            l.a.render(
              u.a.createElement(De, {
                state: a.getState(),
                dispatch: a.dispatch,
                dropdowns: c
              }),
              e,
              Ie.bind(null, a.getState(), a.dispatch)
            );
        },
        xe = function() {
          document.getElementById("react-backer-rewards") &&
            (Ae(), a.subscribe(Ae));
        };
      xe();
    },
    PhMr: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return function(t) {
          return t[e].apply(t, n);
        };
      };
    },
    Qm2c: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = {
        name: "default",
        "primary-light": "soft-black",
        "primary-dark": "black",
        "primary-accent": "ksr-green-400",
        "conferences-blue": "conferences-blue",
        "warning-orange": "orange-500"
      };
    },
    S1QU: function(e, t, n) {
      "use strict";
      var r = n("60hy"),
        a = n("2UXI"),
        o = Object(r.a)(window.current_checkout);
      o &&
        o.on_change(function(e) {
          e.reward
            ? Object(a.c)("Checkout Reward Changed")
            : void 0 !== e.location_id
            ? Object(a.c)("Checkout Location Changed")
            : e.shipping_amount
            ? Object(a.c)("Checkout Shipping Amount Changed")
            : e.amount && Object(a.c)("Checkout Amount Changed");
        }),
        (window.current_checkout = o),
        (t.a = o);
    },
    S4fH: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return g;
      }),
        n.d(t, "b", function() {
          return v;
        }),
        n.d(t, "d", function() {
          return y;
        }),
        n.d(t, "c", function() {
          return _;
        }),
        n.d(t, "e", function() {
          return O;
        }),
        n.d(t, "f", function() {
          return C;
        }),
        n.d(t, "g", function() {
          return Y;
        }),
        n.d(t, "h", function() {
          return D;
        }),
        n.d(t, "i", function() {
          return I;
        }),
        n.d(t, "j", function() {
          return R;
        }),
        n.d(t, "k", function() {
          return M;
        });
      var r = n("wx14"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("94td"),
        c = n("lTkF"),
        u = n("Fkal"),
        s = n("5igC"),
        l = n("LtMG"),
        d = n("l9zw"),
        p = n("J61U"),
        f = n("/IHD"),
        m = n("I8yn"),
        h = n("yWeZ"),
        b = n("FCah"),
        g = function() {
          return o.a.createElement(
            d.a,
            { atoms: ["mb3"] },
            o.a.createElement(
              d.e,
              {
                type: "caption-100",
                color: "white",
                weight: "bold",
                atoms: ["absolute t0 l3 inline-block py1 px2 bg-blue-500"]
              },
              Object(i.b)("project_page.reward.You_selected")
            )
          );
        },
        v = function(e) {
          var t = e.reward,
            n = !e.unavailable && t.campaignLive && t.endsAt,
            r = t.campaignLive && t.limitExists;
          return o.a.createElement(
            d.a,
            { atoms: ["mt3"] },
            n && o.a.createElement(j, { end: t.endsAt }),
            n && r && "• ",
            r &&
              o.a.createElement(C, {
                remaining: t.remainingItems,
                limit: t.limit
              }),
            o.a.createElement(
              d.e,
              { type: "caption-100", color: "dark-grey-500", atoms: ["block"] },
              Object(i.b)("project_page.reward.backers_count.other", {
                formatted_count: t.backersCount
              })
            )
          );
        },
        y = function(e) {
          var t = e.onClick,
            n = e.surveys;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              u.a,
              { size: "small", color: "blue", atoms: ["mt3"], onClick: t },
              Object(i.b)("project_page.reward.Backer_report")
            ),
            o.a.createElement(R, { surveys: n })
          );
        },
        w = function(e) {
          var t = e.onClick,
            n = e.serverErrors,
            r = void 0 === n ? [] : n;
          return o.a.createElement(
            "div",
            null,
            !!r.length &&
              o.a.createElement(
                "ul",
                { className: "red-500 pt3" },
                r.map(function(e) {
                  return o.a.createElement("li", { key: e.message }, e.message);
                })
              ),
            o.a.createElement(
              u.a,
              { color: "green", atoms: ["mt3 w100p"], onClick: t },
              Object(i.b)("project_page.reward.Continue")
            )
          );
        },
        _ = function(e) {
          var t = e.amount,
            n = e.atoms;
          return o.a.createElement(
            "div",
            { className: "basis100p" },
            o.a.createElement(
              d.e,
              { color: "dark-grey-500", atoms: n },
              Object(i.b)("project_page.reward.Estimated_conversion", {
                amount: t
              })
            )
          );
        },
        O = function(e, t) {
          return o.a.createElement(c.a, { format: e, date: t });
        },
        j = function(e) {
          var t = e.end;
          return o.a.createElement(
            "div",
            {
              className: "inline pledge__limit ksr_page_timer",
              "data-end_time": t
            },
            o.a.createElement("span", { className: "js-num" }),
            " ",
            o.a.createElement("span", { className: "js-text" }),
            " "
          );
        },
        E = function(e) {
          return function(t) {
            var n = t.atoms,
              r = t.info;
            return o.a.createElement(
              d.a,
              { atoms: ["basis50p"] },
              o.a.createElement(d.e, { color: "dark-grey-500", atoms: n }, e),
              o.a.createElement(d.e, { color: "soft-black", atoms: ["lh3"] }, r)
            );
          };
        },
        k = E(Object(i.b)("project_page.reward.Estimated_delivery")),
        S = function(e) {
          var t = e.atoms,
            n = e.items;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              d.e,
              { color: "dark-grey-500", atoms: t },
              Object(i.b)("project_page.reward.Includes")
            ),
            o.a.createElement(
              "ul",
              { className: "type-14 ml3 soft-black medium mb2 pl2" },
              n.map(function(e, t) {
                return o.a.createElement(
                  "li",
                  { key: t, className: "list-disc" },
                  +e.quantity > 1
                    ? "".concat(e.quantity, "x ").concat(e.name)
                    : e.name
                );
              })
            )
          );
        },
        C = function(e) {
          var t = e.remaining,
            n = e.limit,
            r = Object(i.b)(
              "project_page.reward.rewardremaining_left_of_rewardlimit",
              { rewardremaining: t, rewardlimit: n }
            );
          return o.a.createElement(
            d.e,
            { color: "red-500", type: "caption-100" },
            r
          );
        },
        Y = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            r = e.backed,
            a = e.backingAmount,
            c = e.continueClick,
            u = e.currentTotalCost,
            s = e.errors,
            l = e.onApplePayClick,
            p = e.onBlurField,
            v = e.onPledgeValueChange,
            y = e.onRewardClick,
            _ = e.onRewardKeyPress,
            O = e.pledgeData,
            j = e.selected,
            E = e.serverErrors,
            k = Object(f.a)(
              n,
              "pointer block text-left new-form",
              !j && !r && "border-grey-400",
              j && "border-dark-grey-400",
              r ? "mb0 pointer border-blue-500" : "mb3"
            ),
            S = Object(m.a)(y, { id: h.f, minPledge: O.defaultPledge });
          return o.a.createElement(
            "div",
            {
              role: "button",
              className: k,
              tabIndex: "0",
              onClick: S,
              onKeyPress: Object(m.a)(_, {
                id: h.f,
                minPledge: O.defaultPledge
              })
            },
            r && o.a.createElement(g, null),
            o.a.createElement(
              d.b,
              {
                level: 2,
                type: "subhead-300",
                weight: "normal",
                color: "soft-black",
                atoms: ["mb3"]
              },
              Object(i.b)("project_page.reward.Make_a_pledge_without_a_reward")
            ),
            o.a.createElement(b.a, {
              value: r ? a : null !== u && j ? u : O.defaultPledge.amount,
              convert: O.convertCurrency,
              errors: s,
              onBlurField: p,
              onClick: S,
              onSelect: S,
              onChange: v,
              minPledge: O.defaultPledge,
              pledgeData: O,
              idForKey: h.f,
              idForField: h.h
            }),
            j &&
              !O.applePayCapable &&
              o.a.createElement(w, {
                onClick: Object(m.a)(c, h.f),
                serverErrors: E
              }),
            j &&
              O.applePayCapable &&
              o.a.createElement(A, {
                applePayClick: Object(m.a)(l, h.f),
                otherPaymentClick: Object(m.a)(c, h.f),
                serverErrors: E
              })
          );
        },
        D = function(e) {
          var t,
            n,
            r = e.reward,
            a = e.active,
            c = e.onTruncateClick,
            u = void 0 === c ? function() {} : c,
            s = e.truncateReward,
            l = void 0 === s ? function() {} : s,
            p = e.truncationStatus,
            m = ["block text-uppercase type-10"],
            b = Object(f.a)(m, "track-loose"),
            g = Object(f.a)(m, "ls-5"),
            v = a && p == h.d,
            y = a && p == h.e,
            w = v
              ? Object(i.b)("project_page.reward.Read_more")
              : Object(i.b)("project_page.reward.Less"),
            j = Object(f.a)("mb4 relative", v && "h9 clip"),
            E = v ? "-0.1rem" : "-2rem";
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              d.b,
              {
                level: 2,
                type: "subhead-300",
                weight: "normal",
                color: "soft-black",
                atoms: ["mb3"]
              },
              ((t = r.maxPledge),
              (n = r.minPledge.formatted),
              t
                ? Object(i.b)("project_page.reward.Pledge", { amount: n })
                : Object(i.b)("project_page.reward.Pledge_or_more", {
                    amount: n
                  })),
              r.convertCurrency &&
                o.a.createElement(_, {
                  amount: r.conversionEstimate,
                  atoms: Object(f.a)(b, "pt1")
                })
            ),
            r.title &&
              o.a.createElement(
                d.b,
                {
                  level: 3,
                  type: "body-200",
                  weight: "normal",
                  color: "soft-black",
                  atoms: ["mb3"]
                },
                r.title
              ),
            o.a.createElement(
              "div",
              { ref: l, className: j },
              (v || y) &&
                o.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: u,
                    className:
                      "absolute r0 pl6 pr2 type-14 gradient-transparent-to-white-20p",
                    style: { bottom: E, outline: "none" }
                  },
                  w
                ),
              r.description &&
                o.a.createElement(
                  d.d,
                  {
                    type: "body-100",
                    color: "dark-grey-500",
                    atoms: ["lh3 text-prewrap"]
                  },
                  r.description
                ),
              !!r.items.length &&
                o.a.createElement(S, { items: r.items, atoms: b })
            ),
            o.a.createElement(
              d.a,
              { atoms: ["flex"] },
              r.deliveryDate &&
                o.a.createElement(k, {
                  atoms: g,
                  info: O(r.deliveryDate.format, r.deliveryDate.date)
                }),
              r.shippingSummary &&
                o.a.createElement(x, { atoms: g, info: r.shippingSummary })
            )
          );
        },
        I = function(e) {
          var t = e.consts,
            n = e.currentTotalCost,
            a = e.dispatch,
            i = e.onApplePayClick,
            c = e.onBlurField,
            u = e.onClick,
            s = e.onPledgeValueChange,
            l = e.pledgeData,
            d = e.reward,
            f = e.selectState,
            m = e.ShippingCountryDropdown,
            g = e.validator,
            v = e.validation,
            y = g({ fields: [h.i], state: v });
          return o.a.createElement(
            "div",
            { className: "mt6 new-form" },
            t.DISPLAY_SHIPPING &&
              o.a.createElement(
                "div",
                { className: "mb3" },
                o.a.createElement(
                  m,
                  Object(r.a)(
                    { state: f, dispatch: a, hasErrors: y },
                    d.shippingRules
                  )
                ),
                o.a.createElement(p.d, { name: h.i, id: d.id, errors: y })
              ),
            o.a.createElement(b.a, {
              convert: d.convertCurrency,
              errors: g({ fields: [h.g], state: v }),
              idForField: h.g,
              idForKey: d.id,
              label: !0,
              pledgeData: l,
              minPledge: d.minPledge,
              onBlurField: c,
              onChange: s,
              value: n
            }),
            !l.applePayCapable &&
              o.a.createElement(w, {
                onClick: u,
                serverErrors: v.serverErrors
              }),
            l.applePayCapable &&
              o.a.createElement(A, {
                applePayClick: i,
                otherPaymentClick: u,
                serverErrors: v.serverErrors
              })
          );
        },
        A = function(e) {
          var t = e.applePayClick,
            n = e.otherPaymentClick,
            r = e.serverErrors;
          return o.a.createElement(
            o.a.Fragment,
            null,
            !!r.length &&
              o.a.createElement(
                "ul",
                { className: "red-500 pt3" },
                r.map(function(e) {
                  return o.a.createElement("li", { key: e.message }, e.message);
                })
              ),
            o.a.createElement(
              "div",
              { className: "mt3 pledge__applepay js-applepay" },
              o.a.createElement(
                "button",
                { className: "btn btn--applepay btn--block", onClick: t },
                o.a.createElement("span", { className: "btn-text" })
              ),
              o.a.createElement(
                "button",
                {
                  className:
                    "btn block text-center w100p mt2 bold text-14 dark-grey-500 other-payment-button",
                  onClick: n
                },
                Object(i.b)("project_page.reward_form.Other_payment_options"),
                o.a.createElement(l.f, {
                  name: "icon--arrow-right",
                  size: "12",
                  atoms: ["pl2"]
                })
              )
            ),
            o.a.createElement(
              "div",
              { className: "mt5 text-center" },
              o.a.createElement(
                d.d,
                {
                  type: "caption-100",
                  color: "dark-grey-400",
                  atoms: ["bold", "mb0"]
                },
                Object(i.b)(
                  "project_page.reward_form.Kickstarter_is_not_a_store"
                )
              ),
              o.a.createElement(
                d.d,
                { type: "caption-100", color: "dark-grey-400" },
                Object(i.b)(
                  "project_page.reward_form.Its_a_way_to_bring_creative_projects_to_life"
                )
              ),
              o.a.createElement(
                s.a,
                {
                  href: "http://www.kickstarter.com/trust?ref=project_reward",
                  target: "_blank",
                  atoms: ["type-12"]
                },
                Object(i.b)(
                  "project_page.reward_form.Learn_more_about_accountability"
                )
              )
            )
          );
        },
        x = E(Object(i.b)("project_page.reward.Ships_to")),
        R = function(e) {
          var t = e.surveys,
            n = !!t,
            r = "block text-uppercase type-10 ls-5";
          return o.a.createElement(
            d.a,
            { atoms: ["mt3 pr3"] },
            !n &&
              o.a.createElement(
                d.e,
                { atoms: r },
                Object(i.b)("project_page.reward.No_surveys_sent")
              ),
            n &&
              t.map(function(e, t) {
                var n = !!e.count;
                return o.a.createElement(
                  d.a,
                  { color: "dark-grey-500", type: "body-100", key: t },
                  o.a.createElement(
                    d.e,
                    { atoms: r },
                    Object(i.b)("project_page.reward.Survey_sent")
                  ),
                  o.a.createElement(c.a, { format: e.format, date: e.date }),
                  n &&
                    o.a.createElement(
                      d.e,
                      null,
                      " ",
                      "·",
                      " ",
                      Object(i.b)("project_page.reward.responses", {
                        responses: e.count
                      }),
                      " "
                    )
                );
              })
          );
        },
        M = function() {
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              d.e,
              {
                type: "caption-100",
                color: "soft-black",
                weight: "bold",
                atoms: ["inline-block p2 mt3 bg-grey-400"]
              },
              Object(i.b)("project_page.reward.Reward_no_longer_available")
            )
          );
        };
    },
    SOj7: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return o;
        });
      var r = "unloaded",
        a = "trying",
        o = "loaded";
    },
    SmhT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return i;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "k", function() {
          return u;
        }),
        n.d(t, "l", function() {
          return s;
        }),
        n.d(t, "m", function() {
          return l;
        }),
        n.d(t, "n", function() {
          return d;
        }),
        n.d(t, "i", function() {
          return p;
        }),
        n.d(t, "e", function() {
          return f;
        }),
        n.d(t, "f", function() {
          return m;
        }),
        n.d(t, "h", function() {
          return h;
        }),
        n.d(t, "o", function() {
          return b;
        }),
        n.d(t, "j", function() {
          return g;
        });
      var r = 8,
        a = 40,
        o = 13,
        i = 27,
        c = 37,
        u = 39,
        s = 32,
        l = 9,
        d = 38,
        p = 2,
        f = 74,
        m = 75,
        h = [
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          f,
          m,
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88,
          89,
          90
        ],
        b = function(e) {
          return e >= 66 && e <= 90;
        },
        g = [18, 91, 93, 17, a, o, i, c, u, 16, l, d, 91, 92, 93, 17, 224];
    },
    "Tge+": function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return v;
      }),
        n.d(t, "e", function() {
          return E;
        }),
        n.d(t, "b", function() {
          return k;
        }),
        n.d(t, "c", function() {
          return S;
        }),
        n.d(t, "a", function() {
          return R;
        });
      var r = n("wx14"),
        a = n("KQm4"),
        o = n("vpQ4"),
        i = n("q1tI"),
        c = n.n(i),
        u = n("0fse"),
        s = n("SmhT"),
        l = n("eEls"),
        d = n("udTa"),
        p = n("/IHD"),
        f = n("LtMG"),
        m = n("l9zw"),
        h = n("2UXI"),
        b = n("94td"),
        g = n("Qm2c"),
        v = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return {
            isOpen: !1,
            currentIndex: e,
            highlightedIndex: e,
            isKeySelectionEngaged: !1
          };
        },
        y = function() {
          return { type: "TOGGLE_SELECT" };
        },
        w = function(e) {
          return { type: "ON_BLUR", currentTarget: e.currentTarget };
        },
        _ = function() {
          return { type: "CLOSE_SELECT" };
        },
        O = function(e, t, n) {
          return {
            type: "CHANGE_SELECTED_INDEX",
            e: e,
            newSelectedIndex: t,
            trackingId: n
          };
        },
        j = function(e) {
          return { type: "CHANGE_HIGHLIGHTED_INDEX", newHighlightedIndex: e };
        },
        E = function(e) {
          return function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : v(),
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case "TOGGLE_SELECT":
                var r = t.isOpen ? Y : C;
                return Object(u.f)(
                  Object(o.a)({}, t, {
                    isOpen: !t.isOpen,
                    highlightedIndex: t.currentIndex
                  }),
                  u.a.run(r, { args: [e] })
                );
              case "CLOSE_SELECT":
                return Object(u.f)(
                  Object(o.a)({}, t, { isOpen: !1 }),
                  u.a.run(Y, { args: [e] })
                );
              case "ON_BLUR":
                return Object(u.f)(
                  t,
                  u.a.run(x, {
                    args: [n.currentTarget],
                    successActionCreator: _
                  })
                );
              case "CHANGE_SELECTED_INDEX":
                var a = k(t, n.newSelectedIndex),
                  i =
                    a.currentIndex !== t.currentIndex
                      ? u.a.run(D, { args: [e, n.trackingId] })
                      : u.a.none;
                return Object(u.f)(
                  a,
                  u.a.list([u.a.run(I, { args: [n.e] }), i], { batch: !0 })
                );
              case "ON_KEYDOWN":
                return Object(u.f)(t, u.a.action(A(n.e, t.isOpen, n.options)));
              case "ON_VALID_KEYDOWN":
                return S(t, n.keyCode, n.options);
              case "CHANGE_HIGHLIGHTED_INDEX":
                return Object(o.a)({}, t, {
                  highlightedIndex: n.newHighlightedIndex
                });
              case "NOOP":
              default:
                return t;
            }
          };
        },
        k = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : e.highlightedIndex;
          return t !== e.currentIndex
            ? Object(o.a)({}, e, {
                currentIndex: t,
                isOpen: !1,
                isKeySelectionEngaged: !1
              })
            : Object(o.a)({}, e, { isOpen: !1, isKeySelectionEngaged: !1 });
        },
        S = function(e, t, n) {
          if (Object(s.o)(t)) {
            var r = n.findIndex(function(e) {
              return (
                e.label
                  .charAt(0)
                  .toUpperCase()
                  .charCodeAt(0) == t
              );
            });
            return Object(o.a)({}, e, {
              currentIndex: r,
              highlightedIndex: r,
              isKeySelectionEngaged: !0
            });
          }
          switch (t) {
            case s.l:
              return e.isOpen ? k(e) : Object(o.a)({}, e, { isOpen: !0 });
            case s.c:
              return e.isOpen ? k(e) : Object(o.a)({}, e);
            case s.d:
              return Object(o.a)({}, e, {
                isOpen: !1,
                highlightedIndex: e.currentIndex,
                isKeySelectionEngaged: !1
              });
            case s.n:
              var a = e.highlightedIndex - 1,
                i = Math.max(a, 0);
              return Object(o.a)({}, e, {
                highlightedIndex: i,
                isKeySelectionEngaged: !0
              });
            case s.b:
              var c = n.length - 1,
                u = e.highlightedIndex + 1,
                l = Math.min(u, c);
              return Object(o.a)({}, e, {
                highlightedIndex: l,
                isKeySelectionEngaged: !0
              });
            default:
              return e;
          }
        },
        C = function(e) {
          Object(h.c)("Opened Select", { context: e });
        },
        Y = function(e) {
          Object(h.c)("Closed Select", { context: e });
        },
        D = function(e, t) {
          Object(h.c)("Selected Item", { context: e, id: t });
        },
        I = function(e) {
          e.stopPropagation();
        },
        A = function(e, t, n) {
          var r = [s.c, s.l, s.d, s.b, s.n].concat(Object(a.a)(s.h));
          return e.which === s.m && t
            ? (e.preventDefault(), { type: "NOOP" })
            : r.includes(e.which)
            ? (e.preventDefault(),
              (function(e, t) {
                return { type: "ON_VALID_KEYDOWN", keyCode: e, options: t };
              })(e.which, n))
            : { type: "NOOP" };
        },
        x = Object(d.a)(0, function(e) {
          return e.contains(document.activeElement)
            ? Promise.reject("error")
            : Promise.resolve();
        }),
        R = function(e) {
          var t = e.theme,
            n = void 0 === t ? g.a : t,
            a = e.atoms,
            o = void 0 === a ? [] : a,
            i = e.placeholder,
            u = e.state,
            s = e.onStateChange,
            d = e.onBlur,
            f = e.options,
            h = e.small,
            b = e.titleString,
            v = e.toLabel,
            _ = e.toId,
            E = e.hasErrors,
            k = void 0 !== E && E,
            S = e.shadow,
            C = void 0 === S || S,
            Y = u.isOpen,
            D = u.currentIndex,
            I = u.highlightedIndex,
            A = h ? "h7" : "h9",
            x = h ? "body-100" : "subhead-300",
            R = h ? "py1" : "py2",
            P = h ? "px2 px3-sm" : "px3",
            L = Object(p.a)(
              "absolute",
              "w100p",
              "shadow-3",
              "border",
              "shadow-card",
              "scroll-y",
              "max-h50",
              "p1",
              "bg-white",
              "mt1",
              "mb10",
              "rounded",
              "z-dropdown-3",
              "border-box",
              x,
              o,
              "border-".concat(n["primary-light"]),
              !Y && "visually-hide"
            ),
            T = null !== D ? f[D] : null,
            H = f.map(function(e, t) {
              var a = D === t,
                o = I === t;
              return c.a.createElement(
                N,
                Object(r.a)(
                  {
                    key: t,
                    onOptionSelect: Object(l.a)(s, O),
                    onOptionHover: Object(l.a)(s, j)
                  },
                  {
                    option: e,
                    index: t,
                    isCurrent: a,
                    isHighlighted: o,
                    isOpen: Y,
                    toLabel: v,
                    toId: _,
                    theme: n,
                    typeSize: x,
                    yPaddingClass: R
                  }
                )
              );
            }),
            F = Object(l.a)(s, w, function(e) {
              return d && d(), e;
            });
          return c.a.createElement(
            "div",
            { className: "navy-700" },
            b &&
              c.a.createElement(
                m.c,
                {
                  type: "body-100",
                  weight: "medium",
                  atoms: ["mb2", "soft-black"],
                  "aria-hidden": "true"
                },
                b
              ),
            c.a.createElement(
              "div",
              {
                role: "listbox",
                "aria-labelledby": "custom-select-heading-label",
                onBlur: F,
                onKeyDown: Object(l.a)(s, function(e) {
                  return (function(e, t) {
                    return { type: "ON_KEYDOWN", options: e, e: t };
                  })(f, e);
                }),
                className: "relative w100p pointer input-keyboard-focusable-".concat(
                  n["primary-light"]
                )
              },
              c.a.createElement(M, {
                onDropdownContainerClick: Object(l.a)(s, y),
                label: T ? v(T) : i,
                color: T ? "soft-black" : "dark-grey-500",
                heightSize: A,
                shadow: C,
                typeSize: x,
                yPaddingClass: R,
                xPaddingClasses: P,
                theme: n,
                hasErrors: k
              }),
              c.a.createElement("ul", { className: L, role: "presentation" }, H)
            )
          );
        },
        M = function(e) {
          var t = e.color,
            n = e.heightSize,
            r = e.hasErrors,
            a = e.label,
            o = e.onDropdownContainerClick,
            i = e.shadow,
            u = e.theme,
            s = e.typeSize,
            l = e.yPaddingClass,
            d = e.xPaddingClasses,
            h = i ? "border-transparent" : "border-grey-400",
            g = Object(p.a)(
              i && "shadow-hover",
              "border",
              r ? "border-red-400" : h,
              "hover-border-".concat(u["primary-light"]),
              "transition-all",
              "rounded",
              l,
              d,
              "bg-white flex",
              "items-center",
              i && "shadow-2",
              n,
              "input-keyboard-focusable-".concat(u["primary-light"])
            );
          return c.a.createElement(
            "div",
            {
              className: g,
              onClick: o,
              "aria-hidden": "true",
              "aria-label": Object(b.b)(
                "components.custom_select.select_an_option"
              ),
              tabIndex: "0"
            },
            c.a.createElement(
              m.e,
              {
                id: "custom-select-heading-label",
                type: s,
                atoms: ["grow-1", "text-truncate", "pr1", "book", t]
              },
              a
            ),
            c.a.createElement(f.f, {
              name: "delta-down",
              size: "10",
              atoms: ["flex-noshrink"]
            })
          );
        },
        N = function(e) {
          var t = e.option,
            n = e.index,
            r = e.isOpen,
            a = e.onOptionSelect,
            o = e.onOptionHover,
            i = e.isCurrent,
            u = e.isHighlighted,
            s = e.toLabel,
            l = e.toId,
            d = e.theme,
            p = e.typeSize,
            h = e.yPaddingClass,
            b = ["px2 flex items-center transition-all lh3 soft-black"]
              .concat(u ? ["bg-grey-400"] : [])
              .concat([h])
              .join(" ");
          return c.a.createElement(
            "li",
            {
              role: "option",
              tabIndex: r ? "0" : "-1",
              "aria-selected": i,
              onClick: function(e) {
                return a(e, n, l(t));
              },
              onMouseOver: function() {
                return o(n);
              },
              className: b,
              onKeyDown: function() {},
              onFocus: function() {}
            },
            c.a.createElement(
              m.e,
              { id: "custom-select-heading-label", type: p, atoms: ["mr2"] },
              s(t)
            ),
            i &&
              c.a.createElement(
                "span",
                {
                  className: "circle flex-noshrink h3 w3 bg-".concat(
                    d["primary-accent"],
                    " inline-flex justify-center items-center"
                  )
                },
                c.a.createElement(f.f, {
                  name: "check",
                  size: "9",
                  atoms: ["relative", "fill-white"]
                })
              )
          );
        };
    },
    WjF9: function(e, t, n) {
      "use strict";
      var r = n("60hy"),
        a = Object(r.c)(window.current_user);
      (window.current_user = a), (t.a = a);
    },
    Wp1a: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("q1tI"),
        a = n.n(r),
        o = function(e) {
          return function(t) {
            var n = t.state,
              r = t.forField,
              o = t.className,
              i = void 0 === o ? "red-500 error-messages" : o,
              c = ("string" == typeof r ? [r] : r)
                .filter(function(e) {
                  return !(!n.touched[e] || !n.errors[e]);
                })
                .map(function(e) {
                  return n.errors[e];
                })
                .reduce(function(e, t) {
                  return e.concat(t);
                }, []);
            if (0 === c.length) return null;
            return a.a.createElement(
              "ul",
              { className: i },
              c.map(function(t) {
                return a.a.createElement("li", { key: t }, e[(n = t)] || n);
                var n;
              })
            );
          };
        };
    },
    XLBa: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return f;
      });
      var r,
        a = n("vpQ4"),
        o = n("+2Rf"),
        i = n.n(o),
        c = n("a+N5"),
        u = n.n(c),
        s = n("zm9w");
      function l(e, t) {
        if (u.a.isArray(e)) {
          var n = u()(e).map(function(e) {
            return (function(e, t) {
              var n, r;
              return (
                (n = u()(e).map(function(e, n) {
                  var a = !1;
                  return (
                    n.match(/^\!/) && ((a = !0), (n = n.replace(/^\!/, ""))),
                    u.a.isArray(e) || (e = [e]),
                    (e = u()(e).map(function(e) {
                      return e + "";
                    })),
                    (r = u()(e).include(t[n] + "")),
                    a ? !r : r
                  );
                })),
                u()(n).inject(function(e, t) {
                  return e || t;
                }, n[0])
              );
            })(e, t);
          });
          return u()(n).inject(function(e, t) {
            return e && t;
          }, n[0]);
        }
      }
      r = {
        number: function(e) {
          return (
            (e = Object(a.a)({ precision: 0 }, e)),
            s.a.format_number(e.value, u.a.omit(e, "format", "value"))
          );
        },
        distance_date: function(e) {
          return s.a.time_ago_in_words(e.value);
        }
      };
      var d = function(e) {
        var t,
          n = e.data("format");
        (t =
          (n = e.data("format")) && "function" == typeof r[n]
            ? r[n](e.data())
            : e.data("value")),
          e.html(t);
      };
      function p(e, t, n) {
        i()(e)
          .find("." + t + n.id)
          .each(function(e, t) {
            !(function(e, t) {
              var n,
                r,
                a = "",
                o = i()(e),
                c = o.data("conditions"),
                u = o.attr("itemprop");
              void 0 !== u
                ? (a = u.match(/\[(\w*)\]/)[1])
                : o.data("attr") && (a = o.data("attr")),
                void 0 !== c
                  ? ("string" == typeof c && (c = JSON.parse(c)),
                    (n = (r = l(c, t)) ? JSON.parse(o.data("render")) : ""),
                    o.data("evaluation") !== r &&
                      (o.html(n),
                      o.data("evaluation", r),
                      n.length && p(o, "Project", t)))
                  : void 0 !== a &&
                    void 0 !== t[a] &&
                    (o.data("value", t[a]), o.attr("data-value", t[a]), d(o));
            })(t, n);
          });
      }
      var f = function(e, t) {
        p(document, e, t);
      };
      function m(e) {
        (this.template = e), (this.conditions = []);
      }
      function h(e) {
        var t;
        return "string" == typeof e && (((t = {})[e] = !0), (e = t)), e;
      }
      (m.prototype.if = function(e) {
        return this.condition("and", !0, e), this;
      }),
        (m.prototype.and = m.prototype.if),
        (m.prototype.if_not = function(e) {
          return this.condition("and", !1, e), this;
        }),
        (m.prototype.unless = m.prototype.if_not),
        (m.prototype.and_not = m.prototype.if_not),
        (m.prototype.or = function(e) {
          return this.condition("or", !0, e), this;
        }),
        (m.prototype.or_not = function(e) {
          return this.condition("or", !1, e), this;
        }),
        (m.prototype.then = function() {
          var e = this;
          return function() {
            return function(t, n) {
              return (e.value = n(t)), e.html();
            };
          };
        }),
        (m.prototype.condition = function(e, t, n) {
          var r, a;
          return (
            u.a.isObject(n) || (((r = {})[n] = !0), (n = r)),
            !1 === t &&
              u.a.each(u()(n).keys(), function(e) {
                (n["!" + e] = n[e]), delete n[e];
              }),
            "or" === e
              ? ((a = h(this.conditions[this.conditions.length - 1])),
                (n = h(n)),
                (this.conditions[this.conditions.length - 1] = i.a.extend(
                  !0,
                  a,
                  n
                )))
              : "and" === e && this.conditions.push(n),
            this
          );
        }),
        (m.prototype.evaluation = function() {
          return (
            void 0 === this.cached_evaluation &&
              (this.cached_evaluation = l(
                this.conditions,
                this.template.proxy
              )),
            this.cached_evaluation
          );
        }),
        (m.prototype.content = function() {
          return this.evaluation() ? this.value : "";
        }),
        (m.prototype.html = function() {
          var e = i()("<data>");
          return (
            e.attr(this.html_options()), e.html(this.content()), e[0].outerHTML
          );
        }),
        (m.prototype.html_options = function() {
          return {
            class: this.template.class_name,
            "data-conditions": JSON.stringify(this.conditions),
            "data-render": JSON.stringify(this.value),
            "data-evaluation": l
          };
        });
    },
    XM0S: function(e, t, n) {
      "use strict";
      var r = n("1OyB"),
        a = n("md7G"),
        o = n("foSv"),
        i = n("Ji7U"),
        c = n("kHIg"),
        u = n("+DSo");
      Object(c.a)(Error);
      t.a = function(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = Object(u.c)(e, t, r);
        return (
          void 0 === a &&
            ((a = Object(u.d)(t)), console.warn("I18n key is missing: ", t)),
          "string" == typeof a &&
            ((n = r),
            (a = a
              .replace(u.a, function(e, t) {
                return null == n[t] ? e : n[t];
              })
              .replace(u.b, function(e, t) {
                return null == n[t] ? e : n[t];
              }))),
          a
        );
      };
    },
    aNAf: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var r = n("o3IG");
      function a() {
        return (
          Object(r.b)("ios_mp_distinct_id") ||
          Object(r.b)("vis") ||
          Object(r.c)(
            "vis",
            [
              Math.floor(1e20 * Math.random())
                .toString(16)
                .slice(0, 16),
              Math.floor(1e20 * Math.random())
                .toString(16)
                .slice(0, 16),
              Math.floor(1e20 * Math.random())
                .toString(16)
                .slice(0, 16)
            ].join("-") + "v1",
            new Date(2025, 12, 31),
            "/"
          )
        );
      }
    },
    bWEs: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "toggleSelect", function() {
          return r;
        }),
        n.d(t, "onBlur", function() {
          return a;
        }),
        n.d(t, "closeSelect", function() {
          return o;
        }),
        n.d(t, "changeSelectedIndex", function() {
          return i;
        }),
        n.d(t, "changeHighlightedIndex", function() {
          return c;
        }),
        n.d(t, "onKeyDown", function() {
          return u;
        }),
        n.d(t, "onListScroll", function() {
          return s;
        }),
        n.d(t, "noopAction", function() {
          return l;
        }),
        n.d(t, "selectedValueUpdated", function() {
          return d;
        });
      var r = function() {
          return { type: "TOGGLE_SELECT" };
        },
        a = function() {
          return { type: "ON_BLUR" };
        },
        o = function() {
          return { type: "CLOSE_SELECT" };
        },
        i = function(e, t) {
          return {
            type: "CHANGE_SELECTED_INDEX",
            newSelectedIndex: e,
            trackingId: t
          };
        },
        c = function(e) {
          return { type: "CHANGE_HIGHLIGHTED_INDEX", newHighlightedIndex: e };
        },
        u = function(e, t) {
          return { type: "ON_KEYDOWN", keyCode: e, options: t };
        },
        s = function() {
          return { type: "ON_LIST_SCROLL" };
        },
        l = function() {
          return { type: "NOOP" };
        },
        d = function(e) {
          return { type: "SELECT_ON_VALUE_UPDATE", value: e };
        };
    },
    "c6/r": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("4LGs"),
        a = {
          "&#39;": "'",
          "&#96;": "`",
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#x27;": "'",
          "&#x60;": "`",
          "&#x2F;": "/",
          "\u2028": " ",
          "\u2029": " "
        },
        o = function(e) {
          return Object(r.a)(a, e);
        };
    },
    cDWt: function(e, t, n) {
      "use strict";
      function r() {}
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        this.value = e;
      }
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        this.value = e;
      }
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return o;
        }),
        (a.prototype = new r()),
        (o.prototype = new r()),
        (a.prototype.isSuccess = !0),
        (a.prototype.isFailure = !1),
        (o.prototype.isSuccess = !1),
        (o.prototype.isFailure = !0),
        (a.prototype.toString = function() {
          return "Validation.Success(" + this.value + ")";
        }),
        (o.prototype.toString = function() {
          return "Validation.Failure(" + this.value + ")";
        }),
        (a.prototype.concat = function(e) {
          return e;
        }),
        (o.prototype.concat = function(e) {
          return e.isSuccess ? this : o(this.value.concat(e.value));
        });
    },
    dIzW: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "f", function() {
          return l;
        }),
        n.d(t, "g", function() {
          return d;
        }),
        n.d(t, "h", function() {
          return p;
        });
      var r = n("88ec"),
        a = n("2UXI"),
        o = function() {
          Object(a.c)("Canceled Apple Pay Sheet", {
            context: Object(r.a)(window.location.pathname)
          });
        },
        i = function(e) {
          var t = e.type;
          Object(a.c)("Apple Pay Kickstarter Errored", {
            type: t,
            context: Object(r.a)(window.location.pathname)
          }),
            Object(a.c)("Errored Apple Pay Kickstarter", {
              type: t,
              context: Object(r.a)(window.location.pathname)
            });
        },
        c = function(e) {
          var t = e.type;
          Object(a.c)("Apple Pay Errored Reward Continue", {
            type: t,
            context: Object(r.a)(window.location.pathname)
          });
        },
        u = function() {
          Object(a.c)("Apple Pay Shipping Selection Errored", {
            context: Object(r.a)(window.location.pathname)
          });
        },
        s = function(e) {
          var t = e.type;
          Object(a.c)("Apple Pay Stripe Token Errored", {
            type: t,
            context: Object(r.a)(window.location.pathname)
          }),
            Object(a.c)("Errored Apple Pay Stripe Token", {
              type: t,
              context: Object(r.a)(window.location.pathname)
            });
        },
        l = function() {
          Object(a.c)("Showed Apple Pay Buttons", {
            context: Object(r.a)(window.location.pathname)
          });
        },
        d = function() {
          Object(a.c)("Apple Pay Show Sheet", {
            context: Object(r.a)(window.location.pathname)
          }),
            Object(a.c)("Showed Apple Pay Sheet", {
              context: Object(r.a)(window.location.pathname)
            });
        },
        p = function() {
          Object(a.c)("Apple Pay Stripe Token Created", {
            context: Object(r.a)(window.location.pathname)
          }),
            Object(a.c)("Created Apple Pay Stripe Token", {
              context: Object(r.a)(window.location.pathname)
            });
        };
    },
    eEls: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return i;
        });
      var r = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(function(e, t) {
            return function() {
              return e(t.apply(void 0, arguments));
            };
          });
        },
        a = function(e) {
          return function() {
            return e;
          };
        },
        o = function(e) {
          return e;
        },
        i = function() {};
    },
    gN63: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      }),
        n.d(t, "b", function() {
          return l;
        }),
        n.d(t, "c", function() {
          return d;
        }),
        n.d(t, "e", function() {
          return p;
        }),
        n.d(t, "f", function() {
          return f;
        }),
        n.d(t, "d", function() {
          return m;
        });
      var r = n("vpQ4"),
        a = n("gCJq"),
        o = n("n+nq"),
        i = n("PhMr"),
        c = n("0RKZ"),
        u = function(e) {
          return s(e)[1];
        },
        s = function(e) {
          var t = atob(e).split("-");
          if (2 == t.filter(String).length) return t;
          throw new Error("Invalid GraphQL RelayId");
        },
        l = function(e, t) {
          return Object(c.a)("".concat(e, "-").concat(t));
        },
        d = function(e, t, n) {
          return p(e, t, n);
        },
        p = function(e, t, n) {
          return (
            (function(e) {
              return e && "string" != typeof e && "Document" === e.kind;
            })(e) && (e = Object(a.print)(e)),
            fetch("/graph", {
              method: "POST",
              body: JSON.stringify(Object(r.a)({ query: e, variables: t }, n)),
              credentials: "same-origin",
              headers: {
                "X-CSRF-Token": Object(o.b)(document),
                "Content-Type": "application/json"
              }
            })
              .then(function(e) {
                return 200 == e.status
                  ? Promise.resolve(e)
                  : Promise.reject(new Error(e.statusText));
              })
              .then(Object(i.a)("json"))
          );
        },
        f = function(e, t) {
          return new Promise(function(n, r) {
            p(e, t, {})
              .then(function(e) {
                e.errors ? r(e.errors) : n(e.data);
              })
              .catch(function(e) {
                return r(e);
              });
          });
        },
        m = function(e, t, n) {
          return p(e, t, n);
        };
    },
    itcf: function(e, t, n) {
      "use strict";
      var r = n("yQm5"),
        a = n.n(r),
        o = function(e) {
          return "undefined" != typeof api_oauth_token
            ? a()(e)
                .addQuery("oauth_token", api_oauth_token)
                .toString()
            : e;
        };
      (window.oauth_url = o), (t.a = o);
    },
    jX8l: function(e, t) {
      (window.KSR = window.KSR || {}),
        (window.KSR.store = window.KSR.store || {});
      var n = {};
      (window.KSR.store.isSupported = function() {
        try {
          var e = "storagetest",
            t = window.localStorage;
          return t.setItem(e, "1"), t.removeItem(e), !0;
        } catch (e) {
          return !1;
        }
      }),
        (window.KSR.store.getItem = function(e) {
          return window.KSR.store.isSupported()
            ? window.localStorage.getItem.apply(window.localStorage, arguments)
            : e in n
            ? n[e]
            : null;
        }),
        (window.KSR.store.removeItem = function(e) {
          window.KSR.store.isSupported()
            ? window.localStorage.removeItem.apply(
                window.localStorage,
                arguments
              )
            : delete n[e];
        }),
        (window.KSR.store.setItem = function(e, t) {
          window.KSR.store.isSupported()
            ? window.localStorage.setItem.apply(window.localStorage, arguments)
            : (n[e] = String(t));
        });
    },
    l9zw: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return d;
      }),
        n.d(t, "d", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return f;
        }),
        n.d(t, "e", function() {
          return m;
        }),
        n.d(t, "a", function() {
          return h;
        }),
        n.d(t, "f", function() {
          return b;
        });
      var r = n("wx14"),
        a = n("Ff2n"),
        o = n("q1tI"),
        i = n.n(o),
        c = n("/IHD"),
        u = n("HU7/"),
        s = {
          helvetica: {
            sizes: {
              "headline-500": "type-38 type-48-sm type-60-md type-100-lg",
              "headline-400": "type-38 type-48-sm type-60-md type-80-lg",
              "headline-300": "type-21 type-38-md type-48-lg",
              "headline-200": "type-24 type-28-md type-38-lg",
              "headline-100": "type-21 type-24-md type-28-lg",
              "subhead-600": "type-18 type-21-md",
              "subhead-500": "type-16 type-21-md",
              "subhead-400": "type-14 type-21-md",
              "subhead-300": "type-16 type-18-md",
              "subhead-200": "type-14 type-18-md",
              "body-200": "type-14 type-16-md",
              "body-100": "type-13 type-14-md",
              "caption-200": "type-12 type-13-md",
              "caption-100": "type-12"
            },
            variants: { italic: "text-italic" },
            weights: {
              light: "light",
              normal: "normal",
              medium: "medium",
              bold: "bold"
            }
          }
        },
        l = function(e) {
          var t = e.atoms,
            n = void 0 === t ? [] : t,
            r = e.children,
            a = e.color,
            o = e.font,
            c = void 0 === o ? s.helvetica : o,
            u = e.italic,
            l = void 0 !== u && u,
            d = e.level,
            p = e.style,
            f = e.tag,
            m = e.type,
            h = e.weight,
            b = d ? "h".concat(d) : f,
            g = (m ? [c.sizes[m]] : [])
              .concat(a ? [a] : [])
              .concat(l ? [c.variants.italic] : [])
              .concat(h ? [c.weights[h]] : [])
              .concat(n)
              .join(" ");
          return i.a.createElement(b, { style: p, className: g }, r);
        },
        d = function(e) {
          var t = e.level,
            n = void 0 === t ? 3 : t,
            o = Object(a.a)(e, ["level"]);
          return i.a.createElement(u.b, null, function(e) {
            return i.a.createElement(
              l,
              Object(r.a)({ level: n }, o, {
                atoms: Object(c.b)(o.atoms, e.header.atoms)
              }),
              o.children
            );
          });
        },
        p = function(e) {
          return i.a.createElement(u.b, null, function(t) {
            return i.a.createElement(
              l,
              Object(r.a)({}, e, {
                atoms: Object(c.b)(e.atoms, t.body.atoms),
                tag: "p"
              }),
              e.children
            );
          });
        },
        f = function(e) {
          return i.a.createElement(u.b, null, function(t) {
            return i.a.createElement(
              l,
              Object(r.a)({}, e, {
                atoms: Object(c.b)(e.atoms, t.form.atoms),
                tag: "label"
              }),
              e.children
            );
          });
        },
        m = function(e) {
          return i.a.createElement(
            l,
            Object(r.a)({}, e, { tag: "span" }),
            e.children
          );
        },
        h = function(e) {
          return i.a.createElement(u.b, null, function(t) {
            return i.a.createElement(
              l,
              Object(r.a)({}, e, {
                atoms: Object(c.b)(e.atoms, t.body.atoms),
                tag: "div"
              }),
              e.children
            );
          });
        },
        b = function(e) {
          return i.a.createElement(u.b, null, function(t) {
            return i.a.createElement(
              l,
              Object(r.a)({}, e, {
                atoms: Object(c.b)(e.atoms, t.body.atoms),
                tag: "strong",
                weight: "medium"
              }),
              e.children
            );
          });
        };
    },
    lTkF: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n("1OuE"),
        a = n("q1tI"),
        o = n.n(a),
        i = function(e) {
          var t = e.format,
            n = e.date;
          return o.a.createElement("time", { dateTime: n }, Object(r.a)(t, n));
        };
    },
    "n+nq": function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return o;
        });
      var r = n("MgNI"),
        a = function(e) {
          return r.maybe
            .fromNullable(e.querySelector('meta[name="csrf-token"]'))
            .chain(function(e) {
              return r.maybe.fromNullable(e.getAttribute("content"));
            })
            .getOrElse("");
        },
        o = function(e) {
          return { "X-CSRF-Token": a(e) };
        };
    },
    o2X6: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "loadAsync", function() {
          return r;
        }),
        n.d(t, "startFetchTimer", function() {
          return a;
        }),
        n.d(t, "timerExpired", function() {
          return o;
        }),
        n.d(t, "onLoadSuccess", function() {
          return i;
        }),
        n.d(t, "onLoadFailure", function() {
          return c;
        }),
        n.d(t, "noopAction", function() {
          return u;
        });
      var r = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return { type: "ASYNC_LOAD_INIT", queryArgs: t };
        },
        a = function(e) {
          return { type: "ASYNC_START_TIMER", queryArgs: e };
        },
        o = function(e) {
          return { type: "ASYNC_TIMER_EXPIRED", queryArgs: e };
        },
        i = function(e) {
          return { type: "ASYNC_LOAD_SUCCESS", data: e };
        },
        c = function(e) {
          return { type: "ASYNC_LOAD_FAIL", queryArgs: e };
        },
        u = function() {
          return { type: "NOOP" };
        };
    },
    o3IG: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return c;
      }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return s;
        });
      var r = n("ODXe"),
        a = n("MgNI"),
        o = function(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          return [
            "".concat(e, "=").concat(encodeURIComponent(t)),
            i(n),
            "path=/"
          ]
            .filter(function(e) {
              return e;
            })
            .join("; ");
        },
        i = function(e) {
          return a.maybe
            .fromNullable(e)
            .map(function(e) {
              return "expires=".concat(e.toGMTString());
            })
            .getOrElse(null);
        },
        c = function(e) {
          return (function(e, t) {
            return t
              .split(/; */)
              .map(function(e) {
                return e.split("=");
              })
              .reduce(function(t, n) {
                var a = Object(r.a)(n, 2),
                  o = a[0],
                  i = a[1];
                return o == e ? decodeURIComponent(i) : t;
              }, null);
          })(e, document.cookie);
        },
        u = function(e, t, n) {
          return (document.cookie = o(e, t || "", n ? new Date(n) : null));
        },
        s = function(e) {
          return (document.cookie = (function(e) {
            return o(e, "", new Date(0));
          })(e));
        };
      "undefined" != typeof window &&
        ((window.read_cookie = c),
        (window.write_cookie = u),
        (window.destroy_cookie = s));
    },
    pj8f: function(e, t, n) {
      "use strict";
      var r = n("N3su"),
        a = n.n(r),
        o = n("KZo6");
      if (
        (n.d(t, "a", function() {
          return a.a;
        }),
        window.honeybadgerConfiguration)
      ) {
        var i = window.honeybadgerConfiguration;
        (window.location &&
          window.location.hostname &&
          /(kickstarter\.com|d\.rip)$/.test(window.location.hostname)) ||
          (i.disabled = !0),
          a.a.configure(i);
      }
      "function" == typeof a.a.setContext && a.a.setContext(Object(o.a)());
      "function" == typeof a.a.beforeNotify &&
        a.a.beforeNotify(function(e) {
          return (
            !(Math.random() > 0.01) &&
            (window.location &&
            window.location.hostname &&
            /(ksr|drip)\.test|localhost/.test(window.location.hostname)
              ? (console.error("Honeybadger in development", e), !1)
              : void 0)
          );
        });
    },
    qcI4: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "d", function() {
          return l;
        }),
        n.d(t, "e", function() {
          return d;
        }),
        n.d(t, "f", function() {
          return p;
        }),
        n.d(t, "g", function() {
          return f;
        });
      var r = n("a+N5"),
        a = n.n(r),
        o = n("itcf"),
        i = n("XLBa"),
        c = n("qtWx").a.extend();
      c.on_initialize(function() {
        this.data.id && (this.constructor.records[this.data.id] = this);
      }),
        a.a.extend(c, {
          records: {},
          find: function(e) {
            var t = this;
            return a.a.isArray(e)
              ? a.a.compact(
                  a.a.map(e, function(e) {
                    return t.records[e];
                  })
                )
              : this.records[e];
          },
          every: function(e) {
            a.a.each(this.records, e),
              this.listen("new", function(t) {
                e.call(this, t.new);
              });
          },
          has: function(e, t) {
            if (void 0 === this.prototype["has_" + e]) {
              var n = t.through;
              (this.prototype[e] = []),
                this.on_initialize(function() {
                  this.on_change(e + "_fetched", function(t) {
                    var r = t[e + "_fetched"] || [],
                      o = this[e],
                      i = a.a.compact(
                        a.a.map(r, function(e) {
                          if (e && e.id && !a.a.include(o, e.id))
                            return new window[n](e).get("id");
                        })
                      );
                    this["set_" + e](a.a.union(o, i));
                  });
                }),
                (this.prototype["get_" + e] = function() {
                  return window[n].find(this[e]);
                }),
                (this.prototype["has_" + e] = function(t) {
                  return (
                    (t = r(t)).length && 0 === a()(this[e]).difference(t).length
                  );
                }),
                (this.prototype["add_" + e] = function(t) {
                  (t = r(t)),
                    (t = a()(t).difference(this[e])).length &&
                      this["set_" + e](a.a.union(this[e], t));
                }),
                (this.prototype["remove_" + e] = function(t) {
                  (t = r(t)),
                    (t = a()(t).intersection(this[e])).length &&
                      this["set_" + e](a()(this[e]).difference(t));
                }),
                (this.prototype["set_" + e] = function(t) {
                  if (
                    ((t = r(t)),
                    !a.a.isEqual(
                      a.a.clone(t).sort(),
                      a.a.clone(this[e]).sort()
                    ))
                  ) {
                    this[e] = t;
                    var n = {};
                    (n[e] = t), this._broadcast(n);
                  }
                });
            }
            function r(e) {
              return (
                "object" != typeof e ? (e = [e]) : e.get && (e = [e.get("id")]),
                e
              );
            }
          }
        });
      var u = c.extend(),
        s = c.extend(),
        l = c.extend(),
        d = c.extend(),
        p = c.extend(),
        f = c.extend();
      d.on_initialize(function() {
        "function" == typeof i.a &&
          this.on_change(function() {
            Object(i.a)("Project", this.get());
          });
      }),
        d.has("creator", { through: "User" }),
        d.has("backers", { through: "User" }),
        d.set_computed_value(
          "usd_pledged",
          function() {
            return this.pledged * this.static_usd_rate;
          },
          { changes_on: ["pledged"] }
        ),
        d.set_computed_value(
          "convert_pledged",
          function() {
            return this.pledged * this.fx_rate;
          },
          { changes_on: ["pledged"] }
        ),
        p.has("created_projects", { through: "Project" }),
        p.has("backed_projects", { through: "Project" }),
        p.has("backings", { through: "Backing" }),
        (p.prototype.api_url = function(e, t) {
          var n = this.get("urls").api.user;
          if (n)
            return (
              "string" == typeof e &&
                (n = n.replace(/([^\?]*)(.*)/, function(t, n, r) {
                  return n + "/" + e + r;
                })),
              (t || (void 0 === t && !0 === e)) &&
                api_oauth_token &&
                (n = Object(o.a)(n).replace(/http:/, "https:")),
              n
            );
        }),
        l.on_initialize(function() {
          "function" == typeof i.a &&
            this.on_change(function() {
              Object(i.a)("Comment", this.get());
            });
        }),
        s.set_computed_value(
          "net_amount",
          function() {
            return this.amount - this.shipping_amount;
          },
          { changes_on: ["shipping_amount", "amount"] }
        );
    },
    qtWx: function(e, t, n) {
      "use strict";
      var r = n("a+N5"),
        a = n.n(r),
        o = n("+2Rf"),
        i = n.n(o);
      function c() {}
      (c.prototype.initialize = function() {}),
        (c.extend = function(e) {
          var t = function() {
            this.initialize.apply(this, arguments);
          };
          for (var n in this)
            this.hasOwnProperty(n) &&
              (a.a.isFunction(this[n])
                ? (t[n] = this[n])
                : (t[n] = a.a.clone(this[n])));
          function r() {
            this.constructor = t;
          }
          return (
            (r.prototype = this.prototype),
            (t.prototype = new r()),
            (t.__super__ = this.prototype),
            e && (t.prototype.initialize = e),
            t
          );
        });
      var u = c.extend(function(e) {
        var t = this,
          n = arguments;
        (this.data = {}),
          e && this.set(e),
          a.a.each(this.constructor.initializers, function(e) {
            e.apply(t, n);
          }),
          this.data.id &&
            this.constructor.records &&
            (this.constructor.records[this.data.id] = this),
          this.constructor._broadcast({ new: this.data });
      });
      (u._computed_values = {}),
        a.a.extend(u, {
          listen: function(e, t) {
            var n = this;
            if (
              (a.a.isObject(e) &&
                a.a.each(e, function(e, t) {
                  n.listen(t, e);
                }),
              void 0 === this.listeners && (this.listeners = {}),
              void 0 === this.listeners._global &&
                (this.listeners._global = []),
              "function" != typeof e)
            )
              return (
                void 0 === this.listeners[e] && (this.listeners[e] = []),
                this.listeners[e].push(t),
                this
              );
            this.listeners._global.push(e);
          },
          _broadcast: function(e, t, n) {
            var r;
            void 0 === this.listeners && (this.listeners = {}),
              void 0 === this.listeners._global &&
                (this.listeners._global = []);
            var o = this;
            if (
              ((t = t || ""),
              a.a.each(a.a.keys(e), function(r) {
                "object" != typeof e[r] ||
                  null === e[r] ||
                  a.a.isArray(e[r]) ||
                  o._broadcast(e[r], t + r + ".", n),
                  void 0 !== o.listeners[t + r] &&
                    a.a.each(o.listeners[t + r], function(t) {
                      t.call(o, e, n);
                    });
              }),
              !t)
            )
              for (r = 0; r < this.listeners._global.length; r += 1)
                this.listeners._global[r].call(this, e, n);
          },
          on_initialize: function(e) {
            void 0 === this.initializers && (this.initializers = []),
              this.initializers.push(e);
          },
          get_computed_values: function() {
            return this._computed_values;
          },
          set_computed_value: function(e, t, n) {
            var r = this;
            (this._computed_values[e] = t),
              n &&
                a.a.isArray(n.changes_on) &&
                a.a.each(n.changes_on, function(t) {
                  r.prototype.on_change(t, function() {
                    var t = {};
                    (t[e] = this.get(e)), this._broadcast(t);
                  });
                });
          }
        }),
        (u.prototype.on_change = u.prototype.listen = u.listen),
        (u.prototype.change = function() {
          this._broadcast({});
        }),
        (u.prototype._broadcast = u._broadcast),
        (u.prototype.set = function(e, t, n) {
          var r, o;
          return (
            "object" == typeof e
              ? ((r = e), (n = t))
              : (r =
                  "string" == typeof e
                    ? (function e(t, n) {
                        var r = {},
                          a = t.shift();
                        return t.length ? (r[a] = e(t, n)) : (r[a] = n), r;
                      })(e.split("."), t)
                    : {}),
            n || (n = {}),
            (o = (function e(t, n) {
              var r = {};
              for (var a in n)
                n.hasOwnProperty(a) &&
                  ("object" == typeof n[a] && null !== n[a]
                    ? (r[a] = t ? e(t[a], n[a]) : n[a])
                    : (t && t[a] === n[a]) || (r[a] = n[a]));
              return r;
            })(this.data, r)),
            n.overwrite
              ? (this.data = a.a.extend(this.data, r))
              : (this.data = i.a.extend(!0, this.data, r)),
            (void 0 !== n.silent && n.silent) || this._broadcast(o, void 0, n),
            this
          );
        }),
        (u.prototype.replace = function(e, t, n) {
          return (
            ((n = n || {}).silent = !0),
            this.set(e, null, n),
            delete n.silent,
            this.set(e, t, n)
          );
        }),
        (u.prototype.get = function(e) {
          if ("string" == typeof e) {
            if ("function" == typeof this.constructor.get_computed_values()[e])
              return this.constructor.get_computed_values()[e].call(this.data);
            var t = e.split("."),
              n = this.data;
            return (
              a.a.each(t, function(e) {
                n = n[e];
              }),
              a.a.clone(n)
            );
          }
          return i.a.extend(!0, {}, this.data, this.compute_values());
        }),
        (u.prototype.compute_values = function() {
          var e = this.data,
            t = {};
          return (
            a.a.each(this.constructor.get_computed_values(), function(n, r) {
              t[r] = n.call(e);
            }),
            t
          );
        });
      t.a = u;
    },
    riAN: function(e, t, n) {
      "use strict";
      n.d(t, "h", function() {
        return r;
      }),
        n.d(t, "f", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "d", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return l;
        }),
        n.d(t, "i", function() {
          return d;
        }),
        n.d(t, "g", function() {
          return c;
        });
      var r = {
          type: "visa",
          patterns: ["4", "450823", "450875", "450878"],
          lengths: [13, 16],
          cvcLengths: [3],
          luhn: !0
        },
        a = {
          type: "mastercard",
          patterns: [
            "51",
            "52",
            "53",
            "54",
            "55",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27"
          ],
          lengths: [16],
          cvcLengths: [3],
          luhn: !0
        },
        o = {
          type: "amex",
          patterns: ["34", "37"],
          lengths: [15],
          cvcLengths: [3, 4],
          luhn: !0
        },
        i = { type: "diners" },
        c = { type: "unionpay" },
        u = {
          type: "discover",
          patterns: ["60", "64", "65", "622"],
          lengths: [16],
          cvcLengths: [3],
          luhn: !0
        },
        s = {
          type: "jcb",
          patterns: ["35"],
          lengths: [16],
          cvcLengths: [3],
          luhn: !0
        },
        l = {
          type: null,
          patterns: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ""],
          lengths: [16],
          cvcLengths: [3],
          luhn: !0
        },
        d = [r, a, o, u, s, l];
    },
    udTa: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = function(e, t) {
        return function() {
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return new Promise(function(n) {
            return setTimeout(function() {
              return n(t.apply(void 0, r));
            }, e);
          });
        };
      };
    },
    vqAB: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = {
        loadStatus: n("SOj7").c,
        currentFetchRetries: 0,
        maxFetchRetries: 3,
        fetchTimeout: 1e3
      };
    },
    "w/TO": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return l;
        });
      var r = n("rePB"),
        a = n("vpQ4"),
        o = n("cDWt"),
        i = function(e) {
          var t = s(e());
          return t.isSuccess ? {} : c(t.value);
        },
        c = function(e) {
          var t = e.errors;
          return Object.keys(t).reduce(function(e, n) {
            var o = t[n];
            return Object(a.a)({}, e, Object(r.a)({}, n, o.value));
          }, {});
        },
        u = function(e) {
          return s(e()).isSuccess;
        },
        s = function(e) {
          return e.reduce(function(e, t) {
            return e.concat(t);
          }, Object(o.b)());
        },
        l = function(e) {
          return function(t) {
            var n = t.state,
              r = t.fields,
              a = n.touched,
              o = n.errors,
              i = r
                .filter(function(e) {
                  return !(!a[e] || !o[e]);
                })
                .map(function(e) {
                  return o[e];
                })
                .reduce(function(e, t) {
                  return e.concat(t);
                }, [])
                .map(function(t) {
                  return e[t] || t;
                });
            return i.length > 0 ? i : null;
          };
        };
    },
    yWeZ: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return r;
      }),
        n.d(t, "e", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return o;
        }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return c;
        }),
        n.d(t, "g", function() {
          return u;
        }),
        n.d(t, "h", function() {
          return s;
        }),
        n.d(t, "i", function() {
          return l;
        }),
        n.d(t, "f", function() {
          return d;
        });
      var r = "CLOSED",
        a = "EXPANDED",
        o = "available",
        i = "backed_live",
        c = "backed_successful",
        u = "pledgeAmount",
        s = "pledgeWithNoReward",
        l = "shippingLocation",
        d = "no reward";
    },
    "z+X6": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return u;
        });
      var r = n("vpQ4"),
        a = n("KQm4"),
        o = n("ANjH"),
        i = n("0fse"),
        c = function(e, t) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "Kickstarter",
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : [];
          return (
            (c = [Object(i.d)()].concat(Object(a.a)(c)).filter(Boolean)),
            Object(o.createStore)(
              e,
              t,
              ((n = { name: r }),
              "undefined" != typeof window &&
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(n)
                : o.compose).apply(void 0, Object(a.a)(c))
            )
          );
        },
        u = function(e, t) {
          var n = t(void 0, {}),
            a = Object(r.a)({}, n, e);
          return function() {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a,
                n = arguments.length,
                r = new Array(n > 1 ? n - 1 : 0),
                o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return t.apply(void 0, [e].concat(r));
          };
        };
    },
    zm9w: function(e, t, n) {
      "use strict";
      var r = n("vpQ4"),
        a = n("4Toj"),
        o = n.n(a),
        i = n("4LGs"),
        c = {
          "'": "&#39;",
          "`": "&#96;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;"
        },
        u = function(e) {
          return Object(i.a)(c, e);
        },
        s = n("1OuE"),
        l = n("0VSk"),
        d = "undefined" != typeof window ? window.formatters : {},
        p = Object(r.a)({}, d, {
          currency_symbol: function(e, t) {
            return "USD" == e && t && "international" == t.usd_type
              ? "US" + this.currency_symbol_mappings[e] + " "
              : this.currency_symbol_mappings[e];
          },
          currency_symbol_mappings: {
            AUD: "AU$ ",
            CAD: "CA$ ",
            CHF: "CHF ",
            DKK: "DKK ",
            EUR: "€",
            GBP: "£",
            HKD: "HK$ ",
            JPY: "¥",
            MXN: "MX$ ",
            NOK: "NOK ",
            NZD: "NZ$ ",
            SEK: "SEK ",
            SGD: "S$ ",
            USD: "$"
          },
          money: function(e, t) {
            return (
              (t = Object(r.a)(
                {
                  separator: l.default.t("number.currency.format.separator"),
                  delimiter: l.default.t("number.currency.format.delimiter"),
                  format: l.default.t("number.currency.format.format")
                },
                t
              )),
              isNaN(t.precision) &&
                (t.precision = l.default.t("number.currency.format.precision")),
              "truncate_zeros" === t.type &&
                (t.precision = parseFloat(e) % 1 == 0 ? 0 : 2),
              this.interpolate(t.format, {
                n: this.format_number(e, t),
                u: this.currency_symbol(t.currency, t)
              })
            );
          },
          shorter_money: function(e, t) {
            return (
              void 0 === t && (t = {}),
              e < 100
                ? (t.precision = 2)
                : ((t.precision = 0), (e = Math.floor(e))),
              this.money(e, t)
            );
          },
          percent: function(e, t) {
            return (
              (t = Object(r.a)(
                {
                  delimiter: l.default.t("number.percentage.format.delimiter"),
                  format: l.default.t("number.percentage.format.format")
                },
                t
              )),
              this.interpolate(t.format, { n: this.format_number(e, t) })
            );
          },
          format_number: function(e, t) {
            var n, a, o;
            return (
              (t = Object(r.a)(
                {
                  separator: l.default.t("number.format.separator"),
                  delimiter: l.default.t("number.format.delimiter")
                },
                t
              )),
              isNaN(t.precision)
                ? (t.precision = l.default.t("number.format.precision"))
                : (t.precision = Math.abs(t.precision)),
              (n =
                t.precision || t.round
                  ? Math.abs(e).toFixed(t.precision)
                  : parseInt(Math.abs(e), 10).toString()),
              (o = (a = String(parseInt(n, 10)))
                .split("")
                .reverse()
                .join("")
                .replace(
                  /(\d{3})(?=\d)/g,
                  "$1" +
                    t.delimiter
                      .split("")
                      .reverse()
                      .join("")
                )
                .split("")
                .reverse()
                .join("")),
              e < 0 && (o = "-" + o),
              t.precision &&
                (o +=
                  t.separator +
                  Math.abs(n - a)
                    .toFixed(t.precision)
                    .slice(2)),
              o
            );
          },
          interpolate: function(e, t) {
            return e.replace(/\%([\w]+)/g, function(e, n) {
              return t[n] || "";
            });
          },
          pluralize: function(e, t) {
            var n,
              r = e,
              a = [
                "zombie",
                "zombies",
                "cow()",
                "ki(i?)ne",
                "move",
                "moves",
                "sex",
                "sexes",
                "child",
                "children",
                "man",
                "men",
                "person",
                "people",
                "database",
                "databases",
                "quiz",
                "quizzes",
                "matrix",
                "matrices",
                "(vert|ind)ex",
                "(vert|ind)ices",
                "(^ox)",
                "(^ox)en",
                "(alias|status)",
                "(alias|status)es",
                "(octop|vir)us",
                "(octop|vir)i",
                "(cris|ax|test)is",
                "(cris|ax|test)es",
                "shoe",
                "shoes",
                "o",
                "oes",
                "bus",
                "buses",
                "(m|l)ouse",
                "(m|l)ice",
                "(x|ch|ss|sh)",
                "(x|ch|ss|sh)es",
                "movie",
                "movies",
                "series",
                "series",
                "([^aeiouy]|qu)y",
                "([^aeiouy]|qu)ies",
                "([lr])f",
                "([lr])ves",
                "tive",
                "tives",
                "hive",
                "hives",
                "([^f])fe",
                "([^f])ves",
                "(analy|ba|diagno|parenthe|progno|synop|the)sis",
                "(analy|ba|diagno|parenthe|progno|synop|the)ses",
                "([ti])um",
                "([ti])a",
                "news",
                "news",
                "([^s])",
                "()s"
              ],
              o = a.map(function(e) {
                return new RegExp(e + "$", "i");
              }),
              i = !1,
              c = 0;
            function u(e, n) {
              var r = a[c + (1 === t ? 0 : 1) - (c % 2)];
              return void 0 !== n && (r = r.replace(/\(.*\)/, n)), r;
            }
            function s(e, t) {
              return t.toUpperCase();
            }
            for (; !i && c < a.length; )
              (n = o[(c += 1)]),
                e.match(n) &&
                  ((i = !0),
                  (r = e.replace(n, u)),
                  e.match(/^[A-Z][^A-Z]+$/)
                    ? (r = r.replace(/^([a-z])/, s))
                    : e.match(/^[A-Z]+$/) && (r = r.toUpperCase()));
            return r;
          },
          capitalize: function(e) {
            return "string" != typeof e
              ? ""
              : e.replace(/^(\w)|\s(\w)/g, function(e) {
                  return e.toUpperCase();
                });
          },
          to_sentence: function(e, t) {
            switch (
              ((t = Object(r.a)(
                {
                  words_connector: l.default.t("support.array.words_connector"),
                  two_words_connector: l.default.t(
                    "support.array.two_words_connector"
                  ),
                  last_word_connector: l.default.t(
                    "support.array.last_word_connector"
                  )
                },
                t
              )),
              e.length)
            ) {
              case 0:
                return "";
              case 1:
                return String(e[0]);
              case 2:
                return e[0] + t.two_words_connector + e[1];
              default:
                return (
                  e.slice(0, -1).join(t.words_connector) +
                  t.last_word_connector +
                  e[e.length - 1]
                );
            }
          },
          paragraphize: function(e) {
            return (
              (e = (e = (e = u(e)).replace(/\r\n?/g, "\n")).trim()).length >
                0 &&
                (e =
                  "<p>" +
                  (e = (e = e.replace(/\n{2,}/g, "</p><p>")).replace(
                    /\n/g,
                    "<br />"
                  )) +
                  "</p>"),
              e
            );
          },
          time_ago_in_words: function(e) {
            if (!e) return "?";
            ("number" == typeof e ||
              ("string" == typeof e && e.match(/^\d+$/))) &&
              (e = parseInt(1e3 * e, 10));
            var t = e,
              n = o()(new Date(), e);
            void 0 === p.distance_date_intervals &&
              (p.distance_date_intervals = [
                { min: 5, i18n_key: "schwamm.just_now" },
                { min: 29, i18n_key: "schwamm.less_than_a_minute_ago" },
                {
                  min: 2640,
                  i18n_key: "schwamm.m_minutes_ago",
                  count_key: "m"
                },
                {
                  min: 82800,
                  i18n_key: "schwamm.about_h_hours_ago",
                  count_key: "h"
                },
                { min: 604800, i18n_key: "schwamm.d_days_ago", count_key: "d" },
                {
                  min: 15552e3,
                  i18n_key: "schwamm.on_datetime",
                  count_key: "t"
                },
                { min: 0, i18n_key: "schwamm.on_year", count_key: "y" }
              ]);
            var r = p.distance_date_intervals.sort(function(e, t) {
                return e.min - t.min;
              }),
              a = r[r.length - 1],
              i = r.reduce(function(e, t) {
                return t.min > n && e === a ? t : e;
              }, a),
              c = {
                m: Math.round(n / 60),
                h: Math.round(n / 3600),
                d: Math.round(n / 86400),
                t: Object(s.a)("MMMM D", t),
                y: Object(s.a)("LL", t)
              },
              u = l.default.t(i.i18n_key, { count: c[i.count_key] });
            return u.match(/NaN|undefined/) ? "" : u;
          }
        });
      "undefined" != typeof window && (window.formatters = p);
      t.a = p;
    }
  },
  [[62, 0, 1]]
]);
//# sourceMappingURL=project-page.a6f8a01fa346d73d2d86.js.map
