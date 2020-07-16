function formatDuration(seconds) {
  let t = [],
    t_rem = [],
    unit = ["second", "minute", "hour", "day", "year"];
  if (seconds === 0) return "now";
  t_rem[0] = seconds % 60;
  t[1] = (seconds - t_rem[0]) / 60;
  t_rem[1] = t[1] % 60;
  t[2] = (t[1] - t_rem[1]) / 60;
  t_rem[2] = t[2] % 24;
  t[3] = (t[2] - t_rem[2]) / 24;
  t_rem[3] = t[3] % 365;
  t_rem[4] = (t[3] - t_rem[3]) / 365;

  let len = t_rem.filter((l) => l).length;

  function stringify(timeVar, strMod) {
    return timeVar
      ? `${timeVar} ${strMod}` + `${timeVar !== 1 ? "s" : ""},`
      : "";
  }

  let i = 4;
  while (i >= 0) {
    t_rem[i] = stringify(t_rem[i], unit[i]);
    i--;
  }

  t_rem = t_rem.reverse().filter((l) => l);
  if (t_rem.length > 1) {
    let secl_el = t_rem[t_rem.length - 2];
    t_rem[t_rem.length - 2] = secl_el.substring(0, secl_el.length - 1);
    t_rem.splice(-1, 0, "and");
  }
  let last_el = t_rem[t_rem.length - 1];
  last_el = last_el.substring(0, last_el.length - 1);
  t_rem[t_rem.length - 1] = t_rem[t_rem.length - 1].substring(
    0,
    t_rem[t_rem.length - 1].length - 1
  );
  return t_rem.join(" ");
}
