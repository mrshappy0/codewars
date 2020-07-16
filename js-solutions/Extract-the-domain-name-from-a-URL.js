function domainName(url){
    let p1 = /[\w-]*(?=\.)/g, check1 = url.includes("//"), check2 = url.includes("www.")
    domExtract = index => url.slice(index).match(p1)[0]
    if(check1) return check2 ? domExtract(url.search("www.")+4) : domExtract(url.search(/[/]{2}/g)+2)
      else if (check2) return domExtract(url.search("www.") + 4)
      else return domExtract(0)
  }