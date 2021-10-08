const array = [
  {
    "name": "Kirkland",
    "company": "ECLIPSENT",
    "registered": new Date("Mon Dec 07 2015 07:01:50 GMT+0000")
  },
  {
    "name": "Elise",
    "company": "ILLUMITY",
    "registered": new Date("Fri Mar 02 2018 11:37:56 GMT+0000")
  },
  {
    "name": "Waters",
    "company": "PERMADYNE",
    "registered": new Date("Tue Apr 09 2019 08:31:31 GMT+0000")
  },
  {
    "name": "Tanner",
    "company": "MIRACLIS",
    "registered": new Date("Wed Nov 14 2018 16:11:14 GMT+0000")
  },
  {
    "name": "Knapp",
    "company": "ENDIPIN",
    "registered": new Date("Sun Jul 30 2017 00:05:33 GMT+0000")
  },
  {
    "name": "Beverly",
    "company": "MYOPIUM",
    "registered": new Date("Thu Sep 07 2017 16:13:51 GMT+0000")
  },
  {
    "name": "Mcfarland",
    "company": "JASPER",
    "registered": new Date("Mon Sep 14 2020 10:02:15 GMT+0000")
  },
  {
    "name": "Vaughan",
    "company": "ULTRIMAX",
    "registered": new Date("Tue May 06 2014 00:08:34 GMT+0000")
  },
  {
    "name": "Parker",
    "company": "LUXURIA",
    "registered": new Date("Tue Jun 16 2020 14:13:29 GMT+0000")
  }
]


array.sort((a, b) => {
  return a.registered - b.registered
})

console.log(array)

